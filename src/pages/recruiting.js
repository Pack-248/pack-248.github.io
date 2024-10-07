import * as React from 'react';
import Layout from '../components/layout';

const RecruitingPage = () => {
    return (
        <Layout pageTitle="Recruiting">
             <div className='prose prose-base m-6 max-w-none'>
                <div id='background' className='h-48 bg-cover md:bg-center md:h-96 rounded-lg'  style={{backgroundImage: `url('../images/misc/recruiting-web-banner.jpg')`,}}>
                    <div className='h-full flex flex-col justify-center items-center'>
                    </div>
                </div>
                <div className='flex flex-row flex-wrap pt-6 items-center justify-center'>
                    <div id='recruitingText' className='md:w-1/2 px-4'>
                        <h1>Join Our Cub Scout Pack!</h1>
                        <p>Hey there, future Scouts and families! Are you ready for an adventure of a lifetime? Our Cub Scout Pack is looking for new members to join our fun and exciting community. Here's why you should consider becoming a part of our pack:</p>

                        <h2>What is Cub Scouting?</h2>
                        <p>Cub Scouting is all about making new friends, learning new skills, and having a blast while doing it. It's a program designed for boys and girls in kindergarten through fifth grade, where they can explore the outdoors, participate in community service, and develop leadership skills.</p>
                        <img src='/images/misc/recruiting-2.png' className='md:hidden w-5/6 mx-auto' alt='Boys and Girls K-5'/>
                        <h2>Why Join Our Pack?</h2>
                        <ul>
                            <li><p><span className='font-semibold'>Adventure Awaits:</span> From camping trips and hiking adventures to pinewood derby races and community service projects, there's never a dull moment in Cub Scouting.</p></li>
                            <li><p><span className='font-semibold'>Learn New Skills:</span> Scouts get hands-on experience in a variety of activities, including first aid, cooking, knot-tying, and more. These skills are not only fun to learn but also valuable for life.</p></li>
                            <li><p><span className='font-semibold'>Make Lifelong Friends:</span> Being part of a Cub Scout Pack means being part of a close-knit community. Scouts form strong bonds with their peers and create memories that last a lifetime.</p></li>
                            <li><p><span className='font-semibold'>Build Character:</span> Cub Scouting emphasizes values like honesty, respect, and responsibility. It's a great way for kids to develop a strong moral foundation.</p></li>
                        </ul>
                        <img src='/images/logo/Pack 248 Logo.webp' className=' w-5/6 mx-auto md:hidden' alt='Pack 248 Logo'/>
                        <h2>How to Join</h2>
                        <p>Joining our Cub Scout Pack is easy! Here's what you need to do:</p>
                        <ol>
                            <li><span className='font-semibold'>Explore Our Website:</span> Have a look around our website for more information about our pack, upcoming events, and how to get involved.</li>
                            <li><span className='font-semibold'>Attend a Meeting:</span> Come to one of our pack meetings to see what we're all about. Meetings are usually held the Third Thursday of the month at 6:30pm. Check the <a href='/calendar'>calendar</a> to find upcoming Pack meetings.</li>
                            <li><span className='font-semibold'>Sign Up:</span> Fill out the registration form at <a href='https://beascout.scouting.org/list/?zip=48038&program%5B%5D=pack&unitID=233029' target='_blank' rel='noreferrer'>BeAScout.org</a> or contact one of our Pack leaders to get started.</li>
                        </ol>
                        <img src='/images/misc/scout-me-in.png' className='md:hidden w-5/6 mx-auto' alt='Scout Me In'/>
                        <h2>Parent Involvement</h2>
                        <p>We encourage parents to get involved in the Cub Scouting experience. Whether it's helping out at meetings, planning events, or joining our leadership team, there are plenty of ways to contribute. Your involvement makes a big difference in the success of our pack.</p>

                        <h2>Contact Us</h2>
                        <p>Have questions or need more information? Feel free to reach out to us at <a href='mailto:pack248mi@gmail.com'>pack248mi@gmail.com</a>. We're here to help and can't wait to welcome you into our Cub Scout family!</p>

                        <p>Join us today and embark on an adventure that will shape your child's future in the best possible way. See you at our next meeting!</p>
                    </div>
                    <div id='recruitingImage' className='flex flex-col flex-wrap items-center justify-center md:w-1/2 px-4'>
                        <img src='/images/logo/Pack 248 Logo.webp' className='hidden md:block w-2/3 mx-auto' alt='Pack 248 Logo'/>
                        <img src='/images/misc/recruiting-2.png' className='hidden md:block w-2/3 mx-auto' alt='Boys and Girls K-5'/>
                        <img src='/images/misc/scout-me-in.png' className='hidden md:block w-2/3 mx-auto' alt='Scout Me In'/>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export const Head = () => (
    <>
        <title>Pack 248 - Join Us!</title>
        <meta name="description" content="Pack 248 is a Family Cub Scout Pack located in Clinton Township, Michigan" />
    </>
);

export default RecruitingPage; 