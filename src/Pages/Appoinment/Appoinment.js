import React from 'react';
import FooterPart from '../Home/FooterPart';
import AppoinmentMain from './AppoinmentMain';
import AvailableServices from './AvailableServices';

const Appoinment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div className='mx-12'>
            <AppoinmentMain date={date} setDate={setDate}></AppoinmentMain>
            <AvailableServices date={date}></AvailableServices>
            <FooterPart></FooterPart>
        </div>
    );
};

export default Appoinment;