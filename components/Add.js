import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput, Button, BackHandler } from 'react-native';
import { useState } from 'react';
import firebase from 'firebase';
import 'react-native-get-random-values';

function Add({userName}) {

    const[noteText, setnoteText]  = useState('');

    const handlechange = (text) => {
        setnoteText(text);
    };

    const saveNote = () =>{
        const NoteRef = firebase.database().ref(userName);
        const date = new Date();
        const note = {
            text: noteText,
            date: date.toLocaleDateString()
        };
        NoteRef.push(note);
        setnoteText('');
    }

    return (
        <View style = {styles.input}>
            <TextInput
                placeholder='Type to add a note..'
                placeholderTextColor ='#555555'
                style = {styles.textarea}
                onChangeText = {handlechange}
                value = {noteText}
                multiline
            />
            <View style={styles.addfooter}>
                <Text style={styles.footerText}></Text>
                <TouchableOpacity>
                    <Text style={styles.savebutton} onPress = {saveNote}>
                        Save
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        color: '#46FF66',
        fontFamily: 'RobotoMono_300Light',
        fontSize: 18,
        backgroundColor: 'rgb(34,34,34)',
        minHeight: 150,
        marginTop: 20,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginHorizontal: 10,
    },
    addfooter:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    textarea:{
        color: '#46FF66',
        fontSize: 15,
        width: '100%',
    },
    footerText:{
        color: '#46FF66',
        fontSize: 15,
        paddingTop: 30,
    },
    savebutton:{
        color: 'black',
        fontSize: 15,
        marginTop: 30,
        backgroundColor: '#46FF66',
        height: 25,
        width: 50,
        borderRadius: 10,
        textAlign: 'center'
    },
    placeholder:{
        color: '#555555',
    }
})
export default Add
