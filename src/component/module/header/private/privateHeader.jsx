/* eslint-disable no-unused-vars */
import React from 'react';
import Button from '../../../base/button/button';
import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookies';
import HomeIcon from '../../../../assets/icons/home.png';
import CartIcon from '../../../../assets/icons/cart.png';

const PrivateHeader = () => {
    const Navigate = useNavigate();

    const Home = () => {
        Navigate('/dashboard/homepage')
    }

    const Checkout = () => {
        Navigate('/dashboard/checkout-product')
    }

    const MyProfile = () => {
        Navigate('/dashboard/profile')
    }

    const LogoutButton = () => {
        // Cookies.remove('Token');
        Navigate('/');
    };



    return (
        <div id='mainheader'>
            <div className='flex justify-between bg-white py-7 w-full p-28 float-start fixed shadow-lg z-10'>
                <h1 className='font-sans font-bold text-4xl text-blue-700 animate-bounce'>Jubelio <span className='text-teal-700'>pedia</span></h1>
                <div className='flex justify-between gap-5'>
                    <div onClick={Home}>
                        <img className='w-10 hover:bg-tosca hover:rounded-full transition-colors duration-400 hover:cursor-pointer' src={HomeIcon} alt="HomeIcon" />
                    </div>
                    <div onClick={Checkout}>
                        <img className='w-10 hover:bg-tosca hover:rounded-full transition-colors duration-400 hover:cursor-pointer' src={CartIcon} alt="HomeIcon" />
                    </div>
                    <div>
                        <Button onClick={MyProfile} className="bg-blue-500 text-white hover:bg-blue-600"><p>Profile</p></Button>
                    </div>
                    <div>
                        <Button onClick={LogoutButton} className="bg-red-700 text-white hover:bg-red-600"><p>Log out</p></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivateHeader