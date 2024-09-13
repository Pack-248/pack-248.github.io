import * as React from 'react'
import { Link } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StaticImage } from "gatsby-plugin-image"

library.add(fab)

const NavBar = ({pageTitle}) => {
    switch(pageTitle){
        case "Home":
            return (
                <nav className='grid grid-cols-2 bg-scoutLightTan py-8'>
                    <span className='inline justify-start'><StaticImage className='w-48' src="../images/logo/Pack 248 Logo-gh.png" alt="Pack 248 Logo" /></span>
                    <ul className='flex list-none pl-0 justify-end my-auto'>
                        <li className='pr-8'><Link to="/" className='text-scoutWarmGray font-bold'>Home</Link></li>
                        <li className='pr-8'><Link to="/pack" className='text-scoutWarmGray'>Pack</Link></li>
                        <li className='pr-8'><Link to="/calendar" className='text-scoutWarmGray'>Calendar</Link></li>
                        <li className='pr-8'><Link to="/register" className='text-scoutWarmGray'>Register</Link></li>
                        <li className='pr-8'><Link to="/gallery" className='text-scoutWarmGray'>Gallery</Link></li>
                        <li className='pr-8'><Link to="/resources" className='text-scoutWarmGray'>Resources</Link></li>
                        <li className='pr-8'><Link to="/contact" className='text-scoutWarmGray'>Contact</Link></li>
                        <li className='pr-8'><Link to="/about" className='text-scoutWarmGray'>About</Link></li>
                        {/* <li className='pr-8'><Link to="https://facebook.com/pack248" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'facebook']} /></Link></li>
                        <li className='pr-8'><Link to="https://facebook.com/pack248" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'twitter']} /></Link></li> */}
                    </ul>
                </nav>
            )
        case "Pack":
            return (
                <nav className='grid grid-cols-2 bg-scoutLightTan py-8'>
                    <span className='inline justify-start'><StaticImage className='w-48' src="../images/logo/Pack 248 Logo-gh.png" alt="Pack 248 Logo" /></span>
                    <ul className='flex list-none pl-0 justify-end my-auto'>
                        <li className='pr-8'><Link to="/" className='text-scoutWarmGray'>Home</Link></li>
                        <li className='pr-8'><Link to="/pack" className='text-scoutWarmGray font-bold'>Pack</Link></li>
                        <li className='pr-8'><Link to="/calendar" className='text-scoutWarmGray'>Calendar</Link></li>
                        <li className='pr-8'><Link to="/register" className='text-scoutWarmGray'>Register</Link></li>
                        <li className='pr-8'><Link to="/gallery" className='text-scoutWarmGray'>Gallery</Link></li>
                        <li className='pr-8'><Link to="/resources" className='text-scoutWarmGray'>Resources</Link></li>
                        <li className='pr-8'><Link to="/contact" className='text-scoutWarmGray'>Contact</Link></li>
                        <li className='pr-8'><Link to="/about" className='text-scoutWarmGray'>About</Link></li>
                        {/* <li className='pr-8'><Link to="https://facebook.com/pack248" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'facebook']} /></Link></li>
                        <li className='pr-8'><Link to="https://facebook.com/pack248" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'twitter']} /></Link></li> */}
                    </ul>
                </nav>
            )
        case "Calendar":
            return (
                <nav className='grid grid-cols-2 bg-scoutLightTan py-8'>
                    <span className='inline justify-start'><StaticImage className='w-48' src="../images/logo/Pack 248 Logo-gh.png" alt="Pack 248 Logo" /></span>
                    <ul className='flex list-none pl-0 justify-end my-auto'>
                        <li className='pr-8'><Link to="/" className='text-scoutWarmGray'>Home</Link></li>
                        <li className='pr-8'><Link to="/pack" className='text-scoutWarmGray'>Pack</Link></li>
                        <li className='pr-8'><Link to="/calendar" className='text-scoutWarmGray font-bold'>Calendar</Link></li>
                        <li className='pr-8'><Link to="/register" className='text-scoutWarmGray'>Register</Link></li>
                        <li className='pr-8'><Link to="/gallery" className='text-scoutWarmGray'>Gallery</Link></li>
                        <li className='pr-8'><Link to="/resources" className='text-scoutWarmGray'>Resources</Link></li>
                        <li className='pr-8'><Link to="/contact" className='text-scoutWarmGray'>Contact</Link></li>
                        <li className='pr-8'><Link to="/about" className='text-scoutWarmGray'>About</Link></li>
                        {/* <li className='pr-8'><Link to="https://facebook.com/pack248" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'facebook']} /></Link></li>
                        <li className='pr-8'><Link to="https://facebook.com/pack248" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'twitter']} /></Link></li> */}
                    </ul>
                </nav>
            )
        case "Register":
            return (
                <nav className='grid grid-cols-2 bg-scoutLightTan py-8'>
                    <span className='inline justify-start'><StaticImage className='w-48' src="../images/logo/Pack 248 Logo-gh.png" alt="Pack 248 Logo" /></span>
                    <ul className='flex list-none pl-0 justify-end my-auto'>
                        <li className='pr-8'><Link to="/" className='text-scoutWarmGray'>Home</Link></li>
                        <li className='pr-8'><Link to="/pack" className='text-scoutWarmGray'>Pack</Link></li>
                        <li className='pr-8'><Link to="/calendar" className='text-scoutWarmGray'>Calendar</Link></li>
                        <li className='pr-8'><Link to="/register" className='text-scoutWarmGray font-bold'>Register</Link></li>
                        <li className='pr-8'><Link to="/gallery" className='text-scoutWarmGray'>Gallery</Link></li>
                        <li className='pr-8'><Link to="/resources" className='text-scoutWarmGray'>Resources</Link></li>
                        <li className='pr-8'><Link to="/contact" className='text-scoutWarmGray'>Contact</Link></li>
                        <li className='pr-8'><Link to="/about" className='text-scoutWarmGray'>About</Link></li>
                        {/* <li className='pr-8'><Link to="https://facebook.com/pack248" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'facebook']} /></Link></li>
                        <li className='pr-8'><Link to="https://facebook.com/pack248" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'twitter']} /></Link></li> */}
                    </ul>
                </nav>
            )
        case "Gallery":
            return (
                <nav className='grid grid-cols-2 bg-scoutLightTan py-8'>
                    <span className='inline justify-start'><StaticImage className='w-48' src="../images/logo/Pack 248 Logo-gh.png" alt="Pack 248 Logo" /></span>
                    <ul className='flex list-none pl-0 justify-end my-auto'>
                        <li className='pr-8'><Link to="/" className='text-scoutWarmGray'>Home</Link></li>
                        <li className='pr-8'><Link to="/pack" className='text-scoutWarmGray'>Pack</Link></li>
                        <li className='pr-8'><Link to="/calendar" className='text-scoutWarmGray'>Calendar</Link></li>
                        <li className='pr-8'><Link to="/register" className='text-scoutWarmGray'>Register</Link></li>
                        <li className='pr-8'><Link to="/gallery" className='text-scoutWarmGray font-bold'>Gallery</Link></li>
                        <li className='pr-8'><Link to="/resources" className='text-scoutWarmGray'>Resources</Link></li>
                        <li className='pr-8'><Link to="/contact" className='text-scoutWarmGray'>Contact</Link></li>
                        <li className='pr-8'><Link to="/about" className='text-scoutWarmGray'>About</Link></li>
                        {/* <li className='pr-8'><Link to="https://facebook.com/pack248" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'facebook']} /></Link></li>
                        <li className='pr-8'><Link to="https://facebook.com/pack248" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'twitter']} /></Link></li> */}
                    </ul>
                </nav>
            )
        case "Resources":
            return (
                <nav className='grid grid-cols-2 bg-scoutLightTan py-8'>
                    <span className='inline justify-start'><StaticImage className='w-48' src="../images/logo/Pack 248 Logo-gh.png" alt="Pack 248 Logo" /></span>
                    <ul className='flex list-none pl-0 justify-end my-auto'>
                        <li className='pr-8'><Link to="/" className='text-scoutWarmGray'>Home</Link></li>
                        <li className='pr-8'><Link to="/pack" className='text-scoutWarmGray'>Pack</Link></li>
                        <li className='pr-8'><Link to="/calendar" className='text-scoutWarmGray'>Calendar</Link></li>
                        <li className='pr-8'><Link to="/register" className='text-scoutWarmGray'>Register</Link></li>
                        <li className='pr-8'><Link to="/gallery" className='text-scoutWarmGray'>Gallery</Link></li>
                        <li className='pr-8'><Link to="/resources" className='text-scoutWarmGray font-bold'>Resources</Link></li>
                        <li className='pr-8'><Link to="/contact" className='text-scoutWarmGray'>Contact</Link></li>
                        <li className='pr-8'><Link to="/about" className='text-scoutWarmGray'>About</Link></li>
                        {/* <li className='pr-8'><Link to="https://facebook.com/pack248" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'facebook']} /></Link></li>
                        <li className='pr-8'><Link to="https://facebook.com/pack248" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'twitter']} /></Link></li> */}
                    </ul>
                </nav>
            )
        case "Contact":
            return (
                <nav className='grid grid-cols-2 bg-scoutLightTan py-8'>
                    <span className='inline justify-start'><StaticImage className='w-48' src="../images/logo/Pack 248 Logo-gh.png" alt="Pack 248 Logo" /></span>
                    <ul className='flex list-none pl-0 justify-end my-auto'>
                        <li className='pr-8'><Link to="/" className='text-scoutWarmGray'>Home</Link></li>
                        <li className='pr-8'><Link to="/pack" className='text-scoutWarmGray'>Pack</Link></li>
                        <li className='pr-8'><Link to="/calendar" className='text-scoutWarmGray'>Calendar</Link></li>
                        <li className='pr-8'><Link to="/register" className='text-scoutWarmGray'>Register</Link></li>
                        <li className='pr-8'><Link to="/gallery" className='text-scoutWarmGray'>Gallery</Link></li>
                        <li className='pr-8'><Link to="/resources" className='text-scoutWarmGray'>Resources</Link></li>
                        <li className='pr-8'><Link to="/contact" className='text-scoutWarmGray font-bold'>Contact</Link></li>
                        <li className='pr-8'><Link to="/about" className='text-scoutWarmGray'>About</Link></li>
                        {/* <li className='pr-8'><Link to="https://facebook.com/pack248" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'facebook']} /></Link></li>
                        <li className='pr-8'><Link to="https://facebook.com/pack248" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'twitter']} /></Link></li> */}
                    </ul>
                </nav>
            )
        case "About":
            return (
                <nav className='grid grid-cols-2 bg-scoutLightTan py-8'>
                    <span className='inline justify-start'><StaticImage className='w-48' src="../images/logo/Pack 248 Logo-gh.png" alt="Pack 248 Logo" /></span>
                    <ul className='flex list-none pl-0 justify-end my-auto'>
                        <li className='pr-8'><Link to="/" className='text-scoutWarmGray'>Home</Link></li>
                        <li className='pr-8'><Link to="/pack" className='text-scoutWarmGray'>Pack</Link></li>
                        <li className='pr-8'><Link to="/calendar" className='text-scoutWarmGray'>Calendar</Link></li>
                        <li className='pr-8'><Link to="/register" className='text-scoutWarmGray'>Register</Link></li>
                        <li className='pr-8'><Link to="/gallery" className='text-scoutWarmGray'>Gallery</Link></li>
                        <li className='pr-8'><Link to="/resources" className='text-scoutWarmGray'>Resources</Link></li>
                        <li className='pr-8'><Link to="/contact" className='text-scoutWarmGray'>Contact</Link></li>
                        <li className='pr-8'><Link to="/about" className='text-scoutWarmGray font-bold'>About</Link></li>
                        {/* <li className='pr-8'><Link to="https://facebook.com/pack248" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'facebook']} /></Link></li>
                        <li className='pr-8'><Link to="https://facebook.com/pack248" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'twitter']} /></Link></li> */}
                    </ul>
                </nav>
            )
        default:
            return (
                <nav className='grid grid-cols-2 bg-scoutLightTan py-8'>
                    <span className='inline justify-start'><StaticImage className='w-48' src="../images/logo/Pack 248 Logo-gh.png" alt="Pack 248 Logo" /></span>
                    <ul className='flex list-none pl-0 justify-end my-auto'>
                        <li className='pr-8'><Link to="/" className='text-scoutWarmGray'>Home</Link></li>
                        <li className='pr-8'><Link to="/pack" className='text-scoutWarmGray'>Pack</Link></li>
                        <li className='pr-8'><Link to="/calendar" className='text-scoutWarmGray'>Calendar</Link></li>
                        <li className='pr-8'><Link to="/register" className='text-scoutWarmGray'>Register</Link></li>
                        <li className='pr-8'><Link to="/gallery" className='text-scoutWarmGray'>Gallery</Link></li>
                        <li className='pr-8'><Link to="/resources" className='text-scoutWarmGray'>Resources</Link></li>
                        <li className='pr-8'><Link to="/contact" className='text-scoutWarmGray'>Contact</Link></li>
                        <li className='pr-8'><Link to="/about" className='text-scoutWarmGray'>About</Link></li>
                        {/* <li className='pr-8'><Link to="https://facebook.com/pack248" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'facebook']} /></Link></li>
                        <li className='pr-8'><Link to="https://facebook.com/pack248" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'twitter']} /></Link></li> */}
                    </ul>
                </nav>
            )
    }
}

export default NavBar;