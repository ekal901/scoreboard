import React from 'react';
import {Stats} from "./Stats.";

export const Header = (props) => {
  return (
    <header>
      <Stats className="stats" players={props.players}/>
      <h1>{props.title}</h1>
      {/*<span className="stats">Players: {props.totalPlayers}</span>*/}
    </header>
  );
};