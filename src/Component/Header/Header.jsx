import React from 'react';
import style from './Header.module.css'
import todo from '../../assets/icon.jpeg';
import toggle_light from '../../assets/day.png'
import toggle_night from '../../assets/night.png'
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <>
        
            <div className={style.Navbar}>

                <img src={todo} className={style.logo} alt="" />
                <ul className={style.navLinks}>
                    <i class="fa-solid fa-house"></i>
                    <li className={style.navItem}><Link to='/App/Home'>Home</Link></li>
                    <li className={style.navItem}><Link to='/App/Landing'>Add Task</Link></li>
                    <li className={style.navItem}><Link to='/App/Upcommming'>Upcomming</Link></li>
                    
                </ul>

                <div className={style.searchBox}>
                    <input type="text" placeholder='search' />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <img src={toggle_night} alt="" className={style.toggleIcon} />
                
                
            </div>
        </>
    );
};

export default Header;