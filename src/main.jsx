import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Component/Pages/Home/Home.jsx';
import Dashbord from './Component/Pages/Dashbord/Dashbord.jsx';
import Landing from './Component/Pages/Landing/Landing.jsx';
import Login from './Component/Pages/Login/Login.jsx';
import Register from './Component/Pages/Register/Register.jsx';
import Footer from './Component/Footer/Footer.jsx';
import { store } from './store.js';
import { Provider } from 'react-redux';
import Getstarted from './Component/GetStarted/Getstarted.jsx';
import { Navigate } from "react-router-dom";
import Upcomming from "./Component/Pages/Upcomming/Upcomming.jsx"



const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Getstarted />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/App" element={<App />}>
            <Route path="Home" element={<Home />} />
            <Route path="Dashbord" element={<Dashbord />} />
            <Route path="Landing" element={<Landing />} />
            <Route path='Upcomming' element={<Upcomming/>}/>
          </Route>
          <Route path="*" element={<Navigate to="Upcomming" />} />
        </Routes>
        <br />
        <br /><br />
        <Footer />
      </Router>
    </StrictMode>
  </Provider>
  );

