/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import PrivateFooter from '../../component/module/header/private/privateFooter';
import PrivateHeader from '../../component/module/header/private/privateHeader';

const PrivateLayout = () => {
    return (
        <div>
            <PrivateHeader />
            <Outlet />
            {/* <PrivateFooter /> */}
        </div>
    )
}

export default PrivateLayout;