import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const AppoinmentModal = ({ treatment, date }) => {
    const formattedDate = format(date, 'PP');
    const [user, loading, error] = useAuthState(auth);
    const { _id, name, slots } = treatment;
    const appoinmentSubmit = (e) => {
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(_id, name, slot);
        const bookings = {
            treatmentId: _id,
            treatment:name,
            date: formattedDate,
            slot,
            patientName: user.displayName,
            patient: user.email
        }
        fetch('http://localhost:5000/booking',{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(bookings)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                toast(`Your appoinment set ${formattedDate} at ${slot}`)
            }
            else{
                toast.error(`Already have an appoinment ${data.booking?.date} at ${data.booking?.slot}`)
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-3xl my-5">{name}</h3>
                    <form onSubmit={appoinmentSubmit} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" value={user.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="email" value={user.email} className="input input-bordered w-full max-w-xs" />
                        <input type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" className="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentModal;