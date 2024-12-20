import React from "react";
import { View, Text, Button, Image, Pressable } from "react-native";

export default function Splash({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={require("../../assets/images/logo.jpeg")}
        style={{ height: "50%", aspectRatio: 1 }}
      />
      <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 20 }}>
        Instruction
      </Text>
      <View
        style={{
          backgroundColor: "#9f7aea",
          padding: 10,
          borderRadius: 10,
          height: 120,
          width: 320,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>
          Each Quiz has four option quiz
        </Text>
        <Text style={{ color: "white", fontSize: 20 }}>
          Progress will be shown at the top
        </Text>
        <Text style={{ color: "white", fontSize: 20 }}>
          Score would be shown at The End
        </Text>
      </View>
      <Pressable
        style={{
          backgroundColor: "#9f7aea",
          marginTop: 40,
          paddingHorizontal: 24,
          paddingVertical: 10,
          borderRadius: 4,
        }}
        onPress={() => navigation.navigate("Question")}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Start</Text>
      </Pressable>
    </View>
  );
}
