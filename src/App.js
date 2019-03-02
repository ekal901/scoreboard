import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";

// 선택 범위 : control-w
/*const header = (
  <header>
    <h1 id={myTitleId}>ldk's {title}</h1>
    <p>{desc}</p>
  </header>
);*/

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 0, id: 1},
      {name: 'HONG', score: 0, id: 2},
      {name: 'KIM', score: 0, id: 3},
      {name: 'PARK', score: 0, id: 4},
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }))
  };

  handleChangeSocre = (index, delta) => {
    console.log(index, delta);
    const players = this.state.players.map((player, idx) => {
      if (idx === index) {
        player.score = player.score + delta;
        return player;
      } else {
        return player;
      }
    });

    this.setState({players});
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" players={this.state.players} />

        {
          this.state.players.map((play, index) => <Player
            id={play.id}
            name={play.name}
            index={index}
            score={play.score}
            key={play.id} removePlayer={this.handleRemovePlayer}
            changeScore={this.handleChangeSocre} />)
        }
      </div>
    )
  }
}

export default App;
