import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Sip = () => {
  return (
    <div className='mt-10 my-24'>
        <p className='py-8 text-center text-black font-bold text-3xl'>Network of builders helping <br/>startup scale</p>
        <div className='flex space-x-8 mx-52'>
            <div className="rounded-none border border-white bg-white w-1/2 h-34 pl-8 pt-4">
                <p className='text-black font-bold text-xl'>Work with Service Incubators to expedite <br/>your time-to-market</p>
                <p className='py-4'>Collaborate with our meticulously chosen service partners,<br/> each with a vested interest, ensuring a shared commitment to <br/>success in the game of venture building.<br/></p>
                <p className='text-black font-semibold'>For 7.5% equity, you get a product manager, product <br/>designer, frontend engineer, software engineer and growth<br/> marketer to build the MVP of your app or web application<br/> and validate it.</p>
                <p className='py-4 underline underline-offset-4'>Learn More <FontAwesomeIcon icon={faArrowRight} /></p>
            </div>
            <div className="rounded-none border border-white bg-white w-1/2 h-34 pl-8 pt-4">
                <p className='text-black font-bold text-xl'>Access funding after your mvp is <br/>validated </p>
                <p className='py-4'>Startups that have built and validated their product can take<br/> advantage of the financial resources of the SINC Investors <br/>Network, elevating their potential for success in the venture<br/> capital landscape.</p>
                <p className='text-black font-semibold'>Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within <br/> 12 months </p>
                <p className='py-8 underline underline-offset-4'>Learn More <FontAwesomeIcon icon={faArrowRight} /> </p>
            </div>
        </div>
        <div>
                <p className='pt-12 text-center text-black font-bold text-3xl'>Our Area of Focus</p>
                <p className='pt-8 text-center text-black'>In our quest to help make success available to everyone, we have initial strategic <br/>direction to focus on these five (5) key areas at the lab</p>
                <div className='flex space-x-0 my-14 mx-48'>
                    <div className='rounded-none border border-black w-1/2 h-48 bg-black'>
                        <p className='text-white pl-3 py-3'>01</p>
                        <p className='text-white pl-3 pt-14'>Business Support & <br/>Incubation</p>
                    </div>
                    <div className='rounded-none border border-orange-600 w-1/2 h-48 bg-orange-600'>
                        <p className='text-white pl-3 py-3'>02</p>
                        <p className='text-white pl-3 pt-14'>On-Demand & As-<br/>A-Service</p>
                    </div>
                    <div className='rounded-none border border-pink-500 w-1/2 h-48 bg-pink-500'>
                        <p className='text-white pl-3 py-3'>03</p>
                        <p className='text-white pl-3 pt-14'>Marketplace & <br/>Crowdsourcing</p>
                    </div>
                    <div className='rounded-none border border-green-600 w-1/2 h-48 bg-green-600'>
                        <p className='text-white pl-3 py-3'>04</p>
                        <p className='text-white pl-3 pt-14'>Aggregation & <br/>Shared Economy</p>
                    </div>
                    <div className='rounded-none border border-pink-500 w-1/2 h-48 bg-pink-500'>
                        <p className='text-white pl-3 py-3'>05</p>
                        <p className='text-white pl-3 pt-14'>Decentralized <br/>Economy & Digital <br/>Assets</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='pt-12 text-center text-black font-bold text-3xl'>Our Concept Innovations</p>
                <p className='pt-8 text-center text-black text-sm'>We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and<br/> ultimately help democratize success;</p>
                <div className='flex space-x-8 mx-48 my-14'>
                    <div className='rounded-none border border-white w-1/2 h-48 bg-white'>
                        <p className='text-center font-bold text-lg pt-2'>Service Incubator</p>
                        <p className='text-center py-8 text-sm'>A service-for-shares model of incubating <br/>pre-product startups and early-stage <br/>companies by building their early stage<br/> product and MVP</p>
                    </div>
                    <div className='rounded-none border border-white w-1/2 h-48 bg-white'>
                        <p className='text-center font-bold text-lg pt-2'>Virtualting</p>
                        <p className='text-center py-8 text-sm'>A resource share model that allows <br/>companies share the time of resources<br/> (employees, consultants, technical advisers<br/> or influencers) while also splitting the <br/>service cost of the resource</p>
                    </div>
                    <div className='rounded-none border border-white w-1/2 h-48 bg-white'>
                        <p className='text-center font-bold text-lg pt-2'>Diiming</p>
                        <p className='text-center py-8 text-sm'>A progressive investment model that allows<br/> you to put aside income (disposable or non-<br/>disposable) as investment over a period <br/>towards an investment or spend of your <br/>choice </p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex space-x-8 mx-48 my-14'>
                    <div className='rounded-none border border-white w-1/2 h-80 bg-white'>
                        <svg height="100" width="100">
                            <polygon points="50,15 90,85 10,85" className="fill-pink-500 stroke-pink-400 stroke-3 py-6 pl-6" />
                        </svg>
                        <p className='text-sm text-justifytext-justify py-4 px-6'>Most early-stage companies and pre-<br/>product startups cannot afford professional <br/>services especially those who don’t <br/>have family and friends’ network that can <br/>support</p>
                    </div>
                    <div className='rounded-none border border-white w-1/2 h-80 bg-white'>
                    <svg height="100" width="100" viewBox="0 0 100 100">
                        <polygon
                        points="50,10 90,50 50,90 10,50"
                        className="fill-teal-500 stroke-teal-500 stroke-[3] py-6 pl-6"
                        />
                    </svg>
                        <p className='text-sm text-justify py-4 px-6'>If startups can seed 5-10% in equity to<br/> incubators for $20k to $200k funding most <br/>times, they will be willing to seed 10% equity <br/>for a $25k service investment</p>
                    </div>
                    <div className='rounded-none border border-white w-1/2 h-80 bg-white'>
                        <svg height="100" width="100" viewBox="0 0 100 100">
                            <polygon
                            points="50,10 90,35 90,65 50,90 10,65 10,35"
                            className="fill-pink-500 stroke-pink-500 stroke-[3] py-6 pl-6"
                            />
                        </svg>
                        <p className='text-sm text-justify py-4 px-6'>Young professionals who don’t have a lot of <br/>money to invest nor an accredited investors <br/>will have opportunities to take equity at the<br/> early stage of their career, usually been the<br/> first to invest and almost guaranteed of<br/> return</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Sip