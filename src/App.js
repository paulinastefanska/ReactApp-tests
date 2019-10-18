import React, { Component } from 'react';
import './App.css';
import PlayerList from './components/PlayerList/PlayerList';

class App extends Component {
  constructor() {
   	super();

   	this.state = {
     	players: [
       	{
         	name: 'Kunegunda',
         	score: 5,
       	},
       	{
         	name: 'Antoś',
         	score: 0,
       	}
     	]
   	}
 	}

 	onScoreUpdate = (playerIndex, scoreChange) => {
	  this.setState({
	    players: this.state.players.map((player, index) => {
	      if (index === playerIndex) {
	        return { ...player, score: player.score + scoreChange };
	      }
	      return player;
	    })
	  })
	}

  render() {
    return (
      <div className="App">
      	<PlayerList players={this.state.players} />
      </div>
    );
  }
}

export default App;
