import React from "react";
import Footer from "./Footer.js";
import HomeHeader from "./HomeHeader.js";
import { Helmet } from "react-helmet";

const Layout = (props) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <title>{props.title}</title>
      </Helmet>
      <HomeHeader />

      <main className="main-style" style={{ minHeight: "65vh" }}>
        
        {props.children}
      </main>

    <Footer/>
    </div>
  );
};

Layout.defaultProps = {
  title: "E-Commerce App",
  description: "Mern Stack E-Commerce Web App",
  keywords: "mongodb, express, ract, node, webapp, mern, ecommerce, shopping",
  author: "rohit_kumar_singh",
};

export default Layout;
