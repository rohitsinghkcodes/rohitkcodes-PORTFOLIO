import React from "react";

const Page3 = () => {
  const techList = [
    // "HTML 5","CSS 3",
    // "C++",
    // "JS",
    // "Python",
    // "SQL",
    // "Node.js",
    // "Express",
    // "MongoDB",
    // "React",
    // "Bootstrap",
    // "Flutter",
    "Git",
    "Postman",
    "mongoDB Compass",
    "VSCode",
    "Android Studio",
  ];

  return (
    <div className="page2" id="scrollspyHeading3">
      <div className="container">
        <h1>Technologies</h1>
        <h6>
        </h6>
        <div className="row d-flex justify-content-center">
          {/* <h3>Tools & Technologies</h3> */}
          {techList.map((m) => (
            <div class="ring">
              <div className="ring2">
                <p>{m}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page3;
