import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [navTransform, setNavTransform] = useState(false)


  return (

    <div className='flex justify-center bg-white z-[99] fixed top-0 w-full h-20 shadow'>

      <nav className='px-4 md:px-8 lg:px-24  w-full z-[99]   bg-white  2xl:max-w-[1600px] '>
        <div className='flex items-center justify-between h-full w-full '>
          <Link to='/' className='text-header font-semibold text-[32px] flex items-center'>KITOVU</Link>

          {/* mobile */}
          {/* <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button> */}

          <div role='button' className={`items-center justify-center flex flex-col md:hidden border-0 transition-all delay-300 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] w-5 z-20 p-0 cursor-pointer`} onClick={() => setNavTransform(!navTransform)}>
            <div className={`${navTransform && "translate-y-[7px] rotate-45 "} bg-black rounded-[1px] h-0.5 w-full transition-all delay-300 ease-[cubic-bezier(0.455,0.03,0.515,0.955)]`}></div>
            <div className={`${navTransform && "opacity-0 "} bg-black rounded-[1px] h-0.5 w-full transition-all delay-300 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] mt-[5px]`}></div>
            <div className={`${navTransform && "translate-y-[-7px] -rotate-45 "} bg-black rounded-[1px] h-0.5 w-full transition-all delay-300 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] mt-[5px]`}></div>

          </div>

          {/* nav list for mobile */}
          <div className={`${navTransform ? 'translate-y-0   left-0' : "left-[130vh] "} bg-white h-[100vh] top-20  m-auto px-4 fixed transition-all delay-300 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] w-full z-10 md:hidden`}>

            <div className=' flex items-center flex-col min-h-1/2  text-[#394149] text-base font-medium' role='mobile-navbar'>
              <Link to='/' className='py-5 w-full border-b-[1px] border-gray-200 text-center' >
                Home
              </Link>
              <Link to='/about-us' className='py-5 w-full border-b-[1px] border-gray-200 text-center' >
                About us
              </Link>
              <Link to='/combo-trader' className='py-5 w-full border-b-[1px] border-gray-200 text-center' >
                Why us
              </Link>
              <Link to='/contact_us' className='py-5 w-full border-b-[1px] border-gray-200 text-center ' >
                Contact us
              </Link>
              {/* <Link to='/combo-trader/work_with_us' className='my-5 w-fit bg-[#F58A071A] px-6 py-2.5 text-[#F58A07] hover:bg-[#F58A07] hover:text-white rounded-3xl' >
                Work with us
              </Link> */}

            </div>

          </div>



          {/* desktop */}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 items-center ">
              <li>
                <Link to="/" className="block py-2 pr-4 pl-3 text-[#394149] md:p-0 hover:underline   " aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/about-us" className="block py-2 pr-4 pl-3 text-[#394149] md:p-0 hover:underline  hover:transition-shadow ">About us</Link>
              </li>
              <li>
                <Link to="/combo-trader" className="block py-2 pr-4 pl-3 text-[#394149] md:p-0 hover:underline ">Why us</Link>
              </li>
              <li>
                <Link to="/contact_us" className="block py-2 pr-4 pl-3 text-[#394149] delay-150 md:p-0 hover:underline ">Contact Us</Link>
              </li>
              {/* <li>
                <Link to="/combo-trader/work_with_us" className="bg-[#F58A071A] px-6 py-2.5 text-[#F58A07] hover:bg-[#F58A07] hover:text-white rounded-3xl">Work with us</Link>
              </li> */}
            </ul>
          </div>


        </div>

      </nav>


    </div>

  )
}

export default Navbar