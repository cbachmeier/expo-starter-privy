import {useCallback, useState} from "react";
import {
  getUserEmbeddedWallet,
  useEmbeddedWallet,
  usePrivy,
} from "@privy-io/expo";
import {useUSDCBalance} from "./useUSDCBalance";
import {ethers} from "ethers";
import {BASE_SEPOLIA_USDC_ADDRESS} from "../utils/constants";
import {Account} from "../utils/types";

export const usePayWithComment = () => {
  const {user} = usePrivy();
  const [status, setStatus] = useState<
    "pending" | "success" | "error" | undefined
  >(undefined);
  const wallet = useEmbeddedWallet();
  const account = getUserEmbeddedWallet(user);
  const {balance} = useUSDCBalance();

  const payWithComment = useCallback(
    async ({
      recipient,
      amount,
      comment,
    }: {
      recipient: Account | null;
      amount: string;
      comment?: string;
    }) => {
      if (
        wallet.status !== "connected" ||
        !account?.address ||
        !parseFloat(balance) ||
        !recipient ||
        !process.env.EXPO_PUBLIC_COMMENT_ENDPOINT
      ) {
        console.log("Wallet not connected or balance is 0");
        return;
      }
      try {
        setStatus("pending");
        const provider = new ethers.providers.Web3Provider(wallet.provider);
        const signer = provider.getSigner();
        const senderAddress = await signer.getAddress();
        const contract = new ethers.Contract(
          BASE_SEPOLIA_USDC_ADDRESS,
          ["function transfer(address to, uint256 value) public returns(bool)"],
          signer,
        );

        const amountToSend = ethers.utils.parseUnits(amount, 6);
        const transactionResponse = await contract.transfer(
          recipient.address,
          amountToSend,
        );
        await transactionResponse.wait(); // wait for transaction to be mined
        const payHash = transactionResponse.hash;

        fetch(process.env.EXPO_PUBLIC_COMMENT_ENDPOINT, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            hash: payHash,
            avatar: recipient.avatar,
            username: recipient.username,
            comment: comment,
            address: senderAddress,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        setStatus("success");

        alert(`Sent $${amount} to ${recipient.address} successfully`);
      } catch (e) {
        setStatus("error");
        console.error(e);
      }
    },
    [wallet, account?.address, balance],
  );
  return {payWithComment, status};
};
