import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MovieStackNavigator from './src/navigator/MovieStackNavigator';
import MovieDrawerNavigator from './src/navigator/MovieDrawerNavigator';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MovieDrawerNavigator/>
        {/* <MovieStackNavigator /> */}
        {/* <StatusBar style="auto" />  */}
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({});
