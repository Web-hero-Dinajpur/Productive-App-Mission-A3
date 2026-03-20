import React from 'react';
import errorImg from '../../assets/error-404.png'
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const ErrorPage = () => {
    return (
        <>
        <Navbar></Navbar>
            <div className='w-full mx-auto text-center mb-8'>
                <img className='mx-auto py-12' src={errorImg} alt="" />
                <div>
                    <h2 className='font-bold text-4xl'>Oops, page not found!</h2>
                    <p className='py-6'>the page you are looking for is not avallable.</p>
                    <a className="btn bg-gradient-to-r from-[rgb(124,58,237)] to-[rgb(99,102,241)] text-white border-none">
                        Go Back!</a>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ErrorPage;