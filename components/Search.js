import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

function Search({handlesearch}) {
    return (


        <View style = {styles.searchbar}>
            <EvilIcons name="search" size={35} color="#46FF66" style={styles.icon}/>
            <TextInput
            placeholder = 'Search'
            style ={styles.input}
            onChangeText = {(text)=> handlesearch(text)}
            placeholderTextColor = '#555555'
            />
        </View>
    )
}


const styles = StyleSheet.create({
    searchbar:{
        marginTop: 20,
        width: '100%',
        flexDirection: 'row'
    },
    input:{
        backgroundColor: 'rgb(35,35,35)',
        width: '88%',
        height: 40,
        borderRadius: 10,
        paddingHorizontal: 20,
        color: '#46FF66'
    },
    icon:{
        marginTop: 4
    }
})
export default Search
