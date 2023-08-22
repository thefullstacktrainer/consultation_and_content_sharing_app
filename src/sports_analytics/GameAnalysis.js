import React from 'react'
import PlayerAnalysis from './PlayerAnalysis'

function GameAnalysis({ name, id, players }) {
    return (
        <>
            <div>GameAnalysis</div>
            <div>Game Name : {name}</div>
            <PlayerAnalysis players={players} />
        </>
    )
}

export default GameAnalysis