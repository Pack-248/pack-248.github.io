import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

const ContactForm = () => {
    const form = useRef();

    const [isHidden, setIsHidden] = useState(false);
    const [isError, setIsError] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm(process.env.GATSBY_APP_SERVICE_ID, process.env.GATSBY_APP_TEMPLATE_ID, form.current, {
            publicKey: process.env.GATSBY_APP_PUBLIC_KEY,
          })
          .then(
            () => {
              setIsHidden(current => !current);
            },
            (error) => {
              console.log('FAILED...', error.text);
              setIsError(current => !current);
            },
          );
      };

      return (
        <div className='flex mx-auto'>
          <div className='flex flex-col flex-wrap w-full mr-4 md:grid-cols-2 md:grid lg:w-2/3 md:w-4/5 lg:mx-auto md:mx-4'>
          <div id='contactLeftSide' className='flex flex-col justify-center w-auto md:w-full items-left'>
              <h1 className='mx-6 text-3xl font-bold align-middle '>Get in touch</h1>
              <p className='mx-6 my-6 text-lg align-middle line-h-8'>Fill in the form to send us a quick message. Or you can try one of the methods below</p>
              <dl className='flex flex-col gap-4 m-6 line-h-6 '>
                <div className='flex gap-4'>
                  <dt className='grid w-16 text-center place-items-center'>
                    <span className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap b-0">Address</span>
                    <FontAwesomeIcon className='h-12 text-cubScoutBlue' icon={['fas', 'building']} />
                  </dt>
                  <dd className='grid place-items-center'>20088 Apache Dr<br/>Clinton Township, MI 48038</dd>
                </div>
                <div className='flex gap-4'>
                  <dt className="grid w-16 text-center place-items-center">
                    <span className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap b-0">Telephone</span>
                    <FontAwesomeIcon className='h-10 text-cubScoutBlue' icon={['fas', 'phone']} />
                  </dt>
                  <dd className='grid place-items-center'><a href='tel:+1 (586) 419-0427'>+1 (586) 419-0427</a></dd>
                </div>
                <div className='flex gap-4'>
                  <dt className='grid w-16 text-center place-items-center'>
                    <span className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap b-0">Email</span>
                    <FontAwesomeIcon className='h-10 text-cubScoutBlue' icon={['fas', 'envelope']} />
                  </dt>
                  <dd className='grid place-items-center'><a href="mailto:pack248mi@gmail.com" class="blx">pack248mi@gmail.com</a></dd>
                </div>
              </dl>
          </div>
          <div id='contactRightSide' className='flex flex-col justify-center w-auto md:w-full items-left'>
            <h2 className={isHidden ? 'text-2xl font-semibold text-cubScoutBlue mx-auto max-w-xl' : 'hidden'}>Thank you for reaching out!</h2>
            <h2 className={isError ? 'text-2xl font-semibold text-wolfRed mx-auto max-w-xl' : 'hidden'}>An error occurred while sending. Please try again.</h2>
            <form ref={form} onSubmit={sendEmail} className={isHidden ? 'hidden' : 'mx-auto mt-0 md:mt-16'}>
              <div className="flex flex-col justify-center md:grid-cols-1 md:grid gap-x-4 md:gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="">
                  <label htmlFor="user_name" className="block text-sm font-semibold leading-6 text-scoutDarkGray">Name</label>
                  <div className="mt-2.5">
                    <input type="text" name="user_name" id="user_name" autoComplete="given-name" className="block w-5/6 mx-4 md:mx-0 md:w-full rounded-md border-0 px-3.5 py-2  text-scoutDarkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  </div>
                </div>
                <div className="">
                  <label htmlFor="user_email" className="block text-sm font-semibold leading-6 text-scoutDarkGray">Email</label>
                  <div className="mt-2.5">
                    <input type="email" name="user_email" id="user_email" autoComplete="email" className="block w-5/6 mx-4 md:mx-0 md:w-full rounded-md border-0 px-3.5 py-2 text-scoutDarkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  </div>
                </div>
                <div className="">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-scoutDarkGray">Message</label>
                  <div className="mt-2.5">
                    <textarea name="message" id="message" rows="4" className="block w-5/6 md:w-full mx-4 md:mx-0 rounded-md border-0 px-3.5 py-2 text-scoutDarkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                  </div>
                </div>
              </div>
            <div className="my-10 w-96">
                <input id="to_name" name="to_name" type="hidden" value="Pack 248"/>
              <button type="submit" className="block w-full rounded-md bg-cubScoutBlue px-3.5 py-2.5 text-center text-sm font-semibold text-scoutLightTan shadow-sm hover:bg-cubScoutPaleBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cubScoutBlue">Let's talk</button>
            </div>
          </form>
          </div>
        </div>
        </div>
        );
  };
  export default ContactForm;