import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Controls from './Controls';
import Settings from './Settings';
import Player from './Player';
import Playlist from './Playlist';

const stations = [
  {
    id: 111111111,
    title: 'FIP — France Inter Paris', description: "Radio eclectique pour hipsters à lunettes",
    source: "http://aifae8cah8.lb.vip.cdn.dvmr.fr/fip-midfi.mp3"
  },
  {
    id: 222222222,
    title: 'Radio Nova', description: "De la soupe avec des animatrices snobinardes",
    source: "http://novazz.ice.infomaniak.ch/novazz-128.mp3?listenerid=410281891613c89cb6cc823c55ad7e7f&awparams=companionAds%3Atrue"
  },
  {
    id: 333333333,
    title: 'France Inter', description: "Actualité pour bobos plutôt rive gauche caviar",
    source: "http://aifae8cah8.lb.vip.cdn.dvmr.fr/franceinter-midfi.mp3"

  },
  {
    id: 444444444,
    title: 'Radio Meuh', description: "En direct de Roblochonland",
    source: "http://radiomeuh.ice.infomaniak.ch:8000/radiomeuh-128.mp3"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro" id="intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Controls />
        <Settings />
        <Player />
        <Playlist stations={stations}/>

      </div>
    );
  }
}

export default App;
