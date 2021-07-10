import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native';
import Note from './Note';
import Add from './Add';

function NotesList() {
    return (
        <View style={styles.list}>
            <ScrollView>
                <Add/>
                <Note/>
                <Note/>
                <Note/>
                <Note/>
                <Note/>
                <Note/>
                <Note/>
                <Note/>
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
