import {RFPercentage} from 'react-native-responsive-fontsize';
import {styled} from 'styled-components/native';
import Animated from 'react-native-reanimated';

const barHeight = RFPercentage(1.5);

export const BarContainer = styled.View`
  width: 100%;
  height: ${barHeight}px;
  border-radius: ${barHeight / 2}px;
  background: #d9d9d9;
  overflow: hidden;
`;

export const ProgressBar = styled(Animated.View)`
  background: #9d68e6;
  width: 0%;
  height: 100%;
  border-radius: ${barHeight / 2}px;
`;
