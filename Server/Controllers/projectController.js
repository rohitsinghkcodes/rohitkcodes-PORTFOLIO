import projectModel from "../Models/projectModel.js";

//* CREATE NEW PROJECT CONTROLLER || POST
export const addProjectController = async (req, res) => {
  try {
    const { title, desc, github, img } = req.body;

    // Validation
    switch (true) {
      case !title:
        return res.status(500).send({ error: "title is required!" });
      case !desc:
        return res.status(500).send({ error: "description is required!" });
      case !github:
        return res.status(500).send({ error: "github is required!" });
      case !img:
        return res.status(500).send({ error: "image is required!" });
    }

    const project = await new projectModel({
      ...req.body,
    }).save();

    res.status(201).send({
      success: true,
      msg: "Project Details Added Successfully",
      project,
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ success: false, msg: "Error in project entry!", err });
  }
};

//* FETCH ALL PROJECT CONTROLLER || GET
export const getProjectsController = async (req, res) => {
  try {
    const projects = await projectModel.find({});
    res.status(200).send({
      project_count: projects.length,
      success: true,
      msg: "Projects fetched successfully",
      projects,
    });
  } catch (error) {
    res.status(500).send("Error while fetching project details", error);
  }
};

//* FETCH DISPLAY PROJECTS CONTROLLER || GET
export const mainProjectsController = async (req, res) => {
  try {
    const projects = await projectModel
      .find({ display: { $ne: 0 } })
      .sort({ display: 1 });

    res.status(200).send({
      project_count: projects.length,
      success: true,
      msg: "Projects fetched successfully",
      projects,
    });
  } catch (error) {
    res.status(500).send("Error while fetching project details", error);
  }
};
