import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';
const Services = () => {
    const services = [
        {
            _id:1,
            img:fluoride,
            title:"Fluoeide Treatment",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, sequi.",
        },
        {
            _id:2,
            img:cavity,
            title:"Cavity Filling",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, sequi.",
        },
        {
            _id:3,
            img:whitening,
            title:"Teeth Whitening",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, sequi.",
        },
    ]
    return (
        <div>
            <div className='text-center my-10'>
                <h3 className='text-xl'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;