import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native'
import React from 'react'
import { CharacterI } from '../models/Character'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

const CharacterComp = ({ character }: { character: CharacterI }) => {
    const navigation = useNavigation<homeScreenProp>()
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Details',{character:character})}>
            <View style={styles.container1}>
                <Image style={styles.imageCharacter} source={{ uri: character.image }} />
                <View>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>{character.name}</Text>
                    <Text>{character.species}</Text>
                </View>
            </View>
            <Text style={[{ color: 'white' }, character.status === 'Alive' ? { color: '#008000' } : { color: '#FF0000' }]}>{character.status}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 6,
        marginHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#2F4F4F',
        borderRadius: 12,
        backgroundColor: 'white',
        elevation: 12,
    },
    container1: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageCharacter: {
        width: 70,
        height: 70,
        marginRight: 10,
        borderRadius: 5
    }
});

export default CharacterComp