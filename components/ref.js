let renderCount = 0; // just for debugging, remove it later

function NotesList() {

    const [notesList, setNotesList] = useState();
    const notesLoading = notesList === undefined;

    useEffect(() => {
        const notesQueryRef = firebase.database()
            .ref('localnotes-data');
        // you can add `orderByChild()`, etc. to the above query

        const listener = notesQueryRef.on(
            'value',
            (snapshot) => {
                const notesArray = [];
                snapshot.forEach(noteSnapshot =>
                    {const id = noteSnapshot.key;
                    notesArray.push({
                        id: noteSnapshot.key,
                        ...noteSnapshot.val()
                    });
                }
                );

                setNotesList(notesArray);
            },
            (error) => {
                // TODO: Handle errors better than this
                console.error("Failed to get notes: ", error);
            }
        );

        // return cleanup function
        return () => {
            notesQueryRef.off('value', listener);
        };
    }, []);

    // just for debugging, remove it later
    console.log({
        renderCount: ++renderCount,
        notesLoading,
        notesList
    });

    return (
        <View style={styles.list}>
            <ScrollView>
                <Search />
                <Add />
                {notesLoading
                    ? <Spin tip="Loading..." key="loading" />
                    : notesList.map(note => (<Note
                          text={note.text}
                          date={note.date}
                          key={note.key}
                      />));
                }
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