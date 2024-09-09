/* eslint-disable no-unused-vars */
import React from 'react';
import imageDefault from '../../assets/default/defaultProductImage.png';
import Button from '../../component/base/button/button';

const CartPage = () => {
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <div className='p-28'>
            <div>
                <h1 className='text-4xl font-bold py-5'>Check out</h1>
            </div>
            <div className='grid gap-5'>
                <div className='bg-blue-500 w-full flex flex-1 gap-5 p-5'>
                    <img className='w-48 h-48 object-cover rounded-lg' src={imageDefault} alt="imageDefault" />
                    <div className='grid gap-3'>
                        <h2 className='text-2xl font-semibold py-2'>Title product: Hello World</h2>
                        {truncateText('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, nesciunt eum? Quis aperiam corporis obcaecati dolore doloribus accusantium amet, recusandae, voluptas corrupti voluptatibus accusamus velit eum natus. Natus, temporibus officiis.', 200)}
                        <h3 className='text-xl font-medium'>Price: Rp.20.000</h3>
                        <h4 className='text-xl font-normal'>Total Item: 1</h4>
                        <div className='flex flex-1 gap-2'>
                            <Button
                                className="bg-red-700 text-white w-36 hover:bg-red-600 transition-colors duration-400"
                            >
                                Cancel
                            </Button>
                            <Button
                                className="bg-blue-700 text-white w-36 hover:bg-tosca-dark transition-colors duration-400 mb-4"
                            >
                                Add more
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='bg-blue-500 w-full flex flex-1 gap-5 p-5'>
                    <img className='w-48 h-48 object-cover rounded-lg' src={imageDefault} alt="imageDefault" />
                    <div className='grid gap-3'>
                        <h2 className='text-2xl font-semibold py-2'>Title product: Hello World</h2>
                        {truncateText('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, nesciunt eum? Quis aperiam corporis obcaecati dolore doloribus accusantium amet, recusandae, voluptas corrupti voluptatibus accusamus velit eum natus. Natus, temporibus officiis.', 200)}
                        <h3 className='text-xl font-medium'>Price: Rp.20.000</h3>
                        <h4 className='text-xl font-normal'>Total Item: 1</h4>
                        <div className='flex flex-1 gap-2'>
                            <Button
                                className="bg-red-700 text-white w-36 hover:bg-red-600 transition-colors duration-400"
                            >
                                Cancel
                            </Button>
                            <Button
                                className="bg-blue-700 text-white w-36 hover:bg-tosca-dark transition-colors duration-400 mb-4"
                            >
                                Add more
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-10'>
                <h1 className='text-4xl font-bold py-5'>Total Price: Rp. 20.000,00 </h1>
            </div>
            <Button className="bg-blue-700 text-white w-full hover:bg-tosca-dark transition-colors duration-400">Pay Now</Button>
        </div>
    )
}
export default CartPage;
