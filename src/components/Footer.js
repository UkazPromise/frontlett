import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdge, faWhatsapp, faFacebook, faTwitter, faInstagram, faLinkedinIn, faYoutube, faMedium } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='bg-black my-12'>
        <div className='mx-48'>
            <p className='text-white font-bold text-2xl py-4'>Newsletter</p>
            <p className='text-white'>Get the latest about SINC Partners, our startup Incubator program, Portfolio <br/>company offerings - straight into your inbox.</p>

            <div className='mt-8 mb-4'>
                <span className="border border-gray-500 bg-black rounded-full flex h-10 w-96 py-2 text-white">
                    <p className="text-xs text-white">Enter your email address</p>
                    <p className="text-black font-semibold text-xs border border-light-black rounded-full ml-48 text-center py-2 w-20 h-10 mt-[-8px] bg-white">
                        Subscribe
                    </p>
                </span>
            </div>
        </div>
        <div className='flex space-x-0 my-14 h-80'>
            <div className='rounded-none border flex border-gray-600 w-4/5 h-80 mx-38 space-x-8'>
                <div className='mx-48 flex space-x-8'>
                    <span className='mt-8'>
                        <p className="box-border border-2 border-semi-transparent rounded-none w-28 text-white p-1 text-lg px-4">S | N C</p>
                        <p className="text-white text-xs tracking-wide">
                            P A R T N E R S
                        </p>
                        <p className='text-white text-xs pl-3 pt-4'>
                        SINC Partners is a service<br/> incubation company connecting <br/>experts in product development <br/>and growth marketing willing to <br/>offer their services to amazing <br/>startups in exchange<br/> for minute equity (usually<br/> 0.5% to 2%)
                        </p>
                    </span>
                    <span className='mt-8'>
                        <p className='text-white text-xs font-bold pl-3 py-3'>Platforms</p>
                        <p className='text-white text-xs pl-3 pt-4'>
                            <ul>
                                <li>Kofoundme</li>
                                <li>InResidency</li>
                                <li>Service Market</li>
                                <li>Founders School</li>
                                <li>Metty</li>
                                <li>Grantty</li>
                                <li>Boldtell</li>
                                <li>Chekwa</li>
                            </ul>
                        </p>
                    </span>
                    <span className='mt-8'>
                        <p className='text-white text-xs font-bold pl-3 py-3'>Initiatives</p>
                        <p className='text-white text-xs pl-3 pt-4'>
                            <ul>
                                <li>Jabi Plains</li>
                                <li>Local Pricing Initiative</li>
                                <li>Scholarship Program</li>
                                <li>SSMN Pricing</li>
                                <li>University STEM  </li>
                                <li>University InResidency </li>
                                <li>1M Nigeria Products </li>
                                <li>Founders Festival </li>
                            </ul>
                        </p>
                    </span>
                    <span className='mt-8'>
                        <p className='text-white text-xs font-bold pl-3 py-3'>About Us</p>
                        <p className='text-white text-xs pl-3 pt-4'>
                            <ul>
                                <li>Who We Are</li>
                                <li>Our People</li>
                                <li>Concept Innovations</li>
                                <li>Our Process</li>
                                <li>Investors Network</li>
                                <li>CSR & Events</li>
                                <li>Career</li>
                                <li>Contact</li>
                            </ul>
                        </p>
                    </span>
                    <span className='mt-8'>
                        <p className='text-white text-xs font-bold pl-3 py-3'>More</p>
                        <p className='text-white text-xs pl-3 pt-4'>
                            <ul>
                                <li>Services</li>
                                <li>Equity Jobs</li>
                                <li>EIR Program</li>
                                <li>Our Process</li>
                                <li>Offers</li>
                                <li>FAQ</li>
                                <li>Blog & Resources</li>
                                <li>Press</li>
                            </ul>
                        </p>
                    </span>
                </div>
            </div>
            <div className='rounded-none border border-gray-600 w-1/5 h-80'>
                <span className='mt-8'>
                    <p className='text-white text-xs font-bold pl-3 pt-8'>Locations</p>
                        <p className='text-white text-xs pl-3 pt-4'>
                            <ul>
                                <li>Abuja, Nigeria</li>
                                <li>Lagos, Nigeria </li>
                                <li>Philadelphia, USA</li>
                            </ul>
                        </p>
                </span>
                <span className="flex ml-4 mt-2">
                    <p className="text-xs border-2 border-semi-transparent border-com-black rounded-l-lg h-[24] w-[50px] p-1py-2 mb-8 text-white">
                    <FontAwesomeIcon icon={faEdge} className='w-10 h-12 text-center'/>
                    </p>
                    <p className="text-xs border-2 border-semi-transparent border-com-black rounded-r-lg h-[24] w-[100px] mb-8 text-white">
                    ACCREDITED <br/>BUSINESS A+
                    </p>
                    <span className='mx-4 my-4'>
                        <FontAwesomeIcon icon={faWhatsapp} className='bg-green-500 rounded-full w-8 h-7'/>
                        <p className='text-white text-xs'>chat with us</p>
                    </span>
              </span>
            </div>
        </div>
        <div className='my-12 mx-38 flex space-x-8'>
            <div>
                <div>
                    <p className='text-white text-sm'>Guaranteed 2x on your service or cash investment, usually been the first to invest. <strong>Get in early and SINC your guaranty!</strong></p>
                    <p className='text-white text-sm'>© 2023 SINC Partners Ltd. All rights reserved.</p>
                </div>
            </div>
                <p className='text-xs text-white my-12 text-center underline underline-offset-4'>Privacy Policy </p>
                <p className='text-xs text-white my-12 text-center underline underline-offset-4'>Terms of Service </p>
                <p className='text-xs text-white my-12 text-center underline underline-offset-4'>Security </p>
            <div>
                <p className='text-sm text-white py-8'>We are a business built on the <br/>foundation of Christian values and belief</p>
                <span className='space-x-1 flex'>
                    <FontAwesomeIcon icon={faFacebook} className='text-white text-sm'/>
                    <FontAwesomeIcon icon={faTwitter} className='text-white text-sm'/>
                    <FontAwesomeIcon icon={faInstagram} className='text-white text-sm'/>
                    <FontAwesomeIcon icon={faLinkedinIn} className='text-white text-sm'/>
                    <FontAwesomeIcon icon={faMedium} className='text-white text-sm'/>
                    <FontAwesomeIcon icon={faYoutube} className='text-white text-sm'/>
                    <img className=" w-8 h-4" src="/chat.png" alt='chat logo'/>
                </span>
            </div>
        </div>
        <p className='text-white text-xs text-center'>Web In Nigeria</p>
    </div>
  )
}

export default Footer