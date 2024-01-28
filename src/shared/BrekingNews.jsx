import React from 'react';
import '../App.css'
import Marquee from "react-fast-marquee";
const BrekingNews = () => {
    return (
        <div className='flex  items-center border border-dotted p-2'>
            <button className='btn btn-error mr-2 '>Bracking News</button>
            <Marquee>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
        </div>
    );
};

export default BrekingNews;