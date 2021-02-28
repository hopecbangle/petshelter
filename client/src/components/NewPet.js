import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate} from '@reach/router';


const NewPet = (props) => {
    const [petName, setpetName] = useState("");
    const [petType, setpetType] = useState("");
    const [petDesc, setpetDesc] = useState("");
    const [petSkill1, setpetSkill1] = useState("");
    const [petSkill2, setpetSkill2] = useState ("");
    const [petSkill3, setpetSkill3] = useState ("");
    const [errs, setErrs] = useState({});
    const submitForm = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets/", {
            petName: petName,
            petType: petType,
            petDesc: petDesc,
            petSkill1: petSkill1,
            petSkill2: petSkill2,
            petSkill3: petSkill3,
            })
        .then((response) => {
            if (response.data.errors){
                console.log(response.data.errors);
                setErrs(response.data.errors);
            } else {
            console.log(response.data);
            navigate(`/pets/${response.data._id}`);
            }
        })
        .catch((err) => 
        console.log(err)
        );
    }
    return (
        <div>
            <h2>Edit Pet</h2>
            <form onSubmit={submitForm}>
                <div>
                    <label>Pet Name:</label>
                    {
                        errs.petName ?
                        <span className="error-test">{errs.petName.message}</span>
                        :null
                    }
                    <input
                        type="text"
                        name="petName"
                        value={petName}
                        onChange={(e) => setpetName(e.target.value)}
                    />
                    <label>Pet Type:</label>
                    {
                        errs.petType ?
                        <span className="error-test">{errs.petType.message}</span>
                        :null
                    }
                    <input
                        type="text"
                        name="petType"
                        value={petType}
                        onChange={(e) => setpetType(e.target.value)}
                    />
                    <label>Description of pet:</label>
                    {
                        errs.petDesc ?
                        <span className="error-test">{errs.petDesc.message}</span>
                        :null
                    }
                    <input
                        type="text"
                        name="petDesc"
                        value={petDesc}
                        onChange={(e) => setpetDesc(e.target.value)}
                    />
                    <h3>List your pet's skills:</h3>
                    <label>Skill 1:</label>
                    <input
                        type="text"
                        name="petSkill1"
                        value={petSkill1}
                        onChange={(e) => setpetSkill1(e.target.value)}
                    />
                    <label>Skill 2:</label>
                    <input
                        type="text"
                        name="petSkill2"
                        value={petSkill2}
                        onChange={(e) => setpetSkill2(e.target.value)}
                    />
                    <label>Skill 3:</label>
                    <input
                        type="text"
                        name="petSkill3"
                        value={petSkill3}
                        onChange={(e) => setpetSkill3(e.target.value)}
                    />
                </div>
                <button type="submit">Add this pet</button>
                <button onClick={() => navigate('/pets')}>Back</button>
            </form>
        </div> 
    )
}

export default NewPet;