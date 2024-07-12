import express from "express";

import {
  addProjectController,
  getProjectsController,
  mainProjectsController,
} from "../Controllers/projectController.js";

const router = express.Router();

//~ ADD PROJECTS TO DB
router.post("/add-project", addProjectController);

//~ FETCH ALL PROJECTS
router.get("/all-projects", getProjectsController);

//~ FETCH MAIN PROJECTS TO DISPLAY ON PROFILE MAIN
router.get("/main-projects", mainProjectsController);

// //~ GET PRODUCT IMAGE
// router.get("/project-image/:pid", projectImageController);

export default router;
