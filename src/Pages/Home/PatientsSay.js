import React from 'react';

const PatientsSay = ({ say }) => {
    return (
        <div className="card shadow-xl p-5">
            <div>
                <p>{say.description}</p>
            </div>
            <div className='flex items-center mt-3'>
                <div className="avatar mr-3">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={say.img} alt="" />
                    </div>
                </div>
                <div>
                    <p>{say.name}</p>
                    <p>{say.location}</p>
                </div>
            </div>
        </div>
    );
};

export default PatientsSay;