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
      bgColor: 'bg-orange-50 hover:bg-orange-100'
    },
    {
      id: 'dryfruits',
      title: 'Dry Fruits',
      description: 'Premium quality nuts and dried fruits',
      items: ['Dates', 'Cashew', 'Walnuts', 'Pistachios'],
      icon: <Sparkles className="h-8 w-8" />,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50 hover:bg-amber-100'
    },
    {
      id: 'sweets',
      title: 'Sweets & Confectionaries',
      description: 'Sweet treats for every celebration',
      items: ['Traditional Sweets', 'Chocolates', 'Choco Wraps', 'Candy'],
      icon: <Zap className="h-8 w-8" />,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50 hover:bg-pink-100'
    },
    {
      id: 'beverages',
      title: 'Coffee & Tea',
      description: 'Authentic South Indian flavors',
      items: ['South Indian Filter Coffee', 'Fresh Tea Powders', 'Premium Blends', 'Organic Options'],
      icon: <Coffee className="h-8 w-8" />,
      color: 'text-brown-600',
      bgColor: 'bg-orange-50 hover:bg-orange-100'
    },
    {
      id: 'spices',
      title: 'Spices & Condiments',
      description: 'Aromatic spices for authentic taste',
      items: ['Premium Pepper', 'Cardamom', 'Chilly Powder', 'Masala Powders'],
      icon: <Leaf className="h-8 w-8" />,
      color: 'text-green-600',
      bgColor: 'bg-green-50 hover:bg-green-100'
    },
    {
      id: 'frozen',
      title: 'Frozen Foods',
      description: 'Fresh frozen for convenience',
      items: ['Frozen Fruits', 'Frozen Vegetables', 'French Fries', 'Ready-to-cook'],
      icon: <Snowflake className="h-8 w-8" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 hover:bg-blue-100'
    },
    {
      id: 'textile',
      title: 'Textile (Import & Export)',
      description: 'Wholesale garments and fabric trading',
      items: ['Wholesale Garments', 'Fabric Trading', 'Textile Sourcing', 'Bulk Orders'],
      icon: <Shirt className="h-8 w-8" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 hover:bg-purple-100'
    },
    {
      id: 'corporate',
      title: 'Corporate Bags',
      description: 'Professional bags for corporate needs',
      items: ['Office Bags', 'Conference Kits', 'Back Bags', 'Custom Branding'],
      icon: <Briefcase className="h-8 w-8" />,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 hover:bg-indigo-100'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productCategories.map((category, index) => (
            <div
              key={category.id}
              className={`${category.bgColor} p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer group`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm">
                {category.description}
              </p>

              {/* Items List */}
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-sm text-gray-700">
                    <div className={`w-2 h-2 rounded-full ${category.color.replace('text-', 'bg-')} mr-3`}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Looking for bulk orders or custom requirements?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors duration-200 font-semibold text-lg"
          >
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;