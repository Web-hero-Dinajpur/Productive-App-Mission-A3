import React from 'react';
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FiTwitter } from 'react-icons/fi';
import logoImg from '../../../assets/logo.png'

const Footer = () => {
    return (
        <footer className=''>
            <div className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 md:px-20">
                <aside className="grid-flow-col items-center font-bold">
                    <img className='w-8' src={logoImg} alt="" />
                    <p>HERO.IO</p>
                </aside>

                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <nav>
                        <h6 className="font-semibold mb-4">Social Links</h6>
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