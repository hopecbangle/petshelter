import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const EditPet = (props) => {
    const { id } = props;
    const [petName, setpetName] = useState("");
    const [petType, setpetType] = useState("");
    const [petDesc, setpetDesc] = useState("");
    const [petSkill1, setpetSkill1] = useState("");
    const [petSkill2, setpetSkill2] = useState ("");
    const [petSkill3, setpetSkill3] = useState ("");
    const [errs, setErrs] = useState({});

    useEffect (() => {
        axios.get("http://localhost:8000/api/pets/" + id )
            .then((res) => {
                //const updatedPet = res.data;
                console.log(res.data);
                setpetName(res.data.petName);
                setpetType(res.data.petType);
                setpetDesc(res.data.petDesc);
                setpetSkill1(res.data.petSkill1);
                setpetSkill2(res.data.petSkill2);
                setpetSkill3(res.data.petSkill3);
            })
        }, []);

        const submitForm = (e) => {
            e.preventDefault();
            axios.put("http://localhost:8000/api/pets/" + id, {
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
                <h1>Pet Shelter</h1>
                <div className="linkClass">
                    <Link to = {('/pets/')}>back to home</Link>
                </div>
                <h2>Edit: {petName} </h2>
                <form onSubmit={submitForm}>
                    <div className="inputAlign">
                        <label>Pet Name:</label><br></br>
                        {
                            errs.petName ?
                            <span className="error-text">{errs.petName.message}</span>
                            :null
                        }
                        <input
                            type="text"
                            name="petName"
                            value={petName}
                            onChange={(e) => setpetName(e.target.value)}
                        /><br></br>
                        <label>Pet Type:</label><br></br>
                        {
                            errs.petType ?
                            <span className="error-text">{errs.petType.message}</span>
                            :null
                        }
                        <input
                            type="text"
                            name="petType"
                            value={petType}
                            onChange={(e) => setpetType(e.target.value)}
                        /><br></br>
                        <label>Description of pet:</label><br></br>
                        {
                            errs.petDesc ?
                            <span className="error-text">{errs.petDesc.message}</span>
                            :null
                        }
                        <input
                            type="text"
                            name="petDesc"
                            value={petDesc}
                            onChange={(e) => setpetDesc(e.target.value)}
                        /><br></br>
                        <Button type="submit">Edit pet</Button>
                        </div>
                        <div className="inputAlign">
                        <p>List your pet's skills:</p>
                        <label>Skill 1:</label><br></br>
                    <input
                        type="text"
                        name="petSkill1"
                        value={petSkill1}
                        onChange={(e) => setpetSkill1(e.target.value)}
                    /><br></br>
                        <label>Skill 2:</label><br></br>
                    <input
                        type="text"
                        name="petSkill2"
                        value={petSkill2}
                        onChange={(e) => setpetSkill2(e.target.value)}
                    /><br></br>
                        <label>Skill 3:</label><br></br>
                    <input
                        type="text"
                        name="petSkill3"
                        value={petSkill3}
                        onChange={(e) => setpetSkill3(e.target.value)}
                    />
                    </div>
                </form>
            </div> 
        )
    }

export default EditPet;