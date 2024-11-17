import React from 'react';
import { useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Details = () =>{
    const location = useLocation();
    const person = location.state?.person

    if(!person){
        return <div className='container mt-4'>No user details found!</div>;
    }

    return (
        <div className="container mt-4">
            <div
                className="list-group-item p-0"
                style={{
                    borderRadius: '10px',
                    border: '1px solid #ddd',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#87CEEB',
                }}
            >
                <div
                    style={{
                        backgroundColor: '#6CB7D9',
                        color: 'black',
                        padding: '10px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px',
                    }}
                >
                    {person.name.title} {person.name.first} {person.name.last} - {person.login.uuid}
                </div>

                <div className="d-flex p-4">
                    <div className="d-flex flex-column align-items-center me-4">
                        <img
                            src={person.picture.large}
                            alt={`${person.name.first} ${person.name.last}`}
                            className="rounded-circle mb-3"
                            style={{
                                width: '200px',
                                height: '200px',
                                objectFit: 'cover',
                            }}
                        />
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
            </div>
        </div>
    );
};

export default Details;