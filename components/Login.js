import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native';
import { Link } from 'react-router-native';
import { useFonts, RobotoMono_300Light, RobotoMono_400Regular, RobotoMono_500Medium } from "@expo-google-fonts/roboto-mono";
import AppLoading from 'expo-app-loading';
import Add from './Add';


function Login({userLogin}) {

    let [fontsLoaded] = useFonts({
        RobotoMono_300Light,
        RobotoMono_400Regular,
        RobotoMono_500Medium
      });

      if (!fontsLoaded) {
          return <AppLoading />;
        } else {
    return (
        <View style = {styles.LoginPage}>
            <Text style = {styles.loginText}>Enter User Name</Text>
            <TextInput 
            style = {styles.idBox} 
            placeholder = "UserName" 
            placeholderTextColor ='#555555'
            onChangeText = {(text) => userLogin(text)}
            />
            <Link to = "/Home">
                <Text style = {styles.submitBtn}>Submit</Text>
            </Link>
        </View>
    )
        }
}

const styles = StyleSheet.create({
    loginText:{
        color: "rgb(120, 120, 120)",
        textAlign: "center",
        fontSize: 20,
        fontFamily:'Roboto_500Medium',        
    },
    idBox:{
        backgroundColor: "rgb(35,35,35)",
        marginTop: 35,
        height: 40,
        borderRadius: 10,
        paddingHorizontal: 20,
        color: "white",
    },

    LoginPage:{
        paddingVertical: 80,
        flexDirection: "column",
        paddingHorizontal: 10,
    },
    submitBtn:{
        backgroundColor: "white",
        marginTop: 40,
        textAlign: "center",
        height: 42,
        fontSize: 15,
        marginHorizontal: 60,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: "#46FF66",
        fontFamily: "RobotoMono_400Regular"
    }

})
export default Login
