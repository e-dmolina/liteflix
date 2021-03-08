import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useQuery } from 'react-query';
import { upcomningMovies } from '../../data/fetchers';
import Loading from '../shared/Loading';
import ItemList from './ItemList';

const Upcoming = () => {
    const { isLoading, isError, data } = useQuery("upcomningMovies", upcomningMovies);

    if (isLoading) return <Loading />

    return (
        <View style={styles.container}>
            <View>
            <Text style={styles.text}>Próximamente</Text>
            <FlatList
                ItemSeparatorComponent={() => <View style={{height: 5}}/>}
                data={data.data.results?.slice(0, 4)}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    const { id, poster_path, title } = item;
                    return (
                        <ItemList poster_path={poster_path}/>
                    )
                }}
            />
            </View>
        </View>
    )
}

export default Upcoming

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: -20
    },
    text: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold'
    },
})
