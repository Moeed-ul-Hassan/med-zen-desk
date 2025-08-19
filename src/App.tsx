import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import NotFound from "./pages/NotFound";
import AboutDeveloper from "./pages/AboutDeveloper";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="patients" element={<Patients />} />
            <Route path="visits" element={<div className="p-6"><h1 className="text-2xl font-bold">Visit Records</h1><p className="text-muted-foreground">Coming soon...</p></div>} />
            <Route path="billing" element={<div className="p-6"><h1 className="text-2xl font-bold">Billing</h1><p className="text-muted-foreground">Coming soon...</p></div>} />
            <Route path="schedules" element={<div className="p-6"><h1 className="text-2xl font-bold">Staff Schedules</h1><p className="text-muted-foreground">Coming soon...</p></div>} />
            <Route path="messages" element={<div className="p-6"><h1 className="text-2xl font-bold">Messages</h1><p className="text-muted-foreground">Coming soon...</p></div>} />
            <Route path="reports" element={<div className="p-6"><h1 className="text-2xl font-bold">Reports</h1><p className="text-muted-foreground">Coming soon...</p></div>} />
            <Route path="about" element={<AboutDeveloper />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
