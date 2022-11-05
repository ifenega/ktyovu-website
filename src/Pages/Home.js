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
import farm1 from '../assets/farm1.png'
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
import landing1 from '../assets/new/landing1.png';
import landing2 from '../assets/new/landing2.png';
import landing3 from '../assets/new/landing3.png';
import landing4 from '../assets/new/landing4.png';
import landing5 from '../assets/new/landing5.png';



const Home = (props) => {

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
        <img src={landing1} aria-label='farmer in a corn field' className='flex md:hidden' />
        <section className='px-4 md:px-8 lg:px-24  pt-4 md:pt-16 pb-6 bg-[#DCEAF5] flex justify-center '>

          <div className='flex gap-5 md:gap-10 flex-col md:flex-row items-end justify-center 2xl:max-w-[1600px]'>

            <div className='w-full pb-4 md:pb-16 text-center md:text-left'>
              <h1 className='text-header max-w-[560px] font-semibold text-3xl md:text-[45px] lg:text-6xl'>Access Unlimited Opportunities for Your Farm.</h1>
              <p className='text-body max-w-[560px] mt-4 mb-8 text-base md:text-lg'>Kitovu’s mission is to help African Farmers escape poverty by building and deploying climate-smart farming and post-harvest infrastructure to enable them to maximize their yield.</p>
              <div className=' '>
                {/* <button className='w-full md:w-[182px] bg-[#F58A071A] px-6 py-2.5 bg-[#F58A07] text-white hover:bg-white hover:text-[#F58A07]  rounded-3xl font-medium md:font-semibold'>Our Services</button> */}


              </div>

              {/* <div className='flex flex-col gap-4 mt-6'>
                <h1 className='text-gray-500 font-light '>Featured By</h1>
                <div className='flex flex-row flex-wrap gap-3 md:gap-6 justify-center md:justify-start items-center'>
                  <img src={icon1} alt="disrupt africa icon" />
                  <img src={slack} alt="techpoint africa icon" />
                  <img src={icon3} alt="innovation village icon" />
                  <img src={icon4} alt="business day icon" />
                </div>
              </div> */}


            </div>
            <div className='hidden md:inline-flex w-full relative h-fit'>
              <img src={landing1} />

              {/* <div className='absolute bottom-0 left-[30px] bg-[#F58A07] w-[25%] h-[70%] rounded-lg opacity-[75%] mix-blend-multiply'></div> */}

            </div>
          </div>


        </section>

        <div className='flex justify-center'>
          <div className='2xl:max-w-[1600px]'>
            <section className='px-4 md:px-8 lg:px-24 pt-4 md:pt-16 ' >

              <div className='text-'>
                <h1 className='text-header  font-semibold text-2xl md:text-3xl lg:text-5xl'>Our Products </h1>
                <p className='text-body max-w-[700px] mt-4 mb-8 text-base md:text-lg'>We have different packages for smallholder farmers that will help them optimize their production decisions, increase their yield and maximize their profits. Processors and Exporters can source their products swiftly and at ease. We also got individuals who wants to deal in agricultural products covered. </p>
              </div>

              {/* <div className='flex flex-col md:flex-row md:overflow-scroll w-full gap-10'>
                <div className=' rounded-[20px] w-full md:max-w-[399px] '>
                  <img src={business} />

                  <div className='py-5 pr-2'>
                    <h1 className='text-[#0D1317] text-lg md:text-xl font-medium'>Business strategy</h1>
                    <p className='text-body pt-4 pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                    <button className='text-[#F58A07] flex  items-center  gap-2'><h1>Learn More</h1> <BsArrowRight className='text-[#F58A07]' /> </button>
                  </div>
                </div>
                <div className=' rounded-[20px] w-full md:max-w-[399px] '>
                  <img src={digitalization} />

                  <div className='py-5 pr-2'>
                    <h1 className='text-[#0D1317] text-lg md:text-xl font-medium'>Digitalization</h1>
                    <p className='text-body pt-4 pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                    <button className='text-[#F58A07] flex  items-center  gap-2'><h1>Learn More</h1> <BsArrowRight className='text-[#F58A07]' /> </button>
                  </div>
                </div>
                <div className=' rounded-[20px] w-full md:max-w-[399px] '>
                  <img src={risk} />

                  <div className='py-5 pr-2'>
                    <h1 className='text-[#0D1317] text-lg md:text-xl font-medium'>Risk assesment</h1>
                    <p className='text-body pt-4 pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                    <button className='text-[#F58A07] flex  items-center  gap-2'><h1>Learn More</h1> <BsArrowRight className='text-[#F58A07]' /> </button>
                  </div>
                </div>
              </div> */}

            </section>

            <section className=' py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative bg-white 2xl:rounded-[20px] mb-8 lg:mb-24 px-4 md:px-8 lg:px-0 '>
              <div className='w-full pr-4 md:pr-8 lg:pr-24 pl-4 md:pl-0'>
                <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl my-5 md:my-0 md:mb-20 w-fit border-[#F58A07] border relative md:absolute md:top-16 md:right-8 lg:right-24'>YieldMax</div>

                <h1 className='text-header max-w-[560px] font-semibold text-2xl md:text-3xl lg:text-5xl mt-10'>Go digital and increase your yield by taking advantage of our data-based  platform.</h1>
                <p className='text-body pt-4 pb-5'>Receive insights regarding your farm’s health, beneficial tips, and many more personalised agronomic advisory.</p>

                <button className='text-[#F58A07] flex  items-center  gap-2 mt-5' onClick={() => {

                  navigate('/yield-max')
                }}><h1>Learn more</h1> <BsArrowRight className='text-[#F58A07]' /> </button>

              </div>


              <div className='row-start-1 md:col-start-1 ml-0 md:ml-8 lg:ml-24 md:rounded-[20px] overflow-hidden'>
                <img src={landing5} className='w-full' />

              </div>

            </section>

            <section className=' py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative  2xl:rounded-[20px] px-4 md:px-8 lg:px-0 bg-[#FE8D3B1A] '>
              <div className='w-full pl-4 md:pl-8 lg:pl-24 pr-4 md:pr-0'>
                <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl my-5 md:my-0 md:mb-20 w-fit border-[#F58A07] border relative md:absolute md:top-16 '>StorageX</div>

                <h1 className='text-header max-w-[560px] font-semibold text-2xl md:text-3xl lg:text-5xl mt-12'>Avoid losses and cut costs on the storage of your agricultural products.</h1>
                <p className='text-body pt-4 pb-5'>Take advantage of our high-tech storage facilities nationwide to extend the shelf life of your product and convert them to collateral assets to get loans to expand your farming business.</p>

                <a className='text-[#F58A07] flex  items-center  gap-2 mt-5' href='https://www.storagex.com.ng/' target='_blank'><h1>Learn more</h1> <BsArrowRight className='text-[#F58A07]' /> </a>

              </div>


              <div className='row-start-1 md:col-start-2 mr-0 md:mr-8 lg:mr-24 md:rounded-[20px] overflow-hidden'>
                <img src={landing4} className='w-full' />

              </div>

            </section>

            <section className=' py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative  2xl:rounded-[20px] px-4 md:px-8 lg:px-0 '>
              <div className='w-full pr-4 md:pr-8 lg:pr-24 pl-4 md:pl-0'>
                <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl my-5 md:my-0 md:mb-20 w-fit border-[#F58A07] border relative md:absolute md:top-16 md:right-8 lg:right-24'>eProcure</div>

                <h1 className='text-header max-w-[560px] font-semibold text-2xl md:text-3xl lg:text-5xl mt-10'>You never have to worry about stressing to source for agricultural produce.</h1>
                <p className='text-body pt-4 pb-5'>You never have to worry about stressing to source for agricultural produce, looking for reliable logistics, or getting disappointed by suppliers ever again.   With our advanced product quality ranking algorithm, we help take the edge off. We will source the products for you, and deliver them to you wherever and whenever you want them.</p>

                <button className='text-[#F58A07] flex  items-center  gap-2 mt-5' onClick={() => {
                  navigate('/e-procure')
                }}><h1>Learn more</h1> <BsArrowRight className='text-[#F58A07]' /> </button>

              </div>


              <div className='row-start-1 md:col-start-1 ml-0 md:ml-8 lg:ml-24 md:rounded-[20px] overflow-hidden'>
                <img src={landing3} className='w-full' />

              </div>

            </section>

            <section className=' py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative px-4 md:px-8 lg:px-0  bg-[#EDF7FF]'>
              <div className='w-full pl-4 md:pl-8 lg:pl-24 pr-4 md:pr-0 '>
                <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl my-5 md:my-0 md:mb-20 w-fit border-[#F58A07] border relative md:absolute md:top-16 '>ComboTrader</div>

                <h1 className='text-header max-w-[560px] font-semibold text-2xl md:text-3xl lg:text-5xl mt-2'>Trade agricultural products on your own terms and conditions. </h1>
                <p className='text-body pt-4 pb-5'>Connect with the right suppliers and earn an income by buying and selling farm produce. We will store your purchase properly for you if needed, and sell it whenever you choose.</p>

                <button className='text-[#F58A07] flex  items-center  gap-2 mt-5' onClick={() => {
                  navigate('/combo-trader')
                }}><h1>Learn more</h1> <BsArrowRight className='text-[#F58A07]' /> </button>

              </div>

              <div className='row-start-1 md:col-start-2 mr-0 md:mr-8 lg:mr-24  relative'>
                {/* <img src={imag1Adlib} className='absolute hidden md:flex left-[-57px] -top-[58px] z-[10px]' /> */}
                {/* <img src={farm2}  /> */}
                <div className='w-full md:rounded-[20px] overflow-hidden'>
                  <img src={landing2} />
                </div>

              </div>

            </section>







            <section className='grid md:grid-cols-2 md:gap-10 items-center relative bg-[#F58A07] text-white  '>
              <img src={farm5} className='w-full' />
              <div className='w-full py-14 md:py-auto flex flex-col gap-5 items-center md:items-start px-4 md:px-8 lg:px-24  '>
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-left'>Supported By</h1>
                <div className='flex flex-row flex-wrap gap-3 md:gap-6'>
                  <img src={support1} alt="make it in africa icon" />
                  <img src={support2} alt="leap africa icon" />
                  <img src={support3} alt="seedstars icon" />
                </div>

              </div>

            </section>



            {/* <section className=' pb-4 md:py-16 flex justify-center items-center relative  '>
              <div className='flex flex-col md:flex-row md:overflow-scroll w-full gap-10 justify-center'>
                <div className=' rounded-[20px] w-full md:max-w-[399px] '>
                  <img src={business} />

                  <div className='py-5 pr-2'>
                    <h1 className='text-[#0D1317] text-lg md:text-xl font-medium'>For Processors</h1>
                    <p className='text-body pt-4 pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                    <button className='text-[#F58A07] flex  items-center  gap-2'><h1>Learn More</h1> <BsArrowRight className='text-[#F58A07]' /> </button>
                  </div>
                </div>
                <div className=' rounded-[20px] w-full md:max-w-[399px] '>
                  <img src={digitalization} />

                  <div className='py-5 pr-2'>
                    <h1 className='text-[#0D1317] text-lg md:text-xl font-medium'>For Exporters</h1>
                    <p className='text-body pt-4 pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                    <button className='text-[#F58A07] flex  items-center  gap-2'><h1>Learn More</h1> <BsArrowRight className='text-[#F58A07]' /> </button>
                  </div>
                </div>
                <div className=' rounded-[20px] w-full md:max-w-[399px] '>
                  <img src={risk} />

                  <div className='py-5 pr-2'>
                    <h1 className='text-[#0D1317] text-lg md:text-xl font-medium'>For Farmers</h1>
                    <p className='text-body pt-4 pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                    <button className='text-[#F58A07] flex  items-center  gap-2'><h1>Learn More</h1> <BsArrowRight className='text-[#F58A07]' /> </button>
                  </div>
                </div>
              </div>
            </section> */}



            <section className=' hidden md:block py-4 md:py-16 px-4 md:px-8 lg:px-24 pb-10  '>

              <h1 className='text-header font-semibold text-2xl md:text-3xl  mt-2 mb-5'>Find out which product suit you best</h1>

              <div className=' flex items-center gap-10 mb-10 '>
                <div className={`${step === 1 && " border-[10px] border-[#F58A07] bg-[#F58A07] rounded-[30px]  cursor-pointer scale-110"}`} onClick={() => setStep(1)}>
                  <img src={find1} />
                  <div className='text-center py-3'>
                    <h1 className={`text-center ${step === 1 ? " text-gray-50  " : "text-gray-600 "} `} >Agribusinesses and Processors</h1>
                  </div>
                </div>
                <div className={`${step === 2 && " border-[10px] border-[#F58A07] bg-[#F58A07] rounded-[30px]  cursor-pointer scale-110"}`} onClick={() => setStep(2)}>
                  <img src={find2} />
                  <div className='text-center py-3'>
                    <h1 className={`text-center ${step === 2 ? " text-gray-50  " : "text-gray-600 "} `} >Financial Institutions</h1>
                    <h1 className='text-center text-white'></h1>
                  </div>
                </div>
                <div className={`${step === 3 && " border-[10px] border-[#F58A07] bg-[#F58A07] rounded-[30px]  cursor-pointer scale-110"}`} onClick={() => setStep(3)}>
                  <img src={find3} />
                  <div className='text-center py-3'>
                    <h1 className={`text-center ${step === 3 ? " text-gray-50  " : "text-gray-600 "} `} >For Farmers</h1>
                  </div>
                </div>

                <div className={`${step === 4 && " border-[10px] border-[#F58A07] bg-[#F58A07] rounded-[30px]  cursor-pointer scale-110"}`} onClick={() => setStep(4)}>
                  <img src={farm} />
                  <div className='text-center py-3'>
                    <h1 className={`text-center ${step === 4 ? " text-gray-50  " : "text-gray-600 "} `} >Input Manufacturers</h1>
                  </div>
                </div>

              </div>
              <div className='grid grid-cols-[auto_auto_auto] gap-4 items-center mt-4'>
                <div className='flex items-center justify-start'>
                  <IoMdArrowDropleftCircle className='text-gray-300 hover:text-[#F58A07] w-10 h-10' onClick={() => {
                    if (step !== 1) {
                      setStep(step - 1)
                    } else {
                      setStep(4)
                    }
                  }} />
                </div>
                <div className='w-full'>
                  {step === 1 && <div className=''>
                    <div className='flex flex-col gap-2 '>

                      <ul className="space-y-1  list-inside text-gray-800 mb-2">

                        <li className="flex flex-col gap-3 ">
                          <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl w-fit border-[#F58A07] border relative '>YieldMax</div>

                          <div className='flex'>
                            <svg className="w-4 h-4 mr-1.5 text-[#F58A07] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <p className='w-full max-w-[900px]'>Manage and digitize multiple farms and farmers; track farm level operations and crop health. Carry out KYC documentations for farmers you support and get farmers to produce according to your desired specifications. Manage farmer outgrower schemes and clearly identify a grouped dataset of farmers you source from.</p>
                          </div>


                        </li>
                      </ul>

                      <ul className="space-y-1  list-inside text-gray-800 mb-2">

                        <li className="flex flex-col gap-3 ">
                          <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl w-fit border-[#F58A07] border relative '>eProcure</div>

                          <div className='flex'>
                            <svg className="w-4 h-4 mr-1.5 text-[#F58A07] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <p className='w-full max-w-[900px]'>Buy quality and traceable farm commodities at affordable prices in record time.</p>
                          </div>


                        </li>
                      </ul>

                    </div>


                  </div>}

                  {step === 2 && <div className=''>
                    {/* Financial Institutions */}
                    <div className='flex flex-col gap-2 '>

                      <ul className="space-y-1  list-inside text-gray-800 mb-2">

                        <li className="flex flex-col gap-3 ">
                          <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl w-fit border-[#F58A07] border relative '>YieldMax</div>

                          <div className='flex'>
                            <svg className="w-4 h-4 mr-1.5 text-[#F58A07] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <p className='w-full max-w-[900px]'>Manage and digitize multiple farms and farmers; track farm level operations and crop health. Carry out KYC documentations for farmers you support and get farmers to produce according to your desired specifications. Manage farmer outgrower schemes and clearly identify a grouped dataset of farmers you source from.</p>
                          </div>


                        </li>
                      </ul>

                      <ul className="space-y-1  list-inside text-gray-800 mb-2">

                        <li className="flex flex-col gap-3 ">
                          <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl w-fit border-[#F58A07] border relative '>StorageX</div>

                          <div className='flex'>
                            <svg className="w-4 h-4 mr-1.5 text-[#F58A07] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <p className='w-full max-w-[900px]'>Access new clients and low risk investments.</p>
                          </div>


                        </li>
                      </ul>


                    </div>


                  </div>}

                  {step === 3 && <div className=''>
                    <div className='flex flex-col gap-2 '>


                      
                      <ul className="space-y-1  list-inside text-gray-800 mb-2">

                        <li className="flex flex-col gap-3 ">
                          <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl w-fit border-[#F58A07] border relative '>YieldMax</div>

                          <div className='flex'>
                            <svg className="w-4 h-4 mr-1.5 text-[#F58A07] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <p className='w-full max-w-[900px]'>Sell their goods at good price to higher value markets.</p>
                          </div>


                        </li>
                      </ul>

                      <ul className="space-y-1  list-inside text-gray-800 mb-2">

                        <li className="flex flex-col gap-3 ">
                          <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl w-fit border-[#F58A07] border relative '>eProcure</div>

                          <div className='flex'>
                            <svg className="w-4 h-4 mr-1.5 text-[#F58A07] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <p className='w-full max-w-[900px]'>Preserve their goods by storing it, access high value markets and finance to meet their short-term needs.</p>
                          </div>


                        </li>
                      </ul>

                      <ul className="space-y-1  list-inside text-gray-800 mb-2">

                        <li className="flex flex-col gap-3 ">
                          <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl w-fit border-[#F58A07] border relative '>StorageX</div>

                          <div className='flex'>
                            <svg className="w-4 h-4 mr-1.5 text-[#F58A07] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <p className='w-full max-w-[900px]'>Turn your farm produce into a collateral to receive financing for your pressing needs; preserve your goods in storage to access higher value markets.</p>
                          </div>


                        </li>
                      </ul>

                    </div>


                  </div>}

                  {step === 4 && <div className=''>
                    <div className='flex flex-col gap-2 '>


                      <ul className="space-y-1  list-inside text-gray-800 mb-2">

                        <li className="flex flex-col gap-3 ">
                          <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl w-fit border-[#F58A07] border relative '>YieldMax</div>

                          <div className='flex'>
                            <svg className="w-4 h-4 mr-1.5 text-[#F58A07] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <p className='w-full max-w-[900px]'>Reach verified collections of smallholder farmers with your inputs at the click of a button. Make smallholder farmers love your product by regularly disseminating information on Good Agriculture practice as touching their passports.</p>
                          </div>


                        </li>
                      </ul>
                      {/* <ul className="space-y-1  list-inside text-gray-800 mb-2">

                        <li className="flex flex-col gap-3 ">
                          <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl w-fit border-[#F58A07] border relative mb-2'>eProcure</div>

                          <div className='flex'>
                            <svg className="w-4 h-4 mr-1.5 text-[#F58A07] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <p className='w-full max-w-[900px]'>Sell their goods at good price to higher value markets.</p>
                          </div>


                        </li>
                      </ul>
                      <ul className="space-y-1  list-inside text-gray-800 mb-2">

                        <li className="flex flex-col gap-3 ">
                          <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl w-fit border-[#F58A07] border relative '>StorageX</div>

                          <div className='flex'>
                            <svg className="w-4 h-4 mr-1.5 text-[#F58A07] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <p className='w-full max-w-[900px]'>Access to low-risk investment, access to new clients.</p>
                          </div>
                        </li>
                      </ul>


                      <ul className="space-y-1  list-inside text-gray-800 mb-2">

                        <li className="flex flex-col gap-3 ">
                          <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl w-fit border-[#F58A07] border relative '>ComboTrader</div>

                          <div className='flex'>
                            <svg className="w-4 h-4 mr-1.5 text-[#F58A07] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <p className='w-full max-w-[900px]'>Sell their goods at good price to higher value markets.</p>
                          </div>


                        </li>
                      </ul> */}

                    </div>


                  </div>}





                </div>
                <div className='flex items-center justify-end'>
                  <IoMdArrowDroprightCircle className='text-gray-300 hover:text-[#F58A07] w-10 h-10' onClick={() => {

                    if (step !== 4) {
                      setStep(step + 1)
                    } else {
                      setStep(1)
                    }
                  }} />
                </div>
              </div>
            </section>

            <section className=' py-4 md:py-16 px-4 md:px-8 lg:px-24 flex flex-col md:hidden pb-10 '>
              <h1 className='text-header font-semibold text-2xl md:text-3xl  mt-2 mb-5'>Find out which product suit you best</h1>

              <div className='grid grid-cols-[1fr_auto_1fr] gap-4 items-center'>
                <div>
                  <IoMdArrowDropleftCircle className='text-gray-300 hover:text-[#F58A07] w-8 h-8' onClick={() => {
                    if (step !== 1) {
                      setStep(step - 1)
                    } else {
                      step(4)
                    }
                  }} />
                </div>
                <div>
                  {step === 1 && <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-4 '>
                      <img src={find1} />

                      <div className='flex flex-col gap-2 '>
                        <h2 className=" text-lg font-semibold text-gray-900 ">Agribusinesses and processors</h2>
                        <ul className="space-y-1  list-inside text-gray-800 mb-2">

                          <li className="flex flex-col gap-3 ">
                            <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl w-fit border-[#F58A07] border relative '>YieldMax</div>

                            <div className='flex'>
                              <svg className="w-4 h-4 mr-1.5 text-[#F58A07] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                              <p className='w-full max-w-[900px]'>Manage and digitize multiple farms and farmers; track farm level operations and crop health. Carry out KYC documentations for farmers you support and get farmers to produce according to your desired specifications. Manage farmer outgrower schemes and clearly identify a grouped dataset of farmers you source from.</p>
                            </div>


                          </li>
                        </ul>

                        <ul className="space-y-1  list-inside text-gray-800 mb-2">

                          <li className="flex flex-col gap-3 ">
                            <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl w-fit border-[#F58A07] border relative '>eProcure</div>

                            <div className='flex'>
                              <svg className="w-4 h-4 mr-1.5 text-[#F58A07] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                              <p className='w-full max-w-[900px]'>Buy quality and traceable farm commodities at affordable prices in record time.</p>
                            </div>


                          </li>
                        </ul>


                      </div>
                    </div>


                  </div>}

                  {step === 2 && <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-4 '>
                      <img src={find2} />

                      <div className='flex flex-col gap-2 '>
                        <h2 className=" text-lg font-semibold text-gray-900 ">Financial Institutions</h2>
                        <ul className="space-y-1  list-inside text-gray-800 mb-2">

                          <li className="flex flex-col gap-3 ">
                            <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl w-fit border-[#F58A07] border relative '>YieldMax</div>

                            <div className='flex'>
                              <svg className="w-4 h-4 mr-1.5 text-[#F58A07] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                              <p className='w-full max-w-[900px]'>Manage and digitize multiple farms and farmers; track farm level operations and crop health. Carry out KYC documentations for farmers you support and get farmers to produce according to your desired specifications. Manage farmer outgrower schemes and clearly identify a grouped dataset of farmers you source from.</p>
                            </div>


                          </li>
                        </ul>

                        <ul className="space-y-1  list-inside text-gray-800 mb-2">

                          <li className="flex flex-col gap-3 ">
                            <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl w-fit border-[#F58A07] border relative '>StorageX</div>

                            <div className='flex'>
                              <svg className="w-4 h-4 mr-1.5 text-[#F58A07] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                              <p className='w-full max-w-[900px]'>Access new clients and low risk investments.</p>
                            </div>


                          </li>
                        </ul>


                      </div>
                    </div>


                  </div>}


                  {step === 3 && <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-4 '>
                      <img src={find3} />

                      <div className='flex flex-col gap-2 '>
                        <h2 className=" text-lg font-semibold text-gray-900 ">For Farmers</h2>


                        <ul className="space-y-1  list-inside text-gray-800 mb-2">

                          <li className="flex flex-col gap-3 ">
                            <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl w-fit border-[#F58A07] border relative '>YieldMax</div>

                            <div className='flex'>
                              <svg className="w-4 h-4 mr-1.5 text-[#F58A07] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                              <p className='w-full max-w-[900px]'>Sell their goods at good price to higher value markets.</p>
                            </div>


                          </li>
                        </ul>

                        <ul className="space-y-1  list-inside text-gray-800 mb-2">

                          <li className="flex flex-col gap-3 ">
                            <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl w-fit border-[#F58A07] border relative '>eProcure</div>

                            <div className='flex'>
                              <svg className="w-4 h-4 mr-1.5 text-[#F58A07] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                              <p className='w-full max-w-[900px]'>Preserve their goods by storing it, access high value markets and finance to meet their short-term needs.</p>
                            </div>


                          </li>
                        </ul>

                        <ul className="space-y-1  list-inside text-gray-800 mb-2">

                          <li className="flex flex-col gap-3 ">
                            <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl w-fit border-[#F58A07] border relative '>StorageX</div>

                            <div className='flex'>
                              <svg className="w-4 h-4 mr-1.5 text-[#F58A07] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                              <p className='w-full max-w-[900px]'>Turn your farm produce into a collateral to receive financing for your pressing needs; preserve your goods in storage to access higher value markets.</p>
                            </div>


                          </li>
                        </ul>

                      </div>
                    </div>

                  </div>}
                  {step === 4 && <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-4 '>
                      <img src={farm} />

                      <div className='flex flex-col gap-2 '>

                        <h2 className=" text-lg font-semibold text-gray-900 ">Input Manufacturers</h2>
                        <ul className="space-y-1  list-inside text-gray-800 mb-2">

                          <li className="flex flex-col gap-3 ">
                            <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl w-fit border-[#F58A07] border relative '>YieldMax</div>

                            <div className='flex'>
                              <svg className="w-4 h-4 mr-1.5 text-[#F58A07] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                              <p className='w-full max-w-[900px]'>Reach verified collections of smallholder farmers with your inputs at the click of a button. Make smallholder farmers love your product by regularly disseminating information on Good Agriculture practice as touching their passports.</p>
                            </div>


                          </li>
                        </ul>
                        {/* <ul className="space-y-1  list-inside text-gray-800 mb-2">

                          <li className="flex flex-col gap-3 ">
                            <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl w-fit border-[#F58A07] border relative '>eProcure</div>

                            <div className='flex'>
                              <svg className="w-4 h-4 mr-1.5 text-[#F58A07] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                              <p className='w-full max-w-[900px]'>Sell their goods at good price to higher value markets.</p>
                            </div>


                          </li>
                        </ul>
                        <ul className="space-y-1  list-inside text-gray-800 mb-2">

                          <li className="flex flex-col gap-3 ">
                            <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl w-fit border-[#F58A07] border relative '>StorageX</div>

                            <div className='flex'>
                              <svg className="w-4 h-4 mr-1.5 text-[#F58A07] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                              <p className='w-full max-w-[900px]'>Access to low-risk investment, access to new clients.</p>
                            </div>
                          </li>
                        </ul>


                        <ul className="space-y-1  list-inside text-gray-800 mb-2">

                          <li className="flex flex-col gap-3 ">
                            <div className='text-[#F58A07] text-sm leading-3 py-2 px-3.5 bg-white rounded-3xl w-fit border-[#F58A07] border relative '>ComboTrader</div>

                            <div className='flex'>
                              <svg className="w-4 h-4 mr-1.5 text-[#F58A07] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                              <p className='w-full max-w-[900px]'>Sell their goods at good price to higher value markets.</p>
                            </div>


                          </li>
                        </ul> */}

                      </div>
                    </div>

                  </div>}



                </div>
                <div>
                  <IoMdArrowDroprightCircle className='text-gray-300 hover:text-[#F58A07] w-8 h-8' onClick={() => {

                    if (step !== 4) {
                      setStep(step + 1)
                    } else {
                      step(1)
                    }
                  }} />
                </div>
              </div>
            </section>



            {/* <section className='grid grid-cols-1 md:grid-cols-2 md:gap-14 items-center relative  mb-8 lg:mb-24'>
              <div className='flex flex-col gap-6 w-full  pt-4 px-4 md:px-8 lg:px-24'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-left'>Finsweet was a dream to work with</h1>
                <p className='text-body '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
              </div>

              <div className='row-start-1 md:col-start-2 relative'>
                <img src={image1} className='w-full' />

                <div className='flex items-center absolute bottom-8 left-6 cursor-pointer justify-center z-[1px] gap-2'>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM13.5097 10.6126L21.6902 15.6119C21.7567 15.6525 21.8116 15.7095 21.8497 15.7774C21.8877 15.8453 21.9077 15.9219 21.9077 15.9998C21.9077 16.0776 21.8877 16.1542 21.8497 16.2221C21.8116 16.29 21.7567 16.347 21.6902 16.3876L13.5097 21.387C13.4408 21.4291 13.362 21.4521 13.2812 21.4536C13.2005 21.4551 13.1208 21.4351 13.0504 21.3956C12.9799 21.3561 12.9213 21.2985 12.8805 21.2288C12.8397 21.1592 12.8182 21.0799 12.8182 20.9991V11.0004C12.8182 10.9197 12.8397 10.8404 12.8805 10.7707C12.9213 10.701 12.9799 10.6435 13.0504 10.604C13.1208 10.5645 13.2005 10.5444 13.2812 10.5459C13.362 10.5475 13.4408 10.5705 13.5097 10.6126Z" fill="white"></path></svg>

                  <div className='text-white text-[15px]'>
                    <h4>Play this video</h4>
                  </div>
                </div>

              </div>


            </section> */}


          </div>

        </div>




      </div >
      <Footer db={props.db} />


    </div >
  )
}

export default Home