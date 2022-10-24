import React, { useState } from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { toast } from 'react-toastify';
import LoadingSpinner from './LoadingSpinner';


const Footer = (props) => {

    const [email, setEmail] = useState('')
    const [contact, setContact] = useState(false)
    const [company, setCompany] = useState(false)
    const [loading, setLoading] = useState(false)
    // const [contact, setContact] = useState(false)

    const checker = (name) => {
        name === 'company' ? setCompany(prev => !prev) : setCompany(false);
        name === 'contact' ? setContact(prev => !prev) : setContact(false)
    }


    const onSubmit = async (values, actions) => {
        setLoading(true)
        try {
            const docRef = await addDoc(collection(props.db, "subscribe"), {
                email: values.email,
            })
                .then((response) => {
                    setLoading(false)
                    toast.success('Success')
                })
                .catch((err) => {
                    toast.error('Try again')
                    setLoading(false)
                })

            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            toast.error('Try again')
            console.error("Error adding document: ", e);
            setLoading(false)
        }

    }



    return (
        <footer className='bg-[#063255] text-white flex justify-center relative '>

            <div className='px-4 md:px-8 lg:px-24 w-full z-[99] 2xl:max-w-[1600px] '>

                {/* desktop */}
                <div className='pt-8 md:pt-14 hidden grid-cols-[auto_1fr_1fr_1fr] gap-3 md:grid'>
                    <div>

                        <div className='pb-4 mr-8'>
                            <h1 className='font-semibold text-2xl '>Kitovu Technology Company</h1>
                            <p >Kitovu Business Hub, Iseyin-Saki Expressway, <br />Sawmill Area, Iseyin</p>

                        </div>
                        <div className='flex gap-1.5'>
                            <a href='https://facebook.com/kitovut' target='_blank' alt="facebook" >
                                <FaFacebookF className='text-white' />
                            </a>
                            <a href='https://twitter.com/kitovut' target='_blank' alt="twitter" >
                                <AiOutlineTwitter className='text-white' />
                            </a>
                            <a href='https://www.youtube.com/channel/UCwML8SY-x0PsjfH8BsQzsjA' target='_blank' alt="youtube" >
                                <AiOutlineYoutube className='text-white' />
                            </a>
                            <a href='https://instagram.com/kitovu001 ' target='_blank' alt="instagram" >
                                <AiOutlineInstagram className='text-white' />
                            </a>
                            <a href='https://www.linkedin.com/company/kitovutechnologycompany' target='_blank' alt="linkedin" >
                                <FaLinkedinIn className='text-white' />
                            </a>

                        </div>


                    </div>

                    <div>
                        <div className='flex flex-col gap-3 text-white'>
                            <h1 className='font-medium pb-2'>Company</h1>
                            {/* <Link to='' >About Us </Link>
                            <Link to='' >Career</Link> */}
                            <Link to='/' >Services</Link>

                        </div>
                    </div>

                    <div>
                        <div className='flex flex-col gap-3 text-white'>
                            <h1 className='font-medium pb-2'>Contact</h1>
                            <a href="tel:+4733378901">+(123) 456-7890</a>
                            <a href="mailto:info@kitovu.com.ng">info@kitovu.com.ng</a>
                        </div>
                    </div>

                    <div>
                        <Formik
                            initialValues={{
                                email: ''
                            }}
                            validationSchema={validation}
                            onSubmit={onSubmit}
                        >
                            {({ values, isValid, errors, touched, setTouched, dirty, setFieldValue }) => (
                                <Form>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor='email' >
                                            Subscribe for newsletter
                                        </label>

                                        <div>
                                            <Field type='email' name='email' placeholder='info@kitovu.com.ng' className={`${errors.email && touched.email && "border-red-700"} rounded-[20px] px-5 py-2 text-gray-800 w-full `} />
                                            <p className="text-red-700 text-sm mt-1">
                                                <ErrorMessage name="email" />
                                            </p>
                                        </div>


                                        <button className='w-full md:w-[182px] bg-[#F58A071A] px-6 py-2.5 bg-[#F58A07] text-white hover:bg-white hover:text-[#F58A07]  rounded-3xl font-medium md:font-semibold disabled:bg-gray-500'
                                            disabled={!(isValid || dirty) || loading}
                                            type='submit'
                                        >{loading ? <LoadingSpinner /> : 'Subscribe'}</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>








                </div>

                {/* mobile -i could have structured the desktop one to work for the two but na so we see am */}
                <div className='flex flex-col md:hidden pt-8'>

                    <div>

                        <div className='pb-4 '>
                            <h1 className='font-semibold text-2xl pb-4 '>Kitovu Technology Company</h1>
                            <p >Kitovu Business Hub, Iseyin-Saki Expressway, <br />Sawmill Area, Iseyin</p>

                        </div>
                        <div className='flex gap-1.5'>
                            <a href='https://facebook.com/kitovut' target='_blank' alt="facebook" >
                                <FaFacebookF className='text-white' />
                            </a>
                            <a href='https://twitter.com/kitovut' target='_blank' alt="twitter" >
                                <AiOutlineTwitter className='text-white' />
                            </a>
                            <a href='https://www.youtube.com/channel/UCwML8SY-x0PsjfH8BsQzsjA' target='_blank' alt="youtube" >
                                <AiOutlineYoutube className='text-white' />
                            </a>
                            <a href='https://instagram.com/kitovu001 ' target='_blank' alt="instagram" >
                                <AiOutlineInstagram className='text-white' />
                            </a>
                            <a href='https://www.linkedin.com/company/kitovutechnologycompany' target='_blank' alt="linkedin" >
                                <FaLinkedinIn className='text-white' />
                            </a>

                        </div>


                    </div>

                    <div className='mt-6'>
                        <div className='mb-3'>
                            <div className='flex justify-between items-center ' onClick={() => checker('company')}>
                                <h1 className='font-medium text-lg '>Company</h1>
                                <div><IoIosArrowDown className={`${company && ' rotate-180 '} transition-all ease-in-out delay-200`} /></div>
                            </div>
                            <div className={`${company ? 'flex ' : 'hidden '} flex-col mt-3 gap-3`}>
                                {/* <Link to='' >About Us </Link> */}
                                {/* <Link to='' >Career</Link> */}
                                <Link to='/' >Services</Link>
                                {/* <Link to='' className='' >Blog</Link> */}
                            </div>
                        </div>

                        <div className=''>
                            <div className='flex justify-between items-center ' onClick={() => checker('contact')}>
                                <h1 className='font-medium text-lg '>Contact</h1>
                                <div><IoIosArrowDown className={`${contact && ' rotate-180 '} transition-all ease-in-out delay-200`} /></div>
                            </div>
                            <div className={`${contact ? 'flex ' : 'hidden '} flex-col mt-3 gap-3`}>
                                <a href="tel:+4733378901">+47 333 78 901</a>
                                <a href="mailto:info@kitovu.com.ng">info@kitovu.com.ng</a>
                            </div>
                        </div>

                    </div>

                    <div className='mt-6'>
                        <Formik
                            initialValues={{
                                email: ''
                            }}
                            validationSchema={validation}
                            onSubmit={onSubmit}
                        >
                            {({ values, isValid, errors, touched, setTouched, dirty, setFieldValue }) => (
                                <Form>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor='email' >
                                            Subscribe to our newsletter
                                        </label>

                                        <div>
                                            <Field type='email' name='email' placeholder='info@kitovu.com.ng' className={`${errors.email && touched.email && "border-red-700"} rounded-[20px] px-5 py-2 text-gray-800 w-full `} />
                                            <p className="text-red-700 text-sm mt-1">
                                                <ErrorMessage name="email" />
                                            </p>
                                        </div>


                                        <button className='w-full md:w-[182px] bg-[#F58A071A] px-6 py-2.5 bg-[#F58A07] text-white hover:bg-white hover:text-[#F58A07] text-[15px]  rounded-3xl font-medium md:font-semibold disabled:bg-gray-500'
                                            disabled={!(isValid || dirty) || loading}
                                            type='submit'
                                        >{loading ? <LoadingSpinner /> : 'Subscribe'}</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>

                </div>

                <div className=' flex flex-col sm:flex-row gap-1.5  justify-between py-5 pt-8 text-sm ' >
                    <p>© All rights reserved – Finsweet</p>

                    <div className='flex gap-3 text-sm'>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>


            </div>



        </footer>
    )
}

export default Footer
const validation = Yup.object({

    email: Yup.string().email('Invalid email address').required('Required'),
});