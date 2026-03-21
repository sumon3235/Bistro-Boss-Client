import chefImg from "../assets/home/chef-service.jpg";

const ChefService = () => {
  return (
    <div className="my-20 max-w-7xl mx-auto px-2 md:px-3">
      <div
        className="bg-cover bg-center p-10 md:p-24 rounded-xl"
        style={{ backgroundImage: `url(${chefImg})` }}
      >
        <div className="bg-black/60 text-white text-center p-8 md:p-16 shadow-2xl rounded-xl">
          <h2 className="text-4xl uppercase mb-4 font-serif tracking-widest">
            Bistro Boss
          </h2>
          <p className="max-w-2xl mx-auto leading-7">
            Experience the perfect blend of tradition and innovation. At Bistro
            Boss, we take pride in serving authentic flavors crafted with the
            finest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefService;
