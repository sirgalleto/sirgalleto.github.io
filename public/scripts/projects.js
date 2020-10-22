import AOS from "aos";
import { renderTemplate } from "./helpers";
import "aos/dist/aos.css";
import projects from "../data/projects.json";

const fetch = window.fetch;
const ROW_SIZE = 4;

function start() {
  // Creates an array of arrays, each array contains a ROW_SIZE elements
  // Is used for separate the rows of projects
  const projectsSection = projects.reduce(
    (accumulator, value, index) => {
      const lastArray = accumulator[accumulator.length - 1];
      const item = {
        index,
        ...value,
      };

      // Insers an array until is full
      if (lastArray.length < ROW_SIZE) {
        lastArray.push(item);
      } else {
        accumulator.push([item]);
      }

      return accumulator;
    },
    [[]]
  );

  renderTemplate("projects", "allProjects", {
    projectsSection,
  });

  AOS.init({
    offset: 200,
  });
}

window.onload = start;
