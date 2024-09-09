/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import profileImage from '../../assets/icons/profilepng.png';
import CardProfile from '../../component/base/card/cardprofile';
import { useNavigate } from 'react-router-dom';
import { Pagination } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const Navigate = useNavigate();

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className='grid justify-center py-36 text-center'>
                <img
                    className='w-36 h-36 ml-3 rounded-full object-cover'
                    src={profileImage}
                    alt="Profile"
                />
                <h1 className='font-semibold text-2xl'>{'John Doe'}</h1>
                <p className='text-lg font-medium text-blue-600'>{'Example@gmail.com'}</p>
            </div>
            <div className='grid px-20'>
                <div className='flex justify-between'>
                    <h1 className='font-semibold text-4xl'>My Products</h1>
                    <div>
                        <p className='text-4xl font-bold text-blue-600 hover:cursor-pointer hover:text-blue-800'>+</p>
                    </div>
                </div>
                <hr className="border-t-2 border-tosca-dark my-4" />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 py-5'>
                    <CardProfile />
                    <CardProfile />
                    <CardProfile />
                    <CardProfile />
                    <CardProfile />
                    <CardProfile />
                    <CardProfile />
                    <CardProfile />
                </div>
                <div className='flex justify-center'>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
            <ToastContainer position='bottom-right' />
        </div>
    );
};

export default Profile