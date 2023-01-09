import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import LongPress from "./src/components/LongPress";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LongPress />
    </GestureHandlerRootView>
  );
}
