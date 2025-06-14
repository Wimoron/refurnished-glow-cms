import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useContent } from '@/contexts/ContentContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DynamicPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getPageBySlug } = useContent();
  
  const page = slug ? getPageBySlug(slug) : undefined;

  if (!page) {
    return <Navigate to="/404" replace />;
  }

  if (!page.published) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen dark">
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <article className="prose prose-lg prose-invert max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {page.title}
            </h1>
            <div className="text-muted-foreground mb-8">
              <time dateTime={page.createdAt.toISOString()}>
                {page.createdAt.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              {page.updatedAt > page.createdAt && (
                <span className="ml-4">
                  Updated: {page.updatedAt.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              )}
            </div>
            <div className="whitespace-pre-wrap text-foreground leading-relaxed">
              {page.content}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DynamicPage;