import React from 'react';
import { StyleSheet, View, Dimensions, Image, ImageBackground } from 'react-native';

const { width } = Dimensions.get('window');


const itemList = ({ poster_path }) => {
    return (
        <View style={{ width: width * 0.9, height: 350 }}>
        <ImageBackground style={styles.imageBackground} source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }} resizeMode={'cover'} resizeMethod={'auto'}>
            <Image style={styles.image} source={{ uri: 'https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png' }} resizeMode={'contain'} resizeMethod={'auto'} />
        </ImageBackground>
    </View>
    )
}

export default itemList

const styles = StyleSheet.create({
    container: {
        width: 400,
        height: 400,
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    image: { 
        width: 100,
        height: 50,
        marginLeft: 5,
    }
})
