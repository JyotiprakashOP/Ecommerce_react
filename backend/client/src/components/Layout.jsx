import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import {Toaster} from "react-hot-toast";

const Layout = ({ children,title,description,keywords,author }) => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <title>{title}</title>
       
      </Helmet>
      <Header />
      <main style={{ minHeight: "80.2vh" }}>
        <Toaster/>
        {children}</main>
      <Footer />
    </>
  );
};

export default Layout;
