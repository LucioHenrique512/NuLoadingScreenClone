import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoadingScreen, ScreenA, ScreenB} from './screens';

export type StackParams = {
  ScreenA: undefined;
  LoadingScreen: {navigateOnFinish: keyof StackParams};
  ScreenB: undefined;
};

const Stack = createNativeStackNavigator<StackParams>();

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenA" component={ScreenA} />
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ScreenB" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
