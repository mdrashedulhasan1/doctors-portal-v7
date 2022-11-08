import React from 'react';

const AvailableService = ({service, setTreatment}) => {
    const {name, slots} = service;
    console.log(service)
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{slots?.length? <span>{slots[0]}</span>:<span>No Slot AVALABLE</span>}</p>
                <p>{slots?.length} {slots?.length>1?'space':'space'} Available</p>
                <div className="card-actions">
                    <label onClick={()=> setTreatment(service)} className="btn btn-primary" htmlFor="my-modal-6">Booking Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableService;