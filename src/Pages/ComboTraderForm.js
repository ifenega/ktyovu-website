import React, { useState } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup";
import image1 from '../assets/farm12.png'
import PhoneInput from "react-phone-number-input";
import countries from "../assets/countries.json"
import LoadingSpinner from '../Components/LoadingSpinner';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';
import ScrollToTop from '../Components/ScrollToTop';
import { usePaystackPayment } from 'react-paystack';
import PaystackPop from '@paystack/inline-js'

const ComboTraderForm = (props) => {




    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [reference, setReference] = useState('')

   

    const onSubmit = async (values, actions) => {
      setReference('CT' + (Math.random() + 1).toString().substring(7))
        // setEmail(values.email)

        const paystack = new PaystackPop()
        paystack.newTransaction({
            key: 'pk_test_ddb82082e96a09b27bf5785bfb1d604e6f53e791',
            amount: 200000,
            email: values.email,
            reference: reference,
            currency: 'NGN',
            onSuccess(transaction){
                toast.success('Payment successful')
                let message =  `Payment Complete! Reference ${transaction.reference}`
                alert(message)
            },
            onCancel(){
                alert("You have cancelled the transaction")
            }
        })






        setLoading(true)


        // try {
        //     const docRef = await addDoc(collection(props.db, "Combo trader"), {

        //         email: values.email,
        //         name: values.name,
        //         phone: values.phone,
        //         commodities: values.commodities,
        //         countries: values.countries,
        //         trading_range: values.trading_range,
        //         storage_duration: values.storage_duration,
        //         services: values.services,
        //         reference: reference,
        // date: (new Date()).getTime().toString()
        //     })
        //         .then((response) => {
        //             setLoading(false)
        //             toast.success('Success.')

        //         }).catch((err) => {
        //             setLoading(false)
        //             toast.error('Problem adding contact')
        //         })
        //     // console.log("Document written with ID: ", docRef.id);
        // } catch (e) {
        //     setLoading(false)
        //     console.error("Error adding document: ", e);
        // }

    }
    //form for combo trader

    return (
        <div>
            <ScrollToTop />
            <Navbar />
            <div className='px-4 md:px-8 lg:px-24  pt-4 md:pt-16 flex justify-center pb-4 '>
                <div className='flex gap-5 md:gap-5 flex-col  justify-center 2xl:max-w-[1600px]'>


                    <section className='grid grid-cols-1 md:grid-cols-2 md:gap-14 items-center relative  mb-8 lg:mb-24 mt-10'>
                        <div className='flex flex-col gap-6 w-full  pt-4 '>

                            <div>
                                <h1 className='text-header max-w-[560px] font-semibold text-2xl md:text-3xl lg:text-5xl mt-2'>Sign up with Combo Trader</h1>
                                <p className='text-body pt-4 pb-5'>Fill up the Formand our team would revert within 24hours to set you on the path to profitable commodity trading.</p>
                            </div>

                            <div>
                                <Formik
                                    initialValues={{
                                        name: '',
                                        email: '',
                                        phone: '',
                                        commodities: '',
                                        countries: '',
                                        trading_range: '',
                                        storage_duration: '',
                                        services: '',
                                        address: '',


                                    }}
                                    // validationSchema={validation}
                                    onSubmit={onSubmit}
                                >
                                    {({ values, isValid, errors, touched, setTouched, dirty, setFieldValue }) => (
                                        <Form>
                                            <div >

                                                <div className='w-full mb-4'>
                                                    <Field type='text' name='name' placeholder='Name' className={`${errors.name && touched.name && "border-red-700"} rounded-[5px] px-3.5 py-2 text-gray-800 w-full border border-[#e5e7eb]`} />
                                                    <p className="text-red-700 text-sm mt-1">
                                                        <ErrorMessage name="name" />
                                                    </p>
                                                </div>

                                                <div className='signup-number mb-4 w-full'>
                                                    <PhoneInput
                                                        // countries={["NG", "GH", "KE"]}
                                                        // addInternationalOption = {false}
                                                        defaultCountry="NG"
                                                        value={values.phone}
                                                        name="phone"
                                                        id="phone"
                                                        placeholder='Phone Number'
                                                        // className=' py-[13px] px-3'
                                                        onChange={(event) => {
                                                            setFieldValue("phone", event, true);
                                                            // setFieldValue("country", parsePhoneNumber(event).country)
                                                        }}
                                                        onBlur={(event) => {
                                                            setTouched({ phone: true });
                                                        }}
                                                    />
                                                    <p className="text-red-700 text-sm mt-1">
                                                        <ErrorMessage name="phone" />
                                                    </p>
                                                </div>

                                                <div className='w-full mb-4'>
                                                    <Field type='email' name='email' placeholder='Email Address' className={`${errors.email && touched.email && "border-red-700"} rounded-[5px] px-3.5 py-2 text-gray-800 w-full border border-[#e5e7eb]`} />
                                                    <p className="text-red-700 text-sm mt-1">
                                                        <ErrorMessage name="email" />
                                                    </p>
                                                </div>

                                                <div className='flex flex-col sm:flex-row sm:gap-4'>

                                                    <div className='w-full mb-4'>
                                                        <Field
                                                            className={`${errors.countries && touched.countries && "border-red-700"} rounded-[5px] pr-10 px-3.5 py-2 text-gray-800 w-full border border-[#e5e7eb]`}
                                                            as="select"
                                                            name="countries"
                                                            id="countries"
                                                        >
                                                            <option label="Select Country"></option>
                                                            {countries.map((item) => (
                                                                <option value={item.name} label={item.name} >{item.name}</option>
                                                            ))}
                                                        </Field>
                                                        <p className="text-red-700 text-sm mt-1">
                                                            <ErrorMessage name="countries" />
                                                        </p>
                                                    </div>

                                                    <div className='w-full mb-4'>
                                                        <Field type='text' name='state' placeholder='State' className={`${errors.state && touched.state && "border-red-700"} rounded-[5px] px-3.5 py-2 text-gray-800 w-full border border-[#e5e7eb]`} />
                                                        <p className="text-red-700 text-sm mt-1">
                                                            <ErrorMessage name="state" />
                                                        </p>
                                                    </div>

                                                </div>


                                                <div className='w-full mb-4'>
                                                    <Field type='text' name='address' placeholder='Address' className={`${errors.address && touched.address && "border-red-700"} rounded-[5px] px-3.5 py-2 text-gray-800 w-full border border-[#e5e7eb]`} />
                                                    <p className="text-red-700 text-sm mt-1">
                                                        <ErrorMessage name="address" />
                                                    </p>
                                                </div>

                                                <div className='w-full mb-4'>
                                                    <Field
                                                        className={`${errors.commodities && touched.commodities && "border-red-700"} rounded-[5px] pr-10 px-3.5 py-2 text-gray-800 w-full border border-[#e5e7eb]`}
                                                        as="select"
                                                        name="commodities"
                                                        id="commodities"
                                                    >
                                                        <option label="Select commodities you would like to trade"></option>

                                                        <option value='Maize' label='Maize' >Maize</option>
                                                        <option value='Soya Bean' label='Soya Bean' >Soya Bean</option>
                                                        <option value='Rice' label='Rice' >Rice</option>
                                                        <option value='Sorghum' label='Sorghum' >Sorghum</option>
                                                        <option value='Palm Kernel' label='Palm Kernel' >Palm Kernel</option>
                                                        <option value='Cocoa' label='Cocoa' >Cocoa</option>
                                                        <option value='Cashew' label='Cashew' >Cashew</option>

                                                    </Field>
                                                    <p className="text-red-700 text-sm mt-1">
                                                        <ErrorMessage name="commodities" />
                                                    </p>
                                                </div>
                                                <div className='w-full mb-4'>
                                                    <Field
                                                        className={`${errors.trading_range && touched.trading_range && "border-red-700"} rounded-[5px] pr-10 px-3.5 py-2 text-gray-800 w-full border border-[#e5e7eb]`}
                                                        as="select"
                                                        name="trading_range"
                                                        id="trading_range"
                                                    >
                                                        Select Trading Budget Range:

                                                        <option label="Select Trading Budget Range"></option>

                                                        <option value='₦250,000 - ₦500,000' label='₦250,000 - ₦500,000' >₦250,000 - ₦500,000</option>
                                                        <option value='₦500,001 - ₦1,000,000' label='₦500,001 - ₦1,000,000' >₦500,001-₦1,000,000</option>
                                                        <option value='₦1,000,001 - ₦2,000,000,' label='₦1,000,001 - ₦2,000,000,' >₦1,000,001-₦2,000,000,</option>
                                                        <option value='₦2,000,001 - ₦5,000,000,' label='₦2,000,001 - ₦5,000,000,' >₦2,000,001-₦5,000,000,</option>
                                                        <option value='₦5,000,001 - ₦10,000,000+' label='₦5,000,001 - ₦10,000,000+' >₦5,000,001-₦10,000,000+</option>

                                                    </Field>
                                                    <p className="text-red-700 text-sm mt-1">
                                                        <ErrorMessage name="trading_range" />
                                                    </p>
                                                </div>

                                                <div className='w-full mb-4'>
                                                    <Field
                                                        className={`${errors.storage_duration && touched.storage_duration && "border-red-700"} rounded-[5px] pr-10 px-3.5 py-2 text-gray-800 w-full border border-[#e5e7eb]`}
                                                        as="select"
                                                        name="storage_duration"
                                                        id="storage_duration"
                                                    >
                                                        <option label=" Select Storage Duration"></option>

                                                        <option value='4 Months' label='4 Months' >4 Months</option>
                                                        <option value='5 Months' label='5 Months' >5 Months</option>
                                                        <option value='6 Months' label='6 Months' >6 Months</option>

                                                    </Field>
                                                    <p className="text-red-700 text-sm mt-1">
                                                        <ErrorMessage name="storage_duration" />
                                                    </p>
                                                </div>



                                                <div className='w-full mb-4'>
                                                    <Field
                                                        className={`${errors.services && touched.services && "border-red-700"} rounded-[5px] pr-10 px-3.5 py-2 text-gray-800 w-full border border-[#e5e7eb]`}
                                                        as="select"
                                                        name="services"
                                                        id="services"
                                                    >
                                                        <option label="Select service you would like to trade"></option>

                                                        <option value='Commodities Aggregation as a Service ' label='Commodities Aggregation as a Service ' >Commodities Aggregation as a Service </option>
                                                        <option value='Storage as a Service' label='Storage as a Service' >Storage as a Service</option>
                                                        <option value='Commodities Sales as a Service' label='Commodities Sales as a Service' >Commodities Sales as a Service
                                                        </option>


                                                    </Field>
                                                    <p className="text-red-700 text-sm mt-1">
                                                        <ErrorMessage name="services" />
                                                    </p>
                                                </div>



                                                <button className='w-full md:w-[182px]  px-6 py-2.5 bg-[#F58A07] text-white hover:bg-white hover:text-[#F58A07] border-[#F58A07] border-[1px] rounded-3xl font-medium md:font-semibold disabled:bg-gray-500'
                                                    disabled={!(isValid || dirty)}
                                                    type='submit'
                                                >{loading ? <LoadingSpinner /> : 'Sign Up'}</button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>

                        <div className='row-start-1 md:col-start-2 relative'>
                            <img src={image1} className='w-full' />



                        </div>


                    </section>

                </div>
            </div>
            <Footer db={props.db} />
        </div>
    )
}

export default ComboTraderForm

const validation = Yup.object({
    name: Yup.string()
        .required("required"),
    phone: Yup.string()
        .required("required"),
    countries: Yup.string()
        .required("required"),
    address: Yup.string()
        .required("required"),
    commodities: Yup.string()
        .required("required"),
    trading_range: Yup.string()
        .required("required"),
    storage_duration: Yup.string()
        .required("required"),
    phone: Yup.string()
        .required("required"),
    services: Yup.string()
        .required("required"),
    email: Yup.string()
        .required("email required")
        .email("Enter valid email"),
})
