import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import {ProtectedRoutes}  from './utils/ProtectedRoutes';
import MainComponent from './components/MainComponent';




ReactDOM.render(
    <Router>
       <Routes>
            <Route path= "/" element= {<Login/>}></Route>
            <Route element= {<ProtectedRoutes/>}></Route>
            <Route path= "/home" element= {<MainComponent/>}></Route>
           

       </Routes>
    </Router>,
    document.getElementById("root")
    );
