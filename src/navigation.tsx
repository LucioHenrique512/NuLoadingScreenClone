import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenA, ScreenB} from './screens';

export type StackParams = {
  ScreenA: undefined;
  LoadingScreen: undefined;
  screenB: undefined;
};

const Stack = createNativeStackNavigator<StackParams>();

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenA" component={ScreenA} />
        <Stack.Screen name="screenB" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
