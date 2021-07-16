import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './components/Navbar';
import NotesList from './components/NotesList';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';
import firebase from 'firebase';


export default function App() {

    // const[notesList, SetNotesList] = useState([]);



	// useEffect(() => {
    //     const NoteRef = firebase.database().ref('localnotes-data');
    //     NoteRef.on('value', (snapshot)=> {
    //         const notes = snapshot.val();
    //         const container = [];
    //         for(let id in notes){
    //             container.push({id, ...notes[id] });
    //         }
    //         if (container){
    //             SetNotesList(container);
    //         }
    //     });
    // },[])

	var config = {
		databaseURL: "https://localnotesdatabase-default-rtdb.firebaseio.com",
		projectId: "localnotesdatabase",
	};
	if (!firebase.apps.length) {
		firebase.initializeApp(config);
	};

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
