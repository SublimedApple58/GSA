import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Articles from "@/pages/articles";
import Coaching from "@/pages/coaching";
import Social from "@/pages/social";
import React from "react";
import { useFetch } from "./useFetch"
import { ArticlesEditor } from "./components/articles-editor";
import ArticleDetail from "./components/article-detail";

function ScrollToTop() {
  const [location] = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/articles" component={Articles} />
      <Route path="/coaching" component={Coaching} />
      <Route path="/social" component={Social} />
      <Route path="/editor" component={ArticlesEditor}/>
      <Route path="/article">
        {(params) => {
          const searchParams = new URLSearchParams(window.location.search);
          const id = searchParams.get('id');
          return <ArticleDetail id={id || ''} />;
        }}
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;