
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen dark">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
