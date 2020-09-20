(function () {
  const fetch = window.fetch;

  function start() {
    window.helpers.renderTemplate("header", "header");
    window.helpers.renderTemplate("footer", "footer");

    const projectName = getUrlParam("project");
    const currentProject = window.projects.find(
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
        const converter = new showdown.Converter(),
          html = converter.makeHtml(readme);

        renderTemplate("project-details", "projectDetails", {
          projectReadme: html,
        });
      })
      .catch((error) => {
        console.error(error);
        alert("There was an error loading the project info");
      });
  }

  window.onload = start;
})();
