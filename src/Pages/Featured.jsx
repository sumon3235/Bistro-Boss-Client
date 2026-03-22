import featuredBg from "../assets/home/featured.jpg";
import featuredImg from "../assets/home/featured.jpg";
import SectionTile from "../Components/Shared/SectionTile";

const Featured = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 my-20">
     
      <div 
        className="relative bg-cover bg-center parallax-bg py-20 px-6 max-w-7xl mx-auto rounded-xl overflow-hidden"
        style={{ backgroundImage: `url(${featuredBg})` }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-5xl mx-auto z-10">
          <SectionTile
            subHeading={"---Check it out---"}
            heading={"FROM OUR MENU"}
          />
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-10">
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src={featuredImg}
                alt="Featured food"
                className="w-full max-w-[400px] h-auto md:h-[280px] object-cover rounded-lg shadow-2xl"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
              <p className="text-base md:text-lg text-gray-300 mb-2">March 22, 2026</p>
              <h3 className="text-xl md:text-2xl font-bold uppercase mb-4">
                Where Can I Get Some?
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                Indulge in our carefully crafted dishes made with the freshest
                ingredients. From sizzling grills to delicate desserts, our menu
                offers something extraordinary for every palate.
              </p>
              <button className="btn bg-orange-500 border-none hover:bg-orange-600">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;