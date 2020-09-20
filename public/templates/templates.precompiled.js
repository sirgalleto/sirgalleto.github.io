(function () {
  var template = Handlebars.template,
    templates = (Handlebars.templates = Handlebars.templates || {});
  templates["footer"] = template({
    compiler: [8, ">= 4.3.0"],
    main: function (container, depth0, helpers, partials, data) {
      return '<footer class="gtx-section gtx-section--primary gtx-section--footer">\n  <img\n    src="public/galleto-isotype-white.png"\n    alt="Galleto isotype"\n    class="gtx-isotype"\n  />\n  <span class="gtx-text gtx-text--right gtx-unmargin">\n    © 2020. All rights reserved.Galleto\n  </span>\n  <div class="gtx-flex-container gtx-flex-column gtx-unmargin">\n    <span class="gtx-text">Become a friend</span>\n    <nav class="gtx-navbar gtx-navbar--footer">\n      <ul class="gtx-navbar__options">\n        <li>\n          <a href="https://twitter.com/sirgalleto">Twitter</a>\n        </li>\n        <li>\n          <a href="https://www.instagram.com/sirgalleto/">Instagram</a>\n        </li>\n        <li>\n          <a href="http://github.com/sirgalleto/"> Github</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</footer>';
    },
    useData: true,
  });
  templates["header"] = template({
    compiler: [8, ">= 4.3.0"],
    main: function (container, depth0, helpers, partials, data) {
      return '<header>\n  <nav class="gtx-navbar gtx-navbar--primary">\n    <img src="public/galleto.png" alt="Galleto" class="gtx-logo" />\n    <ul class="gtx-navbar__options">\n      <li>\n        <a href="./projects.html"> Projects</a>\n      </li>\n      <li>\n        <a href="./thoughts.html"> Thoughts</a>\n      </li>\n      <li>\n        <a href="./photos.html"> Photos</a>\n      </li>\n      <li>\n        <a href="./contact.html"> Contact</a>\n      </li>\n    </ul>\n  </nav>\n</header>';
    },
    useData: true,
  });
})();
