import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Package, FileText, Plus, BarChart3 } from 'lucide-react';
import { useContent } from '@/contexts/ContentContext';

const Admin = () => {
  const { products, pages } = useContent();
  const publishedPages = pages.filter(page => page.published);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">CMS Dashboard</h1>
          <p className="text-muted-foreground">Manage your website content and settings</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Products</p>
                  <p className="text-3xl font-bold">{products.length}</p>
                </div>
                <Package className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Published Pages</p>
                  <p className="text-3xl font-bold">{publishedPages.length}</p>
                </div>
                <FileText className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Pages</p>
                  <p className="text-3xl font-bold">{pages.length}</p>
                </div>
                <BarChart3 className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Management Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Products
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Manage your laptop inventory and product listings
              </p>
              <div className="flex gap-2">
                <Button asChild size="sm">
                  <Link to="/admin/products">
                    <Settings className="h-4 w-4 mr-2" />
                    Manage
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/admin/products/new">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Pages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Create and manage website pages and content
              </p>
              <div className="flex gap-2">
                <Button asChild size="sm">
                  <Link to="/admin/pages">
                    <Settings className="h-4 w-4 mr-2" />
                    Manage
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/admin/pages/new">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Configure site settings and preferences
              </p>
              <Button asChild size="sm" variant="outline">
                <Link to="/admin/settings">
                  <Settings className="h-4 w-4 mr-2" />
                  Configure
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Button asChild variant="outline">
            <Link to="/">← Back to Website</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Admin;