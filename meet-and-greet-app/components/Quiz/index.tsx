import styles from "@/components/Quiz/styles";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";

const questions = [
  {
    id: 1,
    question:
      "Are you looking for someone who thrives in fast-paced startup environments and is passionate about mobile apps?",
    answer: "Yes",
  },
  {
    id: 2,
    question:
      "Are you looking for someone who prefers to avoid problem-solving challenges?",
    answer: "No",
  },
  {
    id: 3,
    question:
      "Is ownership of the mobile app development process important to you?",
    answer: "Yes",
  },
  {
    id: 4,
    question:
      "Are you looking for someone who would rather work only on iOS than cross-platform apps?",
    answer: "No",
  },
  {
    id: 5,
    question:
      "Do you think React Native is not ideal for building scalable mobile apps?",
    answer: "No",
  },
  {
    id: 6,
    question:
      "Do you want a developer who has experience with push notifications and offline capabilities?",
    answer: "Yes",
  },
];

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (answer: string) => {
    const updatedAnswers = [...answers, answer];
    setAnswers(updatedAnswers);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const renderResults = () => {
    const matchingAnswers = answers.filter(
      (answer, index) => answer === questions[index].answer
    );
    return (
      <View style={styles.resultsContainer}>
        <Text style={styles.resultsTitle}>Matching Answers</Text>
        {matchingAnswers.length === questions.length ? (
          <Text style={styles.resultsText}>
            Hooray!{"\n"} We’re a perfect match! 🎉{"\n"} All questions matched!
          </Text>
        ) : (
          <Text style={styles.resultsText}>
            Awesome! We’re {matchingAnswers.length} out of {questions.length} on
            the way to a perfect match! 💪
          </Text>
        )}

        <Button title="Restart Quiz" onPress={() => resetQuiz()} />
      </View>
    );
  };

  const resetQuiz = () => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setQuizCompleted(false);
  };

  return (
    <LinearGradient
      colors={["#BC7CE8", "#f3e6ff"]} // Light violet gradient
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Quiz time</Text>
        {quizCompleted ? (
          renderResults()
        ) : (
          <View style={styles.quizContainer}>
            <Text style={styles.questionText}>
              {questions[currentQuestionIndex].question}
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.answerButton}
                onPress={() => handleAnswer("Yes")}
              >
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.answerButton}
                onPress={() => handleAnswer("No")}
              >
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </LinearGradient>
  );
}
