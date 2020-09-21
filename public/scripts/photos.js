(function () {
  function start() {
    window.helpers.renderTemplate("header", "header");
    window.helpers.renderTemplate("footer", "footer");

    AOS.init();
  }

  window.onload = start;
})();
