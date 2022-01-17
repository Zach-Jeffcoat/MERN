import React, {useState} from `react`;
import axios from "axios";

const Display = (props) =>{
    const [pokemon, setPokemon] = useState("");

    
        useEffect(() => {
            fetch('https://pokeapi.co/api/v2/pokemon/')
                .then(response => response.json())
                .then(response => setPokemon(response.results))
        }, []);
    
        return (
            <div>
                {pokemon.length > 0 && pokemon.map((person, index)=>{
                    return (<div key={index}>{pokemon.name}</div>)
                })}
            </div>
        );
    }
    export default Display;
