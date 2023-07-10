import React, {useEffect, useRef} from 'react';
import * as S from './styles';
import {ListRenderItem} from 'react-native';

type IProps = {
  steps: Array<any>;
  currentStep: number;
};

export const TextScroller: React.FC<IProps> = ({steps, currentStep}) => {
  const flatListRef = useRef<any>(null);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: currentStep,
      });
    }
  }, [currentStep, flatListRef]);

  const renderItem: ListRenderItem<any> = ({index, item}) => {
    const {text} = item;
    return (
      <S.TextContainer>
        <S.Text active={currentStep + 1 === index}>{text}</S.Text>
      </S.TextContainer>
    );
  };

  return (
    <S.TextScroller
      ref={flatListRef}
      data={[{text: ''}, ...steps]}
      renderItem={renderItem}
    />
  );
};
