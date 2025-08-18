const HeroImage = ({ imageUrl, title, textPosition = 'center' }) => {

  const words = title.split(/\s+/).filter(word => word.length > 0);
  
  return (
    <div className="relative h-screen w-full">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0  bg-gradient-to-b from-black/40 via-black/40 to-transparent transition-opacity opacity-100 duration-300"></div>
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

      <div className={`absolute inset-0 flex items-${textPosition} justify-center`}>
        <div className="text-center px-4 max-w-4xl mx-auto transition-all duration-500 transform group-hover:-translate-y-2">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-xl hover:drop-shadow-2xl transition-all">
            {words.length > 1 ? (
              <>
                <span className="font-normal">{words[0]}</span>{' '}
                <span>{words.slice(1).join(' ')}</span>
              </>
            ) : (
              title
            )}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;