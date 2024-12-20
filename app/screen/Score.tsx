import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  Splash: undefined;
  Question: undefined;
  Score: { score: number };
};

export default function Score({ navigation }) {
  const route = useRoute<RouteProp<RootStackParamList, "Score">>();

  const { score } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image source={require("../../assets/images/logo.jpeg")} style={{}} />
      <Text style={{ fontSize: 20 }}>
        Congratulation!! You Scored {score} points
      </Text>
      <Pressable
        onPress={() => navigation.navigate("Splash")}
        style={{
          backgroundColor: "#9f7aea",
          padding: 8,
          borderRadius: 4,
          marginTop: 8,
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Play Again</Text>
      </Pressable>
    </View>
  );
}
