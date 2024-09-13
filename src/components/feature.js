import React from "react";

const Feature = ({pageTitle}) => {

    return (
        <div className="flex justify-center w-full mx-auto gap-6 mt-4 mb-8">
            <div className="card card-compact w-[32rem] shadow-xl text-center bg-scoutDarkTan rounded-lg">
                <figure className='w-full h-1/3 my-auto mb-4 mt-4'>
                    <img className='mx-auto h-28'
                    src="/images/icon/icons8-globe-96.png"
                    alt="Globe Icon" />
                </figure>
                <div className="card-body">
                    <h2 className="text-2xl text-scoutLightTan mb-6">Make a Difference</h2>
                    <p className='text-scoutLightTan mx-4 mb-8'>Scout-age youth experience dramatic physical and emotional growth. Scouting offers them opportunities to channel much of that change into productive endeavors and find the answers they seek for many questions.</p>
                </div>
            </div>
            <div className="card card-compact w-[32rem] shadow-xl text-center bg-scoutDarkTan rounded-lg">
                <figure className='w-full h-1/3 my-auto mb-4 mt-4'>
                    <img className='mx-auto h-24'
                    src="/images/icon/icons8-camping-tent-96.png"
                    alt="Globe Icon" />
                </figure>
                <div className="card-body">
                    <h2 className="text-2xl text-scoutLightTan mb-6">Outdoor Skills</h2>
                    <p className='text-scoutLightTan mx-4 mb-24'>In the outdoors, youth have opportunities to acquire skills that make them more self-reliant. They can explore canoe and hiking trails and complete challenges they first thought were beyond their ability. There is no greater teacher than the great outdoors.</p>
                </div>
            </div>
            <div className="card card-compact w-[32rem] shadow-xl text-center bg-scoutDarkTan rounded-lg">
                <figure className='w-full h-1/3 my-auto mb-4 mt-4'>
                    <img className='mx-auto h-28'
                    src="/images/icon/icons8-stopwatch-96.png"
                    alt="Globe Icon" />
                </figure>
                <div className="card-body">
                    <h2 className="text-2xl text-scoutLightTan mb-6">Timeless Values</h2>
                    <p className='text-scoutLightTan mx-4'>Scouting programs instill in youth the values found in the Scout Oath and Scout Law. Scouting helps youth develop academic skills, self-confidence, ethics, leadership skills, and citizenship skills that influence their adult lives.</p>
                </div>
            </div>
        </div>
    )
}

export default Feature;