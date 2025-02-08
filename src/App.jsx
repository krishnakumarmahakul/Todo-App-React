import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SideBar from './Component/Pages/Sidebar/Sidebar';
import Header from './Component/Header/Header'; // Importing Header
import style from './App.module.css';

function App() {
  const location = useLocation();
  const showHeader = !['/', '/Login', '/Register'].includes(location.pathname);

  return (
    <>
    {showHeader && <Header />}
      <SideBar />
      <div className={style.contentArea}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
