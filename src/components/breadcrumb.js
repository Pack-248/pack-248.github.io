import * as React from 'react'

const BreadCrumb = ({pageTitle}) => {
    switch(pageTitle) {
        case "Home":
            break;
        case "Tiger":
        case "Wolf":
        case "Bear":
        case "Webelos":
        case "Arrow Of Light":
        case "Lion":
            return (
                <div className='flex flex-col items-center justify-center gap-2'>
                    <div className="max-w-full pt-2 pb-2 overflow-x-auto text-sm ">
                        <ul className='flex pl-0 mx-auto my-auto list-none'>
                            <li className='mr-4'><a href="/">Home</a></li>
                            <li className='mr-4'>|</li>
                            <li className='mr-4'><a href="/pack">Pack</a></li>
                            <li className='mr-4'>|</li>
                            <li>{pageTitle}</li>
                        </ul>
                    </div>
                </div>
            )
        default:
            return (
                <div className='flex flex-col items-center justify-center gap-2'>
                    <div className="max-w-full pt-2 pb-2 overflow-x-auto text-sm ">
                        <ul className='flex pl-0 mx-auto my-auto list-none'>
                            <li className='mr-4'><a href="/">Home</a></li>
                            <li className='mr-4'>|</li>
                            <li>{pageTitle}</li>
                        </ul>
                    </div>
                </div>
            )
        }
    }


export default BreadCrumb;