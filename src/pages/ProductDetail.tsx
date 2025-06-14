
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useContent } from '@/contexts/ContentContext';
import { ArrowLeft, Star, Shield, Truck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getProductBySlug } = useContent();
  
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The product you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/">← Back to Home</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <Button asChild variant="outline" className="mb-8">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-500/90 text-white">
                  {product.condition}
                </Badge>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-medium">{product.rating}</span>
                </div>
              </div>

              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-xl text-muted-foreground mb-6">
                {product.year} • {product.processor}
              </p>

              {product.description && (
                <p className="text-muted-foreground mb-6">{product.description}</p>
              )}

              <div className="space-y-3 mb-8">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">RAM:</span>
                  <span className="font-medium">{product.ram}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Storage:</span>
                  <span className="font-medium">{product.storage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Processor:</span>
                  <span className="font-medium">{product.processor}</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-3xl font-bold">${product.price}</span>
                  <span className="text-lg text-muted-foreground line-through ml-3">
                    ${product.originalPrice}
                  </span>
                </div>
                <Badge variant="secondary" className="bg-blue-500/10 text-blue-400">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </Badge>
              </div>

              <div className="space-y-4 mb-8">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg py-6">
                  Add to Cart - ${product.price}
                </Button>
                <Button variant="outline" className="w-full">
                  Contact Us for Details
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center p-4 bg-muted/30 rounded-lg">
                  <Shield className="h-6 w-6 text-blue-400 mb-2" />
                  <span className="text-sm font-medium">1 Year Warranty</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted/30 rounded-lg">
                  <Truck className="h-6 w-6 text-green-400 mb-2" />
                  <span className="text-sm font-medium">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted/30 rounded-lg">
                  <Star className="h-6 w-6 text-purple-400 mb-2" />
                  <span className="text-sm font-medium">Quality Tested</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
