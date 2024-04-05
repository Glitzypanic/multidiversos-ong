import { lazy, Suspense } from "react";

import "./styles/App.css";

import { Router } from "./components/Router.jsx";
import { Route } from "./components/Route.jsx";

// import dinamico de las paginas
const lazyPage404 = lazy(() => import("./pages/Page404.jsx")); 
const lazyHomePage = lazy(() => import("./pages/HomePage.jsx")); 
const lazyArticlePage = lazy(() => import("./pages/ArticlePage.jsx")); 
const lazyActivitiesPage = lazy(() => import("./pages/ActivitiesPage.jsx")); 
const lazyOrganigramPage = lazy(() => import("./pages/OrganigramPage.jsx")); 
const lazyContactPage = lazy(() => import("./pages/ContactPage.jsx")); 
const lazyDocumentsPage = lazy(() => import("./pages/DocumentsPage.jsx")); 

function App() {
  return (
    <main>
      <Suspense fallback={null}>
        <Router defaultComponent={lazyPage404}>
          <Route path="/" Component={lazyHomePage} />
          <Route path="/article" Component={lazyArticlePage} />
          <Route path="/activities" Component={lazyActivitiesPage} />
          <Route path="/organigram" Component={lazyOrganigramPage} />
          <Route path="/contact" Component={lazyContactPage} />
          <Route path="/documents" Component={lazyDocumentsPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
