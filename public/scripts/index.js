// Libraries: AOS

(function () {
  function start() {
    window.helpers.renderTemplate("header", "header");
    window.helpers.renderTemplate("footer", "footer");
    window.helpers.renderTemplate("recent-projects", "projectsPreview", {
      projects: window.helpers.pickFirstThree(window.data.projects),
    });

    AOS.init({
      offset: 200,
    });
  }

  window.onload = start;
})();
