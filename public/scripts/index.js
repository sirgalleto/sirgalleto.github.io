import { renderTemplate, pickFirstThree } from "./helpers";
import AOS from "aos";
import projects from "../data/projects.json";
import "aos/dist/aos.css";

function start() {
  renderTemplate("recent-projects", "projectsPreview", {
    projects: pickFirstThree(projects),
  });

  AOS.init({
    offset: 200,
  });
}

window.onload = start;
