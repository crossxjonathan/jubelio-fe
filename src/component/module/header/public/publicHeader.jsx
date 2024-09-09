/* eslint-disable no-unused-vars */
import React from 'react';
import Button from '../../../base/button/button';
import { useNavigate } from 'react-router-dom';

const PublicHeader = () => {
    const Navigate = useNavigate();

    const SignIn = () => {
        Navigate(`/auth/signin`)
    }

    const SignUp = () => {
        Navigate(`/auth/signup`)
    }

  return (
    <div id='header'>
            <div className='flex justify-between bg-white py-7 w-full p-28 float-start fixed shadow-lg z-20'>
            <h1 className='font-sans font-bold text-4xl text-blue-700 animate-bounce'>Jubelio <span className='text-teal-700'>pedia</span></h1>
            <div className='flex justify-between gap-5'>
                    <div>
                        <Button onClick={SignIn} className="bg-blue-500 text-white hover:bg-blue-600" ><p>Sign in</p></Button>
                    </div>
                    <div>
                        <Button onClick={SignUp} className="bg-blue-700 text-white hover:bg-blue-800"><p>Sign up</p></Button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default PublicHeader