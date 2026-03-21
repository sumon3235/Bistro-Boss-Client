const ChefMenuItem = ({ item }) => {
  const { name, image, recipe } = item;

  return (
    <div className="w-full max-w-[370px] mx-auto bg-[#F3F3F3] border border-[#E8E8E8] rounded-lg hover:scale-105 transition-all duration-500 cursor-pointer">
      <figure>
        <img src={image} alt={name} className="w-full h-60 object-cover rounded-lg" />
      </figure>

      <div className="flex flex-col items-center text-center px-8 py-7 gap-3">
        <h2 className="text-xl font-semibold text-[#151515] uppercase tracking-wider">
          {name}
        </h2>

        <p className="text-[#555] text-sm lg:leading-relaxed">{recipe}</p>

        <button className="btn bg-orange-500 hover:bg-orange-700 border-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ChefMenuItem;
