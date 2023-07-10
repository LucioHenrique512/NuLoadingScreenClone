import React, {useEffect, useState} from 'react';
import * as S from './styles';
import {ProgressBar} from '../../components';
import {stepsToPercent} from '../../utils';
import {TextScroller} from './TextScroller';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from '../../navigation';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

type NavigationProps = NativeStackNavigationProp<StackParams, 'LoadingScreen'>;
type RouteProps = RouteProp<StackParams, 'LoadingScreen'>;

export const LoadingScreen: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const {params} = useRoute<RouteProps>();

  const {replace} = useNavigation<NavigationProps>();

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
      if (currentStep === steps.length - 1) {
        console.log('finish');
        replace(params.navigateOnFinish);
      }
      setCurrentStep(currentStep < steps.length - 1 ? currentStep + 1 : 0);
    }, 1000);

    return () => clearInterval(interval);
  });

  const progress = stepsToPercent(currentStep, steps.length - 1);

  return (
    <S.Container>
      <S.AnimationContainer>
        <TextScroller steps={steps} currentStep={currentStep} />
        <ProgressBar progress={progress} />
      </S.AnimationContainer>
    </S.Container>
  );
};
