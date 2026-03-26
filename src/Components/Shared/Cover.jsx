
const Cover = ({ img, title, subTitle, isParalax = false }) => {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <div
        className={`hero h-[600px] md:h-[700px] bg-cover bg-center relative flex items-center justify-center 
        ${isParalax ? "parallax-bg" : ""}`}
        style={{ backgroundImage: `url('${img}')` }}
      >
        {/* Overlay and Content */}
        <div className="hero-content text-center text-white px-4">
          <div className="py-10 px-10 md:px-32 lg:px-60 bg-black/60 rounded-lg">
            <h1 className="text-4xl md:text-5xlxl font-bold uppercase tracking-widest mb-4">
              {title}
            </h1>
            <p className="text-sm md:text-base tracking-widest uppercase">
              {subTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;