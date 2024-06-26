import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    fontSize: 40,
  },
  input: {
    fontSize: 40,
    width: 400,
    padding: 10,
    borderColor: "#000",
    borderWidth: 2,
  },
  inputSm: {
    fontSize: 32,
    width: "100%",
    padding: 10,
    borderColor: "#111",
    borderWidth: 1,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch",
    paddingHorizontal: 20,
  },
  inputText: {
    fontSize: 48,
    textAlign: "center",
  },
  keypadContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "80%",
  },
  keypadButton: {
    width: "30%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
  },
  keypadButtonText: {
    fontSize: 24,
  },
  actionButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  actionButton: {
    width: "45%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#007BFF",
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "80%",
  },
  labelText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007BFF",
  },
  balanceText: {
    fontSize: 16,
    width: "auto",
  },
  recipientInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 10,
    width: "80%",
  },
  topHalf: {
    flex: 0.5,
  },
  bottomHalf: {
    flex: 0.5,
  },
  transaction: {
    flexDirection: "column",
    width: "100%",
    marginBottom: 10,
  },
  address: {
    flex: 1,
  },
  valueSend: {
    color: "red",
  },
  valueReceive: {
    color: "green",
  },
  description: {
    fontStyle: "italic",
  },
  transactionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 5,
  },
  divider: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: "gray",
  },
});
