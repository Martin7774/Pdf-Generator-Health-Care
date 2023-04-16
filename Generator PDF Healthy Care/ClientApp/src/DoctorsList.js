import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import styles from "./ListStyle.css";
import Navigation from "./Navigation";

const DoctorsList = () => {
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([]);

    const navigateToaddDoctor = () => {
        navigate("/addDoctor");
    };

    async function doctorsData() {
        const response = await fetch("api/Doctor/GetDoctors");
        if (response.ok) {
            const data = await response.json();
            setDoctors(data);
        } else {
            alert("HTTP Error: " + response.status);
        }
    }

    useEffect(() => {
        doctorsData();
    }, []);

    const deleteDoctor = async (id) => {
        const response = await fetch(`api/Doctor/DeleteDoctor/${id}`, {
            method: "DELETE",
        });
        if (response.ok) {
            doctorsData();
        } else {
            alert("HTTP Error: " + response.status);
        }
    };

    const generatePDF = (doctor) => {
        console.log("Wszedł do PDF");
        const doc = new jsPDF();

        doc.autoTable({
            head: [["Name", "Value"]],
            body: [
                ["Id Lekarza", doctor.id],
                ["Imię", doctor.firstName],
                ["Nazwisko", doctor.lastName],
                ["Telefon", doctor.phone],
                ["E-mail", doctor.email],
                ["Specjalizacja", doctor.specialization.name],
                ["Numer Licencji", doctor.licenseNumber]
            ],
        });
        console.log("Zapisuje do PDF")
        doc.save(`Doctor_${doctor.id}.pdf`);
    };

    console.log(doctors);

    return (
        <>
            <Navigation className="navigation" />
            <div className="container">
                <h1>Lekarze</h1>
                <div className="row">
                    <div className="col-sm-12">
                        <button onClick={navigateToaddDoctor}>Dodaj Lekarza</button>
                        <table className="table table-stripped">
                            <thead>
                                <tr>
                                    <th>
                                        Id Lekarza
                                    </th>
                                    <th>
                                        Imię
                                    </th>
                                    <th>
                                        Nazwisko
                                    </th>
                                    <th>
                                        Telefon
                                    </th>
                                    <th>
                                        E-mail
                                    </th>
                                    <th>
                                        Specjalizacja
                                    </th>
                                    <th>
                                        Numer Licencji
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
                                {doctors.map((item) => (
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
                                            {item.phone}
                                        </td>
                                        <td>
                                            {item.email}
                                        </td>
                                        <td>
                                            {item.specialization.name}
                                        </td>
                                        <td>
                                            {item.licenseNumber}
                                        </td>
                                        <td>
                                            <button onClick={() => generatePDF(item)}>PDF</button>
                                        </td>
                                        <td>
                                            <button onClick={() => deleteDoctor(item.id)}>Usuń</button>
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

export default DoctorsList;
