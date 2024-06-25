import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
};

export const getFCMToken = async () => {
  try {
    const token = await messaging().getToken();
    console.log('FCM Token:', token);
    return token;
  } catch (error) {
    console.error('Failed to get FCM token:', error);
    return null;
  }
};

export const registerBackgroundHandler = () => {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
};

export const configureNotification = () => {
  messaging().onMessage(async remoteMessage => {
    Alert.alert(
      remoteMessage?.notification?.title ?? 'A new FCM message arrived!',
      remoteMessage?.notification?.body ?? '',
    );
  });
};

export const onNotificationOpenedApp = (
  callback: (remoteMessage: any) => void,
) => {
  return messaging().onNotificationOpenedApp(callback);
};
