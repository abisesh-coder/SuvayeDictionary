import {React, useState} from 'react';
import Axios from 'axios';
import './App.css';
import Tabs from './Components/TabComponent/Tabs';

function App() {
  const [data, setData] = useState("");
  const [searchWord, setSearchWord] = useState("");

  function getMeaning() {
    Axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
    ).then((response) => {
      setData(response.data[0]);
    });
  }

  function playAudio() {
    let audio = new Audio(data.phonetics[0].audio);
    audio.play();
  }
  function showVerb(){

  }


  return (
    <div className="App">
      <h1>Suvaye Dictionary</h1>
      <div className="search-box">
        <input className="search-input" 
        type="text" 
        placeholder="Search...."
        onChange={(e) => {
        
          setSearchWord(e.target.value);
        }}/>
        {/* <button>
        <i className="fa fa-search" aria-hidden="true"/>
        </button> */}
        <button className='btn-search'
          onClick={() => {
            getMeaning();
          }}
        >
         <i className="fa fa-search" aria-hidden="true"/>
        </button>
        <div>
        <Tabs/>
        </div>
        
        {data && (
        <div className="showResults">
          <h2>
            {data.phonetic}{" "}
            <button
            onClick={() => {
              playAudio();
            }}  
            
            >
              <i className="fa fa-play-circle" aria-hidden="true"></i>

            </button>
          </h2>
          <div>
          <button >Noun</button>
          <button onClick={showVerb()}>Verb</button>
          </div>
          <h4>Parts of speech:</h4>
 
           
<p>{data.meanings[0].partOfSpeech}</p>
 
 
          <h4>Definition:</h4>
 
           
<p>{data.meanings[0].definitions[0].definition}</p>
 
 
          {/* <h4>Example:</h4>
 
           
<p>{data.meanings[0].definitions[0].example}</p> */}
 
        </div>
      )}


        

      </div>
      
    </div>
  );
}

export default App;
