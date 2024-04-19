import React from "react";
import { Suspense } from "react";
import { MenuContext } from "./utils/MenuContext.js";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop.jsx";

import "./styles/pages_style/App.css";

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Tools from "./components/Tools.jsx";

const HomePage = React.lazy(() => import("./pages/HomePage.jsx"));
const ArticlePage = React.lazy(() => import("./pages/ArticlePage.jsx"));
const Activities2020 = React.lazy(() => import("./pages/Activities2020.jsx"));
const Activities2021 = React.lazy(() => import("./pages/Activities2021.jsx"));
const Activities2022 = React.lazy(() => import("./pages/Activities2022.jsx"));
const Activities2023 = React.lazy(() => import("./pages/Activities2023.jsx"));
const OrganigramPage = React.lazy(() => import("./pages/OrganigramPage.jsx"));
const DocumentsPage = React.lazy(() => import("./pages/DocumentsPage.jsx"));
const Page404 = React.lazy(() => import("./pages/Page404.jsx"));

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MenuContext.Provider
      value={{ isMenuOpen, setIsMenuOpen }}
      className="main-content"
    >
      <Header />
      <main>
        <Suspense fallback={Page404}>
          <ScrollToTop />
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/article" Component={ArticlePage} />
            <Route path="/activities2020" Component={Activities2020} />
            <Route path="/activities2021" Component={Activities2021} />
            <Route path="/activities2022" Component={Activities2022} />
            <Route path="/activities2023" Component={Activities2023} />
            <Route path="/organigram" Component={OrganigramPage} />
            <Route path="/documents" Component={DocumentsPage} />
          </Routes>
        </Suspense>
        <Tools />
      </main>
      <Footer />
    </MenuContext.Provider>
  );
}

export default App;
