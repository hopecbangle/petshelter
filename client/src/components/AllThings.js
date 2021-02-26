import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate} from '@reach/router';

const AllThings = (props) => {
    const [allThings, setAllThings] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/things/")
        .then((response) => {
            console.log(response.data);
            setAllThings(response.data);
        })
        .catch (err => console.log (err));
    }, []);
    return (
        <div>
            <h2>All Things</h2>
            {
                allThings.map((things, index) => (
                    <div>
                        <img
                            src={ things.pictureUrl }
                            alt={ "Selfie" } />
                            <h4>{`${things.firstName} ${things.lastName}'s Picture`}</h4>
                            <button onClick={() => navigate(`/things/${things._id}`)}>View {`${things.firstName} ${things.lastName}'s Details`}</button>
                            <button>Delete Thing</button>
                    </div>
                ))
            }
        </div> 
    )
}

export default AllThings;