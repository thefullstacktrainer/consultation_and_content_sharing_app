import React, { useContext, useState } from 'react';
import { GameContext } from './GameContext';


const AddGame = () => {
    const { dispatchGameEvent } = useContext(GameContext);
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');

    const handleAddGame = () => {
        const game = { id: Math.random(), name, desc };
        dispatchGameEvent('ADD_GAME', { newGame: game });
        setName('')
        setDesc('')
    };

    return (
        <div className='p-4'>
            <h3>Add New Game</h3>
            <input type="text" value={name} onChange={e => { setName(e.target.value) }} placeholder="name" />
            <br />
            <textarea type="text" value={desc} onChange={e => { setDesc(e.target.value) }} placeholder="desc" />
            <br />
            <button className="w-32 rounded-full h-8 bg-gradient-to-r from-sky-500 to-indigo-500" onClick={handleAddGame}>Add Game</button>
        </div>
    );
};

export default AddGame;