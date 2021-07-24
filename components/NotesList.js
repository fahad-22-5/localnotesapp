import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native';
import Note from './Note';
import Add from './Add';
import Search from './Search';
import { useEffect, useState } from 'react';
import firebase from 'firebase';

function NotesList({handlesearch, userName}) {

    const[notesList, SetNotesList] = useState([]);
	const [searchText, SetsearchText] = useState('');

    useEffect(() => {
        const NoteRef = firebase.database().ref(userName);
        NoteRef.on('value', (snapshot)=> {
            const notes = snapshot.val();
            const container = [];
            for(let id in notes){
                container.push({id, ...notes[id] });
            }
            if (container){
                SetNotesList(container);
            }
        });
    },[])

    return (
        <View style={styles.list}>
            <ScrollView>
                <Search handlesearch = {SetsearchText} />
                <Add userName = {userName}/>
                {notesList && notesList.filter(note => note.text.includes(searchText)).map((note, index) => (<Note note = {note} key = {index}/>))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        marginTop: 0,
        marginBottom: 145,
    }
})
export default NotesList
