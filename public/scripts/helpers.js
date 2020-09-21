(function () {
  function renderTemplate(id, name, ctx) {
    if (!window.Handlebars.templates) {
      console.warn("No templates where found");
      return;
    }

    const template = window.Handlebars.templates[name];

    if (!template) {
      console.warn(`Template ${name} does not exist in the handlebars context`);
      return;
    }

    const element = document.getElementById(id);

    if (!element) {
      console.warn(
        `Element with id ${id} does not exist in the handlebars context`
      );
      return;
    }

    element.outerHTML = template(ctx);
  }

  function increment(value, options) {
    return parseInt(value) + 1;
  }

  function pickFirstThree(value, options) {
    const [first, second, third] = value;
    return [first, second, third];
  }

  function getUrlParam(key) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
  }

  window.helpers = {
    renderTemplate,
    getUrlParam,
    pickFirstThree,
  };
  // Export each helper on it's needed context
  Handlebars.registerHelper("increment", increment);
  Handlebars.registerHelper("pickFirstThree", increment);
})();
