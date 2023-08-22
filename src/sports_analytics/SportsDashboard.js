import React from 'react'
import GameAnalysis from './GameAnalysis'

function SportsDashboard() {
    const games = [
        {
            name: "FootBall", id: 1, players: ["Ronaldo", "Messi"]
        },
        {
            name: "Cricket", id: 2, players: ["Virat", "Dhoni"]
        }]
    return (
        <>
            <div>SportsDashboard</div>
            {games.map(game => <GameAnalysis key={game.id} {...game} />)}
        </>
    )
}

export default SportsDashboard