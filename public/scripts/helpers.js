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

window.renderTemplate = renderTemplate;
