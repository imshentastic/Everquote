export const selectAllStarredNotebooks = (state) => {
    return state.notebooks.filter((notebook) => {
        return notebook.starred;
    });
};


// export const selectNotesForNotebook = ({notebooks, notes}, note) => {
//     return notebook.noteIds.map(noteId => note[noteId]);
// };
