import React, { useState, useEffect } from 'react';
import { Package, Coffee, Zap, Sparkles, Leaf, Snowflake, Shirt, Briefcase, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface ProductCategory {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  images: string[];
}

const Products = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});
  const [isAutoPlaying, setIsAutoPlaying] = useState<{ [key: string]: boolean }>({});

  const productCategories: ProductCategory[] = [
    {
      id: 'snacks',
      title: 'Snack Foods',
      description: 'Crispy, crunchy delights for every craving',
      items: ['Vacuum fried chips', 'Oil fried chips', 'Halwa & Pickles', 'Peanuts & Papad'],
      icon: <Package className="h-8 w-8" />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 hover:bg-orange-100',
      images: [
        'https://ik.imagekit.io/w7nxrdf3j/1.png?updatedAt=1751296027505',
        'https://ik.imagekit.io/w7nxrdf3j/2.png?updatedAt=1751296025115',
        'https://ik.imagekit.io/w7nxrdf3j/4.png?updatedAt=1751296027218',
        'https://ik.imagekit.io/w7nxrdf3j/3.png?updatedAt=1751296027291'
      ]
    },
    {
      id: 'dryfruits',
      title: 'Dry Fruits',
      description: 'Premium quality nuts and dried fruits',
      items: ['Dates', 'Cashew', 'Walnuts', 'Pistachios'],
      icon: <Sparkles className="h-8 w-8" />,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50 hover:bg-amber-100',
      images: [
        'https://ik.imagekit.io/w7nxrdf3j/2(1).png?updatedAt=1751296502810',
        'https://ik.imagekit.io/w7nxrdf3j/3(1).png?updatedAt=1751296505630',
        'https://ik.imagekit.io/w7nxrdf3j/1(1).png?updatedAt=1751296496954',
        'https://ik.imagekit.io/w7nxrdf3j/4(1).png?updatedAt=1751296514607'
      ]
    },
    {
      id: 'sweets',
      title: 'Sweets & Confectionaries',
      description: 'Sweet treats for every celebration',
      items: ['Traditional Sweets', 'Chocolates', 'Choco Wraps', 'Candy'],
      icon: <Zap className="h-8 w-8" />,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50 hover:bg-pink-100',
      images: [
        'https://ik.imagekit.io/w7nxrdf3j/Sweetners/3.png?updatedAt=1751296553450',
        'https://ik.imagekit.io/w7nxrdf3j/Sweetners/4.png?updatedAt=1751296553392',
        'https://ik.imagekit.io/w7nxrdf3j/Sweetners/1.png?updatedAt=1751296555256',
        'https://ik.imagekit.io/w7nxrdf3j/Sweetners/2.png?updatedAt=1751296551498'
      ]
    },
    {
      id: 'beverages',
      title: 'Coffee & Tea',
      description: 'Authentic South Indian flavors',
      items: ['South Indian Filter Coffee', 'Fresh Tea Powders', 'Premium Blends', 'Organic Options'],
      icon: <Coffee className="h-8 w-8" />,
      color: 'text-brown-600',
      bgColor: 'bg-orange-50 hover:bg-orange-100',
      images: [
        'https://ik.imagekit.io/w7nxrdf3j/Coffee/1.png?updatedAt=1751296550818',
        'https://ik.imagekit.io/w7nxrdf3j/Coffee/Untitled-13.png?updatedAt=1751296548258',
        'https://ik.imagekit.io/w7nxrdf3j/Coffee/2.png?updatedAt=1751296549268',
        'https://ik.imagekit.io/w7nxrdf3j/Coffee/4.png?updatedAt=1751296549439'
      ]
    },
    {
      id: 'spices',
      title: 'Spices & Condiments',
      description: 'Aromatic spices for authentic taste',
      items: ['Premium Pepper', 'Cardamom', 'Chilly Powder', 'Masala Powders'],
      icon: <Leaf className="h-8 w-8" />,
      color: 'text-green-600',
      bgColor: 'bg-green-50 hover:bg-green-100',
      images: [
        'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
        'https://images.pexels.com/photos/1340117/pexels-photo-1340117.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
        'https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
        'https://images.pexels.com/photos/1340118/pexels-photo-1340118.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop'
      ]
    },
    {
      id: 'frozen',
      title: 'Frozen Foods',
      description: 'Fresh frozen for convenience',
      items: ['Frozen Fruits', 'Frozen Vegetables', 'French Fries', 'Ready-to-cook'],
      icon: <Snowflake className="h-8 w-8" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 hover:bg-blue-100',
      images: [
        'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
        'https://images.pexels.com/photos/1435905/pexels-photo-1435905.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
        'https://images.pexels.com/photos/1435906/pexels-photo-1435906.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
        'https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop'
      ]
    },
    {
      id: 'textile',
      title: 'Textile (Import & Export)',
      description: 'Wholesale garments and fabric trading',
      items: ['Wholesale Garments', 'Fabric Trading', 'Textile Sourcing', 'Bulk Orders'],
      icon: <Shirt className="h-8 w-8" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 hover:bg-purple-100',
      images: [
        'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
        'https://images.pexels.com/photos/1488464/pexels-photo-1488464.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
        'https://images.pexels.com/photos/1488465/pexels-photo-1488465.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
        'https://images.pexels.com/photos/1488466/pexels-photo-1488466.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop'
      ]
    },
    {
      id: 'corporate',
      title: 'Corporate Bags',
      description: 'Professional bags for corporate needs',
      items: ['Office Bags', 'Conference Kits', 'Back Bags', 'Custom Branding'],
      icon: <Briefcase className="h-8 w-8" />,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 hover:bg-indigo-100',
      images: [
        'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
        'https://images.pexels.com/photos/1152078/pexels-photo-1152078.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
        'https://images.pexels.com/photos/1152079/pexels-photo-1152079.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
        'https://images.pexels.com/photos/1152080/pexels-photo-1152080.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop'
      ]
    }
  ];

  // Initialize current image indices and auto-play states
  useEffect(() => {
    const initialIndices: { [key: string]: number } = {};
    const initialAutoPlay: { [key: string]: boolean } = {};
    productCategories.forEach(category => {
      initialIndices[category.id] = 0;
      initialAutoPlay[category.id] = true;
    });
    setCurrentImageIndex(initialIndices);
    setIsAutoPlaying(initialAutoPlay);
  }, []);

  // Auto-slide images with individual control
  useEffect(() => {
    const intervals: { [key: string]: NodeJS.Timeout } = {};
    
    productCategories.forEach(category => {
      if (isAutoPlaying[category.id]) {
        intervals[category.id] = setInterval(() => {
          setCurrentImageIndex(prev => ({
            ...prev,
            [category.id]: (prev[category.id] + 1) % category.images.length
          }));
        }, 4000); // Change image every 4 seconds
      }
    });

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, [isAutoPlaying, productCategories]);

  const nextImage = (categoryId: string, imagesLength: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [categoryId]: (prev[categoryId] + 1) % imagesLength
    }));
  };

  const prevImage = (categoryId: string, imagesLength: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [categoryId]: (prev[categoryId] - 1 + imagesLength) % imagesLength
    }));
  };

  const toggleAutoPlay = (categoryId: string) => {
    setIsAutoPlaying(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const goToImage = (categoryId: string, imageIndex: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [categoryId]: imageIndex
    }));
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Premium Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our extensive range of high-quality products, carefully selected and 
            sourced to meet your every need
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productCategories.map((category, index) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Enhanced Product Image Carousel */}
              <div className="relative h-56 overflow-hidden">
                {/* Image Container with Smooth Transitions */}
                <div className="relative w-full h-full">
                  {category.images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                        currentImageIndex[category.id] === imageIndex 
                          ? 'opacity-100 scale-100 z-10' 
                          : 'opacity-0 scale-105 z-0'
                      }`}
                    >
                      <img 
                        src={image}
                        alt={`${category.title} ${imageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {/* Individual image overlay effects */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>
                  ))}
                </div>

                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                {/* Navigation Controls */}
                <div className="absolute inset-0 flex items-center justify-between p-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage(category.id, category.images.length);
                    }}
                    className="bg-white/25 backdrop-blur-md hover:bg-white/40 text-white p-2.5 rounded-full transition-all duration-200 transform hover:scale-110 shadow-lg"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage(category.id, category.images.length);
                    }}
                    className="bg-white/25 backdrop-blur-md hover:bg-white/40 text-white p-2.5 rounded-full transition-all duration-200 transform hover:scale-110 shadow-lg"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Auto-play Control */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleAutoPlay(category.id);
                    }}
                    className="bg-black/30 backdrop-blur-md hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200"
                  >
                    {isAutoPlaying[category.id] ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Enhanced Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {category.images.map((_, imageIndex) => (
                    <button
                      key={imageIndex}
                      onClick={(e) => {
                        e.stopPropagation();
                        goToImage(category.id, imageIndex);
                      }}
                      className={`transition-all duration-300 rounded-full ${
                        currentImageIndex[category.id] === imageIndex 
                          ? 'w-8 h-2 bg-white shadow-lg' 
                          : 'w-2 h-2 bg-white/60 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Category Icon with Enhanced Styling */}
                <div className={`absolute top-4 right-4 ${category.color} bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-lg group-hover:scale-110 transition-all duration-300 border border-white/50`}>
                  {category.icon}
                </div>

                {/* Enhanced Image Counter */}
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium">
                  {(currentImageIndex[category.id] || 0) + 1} / {category.images.length}
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
                  <div 
                    className={`h-full ${category.color.replace('text-', 'bg-')} transition-all duration-1000 ease-linear`}
                    style={{ 
                      width: `${((currentImageIndex[category.id] || 0) + 1) / category.images.length * 100}%` 
                    }}
                  ></div>
                </div>
              </div>

              {/* Enhanced Content Section */}
              <div className="p-6 relative">
                {/* Title with Hover Effect */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {category.description}
                </p>

                {/* Enhanced Items List */}
                <ul className="space-y-2.5">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-700 group/item">
                      <div className={`w-2 h-2 rounded-full ${category.color.replace('text-', 'bg-')} mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200`}></div>
                      <span className="group-hover:text-gray-900 transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Enhanced Hover Effect Elements */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${category.color.replace('text-', 'bg-')} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                
                {/* Subtle Corner Accent */}
                <div className={`absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] ${category.color.replace('text-', 'border-t-')} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Featured Products Showcase */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Featured Premium Selection
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Handpicked favorites that showcase our commitment to quality and taste
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Item 1 */}
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop"
                  alt="Premium spice collection"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Authentic Spices</h4>
                  <p className="text-sm opacity-90">Sourced directly from farms</p>
                  <div className="mt-3 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium">Premium Quality</span>
                  </div>
                </div>
                {/* Enhanced floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-yellow-300/70 rounded-full animate-particle-float"></div>
                  <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-orange-300/70 rounded-full animate-particle-float delay-1000"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-red-300/70 rounded-full animate-particle-float delay-2000"></div>
                </div>
              </div>
            </div>

            {/* Featured Item 2 */}
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop"
                  alt="Premium dry fruits"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Premium Dry Fruits</h4>
                  <p className="text-sm opacity-90">Carefully selected & packed</p>
                  <div className="mt-3 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium">Nutrient Rich</span>
                  </div>
                </div>
                {/* Enhanced floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-amber-300/70 rounded-full animate-particle-float delay-500"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-yellow-300/70 rounded-full animate-particle-float delay-1500"></div>
                  <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-orange-300/70 rounded-full animate-particle-float delay-2500"></div>
                </div>
              </div>
            </div>

            {/* Featured Item 3 */}
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop"
                  alt="South Indian coffee"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Filter Coffee</h4>
                  <p className="text-sm opacity-90">Traditional South Indian blend</p>
                  <div className="mt-3 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium">Authentic Taste</span>
                  </div>
                </div>
                {/* Enhanced floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-orange-300/70 rounded-full animate-particle-float delay-750"></div>
                  <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-amber-300/70 rounded-full animate-particle-float delay-2000"></div>
                  <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-yellow-300/70 rounded-full animate-particle-float delay-3000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-emerald-50 via-white to-amber-50 p-8 rounded-2xl border border-emerald-100 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Looking for bulk orders or custom requirements?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We specialize in B2B solutions and can customize orders to meet your specific needs. 
            Get in touch for competitive pricing and personalized service.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-full hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative">Get Custom Quote</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;