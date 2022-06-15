/* eslint-disable no-console */
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlayerTable from './PlayerTable';
import Search from './Search';

function App() {
  const [players, getPlayersData] = useState({});

  const fetchData = async () => {
    const { data } = await axios.get('https://api.sleeper.app/v1/players/nfl');
    getPlayersData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(players);

  const arrayOfPlayers = Object.entries(players);
  const slicedPlayers = arrayOfPlayers.slice(0, 9);
  // console.log(arrayOfPlayers.slice(0, 4));
  return (
    <>
      <div className="app-header">NFL Player Stats</div>
      <Search />
      <div className="App">
        <table className="player-table">
          <tr>
            <th className="row">First Name</th>
            <th className="row">Last Name</th>
            <th className="row">Position </th>
            <th className="row">Status </th>
          </tr>
          {slicedPlayers.map((player) => (
            <PlayerTable player={player} />
          ))}
        </table>
      </div>
    </>
  );
}

export default App;
