import React, { useEffect, useRef, useState } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup";

import { collection, addDoc } from "firebase/firestore";
import { toast } from 'react-toastify';
import LoadingSpinner from '../Components/LoadingSpinner';


const ContactUs = (props) => {

    const [loading, setLoading] = useState(false)

    const onSubmit = async (values, actions) => {
        setLoading(true)
        try {
            const docRef = await addDoc(collection(props.db, "contact us"), {
                first_name: values.first_name,
                last_name: values.last_name,
                message: values.message,
                email: values.email,
            })
                .then((response) => {
                    setLoading(false)
                    toast.success('Contact added successfully.')

                }).catch((err) => {
                    setLoading(false)
                    toast.error('Problem adding contact')
                })
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            setLoading(false)
            console.error("Error adding document: ", e);
        }

    }



    return (
        <div>
            <Navbar />
            <div className='px-4 md:px-8 lg:px-24  pt-4 md:pt-16 flex justify-center pb-4 '>

                <div className='flex gap-5 md:gap-10 flex-col md:flex-row  justify-center 2xl:max-w-[1600px] py-8 md:py-14'>
                    <section className='mb-8'>

                        <div>
                            <h1 className='text-header max-w-[560px] font-semibold text-2xl md:text-3xl lg:text-5xl mt-2'>Have a question ? Let’s get in touch with us.</h1>
                            <p className='text-body pt-4 pb-5'>Fill up the Form  and ou team will get back to within 24 hrs</p>
                        </div>

                        <div>
                            <Formik
                                initialValues={{
                                    first_name: '',
                                    last_name: '',
                                    message: '',
                                    email: ''
                                }}
                                validationSchema={validation}
                                onSubmit={onSubmit}
                            >
                                {({ values, isValid, errors, touched, setTouched, dirty, setFieldValue }) => (
                                    <Form>
                                        <div >


                                            <div className='w-full mb-4'>
                                                <Field type='text' name='first_name' placeholder='First Name' className={`${errors.first_name && touched.first_name && "border-red-700"} rounded-[5px] px-3.5 py-2 text-gray-800 w-full border border-[#e5e7eb]`} />
                                                <p className="text-red-700 text-sm mt-1">
                                                    <ErrorMessage name="first_name" />
                                                </p>
                                            </div>
                                            <div className='w-full mb-4'>
                                                <Field type='text' name='last_name' placeholder='Last Name' className={`${errors.last_name && touched.last_name && "border-red-700"} rounded-[5px] px-3.5 py-2 text-gray-800 w-full border border-[#e5e7eb]`} />
                                                <p className="text-red-700 text-sm mt-1">
                                                    <ErrorMessage name="last_name" />
                                                </p>
                                            </div>
                                            <div className='w-full mb-4'>
                                                <Field type='text' name='email' placeholder='Email Address' className={`${errors.email && touched.email && "border-red-700"} rounded-[5px] px-3.5 py-2 text-gray-800 w-full border border-[#e5e7eb]`} />
                                                <p className="text-red-700 text-sm mt-1">
                                                    <ErrorMessage name="email" />
                                                </p>
                                            </div>
                                            <div className='w-full mb-4'>
                                                <Field as='textarea' row='10' name='message' placeholder='Type Message' className={`${errors.message && touched.message && "border-red-700"} rounded-[5px] px-3.5 py-2 text-gray-800 w-full border border-[#e5e7eb]`} />
                                                <p className="text-red-700 text-sm mt-1">
                                                    <ErrorMessage name="message" />
                                                </p>
                                            </div>


                                            <button className='w-full md:w-[182px] bg-[#F58A071A] px-6 py-2.5 bg-[#F58A07] text-white hover:bg-white hover:text-[#F58A07]  border-[1px] border-[#F58A07] rounded-3xl font-medium md:font-semibold disabled:bg-gray-500'
                                                disabled={!(isValid || dirty)}
                                                type='submit'
                                            >{loading ? <LoadingSpinner /> : 'Submit'}</button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>

                    </section>

                    <section className='mb-24'>
                        <div className='flex justify-between flex-col md:flex-row gap-4 md:gap-8 mb-8 md:mb-16'>
                            <div className='w-full'>
                                <h3 className='text-xl text-[#0D1317] mb-1 md:mb-4'>Location</h3>
                                <p className='text-body text-sm md:text-base'>DLF Cybercity, Bhubaneswar,<br /> India, &52050</p>
                            </div>
                            <div className='w-full'>
                                <h3 className='text-xl text-[#0D1317] mb-1 md:mb-4'>Contact Us</h3>
                                <a href="tel:+4733378901" className='text-body text-sm md:text-base'>+47 333 78 901</a>
                                <br />
                                <a href="mailto:info@kitovu.com.ng" className='text-body text-sm md:text-base'>info@kitovu.com.ng</a>
                            </div>
                        </div>

                        {/* <div className='relative h-3/5 w-full rounded-[20px] overflow-hidden'>
                            <MapContainer />

                        </div> */}
                    </section>


                </div>
            </div>
            <Footer db={props.db} />
        </div>
    )
}

export default ContactUs

const validation = Yup.object({
    first_name: Yup.string()
        .required("required"),
    last_name: Yup.string()
        .required("required"),
    message: Yup.string()
        .required("required"),
    email: Yup.string()
        .required("email required")
        .email("Enter valid email"),
})
