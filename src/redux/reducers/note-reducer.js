const ADD_NOTE = 'ADD_NOTE';
const ADD_CATEGORY = 'ADD_CATEGORY';
const EDIT_NOTE_TITLE = 'EDIT_NOTE_TITLE';
const EDIT_NOTE_TEXT = 'EDIT_NOTE_TEXT';
const DELETE_NOTE = 'DELETE_NOTE';
const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
const FILTER_NOTES = 'FILTER_NOTES';
const DELETE_FILTER = 'DELETE_FILTER';

let pastState = []

let initialState = {
    notes: [
        {
            id: 1,
            order: 1,
            title: "Заметка 1",
            text: "lorem ipsum dolar sit amet",
            category: "test",
            color: "b8e994"
        },
        {
            id: 2,
            order: 2,
            title: "Заметка 2",
            text: "lorem ipsum dolar sit amet",
            category: "test",
            color: "b8e994"
        },
    ],

    categories: [
        {
            categoryName: "test",
            categorySubs: [],  // id заметок
            color: "b8e994" 
        },
        {
            categoryName: "важное",
            categorySubs: [],
            color: "e55039"
        },
        {
            categoryName: "индифферентно",
            categorySubs: [],
            color: "82ccdd"
        }
    ]
}

export const noteReducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_NOTE: {

            let newNote = {
                id: state.notes.length + 1,
                title: action.title,
                text: action.text,
                category: action.category,
                color: action.color
            }

            return {
                ...state,
                notes: [...state.notes, newNote]
            }
        }

        case ADD_CATEGORY: {
            let newCategory = {
                categoryName: action.categoryName,
                categorySubs: [],
                color: action.color
            }

            return {
                ...state,
                categories: [...state.categories, newCategory]
            }
        }

        case EDIT_NOTE_TITLE: {

            return {
                ...state,
                ...state.notes[action.id-1]["title"] = action.newTitle
            }
        }

        case EDIT_NOTE_TEXT: {
            return {
                ...state,
                ...state.notes[action.id-1]["text"] = action.newText
            }
        }

        case CHANGE_CATEGORY: {
             return {...state}
        }

        case DELETE_NOTE: {

            // pastState = [...state.notes.filter(note => note.id !== action.id)]

            return {
                ...state,
                notes: [...state.notes.filter(note => note.id !== action.id)]
            }
        }

        case FILTER_NOTES: {
            let filteredNotes = [...state.notes.filter(note => note.category === action.categoryName)]
            pastState = state.notes

            return {
                ...state,
                notes: [...filteredNotes]
            }
        }

        case DELETE_FILTER: {
            return {
                ...state,
                notes: [...pastState]
            }
        }

        default: return initialState
    }
};

export const addNoteAC = (title, text, category, color) => ({type: ADD_NOTE, title: title, text: text, category: category, color: color});
export const addCategoryAC = (categoryName, color) => ({type: ADD_CATEGORY, categoryName: categoryName, color: color});
export const editNoteTitle = (id, newTitle) => ({type: EDIT_NOTE_TITLE, id: id, newTitle: newTitle});
export const editNoteText = (id, newText) => ({type: EDIT_NOTE_TEXT, id: id, newText: newText});
export const deleteNote = (id) => ({type: DELETE_NOTE, id: id});
export const filterNotes = (categoryName) => ({type: FILTER_NOTES, categoryName: categoryName});
export const deleteFilter = () => ({type: DELETE_FILTER});

export default noteReducer;