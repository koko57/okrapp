import React from 'react';

import {Heart} from '../components/Heart.tsx';
import {View} from 'react-native';

export const SkiaScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Heart />
    </View>
  );
};
