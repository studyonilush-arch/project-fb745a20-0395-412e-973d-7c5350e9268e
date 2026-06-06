import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/site/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Learning from "./pages/Learning";
import Spaces from "./pages/Spaces";
import Matriculation from "./pages/Matriculation";
import Social from "./pages/Social";
import WhatsHappening from "./pages/WhatsHappening";
import Team from "./pages/Team";
import Graduates from "./pages/Graduates";
import Info from "./pages/Info";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Donations from "./pages/Donations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/spaces" element={<Spaces />} />
            <Route path="/matriculation" element={<Matriculation />} />
            <Route path="/social" element={<Social />} />
            <Route path="/whats-happening" element={<WhatsHappening />} />
            <Route path="/team" element={<Team />} />
            <Route path="/graduates" element={<Graduates />} />
            <Route path="/info" element={<Info />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
