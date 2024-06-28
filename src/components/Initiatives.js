import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "/node_modules/swiper/swiper-bundle.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleList, faPeopleArrows, faPenToSquare, faPersonWalkingDashedLineArrowRight, faSquarePhone, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Initiatives = () => {
  return (
    <div>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <p className='text-3xl font-bold text-center py-8'>Join Our Entrepreneur In Residence <br/>(EIR) Program</p>
                <p className='text-sm text-center pb-8'>Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and<br/> technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each.</p>
                <div className='flex space-x-8'>
                    <div className="rounded-none border border-white bg-white w-1/2 h-34 pl-8 pt-4">
                        <FontAwesomeIcon icon={faRectangleList}/>
                        <p className='font-bold text-lg'>Application and Selection</p>
                        <p className='text-sm pt-4'>Begin your journey by completing our <br/>straightforward application form. Share <br/>insights into your entrepreneurial background,<br/> expertise, and your vision for supporting the<br/> success of our portfolio companies.</p>
                        <p className='text-sm pt-4'>Our dedicated selection committee,<br/> comprised of key stakeholders at SINC<br/> Partners, will carefully review your application.</p>
                    </div>
                    <div className="rounded-none border border-white bg-white w-1/2 h-34 pl-8 pt-4">
                        <FontAwesomeIcon icon={faPeopleArrows} />
                        <p className='font-bold text-lg'>Alignment Meeting and Proposal Submission</p>
                        <p className='text-sm pt-4'>If your application stands out, we'll invite you <br/>to an alignment meeting. This is an <br/>opportunity to discuss the goals of our EIR<br/> program and explore how your expertise aligns<br/> with the needs of our portfolio companies.</p>
                        <p className='text-sm pt-4'>Following the alignment meeting, submit a<br/> formal proposal outlining your intended <br/>contributions and how you envision adding <br/>significant value to our portfolio companies.</p>
                    </div>
                    <div className="rounded-none border border-white bg-white w-1/2 h-34 pl-8 pt-4">
                        <FontAwesomeIcon icon={faPenToSquare} />
                        <p className='font-bold text-lg'>Negotiation and Agreement</p>
                        <p className='text-sm pt-4'>Upon successful alignment and proposal<br/> review, we'll engage in discussions to finalize<br/> the terms of your EIR role. This includes the<br/> duration, expectations, and any compensation<br/> or equity arrangements.</p>
                        <p className='text-sm pt-4'>Once terms are agreed upon, we'll draft a<br/> formal agreement outlining the specifics of <br/>your EIR engagement, including reporting <br/>structures, responsibilities, and the support/<br/>resources provided by SINC Partners.</p>
                    </div>
                    
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <p className='text-3xl font-bold text-center py-8'>Join Our Entrepreneur In Residence <br/>(EIR) Program</p>
                <p className='text-sm text-center pb-8'>Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and<br/> technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each.</p>
                <div className='flex space-x-8'>
                    <div className="rounded-none border border-white bg-white w-1/2 h-34 pl-8 pt-4">
                        <FontAwesomeIcon icon={faPersonWalkingDashedLineArrowRight} />
                        <p className='font-bold text-lg'>Onboarding and Integration</p>
                        <p className='text-sm pt-4'>Congratulations! As an accepted EIR, you'll <br/>undergo an onboarding process to familiarize <br/>yourself with the SINC Partners ecosystem,<br/> our portfolio companies, and key team<br/> members.</p>
                        <p className='text-sm pt-4'>Facilitated introductions will ensure a seamless<br/> integration between you and relevant portfolio<br/> companies, setting clear expectations for<br/> collaboration.</p>
                    </div>
                    <div className="rounded-none border border-white bg-white w-1/2 h-34 pl-8 pt-4">
                        <FontAwesomeIcon icon={faSquarePhone} />
                        <p className='font-bold text-lg'>Regular Check-ins and Evaluations</p>
                        <p className='text-sm pt-4'>To foster ongoing success, we've established a<br/> system for regular check-ins. These sessions<br/> will allow us to monitor your progress, gather<br/> feedback, and collectively work towards<br/> continuous improvement</p>
                        <p className='text-sm pt-4'>We appreciate your interest in joining our EIR <br/>program and contributing to the vibrant SINC<br/> Partners community. Start your application <br/>process today and be a part of our journey in<br/> shaping the future of innovation.</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        <p className='font-bold text-black my-12 text-center underline underline-offset-4'>Support the Future <FontAwesomeIcon icon={faArrowRight} /></p>
    </div>
  )
}

export default Initiatives