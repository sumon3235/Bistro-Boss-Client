import featuredBg from "../assets/home/featured.jpg";
import featuredImg from "../assets/home/featured.jpg";
import SectionTile from "../Components/Shared/SectionTile";

const Featured = () => {
  return (
    <section className="px-2 md:px-3.5">
    <section
      className="relative bg-cover bg-center py-20 px-6 max-w-7xl mx-auto rounded-xl my-20"
      style={{ backgroundImage: `url(${featuredBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 rounded-xl" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto">
        <SectionTile
          subHeading={"---Check it out---"}
          heading={"FROM OUR MENU"}
        />
        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <img
            src={featuredImg}
            alt="Featured food"
            className="w-full md:w-[420px] h-[280px] object-cover shrink-0 rounded-lg"
          />

          {/* Text */}
          <div className="text-white">
            <p className="text-sm text-gray-300 mb-2">March 20, 2023</p>
            <h3 className="text-xl font-bold uppercase mb-3">
              Where Can I Get Some?
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Indulge in our carefully crafted dishes made with the freshest
              ingredients. From sizzling grills to delicate desserts, our menu
              offers something extraordinary for every palate. Come taste the
              passion we put into every plate.
            </p>
            <button className="btn bg-orange-500 hover:bg-orange-700 border-none">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
};

export default Featured;
