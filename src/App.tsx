import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import TownLoyalty from "./pages/TownLoyalty";
import ForBusinesses from "./pages/ForBusinesses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Solution Pages
import AILeadReactivation from "./pages/solutions/AILeadReactivation";
import TradeProAutomation from "./pages/solutions/TradeProAutomation";
import PatientLifecycleSystems from "./pages/solutions/PatientLifecycleSystems";
import LegalIntakeVelocity from "./pages/solutions/LegalIntakeVelocity";
import TownLoyaltyRewards from "./pages/solutions/TownLoyaltyRewards";

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
          <Route path="/town-loyalty" element={<TownLoyalty />} />
          <Route path="/for-businesses" element={<ForBusinesses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Solution Routes */}
          <Route path="/solutions/ai-lead-reactivation" element={<AILeadReactivation />} />
          <Route path="/solutions/trade-pro-automation" element={<TradeProAutomation />} />
          <Route path="/solutions/patient-lifecycle-systems" element={<PatientLifecycleSystems />} />
          <Route path="/solutions/legal-intake-velocity" element={<LegalIntakeVelocity />} />
          <Route path="/solutions/town-loyalty-rewards" element={<TownLoyaltyRewards />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
