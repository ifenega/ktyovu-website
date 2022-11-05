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
import ScrollToTop from '../Components/ScrollToTop'
import eprocure1 from '../assets/new/eprocure1.png'
import eprocure2 from '../assets/new/eprocure2.png'
import eprocure3 from '../assets/new/eprocure3.png'
import eprocure4 from '../assets/new/eprocure4.png'


const Eprocurement = (props) => {

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
        const interval = setInterval(() => { carouselInfiniteScroll() }, 5000)

        return () => clearInterval(interval)
    })


    return (
        <div>
            <ScrollToTop />
            <Navbar />
            <img src={eprocure1} className='w-full md:rounded-[20px] overflow-hidden flex md:hidden' />
            <div className='px-4 md:px-8 lg:px-24  pt-4 md:pt-16 flex justify-center pb-4 '>

                <div className='flex gap-5 md:gap-5 flex-col  justify-center 2xl:max-w-[1600px]'>
                    <section className=' py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative'>
                        <div className='w-full pl-4 md:pl-0 pr-4 md:pr-0 '>


                            <h1 className='text-[#1D3444] max-w-[560px] font-semibold text-2xl md:text-3xl lg:text-5xl mt-2'> The one-stop platform for getting all your desired agricultural products.</h1>
                            <p className='text-body pt-4 pb-5'>  EProcure enables the sourcing of superior quality agro-products and delivering them to thousands of processors, companies, and exporters of agricultural products without any hassle. It is hitting the “best product purchase” jackpot without any stress at all.</p>

                            <div className='flex items-center md:items-start justify-center md:justify-start'>
                                <button className='bg-[#F58A071A] px-6 py-2.5 bg-[#F58A07] text-white hover:bg-white hover:text-[#F58A07]  rounded-3xl font-medium md:font-semibold' onClick={() => {
                                    navigate('/e-procure/form')
                                }}>Purchase Commodities</button>
                            </div>


                        </div>


                        <div className='row-start-1 md:col-start-2   relative'>

                            <img src={eprocure1} className='w-full md:rounded-[20px] overflow-hidden hidden md:flex' />


                        </div>

                    </section>


                </div>
            </div>


            <section className='grid md:grid-cols-2 md:gap-10 items-center relative bg-[#F58A07] text-white mb-8 lg:mb-24'>
                <img src={eprocure2} className='w-full h-full' />
                <div className='w-full py-14 md:py-auto flex flex-col gap-5 items-center md:items-start px-4 md:px-8 lg:px-24  '>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl text-left'>Sourcing and delivery of agricultural  products made easy with data-driven technology.</h1>
                    <div className='flex items-center md:items-start justify-center md:justify-start'>
                                <button className=' px-6 py-2.5 bg-white text-[#F58A07] hover:bg-[#F58A07] hover:text-white border border-white  rounded-3xl font-medium md:font-semibold' onClick={() => {
                                    navigate('/e-procure/form')
                                }}>Purchase Commodities</button>
                            </div>


                </div>

            </section>

            <div className='px-4 md:px-8 lg:px-24  pt-4 md:pt-16 flex justify-center pb-4 '>

                <div className='flex gap-5 md:gap-5 flex-col  justify-center 2xl:max-w-[1600px]'>


                    <section className='grid md:grid-rows-2 items-center relative justify-center  mb-8 lg:mb-24'>

                        <h3 className=' text-[#F58A07] text-center'>WHY CHOOSE US?</h3>
                    </section>


                    <section className=' py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative'>
                        <div className='row-start-1 md:col-start-1   relative'>

                            <div className='w-[95px] h-[95px] rounded-[20px] bg-[#F58A07] absolute top-[128px] left-[-47.5px] mix-blend-multiply'></div>
                            <img src={eprocure3} className='w-full md:rounded-[20px] overflow-hidden' />

                        </div>

                        <div className='w-full pl-4 md:pl-0 pr-4 md:pr-0 '>

                            <h1 className='text-black max-w-[560px] font-semibold text-2xl md:text-3xl  mt-2'>Commodities at best prices</h1>
                            <p className='text-body pt-4 pb-5'>Get the best agricultural products. Our data-first approach interprets your desired product specifications and helps you purchase your quantity of choice from the best farms around Nigeria.  We save you time and stress.</p>




                        </div>


                    </section>


                    <section className=' py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative'>
                        <div className='row-start-1 md:col-start-2   relative'>

                            <div className='w-[95px] h-[95px] rounded-[20px] bg-[#F58A07] absolute top-[-47.5px] right-[47.5px] mix-blend-multiply'></div>
                            <img src={eprocure4} className='w-full md:rounded-[20px] overflow-hidden' />

                        </div>

                        <div className='w-full pl-4 md:pl-0 pr-4 md:pr-0 '>

                            <h1 className='text-black max-w-[560px] font-semibold text-2xl md:text-3xl  mt-2'>Timely Delivery</h1>
                            <p className='text-body pt-4 pb-5'>We use technology to determine the best vehicle for transporting your agricultural products and we ensure it is delivered to you wherever and whenever you choose. It’s our way to ensure smarter, faster, and more reliable delivery of your farm produce.</p>




                        </div>

                    </section>







                </div>
            </div>
            <Footer db={props.db} />

        </div>
    )
}

export default Eprocurement