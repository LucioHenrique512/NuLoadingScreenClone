import {RFPercentage} from 'react-native-responsive-fontsize';
import {styled} from 'styled-components/native';

export const Container = styled.View`
  background: #f8f8f8;
  flex: 1;
  padding: ${RFPercentage(8)}px ${RFPercentage(3)}px;
  justify-content: flex-end;
`;

export const AnimationContainer = styled.View``;

const textContainerHeight = RFPercentage(9);

export const TextContainer = styled.View`
  background: yellow;
  justify-content: flex-end;
  height: ${textContainerHeight}px;
`;

export const Text = styled.Text`
  font-size: ${RFPercentage(3.5)}px;
  font-weight: 500;
  color: #181818;
`;

export const TextScroller = styled.FlatList`
  margin-bottom: ${RFPercentage(4)}px;
  height: ${textContainerHeight}px;
`;
