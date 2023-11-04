import { Routes, Route } from 'react-router-dom'
import './App.css';
import React, { Fragment } from 'react';
import PreLoader from './components/PreLoader/PreLoader';
import { useEffect, useState } from 'react';
import { routes } from './routes/index'
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import NewsletterComponent from './components/NewsletterComponent/NewsletterComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a 2-second delay
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
            const Layout = route.isShowHeader ? HeaderComponent : Fragment;
            return (
              <Route path={route.path} element={
                <Layout>
                  <Page />
                  <NewsletterComponent />
                  <FooterComponent />
                </Layout>
              } />
            )
          })}
        </Routes>
      )}
    </>
  );
}

export default App;
