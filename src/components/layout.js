import * as React from 'react'
import NavBar from './navbar'
import Header from './header'
import Footer from './footer'
import BreadCrumb from './breadcrumb'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className='m-auto max-w-max font-sans  '>
            <NavBar pageTitle={pageTitle} />
            <Header pageTitle={pageTitle} />
            <BreadCrumb pageTitle={pageTitle} />
            {children}
            <Footer pageTitle={pageTitle} />
        </div>
    )
}
export const Head = () => {return(<script src="https://kit.fontawesome.com/99bc438c1b.js" crossorigin="anonymous"></script>)}
export default Layout