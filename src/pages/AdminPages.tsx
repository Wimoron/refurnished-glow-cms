import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useContent } from '@/contexts/ContentContext';
import { Edit, Trash2, Plus, ArrowLeft, Eye } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const AdminPages = () => {
  const { pages, deletePage } = useContent();

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this page?')) {
      deletePage(id);
      toast.success('Page deleted successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Manage Pages</h1>
            <p className="text-muted-foreground">Create and manage website pages</p>
          </div>
          <Button asChild>
            <Link to="/admin/pages/new">
              <Plus className="h-4 w-4 mr-2" />
              Add Page
            </Link>
          </Button>
        </div>

        <div className="grid gap-6">
          {pages.map((page) => (
            <Card key={page.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{page.title}</h3>
                      <Badge variant={page.published ? "default" : "secondary"}>
                        {page.published ? "Published" : "Draft"}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">/{page.slug}</p>
                    <p className="text-muted-foreground text-sm">
                      Created: {page.createdAt.toLocaleDateString()}
                      {page.updatedAt > page.createdAt && (
                        <span> • Updated: {page.updatedAt.toLocaleDateString()}</span>
                      )}
                    </p>
                    <p className="text-muted-foreground mt-2 line-clamp-2">
                      {page.content.substring(0, 150)}...
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button asChild size="sm" variant="outline">
                      <Link to={`/${page.slug}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link to={`/admin/pages/${page.id}/edit`}>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(page.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {pages.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <h3 className="text-xl font-semibold mb-2">No pages yet</h3>
                <p className="text-muted-foreground mb-4">
                  Create your first page to get started
                </p>
                <Button asChild>
                  <Link to="/admin/pages/new">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Page
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

export default AdminPages;