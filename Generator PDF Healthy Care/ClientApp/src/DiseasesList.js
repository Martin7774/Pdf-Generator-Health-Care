import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import styles from "./ListStyle.css";

const DiseasesList = () => {
    const navigate = useNavigate();
    const [diseases, setDiseases] = useState([]);

    const navigateToaddDisease = () => {
        navigate("/addDisease");
    };

    const navigateToDetails = () => {
        navigate("/diseasesDetails")
    }

    async function diseasesData() {
        const response = await fetch("api/Disease/GetDiseases");
        if (response.ok) {
            const data = await response.json();
            setDiseases(data);
        } else {
            alert("HTTP Error: " + response.status);
        }
    }

    useEffect(() => {
        diseasesData();
    }, []);

    const deleteDisease = async (id) => {
        const response = await fetch(`api/Disease/DeleteDisease/${id}`, {
            method: "DELETE",
        });
        if (response.ok) {
            diseasesData();
        } else {
            alert("HTTP Error: " + response.status);
        }
    };


    const generatePDF = (disease) => {
    //    console.log("Wszed³ do PDF");
    //    const doc = new jsPDF();

    //    doc.autoTable({
    //        head: [["Name", "Value"]],
    //        body: [
    //            ["Id Pacjenta", doctor.id],
    //            ["Imiê", doctor.firstName],
    //            ["Nazwisko", doctor.lastName],
    //            ["Data Urodzenia", doctor.dateOfBirth],
    //            ["PESEL", doctor.pesel],
    //            ["Adres", doctor.street],
    //            ["Telefon", doctor.phone],
    //            ["E-mail", doctor.email],
    //            [
    //                "Lekarz",
    //                `${doctor.doctor.firstName} ${doctor.doctor.lastName}`,
    //            ],
    //        ],
    //    });
    //    console.log("Doszed³")
    //    doc.save(`Patient_${doctor.id}.pdf`);
    };

    console.log(diseases);

    return (
        <>
            <div className="container">
                <h1>Choroby</h1>
                <div className="row">
                    <div className="col-sm-12">
                        <button onClick={navigateToaddDisease}>Dodaj Chorobê</button>
                        <table className="table table-stripped">
                            <thead>
                                <tr>
                                    <th>
                                        Id Choroby
                                    </th>
                                    <th>
                                        Nazwa
                                    </th>
                                    <th>
                                        Pacjent
                                    </th>
                                    <th>
                                        Szczegó³y
                                    </th>
                                    <th>
                                        PDF
                                    </th>
                                    <th>
                                        Usuñ
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {diseases.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            {item.id}
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.patient.firstName}
                                            <br></br>
                                            {item.patient.lastName}
                                        </td>
                                        <td>
                                            <button onClick={() => navigateToDetails(item)}>Szczegó³y</button>
                                        </td>
                                        <td>
                                            <button onClick={() => generatePDF(item)}>PDF</button>
                                        </td>
                                        <td>
                                            <button onClick={() => deleteDisease(item.id)}>Usuñ</button>
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

export default DiseasesList;
