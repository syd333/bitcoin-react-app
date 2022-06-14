/* eslint-disable no-console */
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
  console.log(arrayOfPlayers.slice(0, 4));
  return (
    <div className="App">
      {arrayOfPlayers.slice(0, 9).map((player) => (
        <ul>
          <li>{`${player[1].first_name} ${player[1].last_name}`}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
