// Libraries: Handlebars

(function () {
  // Render template into the element provided, using the template name providen
  function renderTemplate(id, name, ctx) {
    if (!window.Handlebars.templates) {
      console.warn("No templates where found");
      return;
    }

    const template = window.Handlebars.templates[name];

    // If the template does not exist, log a warning and escape
    if (!template) {
      console.warn(`Template ${name} does not exist in the handlebars context`);
      return;
    }

    const element = document.getElementById(id);

    // If the element does not exist, log a warning and escape
    if (!element) {
      console.warn(`Element with id ${id} does not exist in the document`);
      return;
    }

    element.outerHTML = template(ctx);
  }

  // Return an incremented + 1 value
  function increment(value, options) {
    return parseInt(value) + 1;
  }

  // Return the first 3 elements of an array
  function pickFirstThree(value, options) {
    const [first, second, third] = value;
    return [first, second, third];
  }

  // Gets a query params from the url
  function getUrlParam(key) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
  }

  // Export each helper on it's needed context
  window.helpers = {
    renderTemplate,
    getUrlParam,
    pickFirstThree,
  };
  Handlebars.registerHelper("increment", increment);
  Handlebars.registerHelper("pickFirstThree", increment);
})();
