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
        <div className='w-2/3 m-6 grid grid-cols-2 mx-auto'>
          <div id='contactLeftSide' className='w-full flex flex-col items-left justify-center '>
              <h1 className='align-middle  mx-6 font-bold text-3xl '>Get in touch</h1>
              <p className='line-h-8 align-middle my-6 mx-6 text-lg'>Fill in the form to send us a quick message. Or you can try one of the methods below</p>
              <dl className='m-6 line-h-6 flex flex-col gap-4 '>
                <div className='flex gap-4'>
                  <dt className='grid place-items-center w-16 text-center'>
                    <span className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap b-0">Address</span>
                    <FontAwesomeIcon className='h-12 text-cubScoutBlue' icon={['fas', 'building']} />
                  </dt>
                  <dd className='grid place-items-center'>20088 Apache Dr<br/>Clinton Township, MI 48038</dd>
                </div>
                <div className='flex gap-4'>
                  <dt className="grid place-items-center w-16 text-center">
                    <span className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap b-0">Telephone</span>
                    <FontAwesomeIcon className='h-10 text-cubScoutBlue' icon={['fas', 'phone']} />
                  </dt>
                  <dd className='grid place-items-center'><a href='tel:+1 (586) 419-0427'>+1 (586) 419-0427</a></dd>
                </div>
                <div className='flex gap-4'>
                  <dt className='grid place-items-center w-16 text-center'>
                    <span className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap b-0">Email</span>
                    <FontAwesomeIcon className='h-10 text-cubScoutBlue' icon={['fas', 'envelope']} />
                  </dt>
                  <dd className='grid place-items-center'><a href="mailto:pack248mi@gmail.com" class="blx">pack248mi@gmail.com</a></dd>
                </div>
              </dl>

          </div>
          <div id='contactRightSide' className='w-full flex'>
            <h2 className={isHidden ? 'text-2xl font-semibold text-cubScoutBlue mx-auto max-w-xl' : 'hidden'}>Thank you for reaching out!</h2>
            <h2 className={isError ? 'text-2xl font-semibold text-wolfRed mx-auto max-w-xl' : 'hidden'}>An error occurred while sending. Please try again.</h2>
            <form ref={form} onSubmit={sendEmail} className={isHidden ? 'hidden' : 'mx-auto mt-16 max-w-xl sm:mt-20'}>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="user_name" className="block text-sm font-semibold leading-6 text-scoutDarkGray">Name</label>
                  <div className="mt-2.5">
                    <input type="text" name="user_name" id="user_name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-scoutDarkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="user_email" className="block text-sm font-semibold leading-6 text-scoutDarkGray">Email</label>
                  <div className="mt-2.5">
                    <input type="email" name="user_email" id="user_email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-scoutDarkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-scoutDarkGray">Message</label>
                  <div className="mt-2.5">
                    <textarea name="message" id="message" rows="4" className="block w-full rounded-md border-0 px-3.5 py-2 text-scoutDarkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
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
        );
  };
  export default ContactForm;