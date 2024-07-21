import React from "react";
import {Youtube} from "./youtube";
import { useDispatch } from "react-redux";

import { playSong } from "./SongActors";
  const songs=[{
    title:"Khariyat",
    artist:"Arijit Singh",
    mp3:new Audio(
        "C:/Users/Krishna Prasath/Documents/dtunes/assets/Khairiyat.mp3"
    )
  
  }]



  
  const Artist=({song,onClick})=>{
    const dispatch=useDispatch();
    const handleSong=()=>{
        dispatch(playSong(song));
    };
    
    return(
        song&&
        (<div className="Image">
            <div className="Abox">
            
        <button className="Arijit" onCLick={handleSong}>
            {song.artist}-{song.title}
            Play song
            
            
            
           
        </button>
        
        </div>
        
        </div>
    ))
}
export default Artist;