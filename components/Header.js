import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";
import AppLoading from 'expo-app-loading';

function Header() {
    let [fontsLoaded] = useFonts({
        Roboto_500Medium
      });

      if (!fontsLoaded) {
          return <AppLoading />;
        } else {
    return (
        <View style = {styles.header}>
            <Text style = {styles.title}>Local Notes</Text>
        </View>
    )
}
}

const styles = StyleSheet.create({
    header: {
        paddingTop:30,
        backgroundColor: 'rgb(25, 25, 25)',
        height: 85,
        justifyContent: 'center',
        width: '100%',
    },

    title:{
        textAlign: 'center',
        color:'#46FF66',
        fontSize: 20,
        fontFamily:'Roboto_500Medium',
    }
})
export default Header
