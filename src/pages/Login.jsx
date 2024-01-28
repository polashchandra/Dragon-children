import React, { useContext } from 'react';
import Nav from './Nav';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import { Authcontext } from '../provider/Authprovider';

const Login = () => {
    const {signin}=useContext(Authcontext)
    const location=useLocation();
    const Navigate=useNavigate();
    const handle=event=>{

        event.preventDefault();
        const from=new FormData(event.currentTarget)
        const email=from.get('email');
        const password=from.get('password')
        console.log(email,password)


        signin(email,password)
        .then(result=>{
            console.log(result.user);
            Navigate(location?.state ?location.state:'/')
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <Nav></Nav>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handle} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email'placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a><Link to="/Register" className='text-blue-600'> Register</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;