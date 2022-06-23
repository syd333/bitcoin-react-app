/* eslint-disable react/prop-types */
/* eslint-disable quotes */
/* eslint-disable no-console */
import React from 'react';
// import { Icon, Label, Menu, Table } from 'semantic-ui-react';

function PlayerTable({ player }) {
  return (
    <tr>
      <th className="player-info">{player[1].first_name}</th>
      <th className="player-info">{player[1].last_name}</th>
      <th className="player-info">{player[1].position}</th>
      <th className="player-info">{player[1].status}</th>
    </tr>
  );
}

export default PlayerTable;
