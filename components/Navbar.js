import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";
import AppLoading from 'expo-app-loading';

function Navbar() {
    let [fontsLoaded] = useFonts({
        Roboto_500Medium
      });

      if (!fontsLoaded) {
          return <AppLoading />;
        } else {
    return (
        <View style={styles.Navbar}>
            <TouchableOpacity>
            <Text style = {styles.Navbtn}>HOME</Text>
            </TouchableOpacity>
            <Text style = {styles.Navbtn}>ABOUT</Text>
        </View>
    )
}
}
const styles = StyleSheet.create({
    Navbar: {
        backgroundColor: 'rgb(34, 34, 34)',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 55,
    },

    Navbtn:{
        fontFamily: 'Roboto_500Medium',
        fontSize : 17,
        color: '#555555',
        fontWeight: 'bold',
    }
})

export default Navbar
