import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, SafeAreaView} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from '../../navigation';

type NavigationProps = NativeStackNavigationProp<StackParams, 'ScreenA'>;

export const ScreenA: React.FC = () => {
  const {navigate} = useNavigation<NavigationProps>();

  return (
    <SafeAreaView>
      <Button
        onPress={() => navigate('LoadingScreen', {navigateOnFinish: 'ScreenB'})}
        title="Navegar para Loading"
      />
    </SafeAreaView>
  );
};
