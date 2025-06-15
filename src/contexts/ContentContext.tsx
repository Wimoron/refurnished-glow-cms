import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  year: string;
  processor: string;
  ram: string;
  storage: string;
  originalPrice: number;
  price: number;
  rating: number;
  image: string;
  condition: string;
  description?: string;
  slug: string;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  content: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface ContentContextType {
  products: Product[];
  pages: Page[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  addPage: (page: Omit<Page, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updatePage: (id: string, page: Partial<Page>) => void;
  deletePage: (id: string) => void;
  getProductBySlug: (slug: string) => Product | undefined;
  getPageBySlug: (slug: string) => Page | undefined;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro 16"',
    year: '2021',
    processor: 'M1 Pro',
    ram: '16GB',
    storage: '512GB SSD',
    originalPrice: 2499,
    price: 1699,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop',
    condition: 'Excellent',
    slug: 'macbook-pro-16-2021',
    description: 'Professional-grade laptop with exceptional performance for creative professionals.'
  },
  {
    id: '2',
    name: 'ThinkPad X1 Carbon',
    year: '2022',
    processor: 'Intel i7',
    ram: '16GB',
    storage: '1TB SSD',
    originalPrice: 1899,
    price: 1299,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
    condition: 'Like New',
    slug: 'thinkpad-x1-carbon-2022',
    description: 'Business laptop with exceptional build quality and performance.'
  },
  {
    id: '3',
    name: 'Dell XPS 13',
    year: '2023',
    processor: 'Intel i5',
    ram: '8GB',
    storage: '256GB SSD',
    originalPrice: 1299,
    price: 899,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop',
    condition: 'Very Good',
    slug: 'dell-xps-13-2023',
    description: 'Compact and powerful ultrabook perfect for everyday computing.'
  },
  {
    id: '4',
    name: 'MacBook Air 13"',
    year: '2022',
    processor: 'M2',
    ram: '8GB',
    storage: '256GB SSD',
    originalPrice: 1199,
    price: 849,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop',
    condition: 'Excellent',
    slug: 'macbook-air-13-2022',
    description: 'Ultra-thin and lightweight laptop with incredible battery life and performance.'
  },
  {
    id: '5',
    name: 'ThinkPad T14',
    year: '2023',
    processor: 'AMD Ryzen 7',
    ram: '16GB',
    storage: '512GB SSD',
    originalPrice: 1599,
    price: 1099,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop',
    condition: 'Very Good',
    slug: 'thinkpad-t14-2023',
    description: 'Reliable business laptop with robust security features and excellent keyboard.'
  },
  {
    id: '6',
    name: 'Dell XPS 15',
    year: '2022',
    processor: 'Intel i7',
    ram: '32GB',
    storage: '1TB SSD',
    originalPrice: 2299,
    price: 1599,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&h=400&fit=crop',
    condition: 'Like New',
    slug: 'dell-xps-15-2022',
    description: 'High-performance laptop with stunning 4K display for creative professionals.'
  },
  {
    id: '7',
    name: 'MacBook Pro 14"',
    year: '2023',
    processor: 'M3 Pro',
    ram: '18GB',
    storage: '512GB SSD',
    originalPrice: 2399,
    price: 1899,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=400&fit=crop',
    condition: 'Excellent',
    slug: 'macbook-pro-14-2023',
    description: 'Latest MacBook Pro with M3 Pro chip for ultimate performance and efficiency.'
  },
  {
    id: '8',
    name: 'ThinkPad X1 Yoga',
    year: '2022',
    processor: 'Intel i7',
    ram: '16GB',
    storage: '512GB SSD',
    originalPrice: 1999,
    price: 1349,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&h=400&fit=crop',
    condition: 'Very Good',
    slug: 'thinkpad-x1-yoga-2022',
    description: '2-in-1 convertible laptop with touchscreen and pen support for versatile use.'
  },
  {
    id: '9',
    name: 'Dell Inspiron 15',
    year: '2023',
    processor: 'Intel i5',
    ram: '8GB',
    storage: '256GB SSD',
    originalPrice: 799,
    price: 549,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=400&fit=crop',
    condition: 'Good',
    slug: 'dell-inspiron-15-2023',
    description: 'Affordable laptop perfect for students and everyday computing tasks.'
  },
  {
    id: '10',
    name: 'MacBook Air 15"',
    year: '2023',
    processor: 'M2',
    ram: '8GB',
    storage: '512GB SSD',
    originalPrice: 1499,
    price: 1199,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&h=400&fit=crop',
    condition: 'Like New',
    slug: 'macbook-air-15-2023',
    description: 'Larger MacBook Air with spacious display and all-day battery life.'
  },
  {
    id: '11',
    name: 'ThinkPad P1 Gen 5',
    year: '2022',
    processor: 'Intel i9',
    ram: '32GB',
    storage: '1TB SSD',
    originalPrice: 3299,
    price: 2199,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&h=400&fit=crop',
    condition: 'Excellent',
    slug: 'thinkpad-p1-gen5-2022',
    description: 'Mobile workstation with professional graphics for demanding applications.'
  },
  {
    id: '12',
    name: 'Dell Latitude 7420',
    year: '2021',
    processor: 'Intel i7',
    ram: '16GB',
    storage: '512GB SSD',
    originalPrice: 1799,
    price: 999,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop',
    condition: 'Very Good',
    slug: 'dell-latitude-7420-2021',
    description: 'Enterprise-grade laptop with advanced security and management features.'
  },
  {
    id: '13',
    name: 'MacBook Pro 13"',
    year: '2020',
    processor: 'M1',
    ram: '8GB',
    storage: '256GB SSD',
    originalPrice: 1299,
    price: 799,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop',
    condition: 'Good',
    slug: 'macbook-pro-13-2020',
    description: 'First-generation M1 MacBook Pro with excellent performance and value.'
  },
  {
    id: '14',
    name: 'ThinkPad E15',
    year: '2023',
    processor: 'AMD Ryzen 5',
    ram: '8GB',
    storage: '256GB SSD',
    originalPrice: 899,
    price: 649,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1587614295999-6c1c3a7b98d0?w=600&h=400&fit=crop',
    condition: 'Very Good',
    slug: 'thinkpad-e15-2023',
    description: 'Budget-friendly business laptop with solid performance and reliability.'
  },
  {
    id: '15',
    name: 'Dell Precision 5570',
    year: '2022',
    processor: 'Intel i7',
    ram: '32GB',
    storage: '1TB SSD',
    originalPrice: 2799,
    price: 1899,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=400&fit=crop',
    condition: 'Excellent',
    slug: 'dell-precision-5570-2022',
    description: 'Professional workstation laptop with certified graphics for CAD and design work.'
  }
];

const initialPages: Page[] = [
  {
    id: '1',
    title: 'About Our Refurbishment Process',
    slug: 'refurbishment-process',
    content: 'Our comprehensive refurbishment process ensures every laptop meets the highest standards of quality and performance.',
    published: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
];

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [pages, setPages] = useState<Page[]>(initialPages);

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = { ...product, id: Date.now().toString() };
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = (id: string, updatedProduct: Partial<Product>) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updatedProduct } : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const addPage = (page: Omit<Page, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newPage = {
      ...page,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    setPages(prev => [...prev, newPage]);
  };

  const updatePage = (id: string, updatedPage: Partial<Page>) => {
    setPages(prev => prev.map(p => p.id === id ? { 
      ...p, 
      ...updatedPage, 
      updatedAt: new Date() 
    } : p));
  };

  const deletePage = (id: string) => {
    setPages(prev => prev.filter(p => p.id !== id));
  };

  const getProductBySlug = (slug: string) => {
    return products.find(p => p.slug === slug);
  };

  const getPageBySlug = (slug: string) => {
    return pages.find(p => p.slug === slug);
  };

  return (
    <ContentContext.Provider value={{
      products,
      pages,
      addProduct,
      updateProduct,
      deleteProduct,
      addPage,
      updatePage,
      deletePage,
      getProductBySlug,
      getPageBySlug
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};