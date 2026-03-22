import React from 'react';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { LuDownload } from 'react-icons/lu';
import { useNavigate } from 'react-router';

const App = ({ app }) => {
    const navigate = useNavigate();
    const { companyName, image, downloads, ratings, id } = app;
    return (
        <div onClick={() => navigate(`/appdetails/${id}`)} className="card bg-base-100 shadow-sm">
            <figure>
                <img className='p-4 md:h-60 w-full'
                    src={image}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-4xl mb-4">
                    {companyName}
                </h2>
                <div className="card-actions justify-between">
                    <div className="badge text-green-400"> <LuDownload />{downloads}</div>
                    <div className="badge ">
                        {
                            ratings.map(name => <FaRegStarHalfStroke name={name} className='text-yellow-500' />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;