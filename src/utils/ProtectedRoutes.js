import React, { children } from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import AuthHandler from './AuthHandler'

export var ProtectedRoutes=({children, ...rest})=>{ 
    console.log({...rest});
    console.log(rest);
    return ( 
        <Outlet
        {...rest}
        render={(props)=> 
            AuthHandler.loggedIn() ? <children {...props}/> : <Navigate to='/' /> 
        }
        />
    );
};


