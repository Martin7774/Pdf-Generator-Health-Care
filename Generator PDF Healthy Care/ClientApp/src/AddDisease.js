import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './AddDiseaseStyle.css';

function AddDisease() {


    const [patients, setPatients] = useState([]);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        symptoms: '',
        causes: '',
        treatments: '',
        prevention: '',
        patientId: ''
    });

    const navigateToDiseasesList = () => {
        navigate("/diseasesList");
    };


    async function patientsData() {
        const response = await fetch('api/Patient/GetPatients');

        if (response.ok) {
            const data = await response.json();
            setPatients(data);
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
            const response = await fetch('api/Disease/CreateDisease', {
                method: "POST",
                mode: 'cors',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    description: formData.description,
                    symptoms: formData.symptoms,
                    causes: formData.causes,
                    treatments: formData.treatments,
                    prevention: formData.prevention,
                    patientId: formData.patientId
                })
            })
            console.log("To jest response" + response.statusText)
            if (!response.ok) {
                console.log("Failed to add patient");
                alert("HTTP Error: " + response.status)
            } else {
                console.log("Patient added successfully");
                navigateToDiseasesList();
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };

    useEffect(() => {
        patientsData();
    }, []);




    return (
        <form className="disease-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nazwa choroby:</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
            />

            <label htmlFor="description">Opis choroby:</label>
            <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
            ></textarea>

            <label htmlFor="symptoms">Objawy:</label>
            <textarea
                name="symptoms"
                value={formData.symptoms}
                onChange={handleInputChange}
            ></textarea>

            <label htmlFor="causes">Przyczyny:</label>
            <textarea
                name="causes"
                value={formData.causes}
                onChange={handleInputChange}
            ></textarea>

            <label htmlFor="treatments">Metody leczenia:</label>
            <textarea
                name="treatments"
                value={formData.treatments}
                onChange={handleInputChange}
            ></textarea>

            <label htmlFor="prevention">Zapobieganie:</label>
            <textarea
                name="prevention"
                value={formData.prevention}
                onChange={handleInputChange}
            ></textarea>

            <label htmlFor="specialization">Wybierz Pacjenta:</label>
            <select name="patientId" onChange={handleInputChange}>
                <option value="">Wybierz Pacjenta</option>
                {patients.map(patient => (
                    <option key={patient.id} value={patient.id}>{patient.firstName}{patient.lastName}</option>
                ))}
            </select>

            <button type="submit">Dodaj chorobę</button>
        </form>


    );
}

export default AddDisease;
