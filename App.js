import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigator';
import { HomeProvider } from './src/state/HomeContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeProvider>
        <StatusBar style="light" />
        <RootNavigator />
      </HomeProvider>
    </SafeAreaProvider>
  );
}
