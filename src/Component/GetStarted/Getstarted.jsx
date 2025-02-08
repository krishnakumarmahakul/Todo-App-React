import React from 'react';
import styles from './Getstarted.module.css'
import { useNavigate } from 'react-router-dom';

const Getstarted = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/Login'); 
     };
    
    return (
        <>
            <div className={styles.getStartedContainer}>
                <h1 className={styles.title}>Welcome to the To-Do App</h1>
                <p className={styles.description}>Manage your tasks efficiently with our simple and powerful To-Do app.</p>
                <button className={styles.getStartedButton} onClick={handleGetStarted}>Get Started</button>
            </div>
        </>
    );
};

export default Getstarted;