const SectionTile = ({ heading, subHeading, width="md:w-5/12" }) => {
  return (
    <div className={`mx-auto text-center my-20 px-2 lg:px-0 ${width}`}>
      <p className="text-yellow-600 mb-2 italic">{subHeading}</p>
      <h3 className="text-3xl uppercase border-y-4 border-gray-400 py-4">{heading}</h3>
    </div>
  )
};

export default SectionTile;


