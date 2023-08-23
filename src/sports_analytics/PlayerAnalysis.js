import React from 'react'

function PlayerAnalysis({ players }) {
    return (
        <><div>PlayerAnalysis</div>
            {players.map((player, index) => (<div key={index}>{player}</div>))}
        </>

    )
}

export default PlayerAnalysis;