import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native';

function Add() {
    return (
        <View style = {styles.input}>
            <TextInput
                placeholder='Type to add a note..'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        color: 'black',
        fontFamily: 'RobotoMono_300Light',
        fontSize: 18,
        backgroundColor: '#46FF66',
        minHeight: 150,
        marginTop: 20,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginHorizontal: 10,
    },
})
export default Add
