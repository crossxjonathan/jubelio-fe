/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import InputText from '../../../component/module/input/inputText';
import Button from './../../../component/base/button/button';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SellerRegister = () => {
    const [form, setForm] = useState({
        email: '',
        fullname: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm({
            ...form,
            [id]: value,
        });
    };

    // const validateForm = () => {
    //     const { email, fullname, phone, password, confirmPassword } = form;

    //     if (!email || !fullname || !phone || !password || !confirmPassword) {
    //         toast.error('All fields are required!');
    //         return false;
    //     }

    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (!emailRegex.test(email)) {
    //         toast.error('Invalid email format');
    //         return false;
    //     }

    //     if (password !== confirmPassword) {
    //         toast.error('Password not match');
    //         return false;
    //     }

    //     return true;
    // };

    // const handleRegisterAdmin = async () => {
    //     if (!validateForm()) return;

    //     try {
    //         const response = await fetch(`${import.meta.env.VITE_URL_DANS}/users/register/admin`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(form),
    //         });

    //         const data = await response.json();

    //         if (response.ok) {
    //             toast.success('Registration successful!');
    //             navigate('/auth/login');
    //         } else {
    //             toast.error(data.message || 'Registration failed');
    //         }
    //     } catch (error) {
    //         toast.error('Something went wrong. Please try again later.');
    //     }
    // };

    const LoginAccount = () => {
        navigate('/auth/login');
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-28 z-0'>
            <div className='w-full max-w-sm'>
                <div className='flex flex-col mb-4'>
                    <label className='text-lg font-semibold mb-2 px-5' htmlFor="email">Email</label>
                    <InputText id="email" value={form.email} onChange={handleChange} />
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='text-lg font-semibold mb-2 px-5' htmlFor="fullname">Fullname</label>
                    <InputText id="fullname" value={form.fullname} onChange={handleChange} />
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='text-lg font-semibold px-5' htmlFor="phone">Phone</label>
                    <InputText id="phone" type="number" value={form.phone} onChange={handleChange} />
                </div>
                <div className='flex flex-col mb-6'>
                    <label className='text-lg font-semibold mb-2 px-5' htmlFor="password">Password</label>
                    <InputText id="password" type="password" value={form.password} onChange={handleChange} />
                </div>
                <div className='flex flex-col mb-6'>
                    <label className='text-lg font-semibold px-5' htmlFor="confirmPassword">Re-type Password</label>
                    <InputText id="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} />
                </div>
                <div className='flex relative left-5 justify-center'>
                    <Button
                        // onClick={handleRegisterAdmin}
                        className="w-full bg-blue-600 text-white hover:bg-blue-800 transition-colors duration-300"
                    >
                        Register
                    </Button>
                </div>
                <div className='flex justify-center py-5'>
                    <p>Already have an account?
                        <span
                            onClick={LoginAccount}
                            className='px-1 text-blue-500 font-bold hover:cursor-pointer hover:text-blue-700'
                        >
                            Login
                        </span>
                    </p>
                </div>
            </div>
            <ToastContainer position='bottom-right' />
        </div>
    );
};

export default SellerRegister;
