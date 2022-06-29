/* eslint-disable */
/* eslint-disable arrow-body-style */
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
  const fetchData = async () => {
    const { data } = await axios.get("https://api.sleeper.app/v1/players/nfl");
    getPlayersData(data);
  };

  // value of search field
  const [name, setName] = useState("");

  const [foundUsers, setFoundUsers] = useState(players);

  useEffect(() => {
    fetchData();
  }, []);


  const filter = (e) => {
     console.log(e.target.value)

  //    if (keyword !== "") {
  //  const results = players.filter((player) => {
  //     return player.name.toLowerCase().startsWith(keyword.toLowerCase());
  //   })
  //    setFoundUsers(results)
  // } else {
  //   setFoundUsers(players)
  // }
  // setName(keyword)
  }

  const arrayOfPlayers = Object.entries(players);
   const slicedPlayers = arrayOfPlayers.slice(0, 9);

  const handleChange = (e) => {
    // console.log('here')
    // console.log(e.target.value)
    const keyword = e.target.value;
    if(keyword !== "") {
      const results = slicedPlayers.filter((player) => {
     return player.name.toLowerCase().startsWith(keyword.toLowerCase());
   })
   setFoundUsers(results)
    } else {
      setFoundUsers(slicedPlayers)
    }

  }


  return (
    <>
      <div className="app-header">NFL Player Stats</div>
      <input
        type="search"
        id="search"
        placeholder="Search"
        onChange={(e)=> handleChange(e)}
      />
      <div className="App">
        <table className="player-table">
          <tr>
            <th className="row">First Name</th>
            <th className="row">Last Name</th>
            <th className="row">Position </th>
            <th className="row">Status </th>
          </tr>
          {foundUsers.map((player) => (
            <PlayerTable key={player.player_id} player={player} />
          ))}
        </table>
      </div>
    </>
  );
}

export default App;
