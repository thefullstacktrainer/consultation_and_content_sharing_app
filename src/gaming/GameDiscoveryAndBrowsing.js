import React, { useEffect, useState } from 'react'

function GameDiscoveryAndBrowsing() {
    const [games, setGames] = useState([]);
    const fetchGames = () => {
        fetch("https://64e5b5c009e64530d17ee2c7.mockapi.io/api/v1/games")
            .then(res => res.json())
            .then(
                (result) => {
                    setGames(result);
                },
                (error) => {
                    console.log('error')
                }
            )
    }
    useEffect(() => fetchGames(), [])
    return (
        <>
            <div>GameDiscoveryAndBrowsing</div>
            {games.map(game => <div key={game.id}>{game.name}</div>)}
        </>
    )
}

export default GameDiscoveryAndBrowsing