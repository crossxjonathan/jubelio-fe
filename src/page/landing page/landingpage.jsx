/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import image1 from '../../assets/banner/exclusive-offers-for-products-jpg.webp';
import image2 from '../../assets/banner/product-banner-jpg.webp';
import image3 from '../../assets/banner/product-powerpoint-template-jpg.webp';
import image4 from '../../assets/banner/product-template-1-jpg.webp';
import image5 from '../../assets/banner/super-sale-product-template-jpg.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './landingpage.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from '../../component/base/card/card';
import { useNavigate } from 'react-router-dom';
import { Pagination } from '@mui/material';

const LandingPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const Navigate = useNavigate();

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // prevArrow: (
        //     <div className="custom-prev">
        //         <ArrowBackIcon />
        //     </div>
        // ),
        // nextArrow: (
        //     <div className="custom-next">
        //         <ArrowForwardIcon />
        //     </div>
        // ),
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
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className='flex justify-center'>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
}

export default LandingPage;
