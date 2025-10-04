const HeroBanner = ({label, title, description, buttonText, imageUrl}) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+919591009606";
    const message = "Hi! I'm interested in talking to an expert about course selection.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

   return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div 
          className="bg-black rounded-2xl overflow-hidden text-white min-h-[400px] md:min-h-[500px] bg-cover bg-center relative flex items-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="relative z-10 p-8 md:p-12 max-w-2xl">
            {label && (
              <span className="inline-block bg-[#e0f7ea] text-[#20c062] text-xs font-semibold py-2 px-4 rounded-full mb-6 uppercase">
                {label}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-8 opacity-90 max-w-lg">
              {description}
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center bg-[#16A34A] text-white text-sm md:text-base font-semibold py-3 px-8 rounded-lg hover:bg-[#1ba755] transition-colors cursor-pointer"
            >
              {buttonText}
              <span className="ml-2 text-lg">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner