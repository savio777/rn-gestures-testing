import React from "react";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { Box, Button, Container } from "./styles";

const Pan = () => {
  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);

  const size = useSharedValue(100);
  const doubleTapActive = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      positionX.value = e.translationX;
      positionY.value = e.translationY;
      size.value = withSpring(150);
    })
    .onEnd(() => {
      size.value = withSpring(100);

      doubleTapActive.value = withTiming(doubleTapActive.value === 0 ? 1 : 0, {
        duration: 500,
      });
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: positionX.value },
      { translateY: positionY.value },
    ],
    width: size.value,
    height: size.value,
    backgroundColor: interpolateColor(
      doubleTapActive.value,
      [0, 1],
      ["#8527e5", "#bf5a07"]
    ),
  }));

  return (
    <Container>
      <GestureDetector gesture={panGesture}>
        <Button>
          <Box style={animatedStyle} />
        </Button>
      </GestureDetector>
    </Container>
  );
};

export default Pan;
