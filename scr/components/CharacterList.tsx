import { View, FlatList } from 'react-native'
import React from 'react'
import CharacterComp from './CharacterComp'
import { CharacterI } from '../models/Character'

const CharacterList = ({ characters }: { characters: CharacterI[] }) => {
    return (
        <View>
            <FlatList
                data={characters}
                renderItem={({ item }) => {
                    return <CharacterComp character={item} />
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default CharacterList