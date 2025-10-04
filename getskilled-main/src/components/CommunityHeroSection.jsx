import React from 'react'

const CommunityHeroSection = () => {
  return (
    <section className="h-[40rem] bg-[url('../assets/Illustration.png')] bg-no-repeat bg-center flex items-center justify-center text-center px-4 md:px-8 mt-10 mb-28">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Learning Alone is Tough. Let's <span className="text-[#3cbf4b]">Get Skilled</span> Together
        </h1>
        <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Join the GetSkilled WhatsApp Community — your go-to space for peer support, mentor tips, project collabs, and
          early access to opportunities.
        </p>
        <a
          href="https://wa.me/message/7FXO6JIJBMJZN1"
          className="inline-block bg-[#16A34A] text-white py-3 px-6 rounded-lg font-bold hover:bg-[#149443] transition-colors"
        >
          Join the WhatsApp Community →
        </a>
      </div>
    </section>
  );
}

export default CommunityHeroSection

