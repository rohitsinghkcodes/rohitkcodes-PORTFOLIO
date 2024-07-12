import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage.js";
import PagenotFound from "./Pages/PagenotFound.js";
import AllProjects from "./Pages/AllProjects.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/*" element={<PagenotFound />} />
      </Routes>
    </>
  );
}

export default App;
