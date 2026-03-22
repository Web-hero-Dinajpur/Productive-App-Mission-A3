import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import App from '../App/App';

const Apps = () => {
    const data = useLoaderData();
    // console.log(data)

    const [showAll, setShowAll] = useState(false);

    const visibleData = showAll ? data : data.slice(0, 8);
    return (
        <div className='my-12 md:px-20'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold mb-2'>Trending Apps</h2>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
                {
                    visibleData.map(app => <App key={app.id} app={app}></App>)
                }
            </div>
            {!showAll && (
                <div className='flex items-center justify-center'>
                    <Link to='app' className='btn bg-gradient-to-r from-[rgb(124,58,237)] to-[rgb(99,102,241)] text-white border-none mt-4'>Show All</Link>
                </div>
            )}
        </div>
    );
};

export default Apps;