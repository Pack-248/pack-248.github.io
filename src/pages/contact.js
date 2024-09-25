import * as React from 'react';
import Layout from '../components/layout';
import ContactForm from '../components/contactform'

const ContactPage = () => {
  return (
    <Layout pageTitle="Contact">
    <div className='mx-6'>
      <ContactForm />
      </div>
    </Layout>
  )
}

export const Head = () => <title>Pack 248 - Contact Us</title>;
export default ContactPage;