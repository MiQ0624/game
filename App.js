
import './App.css';
import './index.css';
import React from 'react';

import Game from './Game'
import AllGame from './AllGame'



function App() {
  return (
    <div className="App">
        <h3>Helloworld!</h3>
     <h4>井字棋游戏</h4>
        {/* <Game/> */}
        <AllGame/>
    </div>
  );
}

export default App;


