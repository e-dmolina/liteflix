import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'

const Movie = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text>Movie</Text>
            <Button title={"Home"} onPress={() => navigation.navigate("Home")}/>
        </View>
    )
}

export default Movie

const styles = StyleSheet.create({})
