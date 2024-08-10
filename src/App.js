import React, {useEffect, useState} from 'react';
import './App.css';
import BitmovinPlayer from './bitmovinPlayer'

function App() {
    const [movieData, setMovieData] = useState({ hls: ""})
    const [openModal, setOpenModal] = useState(false);

    function ShowModal(){
      setOpenModal(true);
    }

  return (
    <>
  <div className="App">
   <button className="button" onClick ={() => ShowModal()}> Click To Modal </button>
  </div>
      <div id='player-wrapper' openModal={openModal} setOpenModal= {setOpenModal} >
      <BitmovinPlayer playerSource={movieData}/>
    </div>
</>
  );
}
export default App;