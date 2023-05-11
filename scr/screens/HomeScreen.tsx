import { View, StyleSheet } from 'react-native'
import React from 'react'
import Pagination from '../components/Pagination'
import Search from '../components/Search'
import Skeleton from '../components/Skeleton'
import useCharacters from '../hooks/useCharacters'
import { dataUseCharacter } from '../models/Character'
import CharacterList from '../components/CharacterList'

const HomeScreen = () => {

    const { setSearch, info, characters, onPrevius, onNext, page, loading }: dataUseCharacter = useCharacters()

    return (
        <View style={styles.container}>
            <Search setSearch={setSearch} />
            <Pagination prev={info?.prev} next={info?.next} onPrevius={onPrevius} onNext={onNext} page={page} />
            {loading ? <Skeleton /> : <CharacterList characters={characters} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default HomeScreen