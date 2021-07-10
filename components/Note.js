import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useFonts, RobotoMono_300Light, RobotoMono_400Regular } from "@expo-google-fonts/roboto-mono";
import AppLoading from 'expo-app-loading';

function Note() {
        let [fontsLoaded] = useFonts({
          RobotoMono_300Light,
          RobotoMono_400Regular,
        });

        if (!fontsLoaded) {
            return <AppLoading />;
          } else {
    return (
            <View style={styles.note}>
                <Text style={styles.text}>This is a note
                Lorem Ipsum is simply dummy text of the printing and typesetting industry </Text>
                <View style={styles.footer}>
                <Text style={styles.footer}>09/07/2021</Text>
                <TouchableOpacity>
                    <Text style={styles.delete}>Delete</Text>    
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
        justifyContent: 'space-evenly'
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
