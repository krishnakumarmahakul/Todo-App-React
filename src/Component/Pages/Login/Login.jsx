import React, { useState } from 'react';
import logo from '../../../assets/icon.jpeg';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Retrieve all users from localStorage
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Find the user matching email and password
        const user = storedUsers.find(user => user.email === email && user.password === password);

        if (user) {
            navigate('/App'); // Redirect to home page
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginForm}>
                <img src={logo} alt="" className={styles.logo} />
                <h2>Login</h2>
                {error && <p className={styles.error}>{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitBtn}>Log In</button>
                </form>
                <button onClick={() => navigate('/register')} className={styles.submitBtn}>
                    Register
                </button>
            </div>
        </div>
    );
};

export default Login;
