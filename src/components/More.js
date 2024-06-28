import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faClock } from '@fortawesome/free-solid-svg-icons';
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "/node_modules/swiper/swiper-bundle.min.css";

const More = () => {
  return (
    <div>
        <div className='mx-60'>
            <p className='text-3xl font-bold text-center py-8'>SINC Investors Network</p>
            <p className='text-sm text-center pb-8'>Our deals are structured not just to take in investments but to onboard owners passionate about our solutions. Our portfolio companies are valued at $50k at start, with these low valuation, you are guaranteed at least 2x-5x, usually been the first to invest. </p>
            <p className='text-sm text-center pb-8'><strong>Disclaimer</strong>: These deal flows is a statement of our projections and may differ from stage to stage and from venture to venture and the guarantee is for deal 1, usually the first to invest</p>
        </div>
        <div className='mx-48'>
            <p className='py-2'><strong>Micro Angel Investors & Service incubators</strong> (Invest from $500 & above)</p>
        </div>
        <div className='flex space-x-0 my-14 mx-48'>
            <div className='rounded-none border border-gray-600 w-1/2 h-48'>
                <p className='text-black text-xs font-bold pl-3 py-3'>Deal 1</p>
                <p className='text-black text-xs pl-3 pt-4'>
                    ✓ Idea Stage: $5k for 5% Equity<br/>
                    ✓ Expected Revenue at This Stage: $0/mth<br/>
                    ✓ Duration of Raise: 1mth<br/>
                    ✓ Who Can Invest: People with Domain Expertise and Advisors
                </p>
            </div>
            <div className='rounded-none border border-gray-600 w-1/2 h-48'>
                <p className='text-black text-xs font-bold pl-3 py-3'>02</p>
                <p className='text-black text-xs pl-3 pt-4'>
                    ✓ Build Stage: $25k worth of service for 10% <br/>     Equity
                    ✓ Expected Revenue at This Stage: $100+/mth<br/>
                    ✓ Duration of Raise: 1-3mths<br/>
                    ✓ Who Can Invest: Developers, Engineers, Growth Marketers
                </p>
            </div>
            <div className='rounded-none border border-gray-600 w-1/2 h-48'>
                <p className='text-black text-xs font-bold pl-3 py-3'>Deal 3</p>
                <p className='text-black text-xs pl-3 pt-4'>
                    ✓ Validation Stage: $50k for 5% Equity<br/>
                    ✓ Expected Revenue at This Stage: $1k+/mth<br/>
                    ✓ Duration of Raise: 3-6mths<br/>
                    ✓ Who Can Invest: Everyone 
                </p>
            </div>
            <div className='rounded-none border border-gray-600 w-1/2 h-48'>
                <p className='text-black text-xs font-bold pl-3 py-3'>Deal 4</p>
                <p className='text-black text-xs pl-3 pt-4'>
                    ✓ Traction Stage: $125k worth of service for 5% Equity<br/>
                    ✓ Expected Revenue at This Stage: $5k+/mth<br/>
                    ✓ Duration of Raise: 6-12mths<br/>
                    ✓ Who Can Invest: Media, Influencers, Celebrity, Platform Owners 
                </p>
            </div>
        </div>
        <div>
            <div className='mx-48'>
                <p className='py-2'><strong>Angel Investors & Venture Capital </strong> (Invest from $50k and above)</p>
            </div>
            <div className='flex space-x-0 my-14 mx-48'>
                <div className='rounded-none border border-gray-600 w-1/2 h-48'>
                    <p className='text-black text-xs font-bold pl-3 py-3'>Deal 5</p>
                    <p className='text-black text-xs pl-3 pt-4'>
                        ✓ Pre-seed Stage: $1.5M for 10% Equity<br/>
                        ✓ Expected Revenue at This Stage: $50k+/mth<br/>
                        ✓ Duration of Raise: 6-18mths<br/>
                        ✓ Who Can Invest: Angel Investors, VCs, PE, Institutions<br/>
                    </p>
                </div>
                <div className='rounded-none border border-gray-600 w-1/2 h-48'>
                    <p className='text-black text-xs font-bold pl-3 py-3'>Deal 6</p>
                    <p className='text-black text-xs pl-3 pt-4'>
                        ✓ Seed Stage: $7.5M for 20% Equity<br/>
                        ✓ Expected Revenue at This Stage: $250k+/mth<br/>
                        ✓ Duration of Raise: 12-24mths<br/>
                        ✓ Who Can Invest: VCs, PE, Institutions 
                    </p>
                </div>
                <div className='rounded-none border border-gray-600 w-1/2 h-48'>
                    <p className='text-black text-xs font-bold pl-3 py-3'>Deal 7</p>
                    <p className='text-black text-xs pl-3 pt-4'>
                        ✓ IPO Stage: $1.5B for 20% Equity<br/>
                        ✓ Expected Revenue at This Stage: $1M+/mth<br/>
                        ✓ Duration of Raise: 18-36mths<br/>
                        ✓ Who Can Invest: The Public
                    </p>
                </div>
                <div className='rounded-none border border-gray-600 w-1/2 h-48 bg-black'>
                    <p className='text-white text-xs font-bold pl-3 py-3'>Work with Service Incubators<br/> (SINC) to expedite your<br/> time to market</p>
                    <div className='rounded-full border border-gray-600 w-40 h-8 bg-gray-500 ml-4 mt-5'>
                        <p className='text-black text-xs px-4 py-1 text-center'>Join SINC Network</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='mx-48 mt-11'>
                <p className='text-3xl font-bold text-center py-8'>Equity jobs</p>
                <p className='text-sm text-center pb-8'>See companies and startups offering equity or a mix of cash and equity for very important position in their company. </p>
            </div>
            <div className='flex space-x-8 my-8 mx-48'>
                <div className='rounded-xl border border-gray-600 pl-3 pt-3 w-1/2 h-72 ml bg-white'>
                    <img className=" w-14 h-8" src="/logo21skiimake.png" alt='skiimake logo'/>
                    <p className='text-xs py-2'>This company is a SAAS Startup <br/>that builds AI copy generator..</p>
                    <p className='font-medium'>UX Strategist</p>
                    <div className='table-auto text-xs font-thin'>
                        <thead className='text-xs'>
                            <tr>
                                <th>LOCATION</th>
                                <th>INDUSTRY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Abuja, Nigeria</td>
                                <td>On-demand print</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>EQUITY</th>
                                <th>STIPEND</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12%</td>
                                <td>NGN 200,000/mth </td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>DEADLINE</th>
                                <th>ROLE TYPE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>24th, January 2024</td>
                                <td>Full-time</td>
                            </tr>
                        </tbody>
                    </div>
                    <div className='rounded-full border border-gray-600 w-1/2 h-8 bg-black ml-4 mt-5'>
                        <p className='text-white text-xs px-4 py-1'>View details</p>
                    </div>
                </div>
                <div className='rounded-xl border border-gray-600 pl-3 pt-3 w-1/2 h-72 bg-white'>
                    <img className=" w-14 h-8" src="/logo27kreeca.png" alt='kreeca logo'/>
                    <p className='text-xs py-2'>This company is a SAAS Startup <br/>that builds AI copy generator..</p>
                    <p className='font-medium'>Chief Executive Officer</p>
                    <div className='table-auto text-xs font-thin'>
                        <thead className='text-xs'>
                            <tr>
                                <th>LOCATION</th>
                                <th>INDUSTRY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Abuja, Nigeria</td>
                                <td>e-commerce</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>EQUITY</th>
                                <th>STIPEND</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12%</td>
                                <td>NGN 200,000/mth </td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>DEADLINE</th>
                                <th>ROLE TYPE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>24th, January 2024</td>
                                <td>Full-time</td>
                            </tr>
                        </tbody>
                        <div className='rounded-full border border-gray-600 w-1/2 h-8 bg-black ml-4 mt-5'>
                            <p className='text-white text-xs px-4 py-1'>View details</p>
                        </div>
                    </div>
                </div>
                <div className='rounded-xl border border-gray-600 pl-3 pt-3 w-1/2 h-72 bg-white'>
                    <img className=" w-14 h-8" src="/logo22Weblogo.png" alt='22web logo'/>
                    <p className='text-xs py-2'>This company is a SAAS Startup <br/>that builds AI copy generator..</p>
                    <p className='font-medium'>CTO Head of innovations</p>
                    <div className='table-auto text-xs font-thin'>
                        <thead className='text-xs'>
                            <tr>
                                <th>LOCATION</th>
                                <th>INDUSTRY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Abuja, Nigeria</td>
                                <td>fintech</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>EQUITY</th>
                                <th>STIPEND</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12%</td>
                                <td>NGN 200,000/mth </td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>DEADLINE</th>
                                <th>ROLE TYPE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>24th, January 2024</td>
                                <td>Full-time</td>
                            </tr>
                        </tbody>
                        <div className='rounded-full border border-gray-600 w-1/2 h-8 bg-black ml-4 mt-5'>
                            <p className='text-white text-xs px-4 py-1'>View details</p>
                        </div>
                    </div>
                </div>
                <div className='rounded-xl border border-gray-600 pl-3 pt-3 w-1/2 h-72 bg-white'>
                    <img className=" w-14 h-8" src="/logo29Wetta.png" alt='wetta logo'/>
                    <p className='text-xs py-2'>This company is a SAAS Startup <br/>that builds AI copy generator..</p>
                    <p className='font-medium'>Backend Developer</p>
                    <div className='table-auto text-xs font-thin'>
                        <thead className='text-xs'>
                            <tr>
                                <th>LOCATION</th>
                                <th>INDUSTRY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Abuja, Nigeria</td>
                                <td>Transportation</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>EQUITY</th>
                                <th>STIPEND</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12%</td>
                                <td>NGN 200,000/mth </td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>DEADLINE</th>
                                <th>ROLE TYPE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>24th, January 2024</td>
                                <td>Full-time</td>
                            </tr>
                        </tbody>
                        <div className='rounded-full border border-gray-600 w-1/2 h-8 bg-black ml-4 mt-5'>
                            <p className='text-white text-xs px-4 py-1'>View details</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-12'>
            <p className='text-3xl font-bold text-center'>Blogs & Resources</p>
                <div className='flex space-x-8 mx-48 mt-10'>
                    <div className="relative w-full h-full">
                        <img
                            src="/vidpix1istockphoto-1273007478-612x612.png"
                            alt="Descriptive Alt Text"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                                <FontAwesomeIcon icon={faCirclePlay} className="rounded-full bg-white text-red-500 text-3xl" /> 
                            </div>
                        <div className="absolute bottom-0 w-full text-white text-sm p-4 flex items-center justify-between">
                            <span>Top Ten Most Powerful Startup</span>
                            <span className="flex items-center">
                            <FontAwesomeIcon icon={faClock} className="ml-2" /> 2mins
                            </span>
                        </div>
                    </div>
                    <div className="relative w-full h-full">
                        <img
                            src="/vidpix2istockphoto-1414162938-612x612.png"
                            alt="Descriptive Alt Text"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <FontAwesomeIcon icon={faCirclePlay} className="rounded-full bg-white text-red-500 text-3xl" /> 
                        </div>
                        <div className="absolute bottom-0 w-full text-white text-sm p-4 flex items-center justify-between">
                            <span>Top Ten Most Powerful Startup</span>
                            <span className="flex items-center">
                            <FontAwesomeIcon icon={faClock} className="ml-2" /> 2mins
                            </span>
                        </div>
                    </div>
                    <div className="relative w-full h-full">
                        <img
                            src="/videopic3istockphoto-1414162938-612x612.png"
                            alt="Descriptive Alt Text"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <FontAwesomeIcon icon={faCirclePlay} className="rounded-full bg-white text-red-500 text-3xl" /> 
                        </div>
                        <div className="absolute bottom-0 w-full text-white text-sm p-4 flex items-center justify-between">
                            <span>Top Ten Most Powerful Startup</span>
                            <span className="flex items-center">
                            <FontAwesomeIcon icon={faClock} className="ml-2" /> 2mins
                            </span>
                        </div>
                    </div>    
                </div>
            </div>
            <div>
                <div className='flex space-x-8 mx-48 mt-8'>
                    <div className='flex'>
                        <div>
                            <p className='text-xs font-bold'>Top Ten Most Powerful Startup</p>
                            <p className='text-xs'>Top Ten Most Powerful Startup. Top Ten Most<br/> Powerful Startup. Top Ten Most Powerful<br/> Startup</p>
                        </div>
                        <div className='w-20 h-24'>
                            <img
                                src="/Pix1annualreport.png"
                                alt="Descriptive Alt Text"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <p className='text-xs font-bold'>Top Ten Most Powerful Startup</p>
                            <p className='text-xs'>Top Ten Most Powerful Startup. Top Ten Most<br/> Powerful Startup. Top Ten Most Powerful<br/> Startup</p>
                        </div>
                        <div className='w-20 h-24'>
                            <img
                                src="/Pix2business.png"
                                alt="Descriptive Alt Text"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <p className='text-xs font-bold'>Top Ten Most Powerful Startup</p>
                            <p className='text-xs'>Top Ten Most Powerful Startup. Top Ten Most<br/> Powerful Startup. Top Ten Most Powerful<br/> Startup</p>
                        </div>
                        <div className='w-20 h-24'>
                            <img
                                src="/Pix3business.png"
                                alt="Descriptive Alt Text"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
                <p className='font-bold text-black my-12 text-center underline underline-offset-4'>See More Blogs & Resources</p>
            </div>
            <div>
                <p className='text-2xl font-bold text-center pb-12'>As Featured In</p>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={2}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                    <div className="flex  w-full h-72 bg-white">
                        <img  className="w-1/2 border-2 border-gray-300" src="/foto1punchlady.png" alt="students-studying-together-medium-shot"/>
                        <div className="w-1/2 justify-items-center flex flex-col ml-12">
                            <img className=" w-14 h-8" src="/logo49punch-newspaper-logo-1024x768.png" alt='punch logo'/>
                            <p className="text-sm text-black font-bold">SINC Partners invests  over 200<br/> million naira in 5 startups</p>
                            <p className="text-xs pt-4">SINC Partners invests  over 200<br/> million naira in 5 startups. SINC <br/>Partners invests  over 200 million <br/>naira in 5 startups SINC Partners <br/>invests  over 200 million naira in ....</p>
                            <div className='mt-8'>
                                <p>REPORTED BY:</p>
                                <p>Rema Viel</p>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="flex w-full h-72 bg-white">
                        <img className="w-1/2 border-2 border-gray-300" src="/foto2bujnewsreporters.png" alt="istockphoto-1344871734-612x612" />
                        <div className="w-1/2 justify-items-center flex flex-col ml-12">
                            <img className=" w-14 h-8" src="/logo3bujnews green.jpeg" alt='punch logo'/>
                            <p className="text-sm text-black font-bold">SINC Partners invests  over 200<br/> million naira in 5 startups</p>
                            <p className="text-xs pt-4">SINC Partners invests  over 200<br/> million naira in 5 startups. SINC <br/>Partners invests  over 200 million <br/>naira in 5 startups SINC Partners <br/>invests  over 200 million naira in ....</p>
                            <div className='mt-8'>
                                <p>REPORTED BY:</p>
                                <p>Rema Viel</p>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex w-full h-72 bg-white">
                            <img className="w-1/2 border-2 border-gray-300" src="/foto3weldoneteamQntecx.png" alt="portrait-handsome-bearded-male" />
                            <div className="w-1/2 justify-items-center flex flex-col ml-12">
                            <img className=" w-14 h-8" src="/logo33Ontecx-Logo.png" alt='punch logo'/>
                            <p className="text-sm text-black font-bold">SINC Partners invests  over 200<br/> million naira in 5 startups</p>
                            <p className="text-xs pt-4">SINC Partners invests  over 200<br/> million naira in 5 startups. SINC <br/>Partners invests  over 200 million <br/>naira in 5 startups SINC Partners <br/>invests  over 200 million naira in ....</p>
                            <div className='mt-8'>
                                <p>REPORTED BY:</p>
                                <p>Rema Viel</p>
                            </div>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex w-full h-72 bg-white">
                            <img className="w-1/2 border-2 border-gray-300" src="/foto4teamguardian.png" alt="portrait-handsome-bearded-male" />
                            <div className="w-1/2 justify-items-center flex flex-col ml-12">
                                <img className=" w-14 h-8" src="/logo50TheGuardian.png" alt='punch logo'/>
                                <p className="text-sm text-black font-bold">SINC Partners invests  over 200<br/> million naira in 5 startups</p>
                                <p className="text-xs pt-4">SINC Partners invests  over 200<br/> million naira in 5 startups. SINC <br/>Partners invests  over 200 million <br/>naira in 5 startups SINC Partners <br/>invests  over 200 million naira in ....</p>
                                <div className='mt-8'>
                                    <p>REPORTED BY:</p>
                                    <p>Rema Viel</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="flex  w-full h-72 bg-white">
                        <img  className="w-1/2 border-2 border-gray-300" src="/foto1punchlady.png" alt="students-studying-together-medium-shot"/>
                        <div className="w-1/2 justify-items-center flex flex-col ml-12">
                            <img className=" w-14 h-8" src="/logo49punch-newspaper-logo-1024x768.png" alt='punch logo'/>
                            <p className="text-sm text-black font-bold">SINC Partners invests  over 200<br/> million naira in 5 startups</p>
                            <p className="text-xs pt-4">SINC Partners invests  over 200<br/> million naira in 5 startups. SINC <br/>Partners invests  over 200 million <br/>naira in 5 startups SINC Partners <br/>invests  over 200 million naira in ....</p>
                            <div className='mt-8'>
                                <p>REPORTED BY:</p>
                                <p>Rema Viel</p>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex w-full h-72 bg-white">
                            <img className="w-1/2 border-2 border-gray-300" src="/foto4teamguardian.png" alt="portrait-handsome-bearded-male" />
                            <div className="w-1/2 justify-items-center flex flex-col ml-12">
                                <img className=" w-14 h-8" src="/logo50TheGuardian.png" alt='punch logo'/>
                                <p className="text-sm text-black font-bold">SINC Partners invests  over 200<br/> million naira in 5 startups</p>
                                <p className="text-xs pt-4">SINC Partners invests  over 200<br/> million naira in 5 startups. SINC <br/>Partners invests  over 200 million <br/>naira in 5 startups SINC Partners <br/>invests  over 200 million naira in ....</p>
                                <div className='mt-8'>
                                    <p>REPORTED BY:</p>
                                    <p>Rema Viel</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="flex w-full h-72 bg-white">
                        <img className="w-1/2 border-2 border-gray-300" src="/foto2bujnewsreporters.png" alt="istockphoto-1344871734-612x612" />
                        <div className="w-1/2 justify-items-center flex flex-col ml-12">
                            <img className=" w-14 h-8" src="/logo3bujnews green.jpeg" alt='punch logo'/>
                            <p className="text-sm text-black font-bold">SINC Partners invests  over 200<br/> million naira in 5 startups</p>
                            <p className="text-xs pt-4">SINC Partners invests  over 200<br/> million naira in 5 startups. SINC <br/>Partners invests  over 200 million <br/>naira in 5 startups SINC Partners <br/>invests  over 200 million naira in ....</p>
                            <div className='mt-8'>
                                <p>REPORTED BY:</p>
                                <p>Rema Viel</p>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='my-12'>
                <p className='text-4xl text-center font-semibold'>Let's build companies that<br/> help everyone succeed</p>
            </div>
            <div className='flex mx-48 justify-center items-center'>
                <div className='rounded-full border border-gray-600 w-40 h-8 bg-slate-300 ml-4 mt-5'>
                    <p className='text-black text-xs font-semibold px-4 py-1 text-center'>SINC With Us</p>
                </div>
                <div className='rounded-full border border-gray-600 w-40 h-8 bg-black ml-4 mt-5'>
                    <p className='text-white text-xs px-4 py-1 text-center'>Apply to SIP 1.0</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default More;