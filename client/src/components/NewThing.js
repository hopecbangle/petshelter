import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate} from '@reach/router';


const NewThing = (props) => {
    const [updates, setUpdates] = useState(true);
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [eMail, setEmail] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [birthDate, setbirthDate] = useState ();
    const [pictureUrl, setpictureUrl] = useState ("");
    const [categories, setcategories] = useState ("Cat1");
    const submitForm = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/things/", {
            firstName: firstName,
            lastName: lastName,
            eMail: eMail,
            updates: updates,
            phoneNumber:phoneNumber,
            birthDate:birthDate,
            pictureUrl:pictureUrl,
            categories:categories
        })
        .then((response) => {
            console.log(response.data);
            navigate(`/things/${response.data._id}`);
        })
        .catch((err) => 
        console.log(err)
        );
    }
    return (
        <div>
            <h2>New Thing</h2>
            <form onSubmit={submitForm}>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value)}
                    />
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)}
                    />
                    <label>Email:</label>
                    <input
                        type="text"
                        name="eMail"
                        value={eMail}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Would you like to receive email updates on our latest products?</label>
                    <input
                        type="checkbox"
                        name="updates"
                        checked={updates}
                        onChange={() => setUpdates(!updates)}
                    />
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setphoneNumber(e.target.value)}
                    />
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        name="birthDate"
                        value={birthDate}
                        onChange={(e) => setbirthDate(e.target.value)}
                    />
                    <label>Place a link to your picture here:</label>
                    <input
                        type="text"
                        name="pictureUrl"
                        value={pictureUrl}
                        onChange={(e) => setpictureUrl(e.target.value)}
                    />
                    <label>What category interests you the most?</label>
                    <select>
                        name="categories"
                        value={categories}
                        onChange={(e) => setcategories("e.target.value")}
                        <option value="Cat1">Category 1</option>
                        <option value="Cat2">Category 2</option>
                        <option value="Cat3">Category 3</option>
                        <option value="Cat4">Category 4</option>
                    </select>
                </div>
                <button type="submit">Add my thing</button>
            </form>
        </div> 
    )
}

export default NewThing;