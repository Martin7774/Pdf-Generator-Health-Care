import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './PersonalForm.css';

function PersonalInformationForm() {



    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        pesel: '',
        street: '',
        phone: '',
        email: '',
        doctorId: ''
    });


    async function doctorsData() {
        const response = await fetch('api/Doctor/GetDoctors');

        if (response.ok) {
            const data = await response.json();
            setDoctors(data);
        } else {
            alert("HTTP Error: " + response.status)
        }
    }


    const navigateToPatientsList = () => {

        navigate('/');
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async event => {
        console.log(formData);
        event.preventDefault();
        try {
            const response = await fetch('api/Patient/CreatePatient', {
                method: "POST",
                mode: 'cors',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    dateOfBirth: formData.dateOfBirth,
                    pesel: formData.pesel,
                    street: formData.street,
                    phone: formData.phone,
                    email: formData.email,
                    doctorId: formData.doctorId
                })
            })
            console.log("To jest response" + response.statusText)
            if (!response.ok) {
                console.log("Failed to add patient");
                alert("HTTP Error: " + response.status)
            } else {
                console.log("Patient added successfully");
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };


    useEffect(() => {
        doctorsData();
    }, []);


    console.log(doctors);

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

            <label htmlFor="doctor">Choose Doctor:</label>
            <select name="doctorId" onChange={handleInputChange}>
                <option value="">Select Doctor</option>
                {doctors.map(doctor => (
                    <option key={doctor.id} value={doctor.id}>{doctor.lastName}</option>
                ))}
            </select>

            <button type="submit">Submit</button>
        </form>


    );
}

export default PersonalInformationForm;
