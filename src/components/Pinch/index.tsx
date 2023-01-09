import React from "react";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { Box, Button, Container } from "./styles";

const Pinch = () => {
  const scale = useSharedValue(1);

  const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = e.scale;
    })
    .onEnd(() => {
      if (scale.value < 1) {
        scale.value = 1;
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Container>
      <GestureDetector gesture={pinchGesture}>
        <Button>
          <Box style={animatedStyle} />
        </Button>
      </GestureDetector>
    </Container>
  );
};

export default Pinch;
