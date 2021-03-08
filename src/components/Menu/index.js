import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import Header from '../shared/Header';
import AddMovieModal from './AddMovieModal';
import Icon from 'react-native-vector-icons/FontAwesome';

const Menu = (props) => {

    const [principalItems, setPrincipalItems] = useState([]);
    const [noveltiesItems, setNoveltiesItems] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        formatScreen();
    }, []);

    formatScreen = () => {
        const genres = props.descriptors;
        let screenPrincipalArray = [];
        let screenoveltiesArray = [];
        let cont = 0;

        for (const key in genres) {
            if (cont != 0 && cont < 4) {
                screenPrincipalArray.push(genres[key])
            } else if (cont >= 4) {
                screenoveltiesArray.push(genres[key])
            }
            cont++;
        }

        setPrincipalItems(screenPrincipalArray);
        setNoveltiesItems(screenoveltiesArray);
    }


    renderItemsMenu = () => {

        return principalItems.map((screen, key) => {
            return (<TouchableHighlight
                key={key}
                style={[styles.containerItems, { borderBottomWidth: 1, borderBottomColor: '#222222' }]}
            // onPress={() => this.props.navigat(screen)}
            >
                <Text style={styles.textItems}>{screen.options.drawerLabel}</Text>
            </TouchableHighlight>)
        })
    }

    renderNoveltiesItemsMenu = () => {
        return noveltiesItems.map((screen, key) => {
            return (
                <TouchableHighlight
                    key={key}
                    style={styles.containerItems}
                // onPress={() => this.props.navigat(screen)}
                >
                    <Text style={styles.textItems}>{screen.options.drawerLabel}</Text>
                </TouchableHighlight>
            )
        })
    }

    return (
        <View style={styles.container}>
            <Header navigation={props.navigation} drawerHeader={true} />
            <TouchableOpacity>
                <View style={styles.containerUser}>
                    <View style={[styles.containerUserText, { backgroundColor: '#222222' }]}>
                        <View style={styles.circle}>
                            <Image style={styles.image} source={require('../../../assets/icons/fill-1.png')} />
                        </View>
                        <Text style={styles.textUser}>Ernesto Garmendia</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View>
                {renderItemsMenu()}
            </View>
            <View style={{ marginTop: 20, flexDirection: 'row' }}>
                <Image style={styles.image} source={require('../../../assets/icons/bell.png')} />
                <Text style={styles.textItems}>Novedades</Text>
            </View>
            <View>
                {renderNoveltiesItemsMenu()}
            </View>
            <View style={styles.containerUser}>
                <Pressable
                    style={[styles.containerUserText, { backgroundColor: 'red' }]}
                    onPress={() => setModalVisible(true)}
                >
                    <Icon
                        name="plus"
                        color="white"
                        size={20}
                    />
                    <Text style={styles.textUser}>Agregar Pelicula</Text>
                </Pressable>

            </View>
            <View>
                <Text style={[styles.textItems, { marginTop: 20 }]}>Log Out</Text>
            </View>

            <AddMovieModal modalVisible={modalVisible} setModalVisible={setModalVisible} />

        </View >
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 15
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
    containerItems: {
        height: 50,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textItems: {
        color: 'white'
    },
    image: {
        width: 14,
        height: 16,
        marginRight: 5,
    },
    circle: {
        height:25,
        width:25,
        borderWidth:1,
        borderRadius: 100,
        backgroundColor:'#ce00ff'
    }
})
