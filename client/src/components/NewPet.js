import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate} from '@reach/router';


const NewPet = (props) => {
    const [petName, setpetName] = useState("");
    const [petType, setpetType] = useState("");
    const [petDesc, setpetDesc] = useState("");
    const [noSkill, setnoSkill] = useState(false);
    const [fetchBall, setFetchBall] = useState (false);
    const [playDead, setplayDead] = useState (false);
    const [houseBroken, sethouseBroken] = useState (false);
    const submitForm = () => {
        //e.preventDefault();
        axios.post("http://localhost:8000/api/pets/", {
            petName: petName,
            petType: petType,
            petDesc: petDesc,
            noSkill: noSkill,
            fetchBall: fetchBall,
            playDead: playDead,
            houseBroken: houseBroken,

        })
        .then((response) => {
            console.log(response.data);
            navigate(`/pets/${response.data._id}`);
        })
        .catch((err) => 
        console.log(err)
        );
    }
    return (
        <div>
            <h2>New Pet</h2>
            <form onSubmit={submitForm}>
                <div>
                    <label>Pet Name:</label>
                    <input
                        type="text"
                        name="petName"
                        value={petName}
                        onChange={(e) => setpetName(e.target.value)}
                    />
                    <label>Pet Type:</label>
                    <input
                        type="text"
                        name="petType"
                        value={petType}
                        onChange={(e) => setpetType(e.target.value)}
                    />
                    <label>Description of pet:</label>
                    <input
                        type="text"
                        name="petDesc"
                        value={petDesc}
                        onChange={(e) => setpetDesc(e.target.value)}
                    />
                    <h3>Select the skills your pet has:</h3>
                    <label>None:</label>
                    <input
                        type="checkbox"
                        name="noSkill"
                        value={noSkill}
                        onChange={() => setnoSkill(!noSkill)}
                    />
                    <label>Fetch:</label>
                    <input
                        type="checkbox"
                        name="fetchBall"
                        value={fetchBall}
                        onChange={() => setFetchBall(!fetchBall)}
                    />
                    <label>Play Dead:</label>
                    <input
                        type="checkbox"
                        name="playDead"
                        value={playDead}
                        onChange={() => setplayDead(!playDead)}
                    />
                    <label>Housebroken:</label>
                    <input
                        type="checkbox"
                        name="houseBroken"
                        value={houseBroken}
                        onChange={() => sethouseBroken(!houseBroken)}
                    />
                </div>
                <button type="submit">Add this pet</button>
            </form>
        </div> 
    )
}

export default NewPet;