// Tippspiel.tsx

import React, {useEffect, useState} from 'react';

const Tippspiel: React.FC = () => {
    const [tipps, setTipps] = useState<{ [gameId: string]: string }>({});
    let games: Array<any> = []; // This declares an array of any type and initializes it to an empty array


    const handleTippChange = (gameId: string, tipp: string) => {
        setTipps(prevTipps => ({
            ...prevTipps,
            [gameId]: tipp
        }));
    };

    useEffect(() => {
        getGames();
    }, []);

    async function getGames() {
        const response = await fetch("http://localhost:3000/api/games");
        games = await response.json();
        console.log(games);
    }


    const handleSubmit = () => {
        console.log('Abgeschickte Tipps:', tipps);
        // Hier könntest du die Tipps z.B. an eine API senden oder weiterverarbeiten
    };

    return (
        <div>
            <h2>Tippspiel</h2>
            <form onSubmit={handleSubmit}>
                {games.map(game => (
                    <div key={game._id}>
                        <p>{game["1.Mannschaft"]} vs. {game["2.Mannschaft"]} - {game.Ort}</p>
                        <input
                            type="text"
                            placeholder="Tipp eingeben z.B. 2:1"
                            value={tipps[game._id] || ''}
                            onChange={(e) => handleTippChange(game._id, e.target.value)}
                        />
                    </div>
                ))}
                <button type="submit">Tipps abschicken</button>
            </form>
        </div>
    );
};

export default Tippspiel;
