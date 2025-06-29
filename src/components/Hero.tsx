import React from 'react';
import { Star, Shield, Heart, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Premium food ingredients and spices"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-amber-900/20"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-400/20 rounded-full backdrop-blur-sm animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-amber-400/20 rounded-full backdrop-blur-sm animate-pulse delay-1000"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-emerald-300/30 rounded-full backdrop-blur-sm animate-pulse delay-500"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
              Prajatha
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl text-emerald-100 mb-4 font-medium drop-shadow-lg">
            A World of Purity and Taste!
          </p>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            From crunchy snacks to premium dry fruits, rich spices to frozen freshness – 
            explore our wide range of handpicked, high-quality products. 
            <span className="font-semibold text-emerald-300"> Trusted for quality. Loved for taste.</span>
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
            <div className="flex items-center space-x-2 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="h-5 w-5 text-emerald-400" />
              <span className="font-medium">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Heart className="h-5 w-5 text-emerald-400" />
              <span className="font-medium">Trusted Brand</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="h-5 w-5 text-emerald-400" />
              <span className="font-medium">100% Authentic</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToProducts}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25 flex items-center space-x-2"
            >
              <span>Explore Our Products</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;