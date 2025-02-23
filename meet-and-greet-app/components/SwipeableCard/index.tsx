import React, { useState } from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";
import Swiper from "react-native-deck-swiper";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { IconSymbol } from "@/components/ui/IconSymbol";

const cards = [
  {
    id: 1,
    title: "👋 Hello!",
    description: "I'm Victoria, a passionate mobile developer.",
  },
  {
    id: 2,
    title: "💻 Experience",
    description:
      "3+ years of React and React Native experience, plus teaching assistant experience in Object-Oriented Programming (OOP) with Java at the university.",
  },
  {
    id: 3,
    title: "🚀 Passion",
    description: "Building apps that bring value and improve lives.",
  },
  { id: 4, title: "🎯 Goal", description: "Looking for a new challenge!" },
];

export default function SwipeableCards() {
  const [cardIndex, setCardIndex] = useState(0);
  const [arrowOpacity] = useState(new Animated.Value(1));
  const [leftArrowPosition] = useState(new Animated.Value(-20));
  const [rightArrowPosition] = useState(new Animated.Value(20));

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(leftArrowPosition, {
          toValue: -40,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(leftArrowPosition, {
          toValue: -20,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(rightArrowPosition, {
          toValue: 40,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(rightArrowPosition, {
          toValue: 20,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const handleSwipe = (index: number) => {
    setCardIndex(index + 1);

    if (index >= 0) {
      Animated.timing(arrowOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const handleRestart = () => {
    setCardIndex(0); // Reset the card index to 0
    Animated.timing(arrowOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const isLastCard = cardIndex >= cards.length;

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#BC7CE8", "#f3e6ff"]} // Light violet gradient
        style={styles.gradientBackground}
      >
        {isLastCard ? (
          <View style={styles.restartContainer}>
            <TouchableOpacity
              style={styles.restartButton}
              onPress={handleRestart}
            >
              <View style={styles.row}>
                <Text style={styles.restartButtonText}>
                  Restart Presentation
                </Text>
                <IconSymbol size={28} name="arrow.clockwise" color={"white"} />
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <Swiper
              cards={cards}
              renderCard={(card) => (
                <View style={styles.card}>
                  <Text style={styles.cardTitle}>{card.title}</Text>
                  <Text style={styles.cardDescription}>{card.description}</Text>
                </View>
              )}
              onSwiped={handleSwipe}
              cardIndex={cardIndex}
              backgroundColor="transparent"
              stackSize={3}
            />
            <Animated.View
              style={[
                styles.arrowContainer,
                {
                  opacity: arrowOpacity, // Arrow opacity controlled by animation
                },
              ]}
            >
              <Animated.View
                style={[
                  styles.arrowLeft,
                  {
                    transform: [{ translateX: leftArrowPosition }], // Left arrow moves to the left
                  },
                ]}
              >
                <Text style={styles.arrow}>←</Text>
              </Animated.View>
              <Text style={styles.swipeTitle}>Swipe to see more</Text>
              <Animated.View
                style={[
                  styles.arrowRight,
                  {
                    transform: [{ translateX: rightArrowPosition }], // Right arrow moves to the right
                  },
                ]}
              >
                <Text style={styles.arrow}>→</Text>
              </Animated.View>
            </Animated.View>
          </>
        )}
      </LinearGradient>
    </SafeAreaView>
  );
}
