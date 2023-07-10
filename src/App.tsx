import React from 'react';
import {Navigation} from './navigation';
import {View} from 'react-native';

export const App: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <Navigation />
    </View>
  );
};
