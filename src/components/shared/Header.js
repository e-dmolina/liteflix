import React from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const Header = ({navigation, drawerHeader}) => {

    return (
        <View style={styles.container}>
            <Pressable style={!drawerHeader && {flex: 1}} onPress={() => navigation.toggleDrawer()}>
                <Icon
                    name="bars"
                    color="white"
                    size={25}
                />
            </Pressable>
            <Pressable
             style={{flex:2, justifyContent:'flex-start', marginLeft: 10}}
             onPress={() => navigation.navigate('MovieStackNavigator')}
             >
                <Text style={styles.text}>liteflix</Text>
            </Pressable>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width,
        paddingTop: 20,
        paddingLeft: 10
    },
    text: {
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold',
    },
})
