import React, {useEffect} from 'react';
import * as S from './styles';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type IProps = {
  progress?: number;
};

export const ProgressBar: React.FC<IProps> = ({progress = 0}) => {
  const animatedValue = useSharedValue(progress);

  useEffect(() => {
    animatedValue.value = withSpring(progress, {mass: 1, damping: 100});
  }, [progress, animatedValue]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${animatedValue.value}%`,
  }));

  return (
    <S.BarContainer>
      <S.ProgressBar style={animatedStyle} />
    </S.BarContainer>
  );
};
