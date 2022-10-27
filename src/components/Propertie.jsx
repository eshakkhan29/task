import React from 'react';
import { AiFillCaretLeft } from 'react-icons/ai';
import { BiBed } from 'react-icons/bi';
import { TbBath } from 'react-icons/tb';
import { RiCarLine } from 'react-icons/ri';
import { TbArrowAutofitContent } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { addBook } from '../fetaures/property/BooksSlice';

const Properties = ({ propertie }) => {
    const { name, image, house_type, house_info, asking_price, address } = propertie;
    const { bed, bath, garage, sqft } = house_info;
    const dispatch = useDispatch();



    return (
        <div className='lg:ml-5'>
            <div className='rounded-xl relative'>
                <img className='rounded-xl w-full object-cover h-80' src={image} alt="" />
                <div className='absolute w-full h-full  top-0 left-0 bg-gradient-to-t from-[#040404ce] via-[#ffffff00] to-[#ffffff00]'></div>
                <div className='flex absolute bottom-5 left-2/4 -translate-x-2/4 gap-x-[20px] text-white'>
                    <span className='flex text-2xl items-center'><BiBed /><span className='text-xl ml-1'> {bed}</span></span>
                    <span className='flex text-2xl items-center'><TbBath /><span className='text-xl ml-1'> {bath}</span></span>
                    <span className='flex text-2xl items-center'><RiCarLine /><span className='text-xl ml-1'> {garage}</span></span>
                    <span className='flex text-2xl items-center'><TbArrowAutofitContent /><span className='text-xl ml-1'> {sqft}</span> <sup className='text-xs ml-1'>sqft</sup></span>
                </div>
                <div className='absolute top-5 -left-5 py-[5px] px-[10px] bg-green-500 text-white rounded-r-xl z-10 shadow-[7px_5px_10px_0px_rgba(0,0,0,0.2)]'>
                    <p className='font-medium'>{house_type}</p>
                </div>
                <div className='absolute top-[30px] -left-[35px]'>
                    <AiFillCaretLeft className='text-[#ddd] text-[50px]' />
                </div>
            </div>
            <div>
                <div className='flex justify-between items-center mt-3'>
                    <div>
                        <span className='text-sm m-0'>Asking Price</span>
                        <p className='font-medium text-2xl'>${asking_price}</p>
                    </div>
                    <button onClick={() => dispatch(addBook(propertie))} className='outline-none text-white bg-gray-600 rounded-lg py-[4px] px-[35px]'>Buy</button>
                </div>
                <p className='font-medium text-lg my-2 w-9/12 leading-[1.3]'>{name.length < 40 ? name : name.slice(0, 40) + "..."}</p>
                <h4 className='text-[#2e2e2e] text-base'>{address}</h4>
            </div>
        </div>
    );
};

export default Properties;