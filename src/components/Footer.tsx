import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Laptop, Zap } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Products': ['MacBooks', 'ThinkPads', 'Dell Laptops', 'Gaming Laptops', 'Ultrabooks'],
    'Support': ['Warranty', 'Returns', 'FAQ', 'Tech Support', 'Contact Us'],
    'Company': ['About Us', 'Careers', 'Press', 'Partners', 'Blog'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Shipping Info']
  };

  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              {/* Artistic Logo */}
              <div className="relative">
                <div className="w-10 h-10 relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-400/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <Laptop className="h-5 w-5 text-white" />
                      <Zap className="h-2 w-2 text-yellow-300 absolute -top-0.5 -right-0.5" />
                    </div>
                  </div>
                  <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white/30 rounded-full"></div>
                  <div className="absolute bottom-0.5 right-0.5 w-1 h-1 bg-yellow-300/50 rounded-full"></div>
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                RefurbishedLaptops
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Premium refurbished laptops with guaranteed quality, performance, and sustainability. 
              Your trusted partner for reliable technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-muted hover:bg-accent rounded-lg flex items-center justify-center transition-colors duration-200 group"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-foreground">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="font-semibold mb-2 text-foreground">Stay Updated</h4>
            <p className="text-muted-foreground mb-4">
              Get the latest deals and tech insights delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-foreground placeholder:text-muted-foreground"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 RefurbishedLaptops. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;