import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useContent, Page } from '@/contexts/ContentContext';
import { ArrowLeft, Save } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const PageForm = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { pages, addPage, updatePage } = useContent();
  const isEditing = id !== 'new';
  
  const [formData, setFormData] = useState<Omit<Page, 'id' | 'createdAt' | 'updatedAt'>>({
    title: '',
    slug: '',
    content: '',
    published: true
  });

  useEffect(() => {
    if (isEditing && id) {
      const page = pages.find(p => p.id === id);
      if (page) {
        setFormData({
          title: page.title,
          slug: page.slug,
          content: page.content,
          published: page.published
        });
      }
    }
  }, [id, isEditing, pages]);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.slug) {
      formData.slug = generateSlug(formData.title);
    }

    if (isEditing && id) {
      updatePage(id, formData);
      toast.success('Page updated successfully!');
    } else {
      addPage(formData);
      toast.success('Page created successfully!');
    }
    
    navigate('/admin/pages');
  };

  const handleChange = (field: keyof typeof formData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
      ...(field === 'title' && !isEditing ? { slug: generateSlug(value as string) } : {})
    }));
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto max-w-2xl">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" onClick={() => navigate('/admin/pages')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-3xl font-bold">
            {isEditing ? 'Edit Page' : 'Add New Page'}
          </h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Page Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Page Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="slug">URL Slug</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => handleChange('slug', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => handleChange('content', e.target.value)}
                  rows={10}
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="published"
                  checked={formData.published}
                  onCheckedChange={(checked) => handleChange('published', checked)}
                />
                <Label htmlFor="published">Published</Label>
              </div>

              <Button type="submit" className="w-full">
                <Save className="h-4 w-4 mr-2" />
                {isEditing ? 'Update Page' : 'Create Page'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PageForm;