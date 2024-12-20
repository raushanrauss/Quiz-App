import React, { useState } from "react";
import { View, Text, Pressable, Alert } from "react-native";
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
    if (selectedOption === null) {
      Alert.alert("Please select one option");
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
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Progress.Bar
            progress={progress}
            width={null}
            color='#9f7aea'
            height={20}
          />
        </View>
      </View>

      <Text style={{ fontSize: 30, marginBottom: 16 }}>
        {reactQuestion[currentQuestion].question}
      </Text>

      {reactQuestion[currentQuestion].Option.map((option, index) => (
        <Pressable
          style={{
            padding: 8,
            marginVertical: 4,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#9f7aea",
            backgroundColor:
              option === selectedOption
                ? iscorrect
                  ? "#c6f6d5"
                  : "#fed7d7"
                : "white",
          }}
          key={index}
          onPress={() => handleOptionPress(option)}
          disabled={selectedOption !== null}
        >
          <Text style={{ fontSize: 20 }}>{option}</Text>
        </Pressable>
      ))}

      <Pressable
        style={{
          backgroundColor: "#9f7aea",
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
