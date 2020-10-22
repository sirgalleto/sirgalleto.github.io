import showdown from "showdown";
import { getUrlParam, renderTemplate } from "./helpers";
import projects from "../data/projects.json";
import "github-markdown-css/github-markdown.css";

(function () {
  const fetch = window.fetch;

  function start() {
    const projectName = getUrlParam("project");
    // Set tab/window title so the user gets the current context
    document.title = "Galleto - " + projectName;
    // Find the project by name using the url's query param name
    const currentProject = projects.find(({ name }) => name === projectName);

    // Makes an http request to the readme URL
    fetch(currentProject.readme)
      .then((response) => {
        if (response.ok) {
          // If response is ok, extract the text
          return response.text();
        } else {
          // If response is not ok, reject the promise
          return Promise.reject();
        }
      })
      .then((readme) => {
        // Transform the markdown into html
        const html = new showdown.Converter().makeHtml(readme);

        renderTemplate("project-details", "projectDetails", {
          projectReadme: html,
          project: currentProject,
        });
      })
      .catch((error) => {
        // Error for developer
        console.error(error);
        // Alert for end-user
        alert("There was an error loading the project info");
      });
  }

  window.onload = start;
})();
