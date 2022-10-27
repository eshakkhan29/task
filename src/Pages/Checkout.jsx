import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();
    const propertys = useSelector((state) => state.propertyReducer.property);
    let totalPrice = 0;
    propertys.map((property) => {
        return totalPrice = parseFloat(totalPrice) + parseFloat(property.asking_price);
    })
    return (
        <div className='flex justify-center items-center h-screen'>
            <div>
                <h1 className='text-center font-bold text-3xl py-4'>Thank you for your purchase.</h1>
                <p className='text-base text-center'>You have purchased {propertys.length} properties for {totalPrice}</p>
                <div className='py-10 text-center'>
                    <button onClick={() => navigate("/")} className='text-white bg-black py-2 font-bold px-14'>Go back to Store</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;