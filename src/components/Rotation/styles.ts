import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.Pressable``;

export const Box = styled(Animated.View)`
  border-radius: 12px;
  margin-bottom: 24px;
  background-color: #8527e5;
  width: 150px;
  height: 150px;
`;
