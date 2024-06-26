import {Text, ActivityIndicator, View} from "react-native";
import {useAtom} from "jotai";
import {usePrivy} from "@privy-io/expo";

import {HomeScreen} from "./HomeScreen";
import {LoginScreen} from "./LoginScreen";
import {ProfileScreen} from "./ProfileScreen";
import {pageAtom, txAmountAtom} from "../utils/atoms";
import SearchScreen from "./SearchScreen";
import {useEffect} from "react";

export const Wrapper = () => {
  const {user, isReady} = usePrivy();
  const [page] = useAtom(pageAtom);
  const [, setAmount] = useAtom(txAmountAtom);

  useEffect(() => {
    if (page !== "search") {
      setAmount("0");
    }
  }, [page, setAmount]);

  if (!isReady) {
    return (
      <View
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" />
        <Text style={{color: "rgba(0,0,0,0.3)", marginTop: 10}}>Preparing</Text>
      </View>
    );
  }

  if (!user) {
    return <LoginScreen />;
  }

  if (page === "profile") {
    return <ProfileScreen />;
  }

  if (page === "search") {
    return <SearchScreen />;
  }

  return <HomeScreen />;
};
