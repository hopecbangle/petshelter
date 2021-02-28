import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate} from '@reach/router';

const AllPets = (props) => {
    const [allPets, setAllPets] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/")
        .then((response) => {
            console.log(response.data);
            setAllPets(response.data);
        })
        .catch (err => console.log (err));
    }, []);

    const adoptPet = (id) => {
        axios.delete("http://localhost:8000/api/pets/" + id)
            .then((res) => {
                console.log(res.data);
                const filteredPetsArray = allPets.filter((pets) => pets._id !==id);
                setAllPets(filteredPetsArray);
            })
            .catch (err => console.log (err));
    }
    return (
        <div>
            <h2>All Pets</h2>
            <button onClick={() => navigate('/pets/new')}>Create a new pet for adoption</button>
            {
                allPets.map((pets, index) => (
                    <div key={ index }>
                            <hr />
                            <h4>{`${pets.petName}'s Picture`}</h4>
                            <button onClick={() => navigate(`/pets/${pets._id}`)}>View {`${pets.petName}'s Details`}</button>
                            <button onClick= {() => adoptPet(pets._id)}>Adopt Pet</button>
                            <button onClick={() => navigate(`/pets/${pets._id}/edit`)}>Update Pet</button>
                    </div>
                ))
            }
        </div> 
    )
}

export default AllPets;