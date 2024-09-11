/* eslint-disable no-unused-vars */
import React from 'react';
import ImageDetail from '../../assets/default/defaultProductImage.png';
import Button from '../../component/base/button/button';

const DetailProduct = () => {
    return (
        <div>
            <div className='grid justify-center py-36'>
                <div className='flex justify-center'>
                <img className='w-full max-w-4xl px-48 object-cover' src={ImageDetail} alt="ImageDetail" />
                </div>
                <div className='px-48'>
                    <h1 className='text-4xl font-semibold py-5'>Title: Hello World</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat inventore,
                        deleniti vero aut necessitatibus cupiditate aliquam! Similique et pariatur,
                        enim, dicta esse optio beatae neque, ut reprehenderit autem fugit dolorum.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat inventore,
                        deleniti vero aut necessitatibus cupiditate aliquam! Similique et pariatur,
                        enim, dicta esse optio beatae neque, ut reprehenderit autem fugit dolorum.
                    </p>
                    <h2 className='text-2xl font-semibold py-5'>Price: Rp.20.000</h2>
                </div>
                <div className='flex justify-center py-10'>
                    <Button
                        type="submit"
                        className="w-96 bg-blue-500 hover:bg-blue-700 text-white"
                    // onClick={handleSubmit}
                    >
                        Buy Product
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct;