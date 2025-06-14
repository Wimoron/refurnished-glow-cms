import React from 'react';
import { Award, Users, Globe, Target } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  const achievements = [
    { icon: Award, title: '10+ Years Experience', description: 'Leading the tech refurbishment industry' },
    { icon: Users, title: '50,000+ Customers', description: 'Trusted by businesses worldwide' },
    { icon: Globe, title: '25 Countries', description: 'Global reach and impact' },
    { icon: Target, title: 'Sustainability Focus', description: 'Reducing electronic waste' },
  ];

  return (
    <div className="min-h-screen dark">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-8 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Us</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transforming the future of technology through sustainable refurbishment and innovation
              </p>
            </div>
          </div>
        </section>

        {/* CEO Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Meet Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">CEO</span>
                </h2>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Vaibhav Kataria</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    Vaibhav Kataria is a visionary leader with over a decade of experience in the technology refurbishment industry. 
                    As the founder and CEO of RefurbishedLaptops, he has revolutionized how businesses and individuals access 
                    high-quality computing devices while promoting environmental sustainability.
                  </p>
                  <p className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    Under his leadership, RefurbishedLaptops has grown from a small startup to a global enterprise serving 
                    customers in 25 countries. Vaibhav's commitment to excellence and innovation has made the company a 
                    trusted name in the refurbished technology market.
                  </p>
                  <p className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    His passion for reducing electronic waste and making technology accessible to everyone drives the 
                    company's mission. Vaibhav believes that quality refurbished laptops not only provide exceptional 
                    value but also contribute to a more sustainable future for our planet.
                  </p>
                  <p className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
                    When he's not leading the company to new heights, Vaibhav enjoys mentoring young entrepreneurs 
                    and speaking at technology conferences about sustainable business practices and the circular economy.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <div className="relative group">
                  {/* Animated background gradient */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  
                  {/* Secondary glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/30 to-purple-600/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
                  
                  {/* Image container */}
                  <div className="relative bg-card rounded-2xl p-2 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                    <img 
                      src="/lovable-uploads/ca71bb02-379e-4ab8-b91a-a81b5875ad5c.png" 
                      alt="Vaibhav Kataria, CEO of RefurbishedLaptops"
                      className="relative rounded-xl w-full max-w-sm mx-auto shadow-xl transform group-hover:rotate-1 transition-all duration-500"
                    />
                    
                    {/* Floating particles effect */}
                    <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                    <div className="absolute bottom-6 right-6 w-3 h-3 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700"></div>
                    <div className="absolute top-1/2 right-2 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-1000"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="text-center group animate-fade-in hover-scale" 
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                    <achievement.icon className="h-8 w-8 text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-400 transition-colors duration-300">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 animate-fade-in hover:shadow-2xl hover:border-blue-500/50 transition-all duration-500">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto">
                At RefurbishedLaptops, we're committed to making high-quality technology accessible to everyone while 
                reducing electronic waste. Our rigorous refurbishment process ensures that every device meets the highest 
                standards of performance and reliability. We believe in creating a sustainable future where technology 
                serves both people and the planet.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
