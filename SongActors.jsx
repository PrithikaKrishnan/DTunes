import { Pause_request, Play_request } from "./songConstant";
export const playSong=(song)=>async(dispatch)=>{
    dispatch({type:Play_request,payload:song});
};