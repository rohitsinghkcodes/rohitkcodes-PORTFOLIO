import React from "react";
import Layout from "../Components/Layouts/Layout.js";
import Page0 from "./HomePageComponents/Page0_intro.js";
import Page1 from "./HomePageComponents/Page1_skills.js";
import Projects from "./HomePageComponents/Page3_projects.js";
import Page2 from "./HomePageComponents/Page2_tech.js";
import Page4 from "./HomePageComponents/Page4.contact.js";


const HomePage = () => {
  return (
    <Layout title="Portfolio-rohitkcodes">
      <div className="homepage">
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example2"
          data-bs-offset="0"
          className="scrollspy-example"
          tabIndex="0"
        >
          <Page0 />
          <Page1 />
          {/* <Page2 /> */}
          <Projects />
          <Page4/>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
