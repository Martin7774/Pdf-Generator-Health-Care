import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <NavLink className={styles.navLink} activeClassName={styles.active} to="/patientsList">
                Pacjenci
            </NavLink>
            <NavLink className={styles.navLink} activeClassName={styles.active} to="/doctorsList">
                Lekarze
            </NavLink>
            <NavLink className={styles.navLink} activeClassName={styles.active} to="/diseasesList">
                Choroby
            </NavLink>
            <NavLink className={styles.navLink} activeClassName={styles.active} to="/">
                Wyloguj
            </NavLink>
        </div>
    );
};

export default Navigation;