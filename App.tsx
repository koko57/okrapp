import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {HomeScreen} from './src/screens/HomeScreen';
import {AnimationNavigator} from './src/navigators/AnimationsNavigator';
import {RootStackParamList} from './src/types/navigation';
import {NotificationsNavigator} from "./src/navigators/NotificationsNavigator.tsx";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Animations" component={AnimationNavigator} />
          <Stack.Screen name="Notifications" component={NotificationsNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
