import React from "react";

const Feature = ({pageTitle}) => {

    return (
        <div className="flex justify-center w-full gap-6 mx-auto mt-4 mb-8">
            <div className="card card-compact w-[32rem] shadow-xl text-center bg-scoutDarkTan rounded-lg">
                <figure className='w-full my-auto mb-4 '>
                    <img className='mx-auto rounded-t-lg'
                    src="/images/hero/biking_woods_boys_social-media_csbc-1.jpg"
                    alt="Scouts biking in the woods" />
                </figure>
                <div className="flex flex-col flex-auto gap-2 md:p-8">
                    <h2 className="mb-6 text-lg md:text-2xl text-scoutLightTan">Make a Difference</h2>
                    <p className='mx-2 mb-4 text-xs md:text-base md:mb-6 md:mx-4 text-scoutLightTan'>Scout-age youth experience dramatic physical and emotional growth. Scouting offers them opportunities to channel much of that change into productive endeavors and find the answers they seek for many questions.</p>
                </div>
            </div>
            <div className="card card-compact w-[32rem] shadow-xl text-center bg-scoutDarkTan rounded-lg">
                <figure className='w-full my-auto mb-4'>
                    <img className='mx-auto rounded-t-lg'
                    src="/images/hero/fishing_mixed_social-media_csbc-1.jpg"
                    alt="Scouts fishing" />
                </figure>
                <div className="flex flex-col flex-auto gap-2 md:p-8">
                    <h2 className="mb-6 text-lg md:text-2xl text-scoutLightTan">Outdoor Skills</h2>
                    <p className='mx-2 mb-4 text-xs md:text-base md:mb-6 md:mx-4 text-scoutLightTan'>In the outdoors, youth have opportunities to acquire skills that make them more self-reliant. They can explore canoe and hiking trails and complete challenges they first thought were beyond their ability. There is no greater teacher than the great outdoors.</p>
                </div>
            </div>
            <div className="card card-compact w-[32rem] shadow-xl text-center bg-scoutDarkTan rounded-lg">
                <figure className='mb-4 w-fullmy-auto'>
                    <img className='mx-auto rounded-t-lg'
                    src="/images/hero/slime_girls_social-media_csbc.jpg"
                    alt="Globe Icon" />
                </figure>
                <div className="flex flex-col flex-auto gap-2 md:p-8">
                    <h2 className="mb-6 text-lg text-scoutLightTan md:text-2xl ">Timeless Values</h2>
                    <p className='mx-2 mb-4 text-xs md:text-base md:mb-6 md:mx-4 text-scoutLightTan'>Scouting programs instill in youth the values found in the Scout Oath and Scout Law. Scouting helps youth develop academic skills, self-confidence, ethics, leadership skills, and citizenship skills that influence their adult lives.</p>
                </div>
            </div>
        </div>
    )
}

export default Feature;