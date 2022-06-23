/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable no-console */
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PlayerTable from "./PlayerTable";

function App() {
  const [players, getPlayersData] = useState({});
  // search result
  const [searchInput, setSearchInput] = useState("");
  // value of search field
  const [name, setName] = useState("");
  const fetchData = async () => {
    const { data } = await axios.get("https://api.sleeper.app/v1/players/nfl");
    getPlayersData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(players);

  const arrayOfPlayers = Object.entries(players);
  const slicedPlayers = arrayOfPlayers.slice(0, 9);

  const handleChange = (searchValue) => {
    setSearchInput(searchValue);
  };

  // const filter = searchInput => {
  //   const results = players.filter(player) => {
  //     return player.name.toLowerCase().includes(searchInput.toLowerCase())
  //   }
  //   setPlayersData(results)
  // } else {
  //   setPlayersData(players)
  // }
  // }

  return (
    <>
      <div className="app-header">NFL Player Stats</div>
      <input
        type="search"
        id="search"
        value={name}
        placeholder="Search"
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className="App">
        <table className="player-table">
          <tr>
            <th className="row">First Name</th>
            <th className="row">Last Name</th>
            <th className="row">Position </th>
            <th className="row">Status </th>
          </tr>
          {slicedPlayers.map((player) => (
            <PlayerTable key={player.player_id} player={player} />
          ))}
        </table>
      </div>
    </>
  );
}

export default App;
