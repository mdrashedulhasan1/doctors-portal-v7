import React from 'react';
import ContactUs from './ContactUs';
import DentalCare from './DentalCare';
import DoctorAppoinment from './DoctorAppoinment';
import FooterPart from './FooterPart';
import Info from './Info';
import Main from './Main';
import PatientsSays from './PatientsSays';
import Services from './Services';

const Home = () => {
    return (
        <div className='mx-12'>
            <Main></Main>
            <Info></Info>
            <Services></Services>
            <DentalCare></DentalCare>
            <DoctorAppoinment></DoctorAppoinment>
            <PatientsSays></PatientsSays>
            <ContactUs></ContactUs>
            <FooterPart></FooterPart>
        </div>
    );
};

export default Home;