// Libraries: Showdown

(function () {
  const fetch = window.fetch;

  function start() {
    window.helpers.renderTemplate("header", "header");
    window.helpers.renderTemplate("footer", "footer");

    const projectName = window.helpers.getUrlParam("project");
    // Set tab/window title so the user gets the current context
    document.title = "Galleto - " + projectName;
    // Find the project by name using the url's query param name
    const currentProject = window.data.projects.find(
      ({ name }) => name === projectName
    );

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

        window.helpers.renderTemplate("project-details", "projectDetails", {
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
