import React, {useState, UseEffect, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const PersonList = () => {
    const [persons, setPersons] = useState([]);
    const navigate = useNavigate();

    useEffect(() =>{
        axios.get('https://randomuser.me/api/?results=10')
            .then(res => {
                console.log(res.data);
                setPersons(res.data.results);
            })
            .catch(err => console.error(err));
    }, []);

    const handleDetailsClick = (person) => {
        navigate(`/details/${person.login.uuid}`, {state: {person}});
    }

    return(
        <div className='container mt-4'>
            <ul className='list-group'>
                {persons.map((person, index) => (
                    <li key={index} className='list-group-item p-0 mb-4' style={{borderRadius: '10px', border: '1px solid #ddd', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', backgroundColor: '#87CEEB'}}>
                    <div className='d-flex p-3' 
                         style={{
                            backgroundColor: '#6CB7D9', 
                            color: 'black', padding: '10px', 
                            fontSize: '16px', 
                            fontWeight: 'bold', 
                            borderTopLeftRadius: '10px',
                            borderTopRightRadius: '10px',}}
                    >
                        <strong>{person.name.title} {person.name.first} {person.name.last} - {person.login.uuid}</strong>
                    </div>
                    <div className='d-flex  p-4'>
                        <div className="d-flex flex-column align-items-center me-4">
                            <img
                                src={person.picture.large}
                                alt={`${person.name.first} ${person.name.last}`}
                                className='rounded-circle me-3'
                                style={{width:'200px', height:'200px'}}
                            />
                            <button className='btn btn-primary mt-3' onClick={() => handleDetailsClick(person)}>Details</button>
                        </div>
                        <div className="d-flex flex-column text-start">
                            <p><strong>User Name: {person.login.username}</strong></p>
                            <p><strong>Gender:</strong> {person.gender}</p>
                            <p><strong>Time Zone Description:</strong> {person.location.timezone.description}</p>
                            <p><strong>Address:</strong> {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode}</p>
                            <p><strong>Email:</strong> {person.email}</p>
                            <p><strong>Birth Date and Age:</strong> {person.dob.date} ({person.dob.age})</p>
                            <p><strong>Register Date:</strong> {person.registered.date}</p>
                            <p><strong>Phone#:</strong> {person.phone}</p>
                            <p><strong>Cell#</strong> {person.cell}</p>
                        </div>
                    </div>
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}

export default PersonList;