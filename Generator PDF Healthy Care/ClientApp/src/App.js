import { useEffect, useState } from "react";



const App = () => {

    //const PatientItem = {
    //    idPatient: 0,
    //    name: "",
    //    lastName: "",
    //    dateOfBirth: "",
    //    pesel: "",
    //    street: "",
    //    phone: "",
    //    email: "",
    //    doctor: "",
    //};

    const [patients, setPatients] = useState([
        {
            idPatient: 1, name: "Jan", lastName: "Kowalski", dateOfBirth: "2001-04-23", pesel: "12345678901",
            street: "Szkolna 17", phone: "555000555", email: "example@example.com", doctor: "dr. Strange"
        }
    ]);

    //call api
    /*useEffect(() => {
        fetch("api/patient/GetPatients")
            .then(response => { return response.json() })
            .then(responseJson => {

                setPatients(responseJson)
            })
    }, [])*/

    async function patientsData() {
        const response = await fetch('api/patient/GetPatients');

        if (response.ok) {
            const data = await response.json();
            setPatients(data);
        } else {
            alert("HTTP Error: " + response.status)
        }
    }

    useEffect(() => {
        patientsData();
    }, []);


    console.log(patients);

    return (<div className="container">
        <h1>Pacjenci</h1>
        <div className="row">
            <div className="col-sm-12">
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>
                                Id Pacjenta
                            </th>
                            <th>
                                Imiê
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            patients.map((item) => (
                                <tr>
                                    <td>
                                        {item.idPatient}
                                    </td>
                                    <td>
                                        {item.name}
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
                                        {item.doctor}
                                    </td>
                                </tr>))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>)
}

export default App;