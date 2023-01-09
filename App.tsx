import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Rotation from "./src/components/Rotation";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Rotation />
    </GestureHandlerRootView>
  );
}
