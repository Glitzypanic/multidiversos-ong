// import { lazy, Suspense } from "react";
import { MenuContext } from "./utils/MenuContext.js";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop.jsx";

import "./styles/pages_style/App.css";

// import { Router } from "./components/Router.jsx";
// import { Route } from "./components/Route.jsx";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Tools from "./components/Tools.jsx";

// import dinamico de las paginas
// const lazyPage404 = lazy(() => import("./pages/Page404.jsx"));
// const lazyHomePage = lazy(() => import("./pages/HomePage.jsx"));
// const lazyArticlePage = lazy(() => import("./pages/ArticlePage.jsx"));
// const lazyActivities2020 = lazy(() => import("./pages/Activities2020.jsx"));
// const lazyActivities2021 = lazy(() => import("./pages/Activities2021.jsx"));
// const lazyActivities2022 = lazy(() => import("./pages/Activities2022.jsx"));
// const lazyActivities2023 = lazy(() => import("./pages/Activities2023.jsx"));
// const lazyOrganigramPage = lazy(() => import("./pages/OrganigramPage.jsx"));
// const lazyDocumentsPage = lazy(() => import("./pages/DocumentsPage.jsx"));

import lazyPage404 from "./pages/Page404.jsx";
import lazyHomePage from "./pages/HomePage.jsx";
import lazyArticlePage from "./pages/ArticlePage.jsx";
import lazyActivities2020 from "./pages/Activities2020.jsx";
import lazyActivities2021 from "./pages/Activities2021.jsx";
import lazyActivities2022 from "./pages/Activities2022.jsx";
import lazyActivities2023 from "./pages/Activities2023.jsx";
import lazyOrganigramPage from "./pages/OrganigramPage.jsx";
import lazyDocumentsPage from "./pages/DocumentsPage.jsx";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }} className="main-content">
      <Header />
      <main>
            <ScrollToTop />
          <Routes defaultComponent={lazyPage404}>
            <Route path="/" Component={lazyHomePage} />
            <Route path="/article" Component={lazyArticlePage} />
            <Route path="/activities2020" Component={lazyActivities2020} />
            <Route path="/activities2021" Component={lazyActivities2021} />
            <Route path="/activities2022" Component={lazyActivities2022} />
            <Route path="/activities2023" Component={lazyActivities2023} />
            <Route path="/organigram" Component={lazyOrganigramPage} />
            <Route path="/documents" Component={lazyDocumentsPage} />
          </Routes>
      <Tools />
      </main>
      <Footer />
    </MenuContext.Provider>
  );
}

export default App;
