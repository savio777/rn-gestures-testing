import React from "react";
import { Dimensions } from "react-native";
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { Box, Button, Container } from "./styles";

const START = 24;
const LIMIT = Dimensions.get("window").width - 124;

const Fling = () => {
  const position = useSharedValue(START);
  const size = useSharedValue(100);

  const directionRight = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onTouchesDown(() => {
      size.value = withTiming(size.value + 50, { duration: 500 });
    })
    .onStart(() => {
      position.value = withTiming(LIMIT, { duration: 500 });
    })
    .onEnd(() => {
      size.value = withTiming(100, { duration: 500 });
    });

  const directionLeft = Gesture.Fling()
    .direction(Directions.LEFT)
    .onStart(() => {
      position.value = withTiming(START, { duration: 500 });
    })
    .onEnd(() => {
      size.value = withTiming(100, { duration: 500 });
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
    width: size.value,
    height: size.value,
  }));

  return (
    <Container>
      <GestureDetector
        gesture={Gesture.Exclusive(directionRight, directionLeft)}
      >
        <Button>
          <Box style={animatedStyle} />
        </Button>
      </GestureDetector>
    </Container>
  );
};

export default Fling;
