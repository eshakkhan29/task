import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    const propertys = useSelector((state) => state.propertyReducer.property);
    const cartItem = propertys.length;
    return (
        <div>
            <div className='flex items-center justify-between mx-8 py-10'>
                <p onClick={() => navigate('/')} className='cursor-pointer text-2xl font-bold'>SHOP</p>
                <div onClick={() => navigate('cart')} className='relative'>
                    <p className='text-2xl font-bold cursor-pointer'>Cart
                        <p className='absolute -top-3 -right-3 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-base text-white'>{cartItem}</p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;