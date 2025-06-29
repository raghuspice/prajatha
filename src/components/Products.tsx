import React from 'react';
import { Package, Coffee, Zap, Sparkles, Leaf, Snowflake, Shirt, Briefcase } from 'lucide-react';

interface ProductCategory {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  image: string;
}

const Products = () => {
  const productCategories: ProductCategory[] = [
    {
      id: 'snacks',
      title: 'Snack Foods',
      description: 'Crispy, crunchy delights for every craving',
      items: ['Vacuum fried chips', 'Oil fried chips', 'Halwa & Pickles', 'Peanuts & Papad'],
      icon: <Package className="h-8 w-8" />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 hover:bg-orange-100',
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 'dryfruits',
      title: 'Dry Fruits',
      description: 'Premium quality nuts and dried fruits',
      items: ['Dates', 'Cashew', 'Walnuts', 'Pistachios'],
      icon: <Sparkles className="h-8 w-8" />,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50 hover:bg-amber-100',
      image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 'sweets',
      title: 'Sweets & Confectionaries',
      description: 'Sweet treats for every celebration',
      items: ['Traditional Sweets', 'Chocolates', 'Choco Wraps', 'Candy'],
      icon: <Zap className="h-8 w-8" />,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50 hover:bg-pink-100',
      image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 'beverages',
      title: 'Coffee & Tea',
      description: 'Authentic South Indian flavors',
      items: ['South Indian Filter Coffee', 'Fresh Tea Powders', 'Premium Blends', 'Organic Options'],
      icon: <Coffee className="h-8 w-8" />,
      color: 'text-brown-600',
      bgColor: 'bg-orange-50 hover:bg-orange-100',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 'spices',
      title: 'Spices & Condiments',
      description: 'Aromatic spices for authentic taste',
      items: ['Premium Pepper', 'Cardamom', 'Chilly Powder', 'Masala Powders'],
      icon: <Leaf className="h-8 w-8" />,
      color: 'text-green-600',
      bgColor: 'bg-green-50 hover:bg-green-100',
      image: 'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 'frozen',
      title: 'Frozen Foods',
      description: 'Fresh frozen for convenience',
      items: ['Frozen Fruits', 'Frozen Vegetables', 'French Fries', 'Ready-to-cook'],
      icon: <Snowflake className="h-8 w-8" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 hover:bg-blue-100',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 'textile',
      title: 'Textile (Import & Export)',
      description: 'Wholesale garments and fabric trading',
      items: ['Wholesale Garments', 'Fabric Trading', 'Textile Sourcing', 'Bulk Orders'],
      icon: <Shirt className="h-8 w-8" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 hover:bg-purple-100',
      image: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 'corporate',
      title: 'Corporate Bags',
      description: 'Professional bags for corporate needs',
      items: ['Office Bags', 'Conference Kits', 'Back Bags', 'Custom Branding'],
      icon: <Briefcase className="h-8 w-8" />,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 hover:bg-indigo-100',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

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
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Icon Overlay */}
                <div className={`absolute top-4 right-4 ${category.color} bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {category.description}
                </p>

                {/* Items List */}
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-700">
                      <div className={`w-2 h-2 rounded-full ${category.color.replace('text-', 'bg-')} mr-3 flex-shrink-0`}></div>
                      <span className="group-hover:text-gray-900 transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${category.color.replace('text-', 'bg-')} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products Showcase */}
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
              <img 
                src="https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Premium spice collection"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Authentic Spices</h4>
                <p className="text-sm opacity-90">Sourced directly from farms</p>
              </div>
            </div>

            {/* Featured Item 2 */}
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Premium dry fruits"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Premium Dry Fruits</h4>
                <p className="text-sm opacity-90">Carefully selected & packed</p>
              </div>
            </div>

            {/* Featured Item 3 */}
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="South Indian coffee"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Filter Coffee</h4>
                <p className="text-sm opacity-90">Traditional South Indian blend</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-emerald-50 to-amber-50 p-8 rounded-2xl">
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
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-full hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;