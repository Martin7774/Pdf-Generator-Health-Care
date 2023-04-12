import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './PersonalForm.css';

function PersonalInformationForm() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        pesel: '',
        street: '',
        phone: '',
        email: ''
    });

    const navigateToPatientsList = () => {

        navigate('/');
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async event => {
        const response = await fetch('api/Patient/CreatePatient', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                firstName: formData.firstName,
                lastName: formData.lastName,
                dateOfBirth: formData.dateOfBirth,
                pesel: formData.pesel,
                street: formData.street,
                phone: formData.phone,
                email: formData.email
                
            })
        })
        console.log(response);
        if (response.ok) {
            
        }
    };

    return (
        <form className="personal-form" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
            />

            <label htmlFor="lastName">Last Name:</label>
            <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
            />

            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
            />

            <label htmlFor="pesel">PESEL:</label>
            <input
                type="text"
                name="pesel"
                value={formData.pesel}
                onChange={handleInputChange}
            />

            <label htmlFor="street">Street:</label>
            <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleInputChange}
            />

            <label htmlFor="phone">Phone:</label>
            <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default PersonalInformationForm;
