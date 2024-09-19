import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import NotFound_Image from '@/assets/common/404_Image.png';
import Back from '@/components/common/Back';

const NotFound = () => {
    const router = useRouter();
    const backHandler = () => {
        router.replace('/')
    } 
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center dark:text-white text-2xl">
            <div className='lg:hidden absolute top-5 left-5'>
                <Back/>
            </div>
            <p className='text-primary text-center text-2xl lg:text-5xl font-bold leading-6'><bdi>{("Sorry, page not found")}!</bdi></p>
            <div className='lg:w-64 lg:h-64'>
                <Image 
                    src={NotFound_Image} 
                    alt='404 Error' 
                    className='w-full h-full object-contain'
                    loading='lazy'
                />
            </div>
            <button className='text-white text-2xl text-center font-semibold leading-6 bg-primary px-10 py-3 rounded-3xl shadow-first' onClick={backHandler}>
                <bdi>{("Back To Home")}</bdi>
            </button>
        </div>
    );
};

export default NotFound;