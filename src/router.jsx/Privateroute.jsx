import React, { useContext } from 'react';
import { Authcontext } from '../provider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroute = ({children}) => {
    const {user,loder}=useContext(Authcontext)
    const location=useLocation()
    console.log(location);
    if(loder){
        return <span className="loading loading-spinner text-error"></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default Privateroute;