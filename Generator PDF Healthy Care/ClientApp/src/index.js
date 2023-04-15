import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PatientsList from './PatientsList';
import Dashboard from './DashBoard';
import PersonalInformationForm from './PersonalInformationForm';
import DoctorsList from './DoctorsList';
import AddDoctor from './AddDoctor';
import DiseasesList from './DiseasesList';
import AddDisease from './AddDisease';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patientsList" element={<PatientsList />} />
            <Route path="/doctorsList" element={<DoctorsList />} />
            <Route path="/diseasesList" element={<DiseasesList />} />
            <Route path="/addPatient" element={<PersonalInformationForm />} />
            <Route path="/addDoctor" element={<AddDoctor />} />
            <Route path="/addDisease" element={<AddDisease />} />


        </Routes>
    </BrowserRouter>
);
