import React from 'react';
import { StyleSheet, View, ActivityIndicator, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#00ff00"/>
        </View>
    )
}

export default Loading;

const styles = StyleSheet.create({
    container: {
        width,
        height: height * .5,
        justifyContent: 'center',
        alignItems:'center',
      },
})
