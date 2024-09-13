import * as React from 'react'

const BreadCrumb = ({pageTitle}) => {
    if("Home" !== pageTitle)
    {
        return (
                <div className='items-center justify-center flex flex-col gap-2'>
                    <div className="max-w-full overflow-x-auto pt-2 pb-2 text-sm ">
                        <ul className='flex list-none pl-0 mx-auto my-auto'>
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