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
    return (
        <div>
            <h2>All Pets</h2>
            {
                allPets.map((pets, index) => (
                    <div>
                            <h4>{`${pets.petName}'s Picture`}</h4>
                            <button onClick={() => navigate(`/pets/${pets._id}`)}>View {`${pets.petName}'s Details`}</button>
                            <button>Delete Pet</button>
                    </div>
                ))
            }
        </div> 
    )
}

export default AllPets;