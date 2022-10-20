import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import PatientsSay from './PatientsSay';
const PatientsSays = () => {
    const says = [
        {
            _id:1,
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, unde? Hic magni numquam nesciunt aliquam? Laudantium magni quibusdam quas exercitationem.',
            img:people1,
            name:'Winson Herry',
            location:'California',
        },
        {
            _id:2,
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, unde? Hic magni numquam nesciunt aliquam? Laudantium magni quibusdam quas exercitationem.',
            img:people2,
            name:'Winson Herry',
            location:'California',
        },
        {
            _id:3,
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, unde? Hic magni numquam nesciunt aliquam? Laudantium magni quibusdam quas exercitationem.',
            img:people3,
            name:'Winson Herry',
            location:'California',
        },
    ]
    return (
        <div>
            <div className='flex justify-between mt-12'>
                <div>
                    <h3 className='text-xl'>Testimonial</h3>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='sm:w-12 lg:w-24' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
                {
                    says.map(say => <PatientsSay key={say._id} say={say}></PatientsSay>)
                }
            </div>
        </div>
    );
};

export default PatientsSays;