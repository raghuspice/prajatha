import React from 'react';
import { Star, Shield, Heart } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-amber-50"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-100 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-amber-100 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-emerald-200 rounded-full opacity-50 animate-pulse delay-500"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
              Prjatha
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-4 font-medium">
            A World of Purity and Taste!
          </p>
          
          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            From crunchy snacks to premium dry fruits, rich spices to frozen freshness – 
            explore our wide range of handpicked, high-quality products. 
            <span className="font-semibold text-emerald-700"> Trusted for quality. Loved for taste.</span>
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
            <div className="flex items-center space-x-2 text-gray-600">
              <Shield className="h-5 w-5 text-emerald-600" />
              <span className="font-medium">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Heart className="h-5 w-5 text-emerald-600" />
              <span className="font-medium">Trusted Brand</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Star className="h-5 w-5 text-emerald-600" />
              <span className="font-medium">100% Authentic</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToProducts}
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Our Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;