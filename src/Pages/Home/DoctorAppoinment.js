import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appoinment from '../../assets/images/appointment.png'
const DoctorAppoinment = () => {
    const bg = {
        backgroundImage: `url(${appoinment})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    return (
        <div style={bg} className='flex items-center'>
            <div style={{marginTop: '-80px'}} className='flex-6'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-6 text-white pr-5'>
               <h3 className='text-2xl'>Appoinment</h3> 
               <h2 className='my-5 text-3xl'>Make an Appoinment Today</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, assumenda optio. Ipsam obcaecati quis minima est animi velit molestias vel, delectus libero quos nemo distinctio in porro odio eum mollitia pariatur tempore cum sed. Tempora quis hic explicabo voluptate saepe.</p>
               <button className="btn btn-primary bg-blue-600 mt-3">Get Started</button>
            </div>
        </div>
    );
};

export default DoctorAppoinment;