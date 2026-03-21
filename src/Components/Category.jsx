import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";
import SectionTile from "./Shared/SectionTile";

const Category = () => {
  return (
    <section className="my-24 max-w-7xl mx-auto px-2 md:px-3">
      {/* Section Title */}
     <SectionTile
     subHeading={'"From 11:00am to 10:00pm"'} heading={'Order Online'}> 
     </SectionTile>

      {/* Swiper */}
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },

          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper max-w-7xl mx-auto my-16 px-4 gap-3 px-0.5"
      >
        <SwiperSlide>
          <img src={slide1} className="w-full rounded-lg" alt="" />
          <h3 className="text-xl md:text-3xl uppercase text-center -mt-20 text-white shadow-sm drop-shadow-lg">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} className="w-full rounded-lg" alt="" />
          <h3 className="text-xl md:text-4xl uppercase text-center -mt-20 text-white shadow-sm drop-shadow-lg">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} className="w-full rounded-lg" alt="" />
          <h3 className="text-xl md:text-4xl uppercase text-center -mt-20 text-white shadow-sm drop-shadow-lg">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} className="w-full rounded-lg" alt="" />
          <h3 className="text-xl md:text-4xl uppercase text-center -mt-20 text-white shadow-sm drop-shadow-lg">
            Desert
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} className="w-full rounded-lg" alt="" />
          <h3 className="text-xl md:text-4xl uppercase text-center -mt-20 text-white shadow-sm">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
