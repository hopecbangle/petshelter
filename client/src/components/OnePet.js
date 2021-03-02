import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate} from '@reach/router';



const OnePet = (props) => {
    const [onePet, setOnePet] = useState ([]);
    const { id } = props;
    const [pet, setPet] = useState ({});
        useEffect (() => {
        axios.get("http://localhost:8000/api/pets/" + id )
            .then((res) => {
                //const updatedPet = res.data;
                console.log(res.data);
                setPet(res.data);
               
            })
            .catch((err) => 
            console.log(err)
            );
        }, []);
        const adoptPet = (id) => {
            axios.delete("http://localhost:8000/api/pets/" + id)
                .then((res) => {
                    console.log(res.data);
                    const filteredPetArray = onePet.filter((pets) => pets._id !==id);
                    setOnePet(filteredPetArray);
                    navigate ('/pets/');
                })
                .catch (err => console.log (err));
        }
    return (
        <div>
        <h1>Pet Shelter</h1>
        <div className="linkClass">
                <Link to = {('/pets/')}>back to home</Link>
        </div>
        <h2>Details about: { pet.petName }</h2>
        <div>
            <button className="deleteBtn" onClick={() => adoptPet(id)}>Adopt</button>
        </div>
        <p>Pet Name: { pet.petName }</p>
        <p>Pet Type: { pet.petType }</p>
        <p>Pet Description: { pet.petDesc }</p>
        <p>Pet Skill 1: {pet.petSkill1}</p>
        <p>Pet Skill 2: {pet.petSkill2}</p>
        <p>Pet Skill 3: {pet.petSkill3}</p>
        
       </div> 
    )
}

export default OnePet;