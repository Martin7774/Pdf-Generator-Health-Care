import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import styles from "./ListStyle.css";
import Navigation from "./Navigation";

const PatientsList = () => {
    const navigate = useNavigate();
    const [patients, setPatients] = useState([]);

    const navigateToaddPatient = () => {
        navigate("/addPatient");
    };

    async function patientsData() {
        const response = await fetch("api/Patient/GetPatients");
        if (response.ok) {
            const data = await response.json();
            setPatients(data);
        } else {
            alert("HTTP Error: " + response.status);
        }
    }

    useEffect(() => {
        patientsData();
    }, []);

    const deletePatient = async (id) => {
        const response = await fetch(`api/Patient/DeletePatient/${id}`, {
            method: "DELETE",
        });
        if (response.ok) {
            patientsData();
        } else {
            alert("HTTP Error: " + response.status);
        }
    };

    const generatePDF = (patient) => {
        console.log("Wszedł do PDF");
        const doc = new jsPDF();

        doc.autoTable({
            head: [["Name", "Value"]],
            body: [
                ["Id Pacjenta", patient.id],
                ["Imię", patient.firstName],
                ["Nazwisko", patient.lastName],
                ["Data Urodzenia", patient.dateOfBirth],
                ["PESEL", patient.pesel],
                ["Adres", patient.street],
                ["Telefon", patient.phone],
                ["E-mail", patient.email],
                [
                    "Lekarz",
                    `${patient.doctor.firstName} ${patient.doctor.lastName}`,
                ],
            ],
        });
        console.log("Doszedł")
        doc.save(`Patient_${patient.id}.pdf`);
    };

    return (
        <>
            <Navigation className="navigation" />
            <div className="container">
                <h1>Pacjenci</h1>
                <div className="row">
                    <div className="col-sm-12">
                        <button onClick={navigateToaddPatient}>Dodaj Pacjenta</button>
                        <table className="table table-stripped">
                            <thead>
                                <tr>
                                    <th>
                                        Id Pacjenta
                                    </th>
                                    <th>
                                        Imię
                                    </th>
                                    <th>
                                        Nazwisko
                                    </th>
                                    <th>
                                        Data Urodzenia
                                    </th>
                                    <th>
                                        PESEL
                                    </th>
                                    <th>
                                        Adres
                                    </th>
                                    <th>
                                        Telefon
                                    </th>
                                    <th>
                                        E-mail
                                    </th>
                                    <th>
                                        Lekarz
                                    </th>
                                    <th>
                                        PDF
                                    </th>
                                    <th>
                                        Usuń
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {patients.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            {item.id}
                                        </td>
                                        <td>
                                            {item.firstName}
                                        </td>
                                        <td>
                                            {item.lastName}
                                        </td>
                                        <td>
                                            {item.dateOfBirth}
                                        </td>
                                        <td>
                                            {item.pesel}
                                        </td>
                                        <td>
                                            {item.street}
                                        </td>
                                        <td>
                                            {item.phone}
                                        </td>
                                        <td>
                                            {item.email}
                                        </td>
                                        <td>
                                            {item.doctor.firstName}
                                            <br></br>
                                            {item.doctor.lastName}
                                        </td>
                                        <td>
                                            <button onClick={() => generatePDF(item)}>PDF</button>
                                        </td>
                                        <td>
                                            <button onClick={() => deletePatient(item.id)}>Usuń</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PatientsList;
