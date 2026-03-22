import React from 'react';
import { FaDownload } from 'react-icons/fa6';
import { FcRating } from 'react-icons/fc';
import { MdOutlineReviews } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const singleData = data.find(single => single.id === parseInt(id));
    console.log(singleData)
    if (!singleData) {
        return <div className="text-center py-20">Data not found!</div>;
    }

    const { companyName, title, description, downloads, image, ratings, reviews, ratingAvg,
    } = singleData;

    return (
        <div className='px-4 md:px-20 my-8 max-w-7xl mx-auto'>
            <div className='flex flex-col md:flex-row gap-8 mb-12 items-start'>
                <img className='w-32 h-32 rounded-2xl shadow-lg object-cover' src={image} alt={title} />
                <div>
                    <h2 className='text-4xl font-bold mb-4'>{title}</h2>
                    <p className='text-xl text-emerald-600'>{companyName}</p>
                    <div className='flex gap-8 mt-6'>
                        <p className='flex flex-col items-center gap-2 '><FaDownload className='text-3xl text-green-500' />  <span>Download</span> <span className='font-bold text-2xl'>{downloads}</span></p>
                        <p className='flex flex-col items-center gap-2 md:mx-4 '><FcRating className='text-3xl text-green-500' />  <span>RatingAvg</span> <span className='font-bold text-2xl'>{ratingAvg}</span></p>
                        <p className='flex flex-col items-center gap-2 '><MdOutlineReviews className='text-3xl text-green-500' />  <span>Reviews</span> <span className='font-bold text-2xl'>{reviews}</span></p>
                    </div>
                    <button className='btn btn-accent mt-6 px-8 rounded-full shadow-md'>
                        Install Now {downloads}
                    </button>
                </div>
            </div>

            <div className='mb-12 bg-white p-6 rounded-xl border shadow-sm'>
                <h3 className='text-2xl font-bold mb-6 text-black'>Ratings & Reviews</h3>
                <div className='flex flex-col gap-4 max-w-2xl'>
                    {ratings?.map((rating, index) => {
                        const percentage = (rating.count / (reviews || 1240)) * 100;

                        return (
                            <div key={index} className='flex items-center gap-4'>
                                <span className='w-16 text-sm font-medium text-gray-600'>{rating.name}</span>
                                <div className='flex-1 h-4 bg-gray-100 rounded-full overflow-hidden'>
                                    <div
                                        className='h-full bg-orange-500 rounded-full transition-all duration-700'
                                        style={{ width: `${percentage}%` }}
                                    ></div>
                                </div>
                                <span className='w-12 text-sm  text-right'>{rating.count}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className='prose max-w-none'>
                <h3 className='text-xl font-bold mb-2'>Description</h3>
                <p className=' leading-relaxed whitespace-pre-line'>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default AppDetails;