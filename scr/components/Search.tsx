import { View, StyleSheet, TextInput } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react'

const Search = ({setSearch}:any) => {
    return (
        <View style={styles.container}>
            <Ionicons name="search" size={28} color="#A9A9A9" />
            <TextInput style={styles.searchText} placeholder='Search' onChangeText={text => setSearch(text)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        marginEnd:8,
        marginStart:8,
        borderWidth: 1,
        paddingStart:5,
        paddingVertical:10,
        borderColor: '#D3D3D3',
        borderRadius: 12,
        backgroundColor: 'white',
        elevation: 7,
    },
    searchText: {
        fontSize: 20,
        marginStart: 5,
        width: 300,
    },
});

export default Search