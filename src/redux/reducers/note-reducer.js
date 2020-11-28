const ADD_NOTE = 'ADD_NOTE';
const ADD_CATEGORY = 'ADD_CATEGORY';
// const SET_NOTES_LIST_ON_DRAG = 'SET_NOTES_LIST_ON_DRAG'

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

        // case SET_NOTES_LIST_ON_DRAG: {

        //     return {
        //         ...state,
        //         notes: state.notes.map((item) => {
        //             if (item.id === action.note.id){
        //                 return {...item, order: action.note.order}
        //             }
        //             if (item.id === action.currentNote.id){
        //                 return {...item, order: action.note.order}
        //             }

        //             return item
        //         })
        //     }
        // }

        default: return initialState
    }
};

export const addNoteAC = (title, text, category, color) => ({type: ADD_NOTE, title: title, text: text, category: category, color: color})
export const addCategoryAC = (categoryName, color) => ({type: ADD_CATEGORY, categoryName: categoryName, color: color})
// export const setNotesListOnDragAC = (note, currentNote) => ({type: SET_NOTES_LIST_ON_DRAG, note: note, currentNote: currentNote})

export default noteReducer