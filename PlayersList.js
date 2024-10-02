// src/PlayersList.js

import React from 'react';
import players from './player';
import Player from './Player';

const PlayersList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
