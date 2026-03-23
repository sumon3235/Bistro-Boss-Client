const SectionTile = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-20 px-2 lg:px-0">
      <p className="text-yellow-600 mb-2 italic">--- {subHeading} ---</p>
      <h3 className="text-3xl uppercase border-y-4 border-gray-400 py-4">{heading}</h3>
    </div>
  );
};

export default SectionTile;
