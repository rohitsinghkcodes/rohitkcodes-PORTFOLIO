import React from "react";
import Footer from "./Footer.js";
import Header2 from "./Header2.js";
import { Helmet } from "react-helmet";

const Layout2 = (props) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <title>{props.title}</title>
      </Helmet>
      <Header2 />

      <main className="main-style" style={{ minHeight: "65vh" }}>
        {props.children}
      </main>

      <Footer />
    </div>
  );
};

Layout2.defaultProps = {
  title: "E-Commerce App",
  description: "Mern Stack E-Commerce Web App",
  keywords: "mongodb, express, ract, node, webapp, mern, ecommerce, shopping",
  author: "rohit_kumar_singh",
};

export default Layout2;
