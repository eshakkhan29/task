import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartProperty from '../components/CartProperty';

const Cart = () => {
    const navigate = useNavigate()
    const propertys = useSelector((state) => state.propertyReducer.property);
    const cartItem = propertys.length;
    let totalPrice = 0;
    propertys.map((property) => {
        const price = parseFloat(totalPrice) + parseFloat(property.asking_price);
        return totalPrice = price.toFixed(2);
    })
    return (
        <div className='flex flex-col justify-between w-full h-screen'>

            <div className='flex items-center justify-between mx-8 pt-5 pb-10'>
                <p onClick={() => navigate('/')} className='cursor-pointer text-2xl font-bold'>SHOP</p>
                <div className='relative'>
                    <p onClick={() => navigate('/cart')} className='text-2xl font-bold cursor-pointer'>Cart
                        <p className='absolute -top-3 -right-3 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-base text-white'>{cartItem}</p>
                    </p>
                </div>
            </div>
            {propertys.length === 0 && <div className='h-[500px] flex items-center justify-center'>
                <h1 className='text-4xl font-bold'>You have no cart item</h1>
            </div>}
            <div className='grid grid-cols-1 gap-5 lg:w-4/12 lg:mx-auto'>
                {
                    propertys.map((property, i) => <CartProperty key={i} property={property} />)
                }
            </div>
            <div className='mx-8 py-3'>
                <hr className='border border-black' />
                <div className='flex items-center justify-between py-2'>
                    <p className='font-bold text-2xl'>Total = <span>{totalPrice}</span></p>
                    <button onClick={() => navigate('/checkout')} className='text-white bg-black py-2 font-bold text-2xl px-14'>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;