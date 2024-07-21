import {Play_request,
Pause_request,
Play_master,
Pause_master} from './songConstant';
export const SongReducer=(state={mainSong:{},isPlaying:false},action)=>{
switch(action.type){
    case "Play_request":
        return{...state,mainSong:action.payload,isPlaying:true};
        case "Pause_request":
            return{...state,isPlaying:action.payload,isPlaying:false};
            default:
                return state;
}
}