import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

const SuccessAddMovie = ({ movie, setModalVisible }) => {

    const closeModal = () => setModalVisible(false) 

    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'flex-start' }}>
                {/* <Image style={styles.image} source={{ uri: 'https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png' }} resizeMode={'contain'} resizeMethod={'auto'} /> */}
                <Text style={styles.title}>liteflix</Text>
                
                <Text style={styles.textStyle}>Felicitaciones!</Text>
                <Text style={styles.textStyle}>{movie.name} fue correctamente subido a la categoría {movie.category}</Text>
                <Pressable
                    style={styles.button}
                onPress={closeModal}
                >
                    <Text style={[styles.textStyle, { textAlign: 'center' }]}>Cerrar</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default SuccessAddMovie

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7ed321',
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
    },
    button: {
        marginTop: 20,
        borderRadius: 20,
        width:'40%',
        padding: 10,
        elevation: 2,
        backgroundColor: "#000000",
    },
    title: {
        color: 'red',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
})
