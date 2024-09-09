/* eslint-disable no-unused-vars */
import React from 'react';
import Button from '../button/button';
import imageDefault from '../../../assets/default/defaultProductImage.png';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Card = ({ image, title, description, onClick, price }) => {
    const Navigate = useNavigate();
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    const ReadMore = () => {
        Navigate(`/dashboard/detail-product`)
    }

    return (
        <div className='flex flex-col rounded-md hover:bg-blue-500 shadow-lg transition-colors duration-300 w-64 p-5'>
        <div className='py-10'>
            <img className='w-full h-64 object-cover rounded-lg' src={image || imageDefault} alt="imageOne" />
        </div>
        <div className='grid place-items-center'>
            <h1 className="py-2 text-2xl font-bold text-nowrap text-center">
                {title || 'Hello World'}
            </h1>
            <p className='py-2 text-center'>
                {truncateText(description || 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, nesciunt eum? Quis aperiam corporis obcaecati dolore doloribus accusantium amet, recusandae, voluptas corrupti voluptatibus accusamus velit eum natus. Natus, temporibus officiis.', 100)}
            </p>
            <h1 className="py-2 text-2xl font-bold text-nowrap text-center">
                {price || 'Rp. 20.000'}
            </h1>
            <Button onClick={ReadMore} className="bg-blue-700 text-white w-36 hover:bg-tosca-dark transition-colors duration-400">Read more...</Button>
        </div>
    </div>    
    )
}

export default Card
