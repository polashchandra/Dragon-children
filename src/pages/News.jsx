import React from 'react';
import { Link } from 'react-router-dom';

const News = ({ news }) => {
    const {_id, image_url, title, details } = news;
    return (
        <div>
            
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        details.length >200 
                        ?<p>{details.slice(0,200)}<Link to={`/news/${_id}`}>seemore ....</Link></p>
                        :<p>{details}</p>
                    }
                </div>



            </div>
        </div>
    );
};

export default News;