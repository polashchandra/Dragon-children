import React from 'react';
import image from '../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className=' text-center '>
            <img className='mx-auto' src={image} alt="" />
            <h1 className='text-2xl'>Journalism Without Fear or Favour</h1>
            <p>{moment().format('dddd,MMMM DD,YYYY')}</p>
        </div>
    );
};

export default Header;