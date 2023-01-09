import React from "react";
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

import { Container, Box, Button } from "./styles";

const Touches = () => {
  const position = useSharedValue(100);
  const doubleTapActive = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    width: position.value,
    height: position.value,
    backgroundColor: interpolateColor(
      doubleTapActive.value,
      [0, 1],
      ["#8527e5", "#bf5a07"]
    ),
  }));

  const onPressIn = () => {
    position.value = withSpring(150);
  };

  const onPressOut = () => {
    position.value = withSpring(100);
  };

  const onGesture = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      doubleTapActive.value = withTiming(doubleTapActive.value === 0 ? 1 : 0, {
        duration: 500,
      });
    });

  // box 2
  const doubleTapActive2 = useSharedValue(0);
  const position2 = useSharedValue(100);

  const animatedStyle2 = useAnimatedStyle(() => ({
    width: position2.value,
    height: position2.value,
    backgroundColor: interpolateColor(
      doubleTapActive2.value,
      [0, 1],
      ["#8527e5", "#bf5a07"]
    ),
  }));

  const onPressIn2 = () => {
    position2.value = withSpring(150);
    doubleTapActive2.value = withTiming(doubleTapActive2.value === 0 ? 1 : 0, {
      duration: 500,
    });
  };

  const onPressOut2 = () => {
    position2.value = withSpring(100);
    doubleTapActive2.value = withTiming(doubleTapActive2.value === 0 ? 1 : 0, {
      duration: 500,
    });
  };

  return (
    <Container>
      <GestureDetector gesture={onGesture}>
        <Button onPressOut={onPressOut} onPressIn={onPressIn}>
          <Box style={animatedStyle} />
        </Button>
      </GestureDetector>

      <Button onPressOut={onPressOut2} onPressIn={onPressIn2}>
        <Box style={animatedStyle2} />
      </Button>
    </Container>
  );
};

export default Touches;
