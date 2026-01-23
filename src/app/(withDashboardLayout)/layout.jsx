import DashboardSidebar from '@/components/shared/DashboardSidebar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div className='w-full mx-auto'>
            <DashboardSidebar></DashboardSidebar>
            {children}
        </div>
    );
};

export default layout;