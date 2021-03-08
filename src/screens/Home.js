import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import NowPlaying from '../components/NowPlaying';
import Popular from '../components/Popular';
import Upcoming from '../components/Upcoming'

const { width, height } = Dimensions.get('window');


const Home = () => {
    return (        
        <ScrollView style={styles.container}>
            <NowPlaying/>
            <Upcoming/>
            <Popular/>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor:'black',
        width,
        height,
        marginTop:20,
        // paddingTop:40
    },
    text:{
        color:'blue'
    }
})
