import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useContent } from '@/contexts/ContentContext';
import { Edit, Trash2, Plus, ArrowLeft, Eye } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const AdminProducts = () => {
  const { products, deleteProduct } = useContent();

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id);
      toast.success('Product deleted successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Manage Products</h1>
            <p className="text-muted-foreground">View and manage your laptop inventory</p>
          </div>
          <Button asChild>
            <Link to="/admin/products/new">
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Link>
          </Button>
        </div>

        <div className="grid gap-6">
          {products.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                        <p className="text-muted-foreground mb-2">
                          {product.year} • {product.processor} • {product.ram} • {product.storage}
                        </p>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{product.condition}</Badge>
                          <span className="text-lg font-bold">${product.price}</span>
                          <span className="text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">/{product.slug}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button asChild size="sm" variant="outline">
                          <Link to={`/product/${product.slug}`}>
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Link>
                        </Button>
                        <Button asChild size="sm" variant="outline">
                          <Link to={`/admin/products/${product.id}`}>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Link>
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(product.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {products.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <h3 className="text-xl font-semibold mb-2">No products yet</h3>
                <p className="text-muted-foreground mb-4">
                  Add your first product to get started
                </p>
                <Button asChild>
                  <Link to="/admin/products/new">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Product
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mt-8">
          <Button asChild variant="outline">
            <Link to="/admin">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;