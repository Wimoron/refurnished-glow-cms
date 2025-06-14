
import React from 'react';
import { CheckCircle, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '10,000+', label: 'Laptops Refurbished', icon: CheckCircle },
    { number: '50,000+', label: 'Happy Customers', icon: Users },
    { number: '5 Years', label: 'Industry Experience', icon: Award },
    { number: '25', label: 'Countries Served', icon: Globe },
  ];

  const process = [
    {
      step: '01',
      title: 'Quality Assessment',
      description: 'Thorough inspection of hardware and software components'
    },
    {
      step: '02', 
      title: 'Professional Cleaning',
      description: 'Deep cleaning and sanitization of all components'
    },
    {
      step: '03',
      title: 'Hardware Restoration',
      description: 'Repair and replacement of any faulty components'
    },
    {
      step: '04',
      title: 'Software Installation',
      description: 'Fresh OS installation and essential software setup'
    },
    {
      step: '05',
      title: 'Quality Testing',
      description: 'Comprehensive testing to ensure optimal performance'
    },
    {
      step: '06',
      title: 'Final Certification',
      description: 'Quality certification and warranty activation'
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">RefurbishedLaptops</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We transform used laptops into premium devices through our meticulous refurbishment process
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Our Refurbishment Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:border-blue-500/50">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                      {item.step}
                    </div>
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
