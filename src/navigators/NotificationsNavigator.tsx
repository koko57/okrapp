import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainNotificationsScreen} from '../screens/MainNotificationsScreen.tsx';
import {NotificationsStackParamsList} from '../types/navigation';

const Stack = createNativeStackNavigator<NotificationsStackParamsList>();

export const NotificationsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="MainNotifications"
        component={MainNotificationsScreen}
      />
    </Stack.Navigator>
  );
};
