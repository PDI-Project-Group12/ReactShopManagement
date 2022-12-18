import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import {ProtectedRoutes}  from './utils/ProtectedRoutes';
import LogoutComponent from './pages/LogoutComponent'
import MainComponent from './components/MainComponent';
import MainComponentCopy from './components/MainComponentCopy';
import { configure } from '@testing-library/react';




ReactDOM.render(
    <Router>
       <Routes>
            <Route exact path= '/'  element= {<Login/>}/>
            <Route exact path= {configure.logoutPageUrl}  element= {<LogoutComponent/>}/>
            <Route element= {<ProtectedRoutes/>}>
               <Route exact path= '/home' activepage="0" element ={<MainComponent/>}/>
            </Route>
            <Route element= {<ProtectedRoutes/>}>
               <Route exact path= '/company' activepage="1" element ={<MainComponentCopy/>}/>
            </Route>
            
           

       </Routes>
    </Router>,
    document.getElementById("root")
    );
