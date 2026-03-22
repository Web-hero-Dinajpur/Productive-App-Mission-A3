import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const {id} = useParams();
    const DataId = parseInt(id)
    const data = useLoaderData();
    const singleData = data.find(single => single.id === DataId);
    console.log(singleData);
    const {companyName, title, description, downloads, image} = singleData;

    return (
       <div className='px-20 my-8 '>
         <div className='flex gap-8 mb-8'>
            <img className='' src={image} alt="" />
            <div>
                <h2>{title}</h2>
                <p>{companyName}</p>
                <button className='btn btn-accent mt-4'>Install Now {downloads}</button>

            </div>
            
        </div>
        <p> <span className='font-bold text-xl'>Description :</span> <br /> {description}</p>
       </div>
    );
};

export default AppDetails;