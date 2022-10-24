import React, { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Navbar from '../Components/Navbar'
import image1 from '../assets/image1.jpeg'
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from 'react-icons/io'
import Footer from '../Components/Footer'
import vacancy from '../assets/maize_farm.png'
import farm12 from '../assets/farm12.png'
import eprocurement1 from '../assets/eprocurement-image.png'
import eprocurement2 from '../assets/eprom.png'
import { useNavigate } from 'react-router-dom'
import google from '../assets/googlePlay.svg'
import yield1 from '../assets/yield1.png'
import yield2 from '../assets/yield2.png'
import yield3 from '../assets/yield3.png'
import yield4 from '../assets/yield4.png'
import ScrollToTop from '../Components/ScrollToTop'


const YieldMax = (props) => {

    //e-procurement
    const navigate = useNavigate()
    const [step, setStep] = useState(1)

    const carouselInfiniteScroll = () => {
        if (step !== 4) {
            setStep(step => step + 1)
        } else {
            setStep(1)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => { carouselInfiniteScroll() }, 10000)

        console.log(step)
        return () => clearInterval(interval)
    })


    return (
        <div>
            <Navbar />
            <ScrollToTop />
            <img src={eprocurement2} className='w-full md:rounded-[20px] overflow-hidden flex md:hidden' />
            <div className='px-4 md:px-8 lg:px-24  pt-4 md:pt-16 flex justify-center pb-4 '>

                <div className='flex gap-5 md:gap-5 flex-col  justify-center 2xl:max-w-[1600px]'>
                    <section className=' py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative'>
                        <div className='w-full pl-4 md:pl-0 pr-4 md:pr-0 '>


                            <h1 className='text-black max-w-[560px] font-semibold text-2xl md:text-3xl lg:text-5xl mt-2'> The one-stop platform for getting all your desired agricultural products.</h1>
                            <p className='text-body pt-4 pb-5'>Yieldmax helps thousands of African smallholder farmers manage their farms better and increase their yield with ease by giving them data-backed agronomy advisory and operational insight.</p>

                            <div className='flex items-center md:items-start justify-center md:justify-start'>
                                <a href='https://play.google.com/store/apps/details?id=kitovu.com.ng' target='_blank'><img src={google} className='w-[150px]' /></a> 
                            </div>


                        </div>


                        <div className='row-start-1 md:col-start-2   relative'>

                            <img src={eprocurement1} className='w-full md:rounded-[20px] overflow-hidden hidden md:flex' />


                        </div>

                    </section>


                </div>
            </div>


            <section className='grid md:grid-cols-2 md:gap-10 items-center relative bg-[#F58A07] text-white mb-8 lg:mb-24'>
                <img src={vacancy} className='w-full h-full' />
                <div className='w-full py-14 md:py-auto flex flex-col gap-5 items-center md:items-start px-4 md:px-8 lg:px-24  '>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl text-left'>Yieldmax your  farm in your pocket.</h1>
                    <a href='https://play.google.com/store/apps/details?id=kitovu.com.ng' target='_blank'><img src={google} className='w-[150px]' /></a> 
                </div>

            </section>

            <div className='px-4 md:px-8 lg:px-24  pt-4 md:pt-16 flex justify-center pb-4 '>

                <div className='flex gap-5 md:gap-5 flex-col  justify-center 2xl:max-w-[1600px]'>

                    <section className=' py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative'>
                        <div className='row-start-1 md:col-start-1   relative'>

                            <div className='w-[95px] h-[95px] rounded-[20px] bg-[#F58A07] absolute top-[128px] left-[-47.5px] mix-blend-multiply'></div>
                            <img src={yield1} className='w-full md:rounded-[20px] overflow-hidden' />

                        </div>

                        <div className='w-full pl-4 md:pl-0 pr-4 md:pr-0 '>

                            <h1 className='text-black max-w-[560px] font-semibold text-2xl md:text-3xl  mt-2'>For Farmers</h1>
                            <p className='text-body pt-4 pb-5'>Get accurate, data-backed advice that will help you achieve maximum yields every season. Utilize our insight on crop health, fertilizer usage, and climate forecast to make smart farming decisions at all times. It is your personal farm assistant on the go.</p>




                        </div>


                    </section>


                    <section className=' py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative'>
                        <div className='row-start-1 md:col-start-2   relative'>

                            <div className='w-[95px] h-[95px] rounded-[20px] bg-[#F58A07] absolute top-[-47.5px] right-[47.5px] mix-blend-multiply'></div>
                            <img src={yield2} className='w-full md:rounded-[20px] overflow-hidden' />

                        </div>

                        <div className='w-full pl-4 md:pl-0 pr-4 md:pr-0 '>

                            <h1 className='text-black max-w-[560px] font-semibold text-2xl md:text-3xl  mt-2'>For Agribusinesses and Processors</h1>
                            <p className='text-body pt-4 pb-5'>YieldMax is designed to provide personalized dashboards that present farm data and farmer’s records for easy access and appraisal. It is your tool to evaluate, estimate and process all farm data.</p>




                        </div>

                    </section>

                    <section className=' py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative'>
                        <div className='row-start-1 md:col-start-1   relative'>

                            <div className='w-[95px] h-[95px] rounded-[20px] bg-[#F58A07] absolute top-[128px] left-[-47.5px] mix-blend-multiply'></div>
                            <img src={yield3} className='w-full md:rounded-[20px] overflow-hidden' />

                        </div>

                        <div className='w-full pl-4 md:pl-0 pr-4 md:pr-0 '>

                            <h1 className='text-black max-w-[560px] font-semibold text-2xl md:text-3xl  mt-2'>Financial Institutions</h1>
                            <p className='text-body pt-4 pb-5'>Access farm data for evaluations and enumeration. Track farmers’ records and farm-level operations via a digitalized analytic platform.</p>


                        </div>


                    </section>


                    <section className=' py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative'>
                        <div className='row-start-1 md:col-start-2   relative'>

                            <div className='w-[95px] h-[95px] rounded-[20px] bg-[#F58A07] absolute top-[-47.5px] right-[47.5px] mix-blend-multiply'></div>
                            <img src={yield4} className='w-full md:rounded-[20px] overflow-hidden' />

                        </div>

                        <div className='w-full pl-4 md:pl-0 pr-4 md:pr-0 '>

                            <h1 className='text-black max-w-[560px] font-semibold text-2xl md:text-3xl  mt-2'>Input Manufacturer</h1>
                            <p className='text-body pt-4 pb-5'>Discover and get access to post-verified quality products.  </p>




                        </div>

                    </section>







                </div>
            </div>
            <Footer db={props.db} />

        </div>
    )
}

export default YieldMax