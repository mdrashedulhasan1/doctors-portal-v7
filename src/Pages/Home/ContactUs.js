import React from 'react';
import appoinment from '../../assets/images/appointment.png'
const ContactUs = () => {
    const bgImg = {
        backgroundImage: `url(${appoinment})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    return (
        <div style={bgImg} className='mt-12 py-12'>
            <div className='text-center text-white'>
                <h3 className='text-xl'>Contact Us</h3>
                <h2 className='text-2xl'>Stay Contact With Us</h2>
            </div>
            <div className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                <input type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" />
                <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Your message"></textarea>
            </div>
        </div>
    );
};

export default ContactUs;