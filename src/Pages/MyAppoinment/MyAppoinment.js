import { tr } from 'date-fns/locale';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppoinment = () => {

    const [appoinments, setAppoinments] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppoinments(data))
        }
    }, [user])
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Patient</th>
                        <th>Treatment Name</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    {
                        appoinments.map((appoinment, index) => <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{appoinment.patient}</td>
                            <td>{appoinment.treatment}</td>
                            <td>{appoinment.date}</td>
                            <td>{appoinment.slot}</td>
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyAppoinment;