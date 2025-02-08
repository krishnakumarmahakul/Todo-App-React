import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
    
    return (
        <div>
            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    <p>© 2025 Your Company. All rights reserved.</p>
                    <div className={styles.footerLinks}>
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Service</a>
                        <a href="#contact">Contact Us</a>
                    </div>
                    <p>Follow us on:</p>
                    <div className={styles.footerLinks}>
                        <a href="#facebook">Facebook</a>
                        <a href="#twitter">Twitter</a>
                        <a href="#linkedin">LinkedIn</a>
                        <a href="#instagram">Instagram</a>
                    </div>
                    <p>Contact us at: <a href="mailto:support@yourcompany.com">support@yourcompany.com</a></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;