import React, {useEffect, useState} from 'react';
import * as S from './styles';
import {ProgressBar} from '../../components';
import {ListRenderItem} from 'react-native';
import {stepsToPercent} from '../../utils';

export const LoadingScreen: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps = [
    {
      text: 'Ligando o motor do marea turbo',
    },
    {
      text: 'O motor quebrou',
    },
    {
      text: 'Chamando um mecanico',
    },
    {
      text: 'O mecanico concertou',
    },
    {
      text: 'Tudo pronto!',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex <= steps.length - 1 ? currentIndex + 1 : 0);
    }, 1000);

    return () => clearInterval(interval);
  });

  const renderItem: ListRenderItem<any> = ({item}) => {
    const {text} = item;
    return (
      <S.TextContainer>
        <S.Text>{text}</S.Text>
      </S.TextContainer>
    );
  };

  const progress = stepsToPercent(currentIndex, steps.length);

  return (
    <S.Container>
      <S.AnimationContainer>
        <S.TextScroller data={steps} renderItem={renderItem} />
        <ProgressBar progress={progress} />
      </S.AnimationContainer>
    </S.Container>
  );
};
