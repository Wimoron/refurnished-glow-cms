
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
