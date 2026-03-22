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
                    <p className='my-4 mx-auto'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    <div className='md:flex items-center justify-center gap-4'>
                        <button className="btn bg-gray-200 text-black font-bold"> <IoLogoGooglePlaystore className='text-[#47bcff] text-2xl' /> Google Play</button>
                        <button className="btn bg-gray-200 text-black font-bold"> <FaAppStoreIos className='text-[#007bf6] text-2xl' /> App Store</button>
                    </div>
                </div>
                {/* top bannar info and head titile section complited  */}
                <div>
                    <img className='w-full mt-10' src={toPbannar} alt="" />
                </div>
            </div>
            {/* Complited top bannar section  */}
            <div className="bg-gradient-to-r from-[rgb(99,46,227)] to-[rgb(159,98,242)] p-20 text-white">
                <h2 className='text-center text-4xl font-bold'>Trusted by Millions, Built for You</h2>
                <div className='mx-auto md:w-200 md:flex justify-between mt-10 text-center '>                   
                        <div className="text-2xl ">
                            <div className="text-xl">Total Downloads</div>
                            <div className="stat-value my-2 text-5xl">29.6M</div>
                            <div className="text-xl">21% more than last month</div>
                        </div>

                        <div className="">
                            <div className="text-xl">Total Reviews</div>
                            <div className="stat-value my-2 text-5xl">906K</div>
                            <div className="text-xl">46% more than last month</div>
                        </div>

                        <div className="">
                            <div className="text-xl">Active Apps</div>
                            <div className="stat-value my-2 text-5xl">132+</div>
                            <div className="text-xl">31 more will Launch</div>
                        </div>                   
                </div>
            </div>
        </div>
    );
};

export default TopBannar;