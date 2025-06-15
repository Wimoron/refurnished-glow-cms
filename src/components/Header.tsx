import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Settings, ChevronDown } from 'lucide-react';
import { useContent } from '@/contexts/ContentContext';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { pages } = useContent();
  const location = useLocation();
  const publishedPages = pages.filter(page => page.published);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navItems = [
    { name: 'Home', href: '/', type: 'link' },
    { name: 'Products', href: '/products', type: 'link' },
    { name: 'About Us', href: '/about-us', type: 'link' },
    { name: 'Contact', href: '#contact', type: 'scroll' },
  ];

  const handleScrollClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActiveLink = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname === href;
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5" 
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/25 transition-all duration-300">
                <span className="text-white font-bold text-lg">RL</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                RefurbishedLaptops
              </span>
              <div className="text-xs text-muted-foreground font-medium">Premium Quality</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.type === 'scroll' && location.pathname !== '/' ? '/' : item.href}
                className={cn(
                  "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group",
                  "hover:bg-accent/50 hover:text-foreground",
                  isActiveLink(item.href) 
                    ? "text-foreground bg-accent/30" 
                    : "text-muted-foreground"
                )}
                onClick={(e) => handleScrollClick(e, item.href)}
              >
                {item.name}
                <span className={cn(
                  "absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-3/4 group-hover:-translate-x-1/2",
                  isActiveLink(item.href) && "w-3/4 -translate-x-1/2"
                )}></span>
              </Link>
            ))}

            {/* Pages Dropdown */}
            {publishedPages.length > 0 && (
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('pages')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-300 group">
                  Pages
                  <ChevronDown className={cn(
                    "ml-1 h-4 w-4 transition-transform duration-300",
                    activeDropdown === 'pages' && "rotate-180"
                  )} />
                </button>
                
                <div className={cn(
                  "absolute top-full left-0 mt-2 w-56 bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-xl shadow-black/10 transition-all duration-300 origin-top",
                  activeDropdown === 'pages' 
                    ? "opacity-100 scale-100 translate-y-0" 
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                )}>
                  <div className="p-2">
                    {publishedPages.slice(0, 5).map((page) => (
                      <Link
                        key={page.id}
                        to={`/${page.slug}`}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200"
                      >
                        {page.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Admin Link */}
            <Link
              to="/admin"
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                "hover:bg-accent/50 hover:text-foreground",
                location.pathname.startsWith('/admin')
                  ? "text-foreground bg-accent/30"
                  : "text-muted-foreground"
              )}
            >
              <Settings className="h-4 w-4" />
              <span className="hidden xl:inline">Admin</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-accent/50 rounded-lg transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu className={cn(
                "absolute inset-0 h-6 w-6 transition-all duration-300",
                isMenuOpen ? "opacity-0 rotate-180 scale-75" : "opacity-100 rotate-0 scale-100"
              )} />
              <X className={cn(
                "absolute inset-0 h-6 w-6 transition-all duration-300",
                isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-75"
              )} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="pt-4 pb-2 border-t border-border/50 mt-4">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.type === 'scroll' && location.pathname !== '/' ? '/' : item.href}
                  className={cn(
                    "px-4 py-3 rounded-lg text-base font-medium transition-all duration-300",
                    "hover:bg-accent/50 hover:text-foreground hover:translate-x-1",
                    isActiveLink(item.href)
                      ? "text-foreground bg-accent/30 border-l-2 border-blue-500"
                      : "text-muted-foreground"
                  )}
                  onClick={(e) => {
                    handleScrollClick(e, item.href);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Pages */}
              {publishedPages.length > 0 && (
                <>
                  <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Pages
                  </div>
                  {publishedPages.slice(0, 3).map((page) => (
                    <Link
                      key={page.id}
                      to={`/${page.slug}`}
                      className="px-6 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200 hover:translate-x-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {page.title}
                    </Link>
                  ))}
                </>
              )}

              {/* Mobile Admin */}
              <Link
                to="/admin"
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300",
                  "hover:bg-accent/50 hover:text-foreground hover:translate-x-1",
                  location.pathname.startsWith('/admin')
                    ? "text-foreground bg-accent/30 border-l-2 border-purple-500"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                <Settings className="h-5 w-5" />
                Admin Panel
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;