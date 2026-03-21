const MenuItem = ({ item }) => {
  const { image, name, price, recipe } = item;

  return (
    <div>
      <div className="flex items-start gap-4 p-5">
        {/* Image */}
        <img
          style={{ borderRadius: "0px 200px 200px 200px" }}
          src={image}
          alt={name}
          className="h-16 object-cover shrink-0 bg-[#dfc8be] w-26 rounded-r-full rounded-b-full"
        />
        {/* Info */}
        <div className="flex-1">
          <div className="flex items-baseline gap-2 mb-1.5">
            <span className="text-[13px] font-bold tracking-wide text-gray-400 uppercase font-sans">
              {name}
            </span>
            <span className="flex-1 border-b border-dashed border-[#c8a89a] mx-1" />
            <span className="text-[13px] font-bold text-[#c4822a] font-sans whitespace-nowrap">
              ${price}
            </span>
          </div>
          <p className="text-[12px] text-[#9a8078] leading-relaxed italic">
            {recipe}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
