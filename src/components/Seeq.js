import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Seeq = () => {
  return (
    <div className='my-12'>
        <p className='mx-48 my-5 text-black font-bold text-3xl'>Case Study</p>
        <p className='mx-48 my-5 text-lg'>See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time</p>
        <div className='flex space-x-5 mx-48'>
            <div className="w-80 h-[49px] py-[15px] px-[32px] gap-[10px] rounded-full bg-white border border-gray-400">
                <p className="text-lg text-black py-0 font-semibold">Service Incubator Equity</p>
            </div>
            <div className="w-80 h-[49px] py-[15px] px-[32px] gap-[10px] rounded-full bg-white border border-gray-400">
                <p className="text-lg text-black py-0 font-semibold">SEEQ Maths Equation</p>
            </div>
            <div className="w-80 h-[49px] py-[15px] px-[32px] gap-[10px] rounded-full bg-white border border-gray-400">
                <p className="text-lg text-black py-0 font-semibold">Value of my Equity Over Time</p>
            </div>
        </div>
        <p className='font-bold text-black my-12 text-center underline underline-offset-4'>Become A Service Incubator <FontAwesomeIcon icon={faArrowRight} /></p>
    </div>
  )
}

export default Seeq