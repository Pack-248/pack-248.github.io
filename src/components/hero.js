import * as React from 'react'

const Hero = ({pageTitle}) => {

    return (
        <div
            className="grid w-full place-items-center bg-cover mt-auto mb-auto min-h-[30rem]"
            style={{
                backgroundImage: "url(/images/hero/dark-forest.jpg)",
            }}>
            <div className="rounded bg-scoutLightTan bg-opacity-80 ">
                <div className="flex justify-center items-center text-neutral-content w-max-[80rem] gap-4 p-4 ">
                    <div className=" text-scoutDarkGray ">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to Cub Scout Pack 248!</h1>
                        <p className="mb-5">
                            We are a Cub Scout Family Pack located in Clinton Township, MI, and we are so excited you found us!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Hero;