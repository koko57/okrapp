import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {HomeScreen} from './src/screens/HomeScreen';
import {AnimationNavigator} from './src/navigators/AnimationsNavigator';
import {RootStackParamList} from './src/types/navigation';
import {NotificationsNavigator} from './src/navigators/NotificationsNavigator.tsx';
import {
  configureNotification,
  onNotificationOpenedApp,
  registerBackgroundHandler,
  requestUserPermission,
  getFCMToken,
} from './src/libs/Notifications/firebase.ts';
import {linking} from './src/libs/Navigation/config.ts';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const App = () => {
  useEffect(() => {
    async function setupFCM() {
      await requestUserPermission();
      const token = await getFCMToken();
      console.log('FCM Token:', token);
    }

    setupFCM();

    const unsubscribe = onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage,
      );
    });

    registerBackgroundHandler();
    configureNotification();

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer linking={linking}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Animations" component={AnimationNavigator} />
          <Stack.Screen
            name="Notifications"
            component={NotificationsNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
