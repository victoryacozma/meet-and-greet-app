import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gradientBackground: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
    paddingBottom: 30,
  },
  quizContainer: {
    width: "80%",
    height: 550,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  questionText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  answerButton: {
    borderColor: "#BC7CE8",
    borderWidth: 3,
    padding: 15,
    borderRadius: 5,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
  resultsContainer: {
    width: "80%",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  resultsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  resultsText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 40,
  },
  linkText: {
    fontSize: 16,
    color: "#0077b5", // LinkedIn color
    textDecorationLine: "underline",
  },
  customButton: {
    flexDirection: "row",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  customButtonText: {
    color: "black", // Text color
    fontSize: 16,
    fontWeight: "bold",
    paddingRight: 8,
  },
});
