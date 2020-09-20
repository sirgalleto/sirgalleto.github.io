(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['footer'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<footer class=\"gtx-section gtx-section--primary gtx-section--footer\">\n  <img\n    src=\"public/galleto-isotype-white.png\"\n    alt=\"Galleto isotype\"\n    class=\"gtx-isotype\"\n  />\n  <span class=\"gtx-text gtx-text--right gtx-unmargin\">\n    © 2020. All rights reserved.Galleto\n  </span>\n  <div class=\"gtx-flex-container gtx-flex-column gtx-unmargin\">\n    <span class=\"gtx-text\">Become a friend</span>\n    <nav class=\"gtx-navbar gtx-navbar--footer\">\n      <ul class=\"gtx-navbar__options\">\n        <li>\n          <a href=\"https://twitter.com/sirgalleto\">Twitter</a>\n        </li>\n        <li>\n          <a href=\"https://www.instagram.com/sirgalleto/\">Instagram</a>\n        </li>\n        <li>\n          <a href=\"http://github.com/sirgalleto/\"> Github</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</footer>";
},"useData":true});
templates['header'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header>\n  <nav class=\"gtx-navbar gtx-navbar--primary\">\n    <img src=\"public/galleto.png\" alt=\"Galleto\" class=\"gtx-logo\" />\n    <ul class=\"gtx-navbar__options\">\n      <li>\n        <a href=\"./projects.html\"> Projects</a>\n      </li>\n      <li>\n        <a href=\"./thoughts.html\"> Thoughts</a>\n      </li>\n      <li>\n        <a href=\"./photos.html\"> Photos</a>\n      </li>\n      <li>\n        <a href=\"./contact.html\"> Contact</a>\n      </li>\n    </ul>\n  </nav>\n</header>";
},"useData":true});
templates['projectsPreview'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <a class=\"gtx-project-box\" href=\"#\">\n      <aside class=\"gtx-project-box__index\">/ "
    + alias3((lookupProperty(helpers,"increment")||(depth0 && lookupProperty(depth0,"increment"))||alias2).call(alias1,(data && lookupProperty(data,"index")),{"name":"increment","hash":{},"data":data,"loc":{"start":{"line":4,"column":46},"end":{"line":4,"column":66}}}))
    + "</aside>\n      <span class=\"gtx-project-box__tag\">"
    + alias3(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":5,"column":41},"end":{"line":5,"column":49}}}) : helper)))
    + "</span>\n      <h2 class=\"gtx-project-box__title\">"
    + alias3(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":41},"end":{"line":6,"column":49}}}) : helper)))
    + "</h2>\n    </a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"gtx-project-box__container\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"projects") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":8,"column":11}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
})();