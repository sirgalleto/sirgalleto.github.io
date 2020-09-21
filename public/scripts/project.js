(function () {
  const fetch = window.fetch;

  function start() {
    window.helpers.renderTemplate("header", "header");
    window.helpers.renderTemplate("footer", "footer");

    const projectName = window.helpers.getUrlParam("project");
    // Set tab/window title so the user gets the current context
    document.title = "Galleto - " + projectName;
    const currentProject = window.data.projects.find(
      ({ name }) => name === projectName
    );

    fetch(currentProject.readme)
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          return Promise.reject();
        }
      })
      .then((readme) => {
        const html = new showdown.Converter().makeHtml(readme);

        window.helpers.renderTemplate("project-details", "projectDetails", {
          projectReadme: html,
          project: currentProject,
        });
      })
      .catch((error) => {
        console.error(error);
        alert("There was an error loading the project info");
      });
  }

  window.onload = start;
})();
