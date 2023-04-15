import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <div className="row">
                <div className="col-sm-6 col-md-3">
                    <div className="card" onClick={() => handleClick("/patientsList")}>
                        <div className="card-body">
                            <h5 className="card-title">Pacjenci</h5>
                            <p className="card-text">Go to Page 1</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card" onClick={() => handleClick("/doctorsList")}>
                        <div className="card-body">
                            <h5 className="card-title">Lekarze</h5>
                            <p className="card-text">Go to Page 2</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card" onClick={() => handleClick("/diseasesList")}>
                        <div className="card-body">
                            <h5 className="card-title">Choroby</h5>
                            <p className="card-text">Go to Page 3</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card" onClick={() => handleClick("/page4")}>
                        <div className="card-body">
                            <h5 className="card-title">Page 4</h5>
                            <p className="card-text">Go to Page 4</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;