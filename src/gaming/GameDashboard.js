import React, { useState } from 'react'
import AddGame from './AddGame';
import { GameContext } from './GameContext';
import ListGames from './ListGames';

function GameDashboard() {
    const [customGames, setCustomGames] = useState([]);

    const dispatchGameEvent = (actionType, payload) => {
        switch (actionType) {
            case 'ADD_GAME':
                setCustomGames([...customGames, payload.newGame]);
                return;
            case 'REMOVE_GAME':
                setCustomGames(customGames.filter(game => game.id !== payload.gameId));
                return;
            default:
                return;
        }
    };

    return (
        <>
            <div>ListGames</div>
            <GameContext.Provider value={{ customGames, dispatchGameEvent }}>
                <AddGame />
                <ListGames />
            </GameContext.Provider>
        </>

    )
}

export default GameDashboard;