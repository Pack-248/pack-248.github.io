import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StaticImage } from "gatsby-plugin-image";
import {GetRandomScoutQuote} from '../utils';
import { Link } from 'gatsby';

library.add(fab);

const Footer = ({pageTitle}) => {
    return (
        // <div className='w-full m-0'>
        //     
        //     <div className='w-full m-0 p-0 bg-cubScoutDarkBlue'>
        //         <StaticImage className='w-full' src="../images/hero/Folio_PMS294_2K-Boys-Logo-BC.png" alt="Scouting" />
        //     </div>
        //     <div className="grid grid-cols-3 w-full place-items-start text-sm bg-cubScoutDarkBlue  text-scoutLightTan items-center m-auto">
        //         <aside className="grid grid-flow-col items-center">
        //             <StaticImage src="../images/logo/Pack 248 Logo-gh-dark.png" className='w-48' alt="Scouting" />
        //             <p>Copyright © {new Date().getFullYear()} - Cub Scout Pack 248, Clinton Township, MI - All right reserved</p>
        //         </aside>
        //         <div className='flex items-end justify-end'>
        //             <p><Link to="/privacy"/>Privacy Policy</p>
        //             <p><Link to="/terms-conditions"/>Terms &amp; Conditions</p>
        //         </div>
        //         <nav className="grid grid-flow-col gap-4 place-self-center justify-self-end pr-8">
        //             
        //         </nav>
        //     </div>
        // </div>
        <div className='w-full m-0'>
            <div className='w-1/2 m-6 mx-auto'>
                <blockquote className='text-cubScoutBlue text-2xl h-auto text-center justify-center items-center content-center flex flex-wrap'>{GetRandomScoutQuote()}</blockquote>
            </div>
            <div className='w-full m-0  bg-cubScoutDarkBlue'>
                <StaticImage className='w-full' src="../images/hero/Folio_PMS294_2K-Boys-Logo-BC.png" alt="Scouting" />
            </div>
            <div className='relative overflow-x-auto bg-cover bg-center h-full bg-cubScoutDarkBlue m-0'  >
                <div className=' flex w-full flex-wrap items-center justify-center overflow-x-hidden bg-cover bg-top'>
                    <div className='w-full'>
                        <footer className="grid grid-cols-6 w-full grid-flow-row place-items-start gap-y-10 gap-x-4 p-6 text-sm text-scoutLightTan">
                            <div className='col-span-2 flex-col flex w-full items-center'>
                                <div className="w-auto text-lg">
                                    Cub Scout Pack 248, Clinton Township, MI
                                    <br />
                                    Providing Scouting Adventures since 1998
                                </div>
                                <nav className='flex mt-6 mb-6 mx-auto'>
                                    <div >
                                        <Link to='/'><img src='../images/logo/Pack 248 Logo-gh-dark.png' className='h-40' alt='Pack 248 Logo'/></Link>
                                    </div>
                                </nav>
                            </div>
                            <nav className='grid grid-cols-1 grid-rows-7'>
                                <h6 className='mb-2 font-bold uppercase opacity-60'>Pack</h6>
                                <Link className='cursor-pointer no-underline' to="/lion-den">Lion Den</Link>
                                <Link className='cursor-pointer no-underline' to="/tiger-den">Tiger Den</Link>
                                <Link className='cursor-pointer no-underline' to="/wolf-den">Wolf Den</Link>
                                <Link className='cursor-pointer no-underline' to="/bear-den">Bear Den</Link>
                                <Link className='cursor-pointer no-underline' to="/webelos-patrol">Webelos Patrol</Link>
                                <Link className='cursor-pointer no-underline' to="/aol-patrol">Arrow of Light Patrol</Link>
                            </nav>
                            <nav className='grid grid-cols-1 grid-rows-5'>
                                <h6 className='mb-2 font-bold uppercase opacity-60'>Information</h6>
                                <Link className='cursor-pointer no-underline' to="/about">About us</Link>
                                <Link className='cursor-pointer no-underline' to="/contact">Contact</Link>
                                <Link className='cursor-pointer no-underline' to="/resources">Resources</Link>
                                <Link className='cursor-pointer no-underline' to="/latest-news">Latest News</Link>
                            </nav>
                            <nav className='grid grid-cols-1 grid-rows-4'>
                                <h6 className='mb-2 font-bold uppercase opacity-60'>Legal</h6>
                                <Link className='cursor-pointer no-underline' to="/terms-conditions">Terms &amp; Conditions</Link>
                                <Link className='cursor-pointer no-underline' to="/privacy">Privacy Policy</Link>
                                <Link className='cursor-pointer no-underline' to="/cookies">Cookie Policy</Link>
                            </nav>
                            <nav className='grid grid-cols-1 grid-rows-2'>
                                <h6 className='mb-2 font-bold uppercase opacity-60'>Social</h6>
                                <a href="https://facebook.com/groups/EriePack248" target="_blank" rel="noreferrer" className='text-scoutLightTan align-middle'><FontAwesomeIcon className='h-4' icon={['fab', 'facebook']} /> Facebook</a>
                            </nav>
                        </footer>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Footer;