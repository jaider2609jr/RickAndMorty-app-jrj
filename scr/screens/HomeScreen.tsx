import { View, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import CharacterComp from '../components/CharacterComp'
import Pagination from '../components/Pagination'
import Search from '../components/Search'
import Skeleton from '../components/Skeleton'
import useCharacters from '../hooks/useCharacters'
import { dataUseCharacter } from '../models/Character'

const HomeScreen = () => {
    
    const { setSearch, info, characters, onPrevius, onNext, page, loading }: dataUseCharacter = useCharacters()

    return (
        <View style={styles.container}>
            <Search setSearch={setSearch} />
            <Pagination prev={info?.prev} next={info?.next} onPrevius={onPrevius} onNext={onNext} page={page} />
            {loading ? <Skeleton/> :
            <FlatList
                data={characters}
                renderItem={({ item }) => {
                    return <CharacterComp character={item} />
                }}
                showsVerticalScrollIndicator={false}
            />}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerIndicator: {
        alignItems: 'center',
        position: 'absolute',
        top: 62,
        right: '43%',
        zIndex: 1
    },
    indicator: {
        justifyContent: 'center',
        padding: 5,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: '#D3D3D3',
        borderRadius: 50,
        backgroundColor: 'white',
        elevation: 7,
    }
});

export default HomeScreen