/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import image1 from '../../assets/banner/exclusive-offers-for-products-jpg.webp';
import image2 from '../../assets/banner/product-banner-jpg.webp';
import image3 from '../../assets/banner/product-powerpoint-template-jpg.webp';
import image4 from '../../assets/banner/product-template-1-jpg.webp';
import image5 from '../../assets/banner/super-sale-product-template-jpg.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../landing page/landingpage';
import Card from '../../component/base/card/card';
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import imageDefault from '../../assets/default/defaultProductImage.png';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);
    const navigate = useNavigate();

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_URL_JUBELIO}/products`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await res.json();
                console.log(data, '<<<<<<<<<<<<<<<<<<<<<<data');
                
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        };

        getAllProducts();
    }, []);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(products.length / productsPerPage);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div id='landingpage'>
            <div className='slider-container'>
                <Slider {...settings}>
                    <div className="slider-image">
                        <img src={image1} alt="image1" />
                    </div>
                    <div className="slider-image">
                        <img src={image2} alt="image2" />
                    </div>
                    <div className="slider-image">
                        <img src={image3} alt="image3" />
                    </div>
                    <div className="slider-image">
                        <img src={image4} alt="image4" />
                    </div>
                    <div className="slider-image">
                        <img src={image5} alt="image5" />
                    </div>
                </Slider>
            </div>
            <div className='productlist'>
                <h1 className='py-2 text-3xl font-bold'>Product List</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                    {currentProducts.length > 0 ? (
                        currentProducts.map((product) => (
                            <Card 
                                key={product.id}
                                title={product.title || 'Title:'}
                                description={product.description || 'Description:'}
                                price={'$' + product.price || 'Price:'}
                                image={product.images || imageDefault}
                            />
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </div>
            <div className='flex justify-center'>
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    );
}

export default HomePage;
