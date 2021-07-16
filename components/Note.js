import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useFonts, RobotoMono_300Light, RobotoMono_400Regular } from "@expo-google-fonts/roboto-mono";
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons';
import firebase from 'firebase';

function Note({note}) {

        const handledelete = () => {
            const ChildRef = firebase.database().ref('localnotes-data').child(note.id);
            ChildRef.remove();
        }

        let [fontsLoaded] = useFonts({
          RobotoMono_300Light,
          RobotoMono_400Regular,
        });

        if (!fontsLoaded) {
            return <AppLoading />;
          } else {
    return (
            <View style={styles.note}>
                <Text style={styles.text}>{note.text}</Text>
                <View style={styles.footer}>
                <Text style={styles.footer}>{note.date}</Text>
                <TouchableOpacity>
                    <AntDesign name="delete" size={24} color="black" onPress = {handledelete}/> 
                </TouchableOpacity> 
                </View>    
            </View>
    )
        }
    }

const styles = StyleSheet.create({
    
    note:{
        paddingBottom: 5,
        backgroundColor: '#46FF66',
        minHeight: 150,
        marginTop: 20,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 10,
    },

    footer:{
        marginTop: 10,
        fontFamily: 'RobotoMono_400Regular',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    text:{
        fontFamily: 'RobotoMono_400Regular',
        fontSize: 15,
    },

    delete:{
        marginTop: 10,
    }
})

export default Note
