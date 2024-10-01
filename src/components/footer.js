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
        <div className='w-full m-0'>
            <div className='w-1/2 m-6 mx-auto'>
                <blockquote className='flex flex-wrap items-center content-center justify-center h-auto text-2xl text-center text-cubScoutBlue'>{GetRandomScoutQuote()}</blockquote>
            </div>
            <div className='w-full m-0 bg-cubScoutDarkBlue'>
                <StaticImage className='w-full' src="../images/hero/Folio_PMS294_2K-Boys-Logo-BC.png" alt="Scouting" />
            </div>
            <div className='relative h-full m-0 overflow-x-auto bg-center bg-cover bg-cubScoutDarkBlue'  >
                <div className='flex flex-wrap items-center justify-center w-full overflow-x-hidden bg-top bg-cover '>
                    <div className='w-full'>
                        <footer className="flex flex-col w-full grid-cols-6 p-6 md:text-sm md:grid-flow-row md:grid place-items-start gap-y-10 gap-x-4 text-scoutLightTan">
                            <div className='flex flex-col items-center w-full col-span-2'>
                                <div className="w-auto text-lg">
                                    Cub Scout Pack 248, Clinton Township, MI
                                    <br />
                                    Providing Scouting Adventures since 1998
                                </div>
                                <nav className='flex mx-auto mt-6 mb-6'>
                                    <div >
                                        <Link to='/'><img src='../images/logo/Pack 248 Logo-gh-dark.png' className='w-full h-full' alt='Pack 248 Logo'/></Link>
                                    </div>
                                </nav>
                            </div>
                            <nav className='grid w-full h-auto grid-cols-1 grid-rows-7'>
                                <h6 className='mb-2 font-bold uppercase md:text-sm opacity-60'>Pack</h6>
                                <Link className='mb-1 no-underline cursor-pointer md:mb-0 md:text-sm' to="/lion-den">Lion Den</Link>
                                <Link className='mb-1 no-underline cursor-pointer md:mb-0 md:text-sm' to="/tiger-den">Tiger Den</Link>
                                <Link className='mb-1 no-underline cursor-pointer md:mb-0 md:text-sm' to="/wolf-den">Wolf Den</Link>
                                <Link className='mb-1 no-underline cursor-pointer md:mb-0 md:text-sm' to="/bear-den">Bear Den</Link>
                                <Link className='mb-1 no-underline cursor-pointer md:mb-0 md:text-sm' to="/webelos-patrol">Webelos</Link>
                                <Link className='mb-1 no-underline cursor-pointer md:mb-0 md:text-sm' to="/aol-patrol">Arrow of Light</Link>
                            </nav>
                            <nav className='grid w-full h-auto grid-cols-1 grid-rows-5'>
                                <h6 className='mb-2 font-bold uppercase opacity-60 md:text-sm'>Information</h6>
                                <Link className='mb-1 no-underline cursor-pointer md:mb-0 md:text-sm' to="/pack">About the Pack</Link>
                                <Link className='mb-1 no-underline cursor-pointer md:mb-0 md:text-sm' to="/contact">Contact</Link>
                                <Link className='mb-1 no-underline cursor-pointer md:mb-0 md:text-sm' to="/resources">Resources</Link>
                                <Link className='mb-1 no-underline cursor-pointer md:mb-0 md:text-sm' to="/latest-news">Latest News</Link>
                            </nav>
                            <nav className='grid w-full h-auto grid-cols-1 grid-rows-4'>
                                <h6 className='mb-2 font-bold uppercase opacity-60 md:text-sm'>Legal</h6>
                                <Link className='mb-1 no-underline cursor-pointer md:mb-0 md:text-sm' to="/terms-conditions">Terms</Link>
                                <Link className='mb-1 no-underline cursor-pointer md:mb-0 md:text-sm' to="/privacy">Privacy</Link>
                                <Link className='mb-1 no-underline cursor-pointer md:mb-0 md:text-sm' to="/cookies">Cookies</Link>
                            </nav>
                            <nav className='grid w-full grid-cols-1 grid-rows-2'>
                                <h6 className='mb-2 font-bold uppercase opacity-60'>Social</h6>
                                <a href="https://facebook.com/groups/EriePack248" target="_blank" rel="noreferrer" className='align-middle text-scoutLightTan'><FontAwesomeIcon className='h-4' icon={['fab', 'facebook']} /> Facebook</a>
                            </nav>
                        </footer>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Footer;