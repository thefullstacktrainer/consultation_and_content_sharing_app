import React, { useContext } from 'react'
import Game from './Game';
import { GameContext } from './GameContext';

function ListGames() {
    const { customGames } = useContext(GameContext);
    return (
        <>
            <div>
                <h3>Available Games</h3>
                {customGames.map(game => <Game key={game.id} game={game} />)}
            </div>
        </>
    )
}

export default ListGames;