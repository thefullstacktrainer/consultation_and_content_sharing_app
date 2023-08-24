import { useContext } from 'react';
import { GameContext } from './GameContext';

const Game = ({ game }) => {
    const { dispatchGameEvent } = useContext(GameContext);

    const handleRemoveGame = () => {
        dispatchGameEvent('REMOVE_GAME', { gameId: game.id });
    };
    return (
        <div className="Game">
            <h3>{game.name}</h3>
            <div>
                <small>{game.desc}</small>
            </div>
            <button onClick={handleRemoveGame}>Delete Game</button>
        </div>
    );
};

export default Game;