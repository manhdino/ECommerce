import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { Fragment } from "react";
import PreLoader from "./components/PreLoader/PreLoader";
import { useEffect, useState } from "react";
import { routes } from "./routes/index";
import NewsletterComponent from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a 1-second delay
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? Header : Fragment;
            return (
              <Route
                path={route.path}
                element={
                  <Layout>
                    <Page />
                    <NewsletterComponent />
                    <Footer />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      )}
    </>
  );
}

export default App;
