import React from 'react';
import Nav from './Nav';
import Rightnav from '../shared/rightnav';

const NewsDetels = () => {
    return (
        <div>
            <Nav></Nav>
            <div className='grid grid-cols-4'>
                <div className='col-span-3'>

                </div>
                <div className='col-span-1'>
                    <Rightnav></Rightnav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetels;