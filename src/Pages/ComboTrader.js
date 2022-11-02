import React, { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Navbar from '../Components/Navbar'
import image1 from '../assets/image1.jpeg'
import farm11 from '../assets/farm11.png'
import farm2 from '../assets/farm2.png'
import farm3 from '../assets/farm3.png'
import farm5 from '../assets/farm5.png'
import combo1 from '../assets/new/combo1.png'
import combo2 from '../assets/new/combo2.png'
import combo3 from '../assets/new/combo3.png'
import combo4 from '../assets/new/combo4.png'
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from 'react-icons/io'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'
import ScrollToTop from '../Components/ScrollToTop'

const ComboTrader = (props) => {

  //combo trader

  const [step, setStep] = useState(1)
  const navigate = useNavigate()

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
      <div className='px-4 md:px-8 lg:px-24  pt-4 md:pt-16 flex justify-center pb-4 '>

        <div className='flex gap-5 md:gap-5 flex-col  justify-center 2xl:max-w-[1600px]'>
          <section className=' py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative'>
            <div className='w-full pl-4 md:pl-0 pr-4 md:pr-0 '>


              <h1 className='text-header max-w-[560px] font-semibold text-2xl md:text-3xl lg:text-5xl mt-2'>The better way to make money trading agricultural commodities</h1>
              <p className='text-body pt-4 pb-5'>ComboTrader helps thousands of customers achieve financial freedom by connecting them to the right agricultural product suppliers, storing their purchases for them, and selling the purchase on the customer’s terms and conditions.</p>

              <div className='flex items-center md:items-start justify-center md:justify-start'>
                <button className='max-w-[175px] w-[175px] bg-[#F58A071A] px-6 py-2.5 bg-[#F58A07] text-white hover:bg-white hover:text-[#F58A07]  rounded-3xl font-medium md:font-semibold' onClick={() => { navigate('/combo-trader/work_with_us') }}>Start Trading Now</button>
              </div>


            </div>


            <div className='row-start-1 md:col-start-2   relative'>

              <img src={combo1} className='w-full md:rounded-[20px] overflow-hidden' />

            </div>

          </section>

          <h1 className='text-[#0D1317] font-semibold text-center w-full text-2xl md:text-3xl lg:text-5xl'>Why us</h1>

          <section className=' py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative'>
            <div className='row-start-1 md:col-start-1   relative'>

              <div className='w-[95px] h-[95px] rounded-[20px] bg-[#F58A07] absolute top-[128px] left-[-47.5px] mix-blend-multiply'></div>
              <img src={combo2} className='w-full md:rounded-[20px] overflow-hidden' />

            </div>

            <div className='w-full pl-4 md:pl-0 pr-4 md:pr-0 '>

              <h1 className='text-header max-w-[560px] font-semibold text-2xl md:text-3xl lg:text-5xl mt-2'>Sourcing and Aggregation </h1>
              <p className='text-body pt-4 pb-5'>Connect with thousands of farmers and agricultural product suppliers in one location. Our data-driven algorithm helps you isolate the exact agro-product you are interested in and connects you with the seller directly. It all happens on your terms. </p>



            </div>


          </section>


          <section className=' py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative'>
            <div className='row-start-1 md:col-start-2   relative'>

              <div className='w-[95px] h-[95px] rounded-[20px] bg-[#F58A07] absolute top-[-47.5px] right-[47.5px] mix-blend-multiply'></div>
              <img src={combo3} className='w-full md:rounded-[20px] overflow-hidden' />

            </div>

            <div className='w-full pl-4 md:pl-0 pr-4 md:pr-0 '>

              <h1 className='text-header max-w-[560px] font-semibold text-2xl md:text-3xl lg:text-5xl mt-2'>Storage as a Service</h1>
              <p className='text-body pt-4 pb-5'>Don’t break a sweat worrying about storage and avoid losses on all your purchases. Our multiple storage facilities across the nation are designed to prevent any loss and allow you to track the condition of your produce. We’ll hold your product in trust for you until you are ready to trade them.</p>


            </div>

          </section>

          <section className=' py-4 md:py-16 grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative'>
            <div className='row-start-1 md:col-start-1   relative'>

              <div className='w-[95px] h-[95px] rounded-[20px] bg-[#F58A07] absolute top-[128px] left-[-47.5px] mix-blend-multiply'></div>
              <img src={combo4} className='w-full md:rounded-[20px] overflow-hidden' />

            </div>

            <div className='w-full pl-4 md:pl-0 pr-4 md:pr-0 '>

              <h1 className='text-header max-w-[560px] font-semibold text-2xl md:text-3xl lg:text-5xl mt-2'>Sales as a Service</h1>
              <p className='text-body pt-4 pb-5'> Avoid the stress of looking for a buyer or marketing your products. We’ll facilitate sales to a genuine buyer at a better price, and you’ll receive your revenue directly in your bank account.</p>

              <div className='flex items-center md:items-start justify-center md:justify-start'>
                <button className='max-w-[175px] w-[175px] bg-[#F58A071A] px-6 py-2.5 bg-[#F58A07] text-white hover:bg-white hover:text-[#F58A07]  rounded-3xl font-medium md:font-semibold' onClick={() => { navigate('/combo-trader/work_with_us') }}>Start Trading Now</button>
              </div>


            </div>


          </section>



          {/* <section className=' py-4 md:py-16 hidden md:flex gap-10 relative'>

            <div className='flex flex-col gap-5'>
              <div className='flex flex-col gap-4 '>
                <h1 className='text-[#F58A07] font-bold text-3xl'>1</h1>

                <h2 className='text-[#0D1317] text-2xl'>Awards received</h2>
                <p className='text-body'>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
              </div>

              <img className='rounded-[20px]' src={image1} />
            </div>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col gap-4 '>
                <h1 className='text-[#F58A07] font-bold text-3xl'>2</h1>

                <h2 className='text-[#0D1317] text-2xl'>Awards received</h2>
                <p className='text-body'>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
              </div>

              <img className='rounded-[20px]' src={image1} />
            </div>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col gap-4 '>
                <h1 className='text-[#F58A07] font-bold text-3xl'>3</h1>

                <h2 className='text-[#0D1317] text-2xl'>Awards received</h2>
                <p className='text-body'>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
              </div>

              <img className='rounded-[20px]' src={image1} />
            </div>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col gap-4 '>
                <h1 className='text-[#F58A07] font-bold text-3xl'>4</h1>

                <h2 className='text-[#0D1317] text-2xl'>Awards received</h2>
                <p className='text-body'>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
              </div>

              <img className='rounded-[20px]' src={image1} />
            </div>

          </section> */}

          {/* <section className=' py-4 md:py-16 flex md:hidden  '>
            <div className='grid grid-cols-[1fr_auto_1fr] gap-4 items-center'>
              <div>
                <IoMdArrowDropleftCircle className='text-gray-300 hover:text-[#F58A07] w-8 h-8' onClick={() => {
                  if (step !== 1) {
                    setStep(step - 1)
                  }
                }} />
              </div>
              <div>
                {step === 1 && <div className='flex flex-col gap-5'>
                  <div className='flex flex-col gap-4 '>
                    <h1 className='text-[#F58A07] font-bold text-3xl'>1</h1>

                    <h2 className='text-[#0D1317] text-2xl'>Awards received</h2>
                    <p className='text-body'>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
                  </div>

                  <img className='rounded-[20px]' src={image1} />
                </div>}

                {step === 2 && <div className='flex flex-col gap-5'>
                  <div className='flex flex-col gap-4 '>
                    <h1 className='text-[#F58A07] font-bold text-3xl'>2</h1>

                    <h2 className='text-[#0D1317] text-2xl'>Awards received</h2>
                    <p className='text-body'>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
                  </div>

                  <img className='rounded-[20px]' src={image1} />
                </div>}

                {step === 3 && <div className='flex flex-col gap-5'>
                  <div className='flex flex-col gap-4 '>
                    <h1 className='text-[#F58A07] font-bold text-3xl'>3</h1>

                    <h2 className='text-[#0D1317] text-2xl'>Awards received</h2>
                    <p className='text-body'>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
                  </div>

                  <img className='rounded-[20px]' src={image1} />
                </div>}

                {step === 4 && <div className='flex flex-col gap-5'>
                  <div className='flex flex-col gap-4 '>
                    <h1 className='text-[#F58A07] font-bold text-3xl'>4</h1>

                    <h2 className='text-[#0D1317] text-2xl'>Awards received</h2>
                    <p className='text-body'>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
                  </div>

                  <img className='rounded-[20px]' src={image1} />
                </div>}

              </div>
              <div>
                <IoMdArrowDroprightCircle className='text-gray-300 hover:text-[#F58A07] w-8 h-8' onClick={() => {

                  if (step !== 4) {
                    setStep(step + 1)
                  }
                }} />
              </div>
            </div>
          </section> */}

        </div>
      </div>
      <Footer db={props.db} />

    </div>
  )
}

export default ComboTrader