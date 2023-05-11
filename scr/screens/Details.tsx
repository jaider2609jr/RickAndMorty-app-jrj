import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';


const Details = ({ route }: { route: RouteProp<RootStackParamList, 'Details'> }) => {
    const { character } = route.params
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Image style={styles.imageCharacter} source={{ uri: character.image }} />               
            </View>
            <Text style={styles.textTittle}>{character.name}</Text>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.textSubittle}>Especie:</Text>
                <Text style={styles.textDesc}> {character.species}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.textSubittle}>Origen:</Text>
                <Text style={styles.textDesc}> {character.origin.name}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.textSubittle}>Locacion:</Text>
                <Text style={styles.textDesc}> {character.location.name}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.textSubittle}>Genero:</Text>
                <Text style={styles.textDesc}> {character.gender}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.textSubittle}>Estatus:</Text>
                <Text style={styles.textDesc}> {character.status}</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 10,

    },
    cardContainer: {
        padding:5,
        borderWidth: 1,
        borderColor : '#F8F8FF',
        borderRadius: 12,
        elevation:7,
        backgroundColor:'white'
    },
    textTittle: {
        fontSize:25,
        marginTop:10,
        fontWeight:'800'
    },
    imageCharacter: {
        height: 300,
        width: 300,
        borderRadius: 12,
    },
    textSubittle: {
        fontSize:18,
        marginTop:10,
        fontWeight:'bold'
    },
    textDesc: {
        fontSize:18,
        marginTop:10,
        fontWeight:'300'
    },
    

});

export default Details