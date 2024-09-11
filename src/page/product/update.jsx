/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import addimage from '../../assets/icons/add-image.png';
import InputText from '../../component/module/input/inputText';
import Button from './../../component/base/button/button';

const UpdateProduct = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

    useEffect(() => {
        return () => {
            if (imagePreview) {
                URL.revokeObjectURL(imagePreview);
            }
        };
    }, [imagePreview]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);

        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        }
    };

    return (
        <div className='flex flex-col md:flex-row py-28 px-28 gap-10'>
            <div className='flex flex-col items-center'>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="image-input"
                />
                <label htmlFor="image-input" className='cursor-pointer'>
                    {imagePreview ? (
                        <div className='object-cover bg-gray-500 grid justify-center rounded-xl outline-dashed w-96 h-64 py-5'>
                            <img className='w-full h-full object-cover' src={imagePreview} alt="Preview" />
                        </div>
                    ) : (
                        <div className='object-cover bg-gray-500 grid justify-center rounded-xl outline-dashed w-96 h-56 py-5 hover:bg-gray-700'>
                            <img className='w-36' src={addimage} alt="addimage" />
                            <h1 className='text-white font-semibold text-2xl'>Add Image +</h1>
                        </div>
                    )}
                </label>
                <div className='flex justify-center py-10'>
                    <Button
                        type="submit"
                        className="w-96 bg-blue-500 hover:bg-blue-700 text-white"
                        // onClick={handleSubmit}
                    >
                        Update Product
                    </Button>
                </div>
            </div>
            <div className='flex flex-col flex-grow'>
                <form>
                    <div className='mb-5'>
                        <label className='text-lg font-semibold mb-2 px-5' htmlFor="title">Title product</label>
                        <InputText
                            id="title"
                            placeholder="Write Title...."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='mb-5'>
                        <label className='text-lg font-semibold mb-2 px-5' htmlFor="title">Price product</label>
                        <InputText
                            id="price"
                            placeholder="Write Price...."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='mb-5 px-5'>
                        <label className='text-lg font-semibold mb-2' htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Write Description...."
                            className="shadow-md p-5 border w-full focus:outline-none focus:ring focus:border-blue-500 h-56"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateProduct;
