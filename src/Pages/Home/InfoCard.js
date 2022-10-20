import React from 'react';

const InfoCard = ({ info, bgColor }) => {
    return (
        <div className={`card card-side bg-base-100 shadow-xl bg-yellow-400 px-12 ${bgColor}`}>
            <figure><img src={info.img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{info.title}</h2>
                <p>{info.description}</p>
            </div>
        </div>
    );
};

export default InfoCard;