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
  card: {
    height: 550,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderColor: "#8e44ad",
    borderWidth: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#8e44ad", // Violet title color
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 18,
    color: "#333", // Dark gray for description
    textAlign: "center",
  },
  arrowContainer: {
    position: "absolute",
    bottom: 50, // Position arrows 50px from the bottom
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    paddingHorizontal: 20,
  },
  arrowLeft: {
    padding: 10,
    borderRadius: 50,
  },
  arrowRight: {
    padding: 10,
    borderRadius: 50,
  },
  arrow: {
    fontSize: 30,
    color: "gray",
  },
  swipeTitle: {
    fontSize: 20,
    color: "grey",
  },
  restartButton: {
    padding: 15,
    borderRadius: 5,
  },
  restartButtonText: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    paddingRight: 8,
  },
  restartContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
});
