import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import MedSpas from "./pages/MedSpas";
import MedSpasFacebookAds from "./pages/MedSpasFacebookAds";
import HomeServices from "./pages/HomeServices";
import HealthPractices from "./pages/HealthPractices";
import Results from "./pages/Results";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import Locations from "./pages/Locations";
import CityLanding from "./pages/CityLanding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/med-spas" element={<MedSpas />} />
          <Route path="/med-spas/facebook-ads" element={<MedSpasFacebookAds />} />
          <Route path="/home-services" element={<HomeServices />} />
          <Route path="/health-practices" element={<HealthPractices />} />
          <Route path="/results" element={<Results />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
          <Route path="/marketing" element={<Locations />} />
          <Route path="/marketing/:citySlug" element={<CityLanding />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
