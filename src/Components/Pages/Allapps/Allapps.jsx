import React from 'react';
import { useLoaderData } from 'react-router';
import App from '../../App/App';

const Allapps = () => {
    const AllData = useLoaderData();
    return (
        <div className='px-20'>
            <div className='text-center mt-12 mb-12'>
                <h2 className='text-3xl font-bold mb-4'>Our All Applications</h2>
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex items-center justify-between my-4 font-bold'>
                <h2>({AllData.length}) Apps Found</h2>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-8'>
                {
                    AllData.map(app => <App key={app.id} app={app}></App>)
                }
            </div>
        </div>
    );
};

export default Allapps;