import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const AllPets = () => {
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
            <h1>Pet Shelter</h1>
            <div className="linkClass">
                <Link to = {('/pets/new')}>add a pet to the shelter</Link>
            </div>
            <h2>These pets are looking for a good home</h2>
            <table>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
            </table>
            {
                allPets.map((pets, index) => (
                    <div key={ index }>
                        <table>
                                
                            <tr>
                                <td>{pets.petName}</td>
                                <td>{pets.petType}</td>
                                <td>
                                    <Link to = {(`/pets/${pets._id}`)}> details </Link>
                                        <span>|</span>
                                    <Link to = {(`/pets/${pets._id}/edit`)}> edit </Link>
                                </td>
                            </tr>
                        </table>
                    </div>
                ))
            }
        </div> 
    )
}

export default AllPets;