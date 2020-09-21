(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['allProjects'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"gtx-project-box__container\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":9,"column":13}}})) != null ? stack1 : "")
    + "  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <a class=\"gtx-project-box\" href=\"project.html?project="
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":60},"end":{"line":4,"column":68}}}) : helper)))
    + "\" data-aos=\"fade-up\">\n        <aside class=\"gtx-project-box__index\">/ "
    + alias4((lookupProperty(helpers,"increment")||(depth0 && lookupProperty(depth0,"increment"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"index") : depth0),{"name":"increment","hash":{},"data":data,"loc":{"start":{"line":5,"column":48},"end":{"line":5,"column":67}}}))
    + "</aside>\n        <span class=\"gtx-project-box__tag\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":6,"column":43},"end":{"line":6,"column":51}}}) : helper)))
    + "</span>\n        <h2 class=\"gtx-project-box__title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":43},"end":{"line":7,"column":51}}}) : helper)))
    + "</h2>\n      </a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"projectsSection") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":11,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['footer'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<footer class=\"gtx-section gtx-section--primary gtx-section--footer\">\n  <img\n    src=\"public/galleto-isotype-white.png\"\n    alt=\"Galleto isotype\"\n    class=\"gtx-isotype\"\n  />\n  <span class=\"gtx-text gtx-text--right\">\n    © 2020. All rights reserved.Galleto\n  </span>\n  <div class=\"gtx-flex-container gtx-navbar--footer__container gtx-flex-column\">\n    <span class=\"gtx-text\">Become a friend</span>\n    <nav class=\"gtx-navbar gtx-navbar--footer\">\n      <ul class=\"gtx-navbar__options\">\n        <li>\n          <a href=\"https://twitter.com/sirgalleto\">Twitter</a>\n        </li>\n        <li>\n          <a href=\"https://www.instagram.com/sirgalleto/\">Instagram</a>\n        </li>\n        <li>\n          <a href=\"http://github.com/sirgalleto/\"> Github</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</footer>";
},"useData":true});
templates['header'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header>\n  <nav class=\"gtx-navbar gtx-navbar--primary\">\n    <a href=\"index.html\" class=\"gtx-invisible-anchor\">\n      <img src=\"public/galleto.png\" alt=\"Galleto\" class=\"gtx-logo\" />\n    </a>\n    <ul class=\"gtx-navbar__options\">\n      <li>\n        <a href=\"./projects.html\"> Projects</a>\n      </li>\n      <li>\n        <a href=\"./photos.html\"> Photos</a>\n      </li>\n      <li>\n        <a href=\"./contact.html\"> Contact</a>\n      </li>\n      <li>\n        <a href=\"http://medium.com/@sirgalleto\"> Thoughts</a>\n      </li>\n    </ul>\n  </nav>\n</header>";
},"useData":true});
templates['projectDetails'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"project") : depth0)) != null ? lookupProperty(stack1,"githubUrl") : stack1), depth0))
    + "\" class=\"github-corner\" aria-label=\"View source on GitHub\"><svg width=\"80\" height=\"80\" viewBox=\"0 0 250 250\" style=\"fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;\" aria-hidden=\"true\"><path d=\"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z\"></path><path d=\"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2\" fill=\"currentColor\" style=\"transform-origin: 130px 106px;\" class=\"octo-arm\"></path><path d=\"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z\" fill=\"currentColor\" class=\"octo-body\"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>\n<div class=\"gtx-markdown markdown-body\">\n  "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"projectReadme") || (depth0 != null ? lookupProperty(depth0,"projectReadme") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"projectReadme","hash":{},"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":4,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\n</div>";
},"useData":true});
templates['projectsPreview'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <a class=\"gtx-project-box\" href=\"project.html?project="
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":3,"column":58},"end":{"line":3,"column":66}}}) : helper)))
    + "\" data-aos=\"fade-up\">\n      <aside class=\"gtx-project-box__index\">/ "
    + alias4((lookupProperty(helpers,"increment")||(depth0 && lookupProperty(depth0,"increment"))||alias2).call(alias1,(data && lookupProperty(data,"index")),{"name":"increment","hash":{},"data":data,"loc":{"start":{"line":4,"column":46},"end":{"line":4,"column":66}}}))
    + "</aside>\n      <span class=\"gtx-project-box__tag\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":5,"column":41},"end":{"line":5,"column":49}}}) : helper)))
    + "</span>\n      <h2 class=\"gtx-project-box__title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":41},"end":{"line":6,"column":49}}}) : helper)))
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