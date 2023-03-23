import ContactForm from '../components/contact/ContactForm/ContactForm';
import Head from 'next/head';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Form</title>
        <meta name='description' content='send you your messages' />
      </Head>
      <ContactForm />
    </>
  );
};

export default Contact;
