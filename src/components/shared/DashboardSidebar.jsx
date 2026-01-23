import Link from 'next/link';
import React from 'react';

const DashboardSidebar = () => {
    return (
        <div className='w-50 '>
            <h1 className='font-bold'>CarWash</h1>

            <ul>
                <li className='bg-amber-200 font-semibold'><Link>Services</Link></li>
            </ul>
        </div>
    );
};

export default DashboardSidebar;