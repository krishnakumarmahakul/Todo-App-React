import React, { useState } from 'react';
import styles from './Register.module.css';
import logo from '../../../assets/icon.jpeg';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        dob: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Retrieve existing users or initialize an empty array
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Check if email is already registered
        if (storedUsers.some(user => user.email === formData.email)) {
            setError('Email is already registered!');
            return;
        }

        // Save the new user
        storedUsers.push(formData);
        localStorage.setItem('users', JSON.stringify(storedUsers));

        alert('Registration Successful!');
        navigate('/login');
    };

    return (
        <div className={styles.registerContainer}>
            <div className={styles.registerForm}>
                <img src={logo} alt="" className={styles.logo} />
                <h2>Register</h2>
                {error && <p className={styles.error}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
                    </div>
                    <button type="submit" className={styles.submitBtn}>Register</button>
                </form>
                <button onClick={() => navigate('/login')} className={styles.submitBtn}>Login</button>
            </div>
        </div>
    );
};

export default Register;
