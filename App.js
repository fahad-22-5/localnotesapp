import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './components/Navbar';
import NotesList from './components/NotesList';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <NotesList/>
      <Navbar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
