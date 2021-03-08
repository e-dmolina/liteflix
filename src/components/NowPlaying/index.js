import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useQuery } from 'react-query';
import { nowPlayingMovie } from '../../data/fetchers';
import Loading from '../shared/Loading';

const { width } = Dimensions.get('window');

const NowPlaying = () => {
    const { isLoading, isError, data } = useQuery("nowPlayingMovie", nowPlayingMovie);

    if (isLoading) return <Loading />

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imageBackground} source={{ uri: `https://image.tmdb.org/t/p/w500${data.data.results[0].poster_path}` }}>
                <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)', width, height: 521, justifyContent: 'center',
        alignItems: 'center',}}>

                <Text style={styles.text}>ORIGINAL DE LITEFLIX</Text>
                <Text style={styles.title}>{data.data.results[0].title}</Text>
                <TouchableOpacity>
                    <View style={styles.containerUser}>
                        <View style={[styles.containerUserText, { backgroundColor: 'rgba(0, 0, 0, 0.2)' }]}>
                            <View style={styles.circle}>
                                <Image style={styles.image} source={require('../../../assets/icons/play2x.png')} />
                            </View>
                            <Text style={styles.textUser}>Reproducir</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default NowPlaying;

const styles = StyleSheet.create({
    container: {
        height: 521,
    },
    title: {
        fontSize: 72,
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 0,
        width: 200,
    },
    text: {
        fontSize: 18,
        color: '#ffffff',
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',

    },
    containerUser: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: '100%',
    },
    containerUserText: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '85%',
        borderRadius: 18.5,
        color: 'white',
        paddingHorizontal: 10,
    },
    textUser: {
        fontSize: 14,
        marginLeft: 10,
        color: 'white'
    },
    image:{
        width: 16,
        height: 16,
    }
})
