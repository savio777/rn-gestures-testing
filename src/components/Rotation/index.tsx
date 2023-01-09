import React from "react";
import { Text } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { Box, Button, Container } from "./styles";

const Rotation = () => {
  const rotation = useSharedValue(0);

  const rotationGesture = Gesture.Rotation().onUpdate((e) => {
    rotation.value = e.rotation;
  });

  const animatedStyleZ = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${(rotation.value / Math.PI) * 180}deg` }],
  }));

  const animatedStyleX = useAnimatedStyle(() => ({
    transform: [{ rotateX: `${(rotation.value / Math.PI) * 180}deg` }],
  }));

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${(rotation.value / Math.PI) * 180}deg` }],
  }));

  return (
    <Container>
      <Text>Z</Text>
      <GestureDetector gesture={rotationGesture}>
        <Button>
          <Box style={animatedStyleZ} />
        </Button>
      </GestureDetector>

      <Text>X</Text>
      <GestureDetector gesture={rotationGesture}>
        <Button>
          <Box style={animatedStyleX} />
        </Button>
      </GestureDetector>

      <Text>Z/X</Text>
      <GestureDetector gesture={rotationGesture}>
        <Button>
          <Box style={animatedStyle} />
        </Button>
      </GestureDetector>
    </Container>
  );
};

export default Rotation;
