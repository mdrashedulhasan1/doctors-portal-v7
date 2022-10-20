import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AvailableService from './AvailableService';
import AppoinmentModal from './AppoinmentModal';
const AvailableServices = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(()=>
    {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]
    )
    return (
        <div className='mt-12'>
            <div className='text-center text-xl'>
                <h3 className='text-primary'>Available Services On {format(date, 'PP')}</h3>
                <h3>Please Select a Service.</h3>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-2'>
                {
                    services.map(service => <AvailableService key={service._id} service={service} setTreatment={setTreatment}></AvailableService>)
                }
            </div>
            {
                treatment && <AppoinmentModal treatment={treatment} date={date}></AppoinmentModal>
            }
        </div>
    );
};

export default AvailableServices;