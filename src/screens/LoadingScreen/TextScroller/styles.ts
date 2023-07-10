import Animated from 'react-native-reanimated';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {styled} from 'styled-components/native';

export const textContainerHeight = RFPercentage(9);

export const TextContainer = styled.View`
  justify-content: flex-end;
  height: ${textContainerHeight}px;
`;

type TextProp = {
  active: boolean;
};

export const Text = styled.Text<TextProp>`
  font-size: ${RFPercentage(3.5)}px;
  font-weight: 500;
  color: ${({active}) => (active ? '#181818' : '#18181850')};
`;

export const TextScroller = styled(Animated.FlatList)`
  margin-bottom: ${RFPercentage(4)}px;
  height: ${textContainerHeight * 2}px;
`;
