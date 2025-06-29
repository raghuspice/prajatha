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
      {/* Dynamic Background with Jackfruit Snacks and Dates */}
      <div className="absolute inset-0">
        {/* Primary Background Image - Jackfruit and Dates */}
        <img 
          src="https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Premium jackfruit snacks and dates"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        
        {/* Layered Gradient Overlays for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-emerald-900/40 to-amber-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-emerald-500/5 to-transparent"></div>
      </div>
      
      {/* Floating Animated Elements - Repositioned to avoid overlap */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs - repositioned */}
        <div className="absolute top-16 left-8 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-emerald-600/15 rounded-full backdrop-blur-sm animate-float-slow shadow-xl"></div>
        <div className="absolute bottom-24 right-12 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-500/15 rounded-full backdrop-blur-sm animate-float-reverse shadow-xl"></div>
        <div className="absolute top-32 right-16 w-20 h-20 bg-gradient-to-br from-emerald-300/25 to-teal-400/20 rounded-full backdrop-blur-sm animate-float-fast shadow-lg"></div>
        <div className="absolute bottom-16 left-16 w-16 h-16 bg-gradient-to-br from-yellow-400/25 to-amber-500/20 rounded-full backdrop-blur-sm animate-float-slow shadow-lg"></div>
        
        {/* Sparkle effects - repositioned */}
        <div className="absolute top-20 left-1/4 animate-twinkle">
          <Sparkles className="h-5 w-5 text-emerald-300/50" />
        </div>
        <div className="absolute top-28 right-1/3 animate-twinkle delay-1000">
          <Sparkles className="h-4 w-4 text-amber-300/50" />
        </div>
        <div className="absolute bottom-28 left-1/3 animate-twinkle delay-2000">
          <Sparkles className="h-4 w-4 text-emerald-400/50" />
        </div>
      </div>

      {/* Main Content - Improved spacing and z-index */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-32">
        <div className={`max-w-5xl mx-auto transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/25 to-amber-500/25 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8 animate-fade-in-up shadow-lg">
            <Award className="h-5 w-5 text-emerald-300" />
            <span className="text-emerald-100 font-medium text-sm tracking-wide">PREMIUM QUALITY SINCE 2020</span>
          </div>

          {/* Main Heading with Enhanced Typography */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-tight">
            <span className="block animate-slide-in-left drop-shadow-2xl">Welcome to</span>
            <span className="block bg-gradient-to-r from-emerald-300 via-emerald-400 to-amber-400 bg-clip-text text-transparent animate-slide-in-right animate-text-shimmer bg-300% drop-shadow-2xl">
              Prajatha
            </span>
          </h1>
          
          {/* Enhanced Subtitle */}
          <div className="relative mb-8">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-transparent bg-gradient-to-r from-emerald-200 to-amber-200 bg-clip-text font-bold mb-3 animate-fade-in-up delay-300 drop-shadow-lg">
              A World of Purity and Taste!
            </p>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full animate-expand-width"></div>
          </div>
          
          {/* Enhanced Description */}
          <div className="mb-10 animate-fade-in-up delay-500">
            <p className="text-lg sm:text-xl text-gray-100 mb-4 max-w-4xl mx-auto leading-relaxed font-light">
              From <span className="font-semibold text-emerald-300">crunchy jackfruit snacks</span> to <span className="font-semibold text-amber-300">premium dates</span>, 
              <span className="font-semibold text-emerald-300"> aromatic spices</span> to <span className="font-semibold text-blue-300">frozen freshness</span> – 
              explore our wide range of handpicked, high-quality products.
            </p>
            <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-300 to-amber-300 bg-clip-text text-transparent drop-shadow-lg">
              Trusted for quality. Loved for taste.
            </p>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-10 animate-fade-in-up delay-700">
            {[
              { icon: Shield, text: "Premium Quality", color: "from-emerald-400 to-emerald-600" },
              { icon: Heart, text: "Trusted Brand", color: "from-red-400 to-pink-500" },
              { icon: Star, text: "100% Authentic", color: "from-amber-400 to-yellow-500" }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-md border border-white/25 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl hover:bg-white/25 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <div className={`p-2 rounded-full bg-gradient-to-r ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <span className="font-semibold text-white text-sm sm:text-lg">{item.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up delay-1000">
            <button
              onClick={scrollToProducts}
              className="group relative bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold hover:from-emerald-600 hover:to-emerald-800 transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-emerald-500/50 overflow-hidden w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative flex items-center justify-center space-x-3">
                <span>Explore Our Products</span>
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </button>
            
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group bg-white/15 backdrop-blur-md text-white border-2 border-white/30 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold hover:bg-white/25 hover:border-white/50 transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-2xl w-full sm:w-auto"
            >
              <div className="flex items-center justify-center space-x-3">
                <span>Get Custom Quote</span>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - Repositioned to avoid overlap */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce-slow z-30">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10 shadow-lg">
            <div className="w-1 h-3 sm:w-1.5 sm:h-4 bg-gradient-to-b from-emerald-400 to-amber-400 rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
          <span className="text-white/80 text-xs sm:text-sm font-medium tracking-wider">SCROLL</span>
        </div>
      </div>

      {/* Particle Effect Overlay - Reduced opacity to avoid distraction */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-emerald-300/60 rounded-full animate-particle-float"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-amber-300/60 rounded-full animate-particle-float delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-emerald-400/60 rounded-full animate-particle-float delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-yellow-300/60 rounded-full animate-particle-float delay-3000"></div>
      </div>
    </section>
  );
};

export default Hero;