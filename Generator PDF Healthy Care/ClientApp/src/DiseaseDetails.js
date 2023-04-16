import React from 'react';

const DiseaseDetails = ({ disease }) => {
    return (
        <div>
            <h2>Nazwa choroby: {disease.name}</h2>
            <p>Opis: {disease.description}</p>
            <p>Objawy: {disease.symptoms}</p>
            <p>Przyczyny: {disease.causes}</p>
            <p>Leczenie: {disease.treatments}</p>
            <p>Zapobieganie: {disease.prevention}</p>
            <p>ID Pacjenta: {disease.patientId}</p>
            <p>Imiê Pacjenta: {disease.patient.firstName}</p>
            <p>Nazwisko Pacjenta: {disease.patient.lastName}</p>
        </div>
    );
};

export default DiseaseDetails;