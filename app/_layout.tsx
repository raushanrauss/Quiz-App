import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "./screen/Splash";
import Question from "./screen/Question";
import Score from "./screen/Score";
export default function RootLayout() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "purple" },
      }}
    >
      <Stack.Screen name='Splash' component={Splash} />
      <Stack.Screen name='Question' component={Question} />

      <Stack.Screen name='Score' component={Score} />
    </Stack.Navigator>
  );
}
