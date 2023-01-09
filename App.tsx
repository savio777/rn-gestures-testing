import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Pinch from "./src/components/Pinch";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Pinch />
    </GestureHandlerRootView>
  );
}
