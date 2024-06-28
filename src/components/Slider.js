import React from "react";
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "/node_modules/swiper/swiper-bundle.min.css";


const Slider = () => {
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
          <div className="flex  w-full h-98 bg-white">
            <div className="w-1/2 justify-items-center flex flex-col m-36">
              <p className="text-2xl text-black font-bold">We are big on these 3 things;</p>
              <h3 className="text-lg py-4">✓ Service Incubation & Ecosystem Advocacy <br /> ✓ Building SAAS & Marketing Tech Platforms <br /> ✓Institutional Innovations.
              </h3>
              <span className="w-[163px] h-[49px] py-[15px] px-[32px] gap-[10px] rounded-full bg-black border border-black">
                <p className="text-xs text-white py-0 font-bold">SINC With Us</p>
              </span>
            </div>
              <div className="flex flex-col w-[167px] h-[263px] absolute top-[118.5px] left-[590.5px] gap-[16px] ml-">
                <span className="w-[167px] h-[77px] p-[12px_32px] gap-[8px] rounded-full border bg-custom-gradient opacity-80">
                  <p className="text-xl text-white py-0 font-bold p-4">SIP 1.0 <br/></p>
                  <h4 className="text-xs text-white px-4">2024 Cohort</h4>
                </span>
                <span className="w-[167px] h-[77px] p-[12px_32px] gap-[8px] rounded-full border bg-custom-gradient opacity-80">
                  <p className="text-xl text-white py-0 font-bold p-4">40+</p>
                  <h4 className="text-xs text-white px-1">To Be Incubated</h4>
                </span>
                <span className="w-[167px] h-[77px] p-[12px_32px] gap-[8px] rounded-full border bg-custom-gradient opacity-80">
                  <p className="text-xl text-white py-0 font-bold p-4">$1M+</p>
                  <h4 className="text-xs text-white px-2">To Be Invested</h4>
                </span>
              </div>
              <img  className="w-1/2 border-2 border-gray-300" src="/firstimg.jpeg" alt="students-studying-together-medium-shot"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-full h-98 bg-white">
            <div className="w-1/2 justify-items-center flex flex-col m-36">
                <p className="text-2xl text-black font-bold">SINC Partners is a service incubation company</p>
                <h3 className="text-lg py-4">
                  Connecting experts in product development
                  <br /> and growth marketing willing to their <br />
                  services to amazing startups in <br />
                  exchange for minute equity (usually 0.5% to 2%).
                </h3>
                <span className="w-[163px] h-[49px] py-[15px] px-[32px] gap-[10px] rounded-full bg-black border border-black">
                  <p className="text-xs text-white py-0 font-bold">SINC With Us</p>
                </span>
            </div>
              <img className="w-1/2 border-2 border-gray-300" src="/secondimg.jpeg" alt="istockphoto-1344871734-612x612" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-full h-98 bg-white">
            <div className="w-1/2 justify-items-center flex flex-col m-36">
              <p className="text-2xl text-black font-bold">Come with an idea, leave with a company.</p>
                <h3 className="text-lg py-4">
                  You, alongside seasoned service partners and investors,
                  <br /> expedite the growth and
                  <br /> market entry of your startup.
                  <br />
                </h3>
              <span className="w-[163px] h-[49px] py-[15px] px-[32px] gap-[10px] rounded-full bg-black border border-black">
                <p className="text-xs text-white py-0 font-bold">SINC With Us</p>
              </span>
            </div>
              <img className="w-1/2 border-2 border-gray-300" src="/thirdimg1.jpeg" alt="portrait-handsome-bearded-male" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
