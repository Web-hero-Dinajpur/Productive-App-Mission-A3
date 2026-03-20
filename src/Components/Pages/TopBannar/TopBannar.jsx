import React from 'react';
import { FaAppStoreIos } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import toPbannar from '../../../assets/hero.png'

const TopBannar = () => {
    return (
        <div >
            <div className='mt-12 md:w-200 mx-auto'>
                <div className='text-center'>
                    <h2 className='text-6xl font-semibold md:w-[521px] mx-auto'>We Build
                        <span className='text-purple-500'> Productive</span> Apps</h2>
                    <p className='my-4 mx-auto text-gray-300'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    <div className='flex items-center justify-center gap-4'>
                        <button className="btn bg-gray-300 text-black font-bold"> <IoLogoGooglePlaystore className='text-[#47bcff] text-2xl' /> Google Play</button>
                        <button className="btn bg-gray-300 text-black font-bold"> <FaAppStoreIos className='text-[#007bf6] text-2xl' /> App Store</button>
                    </div>
                </div>
                {/* top bannar info and head titile section complited  */}
                <div>
                    <img className='w-full mt-10' src={toPbannar} alt="" />
                </div>
            </div>
            {/* Complited top bannar section  */}
            <div className='bg-gradient-to-r from-[rgb(124,58,237)] to-[rgb(99,102,241)] p-20'>
                <h2 className='text-center text-4xl font-bold'>Trusted by Millions, Built for You</h2>
                <div className='mx-auto w-200 flex justify-between mt-10 text-center'>                   
                        <div className="">
                            <div className="stat-title">Total Downloads</div>
                            <div className="stat-value my-2 text-5xl">29.6M</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>

                        <div className="">
                            <div className="stat-title">Total Reviews</div>
                            <div className="stat-value my-2 text-5xl">906K</div>
                            <div className="stat-desc">46% more than last month</div>
                        </div>

                        <div className="">
                            <div className="stat-title">Active Apps</div>
                            <div className="stat-value my-2 text-5xl">132+</div>
                            <div className="stat-desc">31 more will Launch</div>
                        </div>                   
                </div>
            </div>
        </div>
    );
};

export default TopBannar;