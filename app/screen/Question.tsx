import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import * as Progress from "react-native-progress";
import { reactQuestion } from "../config/question";

export default function Question({ navigation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [iscorrect, setIsCorrect] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleNext = () => {
    if (currentQuestion === reactQuestion.length - 1) {
      navigation.navigate("Score", { score });
      return;
    }
    setIsCorrect(null);
    setSelectedOption(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleOptionPress = (pressedOption) => {
    if (selectedOption !== null) return;
    setSelectedOption(pressedOption);
    const isAnswer =
      reactQuestion[currentQuestion].correctAnswer === pressedOption;
    setIsCorrect(isAnswer);
    if (isAnswer === true) {
      setScore((prev) => prev + 10);
    }
  };

  const progress = (currentQuestion + 1) / reactQuestion.length;

  return (
    <View style={{ marginTop: 24, padding: 16 }}>
      <View style={{ marginBottom: 16, width: 100 }}>
        <Progress.Bar
          progress={progress}
          width={380}
          color='purple'
          height={20}
        />
      </View>

      <Text style={{ fontSize: 40, marginBottom: 16 }}>
        {reactQuestion[currentQuestion].question}
      </Text>

      {reactQuestion[currentQuestion].Option.map((option, index) => (
        <Pressable
          style={{
            padding: 8,
            marginVertical: 2,
            borderRadius: 2,
            borderWidth: 2,
            backgroundColor:
              option === selectedOption
                ? iscorrect
                  ? "green"
                  : "red"
                : "white",
          }}
          key={index}
          onPress={() => handleOptionPress(option)}
          disabled={selectedOption !== null}
        >
          <Text style={{ fontSize: 20 }}>{option}</Text>
        </Pressable>
      ))}

      {/* Next/Finish button */}
      <Pressable
        style={{
          backgroundColor: "purple",
          padding: 8,
          borderRadius: 10,
          marginTop: 24,
        }}
        onPress={handleNext}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 20,
            fontFamily: "bold",
          }}
        >
          {currentQuestion === reactQuestion.length - 1 ? "Finish" : "Next"}
        </Text>
      </Pressable>
    </View>
  );
}
