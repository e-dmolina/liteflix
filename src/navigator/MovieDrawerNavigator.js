import React, { Component } from 'react';;
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import ChangeUser from '../screens/ChangeUser';
import Configurations from '../screens/Configurations';
import Help from '../screens/Help';
import MovieStackNavigator from './MovieStackNavigator';
import Menu from '../components/Menu';
import Movies from '../screens/Movies';
import MyList from '../screens/MyList';
import Children from '../screens/Children';

const { Navigator, Screen } = createDrawerNavigator();

const MovieDrawerNavigator = () => {
    return (
        <Navigator initialRouteName={"MovieStackNavigator"} drawerContent={(props) => <Menu {...props}/>}>
            <Screen name={"MovieStackNavigator"} component={MovieStackNavigator} options={{drawerLabel: "Home"}}/>
            <Screen name={"ChangeUser"} component={ChangeUser} options={{drawerLabel:"Cambiar Usuario"}}/>
            <Screen name={"Configurations"} component={Configurations} options={{drawerLabel:"Configuración"}}/>
            <Screen name={"Help"} component={Help} options={{drawerLabel:"Ayuda"}}/>
            <Screen name={"Movies"} component={Movies} options={{drawerLabel:"Peliculas"}}/>
            <Screen name={"MyList"} component={MyList} options={{drawerLabel:"Mi Lista"}}/>
            <Screen name={"Children"} component={Children} options={{drawerLabel:"Niños"}}/>
        </Navigator>
    )
}

export default MovieDrawerNavigator;

const styles = StyleSheet.create({})
