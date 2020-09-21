(function () {
  const fetch = window.fetch;
  const ROW_SIZE = 4;

  function start() {
    window.helpers.renderTemplate("header", "header");
    window.helpers.renderTemplate("footer", "footer");
    const projectsSection = window.data.projects.reduce(
      (accumulator, value, index) => {
        const lastArray = accumulator[accumulator.length - 1];
        const item = {
          index,
          ...value,
        };

        if (lastArray.length < 4) {
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
      offset: 800,
    });
  }

  window.onload = start;
})();
