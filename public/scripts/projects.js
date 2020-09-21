// Libraries: AOS

(function () {
  const fetch = window.fetch;
  const ROW_SIZE = 4;

  function start() {
    window.helpers.renderTemplate("header", "header");
    window.helpers.renderTemplate("footer", "footer");
    // Creates an array of arrays, each array contains a ROW_SIZE elements
    // Is used for separate the rows of projects
    const projectsSection = window.data.projects.reduce(
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

    window.helpers.renderTemplate("projects", "allProjects", {
      projectsSection,
    });

    AOS.init({
      offset: 200,
    });
  }

  window.onload = start;
})();
