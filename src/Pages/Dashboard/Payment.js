import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1agwBzLVqk0mmTI2e7uxpF8JjzkFrUpLSGPL1hyC5j543PmHxTkzUMrS4CwcPe9WSLrA8u8Fn9EFWZCW0LFPVX005mFQkgGf');

const Payment = () => {

    const { id } = useParams();

    const url = `http://localhost:5000/booking/${id}`;

    //[id] as a dependency . more then one items may be kep in array
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>  // it will work before data is loading 
    }
    return (
        <div>

            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className='text-success font-bold'> Hello , {appointment.patientName}</p>
                    <h2 className="card-title">Pay for {appointment.treatment}</h2>
                    <p>We will see you on <span className='text-orange-700'>{appointment.date}</span>  at {appointment.slot}</p>
                    <p>Please pay: ${appointment.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>

        </div>
    );
};

export default Payment;