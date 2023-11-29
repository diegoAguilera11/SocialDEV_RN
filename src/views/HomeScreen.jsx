import { View, Text, TouchableOpacity, FlatList, StyleSheet, StatusBar, RefreshControl } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext';
import Post from '../components/Post';

export const HomeScreen = () => {
    // Llamar a hooks
    const { token, getPosts, posts, logOut } = useContext(AuthContext);
    const [refreshing, setRefreshing] = useState(false);

    console.log(token);
    const onRefresh = async () => {
        setRefreshing(true);
        // Realizar la solicitud para obtener nuevos datos
        await getPosts();
        setRefreshing(false);
    };

    return (
        <View style={{ 'flex': 1, }}>
            <View style={{ 'flexDirection': 'row', 'gap': 12, 'justifyContent': 'center' }}>
                <Text>HomeScreen</Text>
                <TouchableOpacity
                    onPress={logOut}
                >
                    <Text>Cerrar Sesion</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                scrollEnabled
                data={posts}
                renderItem={({ item }) => <Post post={item} />}
                keyExtractor={item => item.id.toString()}
                style={styles.flatList}
                contentContainerStyle={{ paddingBottom: 80 }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
        </View>
    )


};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    flatList: {
        flexGrow: 1, // Para asegurar que la FlatList se expanda según el contenido
    },
});