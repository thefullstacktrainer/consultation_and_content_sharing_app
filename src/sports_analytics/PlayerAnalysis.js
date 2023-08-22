import React from 'react'

function PlayerAnalysis({ players }) {
    return (
        <><div>PlayerAnalysis</div>
            {players.map(player => <div>{player}</div>)}
        </>

    )
}

export default PlayerAnalysis