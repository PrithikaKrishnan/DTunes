import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Home} from './Home';



import Signup from './Signup';
import SearchBar from './SearchBar';
import Artist from './Artist';
import logo from './logo.jpg';
import './index.css';
import Register from'./Register.css';
import Loginn from './login';
const playSong = async () => {
  try {
    const response = await fetch('http://localhost:3001');
    if (response.ok) {
      const blob = await response.blob();
      const url = "../assets/Khairiyat.mp3".createObjectURL(blob);
      const audio = new Audio("../assets/Khairiyat.mp3");
      audio.play();
    } else {
      console.error('Failed to fetch the song');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
const songs=[{
  title:"Khariyat",
  artist:"Arijit Singh",
  mp3:new Audio(
      "C:/Users/Krishna Prasath/Documents/dtunes/assets/Khairiyat.mp3"
  )

}]

 function App() {
  const playSong=(song)=>{
    song.mp3.play();  };
  
  
  return (
    <div><Home/>
  
  
    
      <div className="App">

        <nav>
          <Loginn/>
          <ul>
            <li className="brand">
              <img src={logo} alt="dtunes" />DTunes
            </li>
            <div className="search-barcontainer">
              <SearchBar />
            </div>
            
            <div className="log">
          
            <button>Login</button>
            
            </div>
          </ul>
        </nav>
        <div className="content">
          <div className="Sidebar-container">
            <div className="Side-left">
              <div className="Sidebar1">
                <ul>
                  <li className="home">
                    <i className="fa-solid fa-house"></i> Home
                  </li>
                  <li>
                    <i className="fa-solid fa-book"></i> Your Library
                  </li>
                </ul>
              </div>
              <div className="Sidebar">
                <div className="start">Create playlist</div>
              </div>
            </div>
            <div className="right-box">
              
            <span>Popular artists</span>
            
              
              <div className="card">
                {songs.map((song,index)=>(
                  <Artist/>
                ))}
              

              
              
              
              <Artist/>
              <Artist />
              <Artist/>
              <Artist/>
              </div>
            </div>
          </div>
          <div className="bottom">
            <input type="range" name="range" id="myProgressBar" min="0" max="100" />
            <div className="icons">
              <i className="fa-solid fa-2x fa-backward-step"></i>
              <i className="fa-regular fa-2x fa-circle-play"></i>
              <i className="fa-solid fa-2x fa-forward-step"></i>
            </div>
          </div>
        </div>
        
      </div>
      </div>
      
  
  );
}
export default App;





