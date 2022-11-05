import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import headerImg from '../assets/header-img.jpeg'
import business from '../assets/business.jpeg'
import digitalization from '../assets/digitalization.jpeg'
import risk from '../assets/risk.jpeg'
import image1 from '../assets/image1.jpeg'
import imag1Adlib from '../assets/imag1-adlib.svg'
import image2 from '../assets/image2.jpeg'
import vacancy from '../assets/job-vacancy.jpeg'
import { BsArrowRight } from 'react-icons/bs';
import Footer from '../Components/Footer'
import about1 from '../assets/new/about1.png'
import farm2 from '../assets/farm2.png'
import farm3 from '../assets/farm3.png'
import farm4 from '../assets/farm4.png'
import farm from '../assets/farm111.png'
import farm5 from '../assets/farm5.png'
import support1 from '../assets/support1.svg'
import support2 from '../assets/support2.svg'
import support3 from '../assets/support3.svg'
import icon1 from '../assets/icon1.svg'
import slack from '../assets/slack-icon.svg'
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.svg'
import find1 from '../assets/find1.png'
import find2 from '../assets/find2.png'
import find3 from '../assets/find3.png'
import bg1 from '../assets/bg1.png'
import { useNavigate } from 'react-router-dom'
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from 'react-icons/io'
import ScrollToTop from '../Components/ScrollToTop'




const AboutUs = (props) => {

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
            <Navbar />
            <ScrollToTop />
            <div className='mt-[56px] md:mt-20'>

                <section className='px-4 md:px-8 lg:px-24  pt-4 md:pt-16 pb-6 bg-[#DCEAF5] flex justify-center '>

                    <div className='flex gap-5 md:gap-10 flex-col items-end justify-center 2xl:max-w-[1600px] mb-20'>

                        <div className='flex mb-10 md:mb-12 justify-between items-center w-full'>
                            <h1 className='text-[#1D3444] max-w-[560px] font-semibold text-xl md:text-2xl lg:text-4xl mt-2 hidden md:inline-block w-fit'>About us</h1>
                            <div><img src={about1} /></div>
                        </div>

                        <div>
                            <p className='text-base md:text-lg font-normal text-[#5B5B5B]'>

                                We are a bunch of passionate young people who looked at the most wicked problems that make it impossible for Africa to feed itself, and were crazy enough to think they could solve it. Smallholder farmers who typically grow 2–4-hectare farms realize low yields compared to global averages. Post-harvest, 40% of yields are lost due to poor storage, and lack of access to markets. This impacts farm-level productivity and farmer incomes.
                                <br />
                                <br />

                                These problems arise because farmers rely on guesswork, instinct, and traditional knowledge to make operational decisions, thereby planting at the wrong time, using the wrong inputs i.e., seedlings, fertilizer, and herbicides, and applying these at the wrong time. Their limited incomes which also lower their purchasing power make it impossible for these farmers to afford high-quality inputs, or access effective storage solutions. And these are the problems that we solve.
                                <br />
                                <br />
                                Kitovu Technology Company solves these problems by building climate-smart farm and post-harvest infrastructure that enables smallholder farmers in distant pocket locations to access personalized agronomic advisory, storage, and market access services. We provide African smallholder farmers with the data to make smart decisions about what to grow that would sell and how to grow them optimally, so as to enable them to make more money off their farms through yield improvement and reduced post-harvest losses. Kitovu Technology Company is helping to build a resilient food system for African Agriculture that enables smallholder to improve their productivity and incomes, taking on the audacious goal of providing the infrastructure African smallholder farmers would require to produce the 60% more food required to feed 9.7 billion people by 2050. We are transforming African agriculture, one smallholder farmer at a time.
                            </p>
                        </div>
                    </div>


                </section>






            </div >
            <Footer db={props.db} />


        </div >
    )
}

export default AboutUs