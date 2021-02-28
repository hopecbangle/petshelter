import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate} from '@reach/router';

const OnePet = (props) => {
    const { id } = props;
    const [pet, setPet] = useState ({});
        useEffect (() => {
        axios.get("http://localhost:8000/api/pets/" + id )
            .then((res) => {
                //const updatedPet = res.data;
                console.log(res.data);
                setPet(res.data);
                /*setpetName(res.data.petName);
                setpetType(res.data.petType);
                setpetDesc(res.data.petDesc);
                setnoSkill(res.data.noSkill);
                setFetchBall(res.data.fetchBall);
                setplayDead(res.data.playDead);
                sethouseBroken(res.data.houseBroken);*/
            })
        }, []);
    return (
        <div>
        <h2>Meet { pet.petName }</h2>
        <p>Pet Name: { pet.petName }</p>
        <p>Pet Type: { pet.petType }</p>
        <p>Pet Description: { pet.petDesc }</p>
        <p>Pet Skill 1: {pet.petSkill1}</p>
        <p>Pet Skill 2: {pet.petSkill2}</p>
        <p>Pet Skill 3: {pet.petSkill3}</p>
        <div>
            <button onClick={() => navigate('/pets')}>Back</button>
        </div>
       </div> 
    )
}

export default OnePet;