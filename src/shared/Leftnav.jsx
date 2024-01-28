import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Leftnav = () => {
    const [catagoris,setcetagoris]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setcetagoris(data))
    },[])
    return (
        <div>
            <h1>ALL CATAGORIS</h1>
            {
                catagoris.map(cata=><Link key={cata.id} className='block'>{cata.name}</Link>)
            }
        </div>
    );
};

export default Leftnav;