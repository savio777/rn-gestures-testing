import React from "react";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { Box, Button, Container } from "./styles";

const LongPress = () => {
  const size = useSharedValue(100);

  const animatedStyle = useAnimatedStyle(() => ({
    width: size.value,
    height: size.value,
  }));

  const longPressGesture = Gesture.LongPress()
    .onTouchesDown((e) => {
      size.value = withTiming(size.value + 200, { duration: 500 });
    })
    .onFinalize(() => {
      size.value = withTiming(100, { duration: 500 });
    });

  return (
    <Container>
      <GestureDetector gesture={longPressGesture}>
        <Button>
          <Box style={animatedStyle} />
        </Button>
      </GestureDetector>
    </Container>
  );
};

export default LongPress;
