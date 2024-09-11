/* eslint-disable no-unused-vars */
import React from 'react';
import InputText from '../../../component/module/input/inputText';
import Button from './../../../component/base/button/button';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useLogin from '../../../store/auth/login';
import Cookies from 'js-cookie';

const SigninPage = () => {
    const { form, error, setForm, setError } = useLogin();
    const navigate = useNavigate();

    const HandleChange = (e) => {
        setForm(e.target.id, e.target.value);
    };

    const ValidateForm = () => {
        if (!form.email || !form.password) {
            toast.error('Email and Password are required!');
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            toast.error('Invalid email format');
            return false;
        }
        return true;
    };

    const HandleLogin = async () => {
        if (!ValidateForm()) return;
    
        try {
            const response = await fetch(`${import.meta.env.VITE_URL_JUBELIO}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
    
            const data = await response.json();
            console.log('Server response:', data);
    
            if (response.ok) {
                const token = data.token || data.data?.token;
                if (token) {
                    Cookies.set('Token', token, { expires: 1 });
    
                    const roleResponse = await fetch(`${import.meta.env.VITE_URL_JUBELIO}/auth/check-role`, {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        },
                    });
    
                    const roleData = await roleResponse.json();
                    console.log('Role Server response:', roleData);
    
                    if (roleResponse.ok) {
                        const role = roleData.role || roleData.data?.role;
                        console.log('Role from server:', role);
    
                        if (role === 'seller') {
                            navigate('/dashboard/homepage');
                        } else if (role === 'customer') {
                            navigate('/dashboard/homepage');
                        } else {
                            toast.error('Unknown role');
                        }
                    } else {
                        toast.error('Failed to check role');
                    }
                } else {
                    toast.error('Token not found in response');
                }
            } else {
                setError(data.message || 'Login failed');
                toast.error(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('Something went wrong. Please try again later.');
        }
    };
    
    
    const RegisterAccount = () => {
        navigate('/auth/signup');
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-20 z-0'>
            <div className='w-full max-w-sm'>
                {error && (
                    <div className='text-red-500 text-center mb-4'>
                        {error}
                    </div>
                )}
                <div className='flex flex-col mb-4'>
                    <label className='text-lg font-semibold mb-2 px-5' htmlFor="email">Email</label>
                    <InputText id="email" value={form.email} onChange={HandleChange} />
                </div>
                <div className='flex flex-col mb-6'>
                    <label className='text-lg font-semibold mb-2 px-5' htmlFor="password">Password</label>
                    <InputText id="password" type="password" value={form.password} onChange={HandleChange} />
                </div>
                <div className='flex relative left-5 justify-center'>
                    <Button
                        onClick={HandleLogin}
                        className="w-full bg-blue-600 text-white hover:bg-blue-800 transition-colors duration-300">Login</Button>
                </div>
                <div className='flex justify-center py-5'>
                    <p>Don’t have an account yet?
                        <span
                            onClick={RegisterAccount}
                            className='px-1 text-blue-500 font-bold hover:cursor-pointer hover:text-blue-700'>
                            Register
                        </span>
                    </p>
                </div>
            </div>
            <ToastContainer position='bottom-right'/>
        </div>
    );
};

export default SigninPage;
