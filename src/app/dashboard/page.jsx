import Link from 'next/link';
import React from 'react';

const DashboardPage = () => {
    return (
        <div>
            <h1>This is Dashboard</h1>
            <div className='flex flex-col gap-3 border-black border'>

            <Link href={'/dashboard/my-request'}>My Request</Link>
            <Link href={'/dashboard/add-pets'}>Add Pets</Link>
            <Link href={'/dashboard/my-listing'}>My Listing</Link>
            </div>
        </div>
    );
};

export default DashboardPage;