import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {noteReducer} from "./reducers/note-reducer";

let reducers = combineReducers({
    notesPage: noteReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store