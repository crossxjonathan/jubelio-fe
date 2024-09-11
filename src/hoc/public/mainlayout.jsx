/* eslint-disable no-unused-vars */
import React from 'react';
import PublicHeader from '../../component/module/header/public/publicHeader';
import { Outlet } from 'react-router-dom';
import PublicFooter from '../../component/module/header/public/publicFooter';

const MainLayout = () => {
    return (
        <div>
            <PublicHeader />
            <Outlet />
            {/* <PublicFooter /> */}
        </div>
    )
}

export default MainLayout;