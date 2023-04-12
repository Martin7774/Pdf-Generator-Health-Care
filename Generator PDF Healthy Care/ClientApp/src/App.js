import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './AppStyle.css';





const App = () => {

    const navigate = useNavigate();
    const [patients, setPatients] = useState([]);


    const navigateToaddPatient = () => {
      
        navigate('/addPatient');
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




    useEffect(() => {
        patientsData();
    }, []);






        console.log(patients);

    return (

        <><div className="container">
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
                                </tr>
                            </thead>
                            <tbody>
                                {patients.map((item) => (
                                    <tr>
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

                                        </td>
                                    </tr>))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div></>);
    };


export default App;