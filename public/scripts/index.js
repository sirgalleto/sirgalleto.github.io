(function () {
  window.onload = function () {
    renderTemplate("header", "header");
    renderTemplate("footer", "footer");
    renderTemplate("recent-projects", "projectsPreview", {
      projects: window.projects,
    });
  };
})();
