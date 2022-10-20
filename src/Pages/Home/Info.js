import React from 'react';
import clock from '../../assets/icons/clock.svg'
import location from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';
const Info = () => {
    const infos = [
        {
            _id:1,
            img:clock,
            title:"Opening Hours",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, autem.",
            bgColor:"bg-blue-500",
        },
        {
            _id:2,
            img:location,
            title:"Visit Our Location",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, autem.",
            bgColor:"bg-purple-500",
        },
        {
            _id:3,
            img:phone,
            title:"Contact Us",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, autem.",
            bgColor:"bg-pink-500",
        },
    ]
    return (
        <div style={{marginTop: '-80px'}} className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
            {
                infos.map(info => <InfoCard key={info._id} info={info} bgColor={info.bgColor}></InfoCard>)
            }
        </div>
    );
};

export default Info;