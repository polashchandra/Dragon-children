import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const Authcontext = createContext(null);

const auth = getAuth(app)



const Authprovider = ({children}) => {
    const [user,setuser]=useState(null);
    const [loder,setloder]=useState(true)
    const createuser=(email,password)=>{
        setloder(true)
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const signin=(email,password)=>{
        setloder(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout =()=>{
        setloder(true)
       return signOut(auth);
    }
    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth,(curentuser)=>{
            console.log('user is ',curentuser);
            setuser(curentuser)
            setloder(false)
        });
        return()=>{
            unsubscribe();
        }

    },[])







    const authinfo={
        user,
        createuser,
        logout,
        signin,
        loder
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;