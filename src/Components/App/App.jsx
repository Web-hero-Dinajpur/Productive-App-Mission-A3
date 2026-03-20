import React from 'react';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { LuDownload } from 'react-icons/lu';

const App = () => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    bangladesh main title
                   
                </h2>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline"> <LuDownload />Fashion</div>
                    <div className="badge badge-outline"><FaRegStarHalfStroke />Products</div>
                </div>
            </div>
        </div>
    );
};

export default App;