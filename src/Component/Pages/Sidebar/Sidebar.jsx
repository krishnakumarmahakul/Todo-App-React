import React from 'react';
import style from './Sidebar.module.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.notificationBar}>Notif +
                    <div className={style.notificationIcon}>
                        <i class="fa-solid fa-bell"></i>
                        <i class="fa-solid fa-square-check"></i>
                    </div>

                </div>
                <div className={style.functionality}>
                    <div className={style.content}>
                        <i className="fa-solid fa-plus"></i>
                        <Link to="/App/Landing" className={style.links}>Add Task</Link>

                    </div>
                    <div className={style.content}>
                        <i className="fa-solid fa-magnifying-glass"></i>Search
                    </div>
                    <div className={style.content}>
                        <i class="fa-solid fa-calendar-week"></i>Today
                        <Link to='/Home' className={style.links}></Link>
                    </div>
                    <div className={style.content}>
                        <i class="fa-regular fa-calendar-days"></i><Link to='/App/Upcommming'>Upcomming</Link>
                    </div>
                    <div className={style.content}>
                        <i class="fa-regular fa-square"></i>Filter & Labels
                    </div>
                </div>
                <div className={style.myproject}>
                    <i class="fa-solid fa-list-check"></i>
                    My Project
                    <div className={style.myWork}>
                        <i class="fa-regular fa-calendar-check"></i>
                        My Daily Work  <i class="fa-solid fa-angle-down"></i></div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;