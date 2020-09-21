(function () {
  function start() {
    window.helpers.renderTemplate("header", "header");
    window.helpers.renderTemplate("footer", "footer");
  }

  window.onload = start;
})();
