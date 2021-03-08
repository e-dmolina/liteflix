import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useQuery } from 'react-query';
import { popularMovies } from '../../data/fetchers';
import Loading from '../shared/Loading';
import ItemList from './ItemList';

const Popular = () => {
    const { isLoading, isError, data } = useQuery("popularMovies", popularMovies);

    if (isLoading) return <Loading />

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>POPULARES DE LITEFLIX</Text>
                <FlatList
                    ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
                    data={data.data.results?.slice(0, 4)}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    renderItem={({ item }) => {
                        const { id, poster_path, title } = item;
                        return (
                            <ItemList poster_path={poster_path} />
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default Popular;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop:30,
    },
    text: {
        fontSize: 18,
        fontFamily: 'RobotoSlab',
        color: '#ffffff',
        fontWeight: 'bold'
    },
})
