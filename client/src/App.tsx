/* Maison Rouge — expérience éditoriale Manifestation & Actions : offres, diagnostic et révélations de sections. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ProgramPage from "./pages/ProgramPage";
import ResultsPage from "./pages/ResultsPage";
import AboutPage from "./pages/AboutPage";
import { SiteFooter } from "./components/SiteFooter";
import OfferFinderPage from "./pages/OfferFinderPage";
import { BrandLoader } from "./components/BrandLoader";
import { MotionOrchestrator } from "./components/MotionOrchestrator";
import { useEffect, useState } from "react";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/success-story-pro"}>{() => <ProgramPage program="pro" />}</Route>
      <Route path={"/success-story-creator"}>{() => <ProgramPage program="creator" />}</Route>
      <Route path={"/success-story-vip"}>{() => <ProgramPage program="vip" />}</Route>
      <Route path={"/resultats"} component={ResultsPage} />
      <Route path={"/a-propos"} component={AboutPage} />
      <Route path={"/choisir-mon-offre"} component={OfferFinderPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => { const timeout = window.setTimeout(() => setIsLoading(false), 1050); return () => window.clearTimeout(timeout); }, []);
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <BrandLoader visible={isLoading} />
          <MotionOrchestrator />
          <div className={isLoading ? "site-shell is-waiting" : "site-shell"}><Router /><SiteFooter /></div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
