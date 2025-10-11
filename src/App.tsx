
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import Characters from "./pages/Characters";
import Prices from "./pages/Prices";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const initialRoute = (window as any).__INITIAL_ROUTE__ || window.location.pathname;
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contacts" element={<Contacts />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;