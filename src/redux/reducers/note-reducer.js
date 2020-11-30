const ADD_NOTE = 'ADD_NOTE';
const ADD_CATEGORY = 'ADD_CATEGORY';
const EDIT_NOTE_TITLE = 'EDIT_NOTE_TITLE';
const EDIT_NOTE_TEXT = 'EDIT_NOTE_TEXT';
const DELETE_NOTE = 'DELETE_NOTE';
const CHANGE_CATEGORY = 'CHANGE_CATEGORY';

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
};

export const noteReducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_NOTE: {

            let newNote = {
                id: state.notes.length + 1,
                order: state.notes.length + 1,
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

        }

        case EDIT_NOTE_TEXT: {

        }

        case DELETE_NOTE: {

        }

        case CHANGE_CATEGORY: {

        }

        default: return initialState
    }
};

export const addNoteAC = (title, text, category, color) => ({type: ADD_NOTE, title: title, text: text, category: category, color: color})
export const addCategoryAC = (categoryName, color) => ({type: ADD_CATEGORY, categoryName: categoryName, color: color})
export const editNoteTitleAC = () => ({type: EDIT_NOTE_TITLE})
export const editNoteTextAC = () => ({type: EDIT_NOTE_TEXT})
export const deleteNoteAC = () => ({type: DELETE_NOTE})
export const changeCategoryAC = () => ({type: CHANGE_CATEGORY})

export default noteReducer