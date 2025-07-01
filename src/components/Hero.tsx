import React, { useEffect, useState } from 'react';
import { Star, Shield, Heart, ArrowRight, Sparkles, Award } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <img 
          src="https://res.cloudinary.com/dmah4bytn/image/upload/v1751191954/11-2_ulpbvh.webp"
          alt="Premium food products and spices"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        
        {/* Layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-emerald-900/40 to-amber-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-8 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-emerald-600/15 rounded-full backdrop-blur-sm animate-float-slow"></div>
        <div className="absolute bottom-24 right-12 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-orange-500/15 rounded-full backdrop-blur-sm animate-float-reverse"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-gradient-to-br from-emerald-300/25 to-teal-400/20 rounded-full backdrop-blur-sm animate-float-fast"></div>
        
        {/* Sparkle effects */}
        <div className="absolute top-20 left-1/4 animate-twinkle">
          <Sparkles className="h-4 w-4 text-emerald-300/50" />
        </div>
        <div className="absolute bottom-28 right-1/3 animate-twinkle delay-2000">
          <Sparkles className="h-3 w-3 text-amber-300/50" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-32">
        <div className={`max-w-4xl mx-auto transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/25 to-amber-500/25 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <Award className="h-4 w-4 text-emerald-300" />
            <span className="text-emerald-100 font-medium text-xs sm:text-sm tracking-wide">PREMIUM QUALITY</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 leading-tight">
            <span className="block animate-slide-in-left drop-shadow-2xl">Welcome to</span>
            <span className="block bg-gradient-to-r from-emerald-300 via-emerald-400 to-amber-400 bg-clip-text text-transparent animate-slide-in-right animate-text-shimmer bg-300% drop-shadow-2xl">
              Prajatha
            </span>
          </h1>
          
          {/* Simplified Subtitle */}
          <div className="relative mb-6">
            <p className="text-xl sm:text-2xl lg:text-3xl text-transparent bg-gradient-to-r from-emerald-200 to-amber-200 bg-clip-text font-bold mb-2 animate-fade-in-up delay-300">
              Pure Taste, Premium Quality
            </p>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full animate-expand-width"></div>
          </div>
          
          {/* Concise Description */}
          <div className="mb-8 animate-fade-in-up delay-500">
            <p className="text-base sm:text-lg text-gray-100 mb-3 max-w-3xl mx-auto leading-relaxed">
              From <span className="font-semibold text-emerald-300">artisan snacks</span> to <span className="font-semibold text-amber-300">premium spices</span> – 
              handpicked quality for every taste.
            </p>
            <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-300 to-amber-300 bg-clip-text text-transparent">
              Trusted. Authentic. Delicious.
            </p>
          </div>

          {/* Simplified Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-8 animate-fade-in-up delay-700">
            {[
              { icon: Shield, text: "Premium", color: "from-emerald-400 to-emerald-600" },
              { icon: Heart, text: "Trusted", color: "from-red-400 to-pink-500" },
              { icon: Star, text: "Authentic", color: "from-amber-400 to-yellow-500" }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-md border border-white/25 px-3 sm:px-4 py-2 sm:py-3 rounded-xl hover:bg-white/25 transition-all duration-300 transform hover:scale-105">
                  <div className={`p-1.5 rounded-full bg-gradient-to-r ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </div>
                  <span className="font-semibold text-white text-sm sm:text-base">{item.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Streamlined CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-up delay-1000">
            <button
              onClick={scrollToProducts}
              className="group relative bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:from-emerald-600 hover:to-emerald-800 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-emerald-500/50 overflow-hidden w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative flex items-center justify-center space-x-2">
                <span>Explore Products</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
            
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group bg-white/15 backdrop-blur-md text-white border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:bg-white/25 hover:border-white/50 transition-all duration-500 transform hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              <div className="flex items-center justify-center space-x-2">
                <span>Get Quote</span>
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce-slow z-30">
        <div className="flex flex-col items-center space-y-1">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
            <div className="w-1 h-2 sm:w-1 sm:h-3 bg-gradient-to-b from-emerald-400 to-amber-400 rounded-full mt-1.5 animate-scroll-indicator"></div>
          </div>
          <span className="text-white/80 text-xs font-medium tracking-wider">SCROLL</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;