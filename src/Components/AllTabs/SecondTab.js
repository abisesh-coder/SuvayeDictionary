import React from 'react'

const SecondTab = ({data}) => {
    function playAudio() {
        let audio = new Audio(data.phonetics[0].audio);
        audio.play();
      }
  return (
    <div>
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
          
          <h4>Parts of speech:</h4>
 
           
<p>{data.meanings[1].partOfSpeech}</p>
 
 
          <h4>Definition:</h4>
 
     <ol>
     <li><p>{data.meanings[1].definitions[0].definition}</p></li>
     <li><p>{data.meanings[1].definitions[1].definition}</p></li>
        </ol>      

 
 
          
 
        </div>
      )}
    </div>
  )
}

export default SecondTab