import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SectionTile from "../Components/Shared/SectionTitle";


const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="py-16 px-6 max-w-[1350px] mx-auto">
      {/* Title Section */}
      <SectionTile
        subHeading={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      />

      <Swiper
        loop={reviews.length > 2}
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={24}
        breakpoints={{ 768: { slidesPerView: 2 } }}
        className="mySwiper !px-3"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="p-8 mb-10 border border-gray-300 rounded-lg">
              <Rating
                value={review.rating}
                readOnly
                style={{ maxWidth: 120 }}
              />

              <p className="text-white text-sm leading-relaxed my-4">
                {review.details}
              </p>

              <h3 className="text-lg font-semibold text-orange-600 text-center">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
