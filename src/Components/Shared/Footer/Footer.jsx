import React from 'react';
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FiTwitter } from 'react-icons/fi';
import logoImg from '../../../assets/logo.png'

const Footer = () => {
    return (
        // <div className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 ">



        // </div>


        <footer>
            <div className="footer md:flex sm:footer-horizontal bg-base-200 text-base-content p-10 md:px-20">
                <div className='w-4/12'>
                    <aside className="grid-flow-col flex items-center font-bold">
                        <img className='w-8' src={logoImg} alt="" />
                        <p>HERO.IO</p>
                    </aside>
                    <p className='text-justify pr-8'>We build modern, user-friendly, and responsive applications that deliver smooth performance, attractive design, and reliable functionality to help users enjoy a better digital experience every day</p>
                </div>
                <nav className='w-4/12'>
                    <h6 className="footer-title font-bold">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className='w-4/12'>
                    <h6 className="footer-title font-bold">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <nav>
                        <h6 className="font-bold mb-4 ">Social Links</h6>
                        <div className="grid grid-flow-col gap-4">
                            <a >
                                <CiFacebook className='text-2xl' />
                            </a>
                            <a >
                                <CiLinkedin className='text-2xl' />
                            </a>
                            <a >
                                <FiTwitter className='text-2xl' />
                            </a>
                        </div>
                    </nav>

                </nav>
            </div>
            <hr className='text-gray-900' />
            <div className="footer sm:footer-horizontal footer-center bg-neutral text-neutral-content p-4 md:px-20">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - 2025 - All right reserved</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;