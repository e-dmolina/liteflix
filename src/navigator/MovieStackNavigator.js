import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import Header from '../components/shared/Header';

const { Navigator, Screen } = createStackNavigator();

const MovieStackNavigator = () => {
    return (
        <Navigator initialRouteName={"Home"} screenOptions={{
            ...TransitionPresets.SlideFromRightIOS
        }}>
            <Screen name="Home" component={Home} options={{
                headerTransparent:true,
                header: ({previous, navigation}) => {
                    return(
                        <Header navigation={navigation}/>
                    )
                }
            }}/>
            <Screen name="Movie" component={Movie}/>
        </Navigator>
    )
}

export default MovieStackNavigator

const styles = StyleSheet.create({})
