import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    web_link: {
      type: String,
    },
    img: {
      type: String,
      required: true,
    },
    display: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("project", ProjectSchema);
