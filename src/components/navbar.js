import React, { useState } from 'react'
import { Link } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab)

const NavBar = ({pageTitle}) => {
    const [isHidden, setIsHidden] = useState(true);
    
    const toggleMenu = () => {
        setIsHidden(current => !current);
    }
    function buttonize(handlerFn) {
        return {
            role: 'button',
            onClick: toggleMenu,
            onKeyDown: event => {
            if (event.keycode === 13) handlerFn(event);
            }
        }
    }
    switch(pageTitle){
        case "Home":
            return (
                <div>
                    <nav className='z-0 grid grid-cols-2 py-8 bg-scoutLightTan'>
                        <span className='justify-start inline'><a href="/"><img className='w-48' src="/images/logo/Pack 248 Logo-gh.png" alt="Pack 248 Logo" /></a></span>
                        <ul className='hidden md:list-none md:my-auto md:pl-0 md:justify-end md:flex'>
                            <li className='pr-8'><Link to="/" className='font-bold text-scoutWarmGray'>Home</Link></li>
                            <li className='pr-8'><Link to="/pack" className='text-scoutWarmGray'>Pack</Link></li>
                            <li className='pr-8'><Link to="/calendar" className='text-scoutWarmGray'>Calendar</Link></li>
                            <li className='pr-8'><Link to="/latest-news" className='text-scoutWarmGray'>Latest News</Link></li>
                            <li className='pr-8'><Link to="/gallery" className='text-scoutWarmGray'>Gallery</Link></li>
                            <li className='pr-8'><Link to="/resources" className='text-scoutWarmGray'>Resources</Link></li>
                            <li className='pr-8'><Link to="/contact" className='text-scoutWarmGray'>Contact</Link></li>
                            <li className='pr-8'><a href="https://facebook.com/groups/EriePack248" target="_blank" rel="noreferrer" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>  
                        </ul>
                        <div className="flex justify-end pl-0 my-auto mr-6 list-none md:hidden">
                            <label htmlFor='smallMenu' className='hidden'>Menu</label>
                            <div id='smallmenu' name='smallMenu' role="button" className="flex justify-center w-8 h-8 p-0 bg-opacity-0 border-0 rounded-full outline hover:drop-shadow-lg" {...buttonize(toggleMenu)}>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 mt-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </div>
                            <ul
                                className={isHidden ? 'hidden' : 'flex flex-col flex-wrap text-sm rounded-2xl bg-scoutLightTan absolute shadow-md z-[1] mt-10 mr-0 w-52 p-2 '}>
                                <li className='pr-2'><Link to="/" className='font-bold text-scoutWarmGray txt-sm'>Home</Link></li>
                                <li className='pr-2'><Link to="/pack" className='text-scoutWarmGray txt-sm'>Pack</Link></li>
                                <li className='pr-2'><Link to="/calendar" className='text-scoutWarmGray txt-sm'>Calendar</Link></li>
                                <li className='pr-2'><Link to="/latest-news" className='text-scoutWarmGray txt-sm'>Latest News</Link></li>
                                <li className='pr-2'><Link to="/gallery" className='text-scoutWarmGray txt-sm'>Gallery</Link></li>
                                <li className='pr-2'><Link to="/resources" className='text-scoutWarmGray txt-sm'>Resources</Link></li>
                                <li className='pr-2'><Link to="/contact" className='text-scoutWarmGray txt-sm'>Contact</Link></li>
                                <li className='pr-2'><a href="https://facebook.com/groups/EriePack248" target="_blank" rel="noreferrer" className='text-blue-600 txt-sm'><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>  
                            </ul>
                            
                        </div>
                    </nav>
                </div>
            )
        case "Pack":
            return (
                <nav className='grid grid-cols-2 py-8 bg-scoutLightTan'>
                    <span className='justify-start inline'><a href="/"><img className='w-48' src="/images/logo/Pack 248 Logo-gh.png" alt="Pack 248 Logo" /></a></span>
                    <ul className='hidden md:list-none md:my-auto md:pl-0 md:justify-end md:flex'>
                        <li className='pr-8'><Link to="/" className='text-scoutWarmGray'>Home</Link></li>
                        <li className='pr-8'><Link to="/pack" className='font-bold text-scoutWarmGray'>Pack</Link></li>
                        <li className='pr-8'><Link to="/calendar" className='text-scoutWarmGray'>Calendar</Link></li>
                        <li className='pr-8'><Link to="/latest-news" className='text-scoutWarmGray'>Latest News</Link></li>
                        <li className='pr-8'><Link to="/gallery" className='text-scoutWarmGray'>Gallery</Link></li>
                        <li className='pr-8'><Link to="/resources" className='text-scoutWarmGray'>Resources</Link></li>
                        <li className='pr-8'><Link to="/contact" className='text-scoutWarmGray'>Contact</Link></li>
                        <li className='pr-8'><a href="https://facebook.com/groups/EriePack248" target="_blank" rel="noreferrer" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                    </ul>
                    <div className="flex justify-end pl-0 my-auto mr-6 list-none md:hidden">
                            <label htmlFor='smallMenu' className='hidden'>Menu</label>
                            <div id='smallmenu' name='smallMenu' role="button" className="flex justify-center w-8 h-8 p-0 bg-opacity-0 border-0 rounded-full outline hover:drop-shadow-lg" {...buttonize(toggleMenu)}>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 mt-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </div>
                            <ul
                                className={isHidden ? 'hidden' : 'flex flex-col flex-wrap text-sm rounded-2xl bg-scoutLightTan absolute shadow-md z-[1] mt-10 mr-0 w-52 p-2 '}>
                                <li className='pr-2'><Link to="/" className='font-bold text-scoutWarmGray txt-sm'>Home</Link></li>
                                <li className='pr-2'><Link to="/pack" className='font-bold text-scoutWarmGray txt-sm'>Pack</Link></li>
                                <li className='pr-2'><Link to="/calendar" className='text-scoutWarmGray txt-sm'>Calendar</Link></li>
                                <li className='pr-2'><Link to="/latest-news" className='text-scoutWarmGray txt-sm'>Latest News</Link></li>
                                <li className='pr-2'><Link to="/gallery" className='text-scoutWarmGray txt-sm'>Gallery</Link></li>
                                <li className='pr-2'><Link to="/resources" className='text-scoutWarmGray txt-sm'>Resources</Link></li>
                                <li className='pr-2'><Link to="/contact" className='text-scoutWarmGray txt-sm'>Contact</Link></li>
                                <li className='pr-2'><a href="https://facebook.com/groups/EriePack248" target="_blank" rel="noreferrer" className='text-blue-600 txt-sm'><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>  
                            </ul>
                        </div>
                </nav>
            )
        case "Calendar":
            return (
                <nav className='grid grid-cols-2 py-8 bg-scoutLightTan'>
                    <span className='justify-start inline'><a href="/"><img className='w-48' src="/images/logo/Pack 248 Logo-gh.png" alt="Pack 248 Logo" /></a></span>
                    <ul className='hidden md:list-none md:my-auto md:pl-0 md:justify-end md:flex'>
                        <li className='pr-8'><Link to="/" className='text-scoutWarmGray'>Home</Link></li>
                        <li className='pr-8'><Link to="/pack" className='text-scoutWarmGray'>Pack</Link></li>
                        <li className='pr-8'><Link to="/calendar" className='font-bold text-scoutWarmGray'>Calendar</Link></li>
                        <li className='pr-8'><Link to="/latest-news" className='text-scoutWarmGray'>Latest News</Link></li>
                        <li className='pr-8'><Link to="/gallery" className='text-scoutWarmGray'>Gallery</Link></li>
                        <li className='pr-8'><Link to="/resources" className='text-scoutWarmGray'>Resources</Link></li>
                        <li className='pr-8'><Link to="/contact" className='text-scoutWarmGray'>Contact</Link></li>
                        <li className='pr-8'><a href="https://facebook.com/groups/EriePack248" target="_blank" rel="noreferrer" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                    </ul>
                    <div className="flex justify-end pl-0 my-auto mr-6 list-none md:hidden">
                            <label htmlFor='smallMenu' className='hidden'>Menu</label>
                            <div id='smallmenu' name='smallMenu' role="button" className="flex justify-center w-8 h-8 p-0 bg-opacity-0 border-0 rounded-full outline hover:drop-shadow-lg" {...buttonize(toggleMenu)}>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 mt-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </div>
                            <ul
                                className={isHidden ? 'hidden' : 'flex flex-col flex-wrap text-sm rounded-2xl bg-scoutLightTan absolute shadow-md z-[1] mt-10 mr-0 w-52 p-2 '}>
                                <li className='pr-2'><Link to="/" className='font-bold text-scoutWarmGray txt-sm'>Home</Link></li>
                                <li className='pr-2'><Link to="/pack" className='text-scoutWarmGray txt-sm'>Pack</Link></li>
                                <li className='pr-2'><Link to="/calendar" className='font-bold text-scoutWarmGray txt-sm'>Calendar</Link></li>
                                <li className='pr-2'><Link to="/latest-news" className='text-scoutWarmGray txt-sm'>Latest News</Link></li>
                                <li className='pr-2'><Link to="/gallery" className='text-scoutWarmGray txt-sm'>Gallery</Link></li>
                                <li className='pr-2'><Link to="/resources" className='text-scoutWarmGray txt-sm'>Resources</Link></li>
                                <li className='pr-2'><Link to="/contact" className='text-scoutWarmGray txt-sm'>Contact</Link></li>
                                <li className='pr-2'><a href="https://facebook.com/groups/EriePack248" target="_blank" rel="noreferrer" className='text-blue-600 txt-sm'><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>  
                            </ul>
                        </div>
                </nav>
            )
        case "News":
            return (
                <nav className='grid grid-cols-2 py-8 bg-scoutLightTan'>
                    <span className='justify-start inline'><a href="/"><img className='w-48' src="/images/logo/Pack 248 Logo-gh.png" alt="Pack 248 Logo" /></a></span>
                    <ul className='hidden md:list-none md:my-auto md:pl-0 md:justify-end md:flex'>
                        <li className='pr-8'><Link to="/" className='text-scoutWarmGray'>Home</Link></li>
                        <li className='pr-8'><Link to="/pack" className='text-scoutWarmGray'>Pack</Link></li>
                        <li className='pr-8'><Link to="/calendar" className='text-scoutWarmGray'>Calendar</Link></li>
                        <li className='pr-8'><Link to="/latest-news" className='font-bold text-scoutWarmGray'>Latest News</Link></li>
                        <li className='pr-8'><Link to="/gallery" className='text-scoutWarmGray'>Gallery</Link></li>
                        <li className='pr-8'><Link to="/resources" className='text-scoutWarmGray'>Resources</Link></li>
                        <li className='pr-8'><Link to="/contact" className='text-scoutWarmGray'>Contact</Link></li>
                        <li className='pr-8'><a href="https://facebook.com/groups/EriePack248" target="_blank" rel="noreferrer" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                    </ul>
                    <div className="flex justify-end pl-0 my-auto mr-6 list-none md:hidden">
                            <label htmlFor='smallMenu' className='hidden'>Menu</label>
                            <div id='smallmenu' name='smallMenu' role="button" className="flex justify-center w-8 h-8 p-0 bg-opacity-0 border-0 rounded-full outline hover:drop-shadow-lg" {...buttonize(toggleMenu)}>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 mt-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </div>
                            <ul
                                className={isHidden ? 'hidden' : 'flex flex-col flex-wrap text-sm rounded-2xl bg-scoutLightTan absolute shadow-md z-[1] mt-10 mr-0 w-52 p-2 '}>
                                <li className='pr-2'><Link to="/" className='font-bold text-scoutWarmGray txt-sm'>Home</Link></li>
                                <li className='pr-2'><Link to="/pack" className='text-scoutWarmGray txt-sm'>Pack</Link></li>
                                <li className='pr-2'><Link to="/calendar" className='text-scoutWarmGray txt-sm'>Calendar</Link></li>
                                <li className='pr-2'><Link to="/latest-news" className='font-bold text-scoutWarmGray txt-sm'>Latest News</Link></li>
                                <li className='pr-2'><Link to="/gallery" className='text-scoutWarmGray txt-sm'>Gallery</Link></li>
                                <li className='pr-2'><Link to="/resources" className='text-scoutWarmGray txt-sm'>Resources</Link></li>
                                <li className='pr-2'><Link to="/contact" className='text-scoutWarmGray txt-sm'>Contact</Link></li>
                                <li className='pr-2'><a href="https://facebook.com/groups/EriePack248" target="_blank" rel="noreferrer" className='text-blue-600 txt-sm'><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>  
                            </ul>
                        </div>
                </nav>
            )
        case "Gallery":
            return (
                <nav className='grid grid-cols-2 py-8 bg-scoutLightTan'>
                    <span className='justify-start inline'><a href="/"><img className='w-48' src="/images/logo/Pack 248 Logo-gh.png" alt="Pack 248 Logo" /></a></span>
                    <ul className='hidden md:list-none md:my-auto md:pl-0 md:justify-end md:flex'>
                        <li className='pr-8'><Link to="/" className='text-scoutWarmGray'>Home</Link></li>
                        <li className='pr-8'><Link to="/pack" className='text-scoutWarmGray'>Pack</Link></li>
                        <li className='pr-8'><Link to="/calendar" className='text-scoutWarmGray'>Calendar</Link></li>
                        <li className='pr-8'><Link to="/latest-news" className='text-scoutWarmGray'>Latest News</Link></li>
                        <li className='pr-8'><Link to="/gallery" className='font-bold text-scoutWarmGray'>Gallery</Link></li>
                        <li className='pr-8'><Link to="/resources" className='text-scoutWarmGray'>Resources</Link></li>
                        <li className='pr-8'><Link to="/contact" className='text-scoutWarmGray'>Contact</Link></li>
                        <li className='pr-8'><a href="https://facebook.com/groups/EriePack248" target="_blank" rel="noreferrer" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                    </ul>
                    <div className="flex justify-end pl-0 my-auto mr-6 list-none md:hidden">
                            <label htmlFor='smallMenu' className='hidden'>Menu</label>
                            <div id='smallmenu' name='smallMenu' role="button" className="flex justify-center w-8 h-8 p-0 bg-opacity-0 border-0 rounded-full outline hover:drop-shadow-lg" {...buttonize(toggleMenu)}>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 mt-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </div>
                            <ul
                                className={isHidden ? 'hidden' : 'flex flex-col flex-wrap text-sm rounded-2xl bg-scoutLightTan absolute shadow-md z-[1] mt-10 mr-0 w-52 p-2 '}>
                                <li className='pr-2'><Link to="/" className='font-bold text-scoutWarmGray txt-sm'>Home</Link></li>
                                <li className='pr-2'><Link to="/pack" className='text-scoutWarmGray txt-sm'>Pack</Link></li>
                                <li className='pr-2'><Link to="/calendar" className='text-scoutWarmGray txt-sm'>Calendar</Link></li>
                                <li className='pr-2'><Link to="/latest-news" className='text-scoutWarmGray txt-sm'>Latest News</Link></li>
                                <li className='pr-2'><Link to="/gallery" className='font-bold text-scoutWarmGray txt-sm'>Gallery</Link></li>
                                <li className='pr-2'><Link to="/resources" className='text-scoutWarmGray txt-sm'>Resources</Link></li>
                                <li className='pr-2'><Link to="/contact" className='text-scoutWarmGray txt-sm'>Contact</Link></li>
                                <li className='pr-2'><a href="https://facebook.com/groups/EriePack248" target="_blank" rel="noreferrer" className='text-blue-600 txt-sm'><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>  
                            </ul>
                        </div>
                </nav>
            )
        case "Resources":
            return (
                <nav className='grid grid-cols-2 py-8 bg-scoutLightTan'>
                    <span className='justify-start inline'><a href="/"><img className='w-48' src="/images/logo/Pack 248 Logo-gh.png" alt="Pack 248 Logo" /></a></span>
                    <ul className='hidden md:list-none md:my-auto md:pl-0 md:justify-end md:flex'>
                        <li className='pr-8'><Link to="/" className='text-scoutWarmGray'>Home</Link></li>
                        <li className='pr-8'><Link to="/pack" className='text-scoutWarmGray'>Pack</Link></li>
                        <li className='pr-8'><Link to="/calendar" className='text-scoutWarmGray'>Calendar</Link></li>
                        <li className='pr-8'><Link to="/latest-news" className='text-scoutWarmGray'>Latest News</Link></li>
                        <li className='pr-8'><Link to="/gallery" className='text-scoutWarmGray'>Gallery</Link></li>
                        <li className='pr-8'><Link to="/resources" className='font-bold text-scoutWarmGray'>Resources</Link></li>
                        <li className='pr-8'><Link to="/contact" className='text-scoutWarmGray'>Contact</Link></li>
                        <li className='pr-8'><a href="https://facebook.com/groups/EriePack248" target="_blank" rel="noreferrer" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                    </ul>
                    <div className="flex justify-end pl-0 my-auto mr-6 list-none md:hidden">
                            <label htmlFor='smallMenu' className='hidden'>Menu</label>
                            <div id='smallmenu' name='smallMenu' role="button" className="flex justify-center w-8 h-8 p-0 bg-opacity-0 border-0 rounded-full outline hover:drop-shadow-lg" {...buttonize(toggleMenu)}>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 mt-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </div>
                            <ul
                                className={isHidden ? 'hidden' : 'flex flex-col flex-wrap text-sm rounded-2xl bg-scoutLightTan absolute shadow-md z-[1] mt-10 mr-0 w-52 p-2 '}>
                                <li className='pr-2'><Link to="/" className='font-bold text-scoutWarmGray txt-sm'>Home</Link></li>
                                <li className='pr-2'><Link to="/pack" className='text-scoutWarmGray txt-sm'>Pack</Link></li>
                                <li className='pr-2'><Link to="/calendar" className='text-scoutWarmGray txt-sm'>Calendar</Link></li>
                                <li className='pr-2'><Link to="/latest-news" className='text-scoutWarmGray txt-sm'>Latest News</Link></li>
                                <li className='pr-2'><Link to="/gallery" className='text-scoutWarmGray txt-sm'>Gallery</Link></li>
                                <li className='pr-2'><Link to="/resources" className='font-bold text-scoutWarmGray txt-sm'>Resources</Link></li>
                                <li className='pr-2'><Link to="/contact" className='text-scoutWarmGray txt-sm'>Contact</Link></li>
                                <li className='pr-2'><a href="https://facebook.com/groups/EriePack248" target="_blank" rel="noreferrer" className='text-blue-600 txt-sm'><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>  
                            </ul>
                        </div>
                </nav>
            )
        case "Contact":
            return (
                <nav className='grid grid-cols-2 py-8 bg-scoutLightTan'>
                    <span className='justify-start inline'><img className='w-48' src="/images/logo/Pack 248 Logo-gh.png" alt="Pack 248 Logo" /></span>
                    <ul className='hidden md:list-none md:my-auto md:pl-0 md:justify-end md:flex'>
                        <li className='pr-8'><Link to="/" className='text-scoutWarmGray'>Home</Link></li>
                        <li className='pr-8'><Link to="/pack" className='text-scoutWarmGray'>Pack</Link></li>
                        <li className='pr-8'><Link to="/calendar" className='text-scoutWarmGray'>Calendar</Link></li>
                        <li className='pr-8'><Link to="/latest-news" className='text-scoutWarmGray'>Latest News</Link></li>
                        <li className='pr-8'><Link to="/gallery" className='text-scoutWarmGray'>Gallery</Link></li>
                        <li className='pr-8'><Link to="/resources" className='text-scoutWarmGray'>Resources</Link></li>
                        <li className='pr-8'><Link to="/contact" className='font-bold text-scoutWarmGray'>Contact</Link></li>
                        <li className='pr-8'><a href="https://facebook.com/groups/EriePack248" target="_blank" rel="noreferrer" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                    </ul>
                    <div className="flex justify-end pl-0 my-auto mr-6 list-none md:hidden">
                            <label htmlFor='smallMenu' className='hidden'>Menu</label>
                            <div id='smallmenu' name='smallMenu' role="button" className="flex justify-center w-8 h-8 p-0 bg-opacity-0 border-0 rounded-full outline hover:drop-shadow-lg" {...buttonize(toggleMenu)}>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 mt-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </div>
                            <ul
                                className={isHidden ? 'hidden' : 'flex flex-col flex-wrap text-sm rounded-2xl bg-scoutLightTan absolute shadow-md z-[1] mt-10 mr-0 w-52 p-2 '}>
                                <li className='pr-2'><Link to="/" className='font-bold text-scoutWarmGray txt-sm'>Home</Link></li>
                                <li className='pr-2'><Link to="/pack" className='text-scoutWarmGray txt-sm'>Pack</Link></li>
                                <li className='pr-2'><Link to="/calendar" className='text-scoutWarmGray txt-sm'>Calendar</Link></li>
                                <li className='pr-2'><Link to="/latest-news" className='text-scoutWarmGray txt-sm'>Latest News</Link></li>
                                <li className='pr-2'><Link to="/gallery" className='text-scoutWarmGray txt-sm'>Gallery</Link></li>
                                <li className='pr-2'><Link to="/resources" className='text-scoutWarmGray txt-sm'>Resources</Link></li>
                                <li className='pr-2'><Link to="/contact" className='font-bold text-scoutWarmGray txt-sm'>Contact</Link></li>
                                <li className='pr-2'><a href="https://facebook.com/groups/EriePack248" target="_blank" rel="noreferrer" className='text-blue-600 txt-sm'><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>  
                            </ul>
                        </div>
                </nav>
            )
        default:
            return (
                <nav className='grid grid-cols-2 py-8 bg-scoutLightTan'>
                    <span className='justify-start inline'><a href="/"><img className='w-48' src="/images/logo/Pack 248 Logo-gh.png" alt="Pack 248 Logo" /></a></span>
                    <ul className='hidden md:list-none md:my-auto md:pl-0 md:justify-end md:flex'>
                        <li className='pr-8'><Link to="/" className='text-scoutWarmGray'>Home</Link></li>
                        <li className='pr-8'><Link to="/pack" className='text-scoutWarmGray'>Pack</Link></li>
                        <li className='pr-8'><Link to="/calendar" className='text-scoutWarmGray'>Calendar</Link></li>
                        <li className='pr-8'><Link to="/latest-news" className='text-scoutWarmGray'>Latest News</Link></li>
                        <li className='pr-8'><Link to="/gallery" className='text-scoutWarmGray'>Gallery</Link></li>
                        <li className='pr-8'><Link to="/resources" className='text-scoutWarmGray'>Resources</Link></li>
                        <li className='pr-8'><Link to="/contact" className='text-scoutWarmGray'>Contact</Link></li>
                        <li className='pr-8'><a href="https://facebook.com/groups/EriePack248" target="_blank" rel="noreferrer" className='text-blue-600'><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                    </ul>
                    <div className="flex justify-end pl-0 my-auto mr-6 list-none md:hidden">
                            <label htmlFor='smallMenu' className='hidden'>Menu</label>
                            <div id='smallmenu' name='smallMenu' role="button" className="flex justify-center w-8 h-8 p-0 bg-opacity-0 border-0 rounded-full outline hover:drop-shadow-lg" {...buttonize(toggleMenu)}>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 mt-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </div>
                            <ul
                                className={isHidden ? 'hidden' : 'flex flex-col flex-wrap text-sm rounded-2xl bg-scoutLightTan absolute shadow-md z-[1] mt-10 mr-0 w-52 p-2 '}>
                                <li className='pr-2'><Link to="/" className='text-scoutWarmGray txt-sm'>Home</Link></li>
                                <li className='pr-2'><Link to="/pack" className='text-scoutWarmGray txt-sm'>Pack</Link></li>
                                <li className='pr-2'><Link to="/calendar" className='text-scoutWarmGray txt-sm'>Calendar</Link></li>
                                <li className='pr-2'><Link to="/latest-news" className='text-scoutWarmGray txt-sm'>Latest News</Link></li>
                                <li className='pr-2'><Link to="/gallery" className='text-scoutWarmGray txt-sm'>Gallery</Link></li>
                                <li className='pr-2'><Link to="/resources" className='text-scoutWarmGray txt-sm'>Resources</Link></li>
                                <li className='pr-2'><Link to="/contact" className='text-scoutWarmGray txt-sm'>Contact</Link></li>
                                <li className='pr-2'><a href="https://facebook.com/groups/EriePack248" target="_blank" rel="noreferrer" className='text-blue-600 txt-sm'><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>  
                            </ul>
                        </div>
                </nav>
            )
    }
}

export default NavBar;