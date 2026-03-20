import React from 'react';
import { useLoaderData } from 'react-router';
import App from '../App/App';

const Apps = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className='my-20 md:px-20'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold mb-2'>Trending Apps</h2>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-4 gap-4 mt-8'>
                {
                    data.map(app => <App key={app.id} app={app}></App>)
                }
            </div>
        </div>
    );
};

export default Apps;