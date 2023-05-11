import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react'

const Pagination = ({ prev, next, onPrevius, onNext, page }: { prev: string | null, next: string | null, onPrevius: any, onNext: any, page:number }) => {

    const handlePrevius = () => onPrevius();
        
    const handleNext = () => onNext();

    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Ionicons name="newspaper" size={32} color="#2F4F4F" />
            <Text style={styles.text}>{page}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                {prev ? <TouchableOpacity style={styles.buttom} onPress={() => handlePrevius()}><Ionicons name="ios-arrow-back-circle" size={35} color="#2F4F4F" /></TouchableOpacity> : null}
                {next ? <TouchableOpacity style={styles.buttom} onPress={() => handleNext()}><Ionicons name="ios-arrow-forward-circle" size={35} color="#2F4F4F" /></TouchableOpacity> : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
        marginEnd:6,
        marginStart:11
    },
    buttom: {
        paddingStart: 2,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: '#D3D3D3',
        borderRadius: 50,
        backgroundColor: 'white',
        elevation: 7,
    },
    text:{
        marginStart:2,
        fontSize:18,
        fontWeight: 'bold',
        color: '#2F4F4F'
    }
});

export default Pagination