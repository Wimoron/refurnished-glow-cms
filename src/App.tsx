import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContentProvider } from "@/contexts/ContentContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import AdminProducts from "./pages/AdminProducts";
import AdminPages from "./pages/AdminPages";
import ProductDetail from "./pages/ProductDetail";
import AboutUs from "./pages/AboutUs";
import DynamicPage from "./pages/DynamicPage";
import ProductForm from "./components/admin/ProductForm";
import PageForm from "./components/admin/PageForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ContentProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/products/:id" element={<ProductForm />} />
            <Route path="/admin/pages" element={<AdminPages />} />
            <Route path="/admin/pages/:id" element={<PageForm />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            {/* Dynamic page route - must come before 404 */}
            <Route path="/:slug" element={<DynamicPage />} />
            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ContentProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;