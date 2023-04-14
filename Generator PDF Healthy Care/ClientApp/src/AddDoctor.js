import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './PersonalForm.css';

function AddDoctor() {



    const [specializations, setSpecializations] = useState([]);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        specializationId: '',
        licenseNumber: ''
    });

    const navigateToDoctorsList = () => {
        navigate("/doctorsList");
    };


    async function specializationsData() {
        const response = await fetch('api/Specialization/GetSpecializations');

        if (response.ok) {
            const data = await response.json();
            setSpecializations(data);
        } else {
            alert("HTTP Error: " + response.status)
        }
    }


    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async event => {
        console.log(formData);
        event.preventDefault();
        try {
            const response = await fetch('api/Doctor/CreateDoctor', {
                method: "POST",
                mode: 'cors',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    phone: formData.phone,
                    email: formData.email,
                    specializationId: formData.specializationId,
                    licenseNumber: formData.licenseNumber
                })
            })
            console.log("To jest response" + response.statusText)
            if (!response.ok) {
                console.log("Failed to add patient");
                alert("HTTP Error: " + response.status)
            } else {
                console.log("Patient added successfully");
                navigateToDoctorsList();
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };


    useEffect(() => {
        specializationsData();
    }, []);


    console.log(specializations);

    return (
        <form className="personal-form" onSubmit={handleSubmit}>
            <label htmlFor="firstName">Imię:</label>
            <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
            />

            <label htmlFor="lastName">Nazwisko:</label>
            <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
            />


            <label htmlFor="phone">Telefon:</label>
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

            <label htmlFor="lastName">Numer Licencji:</label>
            <input
                type="text"
                name="licenseNumber"
                value={formData.licenseNumber}
                onChange={handleInputChange}
            />

            <label htmlFor="specialization">Wybierz specjalizacje:</label>
            <select name="specializationId" onChange={handleInputChange}>
                <option value="">Wybierz Specjalizacje</option>
                {specializations.map(specialization => (
                    <option key={specialization.id} value={specialization.id}>{specialization.name}</option>
                ))}
            </select>

            <button type="submit">Submit</button>
        </form>


    );
}

export default AddDoctor;
