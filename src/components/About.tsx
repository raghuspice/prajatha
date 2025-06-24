import React from 'react';
import { Award, Users, Globe, CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Premium Quality',
      description: 'Handpicked products with strict quality control'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Customer First',
      description: 'Building long-term relationships based on trust'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Global Sourcing',
      description: 'Clean sourcing from trusted suppliers worldwide'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Satisfaction Guaranteed',
      description: 'Your satisfaction is our highest priority'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              About Prjatha
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With a vision to offer premium food and lifestyle products under one roof, 
              we cater to both retail and B2B customers. Our expertise spans across snacks, 
              dry fruits, spices, sweets, frozen items, and now even textiles and corporate gifting.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe in clean sourcing, strict quality control, and building long-term 
              relationships based on trust and satisfaction. Join us in our journey to deliver 
              excellence, whether it's a sweet treat, a cup of tea, or a corporate order for 
              bags or bulk products.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats/Visual */}
          <div className="bg-gradient-to-br from-emerald-50 to-amber-50 p-8 rounded-2xl">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Premium Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">1000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">8+</div>
                <div className="text-sm text-gray-600">Product Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Customer Support</div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-sm text-gray-600">
                To bring you the best of taste, tradition, and quality while maintaining 
                the highest standards of service and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;