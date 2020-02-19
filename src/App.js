import React from 'react';

import Carousel from "./Carousel";
import './App.css';


function App() {
  return (
    <div className="App">
        <Carousel>
            <img src="https://i.picsum.photos/id/541/800/400.jpg" alt="" />
            <img src="https://i.picsum.photos/id/645/800/400.jpg" alt="" />
            <img src="https://i.picsum.photos/id/790/800/400.jpg" alt="" />
            <img src="https://i.picsum.photos/id/1076/800/400.jpg" alt="" />
            <img src="https://i.picsum.photos/id/690/800/400.jpg" alt="" />
        </Carousel>
    </div>
  );
}

export default App;
