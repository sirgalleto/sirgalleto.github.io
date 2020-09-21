(function () {
  function start() {
    window.helpers.renderTemplate("header", "header");
    window.helpers.renderTemplate("footer", "footer");
    window.helpers.renderTemplate("recent-projects", "projectsPreview", {
      projects: window.helpers.pickFirstThree(window.data.projects),
    });
  }

  window.onload = start;
})();
