(function () {
  function start() {
    window.helpers.renderTemplate("header", "header");
    window.helpers.renderTemplate("footer", "footer");

    AOS.init({
      offset: 500,
    });
  }

  window.onload = start;
})();
