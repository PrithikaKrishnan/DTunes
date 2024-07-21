import {createStore,combineReducers,applyMiddleware} from "redux";

import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { SongReducer } from "./SongReducer";


const initialState={};
const reducer=combineReducers({
    mainSong:SongReducer,
});
const store=createStore(
    reducer,initialState,composeWithDevTools(applyMiddleware(thunk))
);
export default store;