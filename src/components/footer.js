import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StaticImage } from "gatsby-plugin-image";
import {GetRandomScoutQuote} from '../utils';

library.add(fab);

const Footer = ({pageTitle}) => {
    return (
        <div className='w-full m-0'>
            <div className='w-1/2 m-6 mx-auto'>
                <blockquote className='text-cubScoutBlue text-2xl h-auto text-center justify-center items-center content-center flex flex-wrap'>{GetRandomScoutQuote()}</blockquote>
            </div>
            <div className='w-full m-0 p-0 bg-cubScoutDarkBlue'>
                <StaticImage className='w-full' src="../images/hero/Folio_PMS294_2K-Boys-Logo-BC.png" alt="Scouting" />
            </div>
            <div className="grid grid-cols-2 w-full place-items-start text-sm bg-cubScoutDarkBlue  text-scoutLightTan items-center m-auto">
                <aside className="grid grid-flow-col items-center">
                    <StaticImage src="../images/logo/Pack 248 Logo-gh-dark.png" className='w-48' alt="Scouting" />
                    <p>Copyright © {new Date().getFullYear()} - Cub Scout Pack 248, Clinton Township, MI - All right reserved</p>
                </aside>
                <nav className="grid grid-flow-col gap-4 place-self-center justify-self-end pr-8">
                    <a href="https://facebook.com/groups/EriePack248" target="_blank" rel="noreferrer" className='text-scoutLightTan'><FontAwesomeIcon className='h-10' icon={['fab', 'facebook']} /></a>
                </nav>
            </div>
        </div>
    )
}

export default Footer;