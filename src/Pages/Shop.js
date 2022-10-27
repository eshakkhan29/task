import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Mapbox from '../components/Mapbox';
import Properties from '../components/Propertie';
const Shop = () => {
    const property = useSelector((state) => state.propertyReducer.property);
    const cartItem = property.length;
    const [properties, setProperties] = useState([]);
    const navigate = useNavigate()

    // const url = env.process.REACT_APP_PROPARTY_API;

    useEffect(() => {
        fetch('https://api.globalomls.com/api/properties')
            .then(res => res.json())
            .then(data => setProperties(data))
    }, []);

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
            <h1 className='font-medium text-2xl mx-8 mb-4'>Properties</h1>
            <div className='grid lg:grid-cols-5 grid-cols-1 gap-4'>
                <div className='lg:col-span-3'>
                    <div className='grid lg:grid-cols-3 grid-cols-1 custom-scroll overflow-y-scroll px-5 gap-5 h-screen'>
                        {
                            properties.map((propertie, i) => <Properties propertie={propertie} key={i} />)
                        }
                    </div>
                </div>
                <div className='lg:col-span-2 h-screen w-full'>
                    <Mapbox properties={properties} />
                </div>
            </div>
        </div>
    );
};

export default Shop;