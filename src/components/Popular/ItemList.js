import React from 'react';
import { StyleSheet, View, Dimensions, ImageBackground, Text } from 'react-native';

const { width } = Dimensions.get('window');


const ItemList = ({ poster_path }) => {
    return (
        <View style={{ width: width * 0.46, height: 350, paddingHorizontal: 4 }}>
        <ImageBackground style={styles.imageBackground} source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }} resizeMode={'cover'} resizeMethod={'auto'}>
            <Text style={styles.text}>ORIGINAL DE NETFLIX</Text>
        </ImageBackground>
    </View>
    )
}

export default ItemList

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        // justifyContent: 'center',
    },
    text: {
        fontSize: 12,
        color: '#ffffff', 
        textAlign: 'center',
        marginTop: '150%'  
    },
})
