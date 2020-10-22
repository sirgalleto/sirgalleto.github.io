// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === "function" && parcelRequire;
  var nodeRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof parcelRequire === "function" && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === "string") {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = "MODULE_NOT_FOUND";
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === "function" && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})(
  {
    "node_modules/showdown/dist/showdown.js": [
      function (require, module, exports) {
        var define; /*! showdown v 1.9.1 - 02-11-2019 */
        (function () {
          /**
           * Created by Tivie on 13-07-2015.
           */

          function getDefaultOpts(simple) {
            "use strict";

            var defaultOptions = {
              omitExtraWLInCodeBlocks: {
                defaultValue: false,
                describe:
                  "Omit the default extra whiteline added to code blocks",
                type: "boolean",
              },
              noHeaderId: {
                defaultValue: false,
                describe: "Turn on/off generated header id",
                type: "boolean",
              },
              prefixHeaderId: {
                defaultValue: false,
                describe:
                  "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
                type: "string",
              },
              rawPrefixHeaderId: {
                defaultValue: false,
                describe:
                  'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
                type: "boolean",
              },
              ghCompatibleHeaderId: {
                defaultValue: false,
                describe:
                  "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
                type: "boolean",
              },
              rawHeaderId: {
                defaultValue: false,
                describe:
                  "Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",
                type: "boolean",
              },
              headerLevelStart: {
                defaultValue: false,
                describe: "The header blocks level start",
                type: "integer",
              },
              parseImgDimensions: {
                defaultValue: false,
                describe: "Turn on/off image dimension parsing",
                type: "boolean",
              },
              simplifiedAutoLink: {
                defaultValue: false,
                describe: "Turn on/off GFM autolink style",
                type: "boolean",
              },
              excludeTrailingPunctuationFromURLs: {
                defaultValue: false,
                describe:
                  "Excludes trailing punctuation from links generated with autoLinking",
                type: "boolean",
              },
              literalMidWordUnderscores: {
                defaultValue: false,
                describe: "Parse midword underscores as literal underscores",
                type: "boolean",
              },
              literalMidWordAsterisks: {
                defaultValue: false,
                describe: "Parse midword asterisks as literal asterisks",
                type: "boolean",
              },
              strikethrough: {
                defaultValue: false,
                describe: "Turn on/off strikethrough support",
                type: "boolean",
              },
              tables: {
                defaultValue: false,
                describe: "Turn on/off tables support",
                type: "boolean",
              },
              tablesHeaderId: {
                defaultValue: false,
                describe: "Add an id to table headers",
                type: "boolean",
              },
              ghCodeBlocks: {
                defaultValue: true,
                describe: "Turn on/off GFM fenced code blocks support",
                type: "boolean",
              },
              tasklists: {
                defaultValue: false,
                describe: "Turn on/off GFM tasklist support",
                type: "boolean",
              },
              smoothLivePreview: {
                defaultValue: false,
                describe:
                  "Prevents weird effects in live previews due to incomplete input",
                type: "boolean",
              },
              smartIndentationFix: {
                defaultValue: false,
                description: "Tries to smartly fix indentation in es6 strings",
                type: "boolean",
              },
              disableForced4SpacesIndentedSublists: {
                defaultValue: false,
                description:
                  "Disables the requirement of indenting nested sublists by 4 spaces",
                type: "boolean",
              },
              simpleLineBreaks: {
                defaultValue: false,
                description: "Parses simple line breaks as <br> (GFM Style)",
                type: "boolean",
              },
              requireSpaceBeforeHeadingText: {
                defaultValue: false,
                description:
                  "Makes adding a space between `#` and the header text mandatory (GFM Style)",
                type: "boolean",
              },
              ghMentions: {
                defaultValue: false,
                description: "Enables github @mentions",
                type: "boolean",
              },
              ghMentionsLink: {
                defaultValue: "https://github.com/{u}",
                description:
                  "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
                type: "string",
              },
              encodeEmails: {
                defaultValue: true,
                description:
                  "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
                type: "boolean",
              },
              openLinksInNewWindow: {
                defaultValue: false,
                description: "Open all links in new windows",
                type: "boolean",
              },
              backslashEscapesHTMLTags: {
                defaultValue: false,
                description:
                  "Support for HTML Tag escaping. ex: <div>foo</div>",
                type: "boolean",
              },
              emoji: {
                defaultValue: false,
                description:
                  "Enable emoji support. Ex: `this is a :smile: emoji`",
                type: "boolean",
              },
              underline: {
                defaultValue: false,
                description:
                  "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
                type: "boolean",
              },
              completeHTMLDocument: {
                defaultValue: false,
                description:
                  "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
                type: "boolean",
              },
              metadata: {
                defaultValue: false,
                description:
                  "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",
                type: "boolean",
              },
              splitAdjacentBlockquotes: {
                defaultValue: false,
                description: "Split adjacent blockquote blocks",
                type: "boolean",
              },
            };
            if (simple === false) {
              return JSON.parse(JSON.stringify(defaultOptions));
            }
            var ret = {};
            for (var opt in defaultOptions) {
              if (defaultOptions.hasOwnProperty(opt)) {
                ret[opt] = defaultOptions[opt].defaultValue;
              }
            }
            return ret;
          }

          function allOptionsOn() {
            "use strict";
            var options = getDefaultOpts(true),
              ret = {};
            for (var opt in options) {
              if (options.hasOwnProperty(opt)) {
                ret[opt] = true;
              }
            }
            return ret;
          }

          /**
           * Created by Tivie on 06-01-2015.
           */

          // Private properties
          var showdown = {},
            parsers = {},
            extensions = {},
            globalOptions = getDefaultOpts(true),
            setFlavor = "vanilla",
            flavor = {
              github: {
                omitExtraWLInCodeBlocks: true,
                simplifiedAutoLink: true,
                excludeTrailingPunctuationFromURLs: true,
                literalMidWordUnderscores: true,
                strikethrough: true,
                tables: true,
                tablesHeaderId: true,
                ghCodeBlocks: true,
                tasklists: true,
                disableForced4SpacesIndentedSublists: true,
                simpleLineBreaks: true,
                requireSpaceBeforeHeadingText: true,
                ghCompatibleHeaderId: true,
                ghMentions: true,
                backslashEscapesHTMLTags: true,
                emoji: true,
                splitAdjacentBlockquotes: true,
              },
              original: {
                noHeaderId: true,
                ghCodeBlocks: false,
              },
              ghost: {
                omitExtraWLInCodeBlocks: true,
                parseImgDimensions: true,
                simplifiedAutoLink: true,
                excludeTrailingPunctuationFromURLs: true,
                literalMidWordUnderscores: true,
                strikethrough: true,
                tables: true,
                tablesHeaderId: true,
                ghCodeBlocks: true,
                tasklists: true,
                smoothLivePreview: true,
                simpleLineBreaks: true,
                requireSpaceBeforeHeadingText: true,
                ghMentions: false,
                encodeEmails: true,
              },
              vanilla: getDefaultOpts(true),
              allOn: allOptionsOn(),
            };

          /**
           * helper namespace
           * @type {{}}
           */
          showdown.helper = {};

          /**
           * TODO LEGACY SUPPORT CODE
           * @type {{}}
           */
          showdown.extensions = {};

          /**
           * Set a global option
           * @static
           * @param {string} key
           * @param {*} value
           * @returns {showdown}
           */
          showdown.setOption = function (key, value) {
            "use strict";
            globalOptions[key] = value;
            return this;
          };

          /**
           * Get a global option
           * @static
           * @param {string} key
           * @returns {*}
           */
          showdown.getOption = function (key) {
            "use strict";
            return globalOptions[key];
          };

          /**
           * Get the global options
           * @static
           * @returns {{}}
           */
          showdown.getOptions = function () {
            "use strict";
            return globalOptions;
          };

          /**
           * Reset global options to the default values
           * @static
           */
          showdown.resetOptions = function () {
            "use strict";
            globalOptions = getDefaultOpts(true);
          };

          /**
           * Set the flavor showdown should use as default
           * @param {string} name
           */
          showdown.setFlavor = function (name) {
            "use strict";
            if (!flavor.hasOwnProperty(name)) {
              throw Error(name + " flavor was not found");
            }
            showdown.resetOptions();
            var preset = flavor[name];
            setFlavor = name;
            for (var option in preset) {
              if (preset.hasOwnProperty(option)) {
                globalOptions[option] = preset[option];
              }
            }
          };

          /**
           * Get the currently set flavor
           * @returns {string}
           */
          showdown.getFlavor = function () {
            "use strict";
            return setFlavor;
          };

          /**
           * Get the options of a specified flavor. Returns undefined if the flavor was not found
           * @param {string} name Name of the flavor
           * @returns {{}|undefined}
           */
          showdown.getFlavorOptions = function (name) {
            "use strict";
            if (flavor.hasOwnProperty(name)) {
              return flavor[name];
            }
          };

          /**
           * Get the default options
           * @static
           * @param {boolean} [simple=true]
           * @returns {{}}
           */
          showdown.getDefaultOptions = function (simple) {
            "use strict";
            return getDefaultOpts(simple);
          };

          /**
           * Get or set a subParser
           *
           * subParser(name)       - Get a registered subParser
           * subParser(name, func) - Register a subParser
           * @static
           * @param {string} name
           * @param {function} [func]
           * @returns {*}
           */
          showdown.subParser = function (name, func) {
            "use strict";
            if (showdown.helper.isString(name)) {
              if (typeof func !== "undefined") {
                parsers[name] = func;
              } else {
                if (parsers.hasOwnProperty(name)) {
                  return parsers[name];
                } else {
                  throw Error("SubParser named " + name + " not registered!");
                }
              }
            }
          };

          /**
           * Gets or registers an extension
           * @static
           * @param {string} name
           * @param {object|function=} ext
           * @returns {*}
           */
          showdown.extension = function (name, ext) {
            "use strict";

            if (!showdown.helper.isString(name)) {
              throw Error("Extension 'name' must be a string");
            }

            name = showdown.helper.stdExtName(name);

            // Getter
            if (showdown.helper.isUndefined(ext)) {
              if (!extensions.hasOwnProperty(name)) {
                throw Error("Extension named " + name + " is not registered!");
              }
              return extensions[name];

              // Setter
            } else {
              // Expand extension if it's wrapped in a function
              if (typeof ext === "function") {
                ext = ext();
              }

              // Ensure extension is an array
              if (!showdown.helper.isArray(ext)) {
                ext = [ext];
              }

              var validExtension = validate(ext, name);

              if (validExtension.valid) {
                extensions[name] = ext;
              } else {
                throw Error(validExtension.error);
              }
            }
          };

          /**
           * Gets all extensions registered
           * @returns {{}}
           */
          showdown.getAllExtensions = function () {
            "use strict";
            return extensions;
          };

          /**
           * Remove an extension
           * @param {string} name
           */
          showdown.removeExtension = function (name) {
            "use strict";
            delete extensions[name];
          };

          /**
           * Removes all extensions
           */
          showdown.resetExtensions = function () {
            "use strict";
            extensions = {};
          };

          /**
           * Validate extension
           * @param {array} extension
           * @param {string} name
           * @returns {{valid: boolean, error: string}}
           */
          function validate(extension, name) {
            "use strict";

            var errMsg = name
                ? "Error in " + name + " extension->"
                : "Error in unnamed extension",
              ret = {
                valid: true,
                error: "",
              };

            if (!showdown.helper.isArray(extension)) {
              extension = [extension];
            }

            for (var i = 0; i < extension.length; ++i) {
              var baseMsg = errMsg + " sub-extension " + i + ": ",
                ext = extension[i];
              if (typeof ext !== "object") {
                ret.valid = false;
                ret.error =
                  baseMsg + "must be an object, but " + typeof ext + " given";
                return ret;
              }

              if (!showdown.helper.isString(ext.type)) {
                ret.valid = false;
                ret.error =
                  baseMsg +
                  'property "type" must be a string, but ' +
                  typeof ext.type +
                  " given";
                return ret;
              }

              var type = (ext.type = ext.type.toLowerCase());

              // normalize extension type
              if (type === "language") {
                type = ext.type = "lang";
              }

              if (type === "html") {
                type = ext.type = "output";
              }

              if (type !== "lang" && type !== "output" && type !== "listener") {
                ret.valid = false;
                ret.error =
                  baseMsg +
                  "type " +
                  type +
                  ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
                return ret;
              }

              if (type === "listener") {
                if (showdown.helper.isUndefined(ext.listeners)) {
                  ret.valid = false;
                  ret.error =
                    baseMsg +
                    '. Extensions of type "listener" must have a property called "listeners"';
                  return ret;
                }
              } else {
                if (
                  showdown.helper.isUndefined(ext.filter) &&
                  showdown.helper.isUndefined(ext.regex)
                ) {
                  ret.valid = false;
                  ret.error =
                    baseMsg +
                    type +
                    ' extensions must define either a "regex" property or a "filter" method';
                  return ret;
                }
              }

              if (ext.listeners) {
                if (typeof ext.listeners !== "object") {
                  ret.valid = false;
                  ret.error =
                    baseMsg +
                    '"listeners" property must be an object but ' +
                    typeof ext.listeners +
                    " given";
                  return ret;
                }
                for (var ln in ext.listeners) {
                  if (ext.listeners.hasOwnProperty(ln)) {
                    if (typeof ext.listeners[ln] !== "function") {
                      ret.valid = false;
                      ret.error =
                        baseMsg +
                        '"listeners" property must be an hash of [event name]: [callback]. listeners.' +
                        ln +
                        " must be a function but " +
                        typeof ext.listeners[ln] +
                        " given";
                      return ret;
                    }
                  }
                }
              }

              if (ext.filter) {
                if (typeof ext.filter !== "function") {
                  ret.valid = false;
                  ret.error =
                    baseMsg +
                    '"filter" must be a function, but ' +
                    typeof ext.filter +
                    " given";
                  return ret;
                }
              } else if (ext.regex) {
                if (showdown.helper.isString(ext.regex)) {
                  ext.regex = new RegExp(ext.regex, "g");
                }
                if (!(ext.regex instanceof RegExp)) {
                  ret.valid = false;
                  ret.error =
                    baseMsg +
                    '"regex" property must either be a string or a RegExp object, but ' +
                    typeof ext.regex +
                    " given";
                  return ret;
                }
                if (showdown.helper.isUndefined(ext.replace)) {
                  ret.valid = false;
                  ret.error =
                    baseMsg +
                    '"regex" extensions must implement a replace string or function';
                  return ret;
                }
              }
            }
            return ret;
          }

          /**
           * Validate extension
           * @param {object} ext
           * @returns {boolean}
           */
          showdown.validateExtension = function (ext) {
            "use strict";

            var validateExtension = validate(ext, null);
            if (!validateExtension.valid) {
              console.warn(validateExtension.error);
              return false;
            }
            return true;
          };

          /**
           * showdownjs helper functions
           */

          if (!showdown.hasOwnProperty("helper")) {
            showdown.helper = {};
          }

          /**
           * Check if var is string
           * @static
           * @param {string} a
           * @returns {boolean}
           */
          showdown.helper.isString = function (a) {
            "use strict";
            return typeof a === "string" || a instanceof String;
          };

          /**
           * Check if var is a function
           * @static
           * @param {*} a
           * @returns {boolean}
           */
          showdown.helper.isFunction = function (a) {
            "use strict";
            var getType = {};
            return a && getType.toString.call(a) === "[object Function]";
          };

          /**
           * isArray helper function
           * @static
           * @param {*} a
           * @returns {boolean}
           */
          showdown.helper.isArray = function (a) {
            "use strict";
            return Array.isArray(a);
          };

          /**
           * Check if value is undefined
           * @static
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
           */
          showdown.helper.isUndefined = function (value) {
            "use strict";
            return typeof value === "undefined";
          };

          /**
           * ForEach helper function
           * Iterates over Arrays and Objects (own properties only)
           * @static
           * @param {*} obj
           * @param {function} callback Accepts 3 params: 1. value, 2. key, 3. the original array/object
           */
          showdown.helper.forEach = function (obj, callback) {
            "use strict";
            // check if obj is defined
            if (showdown.helper.isUndefined(obj)) {
              throw new Error("obj param is required");
            }

            if (showdown.helper.isUndefined(callback)) {
              throw new Error("callback param is required");
            }

            if (!showdown.helper.isFunction(callback)) {
              throw new Error("callback param must be a function/closure");
            }

            if (typeof obj.forEach === "function") {
              obj.forEach(callback);
            } else if (showdown.helper.isArray(obj)) {
              for (var i = 0; i < obj.length; i++) {
                callback(obj[i], i, obj);
              }
            } else if (typeof obj === "object") {
              for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                  callback(obj[prop], prop, obj);
                }
              }
            } else {
              throw new Error(
                "obj does not seem to be an array or an iterable object"
              );
            }
          };

          /**
           * Standardidize extension name
           * @static
           * @param {string} s extension name
           * @returns {string}
           */
          showdown.helper.stdExtName = function (s) {
            "use strict";
            return s
              .replace(/[_?*+\/\\.^-]/g, "")
              .replace(/\s/g, "")
              .toLowerCase();
          };

          function escapeCharactersCallback(wholeMatch, m1) {
            "use strict";
            var charCodeToEscape = m1.charCodeAt(0);
            return "¨E" + charCodeToEscape + "E";
          }

          /**
           * Callback used to escape characters when passing through String.replace
           * @static
           * @param {string} wholeMatch
           * @param {string} m1
           * @returns {string}
           */
          showdown.helper.escapeCharactersCallback = escapeCharactersCallback;

          /**
           * Escape characters in a string
           * @static
           * @param {string} text
           * @param {string} charsToEscape
           * @param {boolean} afterBackslash
           * @returns {XML|string|void|*}
           */
          showdown.helper.escapeCharacters = function (
            text,
            charsToEscape,
            afterBackslash
          ) {
            "use strict";
            // First we have to escape the escape characters so that
            // we can build a character class out of them
            var regexString =
              "([" + charsToEscape.replace(/([\[\]\\])/g, "\\$1") + "])";

            if (afterBackslash) {
              regexString = "\\\\" + regexString;
            }

            var regex = new RegExp(regexString, "g");
            text = text.replace(regex, escapeCharactersCallback);

            return text;
          };

          /**
           * Unescape HTML entities
           * @param txt
           * @returns {string}
           */
          showdown.helper.unescapeHTMLEntities = function (txt) {
            "use strict";

            return txt
              .replace(/&quot;/g, '"')
              .replace(/&lt;/g, "<")
              .replace(/&gt;/g, ">")
              .replace(/&amp;/g, "&");
          };

          var rgxFindMatchPos = function (str, left, right, flags) {
            "use strict";
            var f = flags || "",
              g = f.indexOf("g") > -1,
              x = new RegExp(left + "|" + right, "g" + f.replace(/g/g, "")),
              l = new RegExp(left, f.replace(/g/g, "")),
              pos = [],
              t,
              s,
              m,
              start,
              end;

            do {
              t = 0;
              while ((m = x.exec(str))) {
                if (l.test(m[0])) {
                  if (!t++) {
                    s = x.lastIndex;
                    start = s - m[0].length;
                  }
                } else if (t) {
                  if (!--t) {
                    end = m.index + m[0].length;
                    var obj = {
                      left: { start: start, end: s },
                      match: { start: s, end: m.index },
                      right: { start: m.index, end: end },
                      wholeMatch: { start: start, end: end },
                    };
                    pos.push(obj);
                    if (!g) {
                      return pos;
                    }
                  }
                }
              }
            } while (t && (x.lastIndex = s));

            return pos;
          };

          /**
           * matchRecursiveRegExp
           *
           * (c) 2007 Steven Levithan <stevenlevithan.com>
           * MIT License
           *
           * Accepts a string to search, a left and right format delimiter
           * as regex patterns, and optional regex flags. Returns an array
           * of matches, allowing nested instances of left/right delimiters.
           * Use the "g" flag to return all matches, otherwise only the
           * first is returned. Be careful to ensure that the left and
           * right format delimiters produce mutually exclusive matches.
           * Backreferences are not supported within the right delimiter
           * due to how it is internally combined with the left delimiter.
           * When matching strings whose format delimiters are unbalanced
           * to the left or right, the output is intentionally as a
           * conventional regex library with recursion support would
           * produce, e.g. "<<x>" and "<x>>" both produce ["x"] when using
           * "<" and ">" as the delimiters (both strings contain a single,
           * balanced instance of "<x>").
           *
           * examples:
           * matchRecursiveRegExp("test", "\\(", "\\)")
           * returns: []
           * matchRecursiveRegExp("<t<<e>><s>>t<>", "<", ">", "g")
           * returns: ["t<<e>><s>", ""]
           * matchRecursiveRegExp("<div id=\"x\">test</div>", "<div\\b[^>]*>", "</div>", "gi")
           * returns: ["test"]
           */
          showdown.helper.matchRecursiveRegExp = function (
            str,
            left,
            right,
            flags
          ) {
            "use strict";

            var matchPos = rgxFindMatchPos(str, left, right, flags),
              results = [];

            for (var i = 0; i < matchPos.length; ++i) {
              results.push([
                str.slice(
                  matchPos[i].wholeMatch.start,
                  matchPos[i].wholeMatch.end
                ),
                str.slice(matchPos[i].match.start, matchPos[i].match.end),
                str.slice(matchPos[i].left.start, matchPos[i].left.end),
                str.slice(matchPos[i].right.start, matchPos[i].right.end),
              ]);
            }
            return results;
          };

          /**
           *
           * @param {string} str
           * @param {string|function} replacement
           * @param {string} left
           * @param {string} right
           * @param {string} flags
           * @returns {string}
           */
          showdown.helper.replaceRecursiveRegExp = function (
            str,
            replacement,
            left,
            right,
            flags
          ) {
            "use strict";

            if (!showdown.helper.isFunction(replacement)) {
              var repStr = replacement;
              replacement = function () {
                return repStr;
              };
            }

            var matchPos = rgxFindMatchPos(str, left, right, flags),
              finalStr = str,
              lng = matchPos.length;

            if (lng > 0) {
              var bits = [];
              if (matchPos[0].wholeMatch.start !== 0) {
                bits.push(str.slice(0, matchPos[0].wholeMatch.start));
              }
              for (var i = 0; i < lng; ++i) {
                bits.push(
                  replacement(
                    str.slice(
                      matchPos[i].wholeMatch.start,
                      matchPos[i].wholeMatch.end
                    ),
                    str.slice(matchPos[i].match.start, matchPos[i].match.end),
                    str.slice(matchPos[i].left.start, matchPos[i].left.end),
                    str.slice(matchPos[i].right.start, matchPos[i].right.end)
                  )
                );
                if (i < lng - 1) {
                  bits.push(
                    str.slice(
                      matchPos[i].wholeMatch.end,
                      matchPos[i + 1].wholeMatch.start
                    )
                  );
                }
              }
              if (matchPos[lng - 1].wholeMatch.end < str.length) {
                bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
              }
              finalStr = bits.join("");
            }
            return finalStr;
          };

          /**
           * Returns the index within the passed String object of the first occurrence of the specified regex,
           * starting the search at fromIndex. Returns -1 if the value is not found.
           *
           * @param {string} str string to search
           * @param {RegExp} regex Regular expression to search
           * @param {int} [fromIndex = 0] Index to start the search
           * @returns {Number}
           * @throws InvalidArgumentError
           */
          showdown.helper.regexIndexOf = function (str, regex, fromIndex) {
            "use strict";
            if (!showdown.helper.isString(str)) {
              throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
            }
            if (regex instanceof RegExp === false) {
              throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
            }
            var indexOf = str.substring(fromIndex || 0).search(regex);
            return indexOf >= 0 ? indexOf + (fromIndex || 0) : indexOf;
          };

          /**
           * Splits the passed string object at the defined index, and returns an array composed of the two substrings
           * @param {string} str string to split
           * @param {int} index index to split string at
           * @returns {[string,string]}
           * @throws InvalidArgumentError
           */
          showdown.helper.splitAtIndex = function (str, index) {
            "use strict";
            if (!showdown.helper.isString(str)) {
              throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
            }
            return [str.substring(0, index), str.substring(index)];
          };

          /**
           * Obfuscate an e-mail address through the use of Character Entities,
           * transforming ASCII characters into their equivalent decimal or hex entities.
           *
           * Since it has a random component, subsequent calls to this function produce different results
           *
           * @param {string} mail
           * @returns {string}
           */
          showdown.helper.encodeEmailAddress = function (mail) {
            "use strict";
            var encode = [
              function (ch) {
                return "&#" + ch.charCodeAt(0) + ";";
              },
              function (ch) {
                return "&#x" + ch.charCodeAt(0).toString(16) + ";";
              },
              function (ch) {
                return ch;
              },
            ];

            mail = mail.replace(/./g, function (ch) {
              if (ch === "@") {
                // this *must* be encoded. I insist.
                ch = encode[Math.floor(Math.random() * 2)](ch);
              } else {
                var r = Math.random();
                // roughly 10% raw, 45% hex, 45% dec
                ch =
                  r > 0.9
                    ? encode[2](ch)
                    : r > 0.45
                    ? encode[1](ch)
                    : encode[0](ch);
              }
              return ch;
            });

            return mail;
          };

          /**
           *
           * @param str
           * @param targetLength
           * @param padString
           * @returns {string}
           */
          showdown.helper.padEnd = function padEnd(
            str,
            targetLength,
            padString
          ) {
            "use strict";
            /*jshint bitwise: false*/
            // eslint-disable-next-line space-infix-ops
            targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
            /*jshint bitwise: true*/
            padString = String(padString || " ");
            if (str.length > targetLength) {
              return String(str);
            } else {
              targetLength = targetLength - str.length;
              if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
              }
              return String(str) + padString.slice(0, targetLength);
            }
          };

          /**
           * POLYFILLS
           */
          // use this instead of builtin is undefined for IE8 compatibility
          if (typeof console === "undefined") {
            console = {
              warn: function (msg) {
                "use strict";
                alert(msg);
              },
              log: function (msg) {
                "use strict";
                alert(msg);
              },
              error: function (msg) {
                "use strict";
                throw msg;
              },
            };
          }

          /**
           * Common regexes.
           * We declare some common regexes to improve performance
           */
          showdown.helper.regexes = {
            asteriskDashAndColon: /([*_:~])/g,
          };

          /**
           * EMOJIS LIST
           */
          showdown.helper.emojis = {
            "+1": "\ud83d\udc4d",
            "-1": "\ud83d\udc4e",
            100: "\ud83d\udcaf",
            1234: "\ud83d\udd22",
            "1st_place_medal": "\ud83e\udd47",
            "2nd_place_medal": "\ud83e\udd48",
            "3rd_place_medal": "\ud83e\udd49",
            "8ball": "\ud83c\udfb1",
            a: "\ud83c\udd70\ufe0f",
            ab: "\ud83c\udd8e",
            abc: "\ud83d\udd24",
            abcd: "\ud83d\udd21",
            accept: "\ud83c\ude51",
            aerial_tramway: "\ud83d\udea1",
            airplane: "\u2708\ufe0f",
            alarm_clock: "\u23f0",
            alembic: "\u2697\ufe0f",
            alien: "\ud83d\udc7d",
            ambulance: "\ud83d\ude91",
            amphora: "\ud83c\udffa",
            anchor: "\u2693\ufe0f",
            angel: "\ud83d\udc7c",
            anger: "\ud83d\udca2",
            angry: "\ud83d\ude20",
            anguished: "\ud83d\ude27",
            ant: "\ud83d\udc1c",
            apple: "\ud83c\udf4e",
            aquarius: "\u2652\ufe0f",
            aries: "\u2648\ufe0f",
            arrow_backward: "\u25c0\ufe0f",
            arrow_double_down: "\u23ec",
            arrow_double_up: "\u23eb",
            arrow_down: "\u2b07\ufe0f",
            arrow_down_small: "\ud83d\udd3d",
            arrow_forward: "\u25b6\ufe0f",
            arrow_heading_down: "\u2935\ufe0f",
            arrow_heading_up: "\u2934\ufe0f",
            arrow_left: "\u2b05\ufe0f",
            arrow_lower_left: "\u2199\ufe0f",
            arrow_lower_right: "\u2198\ufe0f",
            arrow_right: "\u27a1\ufe0f",
            arrow_right_hook: "\u21aa\ufe0f",
            arrow_up: "\u2b06\ufe0f",
            arrow_up_down: "\u2195\ufe0f",
            arrow_up_small: "\ud83d\udd3c",
            arrow_upper_left: "\u2196\ufe0f",
            arrow_upper_right: "\u2197\ufe0f",
            arrows_clockwise: "\ud83d\udd03",
            arrows_counterclockwise: "\ud83d\udd04",
            art: "\ud83c\udfa8",
            articulated_lorry: "\ud83d\ude9b",
            artificial_satellite: "\ud83d\udef0",
            astonished: "\ud83d\ude32",
            athletic_shoe: "\ud83d\udc5f",
            atm: "\ud83c\udfe7",
            atom_symbol: "\u269b\ufe0f",
            avocado: "\ud83e\udd51",
            b: "\ud83c\udd71\ufe0f",
            baby: "\ud83d\udc76",
            baby_bottle: "\ud83c\udf7c",
            baby_chick: "\ud83d\udc24",
            baby_symbol: "\ud83d\udebc",
            back: "\ud83d\udd19",
            bacon: "\ud83e\udd53",
            badminton: "\ud83c\udff8",
            baggage_claim: "\ud83d\udec4",
            baguette_bread: "\ud83e\udd56",
            balance_scale: "\u2696\ufe0f",
            balloon: "\ud83c\udf88",
            ballot_box: "\ud83d\uddf3",
            ballot_box_with_check: "\u2611\ufe0f",
            bamboo: "\ud83c\udf8d",
            banana: "\ud83c\udf4c",
            bangbang: "\u203c\ufe0f",
            bank: "\ud83c\udfe6",
            bar_chart: "\ud83d\udcca",
            barber: "\ud83d\udc88",
            baseball: "\u26be\ufe0f",
            basketball: "\ud83c\udfc0",
            basketball_man: "\u26f9\ufe0f",
            basketball_woman: "\u26f9\ufe0f&zwj;\u2640\ufe0f",
            bat: "\ud83e\udd87",
            bath: "\ud83d\udec0",
            bathtub: "\ud83d\udec1",
            battery: "\ud83d\udd0b",
            beach_umbrella: "\ud83c\udfd6",
            bear: "\ud83d\udc3b",
            bed: "\ud83d\udecf",
            bee: "\ud83d\udc1d",
            beer: "\ud83c\udf7a",
            beers: "\ud83c\udf7b",
            beetle: "\ud83d\udc1e",
            beginner: "\ud83d\udd30",
            bell: "\ud83d\udd14",
            bellhop_bell: "\ud83d\udece",
            bento: "\ud83c\udf71",
            biking_man: "\ud83d\udeb4",
            bike: "\ud83d\udeb2",
            biking_woman: "\ud83d\udeb4&zwj;\u2640\ufe0f",
            bikini: "\ud83d\udc59",
            biohazard: "\u2623\ufe0f",
            bird: "\ud83d\udc26",
            birthday: "\ud83c\udf82",
            black_circle: "\u26ab\ufe0f",
            black_flag: "\ud83c\udff4",
            black_heart: "\ud83d\udda4",
            black_joker: "\ud83c\udccf",
            black_large_square: "\u2b1b\ufe0f",
            black_medium_small_square: "\u25fe\ufe0f",
            black_medium_square: "\u25fc\ufe0f",
            black_nib: "\u2712\ufe0f",
            black_small_square: "\u25aa\ufe0f",
            black_square_button: "\ud83d\udd32",
            blonde_man: "\ud83d\udc71",
            blonde_woman: "\ud83d\udc71&zwj;\u2640\ufe0f",
            blossom: "\ud83c\udf3c",
            blowfish: "\ud83d\udc21",
            blue_book: "\ud83d\udcd8",
            blue_car: "\ud83d\ude99",
            blue_heart: "\ud83d\udc99",
            blush: "\ud83d\ude0a",
            boar: "\ud83d\udc17",
            boat: "\u26f5\ufe0f",
            bomb: "\ud83d\udca3",
            book: "\ud83d\udcd6",
            bookmark: "\ud83d\udd16",
            bookmark_tabs: "\ud83d\udcd1",
            books: "\ud83d\udcda",
            boom: "\ud83d\udca5",
            boot: "\ud83d\udc62",
            bouquet: "\ud83d\udc90",
            bowing_man: "\ud83d\ude47",
            bow_and_arrow: "\ud83c\udff9",
            bowing_woman: "\ud83d\ude47&zwj;\u2640\ufe0f",
            bowling: "\ud83c\udfb3",
            boxing_glove: "\ud83e\udd4a",
            boy: "\ud83d\udc66",
            bread: "\ud83c\udf5e",
            bride_with_veil: "\ud83d\udc70",
            bridge_at_night: "\ud83c\udf09",
            briefcase: "\ud83d\udcbc",
            broken_heart: "\ud83d\udc94",
            bug: "\ud83d\udc1b",
            building_construction: "\ud83c\udfd7",
            bulb: "\ud83d\udca1",
            bullettrain_front: "\ud83d\ude85",
            bullettrain_side: "\ud83d\ude84",
            burrito: "\ud83c\udf2f",
            bus: "\ud83d\ude8c",
            business_suit_levitating: "\ud83d\udd74",
            busstop: "\ud83d\ude8f",
            bust_in_silhouette: "\ud83d\udc64",
            busts_in_silhouette: "\ud83d\udc65",
            butterfly: "\ud83e\udd8b",
            cactus: "\ud83c\udf35",
            cake: "\ud83c\udf70",
            calendar: "\ud83d\udcc6",
            call_me_hand: "\ud83e\udd19",
            calling: "\ud83d\udcf2",
            camel: "\ud83d\udc2b",
            camera: "\ud83d\udcf7",
            camera_flash: "\ud83d\udcf8",
            camping: "\ud83c\udfd5",
            cancer: "\u264b\ufe0f",
            candle: "\ud83d\udd6f",
            candy: "\ud83c\udf6c",
            canoe: "\ud83d\udef6",
            capital_abcd: "\ud83d\udd20",
            capricorn: "\u2651\ufe0f",
            car: "\ud83d\ude97",
            card_file_box: "\ud83d\uddc3",
            card_index: "\ud83d\udcc7",
            card_index_dividers: "\ud83d\uddc2",
            carousel_horse: "\ud83c\udfa0",
            carrot: "\ud83e\udd55",
            cat: "\ud83d\udc31",
            cat2: "\ud83d\udc08",
            cd: "\ud83d\udcbf",
            chains: "\u26d3",
            champagne: "\ud83c\udf7e",
            chart: "\ud83d\udcb9",
            chart_with_downwards_trend: "\ud83d\udcc9",
            chart_with_upwards_trend: "\ud83d\udcc8",
            checkered_flag: "\ud83c\udfc1",
            cheese: "\ud83e\uddc0",
            cherries: "\ud83c\udf52",
            cherry_blossom: "\ud83c\udf38",
            chestnut: "\ud83c\udf30",
            chicken: "\ud83d\udc14",
            children_crossing: "\ud83d\udeb8",
            chipmunk: "\ud83d\udc3f",
            chocolate_bar: "\ud83c\udf6b",
            christmas_tree: "\ud83c\udf84",
            church: "\u26ea\ufe0f",
            cinema: "\ud83c\udfa6",
            circus_tent: "\ud83c\udfaa",
            city_sunrise: "\ud83c\udf07",
            city_sunset: "\ud83c\udf06",
            cityscape: "\ud83c\udfd9",
            cl: "\ud83c\udd91",
            clamp: "\ud83d\udddc",
            clap: "\ud83d\udc4f",
            clapper: "\ud83c\udfac",
            classical_building: "\ud83c\udfdb",
            clinking_glasses: "\ud83e\udd42",
            clipboard: "\ud83d\udccb",
            clock1: "\ud83d\udd50",
            clock10: "\ud83d\udd59",
            clock1030: "\ud83d\udd65",
            clock11: "\ud83d\udd5a",
            clock1130: "\ud83d\udd66",
            clock12: "\ud83d\udd5b",
            clock1230: "\ud83d\udd67",
            clock130: "\ud83d\udd5c",
            clock2: "\ud83d\udd51",
            clock230: "\ud83d\udd5d",
            clock3: "\ud83d\udd52",
            clock330: "\ud83d\udd5e",
            clock4: "\ud83d\udd53",
            clock430: "\ud83d\udd5f",
            clock5: "\ud83d\udd54",
            clock530: "\ud83d\udd60",
            clock6: "\ud83d\udd55",
            clock630: "\ud83d\udd61",
            clock7: "\ud83d\udd56",
            clock730: "\ud83d\udd62",
            clock8: "\ud83d\udd57",
            clock830: "\ud83d\udd63",
            clock9: "\ud83d\udd58",
            clock930: "\ud83d\udd64",
            closed_book: "\ud83d\udcd5",
            closed_lock_with_key: "\ud83d\udd10",
            closed_umbrella: "\ud83c\udf02",
            cloud: "\u2601\ufe0f",
            cloud_with_lightning: "\ud83c\udf29",
            cloud_with_lightning_and_rain: "\u26c8",
            cloud_with_rain: "\ud83c\udf27",
            cloud_with_snow: "\ud83c\udf28",
            clown_face: "\ud83e\udd21",
            clubs: "\u2663\ufe0f",
            cocktail: "\ud83c\udf78",
            coffee: "\u2615\ufe0f",
            coffin: "\u26b0\ufe0f",
            cold_sweat: "\ud83d\ude30",
            comet: "\u2604\ufe0f",
            computer: "\ud83d\udcbb",
            computer_mouse: "\ud83d\uddb1",
            confetti_ball: "\ud83c\udf8a",
            confounded: "\ud83d\ude16",
            confused: "\ud83d\ude15",
            congratulations: "\u3297\ufe0f",
            construction: "\ud83d\udea7",
            construction_worker_man: "\ud83d\udc77",
            construction_worker_woman: "\ud83d\udc77&zwj;\u2640\ufe0f",
            control_knobs: "\ud83c\udf9b",
            convenience_store: "\ud83c\udfea",
            cookie: "\ud83c\udf6a",
            cool: "\ud83c\udd92",
            policeman: "\ud83d\udc6e",
            copyright: "\u00a9\ufe0f",
            corn: "\ud83c\udf3d",
            couch_and_lamp: "\ud83d\udecb",
            couple: "\ud83d\udc6b",
            couple_with_heart_woman_man: "\ud83d\udc91",
            couple_with_heart_man_man:
              "\ud83d\udc68&zwj;\u2764\ufe0f&zwj;\ud83d\udc68",
            couple_with_heart_woman_woman:
              "\ud83d\udc69&zwj;\u2764\ufe0f&zwj;\ud83d\udc69",
            couplekiss_man_man:
              "\ud83d\udc68&zwj;\u2764\ufe0f&zwj;\ud83d\udc8b&zwj;\ud83d\udc68",
            couplekiss_man_woman: "\ud83d\udc8f",
            couplekiss_woman_woman:
              "\ud83d\udc69&zwj;\u2764\ufe0f&zwj;\ud83d\udc8b&zwj;\ud83d\udc69",
            cow: "\ud83d\udc2e",
            cow2: "\ud83d\udc04",
            cowboy_hat_face: "\ud83e\udd20",
            crab: "\ud83e\udd80",
            crayon: "\ud83d\udd8d",
            credit_card: "\ud83d\udcb3",
            crescent_moon: "\ud83c\udf19",
            cricket: "\ud83c\udfcf",
            crocodile: "\ud83d\udc0a",
            croissant: "\ud83e\udd50",
            crossed_fingers: "\ud83e\udd1e",
            crossed_flags: "\ud83c\udf8c",
            crossed_swords: "\u2694\ufe0f",
            crown: "\ud83d\udc51",
            cry: "\ud83d\ude22",
            crying_cat_face: "\ud83d\ude3f",
            crystal_ball: "\ud83d\udd2e",
            cucumber: "\ud83e\udd52",
            cupid: "\ud83d\udc98",
            curly_loop: "\u27b0",
            currency_exchange: "\ud83d\udcb1",
            curry: "\ud83c\udf5b",
            custard: "\ud83c\udf6e",
            customs: "\ud83d\udec3",
            cyclone: "\ud83c\udf00",
            dagger: "\ud83d\udde1",
            dancer: "\ud83d\udc83",
            dancing_women: "\ud83d\udc6f",
            dancing_men: "\ud83d\udc6f&zwj;\u2642\ufe0f",
            dango: "\ud83c\udf61",
            dark_sunglasses: "\ud83d\udd76",
            dart: "\ud83c\udfaf",
            dash: "\ud83d\udca8",
            date: "\ud83d\udcc5",
            deciduous_tree: "\ud83c\udf33",
            deer: "\ud83e\udd8c",
            department_store: "\ud83c\udfec",
            derelict_house: "\ud83c\udfda",
            desert: "\ud83c\udfdc",
            desert_island: "\ud83c\udfdd",
            desktop_computer: "\ud83d\udda5",
            male_detective: "\ud83d\udd75\ufe0f",
            diamond_shape_with_a_dot_inside: "\ud83d\udca0",
            diamonds: "\u2666\ufe0f",
            disappointed: "\ud83d\ude1e",
            disappointed_relieved: "\ud83d\ude25",
            dizzy: "\ud83d\udcab",
            dizzy_face: "\ud83d\ude35",
            do_not_litter: "\ud83d\udeaf",
            dog: "\ud83d\udc36",
            dog2: "\ud83d\udc15",
            dollar: "\ud83d\udcb5",
            dolls: "\ud83c\udf8e",
            dolphin: "\ud83d\udc2c",
            door: "\ud83d\udeaa",
            doughnut: "\ud83c\udf69",
            dove: "\ud83d\udd4a",
            dragon: "\ud83d\udc09",
            dragon_face: "\ud83d\udc32",
            dress: "\ud83d\udc57",
            dromedary_camel: "\ud83d\udc2a",
            drooling_face: "\ud83e\udd24",
            droplet: "\ud83d\udca7",
            drum: "\ud83e\udd41",
            duck: "\ud83e\udd86",
            dvd: "\ud83d\udcc0",
            "e-mail": "\ud83d\udce7",
            eagle: "\ud83e\udd85",
            ear: "\ud83d\udc42",
            ear_of_rice: "\ud83c\udf3e",
            earth_africa: "\ud83c\udf0d",
            earth_americas: "\ud83c\udf0e",
            earth_asia: "\ud83c\udf0f",
            egg: "\ud83e\udd5a",
            eggplant: "\ud83c\udf46",
            eight_pointed_black_star: "\u2734\ufe0f",
            eight_spoked_asterisk: "\u2733\ufe0f",
            electric_plug: "\ud83d\udd0c",
            elephant: "\ud83d\udc18",
            email: "\u2709\ufe0f",
            end: "\ud83d\udd1a",
            envelope_with_arrow: "\ud83d\udce9",
            euro: "\ud83d\udcb6",
            european_castle: "\ud83c\udff0",
            european_post_office: "\ud83c\udfe4",
            evergreen_tree: "\ud83c\udf32",
            exclamation: "\u2757\ufe0f",
            expressionless: "\ud83d\ude11",
            eye: "\ud83d\udc41",
            eye_speech_bubble: "\ud83d\udc41&zwj;\ud83d\udde8",
            eyeglasses: "\ud83d\udc53",
            eyes: "\ud83d\udc40",
            face_with_head_bandage: "\ud83e\udd15",
            face_with_thermometer: "\ud83e\udd12",
            fist_oncoming: "\ud83d\udc4a",
            factory: "\ud83c\udfed",
            fallen_leaf: "\ud83c\udf42",
            family_man_woman_boy: "\ud83d\udc6a",
            family_man_boy: "\ud83d\udc68&zwj;\ud83d\udc66",
            family_man_boy_boy:
              "\ud83d\udc68&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
            family_man_girl: "\ud83d\udc68&zwj;\ud83d\udc67",
            family_man_girl_boy:
              "\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
            family_man_girl_girl:
              "\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
            family_man_man_boy:
              "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc66",
            family_man_man_boy_boy:
              "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
            family_man_man_girl:
              "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67",
            family_man_man_girl_boy:
              "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
            family_man_man_girl_girl:
              "\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
            family_man_woman_boy_boy:
              "\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
            family_man_woman_girl:
              "\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67",
            family_man_woman_girl_boy:
              "\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
            family_man_woman_girl_girl:
              "\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
            family_woman_boy: "\ud83d\udc69&zwj;\ud83d\udc66",
            family_woman_boy_boy:
              "\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
            family_woman_girl: "\ud83d\udc69&zwj;\ud83d\udc67",
            family_woman_girl_boy:
              "\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
            family_woman_girl_girl:
              "\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
            family_woman_woman_boy:
              "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc66",
            family_woman_woman_boy_boy:
              "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66",
            family_woman_woman_girl:
              "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67",
            family_woman_woman_girl_boy:
              "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66",
            family_woman_woman_girl_girl:
              "\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67",
            fast_forward: "\u23e9",
            fax: "\ud83d\udce0",
            fearful: "\ud83d\ude28",
            feet: "\ud83d\udc3e",
            female_detective: "\ud83d\udd75\ufe0f&zwj;\u2640\ufe0f",
            ferris_wheel: "\ud83c\udfa1",
            ferry: "\u26f4",
            field_hockey: "\ud83c\udfd1",
            file_cabinet: "\ud83d\uddc4",
            file_folder: "\ud83d\udcc1",
            film_projector: "\ud83d\udcfd",
            film_strip: "\ud83c\udf9e",
            fire: "\ud83d\udd25",
            fire_engine: "\ud83d\ude92",
            fireworks: "\ud83c\udf86",
            first_quarter_moon: "\ud83c\udf13",
            first_quarter_moon_with_face: "\ud83c\udf1b",
            fish: "\ud83d\udc1f",
            fish_cake: "\ud83c\udf65",
            fishing_pole_and_fish: "\ud83c\udfa3",
            fist_raised: "\u270a",
            fist_left: "\ud83e\udd1b",
            fist_right: "\ud83e\udd1c",
            flags: "\ud83c\udf8f",
            flashlight: "\ud83d\udd26",
            fleur_de_lis: "\u269c\ufe0f",
            flight_arrival: "\ud83d\udeec",
            flight_departure: "\ud83d\udeeb",
            floppy_disk: "\ud83d\udcbe",
            flower_playing_cards: "\ud83c\udfb4",
            flushed: "\ud83d\ude33",
            fog: "\ud83c\udf2b",
            foggy: "\ud83c\udf01",
            football: "\ud83c\udfc8",
            footprints: "\ud83d\udc63",
            fork_and_knife: "\ud83c\udf74",
            fountain: "\u26f2\ufe0f",
            fountain_pen: "\ud83d\udd8b",
            four_leaf_clover: "\ud83c\udf40",
            fox_face: "\ud83e\udd8a",
            framed_picture: "\ud83d\uddbc",
            free: "\ud83c\udd93",
            fried_egg: "\ud83c\udf73",
            fried_shrimp: "\ud83c\udf64",
            fries: "\ud83c\udf5f",
            frog: "\ud83d\udc38",
            frowning: "\ud83d\ude26",
            frowning_face: "\u2639\ufe0f",
            frowning_man: "\ud83d\ude4d&zwj;\u2642\ufe0f",
            frowning_woman: "\ud83d\ude4d",
            middle_finger: "\ud83d\udd95",
            fuelpump: "\u26fd\ufe0f",
            full_moon: "\ud83c\udf15",
            full_moon_with_face: "\ud83c\udf1d",
            funeral_urn: "\u26b1\ufe0f",
            game_die: "\ud83c\udfb2",
            gear: "\u2699\ufe0f",
            gem: "\ud83d\udc8e",
            gemini: "\u264a\ufe0f",
            ghost: "\ud83d\udc7b",
            gift: "\ud83c\udf81",
            gift_heart: "\ud83d\udc9d",
            girl: "\ud83d\udc67",
            globe_with_meridians: "\ud83c\udf10",
            goal_net: "\ud83e\udd45",
            goat: "\ud83d\udc10",
            golf: "\u26f3\ufe0f",
            golfing_man: "\ud83c\udfcc\ufe0f",
            golfing_woman: "\ud83c\udfcc\ufe0f&zwj;\u2640\ufe0f",
            gorilla: "\ud83e\udd8d",
            grapes: "\ud83c\udf47",
            green_apple: "\ud83c\udf4f",
            green_book: "\ud83d\udcd7",
            green_heart: "\ud83d\udc9a",
            green_salad: "\ud83e\udd57",
            grey_exclamation: "\u2755",
            grey_question: "\u2754",
            grimacing: "\ud83d\ude2c",
            grin: "\ud83d\ude01",
            grinning: "\ud83d\ude00",
            guardsman: "\ud83d\udc82",
            guardswoman: "\ud83d\udc82&zwj;\u2640\ufe0f",
            guitar: "\ud83c\udfb8",
            gun: "\ud83d\udd2b",
            haircut_woman: "\ud83d\udc87",
            haircut_man: "\ud83d\udc87&zwj;\u2642\ufe0f",
            hamburger: "\ud83c\udf54",
            hammer: "\ud83d\udd28",
            hammer_and_pick: "\u2692",
            hammer_and_wrench: "\ud83d\udee0",
            hamster: "\ud83d\udc39",
            hand: "\u270b",
            handbag: "\ud83d\udc5c",
            handshake: "\ud83e\udd1d",
            hankey: "\ud83d\udca9",
            hatched_chick: "\ud83d\udc25",
            hatching_chick: "\ud83d\udc23",
            headphones: "\ud83c\udfa7",
            hear_no_evil: "\ud83d\ude49",
            heart: "\u2764\ufe0f",
            heart_decoration: "\ud83d\udc9f",
            heart_eyes: "\ud83d\ude0d",
            heart_eyes_cat: "\ud83d\ude3b",
            heartbeat: "\ud83d\udc93",
            heartpulse: "\ud83d\udc97",
            hearts: "\u2665\ufe0f",
            heavy_check_mark: "\u2714\ufe0f",
            heavy_division_sign: "\u2797",
            heavy_dollar_sign: "\ud83d\udcb2",
            heavy_heart_exclamation: "\u2763\ufe0f",
            heavy_minus_sign: "\u2796",
            heavy_multiplication_x: "\u2716\ufe0f",
            heavy_plus_sign: "\u2795",
            helicopter: "\ud83d\ude81",
            herb: "\ud83c\udf3f",
            hibiscus: "\ud83c\udf3a",
            high_brightness: "\ud83d\udd06",
            high_heel: "\ud83d\udc60",
            hocho: "\ud83d\udd2a",
            hole: "\ud83d\udd73",
            honey_pot: "\ud83c\udf6f",
            horse: "\ud83d\udc34",
            horse_racing: "\ud83c\udfc7",
            hospital: "\ud83c\udfe5",
            hot_pepper: "\ud83c\udf36",
            hotdog: "\ud83c\udf2d",
            hotel: "\ud83c\udfe8",
            hotsprings: "\u2668\ufe0f",
            hourglass: "\u231b\ufe0f",
            hourglass_flowing_sand: "\u23f3",
            house: "\ud83c\udfe0",
            house_with_garden: "\ud83c\udfe1",
            houses: "\ud83c\udfd8",
            hugs: "\ud83e\udd17",
            hushed: "\ud83d\ude2f",
            ice_cream: "\ud83c\udf68",
            ice_hockey: "\ud83c\udfd2",
            ice_skate: "\u26f8",
            icecream: "\ud83c\udf66",
            id: "\ud83c\udd94",
            ideograph_advantage: "\ud83c\ude50",
            imp: "\ud83d\udc7f",
            inbox_tray: "\ud83d\udce5",
            incoming_envelope: "\ud83d\udce8",
            tipping_hand_woman: "\ud83d\udc81",
            information_source: "\u2139\ufe0f",
            innocent: "\ud83d\ude07",
            interrobang: "\u2049\ufe0f",
            iphone: "\ud83d\udcf1",
            izakaya_lantern: "\ud83c\udfee",
            jack_o_lantern: "\ud83c\udf83",
            japan: "\ud83d\uddfe",
            japanese_castle: "\ud83c\udfef",
            japanese_goblin: "\ud83d\udc7a",
            japanese_ogre: "\ud83d\udc79",
            jeans: "\ud83d\udc56",
            joy: "\ud83d\ude02",
            joy_cat: "\ud83d\ude39",
            joystick: "\ud83d\udd79",
            kaaba: "\ud83d\udd4b",
            key: "\ud83d\udd11",
            keyboard: "\u2328\ufe0f",
            keycap_ten: "\ud83d\udd1f",
            kick_scooter: "\ud83d\udef4",
            kimono: "\ud83d\udc58",
            kiss: "\ud83d\udc8b",
            kissing: "\ud83d\ude17",
            kissing_cat: "\ud83d\ude3d",
            kissing_closed_eyes: "\ud83d\ude1a",
            kissing_heart: "\ud83d\ude18",
            kissing_smiling_eyes: "\ud83d\ude19",
            kiwi_fruit: "\ud83e\udd5d",
            koala: "\ud83d\udc28",
            koko: "\ud83c\ude01",
            label: "\ud83c\udff7",
            large_blue_circle: "\ud83d\udd35",
            large_blue_diamond: "\ud83d\udd37",
            large_orange_diamond: "\ud83d\udd36",
            last_quarter_moon: "\ud83c\udf17",
            last_quarter_moon_with_face: "\ud83c\udf1c",
            latin_cross: "\u271d\ufe0f",
            laughing: "\ud83d\ude06",
            leaves: "\ud83c\udf43",
            ledger: "\ud83d\udcd2",
            left_luggage: "\ud83d\udec5",
            left_right_arrow: "\u2194\ufe0f",
            leftwards_arrow_with_hook: "\u21a9\ufe0f",
            lemon: "\ud83c\udf4b",
            leo: "\u264c\ufe0f",
            leopard: "\ud83d\udc06",
            level_slider: "\ud83c\udf9a",
            libra: "\u264e\ufe0f",
            light_rail: "\ud83d\ude88",
            link: "\ud83d\udd17",
            lion: "\ud83e\udd81",
            lips: "\ud83d\udc44",
            lipstick: "\ud83d\udc84",
            lizard: "\ud83e\udd8e",
            lock: "\ud83d\udd12",
            lock_with_ink_pen: "\ud83d\udd0f",
            lollipop: "\ud83c\udf6d",
            loop: "\u27bf",
            loud_sound: "\ud83d\udd0a",
            loudspeaker: "\ud83d\udce2",
            love_hotel: "\ud83c\udfe9",
            love_letter: "\ud83d\udc8c",
            low_brightness: "\ud83d\udd05",
            lying_face: "\ud83e\udd25",
            m: "\u24c2\ufe0f",
            mag: "\ud83d\udd0d",
            mag_right: "\ud83d\udd0e",
            mahjong: "\ud83c\udc04\ufe0f",
            mailbox: "\ud83d\udceb",
            mailbox_closed: "\ud83d\udcea",
            mailbox_with_mail: "\ud83d\udcec",
            mailbox_with_no_mail: "\ud83d\udced",
            man: "\ud83d\udc68",
            man_artist: "\ud83d\udc68&zwj;\ud83c\udfa8",
            man_astronaut: "\ud83d\udc68&zwj;\ud83d\ude80",
            man_cartwheeling: "\ud83e\udd38&zwj;\u2642\ufe0f",
            man_cook: "\ud83d\udc68&zwj;\ud83c\udf73",
            man_dancing: "\ud83d\udd7a",
            man_facepalming: "\ud83e\udd26&zwj;\u2642\ufe0f",
            man_factory_worker: "\ud83d\udc68&zwj;\ud83c\udfed",
            man_farmer: "\ud83d\udc68&zwj;\ud83c\udf3e",
            man_firefighter: "\ud83d\udc68&zwj;\ud83d\ude92",
            man_health_worker: "\ud83d\udc68&zwj;\u2695\ufe0f",
            man_in_tuxedo: "\ud83e\udd35",
            man_judge: "\ud83d\udc68&zwj;\u2696\ufe0f",
            man_juggling: "\ud83e\udd39&zwj;\u2642\ufe0f",
            man_mechanic: "\ud83d\udc68&zwj;\ud83d\udd27",
            man_office_worker: "\ud83d\udc68&zwj;\ud83d\udcbc",
            man_pilot: "\ud83d\udc68&zwj;\u2708\ufe0f",
            man_playing_handball: "\ud83e\udd3e&zwj;\u2642\ufe0f",
            man_playing_water_polo: "\ud83e\udd3d&zwj;\u2642\ufe0f",
            man_scientist: "\ud83d\udc68&zwj;\ud83d\udd2c",
            man_shrugging: "\ud83e\udd37&zwj;\u2642\ufe0f",
            man_singer: "\ud83d\udc68&zwj;\ud83c\udfa4",
            man_student: "\ud83d\udc68&zwj;\ud83c\udf93",
            man_teacher: "\ud83d\udc68&zwj;\ud83c\udfeb",
            man_technologist: "\ud83d\udc68&zwj;\ud83d\udcbb",
            man_with_gua_pi_mao: "\ud83d\udc72",
            man_with_turban: "\ud83d\udc73",
            tangerine: "\ud83c\udf4a",
            mans_shoe: "\ud83d\udc5e",
            mantelpiece_clock: "\ud83d\udd70",
            maple_leaf: "\ud83c\udf41",
            martial_arts_uniform: "\ud83e\udd4b",
            mask: "\ud83d\ude37",
            massage_woman: "\ud83d\udc86",
            massage_man: "\ud83d\udc86&zwj;\u2642\ufe0f",
            meat_on_bone: "\ud83c\udf56",
            medal_military: "\ud83c\udf96",
            medal_sports: "\ud83c\udfc5",
            mega: "\ud83d\udce3",
            melon: "\ud83c\udf48",
            memo: "\ud83d\udcdd",
            men_wrestling: "\ud83e\udd3c&zwj;\u2642\ufe0f",
            menorah: "\ud83d\udd4e",
            mens: "\ud83d\udeb9",
            metal: "\ud83e\udd18",
            metro: "\ud83d\ude87",
            microphone: "\ud83c\udfa4",
            microscope: "\ud83d\udd2c",
            milk_glass: "\ud83e\udd5b",
            milky_way: "\ud83c\udf0c",
            minibus: "\ud83d\ude90",
            minidisc: "\ud83d\udcbd",
            mobile_phone_off: "\ud83d\udcf4",
            money_mouth_face: "\ud83e\udd11",
            money_with_wings: "\ud83d\udcb8",
            moneybag: "\ud83d\udcb0",
            monkey: "\ud83d\udc12",
            monkey_face: "\ud83d\udc35",
            monorail: "\ud83d\ude9d",
            moon: "\ud83c\udf14",
            mortar_board: "\ud83c\udf93",
            mosque: "\ud83d\udd4c",
            motor_boat: "\ud83d\udee5",
            motor_scooter: "\ud83d\udef5",
            motorcycle: "\ud83c\udfcd",
            motorway: "\ud83d\udee3",
            mount_fuji: "\ud83d\uddfb",
            mountain: "\u26f0",
            mountain_biking_man: "\ud83d\udeb5",
            mountain_biking_woman: "\ud83d\udeb5&zwj;\u2640\ufe0f",
            mountain_cableway: "\ud83d\udea0",
            mountain_railway: "\ud83d\ude9e",
            mountain_snow: "\ud83c\udfd4",
            mouse: "\ud83d\udc2d",
            mouse2: "\ud83d\udc01",
            movie_camera: "\ud83c\udfa5",
            moyai: "\ud83d\uddff",
            mrs_claus: "\ud83e\udd36",
            muscle: "\ud83d\udcaa",
            mushroom: "\ud83c\udf44",
            musical_keyboard: "\ud83c\udfb9",
            musical_note: "\ud83c\udfb5",
            musical_score: "\ud83c\udfbc",
            mute: "\ud83d\udd07",
            nail_care: "\ud83d\udc85",
            name_badge: "\ud83d\udcdb",
            national_park: "\ud83c\udfde",
            nauseated_face: "\ud83e\udd22",
            necktie: "\ud83d\udc54",
            negative_squared_cross_mark: "\u274e",
            nerd_face: "\ud83e\udd13",
            neutral_face: "\ud83d\ude10",
            new: "\ud83c\udd95",
            new_moon: "\ud83c\udf11",
            new_moon_with_face: "\ud83c\udf1a",
            newspaper: "\ud83d\udcf0",
            newspaper_roll: "\ud83d\uddde",
            next_track_button: "\u23ed",
            ng: "\ud83c\udd96",
            no_good_man: "\ud83d\ude45&zwj;\u2642\ufe0f",
            no_good_woman: "\ud83d\ude45",
            night_with_stars: "\ud83c\udf03",
            no_bell: "\ud83d\udd15",
            no_bicycles: "\ud83d\udeb3",
            no_entry: "\u26d4\ufe0f",
            no_entry_sign: "\ud83d\udeab",
            no_mobile_phones: "\ud83d\udcf5",
            no_mouth: "\ud83d\ude36",
            no_pedestrians: "\ud83d\udeb7",
            no_smoking: "\ud83d\udead",
            "non-potable_water": "\ud83d\udeb1",
            nose: "\ud83d\udc43",
            notebook: "\ud83d\udcd3",
            notebook_with_decorative_cover: "\ud83d\udcd4",
            notes: "\ud83c\udfb6",
            nut_and_bolt: "\ud83d\udd29",
            o: "\u2b55\ufe0f",
            o2: "\ud83c\udd7e\ufe0f",
            ocean: "\ud83c\udf0a",
            octopus: "\ud83d\udc19",
            oden: "\ud83c\udf62",
            office: "\ud83c\udfe2",
            oil_drum: "\ud83d\udee2",
            ok: "\ud83c\udd97",
            ok_hand: "\ud83d\udc4c",
            ok_man: "\ud83d\ude46&zwj;\u2642\ufe0f",
            ok_woman: "\ud83d\ude46",
            old_key: "\ud83d\udddd",
            older_man: "\ud83d\udc74",
            older_woman: "\ud83d\udc75",
            om: "\ud83d\udd49",
            on: "\ud83d\udd1b",
            oncoming_automobile: "\ud83d\ude98",
            oncoming_bus: "\ud83d\ude8d",
            oncoming_police_car: "\ud83d\ude94",
            oncoming_taxi: "\ud83d\ude96",
            open_file_folder: "\ud83d\udcc2",
            open_hands: "\ud83d\udc50",
            open_mouth: "\ud83d\ude2e",
            open_umbrella: "\u2602\ufe0f",
            ophiuchus: "\u26ce",
            orange_book: "\ud83d\udcd9",
            orthodox_cross: "\u2626\ufe0f",
            outbox_tray: "\ud83d\udce4",
            owl: "\ud83e\udd89",
            ox: "\ud83d\udc02",
            package: "\ud83d\udce6",
            page_facing_up: "\ud83d\udcc4",
            page_with_curl: "\ud83d\udcc3",
            pager: "\ud83d\udcdf",
            paintbrush: "\ud83d\udd8c",
            palm_tree: "\ud83c\udf34",
            pancakes: "\ud83e\udd5e",
            panda_face: "\ud83d\udc3c",
            paperclip: "\ud83d\udcce",
            paperclips: "\ud83d\udd87",
            parasol_on_ground: "\u26f1",
            parking: "\ud83c\udd7f\ufe0f",
            part_alternation_mark: "\u303d\ufe0f",
            partly_sunny: "\u26c5\ufe0f",
            passenger_ship: "\ud83d\udef3",
            passport_control: "\ud83d\udec2",
            pause_button: "\u23f8",
            peace_symbol: "\u262e\ufe0f",
            peach: "\ud83c\udf51",
            peanuts: "\ud83e\udd5c",
            pear: "\ud83c\udf50",
            pen: "\ud83d\udd8a",
            pencil2: "\u270f\ufe0f",
            penguin: "\ud83d\udc27",
            pensive: "\ud83d\ude14",
            performing_arts: "\ud83c\udfad",
            persevere: "\ud83d\ude23",
            person_fencing: "\ud83e\udd3a",
            pouting_woman: "\ud83d\ude4e",
            phone: "\u260e\ufe0f",
            pick: "\u26cf",
            pig: "\ud83d\udc37",
            pig2: "\ud83d\udc16",
            pig_nose: "\ud83d\udc3d",
            pill: "\ud83d\udc8a",
            pineapple: "\ud83c\udf4d",
            ping_pong: "\ud83c\udfd3",
            pisces: "\u2653\ufe0f",
            pizza: "\ud83c\udf55",
            place_of_worship: "\ud83d\uded0",
            plate_with_cutlery: "\ud83c\udf7d",
            play_or_pause_button: "\u23ef",
            point_down: "\ud83d\udc47",
            point_left: "\ud83d\udc48",
            point_right: "\ud83d\udc49",
            point_up: "\u261d\ufe0f",
            point_up_2: "\ud83d\udc46",
            police_car: "\ud83d\ude93",
            policewoman: "\ud83d\udc6e&zwj;\u2640\ufe0f",
            poodle: "\ud83d\udc29",
            popcorn: "\ud83c\udf7f",
            post_office: "\ud83c\udfe3",
            postal_horn: "\ud83d\udcef",
            postbox: "\ud83d\udcee",
            potable_water: "\ud83d\udeb0",
            potato: "\ud83e\udd54",
            pouch: "\ud83d\udc5d",
            poultry_leg: "\ud83c\udf57",
            pound: "\ud83d\udcb7",
            rage: "\ud83d\ude21",
            pouting_cat: "\ud83d\ude3e",
            pouting_man: "\ud83d\ude4e&zwj;\u2642\ufe0f",
            pray: "\ud83d\ude4f",
            prayer_beads: "\ud83d\udcff",
            pregnant_woman: "\ud83e\udd30",
            previous_track_button: "\u23ee",
            prince: "\ud83e\udd34",
            princess: "\ud83d\udc78",
            printer: "\ud83d\udda8",
            purple_heart: "\ud83d\udc9c",
            purse: "\ud83d\udc5b",
            pushpin: "\ud83d\udccc",
            put_litter_in_its_place: "\ud83d\udeae",
            question: "\u2753",
            rabbit: "\ud83d\udc30",
            rabbit2: "\ud83d\udc07",
            racehorse: "\ud83d\udc0e",
            racing_car: "\ud83c\udfce",
            radio: "\ud83d\udcfb",
            radio_button: "\ud83d\udd18",
            radioactive: "\u2622\ufe0f",
            railway_car: "\ud83d\ude83",
            railway_track: "\ud83d\udee4",
            rainbow: "\ud83c\udf08",
            rainbow_flag: "\ud83c\udff3\ufe0f&zwj;\ud83c\udf08",
            raised_back_of_hand: "\ud83e\udd1a",
            raised_hand_with_fingers_splayed: "\ud83d\udd90",
            raised_hands: "\ud83d\ude4c",
            raising_hand_woman: "\ud83d\ude4b",
            raising_hand_man: "\ud83d\ude4b&zwj;\u2642\ufe0f",
            ram: "\ud83d\udc0f",
            ramen: "\ud83c\udf5c",
            rat: "\ud83d\udc00",
            record_button: "\u23fa",
            recycle: "\u267b\ufe0f",
            red_circle: "\ud83d\udd34",
            registered: "\u00ae\ufe0f",
            relaxed: "\u263a\ufe0f",
            relieved: "\ud83d\ude0c",
            reminder_ribbon: "\ud83c\udf97",
            repeat: "\ud83d\udd01",
            repeat_one: "\ud83d\udd02",
            rescue_worker_helmet: "\u26d1",
            restroom: "\ud83d\udebb",
            revolving_hearts: "\ud83d\udc9e",
            rewind: "\u23ea",
            rhinoceros: "\ud83e\udd8f",
            ribbon: "\ud83c\udf80",
            rice: "\ud83c\udf5a",
            rice_ball: "\ud83c\udf59",
            rice_cracker: "\ud83c\udf58",
            rice_scene: "\ud83c\udf91",
            right_anger_bubble: "\ud83d\uddef",
            ring: "\ud83d\udc8d",
            robot: "\ud83e\udd16",
            rocket: "\ud83d\ude80",
            rofl: "\ud83e\udd23",
            roll_eyes: "\ud83d\ude44",
            roller_coaster: "\ud83c\udfa2",
            rooster: "\ud83d\udc13",
            rose: "\ud83c\udf39",
            rosette: "\ud83c\udff5",
            rotating_light: "\ud83d\udea8",
            round_pushpin: "\ud83d\udccd",
            rowing_man: "\ud83d\udea3",
            rowing_woman: "\ud83d\udea3&zwj;\u2640\ufe0f",
            rugby_football: "\ud83c\udfc9",
            running_man: "\ud83c\udfc3",
            running_shirt_with_sash: "\ud83c\udfbd",
            running_woman: "\ud83c\udfc3&zwj;\u2640\ufe0f",
            sa: "\ud83c\ude02\ufe0f",
            sagittarius: "\u2650\ufe0f",
            sake: "\ud83c\udf76",
            sandal: "\ud83d\udc61",
            santa: "\ud83c\udf85",
            satellite: "\ud83d\udce1",
            saxophone: "\ud83c\udfb7",
            school: "\ud83c\udfeb",
            school_satchel: "\ud83c\udf92",
            scissors: "\u2702\ufe0f",
            scorpion: "\ud83e\udd82",
            scorpius: "\u264f\ufe0f",
            scream: "\ud83d\ude31",
            scream_cat: "\ud83d\ude40",
            scroll: "\ud83d\udcdc",
            seat: "\ud83d\udcba",
            secret: "\u3299\ufe0f",
            see_no_evil: "\ud83d\ude48",
            seedling: "\ud83c\udf31",
            selfie: "\ud83e\udd33",
            shallow_pan_of_food: "\ud83e\udd58",
            shamrock: "\u2618\ufe0f",
            shark: "\ud83e\udd88",
            shaved_ice: "\ud83c\udf67",
            sheep: "\ud83d\udc11",
            shell: "\ud83d\udc1a",
            shield: "\ud83d\udee1",
            shinto_shrine: "\u26e9",
            ship: "\ud83d\udea2",
            shirt: "\ud83d\udc55",
            shopping: "\ud83d\udecd",
            shopping_cart: "\ud83d\uded2",
            shower: "\ud83d\udebf",
            shrimp: "\ud83e\udd90",
            signal_strength: "\ud83d\udcf6",
            six_pointed_star: "\ud83d\udd2f",
            ski: "\ud83c\udfbf",
            skier: "\u26f7",
            skull: "\ud83d\udc80",
            skull_and_crossbones: "\u2620\ufe0f",
            sleeping: "\ud83d\ude34",
            sleeping_bed: "\ud83d\udecc",
            sleepy: "\ud83d\ude2a",
            slightly_frowning_face: "\ud83d\ude41",
            slightly_smiling_face: "\ud83d\ude42",
            slot_machine: "\ud83c\udfb0",
            small_airplane: "\ud83d\udee9",
            small_blue_diamond: "\ud83d\udd39",
            small_orange_diamond: "\ud83d\udd38",
            small_red_triangle: "\ud83d\udd3a",
            small_red_triangle_down: "\ud83d\udd3b",
            smile: "\ud83d\ude04",
            smile_cat: "\ud83d\ude38",
            smiley: "\ud83d\ude03",
            smiley_cat: "\ud83d\ude3a",
            smiling_imp: "\ud83d\ude08",
            smirk: "\ud83d\ude0f",
            smirk_cat: "\ud83d\ude3c",
            smoking: "\ud83d\udeac",
            snail: "\ud83d\udc0c",
            snake: "\ud83d\udc0d",
            sneezing_face: "\ud83e\udd27",
            snowboarder: "\ud83c\udfc2",
            snowflake: "\u2744\ufe0f",
            snowman: "\u26c4\ufe0f",
            snowman_with_snow: "\u2603\ufe0f",
            sob: "\ud83d\ude2d",
            soccer: "\u26bd\ufe0f",
            soon: "\ud83d\udd1c",
            sos: "\ud83c\udd98",
            sound: "\ud83d\udd09",
            space_invader: "\ud83d\udc7e",
            spades: "\u2660\ufe0f",
            spaghetti: "\ud83c\udf5d",
            sparkle: "\u2747\ufe0f",
            sparkler: "\ud83c\udf87",
            sparkles: "\u2728",
            sparkling_heart: "\ud83d\udc96",
            speak_no_evil: "\ud83d\ude4a",
            speaker: "\ud83d\udd08",
            speaking_head: "\ud83d\udde3",
            speech_balloon: "\ud83d\udcac",
            speedboat: "\ud83d\udea4",
            spider: "\ud83d\udd77",
            spider_web: "\ud83d\udd78",
            spiral_calendar: "\ud83d\uddd3",
            spiral_notepad: "\ud83d\uddd2",
            spoon: "\ud83e\udd44",
            squid: "\ud83e\udd91",
            stadium: "\ud83c\udfdf",
            star: "\u2b50\ufe0f",
            star2: "\ud83c\udf1f",
            star_and_crescent: "\u262a\ufe0f",
            star_of_david: "\u2721\ufe0f",
            stars: "\ud83c\udf20",
            station: "\ud83d\ude89",
            statue_of_liberty: "\ud83d\uddfd",
            steam_locomotive: "\ud83d\ude82",
            stew: "\ud83c\udf72",
            stop_button: "\u23f9",
            stop_sign: "\ud83d\uded1",
            stopwatch: "\u23f1",
            straight_ruler: "\ud83d\udccf",
            strawberry: "\ud83c\udf53",
            stuck_out_tongue: "\ud83d\ude1b",
            stuck_out_tongue_closed_eyes: "\ud83d\ude1d",
            stuck_out_tongue_winking_eye: "\ud83d\ude1c",
            studio_microphone: "\ud83c\udf99",
            stuffed_flatbread: "\ud83e\udd59",
            sun_behind_large_cloud: "\ud83c\udf25",
            sun_behind_rain_cloud: "\ud83c\udf26",
            sun_behind_small_cloud: "\ud83c\udf24",
            sun_with_face: "\ud83c\udf1e",
            sunflower: "\ud83c\udf3b",
            sunglasses: "\ud83d\ude0e",
            sunny: "\u2600\ufe0f",
            sunrise: "\ud83c\udf05",
            sunrise_over_mountains: "\ud83c\udf04",
            surfing_man: "\ud83c\udfc4",
            surfing_woman: "\ud83c\udfc4&zwj;\u2640\ufe0f",
            sushi: "\ud83c\udf63",
            suspension_railway: "\ud83d\ude9f",
            sweat: "\ud83d\ude13",
            sweat_drops: "\ud83d\udca6",
            sweat_smile: "\ud83d\ude05",
            sweet_potato: "\ud83c\udf60",
            swimming_man: "\ud83c\udfca",
            swimming_woman: "\ud83c\udfca&zwj;\u2640\ufe0f",
            symbols: "\ud83d\udd23",
            synagogue: "\ud83d\udd4d",
            syringe: "\ud83d\udc89",
            taco: "\ud83c\udf2e",
            tada: "\ud83c\udf89",
            tanabata_tree: "\ud83c\udf8b",
            taurus: "\u2649\ufe0f",
            taxi: "\ud83d\ude95",
            tea: "\ud83c\udf75",
            telephone_receiver: "\ud83d\udcde",
            telescope: "\ud83d\udd2d",
            tennis: "\ud83c\udfbe",
            tent: "\u26fa\ufe0f",
            thermometer: "\ud83c\udf21",
            thinking: "\ud83e\udd14",
            thought_balloon: "\ud83d\udcad",
            ticket: "\ud83c\udfab",
            tickets: "\ud83c\udf9f",
            tiger: "\ud83d\udc2f",
            tiger2: "\ud83d\udc05",
            timer_clock: "\u23f2",
            tipping_hand_man: "\ud83d\udc81&zwj;\u2642\ufe0f",
            tired_face: "\ud83d\ude2b",
            tm: "\u2122\ufe0f",
            toilet: "\ud83d\udebd",
            tokyo_tower: "\ud83d\uddfc",
            tomato: "\ud83c\udf45",
            tongue: "\ud83d\udc45",
            top: "\ud83d\udd1d",
            tophat: "\ud83c\udfa9",
            tornado: "\ud83c\udf2a",
            trackball: "\ud83d\uddb2",
            tractor: "\ud83d\ude9c",
            traffic_light: "\ud83d\udea5",
            train: "\ud83d\ude8b",
            train2: "\ud83d\ude86",
            tram: "\ud83d\ude8a",
            triangular_flag_on_post: "\ud83d\udea9",
            triangular_ruler: "\ud83d\udcd0",
            trident: "\ud83d\udd31",
            triumph: "\ud83d\ude24",
            trolleybus: "\ud83d\ude8e",
            trophy: "\ud83c\udfc6",
            tropical_drink: "\ud83c\udf79",
            tropical_fish: "\ud83d\udc20",
            truck: "\ud83d\ude9a",
            trumpet: "\ud83c\udfba",
            tulip: "\ud83c\udf37",
            tumbler_glass: "\ud83e\udd43",
            turkey: "\ud83e\udd83",
            turtle: "\ud83d\udc22",
            tv: "\ud83d\udcfa",
            twisted_rightwards_arrows: "\ud83d\udd00",
            two_hearts: "\ud83d\udc95",
            two_men_holding_hands: "\ud83d\udc6c",
            two_women_holding_hands: "\ud83d\udc6d",
            u5272: "\ud83c\ude39",
            u5408: "\ud83c\ude34",
            u55b6: "\ud83c\ude3a",
            u6307: "\ud83c\ude2f\ufe0f",
            u6708: "\ud83c\ude37\ufe0f",
            u6709: "\ud83c\ude36",
            u6e80: "\ud83c\ude35",
            u7121: "\ud83c\ude1a\ufe0f",
            u7533: "\ud83c\ude38",
            u7981: "\ud83c\ude32",
            u7a7a: "\ud83c\ude33",
            umbrella: "\u2614\ufe0f",
            unamused: "\ud83d\ude12",
            underage: "\ud83d\udd1e",
            unicorn: "\ud83e\udd84",
            unlock: "\ud83d\udd13",
            up: "\ud83c\udd99",
            upside_down_face: "\ud83d\ude43",
            v: "\u270c\ufe0f",
            vertical_traffic_light: "\ud83d\udea6",
            vhs: "\ud83d\udcfc",
            vibration_mode: "\ud83d\udcf3",
            video_camera: "\ud83d\udcf9",
            video_game: "\ud83c\udfae",
            violin: "\ud83c\udfbb",
            virgo: "\u264d\ufe0f",
            volcano: "\ud83c\udf0b",
            volleyball: "\ud83c\udfd0",
            vs: "\ud83c\udd9a",
            vulcan_salute: "\ud83d\udd96",
            walking_man: "\ud83d\udeb6",
            walking_woman: "\ud83d\udeb6&zwj;\u2640\ufe0f",
            waning_crescent_moon: "\ud83c\udf18",
            waning_gibbous_moon: "\ud83c\udf16",
            warning: "\u26a0\ufe0f",
            wastebasket: "\ud83d\uddd1",
            watch: "\u231a\ufe0f",
            water_buffalo: "\ud83d\udc03",
            watermelon: "\ud83c\udf49",
            wave: "\ud83d\udc4b",
            wavy_dash: "\u3030\ufe0f",
            waxing_crescent_moon: "\ud83c\udf12",
            wc: "\ud83d\udebe",
            weary: "\ud83d\ude29",
            wedding: "\ud83d\udc92",
            weight_lifting_man: "\ud83c\udfcb\ufe0f",
            weight_lifting_woman: "\ud83c\udfcb\ufe0f&zwj;\u2640\ufe0f",
            whale: "\ud83d\udc33",
            whale2: "\ud83d\udc0b",
            wheel_of_dharma: "\u2638\ufe0f",
            wheelchair: "\u267f\ufe0f",
            white_check_mark: "\u2705",
            white_circle: "\u26aa\ufe0f",
            white_flag: "\ud83c\udff3\ufe0f",
            white_flower: "\ud83d\udcae",
            white_large_square: "\u2b1c\ufe0f",
            white_medium_small_square: "\u25fd\ufe0f",
            white_medium_square: "\u25fb\ufe0f",
            white_small_square: "\u25ab\ufe0f",
            white_square_button: "\ud83d\udd33",
            wilted_flower: "\ud83e\udd40",
            wind_chime: "\ud83c\udf90",
            wind_face: "\ud83c\udf2c",
            wine_glass: "\ud83c\udf77",
            wink: "\ud83d\ude09",
            wolf: "\ud83d\udc3a",
            woman: "\ud83d\udc69",
            woman_artist: "\ud83d\udc69&zwj;\ud83c\udfa8",
            woman_astronaut: "\ud83d\udc69&zwj;\ud83d\ude80",
            woman_cartwheeling: "\ud83e\udd38&zwj;\u2640\ufe0f",
            woman_cook: "\ud83d\udc69&zwj;\ud83c\udf73",
            woman_facepalming: "\ud83e\udd26&zwj;\u2640\ufe0f",
            woman_factory_worker: "\ud83d\udc69&zwj;\ud83c\udfed",
            woman_farmer: "\ud83d\udc69&zwj;\ud83c\udf3e",
            woman_firefighter: "\ud83d\udc69&zwj;\ud83d\ude92",
            woman_health_worker: "\ud83d\udc69&zwj;\u2695\ufe0f",
            woman_judge: "\ud83d\udc69&zwj;\u2696\ufe0f",
            woman_juggling: "\ud83e\udd39&zwj;\u2640\ufe0f",
            woman_mechanic: "\ud83d\udc69&zwj;\ud83d\udd27",
            woman_office_worker: "\ud83d\udc69&zwj;\ud83d\udcbc",
            woman_pilot: "\ud83d\udc69&zwj;\u2708\ufe0f",
            woman_playing_handball: "\ud83e\udd3e&zwj;\u2640\ufe0f",
            woman_playing_water_polo: "\ud83e\udd3d&zwj;\u2640\ufe0f",
            woman_scientist: "\ud83d\udc69&zwj;\ud83d\udd2c",
            woman_shrugging: "\ud83e\udd37&zwj;\u2640\ufe0f",
            woman_singer: "\ud83d\udc69&zwj;\ud83c\udfa4",
            woman_student: "\ud83d\udc69&zwj;\ud83c\udf93",
            woman_teacher: "\ud83d\udc69&zwj;\ud83c\udfeb",
            woman_technologist: "\ud83d\udc69&zwj;\ud83d\udcbb",
            woman_with_turban: "\ud83d\udc73&zwj;\u2640\ufe0f",
            womans_clothes: "\ud83d\udc5a",
            womans_hat: "\ud83d\udc52",
            women_wrestling: "\ud83e\udd3c&zwj;\u2640\ufe0f",
            womens: "\ud83d\udeba",
            world_map: "\ud83d\uddfa",
            worried: "\ud83d\ude1f",
            wrench: "\ud83d\udd27",
            writing_hand: "\u270d\ufe0f",
            x: "\u274c",
            yellow_heart: "\ud83d\udc9b",
            yen: "\ud83d\udcb4",
            yin_yang: "\u262f\ufe0f",
            yum: "\ud83d\ude0b",
            zap: "\u26a1\ufe0f",
            zipper_mouth_face: "\ud83e\udd10",
            zzz: "\ud83d\udca4",

            /* special emojis :P */
            octocat:
              '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
            showdown:
              "<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>",
          };

          /**
           * Created by Estevao on 31-05-2015.
           */

          /**
           * Showdown Converter class
           * @class
           * @param {object} [converterOptions]
           * @returns {Converter}
           */
          showdown.Converter = function (converterOptions) {
            "use strict";

            var /**
               * Options used by this converter
               * @private
               * @type {{}}
               */
              options = {},
              /**
               * Language extensions used by this converter
               * @private
               * @type {Array}
               */
              langExtensions = [],
              /**
               * Output modifiers extensions used by this converter
               * @private
               * @type {Array}
               */
              outputModifiers = [],
              /**
               * Event listeners
               * @private
               * @type {{}}
               */
              listeners = {},
              /**
               * The flavor set in this converter
               */
              setConvFlavor = setFlavor,
              /**
               * Metadata of the document
               * @type {{parsed: {}, raw: string, format: string}}
               */
              metadata = {
                parsed: {},
                raw: "",
                format: "",
              };

            _constructor();

            /**
             * Converter constructor
             * @private
             */
            function _constructor() {
              converterOptions = converterOptions || {};

              for (var gOpt in globalOptions) {
                if (globalOptions.hasOwnProperty(gOpt)) {
                  options[gOpt] = globalOptions[gOpt];
                }
              }

              // Merge options
              if (typeof converterOptions === "object") {
                for (var opt in converterOptions) {
                  if (converterOptions.hasOwnProperty(opt)) {
                    options[opt] = converterOptions[opt];
                  }
                }
              } else {
                throw Error(
                  "Converter expects the passed parameter to be an object, but " +
                    typeof converterOptions +
                    " was passed instead."
                );
              }

              if (options.extensions) {
                showdown.helper.forEach(options.extensions, _parseExtension);
              }
            }

            /**
             * Parse extension
             * @param {*} ext
             * @param {string} [name='']
             * @private
             */
            function _parseExtension(ext, name) {
              name = name || null;
              // If it's a string, the extension was previously loaded
              if (showdown.helper.isString(ext)) {
                ext = showdown.helper.stdExtName(ext);
                name = ext;

                // LEGACY_SUPPORT CODE
                if (showdown.extensions[ext]) {
                  console.warn(
                    "DEPRECATION WARNING: " +
                      ext +
                      " is an old extension that uses a deprecated loading method." +
                      "Please inform the developer that the extension should be updated!"
                  );
                  legacyExtensionLoading(showdown.extensions[ext], ext);
                  return;
                  // END LEGACY SUPPORT CODE
                } else if (!showdown.helper.isUndefined(extensions[ext])) {
                  ext = extensions[ext];
                } else {
                  throw Error(
                    'Extension "' +
                      ext +
                      '" could not be loaded. It was either not found or is not a valid extension.'
                  );
                }
              }

              if (typeof ext === "function") {
                ext = ext();
              }

              if (!showdown.helper.isArray(ext)) {
                ext = [ext];
              }

              var validExt = validate(ext, name);
              if (!validExt.valid) {
                throw Error(validExt.error);
              }

              for (var i = 0; i < ext.length; ++i) {
                switch (ext[i].type) {
                  case "lang":
                    langExtensions.push(ext[i]);
                    break;

                  case "output":
                    outputModifiers.push(ext[i]);
                    break;
                }
                if (ext[i].hasOwnProperty("listeners")) {
                  for (var ln in ext[i].listeners) {
                    if (ext[i].listeners.hasOwnProperty(ln)) {
                      listen(ln, ext[i].listeners[ln]);
                    }
                  }
                }
              }
            }

            /**
             * LEGACY_SUPPORT
             * @param {*} ext
             * @param {string} name
             */
            function legacyExtensionLoading(ext, name) {
              if (typeof ext === "function") {
                ext = ext(new showdown.Converter());
              }
              if (!showdown.helper.isArray(ext)) {
                ext = [ext];
              }
              var valid = validate(ext, name);

              if (!valid.valid) {
                throw Error(valid.error);
              }

              for (var i = 0; i < ext.length; ++i) {
                switch (ext[i].type) {
                  case "lang":
                    langExtensions.push(ext[i]);
                    break;
                  case "output":
                    outputModifiers.push(ext[i]);
                    break;
                  default:
                    // should never reach here
                    throw Error("Extension loader error: Type unrecognized!!!");
                }
              }
            }

            /**
             * Listen to an event
             * @param {string} name
             * @param {function} callback
             */
            function listen(name, callback) {
              if (!showdown.helper.isString(name)) {
                throw Error(
                  "Invalid argument in converter.listen() method: name must be a string, but " +
                    typeof name +
                    " given"
                );
              }

              if (typeof callback !== "function") {
                throw Error(
                  "Invalid argument in converter.listen() method: callback must be a function, but " +
                    typeof callback +
                    " given"
                );
              }

              if (!listeners.hasOwnProperty(name)) {
                listeners[name] = [];
              }
              listeners[name].push(callback);
            }

            function rTrimInputText(text) {
              var rsp = text.match(/^\s*/)[0].length,
                rgx = new RegExp("^\\s{0," + rsp + "}", "gm");
              return text.replace(rgx, "");
            }

            /**
             * Dispatch an event
             * @private
             * @param {string} evtName Event name
             * @param {string} text Text
             * @param {{}} options Converter Options
             * @param {{}} globals
             * @returns {string}
             */
            this._dispatch = function dispatch(
              evtName,
              text,
              options,
              globals
            ) {
              if (listeners.hasOwnProperty(evtName)) {
                for (var ei = 0; ei < listeners[evtName].length; ++ei) {
                  var nText = listeners[evtName][ei](
                    evtName,
                    text,
                    this,
                    options,
                    globals
                  );
                  if (nText && typeof nText !== "undefined") {
                    text = nText;
                  }
                }
              }
              return text;
            };

            /**
             * Listen to an event
             * @param {string} name
             * @param {function} callback
             * @returns {showdown.Converter}
             */
            this.listen = function (name, callback) {
              listen(name, callback);
              return this;
            };

            /**
             * Converts a markdown string into HTML
             * @param {string} text
             * @returns {*}
             */
            this.makeHtml = function (text) {
              //check if text is not falsy
              if (!text) {
                return text;
              }

              var globals = {
                gHtmlBlocks: [],
                gHtmlMdBlocks: [],
                gHtmlSpans: [],
                gUrls: {},
                gTitles: {},
                gDimensions: {},
                gListLevel: 0,
                hashLinkCounts: {},
                langExtensions: langExtensions,
                outputModifiers: outputModifiers,
                converter: this,
                ghCodeBlocks: [],
                metadata: {
                  parsed: {},
                  raw: "",
                  format: "",
                },
              };

              // This lets us use ¨ trema as an escape char to avoid md5 hashes
              // The choice of character is arbitrary; anything that isn't
              // magic in Markdown will work.
              text = text.replace(/¨/g, "¨T");

              // Replace $ with ¨D
              // RegExp interprets $ as a special character
              // when it's in a replacement string
              text = text.replace(/\$/g, "¨D");

              // Standardize line endings
              text = text.replace(/\r\n/g, "\n"); // DOS to Unix
              text = text.replace(/\r/g, "\n"); // Mac to Unix

              // Stardardize line spaces
              text = text.replace(/\u00A0/g, "&nbsp;");

              if (options.smartIndentationFix) {
                text = rTrimInputText(text);
              }

              // Make sure text begins and ends with a couple of newlines:
              text = "\n\n" + text + "\n\n";

              // detab
              text = showdown.subParser("detab")(text, options, globals);

              /**
               * Strip any lines consisting only of spaces and tabs.
               * This makes subsequent regexs easier to write, because we can
               * match consecutive blank lines with /\n+/ instead of something
               * contorted like /[ \t]*\n+/
               */
              text = text.replace(/^[ \t]+$/gm, "");

              //run languageExtensions
              showdown.helper.forEach(langExtensions, function (ext) {
                text = showdown.subParser("runExtension")(
                  ext,
                  text,
                  options,
                  globals
                );
              });

              // run the sub parsers
              text = showdown.subParser("metadata")(text, options, globals);
              text = showdown.subParser("hashPreCodeTags")(
                text,
                options,
                globals
              );
              text = showdown.subParser("githubCodeBlocks")(
                text,
                options,
                globals
              );
              text = showdown.subParser("hashHTMLBlocks")(
                text,
                options,
                globals
              );
              text = showdown.subParser("hashCodeTags")(text, options, globals);
              text = showdown.subParser("stripLinkDefinitions")(
                text,
                options,
                globals
              );
              text = showdown.subParser("blockGamut")(text, options, globals);
              text = showdown.subParser("unhashHTMLSpans")(
                text,
                options,
                globals
              );
              text = showdown.subParser("unescapeSpecialChars")(
                text,
                options,
                globals
              );

              // attacklab: Restore dollar signs
              text = text.replace(/¨D/g, "$$");

              // attacklab: Restore tremas
              text = text.replace(/¨T/g, "¨");

              // render a complete html document instead of a partial if the option is enabled
              text = showdown.subParser("completeHTMLDocument")(
                text,
                options,
                globals
              );

              // Run output modifiers
              showdown.helper.forEach(outputModifiers, function (ext) {
                text = showdown.subParser("runExtension")(
                  ext,
                  text,
                  options,
                  globals
                );
              });

              // update metadata
              metadata = globals.metadata;
              return text;
            };

            /**
             * Converts an HTML string into a markdown string
             * @param src
             * @param [HTMLParser] A WHATWG DOM and HTML parser, such as JSDOM. If none is supplied, window.document will be used.
             * @returns {string}
             */
            this.makeMarkdown = this.makeMd = function (src, HTMLParser) {
              // replace \r\n with \n
              src = src.replace(/\r\n/g, "\n");
              src = src.replace(/\r/g, "\n"); // old macs

              // due to an edge case, we need to find this: > <
              // to prevent removing of non silent white spaces
              // ex: <em>this is</em> <strong>sparta</strong>
              src = src.replace(/>[ \t]+</, ">¨NBSP;<");

              if (!HTMLParser) {
                if (window && window.document) {
                  HTMLParser = window.document;
                } else {
                  throw new Error(
                    "HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM"
                  );
                }
              }

              var doc = HTMLParser.createElement("div");
              doc.innerHTML = src;

              var globals = {
                preList: substitutePreCodeTags(doc),
              };

              // remove all newlines and collapse spaces
              clean(doc);

              // some stuff, like accidental reference links must now be escaped
              // TODO
              // doc.innerHTML = doc.innerHTML.replace(/\[[\S\t ]]/);

              var nodes = doc.childNodes,
                mdDoc = "";

              for (var i = 0; i < nodes.length; i++) {
                mdDoc += showdown.subParser("makeMarkdown.node")(
                  nodes[i],
                  globals
                );
              }

              function clean(node) {
                for (var n = 0; n < node.childNodes.length; ++n) {
                  var child = node.childNodes[n];
                  if (child.nodeType === 3) {
                    if (!/\S/.test(child.nodeValue)) {
                      node.removeChild(child);
                      --n;
                    } else {
                      child.nodeValue = child.nodeValue.split("\n").join(" ");
                      child.nodeValue = child.nodeValue.replace(/(\s)+/g, "$1");
                    }
                  } else if (child.nodeType === 1) {
                    clean(child);
                  }
                }
              }

              // find all pre tags and replace contents with placeholder
              // we need this so that we can remove all indentation from html
              // to ease up parsing
              function substitutePreCodeTags(doc) {
                var pres = doc.querySelectorAll("pre"),
                  presPH = [];

                for (var i = 0; i < pres.length; ++i) {
                  if (
                    pres[i].childElementCount === 1 &&
                    pres[i].firstChild.tagName.toLowerCase() === "code"
                  ) {
                    var content = pres[i].firstChild.innerHTML.trim(),
                      language =
                        pres[i].firstChild.getAttribute("data-language") || "";

                    // if data-language attribute is not defined, then we look for class language-*
                    if (language === "") {
                      var classes = pres[i].firstChild.className.split(" ");
                      for (var c = 0; c < classes.length; ++c) {
                        var matches = classes[c].match(/^language-(.+)$/);
                        if (matches !== null) {
                          language = matches[1];
                          break;
                        }
                      }
                    }

                    // unescape html entities in content
                    content = showdown.helper.unescapeHTMLEntities(content);

                    presPH.push(content);
                    pres[i].outerHTML =
                      '<precode language="' +
                      language +
                      '" precodenum="' +
                      i.toString() +
                      '"></precode>';
                  } else {
                    presPH.push(pres[i].innerHTML);
                    pres[i].innerHTML = "";
                    pres[i].setAttribute("prenum", i.toString());
                  }
                }
                return presPH;
              }

              return mdDoc;
            };

            /**
             * Set an option of this Converter instance
             * @param {string} key
             * @param {*} value
             */
            this.setOption = function (key, value) {
              options[key] = value;
            };

            /**
             * Get the option of this Converter instance
             * @param {string} key
             * @returns {*}
             */
            this.getOption = function (key) {
              return options[key];
            };

            /**
             * Get the options of this Converter instance
             * @returns {{}}
             */
            this.getOptions = function () {
              return options;
            };

            /**
             * Add extension to THIS converter
             * @param {{}} extension
             * @param {string} [name=null]
             */
            this.addExtension = function (extension, name) {
              name = name || null;
              _parseExtension(extension, name);
            };

            /**
             * Use a global registered extension with THIS converter
             * @param {string} extensionName Name of the previously registered extension
             */
            this.useExtension = function (extensionName) {
              _parseExtension(extensionName);
            };

            /**
             * Set the flavor THIS converter should use
             * @param {string} name
             */
            this.setFlavor = function (name) {
              if (!flavor.hasOwnProperty(name)) {
                throw Error(name + " flavor was not found");
              }
              var preset = flavor[name];
              setConvFlavor = name;
              for (var option in preset) {
                if (preset.hasOwnProperty(option)) {
                  options[option] = preset[option];
                }
              }
            };

            /**
             * Get the currently set flavor of this converter
             * @returns {string}
             */
            this.getFlavor = function () {
              return setConvFlavor;
            };

            /**
             * Remove an extension from THIS converter.
             * Note: This is a costly operation. It's better to initialize a new converter
             * and specify the extensions you wish to use
             * @param {Array} extension
             */
            this.removeExtension = function (extension) {
              if (!showdown.helper.isArray(extension)) {
                extension = [extension];
              }
              for (var a = 0; a < extension.length; ++a) {
                var ext = extension[a];
                for (var i = 0; i < langExtensions.length; ++i) {
                  if (langExtensions[i] === ext) {
                    langExtensions[i].splice(i, 1);
                  }
                }
                for (var ii = 0; ii < outputModifiers.length; ++i) {
                  if (outputModifiers[ii] === ext) {
                    outputModifiers[ii].splice(i, 1);
                  }
                }
              }
            };

            /**
             * Get all extension of THIS converter
             * @returns {{language: Array, output: Array}}
             */
            this.getAllExtensions = function () {
              return {
                language: langExtensions,
                output: outputModifiers,
              };
            };

            /**
             * Get the metadata of the previously parsed document
             * @param raw
             * @returns {string|{}}
             */
            this.getMetadata = function (raw) {
              if (raw) {
                return metadata.raw;
              } else {
                return metadata.parsed;
              }
            };

            /**
             * Get the metadata format of the previously parsed document
             * @returns {string}
             */
            this.getMetadataFormat = function () {
              return metadata.format;
            };

            /**
             * Private: set a single key, value metadata pair
             * @param {string} key
             * @param {string} value
             */
            this._setMetadataPair = function (key, value) {
              metadata.parsed[key] = value;
            };

            /**
             * Private: set metadata format
             * @param {string} format
             */
            this._setMetadataFormat = function (format) {
              metadata.format = format;
            };

            /**
             * Private: set metadata raw text
             * @param {string} raw
             */
            this._setMetadataRaw = function (raw) {
              metadata.raw = raw;
            };
          };

          /**
           * Turn Markdown link shortcuts into XHTML <a> tags.
           */
          showdown.subParser("anchors", function (text, options, globals) {
            "use strict";

            text = globals.converter._dispatch(
              "anchors.before",
              text,
              options,
              globals
            );

            var writeAnchorTag = function (
              wholeMatch,
              linkText,
              linkId,
              url,
              m5,
              m6,
              title
            ) {
              if (showdown.helper.isUndefined(title)) {
                title = "";
              }
              linkId = linkId.toLowerCase();

              // Special case for explicit empty url
              if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
                url = "";
              } else if (!url) {
                if (!linkId) {
                  // lower-case and turn embedded newlines into spaces
                  linkId = linkText.toLowerCase().replace(/ ?\n/g, " ");
                }
                url = "#" + linkId;

                if (!showdown.helper.isUndefined(globals.gUrls[linkId])) {
                  url = globals.gUrls[linkId];
                  if (!showdown.helper.isUndefined(globals.gTitles[linkId])) {
                    title = globals.gTitles[linkId];
                  }
                } else {
                  return wholeMatch;
                }
              }

              //url = showdown.helper.escapeCharacters(url, '*_', false); // replaced line to improve performance
              url = url.replace(
                showdown.helper.regexes.asteriskDashAndColon,
                showdown.helper.escapeCharactersCallback
              );

              var result = '<a href="' + url + '"';

              if (title !== "" && title !== null) {
                title = title.replace(/"/g, "&quot;");
                //title = showdown.helper.escapeCharacters(title, '*_', false); // replaced line to improve performance
                title = title.replace(
                  showdown.helper.regexes.asteriskDashAndColon,
                  showdown.helper.escapeCharactersCallback
                );
                result += ' title="' + title + '"';
              }

              // optionLinksInNewWindow only applies
              // to external links. Hash links (#) open in same page
              if (options.openLinksInNewWindow && !/^#/.test(url)) {
                // escaped _
                result += ' rel="noopener noreferrer" target="¨E95Eblank"';
              }

              result += ">" + linkText + "</a>";

              return result;
            };

            // First, handle reference-style links: [link text] [id]
            text = text.replace(
              /\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,
              writeAnchorTag
            );

            // Next, inline-style links: [link text](url "optional title")
            // cases with crazy urls like ./image/cat1).png
            text = text.replace(
              /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
              writeAnchorTag
            );

            // normal cases
            text = text.replace(
              /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
              writeAnchorTag
            );

            // handle reference-style shortcuts: [link text]
            // These must come last in case you've also got [link test][1]
            // or [link test](/foo)
            text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag);

            // Lastly handle GithubMentions if option is enabled
            if (options.ghMentions) {
              text = text.replace(
                /(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim,
                function (wm, st, escape, mentions, username) {
                  if (escape === "\\") {
                    return st + mentions;
                  }

                  //check if options.ghMentionsLink is a string
                  if (!showdown.helper.isString(options.ghMentionsLink)) {
                    throw new Error("ghMentionsLink option must be a string");
                  }
                  var lnk = options.ghMentionsLink.replace(/\{u}/g, username),
                    target = "";
                  if (options.openLinksInNewWindow) {
                    target = ' rel="noopener noreferrer" target="¨E95Eblank"';
                  }
                  return (
                    st +
                    '<a href="' +
                    lnk +
                    '"' +
                    target +
                    ">" +
                    mentions +
                    "</a>"
                  );
                }
              );
            }

            text = globals.converter._dispatch(
              "anchors.after",
              text,
              options,
              globals
            );
            return text;
          });

          // url allowed chars [a-z\d_.~:/?#[]@!$&'()*+,;=-]

          var simpleURLRegex = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
            simpleURLRegex2 = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
            delimUrlRegex = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
            simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,
            delimMailRegex = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
            replaceLink = function (options) {
              "use strict";
              return function (
                wm,
                leadingMagicChars,
                link,
                m2,
                m3,
                trailingPunctuation,
                trailingMagicChars
              ) {
                link = link.replace(
                  showdown.helper.regexes.asteriskDashAndColon,
                  showdown.helper.escapeCharactersCallback
                );
                var lnkTxt = link,
                  append = "",
                  target = "",
                  lmc = leadingMagicChars || "",
                  tmc = trailingMagicChars || "";
                if (/^www\./i.test(link)) {
                  link = link.replace(/^www\./i, "http://www.");
                }
                if (
                  options.excludeTrailingPunctuationFromURLs &&
                  trailingPunctuation
                ) {
                  append = trailingPunctuation;
                }
                if (options.openLinksInNewWindow) {
                  target = ' rel="noopener noreferrer" target="¨E95Eblank"';
                }
                return (
                  lmc +
                  '<a href="' +
                  link +
                  '"' +
                  target +
                  ">" +
                  lnkTxt +
                  "</a>" +
                  append +
                  tmc
                );
              };
            },
            replaceMail = function (options, globals) {
              "use strict";
              return function (wholeMatch, b, mail) {
                var href = "mailto:";
                b = b || "";
                mail = showdown.subParser("unescapeSpecialChars")(
                  mail,
                  options,
                  globals
                );
                if (options.encodeEmails) {
                  href = showdown.helper.encodeEmailAddress(href + mail);
                  mail = showdown.helper.encodeEmailAddress(mail);
                } else {
                  href = href + mail;
                }
                return b + '<a href="' + href + '">' + mail + "</a>";
              };
            };

          showdown.subParser("autoLinks", function (text, options, globals) {
            "use strict";

            text = globals.converter._dispatch(
              "autoLinks.before",
              text,
              options,
              globals
            );

            text = text.replace(delimUrlRegex, replaceLink(options));
            text = text.replace(delimMailRegex, replaceMail(options, globals));

            text = globals.converter._dispatch(
              "autoLinks.after",
              text,
              options,
              globals
            );

            return text;
          });

          showdown.subParser("simplifiedAutoLinks", function (
            text,
            options,
            globals
          ) {
            "use strict";

            if (!options.simplifiedAutoLink) {
              return text;
            }

            text = globals.converter._dispatch(
              "simplifiedAutoLinks.before",
              text,
              options,
              globals
            );

            if (options.excludeTrailingPunctuationFromURLs) {
              text = text.replace(simpleURLRegex2, replaceLink(options));
            } else {
              text = text.replace(simpleURLRegex, replaceLink(options));
            }
            text = text.replace(simpleMailRegex, replaceMail(options, globals));

            text = globals.converter._dispatch(
              "simplifiedAutoLinks.after",
              text,
              options,
              globals
            );

            return text;
          });

          /**
           * These are all the transformations that form block-level
           * tags like paragraphs, headers, and list items.
           */
          showdown.subParser("blockGamut", function (text, options, globals) {
            "use strict";

            text = globals.converter._dispatch(
              "blockGamut.before",
              text,
              options,
              globals
            );

            // we parse blockquotes first so that we can have headings and hrs
            // inside blockquotes
            text = showdown.subParser("blockQuotes")(text, options, globals);
            text = showdown.subParser("headers")(text, options, globals);

            // Do Horizontal Rules:
            text = showdown.subParser("horizontalRule")(text, options, globals);

            text = showdown.subParser("lists")(text, options, globals);
            text = showdown.subParser("codeBlocks")(text, options, globals);
            text = showdown.subParser("tables")(text, options, globals);

            // We already ran _HashHTMLBlocks() before, in Markdown(), but that
            // was to escape raw HTML in the original Markdown source. This time,
            // we're escaping the markup we've just created, so that we don't wrap
            // <p> tags around block-level tags.
            text = showdown.subParser("hashHTMLBlocks")(text, options, globals);
            text = showdown.subParser("paragraphs")(text, options, globals);

            text = globals.converter._dispatch(
              "blockGamut.after",
              text,
              options,
              globals
            );

            return text;
          });

          showdown.subParser("blockQuotes", function (text, options, globals) {
            "use strict";

            text = globals.converter._dispatch(
              "blockQuotes.before",
              text,
              options,
              globals
            );

            // add a couple extra lines after the text and endtext mark
            text = text + "\n\n";

            var rgx = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;

            if (options.splitAdjacentBlockquotes) {
              rgx = /^ {0,3}>[\s\S]*?(?:\n\n)/gm;
            }

            text = text.replace(rgx, function (bq) {
              // attacklab: hack around Konqueror 3.5.4 bug:
              // "----------bug".replace(/^-/g,"") == "bug"
              bq = bq.replace(/^[ \t]*>[ \t]?/gm, ""); // trim one level of quoting

              // attacklab: clean up hack
              bq = bq.replace(/¨0/g, "");

              bq = bq.replace(/^[ \t]+$/gm, ""); // trim whitespace-only lines
              bq = showdown.subParser("githubCodeBlocks")(bq, options, globals);
              bq = showdown.subParser("blockGamut")(bq, options, globals); // recurse

              bq = bq.replace(/(^|\n)/g, "$1  ");
              // These leading spaces screw with <pre> content, so we need to fix that:
              bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (
                wholeMatch,
                m1
              ) {
                var pre = m1;
                // attacklab: hack around Konqueror 3.5.4 bug:
                pre = pre.replace(/^  /gm, "¨0");
                pre = pre.replace(/¨0/g, "");
                return pre;
              });

              return showdown.subParser("hashBlock")(
                "<blockquote>\n" + bq + "\n</blockquote>",
                options,
                globals
              );
            });

            text = globals.converter._dispatch(
              "blockQuotes.after",
              text,
              options,
              globals
            );
            return text;
          });

          /**
           * Process Markdown `<pre><code>` blocks.
           */
          showdown.subParser("codeBlocks", function (text, options, globals) {
            "use strict";

            text = globals.converter._dispatch(
              "codeBlocks.before",
              text,
              options,
              globals
            );

            // sentinel workarounds for lack of \A and \Z, safari\khtml bug
            text += "¨0";

            var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
            text = text.replace(pattern, function (wholeMatch, m1, m2) {
              var codeblock = m1,
                nextChar = m2,
                end = "\n";

              codeblock = showdown.subParser("outdent")(
                codeblock,
                options,
                globals
              );
              codeblock = showdown.subParser("encodeCode")(
                codeblock,
                options,
                globals
              );
              codeblock = showdown.subParser("detab")(
                codeblock,
                options,
                globals
              );
              codeblock = codeblock.replace(/^\n+/g, ""); // trim leading newlines
              codeblock = codeblock.replace(/\n+$/g, ""); // trim trailing newlines

              if (options.omitExtraWLInCodeBlocks) {
                end = "";
              }

              codeblock = "<pre><code>" + codeblock + end + "</code></pre>";

              return (
                showdown.subParser("hashBlock")(codeblock, options, globals) +
                nextChar
              );
            });

            // strip sentinel
            text = text.replace(/¨0/, "");

            text = globals.converter._dispatch(
              "codeBlocks.after",
              text,
              options,
              globals
            );
            return text;
          });

          /**
           *
           *   *  Backtick quotes are used for <code></code> spans.
           *
           *   *  You can use multiple backticks as the delimiters if you want to
           *     include literal backticks in the code span. So, this input:
           *
           *         Just type ``foo `bar` baz`` at the prompt.
           *
           *       Will translate to:
           *
           *         <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
           *
           *    There's no arbitrary limit to the number of backticks you
           *    can use as delimters. If you need three consecutive backticks
           *    in your code, use four for delimiters, etc.
           *
           *  *  You can use spaces to get literal backticks at the edges:
           *
           *         ... type `` `bar` `` ...
           *
           *       Turns to:
           *
           *         ... type <code>`bar`</code> ...
           */
          showdown.subParser("codeSpans", function (text, options, globals) {
            "use strict";

            text = globals.converter._dispatch(
              "codeSpans.before",
              text,
              options,
              globals
            );

            if (typeof text === "undefined") {
              text = "";
            }
            text = text.replace(
              /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
              function (wholeMatch, m1, m2, m3) {
                var c = m3;
                c = c.replace(/^([ \t]*)/g, ""); // leading whitespace
                c = c.replace(/[ \t]*$/g, ""); // trailing whitespace
                c = showdown.subParser("encodeCode")(c, options, globals);
                c = m1 + "<code>" + c + "</code>";
                c = showdown.subParser("hashHTMLSpans")(c, options, globals);
                return c;
              }
            );

            text = globals.converter._dispatch(
              "codeSpans.after",
              text,
              options,
              globals
            );
            return text;
          });

          /**
           * Create a full HTML document from the processed markdown
           */
          showdown.subParser("completeHTMLDocument", function (
            text,
            options,
            globals
          ) {
            "use strict";

            if (!options.completeHTMLDocument) {
              return text;
            }

            text = globals.converter._dispatch(
              "completeHTMLDocument.before",
              text,
              options,
              globals
            );

            var doctype = "html",
              doctypeParsed = "<!DOCTYPE HTML>\n",
              title = "",
              charset = '<meta charset="utf-8">\n',
              lang = "",
              metadata = "";

            if (typeof globals.metadata.parsed.doctype !== "undefined") {
              doctypeParsed =
                "<!DOCTYPE " + globals.metadata.parsed.doctype + ">\n";
              doctype = globals.metadata.parsed.doctype
                .toString()
                .toLowerCase();
              if (doctype === "html" || doctype === "html5") {
                charset = '<meta charset="utf-8">';
              }
            }

            for (var meta in globals.metadata.parsed) {
              if (globals.metadata.parsed.hasOwnProperty(meta)) {
                switch (meta.toLowerCase()) {
                  case "doctype":
                    break;

                  case "title":
                    title =
                      "<title>" + globals.metadata.parsed.title + "</title>\n";
                    break;

                  case "charset":
                    if (doctype === "html" || doctype === "html5") {
                      charset =
                        '<meta charset="' +
                        globals.metadata.parsed.charset +
                        '">\n';
                    } else {
                      charset =
                        '<meta name="charset" content="' +
                        globals.metadata.parsed.charset +
                        '">\n';
                    }
                    break;

                  case "language":
                  case "lang":
                    lang = ' lang="' + globals.metadata.parsed[meta] + '"';
                    metadata +=
                      '<meta name="' +
                      meta +
                      '" content="' +
                      globals.metadata.parsed[meta] +
                      '">\n';
                    break;

                  default:
                    metadata +=
                      '<meta name="' +
                      meta +
                      '" content="' +
                      globals.metadata.parsed[meta] +
                      '">\n';
                }
              }
            }

            text =
              doctypeParsed +
              "<html" +
              lang +
              ">\n<head>\n" +
              title +
              charset +
              metadata +
              "</head>\n<body>\n" +
              text.trim() +
              "\n</body>\n</html>";

            text = globals.converter._dispatch(
              "completeHTMLDocument.after",
              text,
              options,
              globals
            );
            return text;
          });

          /**
           * Convert all tabs to spaces
           */
          showdown.subParser("detab", function (text, options, globals) {
            "use strict";
            text = globals.converter._dispatch(
              "detab.before",
              text,
              options,
              globals
            );

            // expand first n-1 tabs
            text = text.replace(/\t(?=\t)/g, "    "); // g_tab_width

            // replace the nth with two sentinels
            text = text.replace(/\t/g, "¨A¨B");

            // use the sentinel to anchor our regex so it doesn't explode
            text = text.replace(/¨B(.+?)¨A/g, function (wholeMatch, m1) {
              var leadingText = m1,
                numSpaces = 4 - (leadingText.length % 4); // g_tab_width

              // there *must* be a better way to do this:
              for (var i = 0; i < numSpaces; i++) {
                leadingText += " ";
              }

              return leadingText;
            });

            // clean up sentinels
            text = text.replace(/¨A/g, "    "); // g_tab_width
            text = text.replace(/¨B/g, "");

            text = globals.converter._dispatch(
              "detab.after",
              text,
              options,
              globals
            );
            return text;
          });

          showdown.subParser("ellipsis", function (text, options, globals) {
            "use strict";

            text = globals.converter._dispatch(
              "ellipsis.before",
              text,
              options,
              globals
            );

            text = text.replace(/\.\.\./g, "…");

            text = globals.converter._dispatch(
              "ellipsis.after",
              text,
              options,
              globals
            );

            return text;
          });

          /**
           * Turn emoji codes into emojis
           *
           * List of supported emojis: https://github.com/showdownjs/showdown/wiki/Emojis
           */
          showdown.subParser("emoji", function (text, options, globals) {
            "use strict";

            if (!options.emoji) {
              return text;
            }

            text = globals.converter._dispatch(
              "emoji.before",
              text,
              options,
              globals
            );

            var emojiRgx = /:([\S]+?):/g;

            text = text.replace(emojiRgx, function (wm, emojiCode) {
              if (showdown.helper.emojis.hasOwnProperty(emojiCode)) {
                return showdown.helper.emojis[emojiCode];
              }
              return wm;
            });

            text = globals.converter._dispatch(
              "emoji.after",
              text,
              options,
              globals
            );

            return text;
          });

          /**
           * Smart processing for ampersands and angle brackets that need to be encoded.
           */
          showdown.subParser("encodeAmpsAndAngles", function (
            text,
            options,
            globals
          ) {
            "use strict";
            text = globals.converter._dispatch(
              "encodeAmpsAndAngles.before",
              text,
              options,
              globals
            );

            // Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
            // http://bumppo.net/projects/amputator/
            text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;");

            // Encode naked <'s
            text = text.replace(/<(?![a-z\/?$!])/gi, "&lt;");

            // Encode <
            text = text.replace(/</g, "&lt;");

            // Encode >
            text = text.replace(/>/g, "&gt;");

            text = globals.converter._dispatch(
              "encodeAmpsAndAngles.after",
              text,
              options,
              globals
            );
            return text;
          });

          /**
           * Returns the string, with after processing the following backslash escape sequences.
           *
           * attacklab: The polite way to do this is with the new escapeCharacters() function:
           *
           *    text = escapeCharacters(text,"\\",true);
           *    text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
           *
           * ...but we're sidestepping its use of the (slow) RegExp constructor
           * as an optimization for Firefox.  This function gets called a LOT.
           */
          showdown.subParser("encodeBackslashEscapes", function (
            text,
            options,
            globals
          ) {
            "use strict";
            text = globals.converter._dispatch(
              "encodeBackslashEscapes.before",
              text,
              options,
              globals
            );

            text = text.replace(
              /\\(\\)/g,
              showdown.helper.escapeCharactersCallback
            );
            text = text.replace(
              /\\([`*_{}\[\]()>#+.!~=|-])/g,
              showdown.helper.escapeCharactersCallback
            );

            text = globals.converter._dispatch(
              "encodeBackslashEscapes.after",
              text,
              options,
              globals
            );
            return text;
          });

          /**
           * Encode/escape certain characters inside Markdown code runs.
           * The point is that in code, these characters are literals,
           * and lose their special Markdown meanings.
           */
          showdown.subParser("encodeCode", function (text, options, globals) {
            "use strict";

            text = globals.converter._dispatch(
              "encodeCode.before",
              text,
              options,
              globals
            );

            // Encode all ampersands; HTML entities are not
            // entities within a Markdown code span.
            text = text
              .replace(/&/g, "&amp;")
              // Do the angle bracket song and dance:
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              // Now, escape characters that are magic in Markdown:
              .replace(
                /([*_{}\[\]\\=~-])/g,
                showdown.helper.escapeCharactersCallback
              );

            text = globals.converter._dispatch(
              "encodeCode.after",
              text,
              options,
              globals
            );
            return text;
          });

          /**
           * Within tags -- meaning between < and > -- encode [\ ` * _ ~ =] so they
           * don't conflict with their use in Markdown for code, italics and strong.
           */
          showdown.subParser("escapeSpecialCharsWithinTagAttributes", function (
            text,
            options,
            globals
          ) {
            "use strict";
            text = globals.converter._dispatch(
              "escapeSpecialCharsWithinTagAttributes.before",
              text,
              options,
              globals
            );

            // Build a regex to find HTML tags.
            var tags = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,
              comments = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;

            text = text.replace(tags, function (wholeMatch) {
              return wholeMatch
                .replace(/(.)<\/?code>(?=.)/g, "$1`")
                .replace(
                  /([\\`*_~=|])/g,
                  showdown.helper.escapeCharactersCallback
                );
            });

            text = text.replace(comments, function (wholeMatch) {
              return wholeMatch.replace(
                /([\\`*_~=|])/g,
                showdown.helper.escapeCharactersCallback
              );
            });

            text = globals.converter._dispatch(
              "escapeSpecialCharsWithinTagAttributes.after",
              text,
              options,
              globals
            );
            return text;
          });

          /**
           * Handle github codeblocks prior to running HashHTML so that
           * HTML contained within the codeblock gets escaped properly
           * Example:
           * ```ruby
           *     def hello_world(x)
           *       puts "Hello, #{x}"
           *     end
           * ```
           */
          showdown.subParser("githubCodeBlocks", function (
            text,
            options,
            globals
          ) {
            "use strict";

            // early exit if option is not enabled
            if (!options.ghCodeBlocks) {
              return text;
            }

            text = globals.converter._dispatch(
              "githubCodeBlocks.before",
              text,
              options,
              globals
            );

            text += "¨0";

            text = text.replace(
              /(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,
              function (wholeMatch, delim, language, codeblock) {
                var end = options.omitExtraWLInCodeBlocks ? "" : "\n";

                // First parse the github code block
                codeblock = showdown.subParser("encodeCode")(
                  codeblock,
                  options,
                  globals
                );
                codeblock = showdown.subParser("detab")(
                  codeblock,
                  options,
                  globals
                );
                codeblock = codeblock.replace(/^\n+/g, ""); // trim leading newlines
                codeblock = codeblock.replace(/\n+$/g, ""); // trim trailing whitespace

                codeblock =
                  "<pre><code" +
                  (language
                    ? ' class="' + language + " language-" + language + '"'
                    : "") +
                  ">" +
                  codeblock +
                  end +
                  "</code></pre>";

                codeblock = showdown.subParser("hashBlock")(
                  codeblock,
                  options,
                  globals
                );

                // Since GHCodeblocks can be false positives, we need to
                // store the primitive text and the parsed text in a global var,
                // and then return a token
                return (
                  "\n\n¨G" +
                  (globals.ghCodeBlocks.push({
                    text: wholeMatch,
                    codeblock: codeblock,
                  }) -
                    1) +
                  "G\n\n"
                );
              }
            );

            // attacklab: strip sentinel
            text = text.replace(/¨0/, "");

            return globals.converter._dispatch(
              "githubCodeBlocks.after",
              text,
              options,
              globals
            );
          });

          showdown.subParser("hashBlock", function (text, options, globals) {
            "use strict";
            text = globals.converter._dispatch(
              "hashBlock.before",
              text,
              options,
              globals
            );
            text = text.replace(/(^\n+|\n+$)/g, "");
            text = "\n\n¨K" + (globals.gHtmlBlocks.push(text) - 1) + "K\n\n";
            text = globals.converter._dispatch(
              "hashBlock.after",
              text,
              options,
              globals
            );
            return text;
          });

          /**
           * Hash and escape <code> elements that should not be parsed as markdown
           */
          showdown.subParser("hashCodeTags", function (text, options, globals) {
            "use strict";
            text = globals.converter._dispatch(
              "hashCodeTags.before",
              text,
              options,
              globals
            );

            var repFunc = function (wholeMatch, match, left, right) {
              var codeblock =
                left +
                showdown.subParser("encodeCode")(match, options, globals) +
                right;
              return "¨C" + (globals.gHtmlSpans.push(codeblock) - 1) + "C";
            };

            // Hash naked <code>
            text = showdown.helper.replaceRecursiveRegExp(
              text,
              repFunc,
              "<code\\b[^>]*>",
              "</code>",
              "gim"
            );

            text = globals.converter._dispatch(
              "hashCodeTags.after",
              text,
              options,
              globals
            );
            return text;
          });

          showdown.subParser("hashElement", function (text, options, globals) {
            "use strict";

            return function (wholeMatch, m1) {
              var blockText = m1;

              // Undo double lines
              blockText = blockText.replace(/\n\n/g, "\n");
              blockText = blockText.replace(/^\n/, "");

              // strip trailing blank lines
              blockText = blockText.replace(/\n+$/g, "");

              // Replace the element text with a marker ("¨KxK" where x is its key)
              blockText =
                "\n\n¨K" + (globals.gHtmlBlocks.push(blockText) - 1) + "K\n\n";

              return blockText;
            };
          });

          showdown.subParser("hashHTMLBlocks", function (
            text,
            options,
            globals
          ) {
            "use strict";
            text = globals.converter._dispatch(
              "hashHTMLBlocks.before",
              text,
              options,
              globals
            );

            var blockTags = [
                "pre",
                "div",
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "blockquote",
                "table",
                "dl",
                "ol",
                "ul",
                "script",
                "noscript",
                "form",
                "fieldset",
                "iframe",
                "math",
                "style",
                "section",
                "header",
                "footer",
                "nav",
                "article",
                "aside",
                "address",
                "audio",
                "canvas",
                "figure",
                "hgroup",
                "output",
                "video",
                "p",
              ],
              repFunc = function (wholeMatch, match, left, right) {
                var txt = wholeMatch;
                // check if this html element is marked as markdown
                // if so, it's contents should be parsed as markdown
                if (left.search(/\bmarkdown\b/) !== -1) {
                  txt = left + globals.converter.makeHtml(match) + right;
                }
                return "\n\n¨K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
              };

            if (options.backslashEscapesHTMLTags) {
              // encode backslash escaped HTML tags
              text = text.replace(/\\<(\/?[^>]+?)>/g, function (wm, inside) {
                return "&lt;" + inside + "&gt;";
              });
            }

            // hash HTML Blocks
            for (var i = 0; i < blockTags.length; ++i) {
              var opTagPos,
                rgx1 = new RegExp(
                  "^ {0,3}(<" + blockTags[i] + "\\b[^>]*>)",
                  "im"
                ),
                patLeft = "<" + blockTags[i] + "\\b[^>]*>",
                patRight = "</" + blockTags[i] + ">";
              // 1. Look for the first position of the first opening HTML tag in the text
              while (
                (opTagPos = showdown.helper.regexIndexOf(text, rgx1)) !== -1
              ) {
                // if the HTML tag is \ escaped, we need to escape it and break

                //2. Split the text in that position
                var subTexts = showdown.helper.splitAtIndex(text, opTagPos),
                  //3. Match recursively
                  newSubText1 = showdown.helper.replaceRecursiveRegExp(
                    subTexts[1],
                    repFunc,
                    patLeft,
                    patRight,
                    "im"
                  );

                // prevent an infinite loop
                if (newSubText1 === subTexts[1]) {
                  break;
                }
                text = subTexts[0].concat(newSubText1);
              }
            }
            // HR SPECIAL CASE
            text = text.replace(
              /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
              showdown.subParser("hashElement")(text, options, globals)
            );

            // Special case for standalone HTML comments
            text = showdown.helper.replaceRecursiveRegExp(
              text,
              function (txt) {
                return "\n\n¨K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
              },
              "^ {0,3}<!--",
              "-->",
              "gm"
            );

            // PHP and ASP-style processor instructions (<?...?> and <%...%>)
            text = text.replace(
              /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
              showdown.subParser("hashElement")(text, options, globals)
            );

            text = globals.converter._dispatch(
              "hashHTMLBlocks.after",
              text,
              options,
              globals
            );
            return text;
          });

          /**
           * Hash span elements that should not be parsed as markdown
           */
          showdown.subParser("hashHTMLSpans", function (
            text,
            options,
            globals
          ) {
            "use strict";
            text = globals.converter._dispatch(
              "hashHTMLSpans.before",
              text,
              options,
              globals
            );

            function hashHTMLSpan(html) {
              return "¨C" + (globals.gHtmlSpans.push(html) - 1) + "C";
            }

            // Hash Self Closing tags
            text = text.replace(/<[^>]+?\/>/gi, function (wm) {
              return hashHTMLSpan(wm);
            });

            // Hash tags without properties
            text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function (wm) {
              return hashHTMLSpan(wm);
            });

            // Hash tags with properties
            text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function (
              wm
            ) {
              return hashHTMLSpan(wm);
            });

            // Hash self closing tags without />
            text = text.replace(/<[^>]+?>/gi, function (wm) {
              return hashHTMLSpan(wm);
            });

            /*showdown.helper.matchRecursiveRegExp(text, '<code\\b[^>]*>', '</code>', 'gi');*/

            text = globals.converter._dispatch(
              "hashHTMLSpans.after",
              text,
              options,
              globals
            );
            return text;
          });

          /**
           * Unhash HTML spans
           */
          showdown.subParser("unhashHTMLSpans", function (
            text,
            options,
            globals
          ) {
            "use strict";
            text = globals.converter._dispatch(
              "unhashHTMLSpans.before",
              text,
              options,
              globals
            );

            for (var i = 0; i < globals.gHtmlSpans.length; ++i) {
              var repText = globals.gHtmlSpans[i],
                // limiter to prevent infinite loop (assume 10 as limit for recurse)
                limit = 0;

              while (/¨C(\d+)C/.test(repText)) {
                var num = RegExp.$1;
                repText = repText.replace(
                  "¨C" + num + "C",
                  globals.gHtmlSpans[num]
                );
                if (limit === 10) {
                  console.error("maximum nesting of 10 spans reached!!!");
                  break;
                }
                ++limit;
              }
              text = text.replace("¨C" + i + "C", repText);
            }

            text = globals.converter._dispatch(
              "unhashHTMLSpans.after",
              text,
              options,
              globals
            );
            return text;
          });

          /**
           * Hash and escape <pre><code> elements that should not be parsed as markdown
           */
          showdown.subParser("hashPreCodeTags", function (
            text,
            options,
            globals
          ) {
            "use strict";
            text = globals.converter._dispatch(
              "hashPreCodeTags.before",
              text,
              options,
              globals
            );

            var repFunc = function (wholeMatch, match, left, right) {
              // encode html entities
              var codeblock =
                left +
                showdown.subParser("encodeCode")(match, options, globals) +
                right;
              return (
                "\n\n¨G" +
                (globals.ghCodeBlocks.push({
                  text: wholeMatch,
                  codeblock: codeblock,
                }) -
                  1) +
                "G\n\n"
              );
            };

            // Hash <pre><code>
            text = showdown.helper.replaceRecursiveRegExp(
              text,
              repFunc,
              "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>",
              "^ {0,3}</code>\\s*</pre>",
              "gim"
            );

            text = globals.converter._dispatch(
              "hashPreCodeTags.after",
              text,
              options,
              globals
            );
            return text;
          });

          showdown.subParser("headers", function (text, options, globals) {
            "use strict";

            text = globals.converter._dispatch(
              "headers.before",
              text,
              options,
              globals
            );

            var headerLevelStart = isNaN(parseInt(options.headerLevelStart))
                ? 1
                : parseInt(options.headerLevelStart),
              // Set text-style headers:
              //	Header 1
              //	========
              //
              //	Header 2
              //	--------
              //
              setextRegexH1 = options.smoothLivePreview
                ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm
                : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
              setextRegexH2 = options.smoothLivePreview
                ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm
                : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;

            text = text.replace(setextRegexH1, function (wholeMatch, m1) {
              var spanGamut = showdown.subParser("spanGamut")(
                  m1,
                  options,
                  globals
                ),
                hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"',
                hLevel = headerLevelStart,
                hashBlock =
                  "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
              return showdown.subParser("hashBlock")(
                hashBlock,
                options,
                globals
              );
            });

            text = text.replace(setextRegexH2, function (matchFound, m1) {
              var spanGamut = showdown.subParser("spanGamut")(
                  m1,
                  options,
                  globals
                ),
                hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"',
                hLevel = headerLevelStart + 1,
                hashBlock =
                  "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
              return showdown.subParser("hashBlock")(
                hashBlock,
                options,
                globals
              );
            });

            // atx-style headers:
            //  # Header 1
            //  ## Header 2
            //  ## Header 2 with closing hashes ##
            //  ...
            //  ###### Header 6
            //
            var atxStyle = options.requireSpaceBeforeHeadingText
              ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm
              : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;

            text = text.replace(atxStyle, function (wholeMatch, m1, m2) {
              var hText = m2;
              if (options.customizedHeaderId) {
                hText = m2.replace(/\s?\{([^{]+?)}\s*$/, "");
              }

              var span = showdown.subParser("spanGamut")(
                  hText,
                  options,
                  globals
                ),
                hID = options.noHeaderId ? "" : ' id="' + headerId(m2) + '"',
                hLevel = headerLevelStart - 1 + m1.length,
                header =
                  "<h" + hLevel + hID + ">" + span + "</h" + hLevel + ">";

              return showdown.subParser("hashBlock")(header, options, globals);
            });

            function headerId(m) {
              var title, prefix;

              // It is separate from other options to allow combining prefix and customized
              if (options.customizedHeaderId) {
                var match = m.match(/\{([^{]+?)}\s*$/);
                if (match && match[1]) {
                  m = match[1];
                }
              }

              title = m;

              // Prefix id to prevent causing inadvertent pre-existing style matches.
              if (showdown.helper.isString(options.prefixHeaderId)) {
                prefix = options.prefixHeaderId;
              } else if (options.prefixHeaderId === true) {
                prefix = "section-";
              } else {
                prefix = "";
              }

              if (!options.rawPrefixHeaderId) {
                title = prefix + title;
              }

              if (options.ghCompatibleHeaderId) {
                title = title
                  .replace(/ /g, "-")
                  // replace previously escaped chars (&, ¨ and $)
                  .replace(/&amp;/g, "")
                  .replace(/¨T/g, "")
                  .replace(/¨D/g, "")
                  // replace rest of the chars (&~$ are repeated as they might have been escaped)
                  // borrowed from github's redcarpet (some they should produce similar results)
                  .replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "")
                  .toLowerCase();
              } else if (options.rawHeaderId) {
                title = title
                  .replace(/ /g, "-")
                  // replace previously escaped chars (&, ¨ and $)
                  .replace(/&amp;/g, "&")
                  .replace(/¨T/g, "¨")
                  .replace(/¨D/g, "$")
                  // replace " and '
                  .replace(/["']/g, "-")
                  .toLowerCase();
              } else {
                title = title.replace(/[^\w]/g, "").toLowerCase();
              }

              if (options.rawPrefixHeaderId) {
                title = prefix + title;
              }

              if (globals.hashLinkCounts[title]) {
                title = title + "-" + globals.hashLinkCounts[title]++;
              } else {
                globals.hashLinkCounts[title] = 1;
              }
              return title;
            }

            text = globals.converter._dispatch(
              "headers.after",
              text,
              options,
              globals
            );
            return text;
          });

          /**
           * Turn Markdown link shortcuts into XHTML <a> tags.
           */
          showdown.subParser("horizontalRule", function (
            text,
            options,
            globals
          ) {
            "use strict";
            text = globals.converter._dispatch(
              "horizontalRule.before",
              text,
              options,
              globals
            );

            var key = showdown.subParser("hashBlock")(
              "<hr />",
              options,
              globals
            );
            text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
            text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
            text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);

            text = globals.converter._dispatch(
              "horizontalRule.after",
              text,
              options,
              globals
            );
            return text;
          });

          /**
           * Turn Markdown image shortcuts into <img> tags.
           */
          showdown.subParser("images", function (text, options, globals) {
            "use strict";

            text = globals.converter._dispatch(
              "images.before",
              text,
              options,
              globals
            );

            var inlineRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
              crazyRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,
              base64RegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
              referenceRegExp = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,
              refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;

            function writeImageTagBase64(
              wholeMatch,
              altText,
              linkId,
              url,
              width,
              height,
              m5,
              title
            ) {
              url = url.replace(/\s/g, "");
              return writeImageTag(
                wholeMatch,
                altText,
                linkId,
                url,
                width,
                height,
                m5,
                title
              );
            }

            function writeImageTag(
              wholeMatch,
              altText,
              linkId,
              url,
              width,
              height,
              m5,
              title
            ) {
              var gUrls = globals.gUrls,
                gTitles = globals.gTitles,
                gDims = globals.gDimensions;

              linkId = linkId.toLowerCase();

              if (!title) {
                title = "";
              }
              // Special case for explicit empty url
              if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
                url = "";
              } else if (url === "" || url === null) {
                if (linkId === "" || linkId === null) {
                  // lower-case and turn embedded newlines into spaces
                  linkId = altText.toLowerCase().replace(/ ?\n/g, " ");
                }
                url = "#" + linkId;

                if (!showdown.helper.isUndefined(gUrls[linkId])) {
                  url = gUrls[linkId];
                  if (!showdown.helper.isUndefined(gTitles[linkId])) {
                    title = gTitles[linkId];
                  }
                  if (!showdown.helper.isUndefined(gDims[linkId])) {
                    width = gDims[linkId].width;
                    height = gDims[linkId].height;
                  }
                } else {
                  return wholeMatch;
                }
              }

              altText = altText
                .replace(/"/g, "&quot;")
                //altText = showdown.helper.escapeCharacters(altText, '*_', false);
                .replace(
                  showdown.helper.regexes.asteriskDashAndColon,
                  showdown.helper.escapeCharactersCallback
                );
              //url = showdown.helper.escapeCharacters(url, '*_', false);
              url = url.replace(
                showdown.helper.regexes.asteriskDashAndColon,
                showdown.helper.escapeCharactersCallback
              );
              var result = '<img src="' + url + '" alt="' + altText + '"';

              if (title && showdown.helper.isString(title)) {
                title = title
                  .replace(/"/g, "&quot;")
                  //title = showdown.helper.escapeCharacters(title, '*_', false);
                  .replace(
                    showdown.helper.regexes.asteriskDashAndColon,
                    showdown.helper.escapeCharactersCallback
                  );
                result += ' title="' + title + '"';
              }

              if (width && height) {
                width = width === "*" ? "auto" : width;
                height = height === "*" ? "auto" : height;

                result += ' width="' + width + '"';
                result += ' height="' + height + '"';
              }

              result += " />";

              return result;
            }

            // First, handle reference-style labeled images: ![alt text][id]
            text = text.replace(referenceRegExp, writeImageTag);

            // Next, handle inline images:  ![alt text](url =<width>x<height> "optional title")

            // base64 encoded images
            text = text.replace(base64RegExp, writeImageTagBase64);

            // cases with crazy urls like ./image/cat1).png
            text = text.replace(crazyRegExp, writeImageTag);

            // normal cases
            text = text.replace(inlineRegExp, writeImageTag);

            // handle reference-style shortcuts: ![img text]
            text = text.replace(refShortcutRegExp, writeImageTag);

            text = globals.converter._dispatch(
              "images.after",
              text,
              options,
              globals
            );
            return text;
          });

          showdown.subParser("italicsAndBold", function (
            text,
            options,
            globals
          ) {
            "use strict";

            text = globals.converter._dispatch(
              "italicsAndBold.before",
              text,
              options,
              globals
            );

            // it's faster to have 3 separate regexes for each case than have just one
            // because of backtracing, in some cases, it could lead to an exponential effect
            // called "catastrophic backtrace". Ominous!

            function parseInside(txt, left, right) {
              /*
    if (options.simplifiedAutoLink) {
      txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
    }
    */
              return left + txt + right;
            }

            // Parse underscores
            if (options.literalMidWordUnderscores) {
              text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function (
                wm,
                txt
              ) {
                return parseInside(txt, "<strong><em>", "</em></strong>");
              });
              text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function (wm, txt) {
                return parseInside(txt, "<strong>", "</strong>");
              });
              text = text.replace(/\b_(\S[\s\S]*?)_\b/g, function (wm, txt) {
                return parseInside(txt, "<em>", "</em>");
              });
            } else {
              text = text.replace(/___(\S[\s\S]*?)___/g, function (wm, m) {
                return /\S$/.test(m)
                  ? parseInside(m, "<strong><em>", "</em></strong>")
                  : wm;
              });
              text = text.replace(/__(\S[\s\S]*?)__/g, function (wm, m) {
                return /\S$/.test(m)
                  ? parseInside(m, "<strong>", "</strong>")
                  : wm;
              });
              text = text.replace(/_([^\s_][\s\S]*?)_/g, function (wm, m) {
                // !/^_[^_]/.test(m) - test if it doesn't start with __ (since it seems redundant, we removed it)
                return /\S$/.test(m) ? parseInside(m, "<em>", "</em>") : wm;
              });
            }

            // Now parse asterisks
            if (options.literalMidWordAsterisks) {
              text = text.replace(
                /([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,
                function (wm, lead, txt) {
                  return parseInside(
                    txt,
                    lead + "<strong><em>",
                    "</em></strong>"
                  );
                }
              );
              text = text.replace(
                /([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,
                function (wm, lead, txt) {
                  return parseInside(txt, lead + "<strong>", "</strong>");
                }
              );
              text = text.replace(
                /([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,
                function (wm, lead, txt) {
                  return parseInside(txt, lead + "<em>", "</em>");
                }
              );
            } else {
              text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function (
                wm,
                m
              ) {
                return /\S$/.test(m)
                  ? parseInside(m, "<strong><em>", "</em></strong>")
                  : wm;
              });
              text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function (wm, m) {
                return /\S$/.test(m)
                  ? parseInside(m, "<strong>", "</strong>")
                  : wm;
              });
              text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function (wm, m) {
                // !/^\*[^*]/.test(m) - test if it doesn't start with ** (since it seems redundant, we removed it)
                return /\S$/.test(m) ? parseInside(m, "<em>", "</em>") : wm;
              });
            }

            text = globals.converter._dispatch(
              "italicsAndBold.after",
              text,
              options,
              globals
            );
            return text;
          });

          /**
           * Form HTML ordered (numbered) and unordered (bulleted) lists.
           */
          showdown.subParser("lists", function (text, options, globals) {
            "use strict";

            /**
             * Process the contents of a single ordered or unordered list, splitting it
             * into individual list items.
             * @param {string} listStr
             * @param {boolean} trimTrailing
             * @returns {string}
             */
            function processListItems(listStr, trimTrailing) {
              // The $g_list_level global keeps track of when we're inside a list.
              // Each time we enter a list, we increment it; when we leave a list,
              // we decrement. If it's zero, we're not in a list anymore.
              //
              // We do this because when we're not inside a list, we want to treat
              // something like this:
              //
              //    I recommend upgrading to version
              //    8. Oops, now this line is treated
              //    as a sub-list.
              //
              // As a single paragraph, despite the fact that the second line starts
              // with a digit-period-space sequence.
              //
              // Whereas when we're inside a list (or sub-list), that line will be
              // treated as the start of a sub-list. What a kludge, huh? This is
              // an aspect of Markdown's syntax that's hard to parse perfectly
              // without resorting to mind-reading. Perhaps the solution is to
              // change the syntax rules such that sub-lists must start with a
              // starting cardinal number; e.g. "1." or "a.".
              globals.gListLevel++;

              // trim trailing blank lines:
              listStr = listStr.replace(/\n{2,}$/, "\n");

              // attacklab: add sentinel to emulate \z
              listStr += "¨0";

              var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
                isParagraphed = /\n[ \t]*\n(?!¨0)/.test(listStr);

              // Since version 1.5, nesting sublists requires 4 spaces (or 1 tab) indentation,
              // which is a syntax breaking change
              // activating this option reverts to old behavior
              if (options.disableForced4SpacesIndentedSublists) {
                rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
              }

              listStr = listStr.replace(rgx, function (
                wholeMatch,
                m1,
                m2,
                m3,
                m4,
                taskbtn,
                checked
              ) {
                checked = checked && checked.trim() !== "";

                var item = showdown.subParser("outdent")(m4, options, globals),
                  bulletStyle = "";

                // Support for github tasklists
                if (taskbtn && options.tasklists) {
                  bulletStyle =
                    ' class="task-list-item" style="list-style-type: none;"';
                  item = item.replace(/^[ \t]*\[(x|X| )?]/m, function () {
                    var otp =
                      '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                    if (checked) {
                      otp += " checked";
                    }
                    otp += ">";
                    return otp;
                  });
                }

                // ISSUE #312
                // This input: - - - a
                // causes trouble to the parser, since it interprets it as:
                // <ul><li><li><li>a</li></li></li></ul>
                // instead of:
                // <ul><li>- - a</li></ul>
                // So, to prevent it, we will put a marker (¨A)in the beginning of the line
                // Kind of hackish/monkey patching, but seems more effective than overcomplicating the list parser
                item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function (
                  wm2
                ) {
                  return "¨A" + wm2;
                });

                // m1 - Leading line or
                // Has a double return (multi paragraph) or
                // Has sublist
                if (m1 || item.search(/\n{2,}/) > -1) {
                  item = showdown.subParser("githubCodeBlocks")(
                    item,
                    options,
                    globals
                  );
                  item = showdown.subParser("blockGamut")(
                    item,
                    options,
                    globals
                  );
                } else {
                  // Recursion for sub-lists:
                  item = showdown.subParser("lists")(item, options, globals);
                  item = item.replace(/\n$/, ""); // chomp(item)
                  item = showdown.subParser("hashHTMLBlocks")(
                    item,
                    options,
                    globals
                  );

                  // Colapse double linebreaks
                  item = item.replace(/\n\n+/g, "\n\n");
                  if (isParagraphed) {
                    item = showdown.subParser("paragraphs")(
                      item,
                      options,
                      globals
                    );
                  } else {
                    item = showdown.subParser("spanGamut")(
                      item,
                      options,
                      globals
                    );
                  }
                }

                // now we need to remove the marker (¨A)
                item = item.replace("¨A", "");
                // we can finally wrap the line in list item tags
                item = "<li" + bulletStyle + ">" + item + "</li>\n";

                return item;
              });

              // attacklab: strip sentinel
              listStr = listStr.replace(/¨0/g, "");

              globals.gListLevel--;

              if (trimTrailing) {
                listStr = listStr.replace(/\s+$/, "");
              }

              return listStr;
            }

            function styleStartNumber(list, listType) {
              // check if ol and starts by a number different than 1
              if (listType === "ol") {
                var res = list.match(/^ *(\d+)\./);
                if (res && res[1] !== "1") {
                  return ' start="' + res[1] + '"';
                }
              }
              return "";
            }

            /**
             * Check and parse consecutive lists (better fix for issue #142)
             * @param {string} list
             * @param {string} listType
             * @param {boolean} trimTrailing
             * @returns {string}
             */
            function parseConsecutiveLists(list, listType, trimTrailing) {
              // check if we caught 2 or more consecutive lists by mistake
              // we use the counterRgx, meaning if listType is UL we look for OL and vice versa
              var olRgx = options.disableForced4SpacesIndentedSublists
                  ? /^ ?\d+\.[ \t]/gm
                  : /^ {0,3}\d+\.[ \t]/gm,
                ulRgx = options.disableForced4SpacesIndentedSublists
                  ? /^ ?[*+-][ \t]/gm
                  : /^ {0,3}[*+-][ \t]/gm,
                counterRxg = listType === "ul" ? olRgx : ulRgx,
                result = "";

              if (list.search(counterRxg) !== -1) {
                (function parseCL(txt) {
                  var pos = txt.search(counterRxg),
                    style = styleStartNumber(list, listType);
                  if (pos !== -1) {
                    // slice
                    result +=
                      "\n\n<" +
                      listType +
                      style +
                      ">\n" +
                      processListItems(txt.slice(0, pos), !!trimTrailing) +
                      "</" +
                      listType +
                      ">\n";

                    // invert counterType and listType
                    listType = listType === "ul" ? "ol" : "ul";
                    counterRxg = listType === "ul" ? olRgx : ulRgx;

                    //recurse
                    parseCL(txt.slice(pos));
                  } else {
                    result +=
                      "\n\n<" +
                      listType +
                      style +
                      ">\n" +
                      processListItems(txt, !!trimTrailing) +
                      "</" +
                      listType +
                      ">\n";
                  }
                })(list);
              } else {
                var style = styleStartNumber(list, listType);
                result =
                  "\n\n<" +
                  listType +
                  style +
                  ">\n" +
                  processListItems(list, !!trimTrailing) +
                  "</" +
                  listType +
                  ">\n";
              }

              return result;
            }

            /** Start of list parsing **/
            text = globals.converter._dispatch(
              "lists.before",
              text,
              options,
              globals
            );
            // add sentinel to hack around khtml/safari bug:
            // http://bugs.webkit.org/show_bug.cgi?id=11231
            text += "¨0";

            if (globals.gListLevel) {
              text = text.replace(
                /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
                function (wholeMatch, list, m2) {
                  var listType = m2.search(/[*+-]/g) > -1 ? "ul" : "ol";
                  return parseConsecutiveLists(list, listType, true);
                }
              );
            } else {
              text = text.replace(
                /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
                function (wholeMatch, m1, list, m3) {
                  var listType = m3.search(/[*+-]/g) > -1 ? "ul" : "ol";
                  return parseConsecutiveLists(list, listType, false);
                }
              );
            }

            // strip sentinel
            text = text.replace(/¨0/, "");
            text = globals.converter._dispatch(
              "lists.after",
              text,
              options,
              globals
            );
            return text;
          });

          /**
           * Parse metadata at the top of the document
           */
          showdown.subParser("metadata", function (text, options, globals) {
            "use strict";

            if (!options.metadata) {
              return text;
            }

            text = globals.converter._dispatch(
              "metadata.before",
              text,
              options,
              globals
            );

            function parseMetadataContents(content) {
              // raw is raw so it's not changed in any way
              globals.metadata.raw = content;

              // escape chars forbidden in html attributes
              // double quotes
              content = content
                // ampersand first
                .replace(/&/g, "&amp;")
                // double quotes
                .replace(/"/g, "&quot;");

              content = content.replace(/\n {4}/g, " ");
              content.replace(/^([\S ]+): +([\s\S]+?)$/gm, function (
                wm,
                key,
                value
              ) {
                globals.metadata.parsed[key] = value;
                return "";
              });
            }

            text = text.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function (
              wholematch,
              format,
              content
            ) {
              parseMetadataContents(content);
              return "¨M";
            });

            text = text.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function (
              wholematch,
              format,
              content
            ) {
              if (format) {
                globals.metadata.format = format;
              }
              parseMetadataContents(content);
              return "¨M";
            });

            text = text.replace(/¨M/g, "");

            text = globals.converter._dispatch(
              "metadata.after",
              text,
              options,
              globals
            );
            return text;
          });

          /**
           * Remove one level of line-leading tabs or spaces
           */
          showdown.subParser("outdent", function (text, options, globals) {
            "use strict";
            text = globals.converter._dispatch(
              "outdent.before",
              text,
              options,
              globals
            );

            // attacklab: hack around Konqueror 3.5.4 bug:
            // "----------bug".replace(/^-/g,"") == "bug"
            text = text.replace(/^(\t|[ ]{1,4})/gm, "¨0"); // attacklab: g_tab_width

            // attacklab: clean up hack
            text = text.replace(/¨0/g, "");

            text = globals.converter._dispatch(
              "outdent.after",
              text,
              options,
              globals
            );
            return text;
          });

          /**
           *
           */
          showdown.subParser("paragraphs", function (text, options, globals) {
            "use strict";

            text = globals.converter._dispatch(
              "paragraphs.before",
              text,
              options,
              globals
            );
            // Strip leading and trailing lines:
            text = text.replace(/^\n+/g, "");
            text = text.replace(/\n+$/g, "");

            var grafs = text.split(/\n{2,}/g),
              grafsOut = [],
              end = grafs.length; // Wrap <p> tags

            for (var i = 0; i < end; i++) {
              var str = grafs[i];
              // if this is an HTML marker, copy it
              if (str.search(/¨(K|G)(\d+)\1/g) >= 0) {
                grafsOut.push(str);

                // test for presence of characters to prevent empty lines being parsed
                // as paragraphs (resulting in undesired extra empty paragraphs)
              } else if (str.search(/\S/) >= 0) {
                str = showdown.subParser("spanGamut")(str, options, globals);
                str = str.replace(/^([ \t]*)/g, "<p>");
                str += "</p>";
                grafsOut.push(str);
              }
            }

            /** Unhashify HTML blocks */
            end = grafsOut.length;
            for (i = 0; i < end; i++) {
              var blockText = "",
                grafsOutIt = grafsOut[i],
                codeFlag = false;
              // if this is a marker for an html block...
              // use RegExp.test instead of string.search because of QML bug
              while (/¨(K|G)(\d+)\1/.test(grafsOutIt)) {
                var delim = RegExp.$1,
                  num = RegExp.$2;

                if (delim === "K") {
                  blockText = globals.gHtmlBlocks[num];
                } else {
                  // we need to check if ghBlock is a false positive
                  if (codeFlag) {
                    // use encoded version of all text
                    blockText = showdown.subParser("encodeCode")(
                      globals.ghCodeBlocks[num].text,
                      options,
                      globals
                    );
                  } else {
                    blockText = globals.ghCodeBlocks[num].codeblock;
                  }
                }
                blockText = blockText.replace(/\$/g, "$$$$"); // Escape any dollar signs

                grafsOutIt = grafsOutIt.replace(
                  /(\n\n)?¨(K|G)\d+\2(\n\n)?/,
                  blockText
                );
                // Check if grafsOutIt is a pre->code
                if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) {
                  codeFlag = true;
                }
              }
              grafsOut[i] = grafsOutIt;
            }
            text = grafsOut.join("\n");
            // Strip leading and trailing lines:
            text = text.replace(/^\n+/g, "");
            text = text.replace(/\n+$/g, "");
            return globals.converter._dispatch(
              "paragraphs.after",
              text,
              options,
              globals
            );
          });

          /**
           * Run extension
           */
          showdown.subParser("runExtension", function (
            ext,
            text,
            options,
            globals
          ) {
            "use strict";

            if (ext.filter) {
              text = ext.filter(text, globals.converter, options);
            } else if (ext.regex) {
              // TODO remove this when old extension loading mechanism is deprecated
              var re = ext.regex;
              if (!(re instanceof RegExp)) {
                re = new RegExp(re, "g");
              }
              text = text.replace(re, ext.replace);
            }

            return text;
          });

          /**
           * These are all the transformations that occur *within* block-level
           * tags like paragraphs, headers, and list items.
           */
          showdown.subParser("spanGamut", function (text, options, globals) {
            "use strict";

            text = globals.converter._dispatch(
              "spanGamut.before",
              text,
              options,
              globals
            );
            text = showdown.subParser("codeSpans")(text, options, globals);
            text = showdown.subParser("escapeSpecialCharsWithinTagAttributes")(
              text,
              options,
              globals
            );
            text = showdown.subParser("encodeBackslashEscapes")(
              text,
              options,
              globals
            );

            // Process anchor and image tags. Images must come first,
            // because ![foo][f] looks like an anchor.
            text = showdown.subParser("images")(text, options, globals);
            text = showdown.subParser("anchors")(text, options, globals);

            // Make links out of things like `<http://example.com/>`
            // Must come after anchors, because you can use < and >
            // delimiters in inline links like [this](<url>).
            text = showdown.subParser("autoLinks")(text, options, globals);
            text = showdown.subParser("simplifiedAutoLinks")(
              text,
              options,
              globals
            );
            text = showdown.subParser("emoji")(text, options, globals);
            text = showdown.subParser("underline")(text, options, globals);
            text = showdown.subParser("italicsAndBold")(text, options, globals);
            text = showdown.subParser("strikethrough")(text, options, globals);
            text = showdown.subParser("ellipsis")(text, options, globals);

            // we need to hash HTML tags inside spans
            text = showdown.subParser("hashHTMLSpans")(text, options, globals);

            // now we encode amps and angles
            text = showdown.subParser("encodeAmpsAndAngles")(
              text,
              options,
              globals
            );

            // Do hard breaks
            if (options.simpleLineBreaks) {
              // GFM style hard breaks
              // only add line breaks if the text does not contain a block (special case for lists)
              if (!/\n\n¨K/.test(text)) {
                text = text.replace(/\n+/g, "<br />\n");
              }
            } else {
              // Vanilla hard breaks
              text = text.replace(/  +\n/g, "<br />\n");
            }

            text = globals.converter._dispatch(
              "spanGamut.after",
              text,
              options,
              globals
            );
            return text;
          });

          showdown.subParser("strikethrough", function (
            text,
            options,
            globals
          ) {
            "use strict";

            function parseInside(txt) {
              if (options.simplifiedAutoLink) {
                txt = showdown.subParser("simplifiedAutoLinks")(
                  txt,
                  options,
                  globals
                );
              }
              return "<del>" + txt + "</del>";
            }

            if (options.strikethrough) {
              text = globals.converter._dispatch(
                "strikethrough.before",
                text,
                options,
                globals
              );
              text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function (
                wm,
                txt
              ) {
                return parseInside(txt);
              });
              text = globals.converter._dispatch(
                "strikethrough.after",
                text,
                options,
                globals
              );
            }

            return text;
          });

          /**
           * Strips link definitions from text, stores the URLs and titles in
           * hash references.
           * Link defs are in the form: ^[id]: url "optional title"
           */
          showdown.subParser("stripLinkDefinitions", function (
            text,
            options,
            globals
          ) {
            "use strict";

            var regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,
              base64Regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;

            // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
            text += "¨0";

            var replaceFunc = function (
              wholeMatch,
              linkId,
              url,
              width,
              height,
              blankLines,
              title
            ) {
              linkId = linkId.toLowerCase();
              if (url.match(/^data:.+?\/.+?;base64,/)) {
                // remove newlines
                globals.gUrls[linkId] = url.replace(/\s/g, "");
              } else {
                globals.gUrls[linkId] = showdown.subParser(
                  "encodeAmpsAndAngles"
                )(url, options, globals); // Link IDs are case-insensitive
              }

              if (blankLines) {
                // Oops, found blank lines, so it's not a title.
                // Put back the parenthetical statement we stole.
                return blankLines + title;
              } else {
                if (title) {
                  globals.gTitles[linkId] = title.replace(/"|'/g, "&quot;");
                }
                if (options.parseImgDimensions && width && height) {
                  globals.gDimensions[linkId] = {
                    width: width,
                    height: height,
                  };
                }
              }
              // Completely remove the definition from the text
              return "";
            };

            // first we try to find base64 link references
            text = text.replace(base64Regex, replaceFunc);

            text = text.replace(regex, replaceFunc);

            // attacklab: strip sentinel
            text = text.replace(/¨0/, "");

            return text;
          });

          showdown.subParser("tables", function (text, options, globals) {
            "use strict";

            if (!options.tables) {
              return text;
            }

            var tableRgx = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,
              //singeColTblRgx = /^ {0,3}\|.+\|\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n(?: {0,3}\|.+\|\n)+(?:\n\n|¨0)/gm;
              singeColTblRgx = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;

            function parseStyles(sLine) {
              if (/^:[ \t]*--*$/.test(sLine)) {
                return ' style="text-align:left;"';
              } else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) {
                return ' style="text-align:right;"';
              } else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) {
                return ' style="text-align:center;"';
              } else {
                return "";
              }
            }

            function parseHeaders(header, style) {
              var id = "";
              header = header.trim();
              // support both tablesHeaderId and tableHeaderId due to error in documentation so we don't break backwards compatibility
              if (options.tablesHeaderId || options.tableHeaderId) {
                id = ' id="' + header.replace(/ /g, "_").toLowerCase() + '"';
              }
              header = showdown.subParser("spanGamut")(
                header,
                options,
                globals
              );

              return "<th" + id + style + ">" + header + "</th>\n";
            }

            function parseCells(cell, style) {
              var subText = showdown.subParser("spanGamut")(
                cell,
                options,
                globals
              );
              return "<td" + style + ">" + subText + "</td>\n";
            }

            function buildTable(headers, cells) {
              var tb = "<table>\n<thead>\n<tr>\n",
                tblLgn = headers.length;

              for (var i = 0; i < tblLgn; ++i) {
                tb += headers[i];
              }
              tb += "</tr>\n</thead>\n<tbody>\n";

              for (i = 0; i < cells.length; ++i) {
                tb += "<tr>\n";
                for (var ii = 0; ii < tblLgn; ++ii) {
                  tb += cells[i][ii];
                }
                tb += "</tr>\n";
              }
              tb += "</tbody>\n</table>\n";
              return tb;
            }

            function parseTable(rawTable) {
              var i,
                tableLines = rawTable.split("\n");

              for (i = 0; i < tableLines.length; ++i) {
                // strip wrong first and last column if wrapped tables are used
                if (/^ {0,3}\|/.test(tableLines[i])) {
                  tableLines[i] = tableLines[i].replace(/^ {0,3}\|/, "");
                }
                if (/\|[ \t]*$/.test(tableLines[i])) {
                  tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, "");
                }
                // parse code spans first, but we only support one line code spans
                tableLines[i] = showdown.subParser("codeSpans")(
                  tableLines[i],
                  options,
                  globals
                );
              }

              var rawHeaders = tableLines[0].split("|").map(function (s) {
                  return s.trim();
                }),
                rawStyles = tableLines[1].split("|").map(function (s) {
                  return s.trim();
                }),
                rawCells = [],
                headers = [],
                styles = [],
                cells = [];

              tableLines.shift();
              tableLines.shift();

              for (i = 0; i < tableLines.length; ++i) {
                if (tableLines[i].trim() === "") {
                  continue;
                }
                rawCells.push(
                  tableLines[i].split("|").map(function (s) {
                    return s.trim();
                  })
                );
              }

              if (rawHeaders.length < rawStyles.length) {
                return rawTable;
              }

              for (i = 0; i < rawStyles.length; ++i) {
                styles.push(parseStyles(rawStyles[i]));
              }

              for (i = 0; i < rawHeaders.length; ++i) {
                if (showdown.helper.isUndefined(styles[i])) {
                  styles[i] = "";
                }
                headers.push(parseHeaders(rawHeaders[i], styles[i]));
              }

              for (i = 0; i < rawCells.length; ++i) {
                var row = [];
                for (var ii = 0; ii < headers.length; ++ii) {
                  if (showdown.helper.isUndefined(rawCells[i][ii])) {
                  }
                  row.push(parseCells(rawCells[i][ii], styles[ii]));
                }
                cells.push(row);
              }

              return buildTable(headers, cells);
            }

            text = globals.converter._dispatch(
              "tables.before",
              text,
              options,
              globals
            );

            // find escaped pipe characters
            text = text.replace(
              /\\(\|)/g,
              showdown.helper.escapeCharactersCallback
            );

            // parse multi column tables
            text = text.replace(tableRgx, parseTable);

            // parse one column tables
            text = text.replace(singeColTblRgx, parseTable);

            text = globals.converter._dispatch(
              "tables.after",
              text,
              options,
              globals
            );

            return text;
          });

          showdown.subParser("underline", function (text, options, globals) {
            "use strict";

            if (!options.underline) {
              return text;
            }

            text = globals.converter._dispatch(
              "underline.before",
              text,
              options,
              globals
            );

            if (options.literalMidWordUnderscores) {
              text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function (
                wm,
                txt
              ) {
                return "<u>" + txt + "</u>";
              });
              text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function (wm, txt) {
                return "<u>" + txt + "</u>";
              });
            } else {
              text = text.replace(/___(\S[\s\S]*?)___/g, function (wm, m) {
                return /\S$/.test(m) ? "<u>" + m + "</u>" : wm;
              });
              text = text.replace(/__(\S[\s\S]*?)__/g, function (wm, m) {
                return /\S$/.test(m) ? "<u>" + m + "</u>" : wm;
              });
            }

            // escape remaining underscores to prevent them being parsed by italic and bold
            text = text.replace(
              /(_)/g,
              showdown.helper.escapeCharactersCallback
            );

            text = globals.converter._dispatch(
              "underline.after",
              text,
              options,
              globals
            );

            return text;
          });

          /**
           * Swap back in all the special characters we've hidden.
           */
          showdown.subParser("unescapeSpecialChars", function (
            text,
            options,
            globals
          ) {
            "use strict";
            text = globals.converter._dispatch(
              "unescapeSpecialChars.before",
              text,
              options,
              globals
            );

            text = text.replace(/¨E(\d+)E/g, function (wholeMatch, m1) {
              var charCodeToReplace = parseInt(m1);
              return String.fromCharCode(charCodeToReplace);
            });

            text = globals.converter._dispatch(
              "unescapeSpecialChars.after",
              text,
              options,
              globals
            );
            return text;
          });

          showdown.subParser("makeMarkdown.blockquote", function (
            node,
            globals
          ) {
            "use strict";

            var txt = "";
            if (node.hasChildNodes()) {
              var children = node.childNodes,
                childrenLength = children.length;

              for (var i = 0; i < childrenLength; ++i) {
                var innerTxt = showdown.subParser("makeMarkdown.node")(
                  children[i],
                  globals
                );

                if (innerTxt === "") {
                  continue;
                }
                txt += innerTxt;
              }
            }
            // cleanup
            txt = txt.trim();
            txt = "> " + txt.split("\n").join("\n> ");
            return txt;
          });

          showdown.subParser("makeMarkdown.codeBlock", function (
            node,
            globals
          ) {
            "use strict";

            var lang = node.getAttribute("language"),
              num = node.getAttribute("precodenum");
            return "```" + lang + "\n" + globals.preList[num] + "\n```";
          });

          showdown.subParser("makeMarkdown.codeSpan", function (node) {
            "use strict";

            return "`" + node.innerHTML + "`";
          });

          showdown.subParser("makeMarkdown.emphasis", function (node, globals) {
            "use strict";

            var txt = "";
            if (node.hasChildNodes()) {
              txt += "*";
              var children = node.childNodes,
                childrenLength = children.length;
              for (var i = 0; i < childrenLength; ++i) {
                txt += showdown.subParser("makeMarkdown.node")(
                  children[i],
                  globals
                );
              }
              txt += "*";
            }
            return txt;
          });

          showdown.subParser("makeMarkdown.header", function (
            node,
            globals,
            headerLevel
          ) {
            "use strict";

            var headerMark = new Array(headerLevel + 1).join("#"),
              txt = "";

            if (node.hasChildNodes()) {
              txt = headerMark + " ";
              var children = node.childNodes,
                childrenLength = children.length;

              for (var i = 0; i < childrenLength; ++i) {
                txt += showdown.subParser("makeMarkdown.node")(
                  children[i],
                  globals
                );
              }
            }
            return txt;
          });

          showdown.subParser("makeMarkdown.hr", function () {
            "use strict";

            return "---";
          });

          showdown.subParser("makeMarkdown.image", function (node) {
            "use strict";

            var txt = "";
            if (node.hasAttribute("src")) {
              txt += "![" + node.getAttribute("alt") + "](";
              txt += "<" + node.getAttribute("src") + ">";
              if (node.hasAttribute("width") && node.hasAttribute("height")) {
                txt +=
                  " =" +
                  node.getAttribute("width") +
                  "x" +
                  node.getAttribute("height");
              }

              if (node.hasAttribute("title")) {
                txt += ' "' + node.getAttribute("title") + '"';
              }
              txt += ")";
            }
            return txt;
          });

          showdown.subParser("makeMarkdown.links", function (node, globals) {
            "use strict";

            var txt = "";
            if (node.hasChildNodes() && node.hasAttribute("href")) {
              var children = node.childNodes,
                childrenLength = children.length;
              txt = "[";
              for (var i = 0; i < childrenLength; ++i) {
                txt += showdown.subParser("makeMarkdown.node")(
                  children[i],
                  globals
                );
              }
              txt += "](";
              txt += "<" + node.getAttribute("href") + ">";
              if (node.hasAttribute("title")) {
                txt += ' "' + node.getAttribute("title") + '"';
              }
              txt += ")";
            }
            return txt;
          });

          showdown.subParser("makeMarkdown.list", function (
            node,
            globals,
            type
          ) {
            "use strict";

            var txt = "";
            if (!node.hasChildNodes()) {
              return "";
            }
            var listItems = node.childNodes,
              listItemsLenght = listItems.length,
              listNum = node.getAttribute("start") || 1;

            for (var i = 0; i < listItemsLenght; ++i) {
              if (
                typeof listItems[i].tagName === "undefined" ||
                listItems[i].tagName.toLowerCase() !== "li"
              ) {
                continue;
              }

              // define the bullet to use in list
              var bullet = "";
              if (type === "ol") {
                bullet = listNum.toString() + ". ";
              } else {
                bullet = "- ";
              }

              // parse list item
              txt +=
                bullet +
                showdown.subParser("makeMarkdown.listItem")(
                  listItems[i],
                  globals
                );
              ++listNum;
            }

            // add comment at the end to prevent consecutive lists to be parsed as one
            txt += "\n<!-- -->\n";
            return txt.trim();
          });

          showdown.subParser("makeMarkdown.listItem", function (node, globals) {
            "use strict";

            var listItemTxt = "";

            var children = node.childNodes,
              childrenLenght = children.length;

            for (var i = 0; i < childrenLenght; ++i) {
              listItemTxt += showdown.subParser("makeMarkdown.node")(
                children[i],
                globals
              );
            }
            // if it's only one liner, we need to add a newline at the end
            if (!/\n$/.test(listItemTxt)) {
              listItemTxt += "\n";
            } else {
              // it's multiparagraph, so we need to indent
              listItemTxt = listItemTxt
                .split("\n")
                .join("\n    ")
                .replace(/^ {4}$/gm, "")
                .replace(/\n\n+/g, "\n\n");
            }

            return listItemTxt;
          });

          showdown.subParser("makeMarkdown.node", function (
            node,
            globals,
            spansOnly
          ) {
            "use strict";

            spansOnly = spansOnly || false;

            var txt = "";

            // edge case of text without wrapper paragraph
            if (node.nodeType === 3) {
              return showdown.subParser("makeMarkdown.txt")(node, globals);
            }

            // HTML comment
            if (node.nodeType === 8) {
              return "<!--" + node.data + "-->\n\n";
            }

            // process only node elements
            if (node.nodeType !== 1) {
              return "";
            }

            var tagName = node.tagName.toLowerCase();

            switch (tagName) {
              //
              // BLOCKS
              //
              case "h1":
                if (!spansOnly) {
                  txt =
                    showdown.subParser("makeMarkdown.header")(
                      node,
                      globals,
                      1
                    ) + "\n\n";
                }
                break;
              case "h2":
                if (!spansOnly) {
                  txt =
                    showdown.subParser("makeMarkdown.header")(
                      node,
                      globals,
                      2
                    ) + "\n\n";
                }
                break;
              case "h3":
                if (!spansOnly) {
                  txt =
                    showdown.subParser("makeMarkdown.header")(
                      node,
                      globals,
                      3
                    ) + "\n\n";
                }
                break;
              case "h4":
                if (!spansOnly) {
                  txt =
                    showdown.subParser("makeMarkdown.header")(
                      node,
                      globals,
                      4
                    ) + "\n\n";
                }
                break;
              case "h5":
                if (!spansOnly) {
                  txt =
                    showdown.subParser("makeMarkdown.header")(
                      node,
                      globals,
                      5
                    ) + "\n\n";
                }
                break;
              case "h6":
                if (!spansOnly) {
                  txt =
                    showdown.subParser("makeMarkdown.header")(
                      node,
                      globals,
                      6
                    ) + "\n\n";
                }
                break;

              case "p":
                if (!spansOnly) {
                  txt =
                    showdown.subParser("makeMarkdown.paragraph")(
                      node,
                      globals
                    ) + "\n\n";
                }
                break;

              case "blockquote":
                if (!spansOnly) {
                  txt =
                    showdown.subParser("makeMarkdown.blockquote")(
                      node,
                      globals
                    ) + "\n\n";
                }
                break;

              case "hr":
                if (!spansOnly) {
                  txt =
                    showdown.subParser("makeMarkdown.hr")(node, globals) +
                    "\n\n";
                }
                break;

              case "ol":
                if (!spansOnly) {
                  txt =
                    showdown.subParser("makeMarkdown.list")(
                      node,
                      globals,
                      "ol"
                    ) + "\n\n";
                }
                break;

              case "ul":
                if (!spansOnly) {
                  txt =
                    showdown.subParser("makeMarkdown.list")(
                      node,
                      globals,
                      "ul"
                    ) + "\n\n";
                }
                break;

              case "precode":
                if (!spansOnly) {
                  txt =
                    showdown.subParser("makeMarkdown.codeBlock")(
                      node,
                      globals
                    ) + "\n\n";
                }
                break;

              case "pre":
                if (!spansOnly) {
                  txt =
                    showdown.subParser("makeMarkdown.pre")(node, globals) +
                    "\n\n";
                }
                break;

              case "table":
                if (!spansOnly) {
                  txt =
                    showdown.subParser("makeMarkdown.table")(node, globals) +
                    "\n\n";
                }
                break;

              //
              // SPANS
              //
              case "code":
                txt = showdown.subParser("makeMarkdown.codeSpan")(
                  node,
                  globals
                );
                break;

              case "em":
              case "i":
                txt = showdown.subParser("makeMarkdown.emphasis")(
                  node,
                  globals
                );
                break;

              case "strong":
              case "b":
                txt = showdown.subParser("makeMarkdown.strong")(node, globals);
                break;

              case "del":
                txt = showdown.subParser("makeMarkdown.strikethrough")(
                  node,
                  globals
                );
                break;

              case "a":
                txt = showdown.subParser("makeMarkdown.links")(node, globals);
                break;

              case "img":
                txt = showdown.subParser("makeMarkdown.image")(node, globals);
                break;

              default:
                txt = node.outerHTML + "\n\n";
            }

            // common normalization
            // TODO eventually

            return txt;
          });

          showdown.subParser("makeMarkdown.paragraph", function (
            node,
            globals
          ) {
            "use strict";

            var txt = "";
            if (node.hasChildNodes()) {
              var children = node.childNodes,
                childrenLength = children.length;
              for (var i = 0; i < childrenLength; ++i) {
                txt += showdown.subParser("makeMarkdown.node")(
                  children[i],
                  globals
                );
              }
            }

            // some text normalization
            txt = txt.trim();

            return txt;
          });

          showdown.subParser("makeMarkdown.pre", function (node, globals) {
            "use strict";

            var num = node.getAttribute("prenum");
            return "<pre>" + globals.preList[num] + "</pre>";
          });

          showdown.subParser("makeMarkdown.strikethrough", function (
            node,
            globals
          ) {
            "use strict";

            var txt = "";
            if (node.hasChildNodes()) {
              txt += "~~";
              var children = node.childNodes,
                childrenLength = children.length;
              for (var i = 0; i < childrenLength; ++i) {
                txt += showdown.subParser("makeMarkdown.node")(
                  children[i],
                  globals
                );
              }
              txt += "~~";
            }
            return txt;
          });

          showdown.subParser("makeMarkdown.strong", function (node, globals) {
            "use strict";

            var txt = "";
            if (node.hasChildNodes()) {
              txt += "**";
              var children = node.childNodes,
                childrenLength = children.length;
              for (var i = 0; i < childrenLength; ++i) {
                txt += showdown.subParser("makeMarkdown.node")(
                  children[i],
                  globals
                );
              }
              txt += "**";
            }
            return txt;
          });

          showdown.subParser("makeMarkdown.table", function (node, globals) {
            "use strict";

            var txt = "",
              tableArray = [[], []],
              headings = node.querySelectorAll("thead>tr>th"),
              rows = node.querySelectorAll("tbody>tr"),
              i,
              ii;
            for (i = 0; i < headings.length; ++i) {
              var headContent = showdown.subParser("makeMarkdown.tableCell")(
                  headings[i],
                  globals
                ),
                allign = "---";

              if (headings[i].hasAttribute("style")) {
                var style = headings[i]
                  .getAttribute("style")
                  .toLowerCase()
                  .replace(/\s/g, "");
                switch (style) {
                  case "text-align:left;":
                    allign = ":---";
                    break;
                  case "text-align:right;":
                    allign = "---:";
                    break;
                  case "text-align:center;":
                    allign = ":---:";
                    break;
                }
              }
              tableArray[0][i] = headContent.trim();
              tableArray[1][i] = allign;
            }

            for (i = 0; i < rows.length; ++i) {
              var r = tableArray.push([]) - 1,
                cols = rows[i].getElementsByTagName("td");

              for (ii = 0; ii < headings.length; ++ii) {
                var cellContent = " ";
                if (typeof cols[ii] !== "undefined") {
                  cellContent = showdown.subParser("makeMarkdown.tableCell")(
                    cols[ii],
                    globals
                  );
                }
                tableArray[r].push(cellContent);
              }
            }

            var cellSpacesCount = 3;
            for (i = 0; i < tableArray.length; ++i) {
              for (ii = 0; ii < tableArray[i].length; ++ii) {
                var strLen = tableArray[i][ii].length;
                if (strLen > cellSpacesCount) {
                  cellSpacesCount = strLen;
                }
              }
            }

            for (i = 0; i < tableArray.length; ++i) {
              for (ii = 0; ii < tableArray[i].length; ++ii) {
                if (i === 1) {
                  if (tableArray[i][ii].slice(-1) === ":") {
                    tableArray[i][ii] =
                      showdown.helper.padEnd(
                        tableArray[i][ii].slice(-1),
                        cellSpacesCount - 1,
                        "-"
                      ) + ":";
                  } else {
                    tableArray[i][ii] = showdown.helper.padEnd(
                      tableArray[i][ii],
                      cellSpacesCount,
                      "-"
                    );
                  }
                } else {
                  tableArray[i][ii] = showdown.helper.padEnd(
                    tableArray[i][ii],
                    cellSpacesCount
                  );
                }
              }
              txt += "| " + tableArray[i].join(" | ") + " |\n";
            }

            return txt.trim();
          });

          showdown.subParser("makeMarkdown.tableCell", function (
            node,
            globals
          ) {
            "use strict";

            var txt = "";
            if (!node.hasChildNodes()) {
              return "";
            }
            var children = node.childNodes,
              childrenLength = children.length;

            for (var i = 0; i < childrenLength; ++i) {
              txt += showdown.subParser("makeMarkdown.node")(
                children[i],
                globals,
                true
              );
            }
            return txt.trim();
          });

          showdown.subParser("makeMarkdown.txt", function (node) {
            "use strict";

            var txt = node.nodeValue;

            // multiple spaces are collapsed
            txt = txt.replace(/ +/g, " ");

            // replace the custom ¨NBSP; with a space
            txt = txt.replace(/¨NBSP;/g, " ");

            // ", <, > and & should replace escaped html entities
            txt = showdown.helper.unescapeHTMLEntities(txt);

            // escape markdown magic characters
            // emphasis, strong and strikethrough - can appear everywhere
            // we also escape pipe (|) because of tables
            // and escape ` because of code blocks and spans
            txt = txt.replace(/([*_~|`])/g, "\\$1");

            // escape > because of blockquotes
            txt = txt.replace(/^(\s*)>/g, "\\$1>");

            // hash character, only troublesome at the beginning of a line because of headers
            txt = txt.replace(/^#/gm, "\\#");

            // horizontal rules
            txt = txt.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3");

            // dot, because of ordered lists, only troublesome at the beginning of a line when preceded by an integer
            txt = txt.replace(/^( {0,3}\d+)\./gm, "$1\\.");

            // +, * and -, at the beginning of a line becomes a list, so we need to escape them also (asterisk was already escaped)
            txt = txt.replace(/^( {0,3})([+-])/gm, "$1\\$2");

            // images and links, ] followed by ( is problematic, so we escape it
            txt = txt.replace(/]([\s]*)\(/g, "\\]$1\\(");

            // reference URIs must also be escaped
            txt = txt.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:");

            return txt;
          });

          var root = this;

          // AMD Loader
          if (typeof define === "function" && define.amd) {
            define(function () {
              "use strict";
              return showdown;
            });

            // CommonJS/nodeJS Loader
          } else if (typeof module !== "undefined" && module.exports) {
            module.exports = showdown;

            // Regular Browser loader
          } else {
            root.showdown = showdown;
          }
        }.call(this));
      },
      {},
    ],
    "node_modules/handlebars/dist/cjs/handlebars/utils.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true;
        exports.extend = extend;
        exports.indexOf = indexOf;
        exports.escapeExpression = escapeExpression;
        exports.isEmpty = isEmpty;
        exports.createFrame = createFrame;
        exports.blockParams = blockParams;
        exports.appendContextPath = appendContextPath;
        var escape = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "`": "&#x60;",
          "=": "&#x3D;",
        };
        var badChars = /[&<>"'`=]/g,
          possible = /[&<>"'`=]/;

        function escapeChar(chr) {
          return escape[chr];
        }

        function extend(
          obj
          /* , ...source */
        ) {
          for (var i = 1; i < arguments.length; i++) {
            for (var key in arguments[i]) {
              if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
                obj[key] = arguments[i][key];
              }
            }
          }

          return obj;
        }

        var toString = Object.prototype.toString;
        exports.toString = toString; // Sourced from lodash
        // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt

        /* eslint-disable func-style */

        var isFunction = function isFunction(value) {
          return typeof value === "function";
        }; // fallback for older versions of Chrome and Safari

        /* istanbul ignore next */

        if (isFunction(/x/)) {
          exports.isFunction = isFunction = function (value) {
            return (
              typeof value === "function" &&
              toString.call(value) === "[object Function]"
            );
          };
        }

        exports.isFunction = isFunction;
        /* eslint-enable func-style */

        /* istanbul ignore next */

        var isArray =
          Array.isArray ||
          function (value) {
            return value && typeof value === "object"
              ? toString.call(value) === "[object Array]"
              : false;
          };

        exports.isArray = isArray; // Older IE versions do not directly support indexOf so we must implement our own, sadly.

        function indexOf(array, value) {
          for (var i = 0, len = array.length; i < len; i++) {
            if (array[i] === value) {
              return i;
            }
          }

          return -1;
        }

        function escapeExpression(string) {
          if (typeof string !== "string") {
            // don't escape SafeStrings, since they're already safe
            if (string && string.toHTML) {
              return string.toHTML();
            } else if (string == null) {
              return "";
            } else if (!string) {
              return string + "";
            } // Force a string conversion as this will be done by the append regardless and
            // the regex test will do this transparently behind the scenes, causing issues if
            // an object's to string has escaped characters in it.

            string = "" + string;
          }

          if (!possible.test(string)) {
            return string;
          }

          return string.replace(badChars, escapeChar);
        }

        function isEmpty(value) {
          if (!value && value !== 0) {
            return true;
          } else if (isArray(value) && value.length === 0) {
            return true;
          } else {
            return false;
          }
        }

        function createFrame(object) {
          var frame = extend({}, object);
          frame._parent = object;
          return frame;
        }

        function blockParams(params, ids) {
          params.path = ids;
          return params;
        }

        function appendContextPath(contextPath, id) {
          return (contextPath ? contextPath + "." : "") + id;
        }
      },
      {},
    ],
    "node_modules/handlebars/dist/cjs/handlebars/exception.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true;
        var errorProps = [
          "description",
          "fileName",
          "lineNumber",
          "endLineNumber",
          "message",
          "name",
          "number",
          "stack",
        ];

        function Exception(message, node) {
          var loc = node && node.loc,
            line = undefined,
            endLineNumber = undefined,
            column = undefined,
            endColumn = undefined;

          if (loc) {
            line = loc.start.line;
            endLineNumber = loc.end.line;
            column = loc.start.column;
            endColumn = loc.end.column;
            message += " - " + line + ":" + column;
          }

          var tmp = Error.prototype.constructor.call(this, message); // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.

          for (var idx = 0; idx < errorProps.length; idx++) {
            this[errorProps[idx]] = tmp[errorProps[idx]];
          }
          /* istanbul ignore else */

          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, Exception);
          }

          try {
            if (loc) {
              this.lineNumber = line;
              this.endLineNumber = endLineNumber; // Work around issue under safari where we can't directly set the column value

              /* istanbul ignore next */

              if (Object.defineProperty) {
                Object.defineProperty(this, "column", {
                  value: column,
                  enumerable: true,
                });
                Object.defineProperty(this, "endColumn", {
                  value: endColumn,
                  enumerable: true,
                });
              } else {
                this.column = column;
                this.endColumn = endColumn;
              }
            }
          } catch (nop) {
            /* Ignore if the browser is very particular */
          }
        }

        Exception.prototype = new Error();
        exports["default"] = Exception;
        module.exports = exports["default"];
      },
      {},
    ],
    "node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true;

        var _utils = require("../utils");

        exports["default"] = function (instance) {
          instance.registerHelper("blockHelperMissing", function (
            context,
            options
          ) {
            var inverse = options.inverse,
              fn = options.fn;

            if (context === true) {
              return fn(this);
            } else if (context === false || context == null) {
              return inverse(this);
            } else if (_utils.isArray(context)) {
              if (context.length > 0) {
                if (options.ids) {
                  options.ids = [options.name];
                }

                return instance.helpers.each(context, options);
              } else {
                return inverse(this);
              }
            } else {
              if (options.data && options.ids) {
                var data = _utils.createFrame(options.data);

                data.contextPath = _utils.appendContextPath(
                  options.data.contextPath,
                  options.name
                );
                options = {
                  data: data,
                };
              }

              return fn(context, options);
            }
          });
        };

        module.exports = exports["default"];
      },
      { "../utils": "node_modules/handlebars/dist/cjs/handlebars/utils.js" },
    ],
    "node_modules/handlebars/dist/cjs/handlebars/helpers/each.js": [
      function (require, module, exports) {
        var global = arguments[3];
        ("use strict");

        exports.__esModule = true; // istanbul ignore next

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        var _utils = require("../utils");

        var _exception = require("../exception");

        var _exception2 = _interopRequireDefault(_exception);

        exports["default"] = function (instance) {
          instance.registerHelper("each", function (context, options) {
            if (!options) {
              throw new _exception2["default"]("Must pass iterator to #each");
            }

            var fn = options.fn,
              inverse = options.inverse,
              i = 0,
              ret = "",
              data = undefined,
              contextPath = undefined;

            if (options.data && options.ids) {
              contextPath =
                _utils.appendContextPath(
                  options.data.contextPath,
                  options.ids[0]
                ) + ".";
            }

            if (_utils.isFunction(context)) {
              context = context.call(this);
            }

            if (options.data) {
              data = _utils.createFrame(options.data);
            }

            function execIteration(field, index, last) {
              if (data) {
                data.key = field;
                data.index = index;
                data.first = index === 0;
                data.last = !!last;

                if (contextPath) {
                  data.contextPath = contextPath + field;
                }
              }

              ret =
                ret +
                fn(context[field], {
                  data: data,
                  blockParams: _utils.blockParams(
                    [context[field], field],
                    [contextPath + field, null]
                  ),
                });
            }

            if (context && typeof context === "object") {
              if (_utils.isArray(context)) {
                for (var j = context.length; i < j; i++) {
                  if (i in context) {
                    execIteration(i, i, i === context.length - 1);
                  }
                }
              } else if (global.Symbol && context[global.Symbol.iterator]) {
                var newContext = [];
                var iterator = context[global.Symbol.iterator]();

                for (var it = iterator.next(); !it.done; it = iterator.next()) {
                  newContext.push(it.value);
                }

                context = newContext;

                for (var j = context.length; i < j; i++) {
                  execIteration(i, i, i === context.length - 1);
                }
              } else {
                (function () {
                  var priorKey = undefined;
                  Object.keys(context).forEach(function (key) {
                    // We're running the iterations one step out of sync so we can detect
                    // the last iteration without have to scan the object twice and create
                    // an itermediate keys array.
                    if (priorKey !== undefined) {
                      execIteration(priorKey, i - 1);
                    }

                    priorKey = key;
                    i++;
                  });

                  if (priorKey !== undefined) {
                    execIteration(priorKey, i - 1, true);
                  }
                })();
              }
            }

            if (i === 0) {
              ret = inverse(this);
            }

            return ret;
          });
        };

        module.exports = exports["default"];
      },
      {
        "../utils": "node_modules/handlebars/dist/cjs/handlebars/utils.js",
        "../exception":
          "node_modules/handlebars/dist/cjs/handlebars/exception.js",
      },
    ],
    "node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true; // istanbul ignore next

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        var _exception = require("../exception");

        var _exception2 = _interopRequireDefault(_exception);

        exports["default"] = function (instance) {
          instance.registerHelper(
            "helperMissing",
            function () /* [args, ]options */
            {
              if (arguments.length === 1) {
                // A missing field in a {{foo}} construct.
                return undefined;
              } else {
                // Someone is actually trying to call something, blow up.
                throw new _exception2["default"](
                  'Missing helper: "' +
                    arguments[arguments.length - 1].name +
                    '"'
                );
              }
            }
          );
        };

        module.exports = exports["default"];
      },
      {
        "../exception":
          "node_modules/handlebars/dist/cjs/handlebars/exception.js",
      },
    ],
    "node_modules/handlebars/dist/cjs/handlebars/helpers/if.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true; // istanbul ignore next

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        var _utils = require("../utils");

        var _exception = require("../exception");

        var _exception2 = _interopRequireDefault(_exception);

        exports["default"] = function (instance) {
          instance.registerHelper("if", function (conditional, options) {
            if (arguments.length != 2) {
              throw new _exception2["default"](
                "#if requires exactly one argument"
              );
            }

            if (_utils.isFunction(conditional)) {
              conditional = conditional.call(this);
            } // Default behavior is to render the positive path if the value is truthy and not empty.
            // The `includeZero` option may be set to treat the condtional as purely not empty based on the
            // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.

            if (
              (!options.hash.includeZero && !conditional) ||
              _utils.isEmpty(conditional)
            ) {
              return options.inverse(this);
            } else {
              return options.fn(this);
            }
          });
          instance.registerHelper("unless", function (conditional, options) {
            if (arguments.length != 2) {
              throw new _exception2["default"](
                "#unless requires exactly one argument"
              );
            }

            return instance.helpers["if"].call(this, conditional, {
              fn: options.inverse,
              inverse: options.fn,
              hash: options.hash,
            });
          });
        };

        module.exports = exports["default"];
      },
      {
        "../utils": "node_modules/handlebars/dist/cjs/handlebars/utils.js",
        "../exception":
          "node_modules/handlebars/dist/cjs/handlebars/exception.js",
      },
    ],
    "node_modules/handlebars/dist/cjs/handlebars/helpers/log.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true;

        exports["default"] = function (instance) {
          instance.registerHelper("log", function () /* message, options */
          {
            var args = [undefined],
              options = arguments[arguments.length - 1];

            for (var i = 0; i < arguments.length - 1; i++) {
              args.push(arguments[i]);
            }

            var level = 1;

            if (options.hash.level != null) {
              level = options.hash.level;
            } else if (options.data && options.data.level != null) {
              level = options.data.level;
            }

            args[0] = level;
            instance.log.apply(instance, args);
          });
        };

        module.exports = exports["default"];
      },
      {},
    ],
    "node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true;

        exports["default"] = function (instance) {
          instance.registerHelper("lookup", function (obj, field, options) {
            if (!obj) {
              // Note for 5.0: Change to "obj == null" in 5.0
              return obj;
            }

            return options.lookupProperty(obj, field);
          });
        };

        module.exports = exports["default"];
      },
      {},
    ],
    "node_modules/handlebars/dist/cjs/handlebars/helpers/with.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true; // istanbul ignore next

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        var _utils = require("../utils");

        var _exception = require("../exception");

        var _exception2 = _interopRequireDefault(_exception);

        exports["default"] = function (instance) {
          instance.registerHelper("with", function (context, options) {
            if (arguments.length != 2) {
              throw new _exception2["default"](
                "#with requires exactly one argument"
              );
            }

            if (_utils.isFunction(context)) {
              context = context.call(this);
            }

            var fn = options.fn;

            if (!_utils.isEmpty(context)) {
              var data = options.data;

              if (options.data && options.ids) {
                data = _utils.createFrame(options.data);
                data.contextPath = _utils.appendContextPath(
                  options.data.contextPath,
                  options.ids[0]
                );
              }

              return fn(context, {
                data: data,
                blockParams: _utils.blockParams(
                  [context],
                  [data && data.contextPath]
                ),
              });
            } else {
              return options.inverse(this);
            }
          });
        };

        module.exports = exports["default"];
      },
      {
        "../utils": "node_modules/handlebars/dist/cjs/handlebars/utils.js",
        "../exception":
          "node_modules/handlebars/dist/cjs/handlebars/exception.js",
      },
    ],
    "node_modules/handlebars/dist/cjs/handlebars/helpers.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true;
        exports.registerDefaultHelpers = registerDefaultHelpers;
        exports.moveHelperToHooks = moveHelperToHooks; // istanbul ignore next

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        var _helpersBlockHelperMissing = require("./helpers/block-helper-missing");

        var _helpersBlockHelperMissing2 = _interopRequireDefault(
          _helpersBlockHelperMissing
        );

        var _helpersEach = require("./helpers/each");

        var _helpersEach2 = _interopRequireDefault(_helpersEach);

        var _helpersHelperMissing = require("./helpers/helper-missing");

        var _helpersHelperMissing2 = _interopRequireDefault(
          _helpersHelperMissing
        );

        var _helpersIf = require("./helpers/if");

        var _helpersIf2 = _interopRequireDefault(_helpersIf);

        var _helpersLog = require("./helpers/log");

        var _helpersLog2 = _interopRequireDefault(_helpersLog);

        var _helpersLookup = require("./helpers/lookup");

        var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

        var _helpersWith = require("./helpers/with");

        var _helpersWith2 = _interopRequireDefault(_helpersWith);

        function registerDefaultHelpers(instance) {
          _helpersBlockHelperMissing2["default"](instance);

          _helpersEach2["default"](instance);

          _helpersHelperMissing2["default"](instance);

          _helpersIf2["default"](instance);

          _helpersLog2["default"](instance);

          _helpersLookup2["default"](instance);

          _helpersWith2["default"](instance);
        }

        function moveHelperToHooks(instance, helperName, keepHelper) {
          if (instance.helpers[helperName]) {
            instance.hooks[helperName] = instance.helpers[helperName];

            if (!keepHelper) {
              delete instance.helpers[helperName];
            }
          }
        }
      },
      {
        "./helpers/block-helper-missing":
          "node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js",
        "./helpers/each":
          "node_modules/handlebars/dist/cjs/handlebars/helpers/each.js",
        "./helpers/helper-missing":
          "node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js",
        "./helpers/if":
          "node_modules/handlebars/dist/cjs/handlebars/helpers/if.js",
        "./helpers/log":
          "node_modules/handlebars/dist/cjs/handlebars/helpers/log.js",
        "./helpers/lookup":
          "node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js",
        "./helpers/with":
          "node_modules/handlebars/dist/cjs/handlebars/helpers/with.js",
      },
    ],
    "node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true;

        var _utils = require("../utils");

        exports["default"] = function (instance) {
          instance.registerDecorator("inline", function (
            fn,
            props,
            container,
            options
          ) {
            var ret = fn;

            if (!props.partials) {
              props.partials = {};

              ret = function (context, options) {
                // Create a new partials stack frame prior to exec.
                var original = container.partials;
                container.partials = _utils.extend(
                  {},
                  original,
                  props.partials
                );
                var ret = fn(context, options);
                container.partials = original;
                return ret;
              };
            }

            props.partials[options.args[0]] = options.fn;
            return ret;
          });
        };

        module.exports = exports["default"];
      },
      { "../utils": "node_modules/handlebars/dist/cjs/handlebars/utils.js" },
    ],
    "node_modules/handlebars/dist/cjs/handlebars/decorators.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true;
        exports.registerDefaultDecorators = registerDefaultDecorators; // istanbul ignore next

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        var _decoratorsInline = require("./decorators/inline");

        var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

        function registerDefaultDecorators(instance) {
          _decoratorsInline2["default"](instance);
        }
      },
      {
        "./decorators/inline":
          "node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js",
      },
    ],
    "node_modules/handlebars/dist/cjs/handlebars/logger.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true;

        var _utils = require("./utils");

        var logger = {
          methodMap: ["debug", "info", "warn", "error"],
          level: "info",
          // Maps a given level value to the `methodMap` indexes above.
          lookupLevel: function lookupLevel(level) {
            if (typeof level === "string") {
              var levelMap = _utils.indexOf(
                logger.methodMap,
                level.toLowerCase()
              );

              if (levelMap >= 0) {
                level = levelMap;
              } else {
                level = parseInt(level, 10);
              }
            }

            return level;
          },
          // Can be overridden in the host environment
          log: function log(level) {
            level = logger.lookupLevel(level);

            if (
              typeof console !== "undefined" &&
              logger.lookupLevel(logger.level) <= level
            ) {
              var method = logger.methodMap[level]; // eslint-disable-next-line no-console

              if (!console[method]) {
                method = "log";
              }

              for (
                var _len = arguments.length,
                  message = Array(_len > 1 ? _len - 1 : 0),
                  _key = 1;
                _key < _len;
                _key++
              ) {
                message[_key - 1] = arguments[_key];
              }

              console[method].apply(console, message); // eslint-disable-line no-console
            }
          },
        };
        exports["default"] = logger;
        module.exports = exports["default"];
      },
      { "./utils": "node_modules/handlebars/dist/cjs/handlebars/utils.js" },
    ],
    "node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true;
        exports.createNewLookupObject = createNewLookupObject;

        var _utils = require("../utils");
        /**
         * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
         * The resulting object can be used with "object[property]" to check if a property exists
         * @param {...object} sources a varargs parameter of source objects that will be merged
         * @returns {object}
         */

        function createNewLookupObject() {
          for (
            var _len = arguments.length, sources = Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            sources[_key] = arguments[_key];
          }

          return _utils.extend.apply(
            undefined,
            [Object.create(null)].concat(sources)
          );
        }
      },
      { "../utils": "node_modules/handlebars/dist/cjs/handlebars/utils.js" },
    ],
    "node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true;
        exports.createProtoAccessControl = createProtoAccessControl;
        exports.resultIsAllowed = resultIsAllowed;
        exports.resetLoggedProperties = resetLoggedProperties; // istanbul ignore next

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          } else {
            var newObj = {};

            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key))
                  newObj[key] = obj[key];
              }
            }

            newObj["default"] = obj;
            return newObj;
          }
        }

        var _createNewLookupObject = require("./create-new-lookup-object");

        var _logger = require("../logger");

        var logger = _interopRequireWildcard(_logger);

        var loggedProperties = Object.create(null);

        function createProtoAccessControl(runtimeOptions) {
          var defaultMethodWhiteList = Object.create(null);
          defaultMethodWhiteList["constructor"] = false;
          defaultMethodWhiteList["__defineGetter__"] = false;
          defaultMethodWhiteList["__defineSetter__"] = false;
          defaultMethodWhiteList["__lookupGetter__"] = false;
          var defaultPropertyWhiteList = Object.create(null); // eslint-disable-next-line no-proto

          defaultPropertyWhiteList["__proto__"] = false;
          return {
            properties: {
              whitelist: _createNewLookupObject.createNewLookupObject(
                defaultPropertyWhiteList,
                runtimeOptions.allowedProtoProperties
              ),
              defaultValue: runtimeOptions.allowProtoPropertiesByDefault,
            },
            methods: {
              whitelist: _createNewLookupObject.createNewLookupObject(
                defaultMethodWhiteList,
                runtimeOptions.allowedProtoMethods
              ),
              defaultValue: runtimeOptions.allowProtoMethodsByDefault,
            },
          };
        }

        function resultIsAllowed(result, protoAccessControl, propertyName) {
          if (typeof result === "function") {
            return checkWhiteList(protoAccessControl.methods, propertyName);
          } else {
            return checkWhiteList(protoAccessControl.properties, propertyName);
          }
        }

        function checkWhiteList(protoAccessControlForType, propertyName) {
          if (protoAccessControlForType.whitelist[propertyName] !== undefined) {
            return protoAccessControlForType.whitelist[propertyName] === true;
          }

          if (protoAccessControlForType.defaultValue !== undefined) {
            return protoAccessControlForType.defaultValue;
          }

          logUnexpecedPropertyAccessOnce(propertyName);
          return false;
        }

        function logUnexpecedPropertyAccessOnce(propertyName) {
          if (loggedProperties[propertyName] !== true) {
            loggedProperties[propertyName] = true;
            logger.log(
              "error",
              'Handlebars: Access has been denied to resolve the property "' +
                propertyName +
                '" because it is not an "own property" of its parent.\n' +
                "You can add a runtime option to disable the check or this warning:\n" +
                "See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details"
            );
          }
        }

        function resetLoggedProperties() {
          Object.keys(loggedProperties).forEach(function (propertyName) {
            delete loggedProperties[propertyName];
          });
        }
      },
      {
        "./create-new-lookup-object":
          "node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js",
        "../logger": "node_modules/handlebars/dist/cjs/handlebars/logger.js",
      },
    ],
    "node_modules/handlebars/dist/cjs/handlebars/base.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true;
        exports.HandlebarsEnvironment = HandlebarsEnvironment; // istanbul ignore next

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        var _utils = require("./utils");

        var _exception = require("./exception");

        var _exception2 = _interopRequireDefault(_exception);

        var _helpers = require("./helpers");

        var _decorators = require("./decorators");

        var _logger = require("./logger");

        var _logger2 = _interopRequireDefault(_logger);

        var _internalProtoAccess = require("./internal/proto-access");

        var VERSION = "4.7.6";
        exports.VERSION = VERSION;
        var COMPILER_REVISION = 8;
        exports.COMPILER_REVISION = COMPILER_REVISION;
        var LAST_COMPATIBLE_COMPILER_REVISION = 7;
        exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
        var REVISION_CHANGES = {
          1: "<= 1.0.rc.2",
          // 1.0.rc.2 is actually rev2 but doesn't report it
          2: "== 1.0.0-rc.3",
          3: "== 1.0.0-rc.4",
          4: "== 1.x.x",
          5: "== 2.0.0-alpha.x",
          6: ">= 2.0.0-beta.1",
          7: ">= 4.0.0 <4.3.0",
          8: ">= 4.3.0",
        };
        exports.REVISION_CHANGES = REVISION_CHANGES;
        var objectType = "[object Object]";

        function HandlebarsEnvironment(helpers, partials, decorators) {
          this.helpers = helpers || {};
          this.partials = partials || {};
          this.decorators = decorators || {};

          _helpers.registerDefaultHelpers(this);

          _decorators.registerDefaultDecorators(this);
        }

        HandlebarsEnvironment.prototype = {
          constructor: HandlebarsEnvironment,
          logger: _logger2["default"],
          log: _logger2["default"].log,
          registerHelper: function registerHelper(name, fn) {
            if (_utils.toString.call(name) === objectType) {
              if (fn) {
                throw new _exception2["default"](
                  "Arg not supported with multiple helpers"
                );
              }

              _utils.extend(this.helpers, name);
            } else {
              this.helpers[name] = fn;
            }
          },
          unregisterHelper: function unregisterHelper(name) {
            delete this.helpers[name];
          },
          registerPartial: function registerPartial(name, partial) {
            if (_utils.toString.call(name) === objectType) {
              _utils.extend(this.partials, name);
            } else {
              if (typeof partial === "undefined") {
                throw new _exception2["default"](
                  'Attempting to register a partial called "' +
                    name +
                    '" as undefined'
                );
              }

              this.partials[name] = partial;
            }
          },
          unregisterPartial: function unregisterPartial(name) {
            delete this.partials[name];
          },
          registerDecorator: function registerDecorator(name, fn) {
            if (_utils.toString.call(name) === objectType) {
              if (fn) {
                throw new _exception2["default"](
                  "Arg not supported with multiple decorators"
                );
              }

              _utils.extend(this.decorators, name);
            } else {
              this.decorators[name] = fn;
            }
          },
          unregisterDecorator: function unregisterDecorator(name) {
            delete this.decorators[name];
          },

          /**
           * Reset the memory of illegal property accesses that have already been logged.
           * @deprecated should only be used in handlebars test-cases
           */
          resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
            _internalProtoAccess.resetLoggedProperties();
          },
        };
        var log = _logger2["default"].log;
        exports.log = log;
        exports.createFrame = _utils.createFrame;
        exports.logger = _logger2["default"];
      },
      {
        "./utils": "node_modules/handlebars/dist/cjs/handlebars/utils.js",
        "./exception":
          "node_modules/handlebars/dist/cjs/handlebars/exception.js",
        "./helpers": "node_modules/handlebars/dist/cjs/handlebars/helpers.js",
        "./decorators":
          "node_modules/handlebars/dist/cjs/handlebars/decorators.js",
        "./logger": "node_modules/handlebars/dist/cjs/handlebars/logger.js",
        "./internal/proto-access":
          "node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js",
      },
    ],
    "node_modules/handlebars/dist/cjs/handlebars/safe-string.js": [
      function (require, module, exports) {
        // Build out our basic SafeString type
        "use strict";

        exports.__esModule = true;

        function SafeString(string) {
          this.string = string;
        }

        SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
          return "" + this.string;
        };

        exports["default"] = SafeString;
        module.exports = exports["default"];
      },
      {},
    ],
    "node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true;
        exports.wrapHelper = wrapHelper;

        function wrapHelper(helper, transformOptionsFn) {
          if (typeof helper !== "function") {
            // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
            // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
            return helper;
          }

          var wrapper = function wrapper() /* dynamic arguments */
          {
            var options = arguments[arguments.length - 1];
            arguments[arguments.length - 1] = transformOptionsFn(options);
            return helper.apply(this, arguments);
          };

          return wrapper;
        }
      },
      {},
    ],
    "node_modules/handlebars/dist/cjs/handlebars/runtime.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true;
        exports.checkRevision = checkRevision;
        exports.template = template;
        exports.wrapProgram = wrapProgram;
        exports.resolvePartial = resolvePartial;
        exports.invokePartial = invokePartial;
        exports.noop = noop; // istanbul ignore next

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        } // istanbul ignore next

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          } else {
            var newObj = {};

            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key))
                  newObj[key] = obj[key];
              }
            }

            newObj["default"] = obj;
            return newObj;
          }
        }

        var _utils = require("./utils");

        var Utils = _interopRequireWildcard(_utils);

        var _exception = require("./exception");

        var _exception2 = _interopRequireDefault(_exception);

        var _base = require("./base");

        var _helpers = require("./helpers");

        var _internalWrapHelper = require("./internal/wrapHelper");

        var _internalProtoAccess = require("./internal/proto-access");

        function checkRevision(compilerInfo) {
          var compilerRevision = (compilerInfo && compilerInfo[0]) || 1,
            currentRevision = _base.COMPILER_REVISION;

          if (
            compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION &&
            compilerRevision <= _base.COMPILER_REVISION
          ) {
            return;
          }

          if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
            var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
              compilerVersions = _base.REVISION_CHANGES[compilerRevision];
            throw new _exception2["default"](
              "Template was precompiled with an older version of Handlebars than the current runtime. " +
                "Please update your precompiler to a newer version (" +
                runtimeVersions +
                ") or downgrade your runtime to an older version (" +
                compilerVersions +
                ")."
            );
          } else {
            // Use the embedded version info since the runtime doesn't know about this revision yet
            throw new _exception2["default"](
              "Template was precompiled with a newer version of Handlebars than the current runtime. " +
                "Please update your runtime to a newer version (" +
                compilerInfo[1] +
                ")."
            );
          }
        }

        function template(templateSpec, env) {
          /* istanbul ignore next */
          if (!env) {
            throw new _exception2["default"](
              "No environment passed to template"
            );
          }

          if (!templateSpec || !templateSpec.main) {
            throw new _exception2["default"](
              "Unknown template object: " + typeof templateSpec
            );
          }

          templateSpec.main.decorator = templateSpec.main_d; // Note: Using env.VM references rather than local var references throughout this section to allow
          // for external users to override these as pseudo-supported APIs.

          env.VM.checkRevision(templateSpec.compiler); // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)

          var templateWasPrecompiledWithCompilerV7 =
            templateSpec.compiler && templateSpec.compiler[0] === 7;

          function invokePartialWrapper(partial, context, options) {
            if (options.hash) {
              context = Utils.extend({}, context, options.hash);

              if (options.ids) {
                options.ids[0] = true;
              }
            }

            partial = env.VM.resolvePartial.call(
              this,
              partial,
              context,
              options
            );
            var extendedOptions = Utils.extend({}, options, {
              hooks: this.hooks,
              protoAccessControl: this.protoAccessControl,
            });
            var result = env.VM.invokePartial.call(
              this,
              partial,
              context,
              extendedOptions
            );

            if (result == null && env.compile) {
              options.partials[options.name] = env.compile(
                partial,
                templateSpec.compilerOptions,
                env
              );
              result = options.partials[options.name](context, extendedOptions);
            }

            if (result != null) {
              if (options.indent) {
                var lines = result.split("\n");

                for (var i = 0, l = lines.length; i < l; i++) {
                  if (!lines[i] && i + 1 === l) {
                    break;
                  }

                  lines[i] = options.indent + lines[i];
                }

                result = lines.join("\n");
              }

              return result;
            } else {
              throw new _exception2["default"](
                "The partial " +
                  options.name +
                  " could not be compiled when running in runtime-only mode"
              );
            }
          } // Just add water

          var container = {
            strict: function strict(obj, name, loc) {
              if (!obj || !(name in obj)) {
                throw new _exception2["default"](
                  '"' + name + '" not defined in ' + obj,
                  {
                    loc: loc,
                  }
                );
              }

              return obj[name];
            },
            lookupProperty: function lookupProperty(parent, propertyName) {
              var result = parent[propertyName];

              if (result == null) {
                return result;
              }

              if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return result;
              }

              if (
                _internalProtoAccess.resultIsAllowed(
                  result,
                  container.protoAccessControl,
                  propertyName
                )
              ) {
                return result;
              }

              return undefined;
            },
            lookup: function lookup(depths, name) {
              var len = depths.length;

              for (var i = 0; i < len; i++) {
                var result =
                  depths[i] && container.lookupProperty(depths[i], name);

                if (result != null) {
                  return depths[i][name];
                }
              }
            },
            lambda: function lambda(current, context) {
              return typeof current === "function"
                ? current.call(context)
                : current;
            },
            escapeExpression: Utils.escapeExpression,
            invokePartial: invokePartialWrapper,
            fn: function fn(i) {
              var ret = templateSpec[i];
              ret.decorator = templateSpec[i + "_d"];
              return ret;
            },
            programs: [],
            program: function program(
              i,
              data,
              declaredBlockParams,
              blockParams,
              depths
            ) {
              var programWrapper = this.programs[i],
                fn = this.fn(i);

              if (data || depths || blockParams || declaredBlockParams) {
                programWrapper = wrapProgram(
                  this,
                  i,
                  fn,
                  data,
                  declaredBlockParams,
                  blockParams,
                  depths
                );
              } else if (!programWrapper) {
                programWrapper = this.programs[i] = wrapProgram(this, i, fn);
              }

              return programWrapper;
            },
            data: function data(value, depth) {
              while (value && depth--) {
                value = value._parent;
              }

              return value;
            },
            mergeIfNeeded: function mergeIfNeeded(param, common) {
              var obj = param || common;

              if (param && common && param !== common) {
                obj = Utils.extend({}, common, param);
              }

              return obj;
            },
            // An empty object to use as replacement for null-contexts
            nullContext: Object.seal({}),
            noop: env.VM.noop,
            compilerInfo: templateSpec.compiler,
          };

          function ret(context) {
            var options =
              arguments.length <= 1 || arguments[1] === undefined
                ? {}
                : arguments[1];
            var data = options.data;

            ret._setup(options);

            if (!options.partial && templateSpec.useData) {
              data = initData(context, data);
            }

            var depths = undefined,
              blockParams = templateSpec.useBlockParams ? [] : undefined;

            if (templateSpec.useDepths) {
              if (options.depths) {
                depths =
                  context != options.depths[0]
                    ? [context].concat(options.depths)
                    : options.depths;
              } else {
                depths = [context];
              }
            }

            function main(
              context
              /*, options*/
            ) {
              return (
                "" +
                templateSpec.main(
                  container,
                  context,
                  container.helpers,
                  container.partials,
                  data,
                  blockParams,
                  depths
                )
              );
            }

            main = executeDecorators(
              templateSpec.main,
              main,
              container,
              options.depths || [],
              data,
              blockParams
            );
            return main(context, options);
          }

          ret.isTop = true;

          ret._setup = function (options) {
            if (!options.partial) {
              var mergedHelpers = Utils.extend(
                {},
                env.helpers,
                options.helpers
              );
              wrapHelpersToPassLookupProperty(mergedHelpers, container);
              container.helpers = mergedHelpers;

              if (templateSpec.usePartial) {
                // Use mergeIfNeeded here to prevent compiling global partials multiple times
                container.partials = container.mergeIfNeeded(
                  options.partials,
                  env.partials
                );
              }

              if (templateSpec.usePartial || templateSpec.useDecorators) {
                container.decorators = Utils.extend(
                  {},
                  env.decorators,
                  options.decorators
                );
              }

              container.hooks = {};
              container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(
                options
              );
              var keepHelperInHelpers =
                options.allowCallsToHelperMissing ||
                templateWasPrecompiledWithCompilerV7;

              _helpers.moveHelperToHooks(
                container,
                "helperMissing",
                keepHelperInHelpers
              );

              _helpers.moveHelperToHooks(
                container,
                "blockHelperMissing",
                keepHelperInHelpers
              );
            } else {
              container.protoAccessControl = options.protoAccessControl; // internal option

              container.helpers = options.helpers;
              container.partials = options.partials;
              container.decorators = options.decorators;
              container.hooks = options.hooks;
            }
          };

          ret._child = function (i, data, blockParams, depths) {
            if (templateSpec.useBlockParams && !blockParams) {
              throw new _exception2["default"]("must pass block params");
            }

            if (templateSpec.useDepths && !depths) {
              throw new _exception2["default"]("must pass parent depths");
            }

            return wrapProgram(
              container,
              i,
              templateSpec[i],
              data,
              0,
              blockParams,
              depths
            );
          };

          return ret;
        }

        function wrapProgram(
          container,
          i,
          fn,
          data,
          declaredBlockParams,
          blockParams,
          depths
        ) {
          function prog(context) {
            var options =
              arguments.length <= 1 || arguments[1] === undefined
                ? {}
                : arguments[1];
            var currentDepths = depths;

            if (
              depths &&
              context != depths[0] &&
              !(context === container.nullContext && depths[0] === null)
            ) {
              currentDepths = [context].concat(depths);
            }

            return fn(
              container,
              context,
              container.helpers,
              container.partials,
              options.data || data,
              blockParams && [options.blockParams].concat(blockParams),
              currentDepths
            );
          }

          prog = executeDecorators(
            fn,
            prog,
            container,
            depths,
            data,
            blockParams
          );
          prog.program = i;
          prog.depth = depths ? depths.length : 0;
          prog.blockParams = declaredBlockParams || 0;
          return prog;
        }
        /**
         * This is currently part of the official API, therefore implementation details should not be changed.
         */

        function resolvePartial(partial, context, options) {
          if (!partial) {
            if (options.name === "@partial-block") {
              partial = options.data["partial-block"];
            } else {
              partial = options.partials[options.name];
            }
          } else if (!partial.call && !options.name) {
            // This is a dynamic partial that returned a string
            options.name = partial;
            partial = options.partials[partial];
          }

          return partial;
        }

        function invokePartial(partial, context, options) {
          // Use the current closure context to save the partial-block if this partial
          var currentPartialBlock =
            options.data && options.data["partial-block"];
          options.partial = true;

          if (options.ids) {
            options.data.contextPath =
              options.ids[0] || options.data.contextPath;
          }

          var partialBlock = undefined;

          if (options.fn && options.fn !== noop) {
            (function () {
              options.data = _base.createFrame(options.data); // Wrapper function to get access to currentPartialBlock from the closure

              var fn = options.fn;

              partialBlock = options.data[
                "partial-block"
              ] = function partialBlockWrapper(context) {
                var options =
                  arguments.length <= 1 || arguments[1] === undefined
                    ? {}
                    : arguments[1]; // Restore the partial-block from the closure for the execution of the block
                // i.e. the part inside the block of the partial call.

                options.data = _base.createFrame(options.data);
                options.data["partial-block"] = currentPartialBlock;
                return fn(context, options);
              };

              if (fn.partials) {
                options.partials = Utils.extend(
                  {},
                  options.partials,
                  fn.partials
                );
              }
            })();
          }

          if (partial === undefined && partialBlock) {
            partial = partialBlock;
          }

          if (partial === undefined) {
            throw new _exception2["default"](
              "The partial " + options.name + " could not be found"
            );
          } else if (partial instanceof Function) {
            return partial(context, options);
          }
        }

        function noop() {
          return "";
        }

        function initData(context, data) {
          if (!data || !("root" in data)) {
            data = data ? _base.createFrame(data) : {};
            data.root = context;
          }

          return data;
        }

        function executeDecorators(
          fn,
          prog,
          container,
          depths,
          data,
          blockParams
        ) {
          if (fn.decorator) {
            var props = {};
            prog = fn.decorator(
              prog,
              props,
              container,
              depths && depths[0],
              data,
              blockParams,
              depths
            );
            Utils.extend(prog, props);
          }

          return prog;
        }

        function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
          Object.keys(mergedHelpers).forEach(function (helperName) {
            var helper = mergedHelpers[helperName];
            mergedHelpers[helperName] = passLookupPropertyOption(
              helper,
              container
            );
          });
        }

        function passLookupPropertyOption(helper, container) {
          var lookupProperty = container.lookupProperty;
          return _internalWrapHelper.wrapHelper(helper, function (options) {
            return Utils.extend(
              {
                lookupProperty: lookupProperty,
              },
              options
            );
          });
        }
      },
      {
        "./utils": "node_modules/handlebars/dist/cjs/handlebars/utils.js",
        "./exception":
          "node_modules/handlebars/dist/cjs/handlebars/exception.js",
        "./base": "node_modules/handlebars/dist/cjs/handlebars/base.js",
        "./helpers": "node_modules/handlebars/dist/cjs/handlebars/helpers.js",
        "./internal/wrapHelper":
          "node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js",
        "./internal/proto-access":
          "node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js",
      },
    ],
    "node_modules/handlebars/dist/cjs/handlebars/no-conflict.js": [
      function (require, module, exports) {
        var global = arguments[3];
        ("use strict");

        exports.__esModule = true;

        exports["default"] = function (Handlebars) {
          /* istanbul ignore next */
          var root = typeof global !== "undefined" ? global : window,
            $Handlebars = root.Handlebars;
          /* istanbul ignore next */

          Handlebars.noConflict = function () {
            if (root.Handlebars === Handlebars) {
              root.Handlebars = $Handlebars;
            }

            return Handlebars;
          };
        };

        module.exports = exports["default"];
      },
      {},
    ],
    "node_modules/handlebars/dist/cjs/handlebars.runtime.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true; // istanbul ignore next

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        } // istanbul ignore next

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          } else {
            var newObj = {};

            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key))
                  newObj[key] = obj[key];
              }
            }

            newObj["default"] = obj;
            return newObj;
          }
        }

        var _handlebarsBase = require("./handlebars/base");

        var base = _interopRequireWildcard(_handlebarsBase); // Each of these augment the Handlebars object. No need to setup here.
        // (This is done to easily share code between commonjs and browse envs)

        var _handlebarsSafeString = require("./handlebars/safe-string");

        var _handlebarsSafeString2 = _interopRequireDefault(
          _handlebarsSafeString
        );

        var _handlebarsException = require("./handlebars/exception");

        var _handlebarsException2 = _interopRequireDefault(
          _handlebarsException
        );

        var _handlebarsUtils = require("./handlebars/utils");

        var Utils = _interopRequireWildcard(_handlebarsUtils);

        var _handlebarsRuntime = require("./handlebars/runtime");

        var runtime = _interopRequireWildcard(_handlebarsRuntime);

        var _handlebarsNoConflict = require("./handlebars/no-conflict");

        var _handlebarsNoConflict2 = _interopRequireDefault(
          _handlebarsNoConflict
        ); // For compatibility and usage outside of module systems, make the Handlebars object a namespace

        function create() {
          var hb = new base.HandlebarsEnvironment();
          Utils.extend(hb, base);
          hb.SafeString = _handlebarsSafeString2["default"];
          hb.Exception = _handlebarsException2["default"];
          hb.Utils = Utils;
          hb.escapeExpression = Utils.escapeExpression;
          hb.VM = runtime;

          hb.template = function (spec) {
            return runtime.template(spec, hb);
          };

          return hb;
        }

        var inst = create();
        inst.create = create;

        _handlebarsNoConflict2["default"](inst);

        inst["default"] = inst;
        exports["default"] = inst;
        module.exports = exports["default"];
      },
      {
        "./handlebars/base":
          "node_modules/handlebars/dist/cjs/handlebars/base.js",
        "./handlebars/safe-string":
          "node_modules/handlebars/dist/cjs/handlebars/safe-string.js",
        "./handlebars/exception":
          "node_modules/handlebars/dist/cjs/handlebars/exception.js",
        "./handlebars/utils":
          "node_modules/handlebars/dist/cjs/handlebars/utils.js",
        "./handlebars/runtime":
          "node_modules/handlebars/dist/cjs/handlebars/runtime.js",
        "./handlebars/no-conflict":
          "node_modules/handlebars/dist/cjs/handlebars/no-conflict.js",
      },
    ],
    "node_modules/handlebars/dist/cjs/handlebars/compiler/ast.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true;
        var AST = {
          // Public API used to evaluate derived attributes regarding AST nodes
          helpers: {
            // a mustache is definitely a helper if:
            // * it is an eligible helper, and
            // * it has at least one parameter or hash segment
            helperExpression: function helperExpression(node) {
              return (
                node.type === "SubExpression" ||
                ((node.type === "MustacheStatement" ||
                  node.type === "BlockStatement") &&
                  !!((node.params && node.params.length) || node.hash))
              );
            },
            scopedId: function scopedId(path) {
              return /^\.|this\b/.test(path.original);
            },
            // an ID is simple if it only has one part, and that part is not
            // `..` or `this`.
            simpleId: function simpleId(path) {
              return (
                path.parts.length === 1 &&
                !AST.helpers.scopedId(path) &&
                !path.depth
              );
            },
          },
        }; // Must be exported as an object rather than the root of the module as the jison lexer
        // must modify the object to operate properly.

        exports["default"] = AST;
        module.exports = exports["default"];
      },
      {},
    ],
    "node_modules/handlebars/dist/cjs/handlebars/compiler/parser.js": [
      function (require, module, exports) {
        // File ignored in coverage tests via setting in .istanbul.yml

        /* Jison generated parser */
        "use strict";

        exports.__esModule = true;

        var handlebars = (function () {
          var parser = {
            trace: function trace() {},
            yy: {},
            symbols_: {
              error: 2,
              root: 3,
              program: 4,
              EOF: 5,
              program_repetition0: 6,
              statement: 7,
              mustache: 8,
              block: 9,
              rawBlock: 10,
              partial: 11,
              partialBlock: 12,
              content: 13,
              COMMENT: 14,
              CONTENT: 15,
              openRawBlock: 16,
              rawBlock_repetition0: 17,
              END_RAW_BLOCK: 18,
              OPEN_RAW_BLOCK: 19,
              helperName: 20,
              openRawBlock_repetition0: 21,
              openRawBlock_option0: 22,
              CLOSE_RAW_BLOCK: 23,
              openBlock: 24,
              block_option0: 25,
              closeBlock: 26,
              openInverse: 27,
              block_option1: 28,
              OPEN_BLOCK: 29,
              openBlock_repetition0: 30,
              openBlock_option0: 31,
              openBlock_option1: 32,
              CLOSE: 33,
              OPEN_INVERSE: 34,
              openInverse_repetition0: 35,
              openInverse_option0: 36,
              openInverse_option1: 37,
              openInverseChain: 38,
              OPEN_INVERSE_CHAIN: 39,
              openInverseChain_repetition0: 40,
              openInverseChain_option0: 41,
              openInverseChain_option1: 42,
              inverseAndProgram: 43,
              INVERSE: 44,
              inverseChain: 45,
              inverseChain_option0: 46,
              OPEN_ENDBLOCK: 47,
              OPEN: 48,
              mustache_repetition0: 49,
              mustache_option0: 50,
              OPEN_UNESCAPED: 51,
              mustache_repetition1: 52,
              mustache_option1: 53,
              CLOSE_UNESCAPED: 54,
              OPEN_PARTIAL: 55,
              partialName: 56,
              partial_repetition0: 57,
              partial_option0: 58,
              openPartialBlock: 59,
              OPEN_PARTIAL_BLOCK: 60,
              openPartialBlock_repetition0: 61,
              openPartialBlock_option0: 62,
              param: 63,
              sexpr: 64,
              OPEN_SEXPR: 65,
              sexpr_repetition0: 66,
              sexpr_option0: 67,
              CLOSE_SEXPR: 68,
              hash: 69,
              hash_repetition_plus0: 70,
              hashSegment: 71,
              ID: 72,
              EQUALS: 73,
              blockParams: 74,
              OPEN_BLOCK_PARAMS: 75,
              blockParams_repetition_plus0: 76,
              CLOSE_BLOCK_PARAMS: 77,
              path: 78,
              dataName: 79,
              STRING: 80,
              NUMBER: 81,
              BOOLEAN: 82,
              UNDEFINED: 83,
              NULL: 84,
              DATA: 85,
              pathSegments: 86,
              SEP: 87,
              $accept: 0,
              $end: 1,
            },
            terminals_: {
              2: "error",
              5: "EOF",
              14: "COMMENT",
              15: "CONTENT",
              18: "END_RAW_BLOCK",
              19: "OPEN_RAW_BLOCK",
              23: "CLOSE_RAW_BLOCK",
              29: "OPEN_BLOCK",
              33: "CLOSE",
              34: "OPEN_INVERSE",
              39: "OPEN_INVERSE_CHAIN",
              44: "INVERSE",
              47: "OPEN_ENDBLOCK",
              48: "OPEN",
              51: "OPEN_UNESCAPED",
              54: "CLOSE_UNESCAPED",
              55: "OPEN_PARTIAL",
              60: "OPEN_PARTIAL_BLOCK",
              65: "OPEN_SEXPR",
              68: "CLOSE_SEXPR",
              72: "ID",
              73: "EQUALS",
              75: "OPEN_BLOCK_PARAMS",
              77: "CLOSE_BLOCK_PARAMS",
              80: "STRING",
              81: "NUMBER",
              82: "BOOLEAN",
              83: "UNDEFINED",
              84: "NULL",
              85: "DATA",
              87: "SEP",
            },
            productions_: [
              0,
              [3, 2],
              [4, 1],
              [7, 1],
              [7, 1],
              [7, 1],
              [7, 1],
              [7, 1],
              [7, 1],
              [7, 1],
              [13, 1],
              [10, 3],
              [16, 5],
              [9, 4],
              [9, 4],
              [24, 6],
              [27, 6],
              [38, 6],
              [43, 2],
              [45, 3],
              [45, 1],
              [26, 3],
              [8, 5],
              [8, 5],
              [11, 5],
              [12, 3],
              [59, 5],
              [63, 1],
              [63, 1],
              [64, 5],
              [69, 1],
              [71, 3],
              [74, 3],
              [20, 1],
              [20, 1],
              [20, 1],
              [20, 1],
              [20, 1],
              [20, 1],
              [20, 1],
              [56, 1],
              [56, 1],
              [79, 2],
              [78, 1],
              [86, 3],
              [86, 1],
              [6, 0],
              [6, 2],
              [17, 0],
              [17, 2],
              [21, 0],
              [21, 2],
              [22, 0],
              [22, 1],
              [25, 0],
              [25, 1],
              [28, 0],
              [28, 1],
              [30, 0],
              [30, 2],
              [31, 0],
              [31, 1],
              [32, 0],
              [32, 1],
              [35, 0],
              [35, 2],
              [36, 0],
              [36, 1],
              [37, 0],
              [37, 1],
              [40, 0],
              [40, 2],
              [41, 0],
              [41, 1],
              [42, 0],
              [42, 1],
              [46, 0],
              [46, 1],
              [49, 0],
              [49, 2],
              [50, 0],
              [50, 1],
              [52, 0],
              [52, 2],
              [53, 0],
              [53, 1],
              [57, 0],
              [57, 2],
              [58, 0],
              [58, 1],
              [61, 0],
              [61, 2],
              [62, 0],
              [62, 1],
              [66, 0],
              [66, 2],
              [67, 0],
              [67, 1],
              [70, 1],
              [70, 2],
              [76, 1],
              [76, 2],
            ],
            performAction: function anonymous(
              yytext,
              yyleng,
              yylineno,
              yy,
              yystate,
              $$,
              _$
            ) {
              var $0 = $$.length - 1;

              switch (yystate) {
                case 1:
                  return $$[$0 - 1];
                  break;

                case 2:
                  this.$ = yy.prepareProgram($$[$0]);
                  break;

                case 3:
                  this.$ = $$[$0];
                  break;

                case 4:
                  this.$ = $$[$0];
                  break;

                case 5:
                  this.$ = $$[$0];
                  break;

                case 6:
                  this.$ = $$[$0];
                  break;

                case 7:
                  this.$ = $$[$0];
                  break;

                case 8:
                  this.$ = $$[$0];
                  break;

                case 9:
                  this.$ = {
                    type: "CommentStatement",
                    value: yy.stripComment($$[$0]),
                    strip: yy.stripFlags($$[$0], $$[$0]),
                    loc: yy.locInfo(this._$),
                  };
                  break;

                case 10:
                  this.$ = {
                    type: "ContentStatement",
                    original: $$[$0],
                    value: $$[$0],
                    loc: yy.locInfo(this._$),
                  };
                  break;

                case 11:
                  this.$ = yy.prepareRawBlock(
                    $$[$0 - 2],
                    $$[$0 - 1],
                    $$[$0],
                    this._$
                  );
                  break;

                case 12:
                  this.$ = {
                    path: $$[$0 - 3],
                    params: $$[$0 - 2],
                    hash: $$[$0 - 1],
                  };
                  break;

                case 13:
                  this.$ = yy.prepareBlock(
                    $$[$0 - 3],
                    $$[$0 - 2],
                    $$[$0 - 1],
                    $$[$0],
                    false,
                    this._$
                  );
                  break;

                case 14:
                  this.$ = yy.prepareBlock(
                    $$[$0 - 3],
                    $$[$0 - 2],
                    $$[$0 - 1],
                    $$[$0],
                    true,
                    this._$
                  );
                  break;

                case 15:
                  this.$ = {
                    open: $$[$0 - 5],
                    path: $$[$0 - 4],
                    params: $$[$0 - 3],
                    hash: $$[$0 - 2],
                    blockParams: $$[$0 - 1],
                    strip: yy.stripFlags($$[$0 - 5], $$[$0]),
                  };
                  break;

                case 16:
                  this.$ = {
                    path: $$[$0 - 4],
                    params: $$[$0 - 3],
                    hash: $$[$0 - 2],
                    blockParams: $$[$0 - 1],
                    strip: yy.stripFlags($$[$0 - 5], $$[$0]),
                  };
                  break;

                case 17:
                  this.$ = {
                    path: $$[$0 - 4],
                    params: $$[$0 - 3],
                    hash: $$[$0 - 2],
                    blockParams: $$[$0 - 1],
                    strip: yy.stripFlags($$[$0 - 5], $$[$0]),
                  };
                  break;

                case 18:
                  this.$ = {
                    strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]),
                    program: $$[$0],
                  };
                  break;

                case 19:
                  var inverse = yy.prepareBlock(
                      $$[$0 - 2],
                      $$[$0 - 1],
                      $$[$0],
                      $$[$0],
                      false,
                      this._$
                    ),
                    program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
                  program.chained = true;
                  this.$ = {
                    strip: $$[$0 - 2].strip,
                    program: program,
                    chain: true,
                  };
                  break;

                case 20:
                  this.$ = $$[$0];
                  break;

                case 21:
                  this.$ = {
                    path: $$[$0 - 1],
                    strip: yy.stripFlags($$[$0 - 2], $$[$0]),
                  };
                  break;

                case 22:
                  this.$ = yy.prepareMustache(
                    $$[$0 - 3],
                    $$[$0 - 2],
                    $$[$0 - 1],
                    $$[$0 - 4],
                    yy.stripFlags($$[$0 - 4], $$[$0]),
                    this._$
                  );
                  break;

                case 23:
                  this.$ = yy.prepareMustache(
                    $$[$0 - 3],
                    $$[$0 - 2],
                    $$[$0 - 1],
                    $$[$0 - 4],
                    yy.stripFlags($$[$0 - 4], $$[$0]),
                    this._$
                  );
                  break;

                case 24:
                  this.$ = {
                    type: "PartialStatement",
                    name: $$[$0 - 3],
                    params: $$[$0 - 2],
                    hash: $$[$0 - 1],
                    indent: "",
                    strip: yy.stripFlags($$[$0 - 4], $$[$0]),
                    loc: yy.locInfo(this._$),
                  };
                  break;

                case 25:
                  this.$ = yy.preparePartialBlock(
                    $$[$0 - 2],
                    $$[$0 - 1],
                    $$[$0],
                    this._$
                  );
                  break;

                case 26:
                  this.$ = {
                    path: $$[$0 - 3],
                    params: $$[$0 - 2],
                    hash: $$[$0 - 1],
                    strip: yy.stripFlags($$[$0 - 4], $$[$0]),
                  };
                  break;

                case 27:
                  this.$ = $$[$0];
                  break;

                case 28:
                  this.$ = $$[$0];
                  break;

                case 29:
                  this.$ = {
                    type: "SubExpression",
                    path: $$[$0 - 3],
                    params: $$[$0 - 2],
                    hash: $$[$0 - 1],
                    loc: yy.locInfo(this._$),
                  };
                  break;

                case 30:
                  this.$ = {
                    type: "Hash",
                    pairs: $$[$0],
                    loc: yy.locInfo(this._$),
                  };
                  break;

                case 31:
                  this.$ = {
                    type: "HashPair",
                    key: yy.id($$[$0 - 2]),
                    value: $$[$0],
                    loc: yy.locInfo(this._$),
                  };
                  break;

                case 32:
                  this.$ = yy.id($$[$0 - 1]);
                  break;

                case 33:
                  this.$ = $$[$0];
                  break;

                case 34:
                  this.$ = $$[$0];
                  break;

                case 35:
                  this.$ = {
                    type: "StringLiteral",
                    value: $$[$0],
                    original: $$[$0],
                    loc: yy.locInfo(this._$),
                  };
                  break;

                case 36:
                  this.$ = {
                    type: "NumberLiteral",
                    value: Number($$[$0]),
                    original: Number($$[$0]),
                    loc: yy.locInfo(this._$),
                  };
                  break;

                case 37:
                  this.$ = {
                    type: "BooleanLiteral",
                    value: $$[$0] === "true",
                    original: $$[$0] === "true",
                    loc: yy.locInfo(this._$),
                  };
                  break;

                case 38:
                  this.$ = {
                    type: "UndefinedLiteral",
                    original: undefined,
                    value: undefined,
                    loc: yy.locInfo(this._$),
                  };
                  break;

                case 39:
                  this.$ = {
                    type: "NullLiteral",
                    original: null,
                    value: null,
                    loc: yy.locInfo(this._$),
                  };
                  break;

                case 40:
                  this.$ = $$[$0];
                  break;

                case 41:
                  this.$ = $$[$0];
                  break;

                case 42:
                  this.$ = yy.preparePath(true, $$[$0], this._$);
                  break;

                case 43:
                  this.$ = yy.preparePath(false, $$[$0], this._$);
                  break;

                case 44:
                  $$[$0 - 2].push({
                    part: yy.id($$[$0]),
                    original: $$[$0],
                    separator: $$[$0 - 1],
                  });
                  this.$ = $$[$0 - 2];
                  break;

                case 45:
                  this.$ = [
                    {
                      part: yy.id($$[$0]),
                      original: $$[$0],
                    },
                  ];
                  break;

                case 46:
                  this.$ = [];
                  break;

                case 47:
                  $$[$0 - 1].push($$[$0]);
                  break;

                case 48:
                  this.$ = [];
                  break;

                case 49:
                  $$[$0 - 1].push($$[$0]);
                  break;

                case 50:
                  this.$ = [];
                  break;

                case 51:
                  $$[$0 - 1].push($$[$0]);
                  break;

                case 58:
                  this.$ = [];
                  break;

                case 59:
                  $$[$0 - 1].push($$[$0]);
                  break;

                case 64:
                  this.$ = [];
                  break;

                case 65:
                  $$[$0 - 1].push($$[$0]);
                  break;

                case 70:
                  this.$ = [];
                  break;

                case 71:
                  $$[$0 - 1].push($$[$0]);
                  break;

                case 78:
                  this.$ = [];
                  break;

                case 79:
                  $$[$0 - 1].push($$[$0]);
                  break;

                case 82:
                  this.$ = [];
                  break;

                case 83:
                  $$[$0 - 1].push($$[$0]);
                  break;

                case 86:
                  this.$ = [];
                  break;

                case 87:
                  $$[$0 - 1].push($$[$0]);
                  break;

                case 90:
                  this.$ = [];
                  break;

                case 91:
                  $$[$0 - 1].push($$[$0]);
                  break;

                case 94:
                  this.$ = [];
                  break;

                case 95:
                  $$[$0 - 1].push($$[$0]);
                  break;

                case 98:
                  this.$ = [$$[$0]];
                  break;

                case 99:
                  $$[$0 - 1].push($$[$0]);
                  break;

                case 100:
                  this.$ = [$$[$0]];
                  break;

                case 101:
                  $$[$0 - 1].push($$[$0]);
                  break;
              }
            },
            table: [
              {
                3: 1,
                4: 2,
                5: [2, 46],
                6: 3,
                14: [2, 46],
                15: [2, 46],
                19: [2, 46],
                29: [2, 46],
                34: [2, 46],
                48: [2, 46],
                51: [2, 46],
                55: [2, 46],
                60: [2, 46],
              },
              {
                1: [3],
              },
              {
                5: [1, 4],
              },
              {
                5: [2, 2],
                7: 5,
                8: 6,
                9: 7,
                10: 8,
                11: 9,
                12: 10,
                13: 11,
                14: [1, 12],
                15: [1, 20],
                16: 17,
                19: [1, 23],
                24: 15,
                27: 16,
                29: [1, 21],
                34: [1, 22],
                39: [2, 2],
                44: [2, 2],
                47: [2, 2],
                48: [1, 13],
                51: [1, 14],
                55: [1, 18],
                59: 19,
                60: [1, 24],
              },
              {
                1: [2, 1],
              },
              {
                5: [2, 47],
                14: [2, 47],
                15: [2, 47],
                19: [2, 47],
                29: [2, 47],
                34: [2, 47],
                39: [2, 47],
                44: [2, 47],
                47: [2, 47],
                48: [2, 47],
                51: [2, 47],
                55: [2, 47],
                60: [2, 47],
              },
              {
                5: [2, 3],
                14: [2, 3],
                15: [2, 3],
                19: [2, 3],
                29: [2, 3],
                34: [2, 3],
                39: [2, 3],
                44: [2, 3],
                47: [2, 3],
                48: [2, 3],
                51: [2, 3],
                55: [2, 3],
                60: [2, 3],
              },
              {
                5: [2, 4],
                14: [2, 4],
                15: [2, 4],
                19: [2, 4],
                29: [2, 4],
                34: [2, 4],
                39: [2, 4],
                44: [2, 4],
                47: [2, 4],
                48: [2, 4],
                51: [2, 4],
                55: [2, 4],
                60: [2, 4],
              },
              {
                5: [2, 5],
                14: [2, 5],
                15: [2, 5],
                19: [2, 5],
                29: [2, 5],
                34: [2, 5],
                39: [2, 5],
                44: [2, 5],
                47: [2, 5],
                48: [2, 5],
                51: [2, 5],
                55: [2, 5],
                60: [2, 5],
              },
              {
                5: [2, 6],
                14: [2, 6],
                15: [2, 6],
                19: [2, 6],
                29: [2, 6],
                34: [2, 6],
                39: [2, 6],
                44: [2, 6],
                47: [2, 6],
                48: [2, 6],
                51: [2, 6],
                55: [2, 6],
                60: [2, 6],
              },
              {
                5: [2, 7],
                14: [2, 7],
                15: [2, 7],
                19: [2, 7],
                29: [2, 7],
                34: [2, 7],
                39: [2, 7],
                44: [2, 7],
                47: [2, 7],
                48: [2, 7],
                51: [2, 7],
                55: [2, 7],
                60: [2, 7],
              },
              {
                5: [2, 8],
                14: [2, 8],
                15: [2, 8],
                19: [2, 8],
                29: [2, 8],
                34: [2, 8],
                39: [2, 8],
                44: [2, 8],
                47: [2, 8],
                48: [2, 8],
                51: [2, 8],
                55: [2, 8],
                60: [2, 8],
              },
              {
                5: [2, 9],
                14: [2, 9],
                15: [2, 9],
                19: [2, 9],
                29: [2, 9],
                34: [2, 9],
                39: [2, 9],
                44: [2, 9],
                47: [2, 9],
                48: [2, 9],
                51: [2, 9],
                55: [2, 9],
                60: [2, 9],
              },
              {
                20: 25,
                72: [1, 35],
                78: 26,
                79: 27,
                80: [1, 28],
                81: [1, 29],
                82: [1, 30],
                83: [1, 31],
                84: [1, 32],
                85: [1, 34],
                86: 33,
              },
              {
                20: 36,
                72: [1, 35],
                78: 26,
                79: 27,
                80: [1, 28],
                81: [1, 29],
                82: [1, 30],
                83: [1, 31],
                84: [1, 32],
                85: [1, 34],
                86: 33,
              },
              {
                4: 37,
                6: 3,
                14: [2, 46],
                15: [2, 46],
                19: [2, 46],
                29: [2, 46],
                34: [2, 46],
                39: [2, 46],
                44: [2, 46],
                47: [2, 46],
                48: [2, 46],
                51: [2, 46],
                55: [2, 46],
                60: [2, 46],
              },
              {
                4: 38,
                6: 3,
                14: [2, 46],
                15: [2, 46],
                19: [2, 46],
                29: [2, 46],
                34: [2, 46],
                44: [2, 46],
                47: [2, 46],
                48: [2, 46],
                51: [2, 46],
                55: [2, 46],
                60: [2, 46],
              },
              {
                15: [2, 48],
                17: 39,
                18: [2, 48],
              },
              {
                20: 41,
                56: 40,
                64: 42,
                65: [1, 43],
                72: [1, 35],
                78: 26,
                79: 27,
                80: [1, 28],
                81: [1, 29],
                82: [1, 30],
                83: [1, 31],
                84: [1, 32],
                85: [1, 34],
                86: 33,
              },
              {
                4: 44,
                6: 3,
                14: [2, 46],
                15: [2, 46],
                19: [2, 46],
                29: [2, 46],
                34: [2, 46],
                47: [2, 46],
                48: [2, 46],
                51: [2, 46],
                55: [2, 46],
                60: [2, 46],
              },
              {
                5: [2, 10],
                14: [2, 10],
                15: [2, 10],
                18: [2, 10],
                19: [2, 10],
                29: [2, 10],
                34: [2, 10],
                39: [2, 10],
                44: [2, 10],
                47: [2, 10],
                48: [2, 10],
                51: [2, 10],
                55: [2, 10],
                60: [2, 10],
              },
              {
                20: 45,
                72: [1, 35],
                78: 26,
                79: 27,
                80: [1, 28],
                81: [1, 29],
                82: [1, 30],
                83: [1, 31],
                84: [1, 32],
                85: [1, 34],
                86: 33,
              },
              {
                20: 46,
                72: [1, 35],
                78: 26,
                79: 27,
                80: [1, 28],
                81: [1, 29],
                82: [1, 30],
                83: [1, 31],
                84: [1, 32],
                85: [1, 34],
                86: 33,
              },
              {
                20: 47,
                72: [1, 35],
                78: 26,
                79: 27,
                80: [1, 28],
                81: [1, 29],
                82: [1, 30],
                83: [1, 31],
                84: [1, 32],
                85: [1, 34],
                86: 33,
              },
              {
                20: 41,
                56: 48,
                64: 42,
                65: [1, 43],
                72: [1, 35],
                78: 26,
                79: 27,
                80: [1, 28],
                81: [1, 29],
                82: [1, 30],
                83: [1, 31],
                84: [1, 32],
                85: [1, 34],
                86: 33,
              },
              {
                33: [2, 78],
                49: 49,
                65: [2, 78],
                72: [2, 78],
                80: [2, 78],
                81: [2, 78],
                82: [2, 78],
                83: [2, 78],
                84: [2, 78],
                85: [2, 78],
              },
              {
                23: [2, 33],
                33: [2, 33],
                54: [2, 33],
                65: [2, 33],
                68: [2, 33],
                72: [2, 33],
                75: [2, 33],
                80: [2, 33],
                81: [2, 33],
                82: [2, 33],
                83: [2, 33],
                84: [2, 33],
                85: [2, 33],
              },
              {
                23: [2, 34],
                33: [2, 34],
                54: [2, 34],
                65: [2, 34],
                68: [2, 34],
                72: [2, 34],
                75: [2, 34],
                80: [2, 34],
                81: [2, 34],
                82: [2, 34],
                83: [2, 34],
                84: [2, 34],
                85: [2, 34],
              },
              {
                23: [2, 35],
                33: [2, 35],
                54: [2, 35],
                65: [2, 35],
                68: [2, 35],
                72: [2, 35],
                75: [2, 35],
                80: [2, 35],
                81: [2, 35],
                82: [2, 35],
                83: [2, 35],
                84: [2, 35],
                85: [2, 35],
              },
              {
                23: [2, 36],
                33: [2, 36],
                54: [2, 36],
                65: [2, 36],
                68: [2, 36],
                72: [2, 36],
                75: [2, 36],
                80: [2, 36],
                81: [2, 36],
                82: [2, 36],
                83: [2, 36],
                84: [2, 36],
                85: [2, 36],
              },
              {
                23: [2, 37],
                33: [2, 37],
                54: [2, 37],
                65: [2, 37],
                68: [2, 37],
                72: [2, 37],
                75: [2, 37],
                80: [2, 37],
                81: [2, 37],
                82: [2, 37],
                83: [2, 37],
                84: [2, 37],
                85: [2, 37],
              },
              {
                23: [2, 38],
                33: [2, 38],
                54: [2, 38],
                65: [2, 38],
                68: [2, 38],
                72: [2, 38],
                75: [2, 38],
                80: [2, 38],
                81: [2, 38],
                82: [2, 38],
                83: [2, 38],
                84: [2, 38],
                85: [2, 38],
              },
              {
                23: [2, 39],
                33: [2, 39],
                54: [2, 39],
                65: [2, 39],
                68: [2, 39],
                72: [2, 39],
                75: [2, 39],
                80: [2, 39],
                81: [2, 39],
                82: [2, 39],
                83: [2, 39],
                84: [2, 39],
                85: [2, 39],
              },
              {
                23: [2, 43],
                33: [2, 43],
                54: [2, 43],
                65: [2, 43],
                68: [2, 43],
                72: [2, 43],
                75: [2, 43],
                80: [2, 43],
                81: [2, 43],
                82: [2, 43],
                83: [2, 43],
                84: [2, 43],
                85: [2, 43],
                87: [1, 50],
              },
              {
                72: [1, 35],
                86: 51,
              },
              {
                23: [2, 45],
                33: [2, 45],
                54: [2, 45],
                65: [2, 45],
                68: [2, 45],
                72: [2, 45],
                75: [2, 45],
                80: [2, 45],
                81: [2, 45],
                82: [2, 45],
                83: [2, 45],
                84: [2, 45],
                85: [2, 45],
                87: [2, 45],
              },
              {
                52: 52,
                54: [2, 82],
                65: [2, 82],
                72: [2, 82],
                80: [2, 82],
                81: [2, 82],
                82: [2, 82],
                83: [2, 82],
                84: [2, 82],
                85: [2, 82],
              },
              {
                25: 53,
                38: 55,
                39: [1, 57],
                43: 56,
                44: [1, 58],
                45: 54,
                47: [2, 54],
              },
              {
                28: 59,
                43: 60,
                44: [1, 58],
                47: [2, 56],
              },
              {
                13: 62,
                15: [1, 20],
                18: [1, 61],
              },
              {
                33: [2, 86],
                57: 63,
                65: [2, 86],
                72: [2, 86],
                80: [2, 86],
                81: [2, 86],
                82: [2, 86],
                83: [2, 86],
                84: [2, 86],
                85: [2, 86],
              },
              {
                33: [2, 40],
                65: [2, 40],
                72: [2, 40],
                80: [2, 40],
                81: [2, 40],
                82: [2, 40],
                83: [2, 40],
                84: [2, 40],
                85: [2, 40],
              },
              {
                33: [2, 41],
                65: [2, 41],
                72: [2, 41],
                80: [2, 41],
                81: [2, 41],
                82: [2, 41],
                83: [2, 41],
                84: [2, 41],
                85: [2, 41],
              },
              {
                20: 64,
                72: [1, 35],
                78: 26,
                79: 27,
                80: [1, 28],
                81: [1, 29],
                82: [1, 30],
                83: [1, 31],
                84: [1, 32],
                85: [1, 34],
                86: 33,
              },
              {
                26: 65,
                47: [1, 66],
              },
              {
                30: 67,
                33: [2, 58],
                65: [2, 58],
                72: [2, 58],
                75: [2, 58],
                80: [2, 58],
                81: [2, 58],
                82: [2, 58],
                83: [2, 58],
                84: [2, 58],
                85: [2, 58],
              },
              {
                33: [2, 64],
                35: 68,
                65: [2, 64],
                72: [2, 64],
                75: [2, 64],
                80: [2, 64],
                81: [2, 64],
                82: [2, 64],
                83: [2, 64],
                84: [2, 64],
                85: [2, 64],
              },
              {
                21: 69,
                23: [2, 50],
                65: [2, 50],
                72: [2, 50],
                80: [2, 50],
                81: [2, 50],
                82: [2, 50],
                83: [2, 50],
                84: [2, 50],
                85: [2, 50],
              },
              {
                33: [2, 90],
                61: 70,
                65: [2, 90],
                72: [2, 90],
                80: [2, 90],
                81: [2, 90],
                82: [2, 90],
                83: [2, 90],
                84: [2, 90],
                85: [2, 90],
              },
              {
                20: 74,
                33: [2, 80],
                50: 71,
                63: 72,
                64: 75,
                65: [1, 43],
                69: 73,
                70: 76,
                71: 77,
                72: [1, 78],
                78: 26,
                79: 27,
                80: [1, 28],
                81: [1, 29],
                82: [1, 30],
                83: [1, 31],
                84: [1, 32],
                85: [1, 34],
                86: 33,
              },
              {
                72: [1, 79],
              },
              {
                23: [2, 42],
                33: [2, 42],
                54: [2, 42],
                65: [2, 42],
                68: [2, 42],
                72: [2, 42],
                75: [2, 42],
                80: [2, 42],
                81: [2, 42],
                82: [2, 42],
                83: [2, 42],
                84: [2, 42],
                85: [2, 42],
                87: [1, 50],
              },
              {
                20: 74,
                53: 80,
                54: [2, 84],
                63: 81,
                64: 75,
                65: [1, 43],
                69: 82,
                70: 76,
                71: 77,
                72: [1, 78],
                78: 26,
                79: 27,
                80: [1, 28],
                81: [1, 29],
                82: [1, 30],
                83: [1, 31],
                84: [1, 32],
                85: [1, 34],
                86: 33,
              },
              {
                26: 83,
                47: [1, 66],
              },
              {
                47: [2, 55],
              },
              {
                4: 84,
                6: 3,
                14: [2, 46],
                15: [2, 46],
                19: [2, 46],
                29: [2, 46],
                34: [2, 46],
                39: [2, 46],
                44: [2, 46],
                47: [2, 46],
                48: [2, 46],
                51: [2, 46],
                55: [2, 46],
                60: [2, 46],
              },
              {
                47: [2, 20],
              },
              {
                20: 85,
                72: [1, 35],
                78: 26,
                79: 27,
                80: [1, 28],
                81: [1, 29],
                82: [1, 30],
                83: [1, 31],
                84: [1, 32],
                85: [1, 34],
                86: 33,
              },
              {
                4: 86,
                6: 3,
                14: [2, 46],
                15: [2, 46],
                19: [2, 46],
                29: [2, 46],
                34: [2, 46],
                47: [2, 46],
                48: [2, 46],
                51: [2, 46],
                55: [2, 46],
                60: [2, 46],
              },
              {
                26: 87,
                47: [1, 66],
              },
              {
                47: [2, 57],
              },
              {
                5: [2, 11],
                14: [2, 11],
                15: [2, 11],
                19: [2, 11],
                29: [2, 11],
                34: [2, 11],
                39: [2, 11],
                44: [2, 11],
                47: [2, 11],
                48: [2, 11],
                51: [2, 11],
                55: [2, 11],
                60: [2, 11],
              },
              {
                15: [2, 49],
                18: [2, 49],
              },
              {
                20: 74,
                33: [2, 88],
                58: 88,
                63: 89,
                64: 75,
                65: [1, 43],
                69: 90,
                70: 76,
                71: 77,
                72: [1, 78],
                78: 26,
                79: 27,
                80: [1, 28],
                81: [1, 29],
                82: [1, 30],
                83: [1, 31],
                84: [1, 32],
                85: [1, 34],
                86: 33,
              },
              {
                65: [2, 94],
                66: 91,
                68: [2, 94],
                72: [2, 94],
                80: [2, 94],
                81: [2, 94],
                82: [2, 94],
                83: [2, 94],
                84: [2, 94],
                85: [2, 94],
              },
              {
                5: [2, 25],
                14: [2, 25],
                15: [2, 25],
                19: [2, 25],
                29: [2, 25],
                34: [2, 25],
                39: [2, 25],
                44: [2, 25],
                47: [2, 25],
                48: [2, 25],
                51: [2, 25],
                55: [2, 25],
                60: [2, 25],
              },
              {
                20: 92,
                72: [1, 35],
                78: 26,
                79: 27,
                80: [1, 28],
                81: [1, 29],
                82: [1, 30],
                83: [1, 31],
                84: [1, 32],
                85: [1, 34],
                86: 33,
              },
              {
                20: 74,
                31: 93,
                33: [2, 60],
                63: 94,
                64: 75,
                65: [1, 43],
                69: 95,
                70: 76,
                71: 77,
                72: [1, 78],
                75: [2, 60],
                78: 26,
                79: 27,
                80: [1, 28],
                81: [1, 29],
                82: [1, 30],
                83: [1, 31],
                84: [1, 32],
                85: [1, 34],
                86: 33,
              },
              {
                20: 74,
                33: [2, 66],
                36: 96,
                63: 97,
                64: 75,
                65: [1, 43],
                69: 98,
                70: 76,
                71: 77,
                72: [1, 78],
                75: [2, 66],
                78: 26,
                79: 27,
                80: [1, 28],
                81: [1, 29],
                82: [1, 30],
                83: [1, 31],
                84: [1, 32],
                85: [1, 34],
                86: 33,
              },
              {
                20: 74,
                22: 99,
                23: [2, 52],
                63: 100,
                64: 75,
                65: [1, 43],
                69: 101,
                70: 76,
                71: 77,
                72: [1, 78],
                78: 26,
                79: 27,
                80: [1, 28],
                81: [1, 29],
                82: [1, 30],
                83: [1, 31],
                84: [1, 32],
                85: [1, 34],
                86: 33,
              },
              {
                20: 74,
                33: [2, 92],
                62: 102,
                63: 103,
                64: 75,
                65: [1, 43],
                69: 104,
                70: 76,
                71: 77,
                72: [1, 78],
                78: 26,
                79: 27,
                80: [1, 28],
                81: [1, 29],
                82: [1, 30],
                83: [1, 31],
                84: [1, 32],
                85: [1, 34],
                86: 33,
              },
              {
                33: [1, 105],
              },
              {
                33: [2, 79],
                65: [2, 79],
                72: [2, 79],
                80: [2, 79],
                81: [2, 79],
                82: [2, 79],
                83: [2, 79],
                84: [2, 79],
                85: [2, 79],
              },
              {
                33: [2, 81],
              },
              {
                23: [2, 27],
                33: [2, 27],
                54: [2, 27],
                65: [2, 27],
                68: [2, 27],
                72: [2, 27],
                75: [2, 27],
                80: [2, 27],
                81: [2, 27],
                82: [2, 27],
                83: [2, 27],
                84: [2, 27],
                85: [2, 27],
              },
              {
                23: [2, 28],
                33: [2, 28],
                54: [2, 28],
                65: [2, 28],
                68: [2, 28],
                72: [2, 28],
                75: [2, 28],
                80: [2, 28],
                81: [2, 28],
                82: [2, 28],
                83: [2, 28],
                84: [2, 28],
                85: [2, 28],
              },
              {
                23: [2, 30],
                33: [2, 30],
                54: [2, 30],
                68: [2, 30],
                71: 106,
                72: [1, 107],
                75: [2, 30],
              },
              {
                23: [2, 98],
                33: [2, 98],
                54: [2, 98],
                68: [2, 98],
                72: [2, 98],
                75: [2, 98],
              },
              {
                23: [2, 45],
                33: [2, 45],
                54: [2, 45],
                65: [2, 45],
                68: [2, 45],
                72: [2, 45],
                73: [1, 108],
                75: [2, 45],
                80: [2, 45],
                81: [2, 45],
                82: [2, 45],
                83: [2, 45],
                84: [2, 45],
                85: [2, 45],
                87: [2, 45],
              },
              {
                23: [2, 44],
                33: [2, 44],
                54: [2, 44],
                65: [2, 44],
                68: [2, 44],
                72: [2, 44],
                75: [2, 44],
                80: [2, 44],
                81: [2, 44],
                82: [2, 44],
                83: [2, 44],
                84: [2, 44],
                85: [2, 44],
                87: [2, 44],
              },
              {
                54: [1, 109],
              },
              {
                54: [2, 83],
                65: [2, 83],
                72: [2, 83],
                80: [2, 83],
                81: [2, 83],
                82: [2, 83],
                83: [2, 83],
                84: [2, 83],
                85: [2, 83],
              },
              {
                54: [2, 85],
              },
              {
                5: [2, 13],
                14: [2, 13],
                15: [2, 13],
                19: [2, 13],
                29: [2, 13],
                34: [2, 13],
                39: [2, 13],
                44: [2, 13],
                47: [2, 13],
                48: [2, 13],
                51: [2, 13],
                55: [2, 13],
                60: [2, 13],
              },
              {
                38: 55,
                39: [1, 57],
                43: 56,
                44: [1, 58],
                45: 111,
                46: 110,
                47: [2, 76],
              },
              {
                33: [2, 70],
                40: 112,
                65: [2, 70],
                72: [2, 70],
                75: [2, 70],
                80: [2, 70],
                81: [2, 70],
                82: [2, 70],
                83: [2, 70],
                84: [2, 70],
                85: [2, 70],
              },
              {
                47: [2, 18],
              },
              {
                5: [2, 14],
                14: [2, 14],
                15: [2, 14],
                19: [2, 14],
                29: [2, 14],
                34: [2, 14],
                39: [2, 14],
                44: [2, 14],
                47: [2, 14],
                48: [2, 14],
                51: [2, 14],
                55: [2, 14],
                60: [2, 14],
              },
              {
                33: [1, 113],
              },
              {
                33: [2, 87],
                65: [2, 87],
                72: [2, 87],
                80: [2, 87],
                81: [2, 87],
                82: [2, 87],
                83: [2, 87],
                84: [2, 87],
                85: [2, 87],
              },
              {
                33: [2, 89],
              },
              {
                20: 74,
                63: 115,
                64: 75,
                65: [1, 43],
                67: 114,
                68: [2, 96],
                69: 116,
                70: 76,
                71: 77,
                72: [1, 78],
                78: 26,
                79: 27,
                80: [1, 28],
                81: [1, 29],
                82: [1, 30],
                83: [1, 31],
                84: [1, 32],
                85: [1, 34],
                86: 33,
              },
              {
                33: [1, 117],
              },
              {
                32: 118,
                33: [2, 62],
                74: 119,
                75: [1, 120],
              },
              {
                33: [2, 59],
                65: [2, 59],
                72: [2, 59],
                75: [2, 59],
                80: [2, 59],
                81: [2, 59],
                82: [2, 59],
                83: [2, 59],
                84: [2, 59],
                85: [2, 59],
              },
              {
                33: [2, 61],
                75: [2, 61],
              },
              {
                33: [2, 68],
                37: 121,
                74: 122,
                75: [1, 120],
              },
              {
                33: [2, 65],
                65: [2, 65],
                72: [2, 65],
                75: [2, 65],
                80: [2, 65],
                81: [2, 65],
                82: [2, 65],
                83: [2, 65],
                84: [2, 65],
                85: [2, 65],
              },
              {
                33: [2, 67],
                75: [2, 67],
              },
              {
                23: [1, 123],
              },
              {
                23: [2, 51],
                65: [2, 51],
                72: [2, 51],
                80: [2, 51],
                81: [2, 51],
                82: [2, 51],
                83: [2, 51],
                84: [2, 51],
                85: [2, 51],
              },
              {
                23: [2, 53],
              },
              {
                33: [1, 124],
              },
              {
                33: [2, 91],
                65: [2, 91],
                72: [2, 91],
                80: [2, 91],
                81: [2, 91],
                82: [2, 91],
                83: [2, 91],
                84: [2, 91],
                85: [2, 91],
              },
              {
                33: [2, 93],
              },
              {
                5: [2, 22],
                14: [2, 22],
                15: [2, 22],
                19: [2, 22],
                29: [2, 22],
                34: [2, 22],
                39: [2, 22],
                44: [2, 22],
                47: [2, 22],
                48: [2, 22],
                51: [2, 22],
                55: [2, 22],
                60: [2, 22],
              },
              {
                23: [2, 99],
                33: [2, 99],
                54: [2, 99],
                68: [2, 99],
                72: [2, 99],
                75: [2, 99],
              },
              {
                73: [1, 108],
              },
              {
                20: 74,
                63: 125,
                64: 75,
                65: [1, 43],
                72: [1, 35],
                78: 26,
                79: 27,
                80: [1, 28],
                81: [1, 29],
                82: [1, 30],
                83: [1, 31],
                84: [1, 32],
                85: [1, 34],
                86: 33,
              },
              {
                5: [2, 23],
                14: [2, 23],
                15: [2, 23],
                19: [2, 23],
                29: [2, 23],
                34: [2, 23],
                39: [2, 23],
                44: [2, 23],
                47: [2, 23],
                48: [2, 23],
                51: [2, 23],
                55: [2, 23],
                60: [2, 23],
              },
              {
                47: [2, 19],
              },
              {
                47: [2, 77],
              },
              {
                20: 74,
                33: [2, 72],
                41: 126,
                63: 127,
                64: 75,
                65: [1, 43],
                69: 128,
                70: 76,
                71: 77,
                72: [1, 78],
                75: [2, 72],
                78: 26,
                79: 27,
                80: [1, 28],
                81: [1, 29],
                82: [1, 30],
                83: [1, 31],
                84: [1, 32],
                85: [1, 34],
                86: 33,
              },
              {
                5: [2, 24],
                14: [2, 24],
                15: [2, 24],
                19: [2, 24],
                29: [2, 24],
                34: [2, 24],
                39: [2, 24],
                44: [2, 24],
                47: [2, 24],
                48: [2, 24],
                51: [2, 24],
                55: [2, 24],
                60: [2, 24],
              },
              {
                68: [1, 129],
              },
              {
                65: [2, 95],
                68: [2, 95],
                72: [2, 95],
                80: [2, 95],
                81: [2, 95],
                82: [2, 95],
                83: [2, 95],
                84: [2, 95],
                85: [2, 95],
              },
              {
                68: [2, 97],
              },
              {
                5: [2, 21],
                14: [2, 21],
                15: [2, 21],
                19: [2, 21],
                29: [2, 21],
                34: [2, 21],
                39: [2, 21],
                44: [2, 21],
                47: [2, 21],
                48: [2, 21],
                51: [2, 21],
                55: [2, 21],
                60: [2, 21],
              },
              {
                33: [1, 130],
              },
              {
                33: [2, 63],
              },
              {
                72: [1, 132],
                76: 131,
              },
              {
                33: [1, 133],
              },
              {
                33: [2, 69],
              },
              {
                15: [2, 12],
                18: [2, 12],
              },
              {
                14: [2, 26],
                15: [2, 26],
                19: [2, 26],
                29: [2, 26],
                34: [2, 26],
                47: [2, 26],
                48: [2, 26],
                51: [2, 26],
                55: [2, 26],
                60: [2, 26],
              },
              {
                23: [2, 31],
                33: [2, 31],
                54: [2, 31],
                68: [2, 31],
                72: [2, 31],
                75: [2, 31],
              },
              {
                33: [2, 74],
                42: 134,
                74: 135,
                75: [1, 120],
              },
              {
                33: [2, 71],
                65: [2, 71],
                72: [2, 71],
                75: [2, 71],
                80: [2, 71],
                81: [2, 71],
                82: [2, 71],
                83: [2, 71],
                84: [2, 71],
                85: [2, 71],
              },
              {
                33: [2, 73],
                75: [2, 73],
              },
              {
                23: [2, 29],
                33: [2, 29],
                54: [2, 29],
                65: [2, 29],
                68: [2, 29],
                72: [2, 29],
                75: [2, 29],
                80: [2, 29],
                81: [2, 29],
                82: [2, 29],
                83: [2, 29],
                84: [2, 29],
                85: [2, 29],
              },
              {
                14: [2, 15],
                15: [2, 15],
                19: [2, 15],
                29: [2, 15],
                34: [2, 15],
                39: [2, 15],
                44: [2, 15],
                47: [2, 15],
                48: [2, 15],
                51: [2, 15],
                55: [2, 15],
                60: [2, 15],
              },
              {
                72: [1, 137],
                77: [1, 136],
              },
              {
                72: [2, 100],
                77: [2, 100],
              },
              {
                14: [2, 16],
                15: [2, 16],
                19: [2, 16],
                29: [2, 16],
                34: [2, 16],
                44: [2, 16],
                47: [2, 16],
                48: [2, 16],
                51: [2, 16],
                55: [2, 16],
                60: [2, 16],
              },
              {
                33: [1, 138],
              },
              {
                33: [2, 75],
              },
              {
                33: [2, 32],
              },
              {
                72: [2, 101],
                77: [2, 101],
              },
              {
                14: [2, 17],
                15: [2, 17],
                19: [2, 17],
                29: [2, 17],
                34: [2, 17],
                39: [2, 17],
                44: [2, 17],
                47: [2, 17],
                48: [2, 17],
                51: [2, 17],
                55: [2, 17],
                60: [2, 17],
              },
            ],
            defaultActions: {
              4: [2, 1],
              54: [2, 55],
              56: [2, 20],
              60: [2, 57],
              73: [2, 81],
              82: [2, 85],
              86: [2, 18],
              90: [2, 89],
              101: [2, 53],
              104: [2, 93],
              110: [2, 19],
              111: [2, 77],
              116: [2, 97],
              119: [2, 63],
              122: [2, 69],
              135: [2, 75],
              136: [2, 32],
            },
            parseError: function parseError(str, hash) {
              throw new Error(str);
            },
            parse: function parse(input) {
              var self = this,
                stack = [0],
                vstack = [null],
                lstack = [],
                table = this.table,
                yytext = "",
                yylineno = 0,
                yyleng = 0,
                recovering = 0,
                TERROR = 2,
                EOF = 1;
              this.lexer.setInput(input);
              this.lexer.yy = this.yy;
              this.yy.lexer = this.lexer;
              this.yy.parser = this;
              if (typeof this.lexer.yylloc == "undefined")
                this.lexer.yylloc = {};
              var yyloc = this.lexer.yylloc;
              lstack.push(yyloc);
              var ranges = this.lexer.options && this.lexer.options.ranges;
              if (typeof this.yy.parseError === "function")
                this.parseError = this.yy.parseError;

              function popStack(n) {
                stack.length = stack.length - 2 * n;
                vstack.length = vstack.length - n;
                lstack.length = lstack.length - n;
              }

              function lex() {
                var token;
                token = self.lexer.lex() || 1;

                if (typeof token !== "number") {
                  token = self.symbols_[token] || token;
                }

                return token;
              }

              var symbol,
                preErrorSymbol,
                state,
                action,
                a,
                r,
                yyval = {},
                p,
                len,
                newState,
                expected;

              while (true) {
                state = stack[stack.length - 1];

                if (this.defaultActions[state]) {
                  action = this.defaultActions[state];
                } else {
                  if (symbol === null || typeof symbol == "undefined") {
                    symbol = lex();
                  }

                  action = table[state] && table[state][symbol];
                }

                if (
                  typeof action === "undefined" ||
                  !action.length ||
                  !action[0]
                ) {
                  var errStr = "";

                  if (!recovering) {
                    expected = [];

                    for (p in table[state])
                      if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                      }

                    if (this.lexer.showPosition) {
                      errStr =
                        "Parse error on line " +
                        (yylineno + 1) +
                        ":\n" +
                        this.lexer.showPosition() +
                        "\nExpecting " +
                        expected.join(", ") +
                        ", got '" +
                        (this.terminals_[symbol] || symbol) +
                        "'";
                    } else {
                      errStr =
                        "Parse error on line " +
                        (yylineno + 1) +
                        ": Unexpected " +
                        (symbol == 1
                          ? "end of input"
                          : "'" + (this.terminals_[symbol] || symbol) + "'");
                    }

                    this.parseError(errStr, {
                      text: this.lexer.match,
                      token: this.terminals_[symbol] || symbol,
                      line: this.lexer.yylineno,
                      loc: yyloc,
                      expected: expected,
                    });
                  }
                }

                if (action[0] instanceof Array && action.length > 1) {
                  throw new Error(
                    "Parse Error: multiple actions possible at state: " +
                      state +
                      ", token: " +
                      symbol
                  );
                }

                switch (action[0]) {
                  case 1:
                    stack.push(symbol);
                    vstack.push(this.lexer.yytext);
                    lstack.push(this.lexer.yylloc);
                    stack.push(action[1]);
                    symbol = null;

                    if (!preErrorSymbol) {
                      yyleng = this.lexer.yyleng;
                      yytext = this.lexer.yytext;
                      yylineno = this.lexer.yylineno;
                      yyloc = this.lexer.yylloc;
                      if (recovering > 0) recovering--;
                    } else {
                      symbol = preErrorSymbol;
                      preErrorSymbol = null;
                    }

                    break;

                  case 2:
                    len = this.productions_[action[1]][1];
                    yyval.$ = vstack[vstack.length - len];
                    yyval._$ = {
                      first_line: lstack[lstack.length - (len || 1)].first_line,
                      last_line: lstack[lstack.length - 1].last_line,
                      first_column:
                        lstack[lstack.length - (len || 1)].first_column,
                      last_column: lstack[lstack.length - 1].last_column,
                    };

                    if (ranges) {
                      yyval._$.range = [
                        lstack[lstack.length - (len || 1)].range[0],
                        lstack[lstack.length - 1].range[1],
                      ];
                    }

                    r = this.performAction.call(
                      yyval,
                      yytext,
                      yyleng,
                      yylineno,
                      this.yy,
                      action[1],
                      vstack,
                      lstack
                    );

                    if (typeof r !== "undefined") {
                      return r;
                    }

                    if (len) {
                      stack = stack.slice(0, -1 * len * 2);
                      vstack = vstack.slice(0, -1 * len);
                      lstack = lstack.slice(0, -1 * len);
                    }

                    stack.push(this.productions_[action[1]][0]);
                    vstack.push(yyval.$);
                    lstack.push(yyval._$);
                    newState =
                      table[stack[stack.length - 2]][stack[stack.length - 1]];
                    stack.push(newState);
                    break;

                  case 3:
                    return true;
                }
              }

              return true;
            },
          };
          /* Jison generated lexer */

          var lexer = (function () {
            var lexer = {
              EOF: 1,
              parseError: function parseError(str, hash) {
                if (this.yy.parser) {
                  this.yy.parser.parseError(str, hash);
                } else {
                  throw new Error(str);
                }
              },
              setInput: function setInput(input) {
                this._input = input;
                this._more = this._less = this.done = false;
                this.yylineno = this.yyleng = 0;
                this.yytext = this.matched = this.match = "";
                this.conditionStack = ["INITIAL"];
                this.yylloc = {
                  first_line: 1,
                  first_column: 0,
                  last_line: 1,
                  last_column: 0,
                };
                if (this.options.ranges) this.yylloc.range = [0, 0];
                this.offset = 0;
                return this;
              },
              input: function input() {
                var ch = this._input[0];
                this.yytext += ch;
                this.yyleng++;
                this.offset++;
                this.match += ch;
                this.matched += ch;
                var lines = ch.match(/(?:\r\n?|\n).*/g);

                if (lines) {
                  this.yylineno++;
                  this.yylloc.last_line++;
                } else {
                  this.yylloc.last_column++;
                }

                if (this.options.ranges) this.yylloc.range[1]++;
                this._input = this._input.slice(1);
                return ch;
              },
              unput: function unput(ch) {
                var len = ch.length;
                var lines = ch.split(/(?:\r\n?|\n)/g);
                this._input = ch + this._input;
                this.yytext = this.yytext.substr(
                  0,
                  this.yytext.length - len - 1
                ); //this.yyleng -= len;

                this.offset -= len;
                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (lines.length - 1) this.yylineno -= lines.length - 1;
                var r = this.yylloc.range;
                this.yylloc = {
                  first_line: this.yylloc.first_line,
                  last_line: this.yylineno + 1,
                  first_column: this.yylloc.first_column,
                  last_column: lines
                    ? (lines.length === oldLines.length
                        ? this.yylloc.first_column
                        : 0) +
                      oldLines[oldLines.length - lines.length].length -
                      lines[0].length
                    : this.yylloc.first_column - len,
                };

                if (this.options.ranges) {
                  this.yylloc.range = [r[0], r[0] + this.yyleng - len];
                }

                return this;
              },
              more: function more() {
                this._more = true;
                return this;
              },
              less: function less(n) {
                this.unput(this.match.slice(n));
              },
              pastInput: function pastInput() {
                var past = this.matched.substr(
                  0,
                  this.matched.length - this.match.length
                );
                return (
                  (past.length > 20 ? "..." : "") +
                  past.substr(-20).replace(/\n/g, "")
                );
              },
              upcomingInput: function upcomingInput() {
                var next = this.match;

                if (next.length < 20) {
                  next += this._input.substr(0, 20 - next.length);
                }

                return (
                  next.substr(0, 20) + (next.length > 20 ? "..." : "")
                ).replace(/\n/g, "");
              },
              showPosition: function showPosition() {
                var pre = this.pastInput();
                var c = new Array(pre.length + 1).join("-");
                return pre + this.upcomingInput() + "\n" + c + "^";
              },
              next: function next() {
                if (this.done) {
                  return this.EOF;
                }

                if (!this._input) this.done = true;
                var token, match, tempMatch, index, col, lines;

                if (!this._more) {
                  this.yytext = "";
                  this.match = "";
                }

                var rules = this._currentRules();

                for (var i = 0; i < rules.length; i++) {
                  tempMatch = this._input.match(this.rules[rules[i]]);

                  if (
                    tempMatch &&
                    (!match || tempMatch[0].length > match[0].length)
                  ) {
                    match = tempMatch;
                    index = i;
                    if (!this.options.flex) break;
                  }
                }

                if (match) {
                  lines = match[0].match(/(?:\r\n?|\n).*/g);
                  if (lines) this.yylineno += lines.length;
                  this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: lines
                      ? lines[lines.length - 1].length -
                        lines[lines.length - 1].match(/\r?\n?/)[0].length
                      : this.yylloc.last_column + match[0].length,
                  };
                  this.yytext += match[0];
                  this.match += match[0];
                  this.matches = match;
                  this.yyleng = this.yytext.length;

                  if (this.options.ranges) {
                    this.yylloc.range = [
                      this.offset,
                      (this.offset += this.yyleng),
                    ];
                  }

                  this._more = false;
                  this._input = this._input.slice(match[0].length);
                  this.matched += match[0];
                  token = this.performAction.call(
                    this,
                    this.yy,
                    this,
                    rules[index],
                    this.conditionStack[this.conditionStack.length - 1]
                  );
                  if (this.done && this._input) this.done = false;
                  if (token) return token;
                  else return;
                }

                if (this._input === "") {
                  return this.EOF;
                } else {
                  return this.parseError(
                    "Lexical error on line " +
                      (this.yylineno + 1) +
                      ". Unrecognized text.\n" +
                      this.showPosition(),
                    {
                      text: "",
                      token: null,
                      line: this.yylineno,
                    }
                  );
                }
              },
              lex: function lex() {
                var r = this.next();

                if (typeof r !== "undefined") {
                  return r;
                } else {
                  return this.lex();
                }
              },
              begin: function begin(condition) {
                this.conditionStack.push(condition);
              },
              popState: function popState() {
                return this.conditionStack.pop();
              },
              _currentRules: function _currentRules() {
                return this.conditions[
                  this.conditionStack[this.conditionStack.length - 1]
                ].rules;
              },
              topState: function topState() {
                return this.conditionStack[this.conditionStack.length - 2];
              },
              pushState: function begin(condition) {
                this.begin(condition);
              },
            };
            lexer.options = {};

            lexer.performAction = function anonymous(
              yy,
              yy_,
              $avoiding_name_collisions,
              YY_START
            ) {
              function strip(start, end) {
                return (yy_.yytext = yy_.yytext.substring(
                  start,
                  yy_.yyleng - end + start
                ));
              }

              var YYSTATE = YY_START;

              switch ($avoiding_name_collisions) {
                case 0:
                  if (yy_.yytext.slice(-2) === "\\\\") {
                    strip(0, 1);
                    this.begin("mu");
                  } else if (yy_.yytext.slice(-1) === "\\") {
                    strip(0, 1);
                    this.begin("emu");
                  } else {
                    this.begin("mu");
                  }

                  if (yy_.yytext) return 15;
                  break;

                case 1:
                  return 15;
                  break;

                case 2:
                  this.popState();
                  return 15;
                  break;

                case 3:
                  this.begin("raw");
                  return 15;
                  break;

                case 4:
                  this.popState(); // Should be using `this.topState()` below, but it currently
                  // returns the second top instead of the first top. Opened an
                  // issue about it at https://github.com/zaach/jison/issues/291

                  if (
                    this.conditionStack[this.conditionStack.length - 1] ===
                    "raw"
                  ) {
                    return 15;
                  } else {
                    strip(5, 9);
                    return "END_RAW_BLOCK";
                  }

                  break;

                case 5:
                  return 15;
                  break;

                case 6:
                  this.popState();
                  return 14;
                  break;

                case 7:
                  return 65;
                  break;

                case 8:
                  return 68;
                  break;

                case 9:
                  return 19;
                  break;

                case 10:
                  this.popState();
                  this.begin("raw");
                  return 23;
                  break;

                case 11:
                  return 55;
                  break;

                case 12:
                  return 60;
                  break;

                case 13:
                  return 29;
                  break;

                case 14:
                  return 47;
                  break;

                case 15:
                  this.popState();
                  return 44;
                  break;

                case 16:
                  this.popState();
                  return 44;
                  break;

                case 17:
                  return 34;
                  break;

                case 18:
                  return 39;
                  break;

                case 19:
                  return 51;
                  break;

                case 20:
                  return 48;
                  break;

                case 21:
                  this.unput(yy_.yytext);
                  this.popState();
                  this.begin("com");
                  break;

                case 22:
                  this.popState();
                  return 14;
                  break;

                case 23:
                  return 48;
                  break;

                case 24:
                  return 73;
                  break;

                case 25:
                  return 72;
                  break;

                case 26:
                  return 72;
                  break;

                case 27:
                  return 87;
                  break;

                case 28:
                  // ignore whitespace
                  break;

                case 29:
                  this.popState();
                  return 54;
                  break;

                case 30:
                  this.popState();
                  return 33;
                  break;

                case 31:
                  yy_.yytext = strip(1, 2).replace(/\\"/g, '"');
                  return 80;
                  break;

                case 32:
                  yy_.yytext = strip(1, 2).replace(/\\'/g, "'");
                  return 80;
                  break;

                case 33:
                  return 85;
                  break;

                case 34:
                  return 82;
                  break;

                case 35:
                  return 82;
                  break;

                case 36:
                  return 83;
                  break;

                case 37:
                  return 84;
                  break;

                case 38:
                  return 81;
                  break;

                case 39:
                  return 75;
                  break;

                case 40:
                  return 77;
                  break;

                case 41:
                  return 72;
                  break;

                case 42:
                  yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, "$1");
                  return 72;
                  break;

                case 43:
                  return "INVALID";
                  break;

                case 44:
                  return 5;
                  break;
              }
            };

            lexer.rules = [
              /^(?:[^\x00]*?(?=(\{\{)))/,
              /^(?:[^\x00]+)/,
              /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,
              /^(?:\{\{\{\{(?=[^\/]))/,
              /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,
              /^(?:[^\x00]+?(?=(\{\{\{\{)))/,
              /^(?:[\s\S]*?--(~)?\}\})/,
              /^(?:\()/,
              /^(?:\))/,
              /^(?:\{\{\{\{)/,
              /^(?:\}\}\}\})/,
              /^(?:\{\{(~)?>)/,
              /^(?:\{\{(~)?#>)/,
              /^(?:\{\{(~)?#\*?)/,
              /^(?:\{\{(~)?\/)/,
              /^(?:\{\{(~)?\^\s*(~)?\}\})/,
              /^(?:\{\{(~)?\s*else\s*(~)?\}\})/,
              /^(?:\{\{(~)?\^)/,
              /^(?:\{\{(~)?\s*else\b)/,
              /^(?:\{\{(~)?\{)/,
              /^(?:\{\{(~)?&)/,
              /^(?:\{\{(~)?!--)/,
              /^(?:\{\{(~)?![\s\S]*?\}\})/,
              /^(?:\{\{(~)?\*?)/,
              /^(?:=)/,
              /^(?:\.\.)/,
              /^(?:\.(?=([=~}\s\/.)|])))/,
              /^(?:[\/.])/,
              /^(?:\s+)/,
              /^(?:\}(~)?\}\})/,
              /^(?:(~)?\}\})/,
              /^(?:"(\\["]|[^"])*")/,
              /^(?:'(\\[']|[^'])*')/,
              /^(?:@)/,
              /^(?:true(?=([~}\s)])))/,
              /^(?:false(?=([~}\s)])))/,
              /^(?:undefined(?=([~}\s)])))/,
              /^(?:null(?=([~}\s)])))/,
              /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,
              /^(?:as\s+\|)/,
              /^(?:\|)/,
              /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,
              /^(?:\[(\\\]|[^\]])*\])/,
              /^(?:.)/,
              /^(?:$)/,
            ];
            lexer.conditions = {
              mu: {
                rules: [
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15,
                  16,
                  17,
                  18,
                  19,
                  20,
                  21,
                  22,
                  23,
                  24,
                  25,
                  26,
                  27,
                  28,
                  29,
                  30,
                  31,
                  32,
                  33,
                  34,
                  35,
                  36,
                  37,
                  38,
                  39,
                  40,
                  41,
                  42,
                  43,
                  44,
                ],
                inclusive: false,
              },
              emu: {
                rules: [2],
                inclusive: false,
              },
              com: {
                rules: [6],
                inclusive: false,
              },
              raw: {
                rules: [3, 4, 5],
                inclusive: false,
              },
              INITIAL: {
                rules: [0, 1, 44],
                inclusive: true,
              },
            };
            return lexer;
          })();

          parser.lexer = lexer;

          function Parser() {
            this.yy = {};
          }

          Parser.prototype = parser;
          parser.Parser = Parser;
          return new Parser();
        })();

        exports["default"] = handlebars;
        module.exports = exports["default"];
      },
      {},
    ],
    "node_modules/handlebars/dist/cjs/handlebars/compiler/visitor.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true; // istanbul ignore next

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        var _exception = require("../exception");

        var _exception2 = _interopRequireDefault(_exception);

        function Visitor() {
          this.parents = [];
        }

        Visitor.prototype = {
          constructor: Visitor,
          mutating: false,
          // Visits a given value. If mutating, will replace the value if necessary.
          acceptKey: function acceptKey(node, name) {
            var value = this.accept(node[name]);

            if (this.mutating) {
              // Hacky sanity check: This may have a few false positives for type for the helper
              // methods but will generally do the right thing without a lot of overhead.
              if (value && !Visitor.prototype[value.type]) {
                throw new _exception2["default"](
                  'Unexpected node type "' +
                    value.type +
                    '" found when accepting ' +
                    name +
                    " on " +
                    node.type
                );
              }

              node[name] = value;
            }
          },
          // Performs an accept operation with added sanity check to ensure
          // required keys are not removed.
          acceptRequired: function acceptRequired(node, name) {
            this.acceptKey(node, name);

            if (!node[name]) {
              throw new _exception2["default"](node.type + " requires " + name);
            }
          },
          // Traverses a given array. If mutating, empty respnses will be removed
          // for child elements.
          acceptArray: function acceptArray(array) {
            for (var i = 0, l = array.length; i < l; i++) {
              this.acceptKey(array, i);

              if (!array[i]) {
                array.splice(i, 1);
                i--;
                l--;
              }
            }
          },
          accept: function accept(object) {
            if (!object) {
              return;
            }
            /* istanbul ignore next: Sanity code */

            if (!this[object.type]) {
              throw new _exception2["default"](
                "Unknown type: " + object.type,
                object
              );
            }

            if (this.current) {
              this.parents.unshift(this.current);
            }

            this.current = object;
            var ret = this[object.type](object);
            this.current = this.parents.shift();

            if (!this.mutating || ret) {
              return ret;
            } else if (ret !== false) {
              return object;
            }
          },
          Program: function Program(program) {
            this.acceptArray(program.body);
          },
          MustacheStatement: visitSubExpression,
          Decorator: visitSubExpression,
          BlockStatement: visitBlock,
          DecoratorBlock: visitBlock,
          PartialStatement: visitPartial,
          PartialBlockStatement: function PartialBlockStatement(partial) {
            visitPartial.call(this, partial);
            this.acceptKey(partial, "program");
          },
          ContentStatement: function ContentStatement() /* content */
          {},
          CommentStatement: function CommentStatement() /* comment */
          {},
          SubExpression: visitSubExpression,
          PathExpression: function PathExpression() /* path */
          {},
          StringLiteral: function StringLiteral() /* string */
          {},
          NumberLiteral: function NumberLiteral() /* number */
          {},
          BooleanLiteral: function BooleanLiteral() /* bool */
          {},
          UndefinedLiteral: function UndefinedLiteral() /* literal */
          {},
          NullLiteral: function NullLiteral() /* literal */
          {},
          Hash: function Hash(hash) {
            this.acceptArray(hash.pairs);
          },
          HashPair: function HashPair(pair) {
            this.acceptRequired(pair, "value");
          },
        };

        function visitSubExpression(mustache) {
          this.acceptRequired(mustache, "path");
          this.acceptArray(mustache.params);
          this.acceptKey(mustache, "hash");
        }

        function visitBlock(block) {
          visitSubExpression.call(this, block);
          this.acceptKey(block, "program");
          this.acceptKey(block, "inverse");
        }

        function visitPartial(partial) {
          this.acceptRequired(partial, "name");
          this.acceptArray(partial.params);
          this.acceptKey(partial, "hash");
        }

        exports["default"] = Visitor;
        module.exports = exports["default"];
      },
      {
        "../exception":
          "node_modules/handlebars/dist/cjs/handlebars/exception.js",
      },
    ],
    "node_modules/handlebars/dist/cjs/handlebars/compiler/whitespace-control.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true; // istanbul ignore next

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        var _visitor = require("./visitor");

        var _visitor2 = _interopRequireDefault(_visitor);

        function WhitespaceControl() {
          var options =
            arguments.length <= 0 || arguments[0] === undefined
              ? {}
              : arguments[0];
          this.options = options;
        }

        WhitespaceControl.prototype = new _visitor2["default"]();

        WhitespaceControl.prototype.Program = function (program) {
          var doStandalone = !this.options.ignoreStandalone;
          var isRoot = !this.isRootSeen;
          this.isRootSeen = true;
          var body = program.body;

          for (var i = 0, l = body.length; i < l; i++) {
            var current = body[i],
              strip = this.accept(current);

            if (!strip) {
              continue;
            }

            var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
              _isNextWhitespace = isNextWhitespace(body, i, isRoot),
              openStandalone = strip.openStandalone && _isPrevWhitespace,
              closeStandalone = strip.closeStandalone && _isNextWhitespace,
              inlineStandalone =
                strip.inlineStandalone &&
                _isPrevWhitespace &&
                _isNextWhitespace;

            if (strip.close) {
              omitRight(body, i, true);
            }

            if (strip.open) {
              omitLeft(body, i, true);
            }

            if (doStandalone && inlineStandalone) {
              omitRight(body, i);

              if (omitLeft(body, i)) {
                // If we are on a standalone node, save the indent info for partials
                if (current.type === "PartialStatement") {
                  // Pull out the whitespace from the final line
                  current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
                }
              }
            }

            if (doStandalone && openStandalone) {
              omitRight((current.program || current.inverse).body); // Strip out the previous content node if it's whitespace only

              omitLeft(body, i);
            }

            if (doStandalone && closeStandalone) {
              // Always strip the next node
              omitRight(body, i);
              omitLeft((current.inverse || current.program).body);
            }
          }

          return program;
        };

        WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (
          block
        ) {
          this.accept(block.program);
          this.accept(block.inverse); // Find the inverse program that is involed with whitespace stripping.

          var program = block.program || block.inverse,
            inverse = block.program && block.inverse,
            firstInverse = inverse,
            lastInverse = inverse;

          if (inverse && inverse.chained) {
            firstInverse = inverse.body[0].program; // Walk the inverse chain to find the last inverse that is actually in the chain.

            while (lastInverse.chained) {
              lastInverse =
                lastInverse.body[lastInverse.body.length - 1].program;
            }
          }

          var strip = {
            open: block.openStrip.open,
            close: block.closeStrip.close,
            // Determine the standalone candiacy. Basically flag our content as being possibly standalone
            // so our parent can determine if we actually are standalone
            openStandalone: isNextWhitespace(program.body),
            closeStandalone: isPrevWhitespace((firstInverse || program).body),
          };

          if (block.openStrip.close) {
            omitRight(program.body, null, true);
          }

          if (inverse) {
            var inverseStrip = block.inverseStrip;

            if (inverseStrip.open) {
              omitLeft(program.body, null, true);
            }

            if (inverseStrip.close) {
              omitRight(firstInverse.body, null, true);
            }

            if (block.closeStrip.open) {
              omitLeft(lastInverse.body, null, true);
            } // Find standalone else statments

            if (
              !this.options.ignoreStandalone &&
              isPrevWhitespace(program.body) &&
              isNextWhitespace(firstInverse.body)
            ) {
              omitLeft(program.body);
              omitRight(firstInverse.body);
            }
          } else if (block.closeStrip.open) {
            omitLeft(program.body, null, true);
          }

          return strip;
        };

        WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (
          mustache
        ) {
          return mustache.strip;
        };

        WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (
          node
        ) {
          /* istanbul ignore next */
          var strip = node.strip || {};
          return {
            inlineStandalone: true,
            open: strip.open,
            close: strip.close,
          };
        };

        function isPrevWhitespace(body, i, isRoot) {
          if (i === undefined) {
            i = body.length;
          } // Nodes that end with newlines are considered whitespace (but are special
          // cased for strip operations)

          var prev = body[i - 1],
            sibling = body[i - 2];

          if (!prev) {
            return isRoot;
          }

          if (prev.type === "ContentStatement") {
            return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(
              prev.original
            );
          }
        }

        function isNextWhitespace(body, i, isRoot) {
          if (i === undefined) {
            i = -1;
          }

          var next = body[i + 1],
            sibling = body[i + 2];

          if (!next) {
            return isRoot;
          }

          if (next.type === "ContentStatement") {
            return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(
              next.original
            );
          }
        } // Marks the node to the right of the position as omitted.
        // I.e. {{foo}}' ' will mark the ' ' node as omitted.
        //
        // If i is undefined, then the first child will be marked as such.
        //
        // If mulitple is truthy then all whitespace will be stripped out until non-whitespace
        // content is met.

        function omitRight(body, i, multiple) {
          var current = body[i == null ? 0 : i + 1];

          if (
            !current ||
            current.type !== "ContentStatement" ||
            (!multiple && current.rightStripped)
          ) {
            return;
          }

          var original = current.value;
          current.value = current.value.replace(
            multiple ? /^\s+/ : /^[ \t]*\r?\n?/,
            ""
          );
          current.rightStripped = current.value !== original;
        } // Marks the node to the left of the position as omitted.
        // I.e. ' '{{foo}} will mark the ' ' node as omitted.
        //
        // If i is undefined then the last child will be marked as such.
        //
        // If mulitple is truthy then all whitespace will be stripped out until non-whitespace
        // content is met.

        function omitLeft(body, i, multiple) {
          var current = body[i == null ? body.length - 1 : i - 1];

          if (
            !current ||
            current.type !== "ContentStatement" ||
            (!multiple && current.leftStripped)
          ) {
            return;
          } // We omit the last node if it's whitespace only and not preceded by a non-content node.

          var original = current.value;
          current.value = current.value.replace(
            multiple ? /\s+$/ : /[ \t]+$/,
            ""
          );
          current.leftStripped = current.value !== original;
          return current.leftStripped;
        }

        exports["default"] = WhitespaceControl;
        module.exports = exports["default"];
      },
      {
        "./visitor":
          "node_modules/handlebars/dist/cjs/handlebars/compiler/visitor.js",
      },
    ],
    "node_modules/handlebars/dist/cjs/handlebars/compiler/helpers.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true;
        exports.SourceLocation = SourceLocation;
        exports.id = id;
        exports.stripFlags = stripFlags;
        exports.stripComment = stripComment;
        exports.preparePath = preparePath;
        exports.prepareMustache = prepareMustache;
        exports.prepareRawBlock = prepareRawBlock;
        exports.prepareBlock = prepareBlock;
        exports.prepareProgram = prepareProgram;
        exports.preparePartialBlock = preparePartialBlock; // istanbul ignore next

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        var _exception = require("../exception");

        var _exception2 = _interopRequireDefault(_exception);

        function validateClose(open, close) {
          close = close.path ? close.path.original : close;

          if (open.path.original !== close) {
            var errorNode = {
              loc: open.path.loc,
            };
            throw new _exception2["default"](
              open.path.original + " doesn't match " + close,
              errorNode
            );
          }
        }

        function SourceLocation(source, locInfo) {
          this.source = source;
          this.start = {
            line: locInfo.first_line,
            column: locInfo.first_column,
          };
          this.end = {
            line: locInfo.last_line,
            column: locInfo.last_column,
          };
        }

        function id(token) {
          if (/^\[.*\]$/.test(token)) {
            return token.substring(1, token.length - 1);
          } else {
            return token;
          }
        }

        function stripFlags(open, close) {
          return {
            open: open.charAt(2) === "~",
            close: close.charAt(close.length - 3) === "~",
          };
        }

        function stripComment(comment) {
          return comment.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
        }

        function preparePath(data, parts, loc) {
          loc = this.locInfo(loc);
          var original = data ? "@" : "",
            dig = [],
            depth = 0;

          for (var i = 0, l = parts.length; i < l; i++) {
            var part = parts[i].part,
              // If we have [] syntax then we do not treat path references as operators,
              // i.e. foo.[this] resolves to approximately context.foo['this']
              isLiteral = parts[i].original !== part;
            original += (parts[i].separator || "") + part;

            if (
              !isLiteral &&
              (part === ".." || part === "." || part === "this")
            ) {
              if (dig.length > 0) {
                throw new _exception2["default"]("Invalid path: " + original, {
                  loc: loc,
                });
              } else if (part === "..") {
                depth++;
              }
            } else {
              dig.push(part);
            }
          }

          return {
            type: "PathExpression",
            data: data,
            depth: depth,
            parts: dig,
            original: original,
            loc: loc,
          };
        }

        function prepareMustache(path, params, hash, open, strip, locInfo) {
          // Must use charAt to support IE pre-10
          var escapeFlag = open.charAt(3) || open.charAt(2),
            escaped = escapeFlag !== "{" && escapeFlag !== "&";
          var decorator = /\*/.test(open);
          return {
            type: decorator ? "Decorator" : "MustacheStatement",
            path: path,
            params: params,
            hash: hash,
            escaped: escaped,
            strip: strip,
            loc: this.locInfo(locInfo),
          };
        }

        function prepareRawBlock(openRawBlock, contents, close, locInfo) {
          validateClose(openRawBlock, close);
          locInfo = this.locInfo(locInfo);
          var program = {
            type: "Program",
            body: contents,
            strip: {},
            loc: locInfo,
          };
          return {
            type: "BlockStatement",
            path: openRawBlock.path,
            params: openRawBlock.params,
            hash: openRawBlock.hash,
            program: program,
            openStrip: {},
            inverseStrip: {},
            closeStrip: {},
            loc: locInfo,
          };
        }

        function prepareBlock(
          openBlock,
          program,
          inverseAndProgram,
          close,
          inverted,
          locInfo
        ) {
          if (close && close.path) {
            validateClose(openBlock, close);
          }

          var decorator = /\*/.test(openBlock.open);
          program.blockParams = openBlock.blockParams;
          var inverse = undefined,
            inverseStrip = undefined;

          if (inverseAndProgram) {
            if (decorator) {
              throw new _exception2["default"](
                "Unexpected inverse block on decorator",
                inverseAndProgram
              );
            }

            if (inverseAndProgram.chain) {
              inverseAndProgram.program.body[0].closeStrip = close.strip;
            }

            inverseStrip = inverseAndProgram.strip;
            inverse = inverseAndProgram.program;
          }

          if (inverted) {
            inverted = inverse;
            inverse = program;
            program = inverted;
          }

          return {
            type: decorator ? "DecoratorBlock" : "BlockStatement",
            path: openBlock.path,
            params: openBlock.params,
            hash: openBlock.hash,
            program: program,
            inverse: inverse,
            openStrip: openBlock.strip,
            inverseStrip: inverseStrip,
            closeStrip: close && close.strip,
            loc: this.locInfo(locInfo),
          };
        }

        function prepareProgram(statements, loc) {
          if (!loc && statements.length) {
            var firstLoc = statements[0].loc,
              lastLoc = statements[statements.length - 1].loc;
            /* istanbul ignore else */

            if (firstLoc && lastLoc) {
              loc = {
                source: firstLoc.source,
                start: {
                  line: firstLoc.start.line,
                  column: firstLoc.start.column,
                },
                end: {
                  line: lastLoc.end.line,
                  column: lastLoc.end.column,
                },
              };
            }
          }

          return {
            type: "Program",
            body: statements,
            strip: {},
            loc: loc,
          };
        }

        function preparePartialBlock(open, program, close, locInfo) {
          validateClose(open, close);
          return {
            type: "PartialBlockStatement",
            name: open.path,
            params: open.params,
            hash: open.hash,
            program: program,
            openStrip: open.strip,
            closeStrip: close && close.strip,
            loc: this.locInfo(locInfo),
          };
        }
      },
      {
        "../exception":
          "node_modules/handlebars/dist/cjs/handlebars/exception.js",
      },
    ],
    "node_modules/handlebars/dist/cjs/handlebars/compiler/base.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true;
        exports.parseWithoutProcessing = parseWithoutProcessing;
        exports.parse = parse; // istanbul ignore next

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          } else {
            var newObj = {};

            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key))
                  newObj[key] = obj[key];
              }
            }

            newObj["default"] = obj;
            return newObj;
          }
        } // istanbul ignore next

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        var _parser = require("./parser");

        var _parser2 = _interopRequireDefault(_parser);

        var _whitespaceControl = require("./whitespace-control");

        var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);

        var _helpers = require("./helpers");

        var Helpers = _interopRequireWildcard(_helpers);

        var _utils = require("../utils");

        exports.parser = _parser2["default"];
        var yy = {};

        _utils.extend(yy, Helpers);

        function parseWithoutProcessing(input, options) {
          // Just return if an already-compiled AST was passed in.
          if (input.type === "Program") {
            return input;
          }

          _parser2["default"].yy = yy; // Altering the shared object here, but this is ok as parser is a sync operation

          yy.locInfo = function (locInfo) {
            return new yy.SourceLocation(options && options.srcName, locInfo);
          };

          var ast = _parser2["default"].parse(input);

          return ast;
        }

        function parse(input, options) {
          var ast = parseWithoutProcessing(input, options);
          var strip = new _whitespaceControl2["default"](options);
          return strip.accept(ast);
        }
      },
      {
        "./parser":
          "node_modules/handlebars/dist/cjs/handlebars/compiler/parser.js",
        "./whitespace-control":
          "node_modules/handlebars/dist/cjs/handlebars/compiler/whitespace-control.js",
        "./helpers":
          "node_modules/handlebars/dist/cjs/handlebars/compiler/helpers.js",
        "../utils": "node_modules/handlebars/dist/cjs/handlebars/utils.js",
      },
    ],
    "node_modules/handlebars/dist/cjs/handlebars/compiler/compiler.js": [
      function (require, module, exports) {
        /* eslint-disable new-cap */
        "use strict";

        exports.__esModule = true;
        exports.Compiler = Compiler;
        exports.precompile = precompile;
        exports.compile = compile; // istanbul ignore next

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        var _exception = require("../exception");

        var _exception2 = _interopRequireDefault(_exception);

        var _utils = require("../utils");

        var _ast = require("./ast");

        var _ast2 = _interopRequireDefault(_ast);

        var slice = [].slice;

        function Compiler() {} // the foundHelper register will disambiguate helper lookup from finding a
        // function in a context. This is necessary for mustache compatibility, which
        // requires that context functions in blocks are evaluated by blockHelperMissing,
        // and then proceed as if the resulting value was provided to blockHelperMissing.

        Compiler.prototype = {
          compiler: Compiler,
          equals: function equals(other) {
            var len = this.opcodes.length;

            if (other.opcodes.length !== len) {
              return false;
            }

            for (var i = 0; i < len; i++) {
              var opcode = this.opcodes[i],
                otherOpcode = other.opcodes[i];

              if (
                opcode.opcode !== otherOpcode.opcode ||
                !argEquals(opcode.args, otherOpcode.args)
              ) {
                return false;
              }
            } // We know that length is the same between the two arrays because they are directly tied
            // to the opcode behavior above.

            len = this.children.length;

            for (var i = 0; i < len; i++) {
              if (!this.children[i].equals(other.children[i])) {
                return false;
              }
            }

            return true;
          },
          guid: 0,
          compile: function compile(program, options) {
            this.sourceNode = [];
            this.opcodes = [];
            this.children = [];
            this.options = options;
            this.stringParams = options.stringParams;
            this.trackIds = options.trackIds;
            options.blockParams = options.blockParams || [];
            options.knownHelpers = _utils.extend(
              Object.create(null),
              {
                helperMissing: true,
                blockHelperMissing: true,
                each: true,
                if: true,
                unless: true,
                with: true,
                log: true,
                lookup: true,
              },
              options.knownHelpers
            );
            return this.accept(program);
          },
          compileProgram: function compileProgram(program) {
            var childCompiler = new this.compiler(),
              // eslint-disable-line new-cap
              result = childCompiler.compile(program, this.options),
              guid = this.guid++;
            this.usePartial = this.usePartial || result.usePartial;
            this.children[guid] = result;
            this.useDepths = this.useDepths || result.useDepths;
            return guid;
          },
          accept: function accept(node) {
            /* istanbul ignore next: Sanity code */
            if (!this[node.type]) {
              throw new _exception2["default"](
                "Unknown type: " + node.type,
                node
              );
            }

            this.sourceNode.unshift(node);
            var ret = this[node.type](node);
            this.sourceNode.shift();
            return ret;
          },
          Program: function Program(program) {
            this.options.blockParams.unshift(program.blockParams);
            var body = program.body,
              bodyLength = body.length;

            for (var i = 0; i < bodyLength; i++) {
              this.accept(body[i]);
            }

            this.options.blockParams.shift();
            this.isSimple = bodyLength === 1;
            this.blockParams = program.blockParams
              ? program.blockParams.length
              : 0;
            return this;
          },
          BlockStatement: function BlockStatement(block) {
            transformLiteralToPath(block);
            var program = block.program,
              inverse = block.inverse;
            program = program && this.compileProgram(program);
            inverse = inverse && this.compileProgram(inverse);
            var type = this.classifySexpr(block);

            if (type === "helper") {
              this.helperSexpr(block, program, inverse);
            } else if (type === "simple") {
              this.simpleSexpr(block); // now that the simple mustache is resolved, we need to
              // evaluate it by executing `blockHelperMissing`

              this.opcode("pushProgram", program);
              this.opcode("pushProgram", inverse);
              this.opcode("emptyHash");
              this.opcode("blockValue", block.path.original);
            } else {
              this.ambiguousSexpr(block, program, inverse); // now that the simple mustache is resolved, we need to
              // evaluate it by executing `blockHelperMissing`

              this.opcode("pushProgram", program);
              this.opcode("pushProgram", inverse);
              this.opcode("emptyHash");
              this.opcode("ambiguousBlockValue");
            }

            this.opcode("append");
          },
          DecoratorBlock: function DecoratorBlock(decorator) {
            var program =
              decorator.program && this.compileProgram(decorator.program);
            var params = this.setupFullMustacheParams(
                decorator,
                program,
                undefined
              ),
              path = decorator.path;
            this.useDecorators = true;
            this.opcode("registerDecorator", params.length, path.original);
          },
          PartialStatement: function PartialStatement(partial) {
            this.usePartial = true;
            var program = partial.program;

            if (program) {
              program = this.compileProgram(partial.program);
            }

            var params = partial.params;

            if (params.length > 1) {
              throw new _exception2["default"](
                "Unsupported number of partial arguments: " + params.length,
                partial
              );
            } else if (!params.length) {
              if (this.options.explicitPartialContext) {
                this.opcode("pushLiteral", "undefined");
              } else {
                params.push({
                  type: "PathExpression",
                  parts: [],
                  depth: 0,
                });
              }
            }

            var partialName = partial.name.original,
              isDynamic = partial.name.type === "SubExpression";

            if (isDynamic) {
              this.accept(partial.name);
            }

            this.setupFullMustacheParams(partial, program, undefined, true);
            var indent = partial.indent || "";

            if (this.options.preventIndent && indent) {
              this.opcode("appendContent", indent);
              indent = "";
            }

            this.opcode("invokePartial", isDynamic, partialName, indent);
            this.opcode("append");
          },
          PartialBlockStatement: function PartialBlockStatement(partialBlock) {
            this.PartialStatement(partialBlock);
          },
          MustacheStatement: function MustacheStatement(mustache) {
            this.SubExpression(mustache);

            if (mustache.escaped && !this.options.noEscape) {
              this.opcode("appendEscaped");
            } else {
              this.opcode("append");
            }
          },
          Decorator: function Decorator(decorator) {
            this.DecoratorBlock(decorator);
          },
          ContentStatement: function ContentStatement(content) {
            if (content.value) {
              this.opcode("appendContent", content.value);
            }
          },
          CommentStatement: function CommentStatement() {},
          SubExpression: function SubExpression(sexpr) {
            transformLiteralToPath(sexpr);
            var type = this.classifySexpr(sexpr);

            if (type === "simple") {
              this.simpleSexpr(sexpr);
            } else if (type === "helper") {
              this.helperSexpr(sexpr);
            } else {
              this.ambiguousSexpr(sexpr);
            }
          },
          ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
            var path = sexpr.path,
              name = path.parts[0],
              isBlock = program != null || inverse != null;
            this.opcode("getContext", path.depth);
            this.opcode("pushProgram", program);
            this.opcode("pushProgram", inverse);
            path.strict = true;
            this.accept(path);
            this.opcode("invokeAmbiguous", name, isBlock);
          },
          simpleSexpr: function simpleSexpr(sexpr) {
            var path = sexpr.path;
            path.strict = true;
            this.accept(path);
            this.opcode("resolvePossibleLambda");
          },
          helperSexpr: function helperSexpr(sexpr, program, inverse) {
            var params = this.setupFullMustacheParams(sexpr, program, inverse),
              path = sexpr.path,
              name = path.parts[0];

            if (this.options.knownHelpers[name]) {
              this.opcode("invokeKnownHelper", params.length, name);
            } else if (this.options.knownHelpersOnly) {
              throw new _exception2["default"](
                "You specified knownHelpersOnly, but used the unknown helper " +
                  name,
                sexpr
              );
            } else {
              path.strict = true;
              path.falsy = true;
              this.accept(path);
              this.opcode(
                "invokeHelper",
                params.length,
                path.original,
                _ast2["default"].helpers.simpleId(path)
              );
            }
          },
          PathExpression: function PathExpression(path) {
            this.addDepth(path.depth);
            this.opcode("getContext", path.depth);

            var name = path.parts[0],
              scoped = _ast2["default"].helpers.scopedId(path),
              blockParamId =
                !path.depth && !scoped && this.blockParamIndex(name);

            if (blockParamId) {
              this.opcode("lookupBlockParam", blockParamId, path.parts);
            } else if (!name) {
              // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
              this.opcode("pushContext");
            } else if (path.data) {
              this.options.data = true;
              this.opcode("lookupData", path.depth, path.parts, path.strict);
            } else {
              this.opcode(
                "lookupOnContext",
                path.parts,
                path.falsy,
                path.strict,
                scoped
              );
            }
          },
          StringLiteral: function StringLiteral(string) {
            this.opcode("pushString", string.value);
          },
          NumberLiteral: function NumberLiteral(number) {
            this.opcode("pushLiteral", number.value);
          },
          BooleanLiteral: function BooleanLiteral(bool) {
            this.opcode("pushLiteral", bool.value);
          },
          UndefinedLiteral: function UndefinedLiteral() {
            this.opcode("pushLiteral", "undefined");
          },
          NullLiteral: function NullLiteral() {
            this.opcode("pushLiteral", "null");
          },
          Hash: function Hash(hash) {
            var pairs = hash.pairs,
              i = 0,
              l = pairs.length;
            this.opcode("pushHash");

            for (; i < l; i++) {
              this.pushParam(pairs[i].value);
            }

            while (i--) {
              this.opcode("assignToHash", pairs[i].key);
            }

            this.opcode("popHash");
          },
          // HELPERS
          opcode: function opcode(name) {
            this.opcodes.push({
              opcode: name,
              args: slice.call(arguments, 1),
              loc: this.sourceNode[0].loc,
            });
          },
          addDepth: function addDepth(depth) {
            if (!depth) {
              return;
            }

            this.useDepths = true;
          },
          classifySexpr: function classifySexpr(sexpr) {
            var isSimple = _ast2["default"].helpers.simpleId(sexpr.path);

            var isBlockParam =
              isSimple && !!this.blockParamIndex(sexpr.path.parts[0]); // a mustache is an eligible helper if:
            // * its id is simple (a single part, not `this` or `..`)

            var isHelper =
              !isBlockParam && _ast2["default"].helpers.helperExpression(sexpr); // if a mustache is an eligible helper but not a definite
            // helper, it is ambiguous, and will be resolved in a later
            // pass or at runtime.

            var isEligible = !isBlockParam && (isHelper || isSimple); // if ambiguous, we can possibly resolve the ambiguity now
            // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.

            if (isEligible && !isHelper) {
              var _name = sexpr.path.parts[0],
                options = this.options;

              if (options.knownHelpers[_name]) {
                isHelper = true;
              } else if (options.knownHelpersOnly) {
                isEligible = false;
              }
            }

            if (isHelper) {
              return "helper";
            } else if (isEligible) {
              return "ambiguous";
            } else {
              return "simple";
            }
          },
          pushParams: function pushParams(params) {
            for (var i = 0, l = params.length; i < l; i++) {
              this.pushParam(params[i]);
            }
          },
          pushParam: function pushParam(val) {
            var value = val.value != null ? val.value : val.original || "";

            if (this.stringParams) {
              if (value.replace) {
                value = value.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".");
              }

              if (val.depth) {
                this.addDepth(val.depth);
              }

              this.opcode("getContext", val.depth || 0);
              this.opcode("pushStringParam", value, val.type);

              if (val.type === "SubExpression") {
                // SubExpressions get evaluated and passed in
                // in string params mode.
                this.accept(val);
              }
            } else {
              if (this.trackIds) {
                var blockParamIndex = undefined;

                if (
                  val.parts &&
                  !_ast2["default"].helpers.scopedId(val) &&
                  !val.depth
                ) {
                  blockParamIndex = this.blockParamIndex(val.parts[0]);
                }

                if (blockParamIndex) {
                  var blockParamChild = val.parts.slice(1).join(".");
                  this.opcode(
                    "pushId",
                    "BlockParam",
                    blockParamIndex,
                    blockParamChild
                  );
                } else {
                  value = val.original || value;

                  if (value.replace) {
                    value = value
                      .replace(/^this(?:\.|$)/, "")
                      .replace(/^\.\//, "")
                      .replace(/^\.$/, "");
                  }

                  this.opcode("pushId", val.type, value);
                }
              }

              this.accept(val);
            }
          },
          setupFullMustacheParams: function setupFullMustacheParams(
            sexpr,
            program,
            inverse,
            omitEmpty
          ) {
            var params = sexpr.params;
            this.pushParams(params);
            this.opcode("pushProgram", program);
            this.opcode("pushProgram", inverse);

            if (sexpr.hash) {
              this.accept(sexpr.hash);
            } else {
              this.opcode("emptyHash", omitEmpty);
            }

            return params;
          },
          blockParamIndex: function blockParamIndex(name) {
            for (
              var depth = 0, len = this.options.blockParams.length;
              depth < len;
              depth++
            ) {
              var blockParams = this.options.blockParams[depth],
                param = blockParams && _utils.indexOf(blockParams, name);

              if (blockParams && param >= 0) {
                return [depth, param];
              }
            }
          },
        };

        function precompile(input, options, env) {
          if (
            input == null ||
            (typeof input !== "string" && input.type !== "Program")
          ) {
            throw new _exception2["default"](
              "You must pass a string or Handlebars AST to Handlebars.precompile. You passed " +
                input
            );
          }

          options = options || {};

          if (!("data" in options)) {
            options.data = true;
          }

          if (options.compat) {
            options.useDepths = true;
          }

          var ast = env.parse(input, options),
            environment = new env.Compiler().compile(ast, options);
          return new env.JavaScriptCompiler().compile(environment, options);
        }

        function compile(input, options, env) {
          if (options === undefined) options = {};

          if (
            input == null ||
            (typeof input !== "string" && input.type !== "Program")
          ) {
            throw new _exception2["default"](
              "You must pass a string or Handlebars AST to Handlebars.compile. You passed " +
                input
            );
          }

          options = _utils.extend({}, options);

          if (!("data" in options)) {
            options.data = true;
          }

          if (options.compat) {
            options.useDepths = true;
          }

          var compiled = undefined;

          function compileInput() {
            var ast = env.parse(input, options),
              environment = new env.Compiler().compile(ast, options),
              templateSpec = new env.JavaScriptCompiler().compile(
                environment,
                options,
                undefined,
                true
              );
            return env.template(templateSpec);
          } // Template is only compiled on first use and cached after that point.

          function ret(context, execOptions) {
            if (!compiled) {
              compiled = compileInput();
            }

            return compiled.call(this, context, execOptions);
          }

          ret._setup = function (setupOptions) {
            if (!compiled) {
              compiled = compileInput();
            }

            return compiled._setup(setupOptions);
          };

          ret._child = function (i, data, blockParams, depths) {
            if (!compiled) {
              compiled = compileInput();
            }

            return compiled._child(i, data, blockParams, depths);
          };

          return ret;
        }

        function argEquals(a, b) {
          if (a === b) {
            return true;
          }

          if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
            for (var i = 0; i < a.length; i++) {
              if (!argEquals(a[i], b[i])) {
                return false;
              }
            }

            return true;
          }
        }

        function transformLiteralToPath(sexpr) {
          if (!sexpr.path.parts) {
            var literal = sexpr.path; // Casting to string here to make false and 0 literal values play nicely with the rest
            // of the system.

            sexpr.path = {
              type: "PathExpression",
              data: false,
              depth: 0,
              parts: [literal.original + ""],
              original: literal.original + "",
              loc: literal.loc,
            };
          }
        }
      },
      {
        "../exception":
          "node_modules/handlebars/dist/cjs/handlebars/exception.js",
        "../utils": "node_modules/handlebars/dist/cjs/handlebars/utils.js",
        "./ast": "node_modules/handlebars/dist/cjs/handlebars/compiler/ast.js",
      },
    ],
    "node_modules/source-map/lib/base64.js": [
      function (require, module, exports) {
        /* -*- Mode: js; js-indent-level: 2; -*- */

        /*
         * Copyright 2011 Mozilla Foundation and contributors
         * Licensed under the New BSD license. See LICENSE or:
         * http://opensource.org/licenses/BSD-3-Clause
         */
        var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
          ""
        );
        /**
         * Encode an integer in the range of 0 to 63 to a single base 64 digit.
         */

        exports.encode = function (number) {
          if (0 <= number && number < intToCharMap.length) {
            return intToCharMap[number];
          }

          throw new TypeError("Must be between 0 and 63: " + number);
        };
        /**
         * Decode a single base 64 character code digit to an integer. Returns -1 on
         * failure.
         */

        exports.decode = function (charCode) {
          var bigA = 65; // 'A'

          var bigZ = 90; // 'Z'

          var littleA = 97; // 'a'

          var littleZ = 122; // 'z'

          var zero = 48; // '0'

          var nine = 57; // '9'

          var plus = 43; // '+'

          var slash = 47; // '/'

          var littleOffset = 26;
          var numberOffset = 52; // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ

          if (bigA <= charCode && charCode <= bigZ) {
            return charCode - bigA;
          } // 26 - 51: abcdefghijklmnopqrstuvwxyz

          if (littleA <= charCode && charCode <= littleZ) {
            return charCode - littleA + littleOffset;
          } // 52 - 61: 0123456789

          if (zero <= charCode && charCode <= nine) {
            return charCode - zero + numberOffset;
          } // 62: +

          if (charCode == plus) {
            return 62;
          } // 63: /

          if (charCode == slash) {
            return 63;
          } // Invalid base64 digit.

          return -1;
        };
      },
      {},
    ],
    "node_modules/source-map/lib/base64-vlq.js": [
      function (require, module, exports) {
        /* -*- Mode: js; js-indent-level: 2; -*- */

        /*
         * Copyright 2011 Mozilla Foundation and contributors
         * Licensed under the New BSD license. See LICENSE or:
         * http://opensource.org/licenses/BSD-3-Clause
         *
         * Based on the Base 64 VLQ implementation in Closure Compiler:
         * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
         *
         * Copyright 2011 The Closure Compiler Authors. All rights reserved.
         * Redistribution and use in source and binary forms, with or without
         * modification, are permitted provided that the following conditions are
         * met:
         *
         *  * Redistributions of source code must retain the above copyright
         *    notice, this list of conditions and the following disclaimer.
         *  * Redistributions in binary form must reproduce the above
         *    copyright notice, this list of conditions and the following
         *    disclaimer in the documentation and/or other materials provided
         *    with the distribution.
         *  * Neither the name of Google Inc. nor the names of its
         *    contributors may be used to endorse or promote products derived
         *    from this software without specific prior written permission.
         *
         * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
         * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
         * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
         * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
         * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
         * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
         * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
         * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
         * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
         * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
         * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
         */
        var base64 = require("./base64"); // A single base 64 digit can contain 6 bits of data. For the base 64 variable
        // length quantities we use in the source map spec, the first bit is the sign,
        // the next four bits are the actual value, and the 6th bit is the
        // continuation bit. The continuation bit tells us whether there are more
        // digits in this value following this digit.
        //
        //   Continuation
        //   |    Sign
        //   |    |
        //   V    V
        //   101011

        var VLQ_BASE_SHIFT = 5; // binary: 100000

        var VLQ_BASE = 1 << VLQ_BASE_SHIFT; // binary: 011111

        var VLQ_BASE_MASK = VLQ_BASE - 1; // binary: 100000

        var VLQ_CONTINUATION_BIT = VLQ_BASE;
        /**
         * Converts from a two-complement value to a value where the sign bit is
         * placed in the least significant bit.  For example, as decimals:
         *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
         *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
         */

        function toVLQSigned(aValue) {
          return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
        }
        /**
         * Converts to a two-complement value from a value where the sign bit is
         * placed in the least significant bit.  For example, as decimals:
         *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
         *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
         */

        function fromVLQSigned(aValue) {
          var isNegative = (aValue & 1) === 1;
          var shifted = aValue >> 1;
          return isNegative ? -shifted : shifted;
        }
        /**
         * Returns the base 64 VLQ encoded value.
         */

        exports.encode = function base64VLQ_encode(aValue) {
          var encoded = "";
          var digit;
          var vlq = toVLQSigned(aValue);

          do {
            digit = vlq & VLQ_BASE_MASK;
            vlq >>>= VLQ_BASE_SHIFT;

            if (vlq > 0) {
              // There are still more digits in this value, so we must make sure the
              // continuation bit is marked.
              digit |= VLQ_CONTINUATION_BIT;
            }

            encoded += base64.encode(digit);
          } while (vlq > 0);

          return encoded;
        };
        /**
         * Decodes the next base 64 VLQ value from the given string and returns the
         * value and the rest of the string via the out parameter.
         */

        exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
          var strLen = aStr.length;
          var result = 0;
          var shift = 0;
          var continuation, digit;

          do {
            if (aIndex >= strLen) {
              throw new Error("Expected more digits in base 64 VLQ value.");
            }

            digit = base64.decode(aStr.charCodeAt(aIndex++));

            if (digit === -1) {
              throw new Error(
                "Invalid base64 digit: " + aStr.charAt(aIndex - 1)
              );
            }

            continuation = !!(digit & VLQ_CONTINUATION_BIT);
            digit &= VLQ_BASE_MASK;
            result = result + (digit << shift);
            shift += VLQ_BASE_SHIFT;
          } while (continuation);

          aOutParam.value = fromVLQSigned(result);
          aOutParam.rest = aIndex;
        };
      },
      { "./base64": "node_modules/source-map/lib/base64.js" },
    ],
    "node_modules/source-map/lib/util.js": [
      function (require, module, exports) {
        /* -*- Mode: js; js-indent-level: 2; -*- */

        /*
         * Copyright 2011 Mozilla Foundation and contributors
         * Licensed under the New BSD license. See LICENSE or:
         * http://opensource.org/licenses/BSD-3-Clause
         */

        /**
         * This is a helper function for getting values from parameter/options
         * objects.
         *
         * @param args The object we are extracting values from
         * @param name The name of the property we are getting.
         * @param defaultValue An optional value to return if the property is missing
         * from the object. If this is not specified and the property is missing, an
         * error will be thrown.
         */
        function getArg(aArgs, aName, aDefaultValue) {
          if (aName in aArgs) {
            return aArgs[aName];
          } else if (arguments.length === 3) {
            return aDefaultValue;
          } else {
            throw new Error('"' + aName + '" is a required argument.');
          }
        }

        exports.getArg = getArg;
        var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
        var dataUrlRegexp = /^data:.+\,.+$/;

        function urlParse(aUrl) {
          var match = aUrl.match(urlRegexp);

          if (!match) {
            return null;
          }

          return {
            scheme: match[1],
            auth: match[2],
            host: match[3],
            port: match[4],
            path: match[5],
          };
        }

        exports.urlParse = urlParse;

        function urlGenerate(aParsedUrl) {
          var url = "";

          if (aParsedUrl.scheme) {
            url += aParsedUrl.scheme + ":";
          }

          url += "//";

          if (aParsedUrl.auth) {
            url += aParsedUrl.auth + "@";
          }

          if (aParsedUrl.host) {
            url += aParsedUrl.host;
          }

          if (aParsedUrl.port) {
            url += ":" + aParsedUrl.port;
          }

          if (aParsedUrl.path) {
            url += aParsedUrl.path;
          }

          return url;
        }

        exports.urlGenerate = urlGenerate;
        /**
         * Normalizes a path, or the path portion of a URL:
         *
         * - Replaces consecutive slashes with one slash.
         * - Removes unnecessary '.' parts.
         * - Removes unnecessary '<dir>/..' parts.
         *
         * Based on code in the Node.js 'path' core module.
         *
         * @param aPath The path or url to normalize.
         */

        function normalize(aPath) {
          var path = aPath;
          var url = urlParse(aPath);

          if (url) {
            if (!url.path) {
              return aPath;
            }

            path = url.path;
          }

          var isAbsolute = exports.isAbsolute(path);
          var parts = path.split(/\/+/);

          for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
            part = parts[i];

            if (part === ".") {
              parts.splice(i, 1);
            } else if (part === "..") {
              up++;
            } else if (up > 0) {
              if (part === "") {
                // The first part is blank if the path is absolute. Trying to go
                // above the root is a no-op. Therefore we can remove all '..' parts
                // directly after the root.
                parts.splice(i + 1, up);
                up = 0;
              } else {
                parts.splice(i, 2);
                up--;
              }
            }
          }

          path = parts.join("/");

          if (path === "") {
            path = isAbsolute ? "/" : ".";
          }

          if (url) {
            url.path = path;
            return urlGenerate(url);
          }

          return path;
        }

        exports.normalize = normalize;
        /**
         * Joins two paths/URLs.
         *
         * @param aRoot The root path or URL.
         * @param aPath The path or URL to be joined with the root.
         *
         * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
         *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
         *   first.
         * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
         *   is updated with the result and aRoot is returned. Otherwise the result
         *   is returned.
         *   - If aPath is absolute, the result is aPath.
         *   - Otherwise the two paths are joined with a slash.
         * - Joining for example 'http://' and 'www.example.com' is also supported.
         */

        function join(aRoot, aPath) {
          if (aRoot === "") {
            aRoot = ".";
          }

          if (aPath === "") {
            aPath = ".";
          }

          var aPathUrl = urlParse(aPath);
          var aRootUrl = urlParse(aRoot);

          if (aRootUrl) {
            aRoot = aRootUrl.path || "/";
          } // `join(foo, '//www.example.org')`

          if (aPathUrl && !aPathUrl.scheme) {
            if (aRootUrl) {
              aPathUrl.scheme = aRootUrl.scheme;
            }

            return urlGenerate(aPathUrl);
          }

          if (aPathUrl || aPath.match(dataUrlRegexp)) {
            return aPath;
          } // `join('http://', 'www.example.com')`

          if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
            aRootUrl.host = aPath;
            return urlGenerate(aRootUrl);
          }

          var joined =
            aPath.charAt(0) === "/"
              ? aPath
              : normalize(aRoot.replace(/\/+$/, "") + "/" + aPath);

          if (aRootUrl) {
            aRootUrl.path = joined;
            return urlGenerate(aRootUrl);
          }

          return joined;
        }

        exports.join = join;

        exports.isAbsolute = function (aPath) {
          return aPath.charAt(0) === "/" || urlRegexp.test(aPath);
        };
        /**
         * Make a path relative to a URL or another path.
         *
         * @param aRoot The root path or URL.
         * @param aPath The path or URL to be made relative to aRoot.
         */

        function relative(aRoot, aPath) {
          if (aRoot === "") {
            aRoot = ".";
          }

          aRoot = aRoot.replace(/\/$/, ""); // It is possible for the path to be above the root. In this case, simply
          // checking whether the root is a prefix of the path won't work. Instead, we
          // need to remove components from the root one by one, until either we find
          // a prefix that fits, or we run out of components to remove.

          var level = 0;

          while (aPath.indexOf(aRoot + "/") !== 0) {
            var index = aRoot.lastIndexOf("/");

            if (index < 0) {
              return aPath;
            } // If the only part of the root that is left is the scheme (i.e. http://,
            // file:///, etc.), one or more slashes (/), or simply nothing at all, we
            // have exhausted all components, so the path is not relative to the root.

            aRoot = aRoot.slice(0, index);

            if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
              return aPath;
            }

            ++level;
          } // Make sure we add a "../" for each component we removed from the root.

          return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
        }

        exports.relative = relative;

        var supportsNullProto = (function () {
          var obj = Object.create(null);
          return !("__proto__" in obj);
        })();

        function identity(s) {
          return s;
        }
        /**
         * Because behavior goes wacky when you set `__proto__` on objects, we
         * have to prefix all the strings in our set with an arbitrary character.
         *
         * See https://github.com/mozilla/source-map/pull/31 and
         * https://github.com/mozilla/source-map/issues/30
         *
         * @param String aStr
         */

        function toSetString(aStr) {
          if (isProtoString(aStr)) {
            return "$" + aStr;
          }

          return aStr;
        }

        exports.toSetString = supportsNullProto ? identity : toSetString;

        function fromSetString(aStr) {
          if (isProtoString(aStr)) {
            return aStr.slice(1);
          }

          return aStr;
        }

        exports.fromSetString = supportsNullProto ? identity : fromSetString;

        function isProtoString(s) {
          if (!s) {
            return false;
          }

          var length = s.length;

          if (
            length < 9
            /* "__proto__".length */
          ) {
            return false;
          }

          if (
            s.charCodeAt(length - 1) !== 95 ||
            /* '_' */
            s.charCodeAt(length - 2) !== 95 ||
            /* '_' */
            s.charCodeAt(length - 3) !== 111 ||
            /* 'o' */
            s.charCodeAt(length - 4) !== 116 ||
            /* 't' */
            s.charCodeAt(length - 5) !== 111 ||
            /* 'o' */
            s.charCodeAt(length - 6) !== 114 ||
            /* 'r' */
            s.charCodeAt(length - 7) !== 112 ||
            /* 'p' */
            s.charCodeAt(length - 8) !== 95 ||
            /* '_' */
            s.charCodeAt(length - 9) !== 95
            /* '_' */
          ) {
            return false;
          }

          for (var i = length - 10; i >= 0; i--) {
            if (
              s.charCodeAt(i) !== 36
              /* '$' */
            ) {
              return false;
            }
          }

          return true;
        }
        /**
         * Comparator between two mappings where the original positions are compared.
         *
         * Optionally pass in `true` as `onlyCompareGenerated` to consider two
         * mappings with the same original source/line/column, but different generated
         * line and column the same. Useful when searching for a mapping with a
         * stubbed out mapping.
         */

        function compareByOriginalPositions(
          mappingA,
          mappingB,
          onlyCompareOriginal
        ) {
          var cmp = strcmp(mappingA.source, mappingB.source);

          if (cmp !== 0) {
            return cmp;
          }

          cmp = mappingA.originalLine - mappingB.originalLine;

          if (cmp !== 0) {
            return cmp;
          }

          cmp = mappingA.originalColumn - mappingB.originalColumn;

          if (cmp !== 0 || onlyCompareOriginal) {
            return cmp;
          }

          cmp = mappingA.generatedColumn - mappingB.generatedColumn;

          if (cmp !== 0) {
            return cmp;
          }

          cmp = mappingA.generatedLine - mappingB.generatedLine;

          if (cmp !== 0) {
            return cmp;
          }

          return strcmp(mappingA.name, mappingB.name);
        }

        exports.compareByOriginalPositions = compareByOriginalPositions;
        /**
         * Comparator between two mappings with deflated source and name indices where
         * the generated positions are compared.
         *
         * Optionally pass in `true` as `onlyCompareGenerated` to consider two
         * mappings with the same generated line and column, but different
         * source/name/original line and column the same. Useful when searching for a
         * mapping with a stubbed out mapping.
         */

        function compareByGeneratedPositionsDeflated(
          mappingA,
          mappingB,
          onlyCompareGenerated
        ) {
          var cmp = mappingA.generatedLine - mappingB.generatedLine;

          if (cmp !== 0) {
            return cmp;
          }

          cmp = mappingA.generatedColumn - mappingB.generatedColumn;

          if (cmp !== 0 || onlyCompareGenerated) {
            return cmp;
          }

          cmp = strcmp(mappingA.source, mappingB.source);

          if (cmp !== 0) {
            return cmp;
          }

          cmp = mappingA.originalLine - mappingB.originalLine;

          if (cmp !== 0) {
            return cmp;
          }

          cmp = mappingA.originalColumn - mappingB.originalColumn;

          if (cmp !== 0) {
            return cmp;
          }

          return strcmp(mappingA.name, mappingB.name);
        }

        exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

        function strcmp(aStr1, aStr2) {
          if (aStr1 === aStr2) {
            return 0;
          }

          if (aStr1 === null) {
            return 1; // aStr2 !== null
          }

          if (aStr2 === null) {
            return -1; // aStr1 !== null
          }

          if (aStr1 > aStr2) {
            return 1;
          }

          return -1;
        }
        /**
         * Comparator between two mappings with inflated source and name strings where
         * the generated positions are compared.
         */

        function compareByGeneratedPositionsInflated(mappingA, mappingB) {
          var cmp = mappingA.generatedLine - mappingB.generatedLine;

          if (cmp !== 0) {
            return cmp;
          }

          cmp = mappingA.generatedColumn - mappingB.generatedColumn;

          if (cmp !== 0) {
            return cmp;
          }

          cmp = strcmp(mappingA.source, mappingB.source);

          if (cmp !== 0) {
            return cmp;
          }

          cmp = mappingA.originalLine - mappingB.originalLine;

          if (cmp !== 0) {
            return cmp;
          }

          cmp = mappingA.originalColumn - mappingB.originalColumn;

          if (cmp !== 0) {
            return cmp;
          }

          return strcmp(mappingA.name, mappingB.name);
        }

        exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
        /**
         * Strip any JSON XSSI avoidance prefix from the string (as documented
         * in the source maps specification), and then parse the string as
         * JSON.
         */

        function parseSourceMapInput(str) {
          return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ""));
        }

        exports.parseSourceMapInput = parseSourceMapInput;
        /**
         * Compute the URL of a source given the the source root, the source's
         * URL, and the source map's URL.
         */

        function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
          sourceURL = sourceURL || "";

          if (sourceRoot) {
            // This follows what Chrome does.
            if (
              sourceRoot[sourceRoot.length - 1] !== "/" &&
              sourceURL[0] !== "/"
            ) {
              sourceRoot += "/";
            } // The spec says:
            //   Line 4: An optional source root, useful for relocating source
            //   files on a server or removing repeated values in the
            //   “sources” entry.  This value is prepended to the individual
            //   entries in the “source” field.

            sourceURL = sourceRoot + sourceURL;
          } // Historically, SourceMapConsumer did not take the sourceMapURL as
          // a parameter.  This mode is still somewhat supported, which is why
          // this code block is conditional.  However, it's preferable to pass
          // the source map URL to SourceMapConsumer, so that this function
          // can implement the source URL resolution algorithm as outlined in
          // the spec.  This block is basically the equivalent of:
          //    new URL(sourceURL, sourceMapURL).toString()
          // ... except it avoids using URL, which wasn't available in the
          // older releases of node still supported by this library.
          //
          // The spec says:
          //   If the sources are not absolute URLs after prepending of the
          //   “sourceRoot”, the sources are resolved relative to the
          //   SourceMap (like resolving script src in a html document).

          if (sourceMapURL) {
            var parsed = urlParse(sourceMapURL);

            if (!parsed) {
              throw new Error("sourceMapURL could not be parsed");
            }

            if (parsed.path) {
              // Strip the last path component, but keep the "/".
              var index = parsed.path.lastIndexOf("/");

              if (index >= 0) {
                parsed.path = parsed.path.substring(0, index + 1);
              }
            }

            sourceURL = join(urlGenerate(parsed), sourceURL);
          }

          return normalize(sourceURL);
        }

        exports.computeSourceURL = computeSourceURL;
      },
      {},
    ],
    "node_modules/source-map/lib/array-set.js": [
      function (require, module, exports) {
        /* -*- Mode: js; js-indent-level: 2; -*- */

        /*
         * Copyright 2011 Mozilla Foundation and contributors
         * Licensed under the New BSD license. See LICENSE or:
         * http://opensource.org/licenses/BSD-3-Clause
         */
        var util = require("./util");

        var has = Object.prototype.hasOwnProperty;
        var hasNativeMap = typeof Map !== "undefined";
        /**
         * A data structure which is a combination of an array and a set. Adding a new
         * member is O(1), testing for membership is O(1), and finding the index of an
         * element is O(1). Removing elements from the set is not supported. Only
         * strings are supported for membership.
         */

        function ArraySet() {
          this._array = [];
          this._set = hasNativeMap ? new Map() : Object.create(null);
        }
        /**
         * Static method for creating ArraySet instances from an existing array.
         */

        ArraySet.fromArray = function ArraySet_fromArray(
          aArray,
          aAllowDuplicates
        ) {
          var set = new ArraySet();

          for (var i = 0, len = aArray.length; i < len; i++) {
            set.add(aArray[i], aAllowDuplicates);
          }

          return set;
        };
        /**
         * Return how many unique items are in this ArraySet. If duplicates have been
         * added, than those do not count towards the size.
         *
         * @returns Number
         */

        ArraySet.prototype.size = function ArraySet_size() {
          return hasNativeMap
            ? this._set.size
            : Object.getOwnPropertyNames(this._set).length;
        };
        /**
         * Add the given string to this set.
         *
         * @param String aStr
         */

        ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
          var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
          var isDuplicate = hasNativeMap
            ? this.has(aStr)
            : has.call(this._set, sStr);
          var idx = this._array.length;

          if (!isDuplicate || aAllowDuplicates) {
            this._array.push(aStr);
          }

          if (!isDuplicate) {
            if (hasNativeMap) {
              this._set.set(aStr, idx);
            } else {
              this._set[sStr] = idx;
            }
          }
        };
        /**
         * Is the given string a member of this set?
         *
         * @param String aStr
         */

        ArraySet.prototype.has = function ArraySet_has(aStr) {
          if (hasNativeMap) {
            return this._set.has(aStr);
          } else {
            var sStr = util.toSetString(aStr);
            return has.call(this._set, sStr);
          }
        };
        /**
         * What is the index of the given string in the array?
         *
         * @param String aStr
         */

        ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
          if (hasNativeMap) {
            var idx = this._set.get(aStr);

            if (idx >= 0) {
              return idx;
            }
          } else {
            var sStr = util.toSetString(aStr);

            if (has.call(this._set, sStr)) {
              return this._set[sStr];
            }
          }

          throw new Error('"' + aStr + '" is not in the set.');
        };
        /**
         * What is the element at the given index?
         *
         * @param Number aIdx
         */

        ArraySet.prototype.at = function ArraySet_at(aIdx) {
          if (aIdx >= 0 && aIdx < this._array.length) {
            return this._array[aIdx];
          }

          throw new Error("No element indexed by " + aIdx);
        };
        /**
         * Returns the array representation of this set (which has the proper indices
         * indicated by indexOf). Note that this is a copy of the internal array used
         * for storing the members so that no one can mess with internal state.
         */

        ArraySet.prototype.toArray = function ArraySet_toArray() {
          return this._array.slice();
        };

        exports.ArraySet = ArraySet;
      },
      { "./util": "node_modules/source-map/lib/util.js" },
    ],
    "node_modules/source-map/lib/mapping-list.js": [
      function (require, module, exports) {
        /* -*- Mode: js; js-indent-level: 2; -*- */

        /*
         * Copyright 2014 Mozilla Foundation and contributors
         * Licensed under the New BSD license. See LICENSE or:
         * http://opensource.org/licenses/BSD-3-Clause
         */
        var util = require("./util");
        /**
         * Determine whether mappingB is after mappingA with respect to generated
         * position.
         */

        function generatedPositionAfter(mappingA, mappingB) {
          // Optimized for most common case
          var lineA = mappingA.generatedLine;
          var lineB = mappingB.generatedLine;
          var columnA = mappingA.generatedColumn;
          var columnB = mappingB.generatedColumn;
          return (
            lineB > lineA ||
            (lineB == lineA && columnB >= columnA) ||
            util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0
          );
        }
        /**
         * A data structure to provide a sorted view of accumulated mappings in a
         * performance conscious manner. It trades a neglibable overhead in general
         * case for a large speedup in case of mappings being added in order.
         */

        function MappingList() {
          this._array = [];
          this._sorted = true; // Serves as infimum

          this._last = {
            generatedLine: -1,
            generatedColumn: 0,
          };
        }
        /**
         * Iterate through internal items. This method takes the same arguments that
         * `Array.prototype.forEach` takes.
         *
         * NOTE: The order of the mappings is NOT guaranteed.
         */

        MappingList.prototype.unsortedForEach = function MappingList_forEach(
          aCallback,
          aThisArg
        ) {
          this._array.forEach(aCallback, aThisArg);
        };
        /**
         * Add the given source mapping.
         *
         * @param Object aMapping
         */

        MappingList.prototype.add = function MappingList_add(aMapping) {
          if (generatedPositionAfter(this._last, aMapping)) {
            this._last = aMapping;

            this._array.push(aMapping);
          } else {
            this._sorted = false;

            this._array.push(aMapping);
          }
        };
        /**
         * Returns the flat, sorted array of mappings. The mappings are sorted by
         * generated position.
         *
         * WARNING: This method returns internal data without copying, for
         * performance. The return value must NOT be mutated, and should be treated as
         * an immutable borrow. If you want to take ownership, you must make your own
         * copy.
         */

        MappingList.prototype.toArray = function MappingList_toArray() {
          if (!this._sorted) {
            this._array.sort(util.compareByGeneratedPositionsInflated);

            this._sorted = true;
          }

          return this._array;
        };

        exports.MappingList = MappingList;
      },
      { "./util": "node_modules/source-map/lib/util.js" },
    ],
    "node_modules/source-map/lib/source-map-generator.js": [
      function (require, module, exports) {
        /* -*- Mode: js; js-indent-level: 2; -*- */

        /*
         * Copyright 2011 Mozilla Foundation and contributors
         * Licensed under the New BSD license. See LICENSE or:
         * http://opensource.org/licenses/BSD-3-Clause
         */
        var base64VLQ = require("./base64-vlq");

        var util = require("./util");

        var ArraySet = require("./array-set").ArraySet;

        var MappingList = require("./mapping-list").MappingList;
        /**
         * An instance of the SourceMapGenerator represents a source map which is
         * being built incrementally. You may pass an object with the following
         * properties:
         *
         *   - file: The filename of the generated source.
         *   - sourceRoot: A root for all relative URLs in this source map.
         */

        function SourceMapGenerator(aArgs) {
          if (!aArgs) {
            aArgs = {};
          }

          this._file = util.getArg(aArgs, "file", null);
          this._sourceRoot = util.getArg(aArgs, "sourceRoot", null);
          this._skipValidation = util.getArg(aArgs, "skipValidation", false);
          this._sources = new ArraySet();
          this._names = new ArraySet();
          this._mappings = new MappingList();
          this._sourcesContents = null;
        }

        SourceMapGenerator.prototype._version = 3;
        /**
         * Creates a new SourceMapGenerator based on a SourceMapConsumer
         *
         * @param aSourceMapConsumer The SourceMap.
         */

        SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(
          aSourceMapConsumer
        ) {
          var sourceRoot = aSourceMapConsumer.sourceRoot;
          var generator = new SourceMapGenerator({
            file: aSourceMapConsumer.file,
            sourceRoot: sourceRoot,
          });
          aSourceMapConsumer.eachMapping(function (mapping) {
            var newMapping = {
              generated: {
                line: mapping.generatedLine,
                column: mapping.generatedColumn,
              },
            };

            if (mapping.source != null) {
              newMapping.source = mapping.source;

              if (sourceRoot != null) {
                newMapping.source = util.relative(
                  sourceRoot,
                  newMapping.source
                );
              }

              newMapping.original = {
                line: mapping.originalLine,
                column: mapping.originalColumn,
              };

              if (mapping.name != null) {
                newMapping.name = mapping.name;
              }
            }

            generator.addMapping(newMapping);
          });
          aSourceMapConsumer.sources.forEach(function (sourceFile) {
            var sourceRelative = sourceFile;

            if (sourceRoot !== null) {
              sourceRelative = util.relative(sourceRoot, sourceFile);
            }

            if (!generator._sources.has(sourceRelative)) {
              generator._sources.add(sourceRelative);
            }

            var content = aSourceMapConsumer.sourceContentFor(sourceFile);

            if (content != null) {
              generator.setSourceContent(sourceFile, content);
            }
          });
          return generator;
        };
        /**
         * Add a single mapping from original source line and column to the generated
         * source's line and column for this source map being created. The mapping
         * object should have the following properties:
         *
         *   - generated: An object with the generated line and column positions.
         *   - original: An object with the original line and column positions.
         *   - source: The original source file (relative to the sourceRoot).
         *   - name: An optional original token name for this mapping.
         */

        SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(
          aArgs
        ) {
          var generated = util.getArg(aArgs, "generated");
          var original = util.getArg(aArgs, "original", null);
          var source = util.getArg(aArgs, "source", null);
          var name = util.getArg(aArgs, "name", null);

          if (!this._skipValidation) {
            this._validateMapping(generated, original, source, name);
          }

          if (source != null) {
            source = String(source);

            if (!this._sources.has(source)) {
              this._sources.add(source);
            }
          }

          if (name != null) {
            name = String(name);

            if (!this._names.has(name)) {
              this._names.add(name);
            }
          }

          this._mappings.add({
            generatedLine: generated.line,
            generatedColumn: generated.column,
            originalLine: original != null && original.line,
            originalColumn: original != null && original.column,
            source: source,
            name: name,
          });
        };
        /**
         * Set the source content for a source file.
         */

        SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(
          aSourceFile,
          aSourceContent
        ) {
          var source = aSourceFile;

          if (this._sourceRoot != null) {
            source = util.relative(this._sourceRoot, source);
          }

          if (aSourceContent != null) {
            // Add the source content to the _sourcesContents map.
            // Create a new _sourcesContents map if the property is null.
            if (!this._sourcesContents) {
              this._sourcesContents = Object.create(null);
            }

            this._sourcesContents[util.toSetString(source)] = aSourceContent;
          } else if (this._sourcesContents) {
            // Remove the source file from the _sourcesContents map.
            // If the _sourcesContents map is empty, set the property to null.
            delete this._sourcesContents[util.toSetString(source)];

            if (Object.keys(this._sourcesContents).length === 0) {
              this._sourcesContents = null;
            }
          }
        };
        /**
         * Applies the mappings of a sub-source-map for a specific source file to the
         * source map being generated. Each mapping to the supplied source file is
         * rewritten using the supplied source map. Note: The resolution for the
         * resulting mappings is the minimium of this map and the supplied map.
         *
         * @param aSourceMapConsumer The source map to be applied.
         * @param aSourceFile Optional. The filename of the source file.
         *        If omitted, SourceMapConsumer's file property will be used.
         * @param aSourceMapPath Optional. The dirname of the path to the source map
         *        to be applied. If relative, it is relative to the SourceMapConsumer.
         *        This parameter is needed when the two source maps aren't in the same
         *        directory, and the source map to be applied contains relative source
         *        paths. If so, those relative source paths need to be rewritten
         *        relative to the SourceMapGenerator.
         */

        SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(
          aSourceMapConsumer,
          aSourceFile,
          aSourceMapPath
        ) {
          var sourceFile = aSourceFile; // If aSourceFile is omitted, we will use the file property of the SourceMap

          if (aSourceFile == null) {
            if (aSourceMapConsumer.file == null) {
              throw new Error(
                "SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, " +
                  'or the source map\'s "file" property. Both were omitted.'
              );
            }

            sourceFile = aSourceMapConsumer.file;
          }

          var sourceRoot = this._sourceRoot; // Make "sourceFile" relative if an absolute Url is passed.

          if (sourceRoot != null) {
            sourceFile = util.relative(sourceRoot, sourceFile);
          } // Applying the SourceMap can add and remove items from the sources and
          // the names array.

          var newSources = new ArraySet();
          var newNames = new ArraySet(); // Find mappings for the "sourceFile"

          this._mappings.unsortedForEach(function (mapping) {
            if (mapping.source === sourceFile && mapping.originalLine != null) {
              // Check if it can be mapped by the source map, then update the mapping.
              var original = aSourceMapConsumer.originalPositionFor({
                line: mapping.originalLine,
                column: mapping.originalColumn,
              });

              if (original.source != null) {
                // Copy mapping
                mapping.source = original.source;

                if (aSourceMapPath != null) {
                  mapping.source = util.join(aSourceMapPath, mapping.source);
                }

                if (sourceRoot != null) {
                  mapping.source = util.relative(sourceRoot, mapping.source);
                }

                mapping.originalLine = original.line;
                mapping.originalColumn = original.column;

                if (original.name != null) {
                  mapping.name = original.name;
                }
              }
            }

            var source = mapping.source;

            if (source != null && !newSources.has(source)) {
              newSources.add(source);
            }

            var name = mapping.name;

            if (name != null && !newNames.has(name)) {
              newNames.add(name);
            }
          }, this);

          this._sources = newSources;
          this._names = newNames; // Copy sourcesContents of applied map.

          aSourceMapConsumer.sources.forEach(function (sourceFile) {
            var content = aSourceMapConsumer.sourceContentFor(sourceFile);

            if (content != null) {
              if (aSourceMapPath != null) {
                sourceFile = util.join(aSourceMapPath, sourceFile);
              }

              if (sourceRoot != null) {
                sourceFile = util.relative(sourceRoot, sourceFile);
              }

              this.setSourceContent(sourceFile, content);
            }
          }, this);
        };
        /**
         * A mapping can have one of the three levels of data:
         *
         *   1. Just the generated position.
         *   2. The Generated position, original position, and original source.
         *   3. Generated and original position, original source, as well as a name
         *      token.
         *
         * To maintain consistency, we validate that any new mapping being added falls
         * in to one of these categories.
         */

        SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(
          aGenerated,
          aOriginal,
          aSource,
          aName
        ) {
          // When aOriginal is truthy but has empty values for .line and .column,
          // it is most likely a programmer error. In this case we throw a very
          // specific error message to try to guide them the right way.
          // For example: https://github.com/Polymer/polymer-bundler/pull/519
          if (
            aOriginal &&
            typeof aOriginal.line !== "number" &&
            typeof aOriginal.column !== "number"
          ) {
            throw new Error(
              "original.line and original.column are not numbers -- you probably meant to omit " +
                "the original mapping entirely and only map the generated position. If so, pass " +
                "null for the original mapping instead of an object with empty or null values."
            );
          }

          if (
            aGenerated &&
            "line" in aGenerated &&
            "column" in aGenerated &&
            aGenerated.line > 0 &&
            aGenerated.column >= 0 &&
            !aOriginal &&
            !aSource &&
            !aName
          ) {
            // Case 1.
            return;
          } else if (
            aGenerated &&
            "line" in aGenerated &&
            "column" in aGenerated &&
            aOriginal &&
            "line" in aOriginal &&
            "column" in aOriginal &&
            aGenerated.line > 0 &&
            aGenerated.column >= 0 &&
            aOriginal.line > 0 &&
            aOriginal.column >= 0 &&
            aSource
          ) {
            // Cases 2 and 3.
            return;
          } else {
            throw new Error(
              "Invalid mapping: " +
                JSON.stringify({
                  generated: aGenerated,
                  source: aSource,
                  original: aOriginal,
                  name: aName,
                })
            );
          }
        };
        /**
         * Serialize the accumulated mappings in to the stream of base 64 VLQs
         * specified by the source map format.
         */

        SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
          var previousGeneratedColumn = 0;
          var previousGeneratedLine = 1;
          var previousOriginalColumn = 0;
          var previousOriginalLine = 0;
          var previousName = 0;
          var previousSource = 0;
          var result = "";
          var next;
          var mapping;
          var nameIdx;
          var sourceIdx;

          var mappings = this._mappings.toArray();

          for (var i = 0, len = mappings.length; i < len; i++) {
            mapping = mappings[i];
            next = "";

            if (mapping.generatedLine !== previousGeneratedLine) {
              previousGeneratedColumn = 0;

              while (mapping.generatedLine !== previousGeneratedLine) {
                next += ";";
                previousGeneratedLine++;
              }
            } else {
              if (i > 0) {
                if (
                  !util.compareByGeneratedPositionsInflated(
                    mapping,
                    mappings[i - 1]
                  )
                ) {
                  continue;
                }

                next += ",";
              }
            }

            next += base64VLQ.encode(
              mapping.generatedColumn - previousGeneratedColumn
            );
            previousGeneratedColumn = mapping.generatedColumn;

            if (mapping.source != null) {
              sourceIdx = this._sources.indexOf(mapping.source);
              next += base64VLQ.encode(sourceIdx - previousSource);
              previousSource = sourceIdx; // lines are stored 0-based in SourceMap spec version 3

              next += base64VLQ.encode(
                mapping.originalLine - 1 - previousOriginalLine
              );
              previousOriginalLine = mapping.originalLine - 1;
              next += base64VLQ.encode(
                mapping.originalColumn - previousOriginalColumn
              );
              previousOriginalColumn = mapping.originalColumn;

              if (mapping.name != null) {
                nameIdx = this._names.indexOf(mapping.name);
                next += base64VLQ.encode(nameIdx - previousName);
                previousName = nameIdx;
              }
            }

            result += next;
          }

          return result;
        };

        SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(
          aSources,
          aSourceRoot
        ) {
          return aSources.map(function (source) {
            if (!this._sourcesContents) {
              return null;
            }

            if (aSourceRoot != null) {
              source = util.relative(aSourceRoot, source);
            }

            var key = util.toSetString(source);
            return Object.prototype.hasOwnProperty.call(
              this._sourcesContents,
              key
            )
              ? this._sourcesContents[key]
              : null;
          }, this);
        };
        /**
         * Externalize the source map.
         */

        SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
          var map = {
            version: this._version,
            sources: this._sources.toArray(),
            names: this._names.toArray(),
            mappings: this._serializeMappings(),
          };

          if (this._file != null) {
            map.file = this._file;
          }

          if (this._sourceRoot != null) {
            map.sourceRoot = this._sourceRoot;
          }

          if (this._sourcesContents) {
            map.sourcesContent = this._generateSourcesContent(
              map.sources,
              map.sourceRoot
            );
          }

          return map;
        };
        /**
         * Render the source map being generated to a string.
         */

        SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
          return JSON.stringify(this.toJSON());
        };

        exports.SourceMapGenerator = SourceMapGenerator;
      },
      {
        "./base64-vlq": "node_modules/source-map/lib/base64-vlq.js",
        "./util": "node_modules/source-map/lib/util.js",
        "./array-set": "node_modules/source-map/lib/array-set.js",
        "./mapping-list": "node_modules/source-map/lib/mapping-list.js",
      },
    ],
    "node_modules/source-map/lib/binary-search.js": [
      function (require, module, exports) {
        /* -*- Mode: js; js-indent-level: 2; -*- */

        /*
         * Copyright 2011 Mozilla Foundation and contributors
         * Licensed under the New BSD license. See LICENSE or:
         * http://opensource.org/licenses/BSD-3-Clause
         */
        exports.GREATEST_LOWER_BOUND = 1;
        exports.LEAST_UPPER_BOUND = 2;
        /**
         * Recursive implementation of binary search.
         *
         * @param aLow Indices here and lower do not contain the needle.
         * @param aHigh Indices here and higher do not contain the needle.
         * @param aNeedle The element being searched for.
         * @param aHaystack The non-empty array being searched.
         * @param aCompare Function which takes two elements and returns -1, 0, or 1.
         * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
         *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
         *     closest element that is smaller than or greater than the one we are
         *     searching for, respectively, if the exact element cannot be found.
         */

        function recursiveSearch(
          aLow,
          aHigh,
          aNeedle,
          aHaystack,
          aCompare,
          aBias
        ) {
          // This function terminates when one of the following is true:
          //
          //   1. We find the exact element we are looking for.
          //
          //   2. We did not find the exact element, but we can return the index of
          //      the next-closest element.
          //
          //   3. We did not find the exact element, and there is no next-closest
          //      element than the one we are searching for, so we return -1.
          var mid = Math.floor((aHigh - aLow) / 2) + aLow;
          var cmp = aCompare(aNeedle, aHaystack[mid], true);

          if (cmp === 0) {
            // Found the element we are looking for.
            return mid;
          } else if (cmp > 0) {
            // Our needle is greater than aHaystack[mid].
            if (aHigh - mid > 1) {
              // The element is in the upper half.
              return recursiveSearch(
                mid,
                aHigh,
                aNeedle,
                aHaystack,
                aCompare,
                aBias
              );
            } // The exact needle element was not found in this haystack. Determine if
            // we are in termination case (3) or (2) and return the appropriate thing.

            if (aBias == exports.LEAST_UPPER_BOUND) {
              return aHigh < aHaystack.length ? aHigh : -1;
            } else {
              return mid;
            }
          } else {
            // Our needle is less than aHaystack[mid].
            if (mid - aLow > 1) {
              // The element is in the lower half.
              return recursiveSearch(
                aLow,
                mid,
                aNeedle,
                aHaystack,
                aCompare,
                aBias
              );
            } // we are in termination case (3) or (2) and return the appropriate thing.

            if (aBias == exports.LEAST_UPPER_BOUND) {
              return mid;
            } else {
              return aLow < 0 ? -1 : aLow;
            }
          }
        }
        /**
         * This is an implementation of binary search which will always try and return
         * the index of the closest element if there is no exact hit. This is because
         * mappings between original and generated line/col pairs are single points,
         * and there is an implicit region between each of them, so a miss just means
         * that you aren't on the very start of a region.
         *
         * @param aNeedle The element you are looking for.
         * @param aHaystack The array that is being searched.
         * @param aCompare A function which takes the needle and an element in the
         *     array and returns -1, 0, or 1 depending on whether the needle is less
         *     than, equal to, or greater than the element, respectively.
         * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
         *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
         *     closest element that is smaller than or greater than the one we are
         *     searching for, respectively, if the exact element cannot be found.
         *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
         */

        exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
          if (aHaystack.length === 0) {
            return -1;
          }

          var index = recursiveSearch(
            -1,
            aHaystack.length,
            aNeedle,
            aHaystack,
            aCompare,
            aBias || exports.GREATEST_LOWER_BOUND
          );

          if (index < 0) {
            return -1;
          } // We have found either the exact element, or the next-closest element than
          // the one we are searching for. However, there may be more than one such
          // element. Make sure we always return the smallest of these.

          while (index - 1 >= 0) {
            if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
              break;
            }

            --index;
          }

          return index;
        };
      },
      {},
    ],
    "node_modules/source-map/lib/quick-sort.js": [
      function (require, module, exports) {
        /* -*- Mode: js; js-indent-level: 2; -*- */

        /*
         * Copyright 2011 Mozilla Foundation and contributors
         * Licensed under the New BSD license. See LICENSE or:
         * http://opensource.org/licenses/BSD-3-Clause
         */
        // It turns out that some (most?) JavaScript engines don't self-host
        // `Array.prototype.sort`. This makes sense because C++ will likely remain
        // faster than JS when doing raw CPU-intensive sorting. However, when using a
        // custom comparator function, calling back and forth between the VM's C++ and
        // JIT'd JS is rather slow *and* loses JIT type information, resulting in
        // worse generated code for the comparator function than would be optimal. In
        // fact, when sorting with a comparator, these costs outweigh the benefits of
        // sorting in C++. By using our own JS-implemented Quick Sort (below), we get
        // a ~3500ms mean speed-up in `bench/bench.html`.

        /**
         * Swap the elements indexed by `x` and `y` in the array `ary`.
         *
         * @param {Array} ary
         *        The array.
         * @param {Number} x
         *        The index of the first item.
         * @param {Number} y
         *        The index of the second item.
         */
        function swap(ary, x, y) {
          var temp = ary[x];
          ary[x] = ary[y];
          ary[y] = temp;
        }
        /**
         * Returns a random integer within the range `low .. high` inclusive.
         *
         * @param {Number} low
         *        The lower bound on the range.
         * @param {Number} high
         *        The upper bound on the range.
         */

        function randomIntInRange(low, high) {
          return Math.round(low + Math.random() * (high - low));
        }
        /**
         * The Quick Sort algorithm.
         *
         * @param {Array} ary
         *        An array to sort.
         * @param {function} comparator
         *        Function to use to compare two items.
         * @param {Number} p
         *        Start index of the array
         * @param {Number} r
         *        End index of the array
         */

        function doQuickSort(ary, comparator, p, r) {
          // If our lower bound is less than our upper bound, we (1) partition the
          // array into two pieces and (2) recurse on each half. If it is not, this is
          // the empty array and our base case.
          if (p < r) {
            // (1) Partitioning.
            //
            // The partitioning chooses a pivot between `p` and `r` and moves all
            // elements that are less than or equal to the pivot to the before it, and
            // all the elements that are greater than it after it. The effect is that
            // once partition is done, the pivot is in the exact place it will be when
            // the array is put in sorted order, and it will not need to be moved
            // again. This runs in O(n) time.
            // Always choose a random pivot so that an input array which is reverse
            // sorted does not cause O(n^2) running time.
            var pivotIndex = randomIntInRange(p, r);
            var i = p - 1;
            swap(ary, pivotIndex, r);
            var pivot = ary[r]; // Immediately after `j` is incremented in this loop, the following hold
            // true:
            //
            //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
            //
            //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.

            for (var j = p; j < r; j++) {
              if (comparator(ary[j], pivot) <= 0) {
                i += 1;
                swap(ary, i, j);
              }
            }

            swap(ary, i + 1, j);
            var q = i + 1; // (2) Recurse on each half.

            doQuickSort(ary, comparator, p, q - 1);
            doQuickSort(ary, comparator, q + 1, r);
          }
        }
        /**
         * Sort the given array in-place with the given comparator function.
         *
         * @param {Array} ary
         *        An array to sort.
         * @param {function} comparator
         *        Function to use to compare two items.
         */

        exports.quickSort = function (ary, comparator) {
          doQuickSort(ary, comparator, 0, ary.length - 1);
        };
      },
      {},
    ],
    "node_modules/source-map/lib/source-map-consumer.js": [
      function (require, module, exports) {
        /* -*- Mode: js; js-indent-level: 2; -*- */

        /*
         * Copyright 2011 Mozilla Foundation and contributors
         * Licensed under the New BSD license. See LICENSE or:
         * http://opensource.org/licenses/BSD-3-Clause
         */
        var util = require("./util");

        var binarySearch = require("./binary-search");

        var ArraySet = require("./array-set").ArraySet;

        var base64VLQ = require("./base64-vlq");

        var quickSort = require("./quick-sort").quickSort;

        function SourceMapConsumer(aSourceMap, aSourceMapURL) {
          var sourceMap = aSourceMap;

          if (typeof aSourceMap === "string") {
            sourceMap = util.parseSourceMapInput(aSourceMap);
          }

          return sourceMap.sections != null
            ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
            : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
        }

        SourceMapConsumer.fromSourceMap = function (aSourceMap, aSourceMapURL) {
          return BasicSourceMapConsumer.fromSourceMap(
            aSourceMap,
            aSourceMapURL
          );
        };
        /**
         * The version of the source mapping spec that we are consuming.
         */

        SourceMapConsumer.prototype._version = 3; // `__generatedMappings` and `__originalMappings` are arrays that hold the
        // parsed mapping coordinates from the source map's "mappings" attribute. They
        // are lazily instantiated, accessed via the `_generatedMappings` and
        // `_originalMappings` getters respectively, and we only parse the mappings
        // and create these arrays once queried for a source location. We jump through
        // these hoops because there can be many thousands of mappings, and parsing
        // them is expensive, so we only want to do it if we must.
        //
        // Each object in the arrays is of the form:
        //
        //     {
        //       generatedLine: The line number in the generated code,
        //       generatedColumn: The column number in the generated code,
        //       source: The path to the original source file that generated this
        //               chunk of code,
        //       originalLine: The line number in the original source that
        //                     corresponds to this chunk of generated code,
        //       originalColumn: The column number in the original source that
        //                       corresponds to this chunk of generated code,
        //       name: The name of the original symbol which generated this chunk of
        //             code.
        //     }
        //
        // All properties except for `generatedLine` and `generatedColumn` can be
        // `null`.
        //
        // `_generatedMappings` is ordered by the generated positions.
        //
        // `_originalMappings` is ordered by the original positions.

        SourceMapConsumer.prototype.__generatedMappings = null;
        Object.defineProperty(
          SourceMapConsumer.prototype,
          "_generatedMappings",
          {
            configurable: true,
            enumerable: true,
            get: function () {
              if (!this.__generatedMappings) {
                this._parseMappings(this._mappings, this.sourceRoot);
              }

              return this.__generatedMappings;
            },
          }
        );
        SourceMapConsumer.prototype.__originalMappings = null;
        Object.defineProperty(
          SourceMapConsumer.prototype,
          "_originalMappings",
          {
            configurable: true,
            enumerable: true,
            get: function () {
              if (!this.__originalMappings) {
                this._parseMappings(this._mappings, this.sourceRoot);
              }

              return this.__originalMappings;
            },
          }
        );

        SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(
          aStr,
          index
        ) {
          var c = aStr.charAt(index);
          return c === ";" || c === ",";
        };
        /**
         * Parse the mappings in a string in to a data structure which we can easily
         * query (the ordered arrays in the `this.__generatedMappings` and
         * `this.__originalMappings` properties).
         */

        SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(
          aStr,
          aSourceRoot
        ) {
          throw new Error("Subclasses must implement _parseMappings");
        };

        SourceMapConsumer.GENERATED_ORDER = 1;
        SourceMapConsumer.ORIGINAL_ORDER = 2;
        SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
        SourceMapConsumer.LEAST_UPPER_BOUND = 2;
        /**
         * Iterate over each mapping between an original source/line/column and a
         * generated line/column in this source map.
         *
         * @param Function aCallback
         *        The function that is called with each mapping.
         * @param Object aContext
         *        Optional. If specified, this object will be the value of `this` every
         *        time that `aCallback` is called.
         * @param aOrder
         *        Either `SourceMapConsumer.GENERATED_ORDER` or
         *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
         *        iterate over the mappings sorted by the generated file's line/column
         *        order or the original's source/line/column order, respectively. Defaults to
         *        `SourceMapConsumer.GENERATED_ORDER`.
         */

        SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(
          aCallback,
          aContext,
          aOrder
        ) {
          var context = aContext || null;
          var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
          var mappings;

          switch (order) {
            case SourceMapConsumer.GENERATED_ORDER:
              mappings = this._generatedMappings;
              break;

            case SourceMapConsumer.ORIGINAL_ORDER:
              mappings = this._originalMappings;
              break;

            default:
              throw new Error("Unknown order of iteration.");
          }

          var sourceRoot = this.sourceRoot;
          mappings
            .map(function (mapping) {
              var source =
                mapping.source === null
                  ? null
                  : this._sources.at(mapping.source);
              source = util.computeSourceURL(
                sourceRoot,
                source,
                this._sourceMapURL
              );
              return {
                source: source,
                generatedLine: mapping.generatedLine,
                generatedColumn: mapping.generatedColumn,
                originalLine: mapping.originalLine,
                originalColumn: mapping.originalColumn,
                name:
                  mapping.name === null ? null : this._names.at(mapping.name),
              };
            }, this)
            .forEach(aCallback, context);
        };
        /**
         * Returns all generated line and column information for the original source,
         * line, and column provided. If no column is provided, returns all mappings
         * corresponding to a either the line we are searching for or the next
         * closest line that has any mappings. Otherwise, returns all mappings
         * corresponding to the given line and either the column we are searching for
         * or the next closest column that has any offsets.
         *
         * The only argument is an object with the following properties:
         *
         *   - source: The filename of the original source.
         *   - line: The line number in the original source.  The line number is 1-based.
         *   - column: Optional. the column number in the original source.
         *    The column number is 0-based.
         *
         * and an array of objects is returned, each with the following properties:
         *
         *   - line: The line number in the generated source, or null.  The
         *    line number is 1-based.
         *   - column: The column number in the generated source, or null.
         *    The column number is 0-based.
         */

        SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(
          aArgs
        ) {
          var line = util.getArg(aArgs, "line"); // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
          // returns the index of the closest mapping less than the needle. By
          // setting needle.originalColumn to 0, we thus find the last mapping for
          // the given line, provided such a mapping exists.

          var needle = {
            source: util.getArg(aArgs, "source"),
            originalLine: line,
            originalColumn: util.getArg(aArgs, "column", 0),
          };
          needle.source = this._findSourceIndex(needle.source);

          if (needle.source < 0) {
            return [];
          }

          var mappings = [];

          var index = this._findMapping(
            needle,
            this._originalMappings,
            "originalLine",
            "originalColumn",
            util.compareByOriginalPositions,
            binarySearch.LEAST_UPPER_BOUND
          );

          if (index >= 0) {
            var mapping = this._originalMappings[index];

            if (aArgs.column === undefined) {
              var originalLine = mapping.originalLine; // Iterate until either we run out of mappings, or we run into
              // a mapping for a different line than the one we found. Since
              // mappings are sorted, this is guaranteed to find all mappings for
              // the line we found.

              while (mapping && mapping.originalLine === originalLine) {
                mappings.push({
                  line: util.getArg(mapping, "generatedLine", null),
                  column: util.getArg(mapping, "generatedColumn", null),
                  lastColumn: util.getArg(mapping, "lastGeneratedColumn", null),
                });
                mapping = this._originalMappings[++index];
              }
            } else {
              var originalColumn = mapping.originalColumn; // Iterate until either we run out of mappings, or we run into
              // a mapping for a different line than the one we were searching for.
              // Since mappings are sorted, this is guaranteed to find all mappings for
              // the line we are searching for.

              while (
                mapping &&
                mapping.originalLine === line &&
                mapping.originalColumn == originalColumn
              ) {
                mappings.push({
                  line: util.getArg(mapping, "generatedLine", null),
                  column: util.getArg(mapping, "generatedColumn", null),
                  lastColumn: util.getArg(mapping, "lastGeneratedColumn", null),
                });
                mapping = this._originalMappings[++index];
              }
            }
          }

          return mappings;
        };

        exports.SourceMapConsumer = SourceMapConsumer;
        /**
         * A BasicSourceMapConsumer instance represents a parsed source map which we can
         * query for information about the original file positions by giving it a file
         * position in the generated source.
         *
         * The first parameter is the raw source map (either as a JSON string, or
         * already parsed to an object). According to the spec, source maps have the
         * following attributes:
         *
         *   - version: Which version of the source map spec this map is following.
         *   - sources: An array of URLs to the original source files.
         *   - names: An array of identifiers which can be referrenced by individual mappings.
         *   - sourceRoot: Optional. The URL root from which all sources are relative.
         *   - sourcesContent: Optional. An array of contents of the original source files.
         *   - mappings: A string of base64 VLQs which contain the actual mappings.
         *   - file: Optional. The generated file this source map is associated with.
         *
         * Here is an example source map, taken from the source map spec[0]:
         *
         *     {
         *       version : 3,
         *       file: "out.js",
         *       sourceRoot : "",
         *       sources: ["foo.js", "bar.js"],
         *       names: ["src", "maps", "are", "fun"],
         *       mappings: "AA,AB;;ABCDE;"
         *     }
         *
         * The second parameter, if given, is a string whose value is the URL
         * at which the source map was found.  This URL is used to compute the
         * sources array.
         *
         * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
         */

        function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
          var sourceMap = aSourceMap;

          if (typeof aSourceMap === "string") {
            sourceMap = util.parseSourceMapInput(aSourceMap);
          }

          var version = util.getArg(sourceMap, "version");
          var sources = util.getArg(sourceMap, "sources"); // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
          // requires the array) to play nice here.

          var names = util.getArg(sourceMap, "names", []);
          var sourceRoot = util.getArg(sourceMap, "sourceRoot", null);
          var sourcesContent = util.getArg(sourceMap, "sourcesContent", null);
          var mappings = util.getArg(sourceMap, "mappings");
          var file = util.getArg(sourceMap, "file", null); // Once again, Sass deviates from the spec and supplies the version as a
          // string rather than a number, so we use loose equality checking here.

          if (version != this._version) {
            throw new Error("Unsupported version: " + version);
          }

          if (sourceRoot) {
            sourceRoot = util.normalize(sourceRoot);
          }

          sources = sources
            .map(String) // Some source maps produce relative source paths like "./foo.js" instead of
            // "foo.js".  Normalize these first so that future comparisons will succeed.
            // See bugzil.la/1090768.
            .map(util.normalize) // Always ensure that absolute sources are internally stored relative to
            // the source root, if the source root is absolute. Not doing this would
            // be particularly problematic when the source root is a prefix of the
            // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
            .map(function (source) {
              return sourceRoot &&
                util.isAbsolute(sourceRoot) &&
                util.isAbsolute(source)
                ? util.relative(sourceRoot, source)
                : source;
            }); // Pass `true` below to allow duplicate names and sources. While source maps
          // are intended to be compressed and deduplicated, the TypeScript compiler
          // sometimes generates source maps with duplicates in them. See Github issue
          // #72 and bugzil.la/889492.

          this._names = ArraySet.fromArray(names.map(String), true);
          this._sources = ArraySet.fromArray(sources, true);
          this._absoluteSources = this._sources.toArray().map(function (s) {
            return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
          });
          this.sourceRoot = sourceRoot;
          this.sourcesContent = sourcesContent;
          this._mappings = mappings;
          this._sourceMapURL = aSourceMapURL;
          this.file = file;
        }

        BasicSourceMapConsumer.prototype = Object.create(
          SourceMapConsumer.prototype
        );
        BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
        /**
         * Utility function to find the index of a source.  Returns -1 if not
         * found.
         */

        BasicSourceMapConsumer.prototype._findSourceIndex = function (aSource) {
          var relativeSource = aSource;

          if (this.sourceRoot != null) {
            relativeSource = util.relative(this.sourceRoot, relativeSource);
          }

          if (this._sources.has(relativeSource)) {
            return this._sources.indexOf(relativeSource);
          } // Maybe aSource is an absolute URL as returned by |sources|.  In
          // this case we can't simply undo the transform.

          var i;

          for (i = 0; i < this._absoluteSources.length; ++i) {
            if (this._absoluteSources[i] == aSource) {
              return i;
            }
          }

          return -1;
        };
        /**
         * Create a BasicSourceMapConsumer from a SourceMapGenerator.
         *
         * @param SourceMapGenerator aSourceMap
         *        The source map that will be consumed.
         * @param String aSourceMapURL
         *        The URL at which the source map can be found (optional)
         * @returns BasicSourceMapConsumer
         */

        BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(
          aSourceMap,
          aSourceMapURL
        ) {
          var smc = Object.create(BasicSourceMapConsumer.prototype);
          var names = (smc._names = ArraySet.fromArray(
            aSourceMap._names.toArray(),
            true
          ));
          var sources = (smc._sources = ArraySet.fromArray(
            aSourceMap._sources.toArray(),
            true
          ));
          smc.sourceRoot = aSourceMap._sourceRoot;
          smc.sourcesContent = aSourceMap._generateSourcesContent(
            smc._sources.toArray(),
            smc.sourceRoot
          );
          smc.file = aSourceMap._file;
          smc._sourceMapURL = aSourceMapURL;
          smc._absoluteSources = smc._sources.toArray().map(function (s) {
            return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
          }); // Because we are modifying the entries (by converting string sources and
          // names to indices into the sources and names ArraySets), we have to make
          // a copy of the entry or else bad things happen. Shared mutable state
          // strikes again! See github issue #191.

          var generatedMappings = aSourceMap._mappings.toArray().slice();

          var destGeneratedMappings = (smc.__generatedMappings = []);
          var destOriginalMappings = (smc.__originalMappings = []);

          for (var i = 0, length = generatedMappings.length; i < length; i++) {
            var srcMapping = generatedMappings[i];
            var destMapping = new Mapping();
            destMapping.generatedLine = srcMapping.generatedLine;
            destMapping.generatedColumn = srcMapping.generatedColumn;

            if (srcMapping.source) {
              destMapping.source = sources.indexOf(srcMapping.source);
              destMapping.originalLine = srcMapping.originalLine;
              destMapping.originalColumn = srcMapping.originalColumn;

              if (srcMapping.name) {
                destMapping.name = names.indexOf(srcMapping.name);
              }

              destOriginalMappings.push(destMapping);
            }

            destGeneratedMappings.push(destMapping);
          }

          quickSort(smc.__originalMappings, util.compareByOriginalPositions);
          return smc;
        };
        /**
         * The version of the source mapping spec that we are consuming.
         */

        BasicSourceMapConsumer.prototype._version = 3;
        /**
         * The list of original sources.
         */

        Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
          get: function () {
            return this._absoluteSources.slice();
          },
        });
        /**
         * Provide the JIT with a nice shape / hidden class.
         */

        function Mapping() {
          this.generatedLine = 0;
          this.generatedColumn = 0;
          this.source = null;
          this.originalLine = null;
          this.originalColumn = null;
          this.name = null;
        }
        /**
         * Parse the mappings in a string in to a data structure which we can easily
         * query (the ordered arrays in the `this.__generatedMappings` and
         * `this.__originalMappings` properties).
         */

        BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(
          aStr,
          aSourceRoot
        ) {
          var generatedLine = 1;
          var previousGeneratedColumn = 0;
          var previousOriginalLine = 0;
          var previousOriginalColumn = 0;
          var previousSource = 0;
          var previousName = 0;
          var length = aStr.length;
          var index = 0;
          var cachedSegments = {};
          var temp = {};
          var originalMappings = [];
          var generatedMappings = [];
          var mapping, str, segment, end, value;

          while (index < length) {
            if (aStr.charAt(index) === ";") {
              generatedLine++;
              index++;
              previousGeneratedColumn = 0;
            } else if (aStr.charAt(index) === ",") {
              index++;
            } else {
              mapping = new Mapping();
              mapping.generatedLine = generatedLine; // Because each offset is encoded relative to the previous one,
              // many segments often have the same encoding. We can exploit this
              // fact by caching the parsed variable length fields of each segment,
              // allowing us to avoid a second parse if we encounter the same
              // segment again.

              for (end = index; end < length; end++) {
                if (this._charIsMappingSeparator(aStr, end)) {
                  break;
                }
              }

              str = aStr.slice(index, end);
              segment = cachedSegments[str];

              if (segment) {
                index += str.length;
              } else {
                segment = [];

                while (index < end) {
                  base64VLQ.decode(aStr, index, temp);
                  value = temp.value;
                  index = temp.rest;
                  segment.push(value);
                }

                if (segment.length === 2) {
                  throw new Error("Found a source, but no line and column");
                }

                if (segment.length === 3) {
                  throw new Error("Found a source and line, but no column");
                }

                cachedSegments[str] = segment;
              } // Generated column.

              mapping.generatedColumn = previousGeneratedColumn + segment[0];
              previousGeneratedColumn = mapping.generatedColumn;

              if (segment.length > 1) {
                // Original source.
                mapping.source = previousSource + segment[1];
                previousSource += segment[1]; // Original line.

                mapping.originalLine = previousOriginalLine + segment[2];
                previousOriginalLine = mapping.originalLine; // Lines are stored 0-based

                mapping.originalLine += 1; // Original column.

                mapping.originalColumn = previousOriginalColumn + segment[3];
                previousOriginalColumn = mapping.originalColumn;

                if (segment.length > 4) {
                  // Original name.
                  mapping.name = previousName + segment[4];
                  previousName += segment[4];
                }
              }

              generatedMappings.push(mapping);

              if (typeof mapping.originalLine === "number") {
                originalMappings.push(mapping);
              }
            }
          }

          quickSort(
            generatedMappings,
            util.compareByGeneratedPositionsDeflated
          );
          this.__generatedMappings = generatedMappings;
          quickSort(originalMappings, util.compareByOriginalPositions);
          this.__originalMappings = originalMappings;
        };
        /**
         * Find the mapping that best matches the hypothetical "needle" mapping that
         * we are searching for in the given "haystack" of mappings.
         */

        BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(
          aNeedle,
          aMappings,
          aLineName,
          aColumnName,
          aComparator,
          aBias
        ) {
          // To return the position we are searching for, we must first find the
          // mapping for the given position and then return the opposite position it
          // points to. Because the mappings are sorted, we can use binary search to
          // find the best mapping.
          if (aNeedle[aLineName] <= 0) {
            throw new TypeError(
              "Line must be greater than or equal to 1, got " +
                aNeedle[aLineName]
            );
          }

          if (aNeedle[aColumnName] < 0) {
            throw new TypeError(
              "Column must be greater than or equal to 0, got " +
                aNeedle[aColumnName]
            );
          }

          return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
        };
        /**
         * Compute the last column for each generated mapping. The last column is
         * inclusive.
         */

        BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
          for (var index = 0; index < this._generatedMappings.length; ++index) {
            var mapping = this._generatedMappings[index]; // Mappings do not contain a field for the last generated columnt. We
            // can come up with an optimistic estimate, however, by assuming that
            // mappings are contiguous (i.e. given two consecutive mappings, the
            // first mapping ends where the second one starts).

            if (index + 1 < this._generatedMappings.length) {
              var nextMapping = this._generatedMappings[index + 1];

              if (mapping.generatedLine === nextMapping.generatedLine) {
                mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
                continue;
              }
            } // The last mapping for each line spans the entire line.

            mapping.lastGeneratedColumn = Infinity;
          }
        };
        /**
         * Returns the original source, line, and column information for the generated
         * source's line and column positions provided. The only argument is an object
         * with the following properties:
         *
         *   - line: The line number in the generated source.  The line number
         *     is 1-based.
         *   - column: The column number in the generated source.  The column
         *     number is 0-based.
         *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
         *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
         *     closest element that is smaller than or greater than the one we are
         *     searching for, respectively, if the exact element cannot be found.
         *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
         *
         * and an object is returned with the following properties:
         *
         *   - source: The original source file, or null.
         *   - line: The line number in the original source, or null.  The
         *     line number is 1-based.
         *   - column: The column number in the original source, or null.  The
         *     column number is 0-based.
         *   - name: The original identifier, or null.
         */

        BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(
          aArgs
        ) {
          var needle = {
            generatedLine: util.getArg(aArgs, "line"),
            generatedColumn: util.getArg(aArgs, "column"),
          };

          var index = this._findMapping(
            needle,
            this._generatedMappings,
            "generatedLine",
            "generatedColumn",
            util.compareByGeneratedPositionsDeflated,
            util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND)
          );

          if (index >= 0) {
            var mapping = this._generatedMappings[index];

            if (mapping.generatedLine === needle.generatedLine) {
              var source = util.getArg(mapping, "source", null);

              if (source !== null) {
                source = this._sources.at(source);
                source = util.computeSourceURL(
                  this.sourceRoot,
                  source,
                  this._sourceMapURL
                );
              }

              var name = util.getArg(mapping, "name", null);

              if (name !== null) {
                name = this._names.at(name);
              }

              return {
                source: source,
                line: util.getArg(mapping, "originalLine", null),
                column: util.getArg(mapping, "originalColumn", null),
                name: name,
              };
            }
          }

          return {
            source: null,
            line: null,
            column: null,
            name: null,
          };
        };
        /**
         * Return true if we have the source content for every source in the source
         * map, false otherwise.
         */

        BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
          if (!this.sourcesContent) {
            return false;
          }

          return (
            this.sourcesContent.length >= this._sources.size() &&
            !this.sourcesContent.some(function (sc) {
              return sc == null;
            })
          );
        };
        /**
         * Returns the original source content. The only argument is the url of the
         * original source file. Returns null if no original source content is
         * available.
         */

        BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(
          aSource,
          nullOnMissing
        ) {
          if (!this.sourcesContent) {
            return null;
          }

          var index = this._findSourceIndex(aSource);

          if (index >= 0) {
            return this.sourcesContent[index];
          }

          var relativeSource = aSource;

          if (this.sourceRoot != null) {
            relativeSource = util.relative(this.sourceRoot, relativeSource);
          }

          var url;

          if (
            this.sourceRoot != null &&
            (url = util.urlParse(this.sourceRoot))
          ) {
            // XXX: file:// URIs and absolute paths lead to unexpected behavior for
            // many users. We can help them out when they expect file:// URIs to
            // behave like it would if they were running a local HTTP server. See
            // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
            var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");

            if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
              return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
            }

            if (
              (!url.path || url.path == "/") &&
              this._sources.has("/" + relativeSource)
            ) {
              return this.sourcesContent[
                this._sources.indexOf("/" + relativeSource)
              ];
            }
          } // This function is used recursively from
          // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
          // don't want to throw if we can't find the source - we just want to
          // return null, so we provide a flag to exit gracefully.

          if (nullOnMissing) {
            return null;
          } else {
            throw new Error(
              '"' + relativeSource + '" is not in the SourceMap.'
            );
          }
        };
        /**
         * Returns the generated line and column information for the original source,
         * line, and column positions provided. The only argument is an object with
         * the following properties:
         *
         *   - source: The filename of the original source.
         *   - line: The line number in the original source.  The line number
         *     is 1-based.
         *   - column: The column number in the original source.  The column
         *     number is 0-based.
         *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
         *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
         *     closest element that is smaller than or greater than the one we are
         *     searching for, respectively, if the exact element cannot be found.
         *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
         *
         * and an object is returned with the following properties:
         *
         *   - line: The line number in the generated source, or null.  The
         *     line number is 1-based.
         *   - column: The column number in the generated source, or null.
         *     The column number is 0-based.
         */

        BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(
          aArgs
        ) {
          var source = util.getArg(aArgs, "source");
          source = this._findSourceIndex(source);

          if (source < 0) {
            return {
              line: null,
              column: null,
              lastColumn: null,
            };
          }

          var needle = {
            source: source,
            originalLine: util.getArg(aArgs, "line"),
            originalColumn: util.getArg(aArgs, "column"),
          };

          var index = this._findMapping(
            needle,
            this._originalMappings,
            "originalLine",
            "originalColumn",
            util.compareByOriginalPositions,
            util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND)
          );

          if (index >= 0) {
            var mapping = this._originalMappings[index];

            if (mapping.source === needle.source) {
              return {
                line: util.getArg(mapping, "generatedLine", null),
                column: util.getArg(mapping, "generatedColumn", null),
                lastColumn: util.getArg(mapping, "lastGeneratedColumn", null),
              };
            }
          }

          return {
            line: null,
            column: null,
            lastColumn: null,
          };
        };

        exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
        /**
         * An IndexedSourceMapConsumer instance represents a parsed source map which
         * we can query for information. It differs from BasicSourceMapConsumer in
         * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
         * input.
         *
         * The first parameter is a raw source map (either as a JSON string, or already
         * parsed to an object). According to the spec for indexed source maps, they
         * have the following attributes:
         *
         *   - version: Which version of the source map spec this map is following.
         *   - file: Optional. The generated file this source map is associated with.
         *   - sections: A list of section definitions.
         *
         * Each value under the "sections" field has two fields:
         *   - offset: The offset into the original specified at which this section
         *       begins to apply, defined as an object with a "line" and "column"
         *       field.
         *   - map: A source map definition. This source map could also be indexed,
         *       but doesn't have to be.
         *
         * Instead of the "map" field, it's also possible to have a "url" field
         * specifying a URL to retrieve a source map from, but that's currently
         * unsupported.
         *
         * Here's an example source map, taken from the source map spec[0], but
         * modified to omit a section which uses the "url" field.
         *
         *  {
         *    version : 3,
         *    file: "app.js",
         *    sections: [{
         *      offset: {line:100, column:10},
         *      map: {
         *        version : 3,
         *        file: "section.js",
         *        sources: ["foo.js", "bar.js"],
         *        names: ["src", "maps", "are", "fun"],
         *        mappings: "AAAA,E;;ABCDE;"
         *      }
         *    }],
         *  }
         *
         * The second parameter, if given, is a string whose value is the URL
         * at which the source map was found.  This URL is used to compute the
         * sources array.
         *
         * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
         */

        function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
          var sourceMap = aSourceMap;

          if (typeof aSourceMap === "string") {
            sourceMap = util.parseSourceMapInput(aSourceMap);
          }

          var version = util.getArg(sourceMap, "version");
          var sections = util.getArg(sourceMap, "sections");

          if (version != this._version) {
            throw new Error("Unsupported version: " + version);
          }

          this._sources = new ArraySet();
          this._names = new ArraySet();
          var lastOffset = {
            line: -1,
            column: 0,
          };
          this._sections = sections.map(function (s) {
            if (s.url) {
              // The url field will require support for asynchronicity.
              // See https://github.com/mozilla/source-map/issues/16
              throw new Error(
                "Support for url field in sections not implemented."
              );
            }

            var offset = util.getArg(s, "offset");
            var offsetLine = util.getArg(offset, "line");
            var offsetColumn = util.getArg(offset, "column");

            if (
              offsetLine < lastOffset.line ||
              (offsetLine === lastOffset.line &&
                offsetColumn < lastOffset.column)
            ) {
              throw new Error(
                "Section offsets must be ordered and non-overlapping."
              );
            }

            lastOffset = offset;
            return {
              generatedOffset: {
                // The offset fields are 0-based, but we use 1-based indices when
                // encoding/decoding from VLQ.
                generatedLine: offsetLine + 1,
                generatedColumn: offsetColumn + 1,
              },
              consumer: new SourceMapConsumer(
                util.getArg(s, "map"),
                aSourceMapURL
              ),
            };
          });
        }

        IndexedSourceMapConsumer.prototype = Object.create(
          SourceMapConsumer.prototype
        );
        IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
        /**
         * The version of the source mapping spec that we are consuming.
         */

        IndexedSourceMapConsumer.prototype._version = 3;
        /**
         * The list of original sources.
         */

        Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
          get: function () {
            var sources = [];

            for (var i = 0; i < this._sections.length; i++) {
              for (
                var j = 0;
                j < this._sections[i].consumer.sources.length;
                j++
              ) {
                sources.push(this._sections[i].consumer.sources[j]);
              }
            }

            return sources;
          },
        });
        /**
         * Returns the original source, line, and column information for the generated
         * source's line and column positions provided. The only argument is an object
         * with the following properties:
         *
         *   - line: The line number in the generated source.  The line number
         *     is 1-based.
         *   - column: The column number in the generated source.  The column
         *     number is 0-based.
         *
         * and an object is returned with the following properties:
         *
         *   - source: The original source file, or null.
         *   - line: The line number in the original source, or null.  The
         *     line number is 1-based.
         *   - column: The column number in the original source, or null.  The
         *     column number is 0-based.
         *   - name: The original identifier, or null.
         */

        IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(
          aArgs
        ) {
          var needle = {
            generatedLine: util.getArg(aArgs, "line"),
            generatedColumn: util.getArg(aArgs, "column"),
          }; // Find the section containing the generated position we're trying to map
          // to an original position.

          var sectionIndex = binarySearch.search(
            needle,
            this._sections,
            function (needle, section) {
              var cmp =
                needle.generatedLine - section.generatedOffset.generatedLine;

              if (cmp) {
                return cmp;
              }

              return (
                needle.generatedColumn - section.generatedOffset.generatedColumn
              );
            }
          );
          var section = this._sections[sectionIndex];

          if (!section) {
            return {
              source: null,
              line: null,
              column: null,
              name: null,
            };
          }

          return section.consumer.originalPositionFor({
            line:
              needle.generatedLine -
              (section.generatedOffset.generatedLine - 1),
            column:
              needle.generatedColumn -
              (section.generatedOffset.generatedLine === needle.generatedLine
                ? section.generatedOffset.generatedColumn - 1
                : 0),
            bias: aArgs.bias,
          });
        };
        /**
         * Return true if we have the source content for every source in the source
         * map, false otherwise.
         */

        IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
          return this._sections.every(function (s) {
            return s.consumer.hasContentsOfAllSources();
          });
        };
        /**
         * Returns the original source content. The only argument is the url of the
         * original source file. Returns null if no original source content is
         * available.
         */

        IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(
          aSource,
          nullOnMissing
        ) {
          for (var i = 0; i < this._sections.length; i++) {
            var section = this._sections[i];
            var content = section.consumer.sourceContentFor(aSource, true);

            if (content) {
              return content;
            }
          }

          if (nullOnMissing) {
            return null;
          } else {
            throw new Error('"' + aSource + '" is not in the SourceMap.');
          }
        };
        /**
         * Returns the generated line and column information for the original source,
         * line, and column positions provided. The only argument is an object with
         * the following properties:
         *
         *   - source: The filename of the original source.
         *   - line: The line number in the original source.  The line number
         *     is 1-based.
         *   - column: The column number in the original source.  The column
         *     number is 0-based.
         *
         * and an object is returned with the following properties:
         *
         *   - line: The line number in the generated source, or null.  The
         *     line number is 1-based.
         *   - column: The column number in the generated source, or null.
         *     The column number is 0-based.
         */

        IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(
          aArgs
        ) {
          for (var i = 0; i < this._sections.length; i++) {
            var section = this._sections[i]; // Only consider this section if the requested source is in the list of
            // sources of the consumer.

            if (
              section.consumer._findSourceIndex(
                util.getArg(aArgs, "source")
              ) === -1
            ) {
              continue;
            }

            var generatedPosition = section.consumer.generatedPositionFor(
              aArgs
            );

            if (generatedPosition) {
              var ret = {
                line:
                  generatedPosition.line +
                  (section.generatedOffset.generatedLine - 1),
                column:
                  generatedPosition.column +
                  (section.generatedOffset.generatedLine ===
                  generatedPosition.line
                    ? section.generatedOffset.generatedColumn - 1
                    : 0),
              };
              return ret;
            }
          }

          return {
            line: null,
            column: null,
          };
        };
        /**
         * Parse the mappings in a string in to a data structure which we can easily
         * query (the ordered arrays in the `this.__generatedMappings` and
         * `this.__originalMappings` properties).
         */

        IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(
          aStr,
          aSourceRoot
        ) {
          this.__generatedMappings = [];
          this.__originalMappings = [];

          for (var i = 0; i < this._sections.length; i++) {
            var section = this._sections[i];
            var sectionMappings = section.consumer._generatedMappings;

            for (var j = 0; j < sectionMappings.length; j++) {
              var mapping = sectionMappings[j];

              var source = section.consumer._sources.at(mapping.source);

              source = util.computeSourceURL(
                section.consumer.sourceRoot,
                source,
                this._sourceMapURL
              );

              this._sources.add(source);

              source = this._sources.indexOf(source);
              var name = null;

              if (mapping.name) {
                name = section.consumer._names.at(mapping.name);

                this._names.add(name);

                name = this._names.indexOf(name);
              } // The mappings coming from the consumer for the section have
              // generated positions relative to the start of the section, so we
              // need to offset them to be relative to the start of the concatenated
              // generated file.

              var adjustedMapping = {
                source: source,
                generatedLine:
                  mapping.generatedLine +
                  (section.generatedOffset.generatedLine - 1),
                generatedColumn:
                  mapping.generatedColumn +
                  (section.generatedOffset.generatedLine ===
                  mapping.generatedLine
                    ? section.generatedOffset.generatedColumn - 1
                    : 0),
                originalLine: mapping.originalLine,
                originalColumn: mapping.originalColumn,
                name: name,
              };

              this.__generatedMappings.push(adjustedMapping);

              if (typeof adjustedMapping.originalLine === "number") {
                this.__originalMappings.push(adjustedMapping);
              }
            }
          }

          quickSort(
            this.__generatedMappings,
            util.compareByGeneratedPositionsDeflated
          );
          quickSort(this.__originalMappings, util.compareByOriginalPositions);
        };

        exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
      },
      {
        "./util": "node_modules/source-map/lib/util.js",
        "./binary-search": "node_modules/source-map/lib/binary-search.js",
        "./array-set": "node_modules/source-map/lib/array-set.js",
        "./base64-vlq": "node_modules/source-map/lib/base64-vlq.js",
        "./quick-sort": "node_modules/source-map/lib/quick-sort.js",
      },
    ],
    "node_modules/source-map/lib/source-node.js": [
      function (require, module, exports) {
        /* -*- Mode: js; js-indent-level: 2; -*- */

        /*
         * Copyright 2011 Mozilla Foundation and contributors
         * Licensed under the New BSD license. See LICENSE or:
         * http://opensource.org/licenses/BSD-3-Clause
         */
        var SourceMapGenerator = require("./source-map-generator")
          .SourceMapGenerator;

        var util = require("./util"); // Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
        // operating systems these days (capturing the result).

        var REGEX_NEWLINE = /(\r?\n)/; // Newline character code for charCodeAt() comparisons

        var NEWLINE_CODE = 10; // Private symbol for identifying `SourceNode`s when multiple versions of
        // the source-map library are loaded. This MUST NOT CHANGE across
        // versions!

        var isSourceNode = "$$$isSourceNode$$$";
        /**
         * SourceNodes provide a way to abstract over interpolating/concatenating
         * snippets of generated JavaScript source code while maintaining the line and
         * column information associated with the original source code.
         *
         * @param aLine The original line number.
         * @param aColumn The original column number.
         * @param aSource The original source's filename.
         * @param aChunks Optional. An array of strings which are snippets of
         *        generated JS, or other SourceNodes.
         * @param aName The original identifier.
         */

        function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
          this.children = [];
          this.sourceContents = {};
          this.line = aLine == null ? null : aLine;
          this.column = aColumn == null ? null : aColumn;
          this.source = aSource == null ? null : aSource;
          this.name = aName == null ? null : aName;
          this[isSourceNode] = true;
          if (aChunks != null) this.add(aChunks);
        }
        /**
         * Creates a SourceNode from generated code and a SourceMapConsumer.
         *
         * @param aGeneratedCode The generated code
         * @param aSourceMapConsumer The SourceMap for the generated code
         * @param aRelativePath Optional. The path that relative sources in the
         *        SourceMapConsumer should be relative to.
         */

        SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(
          aGeneratedCode,
          aSourceMapConsumer,
          aRelativePath
        ) {
          // The SourceNode we want to fill with the generated code
          // and the SourceMap
          var node = new SourceNode(); // All even indices of this array are one line of the generated code,
          // while all odd indices are the newlines between two adjacent lines
          // (since `REGEX_NEWLINE` captures its match).
          // Processed fragments are accessed by calling `shiftNextLine`.

          var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
          var remainingLinesIndex = 0;

          var shiftNextLine = function () {
            var lineContents = getNextLine(); // The last line of a file might not have a newline.

            var newLine = getNextLine() || "";
            return lineContents + newLine;

            function getNextLine() {
              return remainingLinesIndex < remainingLines.length
                ? remainingLines[remainingLinesIndex++]
                : undefined;
            }
          }; // We need to remember the position of "remainingLines"

          var lastGeneratedLine = 1,
            lastGeneratedColumn = 0; // The generate SourceNodes we need a code range.
          // To extract it current and last mapping is used.
          // Here we store the last mapping.

          var lastMapping = null;
          aSourceMapConsumer.eachMapping(function (mapping) {
            if (lastMapping !== null) {
              // We add the code from "lastMapping" to "mapping":
              // First check if there is a new line in between.
              if (lastGeneratedLine < mapping.generatedLine) {
                // Associate first line with "lastMapping"
                addMappingWithCode(lastMapping, shiftNextLine());
                lastGeneratedLine++;
                lastGeneratedColumn = 0; // The remaining code is added without mapping
              } else {
                // There is no new line in between.
                // Associate the code between "lastGeneratedColumn" and
                // "mapping.generatedColumn" with "lastMapping"
                var nextLine = remainingLines[remainingLinesIndex] || "";
                var code = nextLine.substr(
                  0,
                  mapping.generatedColumn - lastGeneratedColumn
                );
                remainingLines[remainingLinesIndex] = nextLine.substr(
                  mapping.generatedColumn - lastGeneratedColumn
                );
                lastGeneratedColumn = mapping.generatedColumn;
                addMappingWithCode(lastMapping, code); // No more remaining code, continue

                lastMapping = mapping;
                return;
              }
            } // We add the generated code until the first mapping
            // to the SourceNode without any mapping.
            // Each line is added as separate string.

            while (lastGeneratedLine < mapping.generatedLine) {
              node.add(shiftNextLine());
              lastGeneratedLine++;
            }

            if (lastGeneratedColumn < mapping.generatedColumn) {
              var nextLine = remainingLines[remainingLinesIndex] || "";
              node.add(nextLine.substr(0, mapping.generatedColumn));
              remainingLines[remainingLinesIndex] = nextLine.substr(
                mapping.generatedColumn
              );
              lastGeneratedColumn = mapping.generatedColumn;
            }

            lastMapping = mapping;
          }, this); // We have processed all mappings.

          if (remainingLinesIndex < remainingLines.length) {
            if (lastMapping) {
              // Associate the remaining code in the current line with "lastMapping"
              addMappingWithCode(lastMapping, shiftNextLine());
            } // and add the remaining lines without any mapping

            node.add(remainingLines.splice(remainingLinesIndex).join(""));
          } // Copy sourcesContent into SourceNode

          aSourceMapConsumer.sources.forEach(function (sourceFile) {
            var content = aSourceMapConsumer.sourceContentFor(sourceFile);

            if (content != null) {
              if (aRelativePath != null) {
                sourceFile = util.join(aRelativePath, sourceFile);
              }

              node.setSourceContent(sourceFile, content);
            }
          });
          return node;

          function addMappingWithCode(mapping, code) {
            if (mapping === null || mapping.source === undefined) {
              node.add(code);
            } else {
              var source = aRelativePath
                ? util.join(aRelativePath, mapping.source)
                : mapping.source;
              node.add(
                new SourceNode(
                  mapping.originalLine,
                  mapping.originalColumn,
                  source,
                  code,
                  mapping.name
                )
              );
            }
          }
        };
        /**
         * Add a chunk of generated JS to this source node.
         *
         * @param aChunk A string snippet of generated JS code, another instance of
         *        SourceNode, or an array where each member is one of those things.
         */

        SourceNode.prototype.add = function SourceNode_add(aChunk) {
          if (Array.isArray(aChunk)) {
            aChunk.forEach(function (chunk) {
              this.add(chunk);
            }, this);
          } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
            if (aChunk) {
              this.children.push(aChunk);
            }
          } else {
            throw new TypeError(
              "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " +
                aChunk
            );
          }

          return this;
        };
        /**
         * Add a chunk of generated JS to the beginning of this source node.
         *
         * @param aChunk A string snippet of generated JS code, another instance of
         *        SourceNode, or an array where each member is one of those things.
         */

        SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
          if (Array.isArray(aChunk)) {
            for (var i = aChunk.length - 1; i >= 0; i--) {
              this.prepend(aChunk[i]);
            }
          } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
            this.children.unshift(aChunk);
          } else {
            throw new TypeError(
              "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " +
                aChunk
            );
          }

          return this;
        };
        /**
         * Walk over the tree of JS snippets in this node and its children. The
         * walking function is called once for each snippet of JS and is passed that
         * snippet and the its original associated source's line/column location.
         *
         * @param aFn The traversal function.
         */

        SourceNode.prototype.walk = function SourceNode_walk(aFn) {
          var chunk;

          for (var i = 0, len = this.children.length; i < len; i++) {
            chunk = this.children[i];

            if (chunk[isSourceNode]) {
              chunk.walk(aFn);
            } else {
              if (chunk !== "") {
                aFn(chunk, {
                  source: this.source,
                  line: this.line,
                  column: this.column,
                  name: this.name,
                });
              }
            }
          }
        };
        /**
         * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
         * each of `this.children`.
         *
         * @param aSep The separator.
         */

        SourceNode.prototype.join = function SourceNode_join(aSep) {
          var newChildren;
          var i;
          var len = this.children.length;

          if (len > 0) {
            newChildren = [];

            for (i = 0; i < len - 1; i++) {
              newChildren.push(this.children[i]);
              newChildren.push(aSep);
            }

            newChildren.push(this.children[i]);
            this.children = newChildren;
          }

          return this;
        };
        /**
         * Call String.prototype.replace on the very right-most source snippet. Useful
         * for trimming whitespace from the end of a source node, etc.
         *
         * @param aPattern The pattern to replace.
         * @param aReplacement The thing to replace the pattern with.
         */

        SourceNode.prototype.replaceRight = function SourceNode_replaceRight(
          aPattern,
          aReplacement
        ) {
          var lastChild = this.children[this.children.length - 1];

          if (lastChild[isSourceNode]) {
            lastChild.replaceRight(aPattern, aReplacement);
          } else if (typeof lastChild === "string") {
            this.children[this.children.length - 1] = lastChild.replace(
              aPattern,
              aReplacement
            );
          } else {
            this.children.push("".replace(aPattern, aReplacement));
          }

          return this;
        };
        /**
         * Set the source content for a source file. This will be added to the SourceMapGenerator
         * in the sourcesContent field.
         *
         * @param aSourceFile The filename of the source file
         * @param aSourceContent The content of the source file
         */

        SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(
          aSourceFile,
          aSourceContent
        ) {
          this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
        };
        /**
         * Walk over the tree of SourceNodes. The walking function is called for each
         * source file content and is passed the filename and source content.
         *
         * @param aFn The traversal function.
         */

        SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(
          aFn
        ) {
          for (var i = 0, len = this.children.length; i < len; i++) {
            if (this.children[i][isSourceNode]) {
              this.children[i].walkSourceContents(aFn);
            }
          }

          var sources = Object.keys(this.sourceContents);

          for (var i = 0, len = sources.length; i < len; i++) {
            aFn(
              util.fromSetString(sources[i]),
              this.sourceContents[sources[i]]
            );
          }
        };
        /**
         * Return the string representation of this source node. Walks over the tree
         * and concatenates all the various snippets together to one string.
         */

        SourceNode.prototype.toString = function SourceNode_toString() {
          var str = "";
          this.walk(function (chunk) {
            str += chunk;
          });
          return str;
        };
        /**
         * Returns the string representation of this source node along with a source
         * map.
         */

        SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(
          aArgs
        ) {
          var generated = {
            code: "",
            line: 1,
            column: 0,
          };
          var map = new SourceMapGenerator(aArgs);
          var sourceMappingActive = false;
          var lastOriginalSource = null;
          var lastOriginalLine = null;
          var lastOriginalColumn = null;
          var lastOriginalName = null;
          this.walk(function (chunk, original) {
            generated.code += chunk;

            if (
              original.source !== null &&
              original.line !== null &&
              original.column !== null
            ) {
              if (
                lastOriginalSource !== original.source ||
                lastOriginalLine !== original.line ||
                lastOriginalColumn !== original.column ||
                lastOriginalName !== original.name
              ) {
                map.addMapping({
                  source: original.source,
                  original: {
                    line: original.line,
                    column: original.column,
                  },
                  generated: {
                    line: generated.line,
                    column: generated.column,
                  },
                  name: original.name,
                });
              }

              lastOriginalSource = original.source;
              lastOriginalLine = original.line;
              lastOriginalColumn = original.column;
              lastOriginalName = original.name;
              sourceMappingActive = true;
            } else if (sourceMappingActive) {
              map.addMapping({
                generated: {
                  line: generated.line,
                  column: generated.column,
                },
              });
              lastOriginalSource = null;
              sourceMappingActive = false;
            }

            for (var idx = 0, length = chunk.length; idx < length; idx++) {
              if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
                generated.line++;
                generated.column = 0; // Mappings end at eol

                if (idx + 1 === length) {
                  lastOriginalSource = null;
                  sourceMappingActive = false;
                } else if (sourceMappingActive) {
                  map.addMapping({
                    source: original.source,
                    original: {
                      line: original.line,
                      column: original.column,
                    },
                    generated: {
                      line: generated.line,
                      column: generated.column,
                    },
                    name: original.name,
                  });
                }
              } else {
                generated.column++;
              }
            }
          });
          this.walkSourceContents(function (sourceFile, sourceContent) {
            map.setSourceContent(sourceFile, sourceContent);
          });
          return {
            code: generated.code,
            map: map,
          };
        };

        exports.SourceNode = SourceNode;
      },
      {
        "./source-map-generator":
          "node_modules/source-map/lib/source-map-generator.js",
        "./util": "node_modules/source-map/lib/util.js",
      },
    ],
    "node_modules/source-map/source-map.js": [
      function (require, module, exports) {
        /*
         * Copyright 2009-2011 Mozilla Foundation and contributors
         * Licensed under the New BSD license. See LICENSE.txt or:
         * http://opensource.org/licenses/BSD-3-Clause
         */
        exports.SourceMapGenerator = require("./lib/source-map-generator").SourceMapGenerator;
        exports.SourceMapConsumer = require("./lib/source-map-consumer").SourceMapConsumer;
        exports.SourceNode = require("./lib/source-node").SourceNode;
      },
      {
        "./lib/source-map-generator":
          "node_modules/source-map/lib/source-map-generator.js",
        "./lib/source-map-consumer":
          "node_modules/source-map/lib/source-map-consumer.js",
        "./lib/source-node": "node_modules/source-map/lib/source-node.js",
      },
    ],
    "node_modules/handlebars/dist/cjs/handlebars/compiler/code-gen.js": [
      function (require, module, exports) {
        var define;
        /* global define */
        ("use strict");

        exports.__esModule = true;

        var _utils = require("../utils");

        var SourceNode = undefined;

        try {
          /* istanbul ignore next */
          if (typeof define !== "function" || !define.amd) {
            // We don't support this in AMD environments. For these environments, we asusme that
            // they are running on the browser and thus have no need for the source-map library.
            var SourceMap = require("source-map");

            SourceNode = SourceMap.SourceNode;
          }
        } catch (err) {}
        /* NOP */

        /* istanbul ignore if: tested but not covered in istanbul due to dist build  */

        if (!SourceNode) {
          SourceNode = function (line, column, srcFile, chunks) {
            this.src = "";

            if (chunks) {
              this.add(chunks);
            }
          };
          /* istanbul ignore next */

          SourceNode.prototype = {
            add: function add(chunks) {
              if (_utils.isArray(chunks)) {
                chunks = chunks.join("");
              }

              this.src += chunks;
            },
            prepend: function prepend(chunks) {
              if (_utils.isArray(chunks)) {
                chunks = chunks.join("");
              }

              this.src = chunks + this.src;
            },
            toStringWithSourceMap: function toStringWithSourceMap() {
              return {
                code: this.toString(),
              };
            },
            toString: function toString() {
              return this.src;
            },
          };
        }

        function castChunk(chunk, codeGen, loc) {
          if (_utils.isArray(chunk)) {
            var ret = [];

            for (var i = 0, len = chunk.length; i < len; i++) {
              ret.push(codeGen.wrap(chunk[i], loc));
            }

            return ret;
          } else if (typeof chunk === "boolean" || typeof chunk === "number") {
            // Handle primitives that the SourceNode will throw up on
            return chunk + "";
          }

          return chunk;
        }

        function CodeGen(srcFile) {
          this.srcFile = srcFile;
          this.source = [];
        }

        CodeGen.prototype = {
          isEmpty: function isEmpty() {
            return !this.source.length;
          },
          prepend: function prepend(source, loc) {
            this.source.unshift(this.wrap(source, loc));
          },
          push: function push(source, loc) {
            this.source.push(this.wrap(source, loc));
          },
          merge: function merge() {
            var source = this.empty();
            this.each(function (line) {
              source.add(["  ", line, "\n"]);
            });
            return source;
          },
          each: function each(iter) {
            for (var i = 0, len = this.source.length; i < len; i++) {
              iter(this.source[i]);
            }
          },
          empty: function empty() {
            var loc = this.currentLocation || {
              start: {},
            };
            return new SourceNode(
              loc.start.line,
              loc.start.column,
              this.srcFile
            );
          },
          wrap: function wrap(chunk) {
            var loc =
              arguments.length <= 1 || arguments[1] === undefined
                ? this.currentLocation || {
                    start: {},
                  }
                : arguments[1];

            if (chunk instanceof SourceNode) {
              return chunk;
            }

            chunk = castChunk(chunk, this, loc);
            return new SourceNode(
              loc.start.line,
              loc.start.column,
              this.srcFile,
              chunk
            );
          },
          functionCall: function functionCall(fn, type, params) {
            params = this.generateList(params);
            return this.wrap([fn, type ? "." + type + "(" : "(", params, ")"]);
          },
          quotedString: function quotedString(str) {
            return (
              '"' +
              (str + "")
                .replace(/\\/g, "\\\\")
                .replace(/"/g, '\\"')
                .replace(/\n/g, "\\n")
                .replace(/\r/g, "\\r")
                .replace(/\u2028/g, "\\u2028") // Per Ecma-262 7.3 + 7.8.4
                .replace(/\u2029/g, "\\u2029") +
              '"'
            );
          },
          objectLiteral: function objectLiteral(obj) {
            // istanbul ignore next
            var _this = this;

            var pairs = [];
            Object.keys(obj).forEach(function (key) {
              var value = castChunk(obj[key], _this);

              if (value !== "undefined") {
                pairs.push([_this.quotedString(key), ":", value]);
              }
            });
            var ret = this.generateList(pairs);
            ret.prepend("{");
            ret.add("}");
            return ret;
          },
          generateList: function generateList(entries) {
            var ret = this.empty();

            for (var i = 0, len = entries.length; i < len; i++) {
              if (i) {
                ret.add(",");
              }

              ret.add(castChunk(entries[i], this));
            }

            return ret;
          },
          generateArray: function generateArray(entries) {
            var ret = this.generateList(entries);
            ret.prepend("[");
            ret.add("]");
            return ret;
          },
        };
        exports["default"] = CodeGen;
        module.exports = exports["default"];
      },
      {
        "../utils": "node_modules/handlebars/dist/cjs/handlebars/utils.js",
        "source-map": "node_modules/source-map/source-map.js",
      },
    ],
    "node_modules/handlebars/dist/cjs/handlebars/compiler/javascript-compiler.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true; // istanbul ignore next

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        var _base = require("../base");

        var _exception = require("../exception");

        var _exception2 = _interopRequireDefault(_exception);

        var _utils = require("../utils");

        var _codeGen = require("./code-gen");

        var _codeGen2 = _interopRequireDefault(_codeGen);

        function Literal(value) {
          this.value = value;
        }

        function JavaScriptCompiler() {}

        JavaScriptCompiler.prototype = {
          // PUBLIC API: You can override these methods in a subclass to provide
          // alternative compiled forms for name lookup and buffering semantics
          nameLookup: function nameLookup(
            parent,
            name
            /*,  type */
          ) {
            return this.internalNameLookup(parent, name);
          },
          depthedLookup: function depthedLookup(name) {
            return [
              this.aliasable("container.lookup"),
              '(depths, "',
              name,
              '")',
            ];
          },
          compilerInfo: function compilerInfo() {
            var revision = _base.COMPILER_REVISION,
              versions = _base.REVISION_CHANGES[revision];
            return [revision, versions];
          },
          appendToBuffer: function appendToBuffer(source, location, explicit) {
            // Force a source as this simplifies the merge logic.
            if (!_utils.isArray(source)) {
              source = [source];
            }

            source = this.source.wrap(source, location);

            if (this.environment.isSimple) {
              return ["return ", source, ";"];
            } else if (explicit) {
              // This is a case where the buffer operation occurs as a child of another
              // construct, generally braces. We have to explicitly output these buffer
              // operations to ensure that the emitted code goes in the correct location.
              return ["buffer += ", source, ";"];
            } else {
              source.appendToBuffer = true;
              return source;
            }
          },
          initializeBuffer: function initializeBuffer() {
            return this.quotedString("");
          },
          // END PUBLIC API
          internalNameLookup: function internalNameLookup(parent, name) {
            this.lookupPropertyFunctionIsUsed = true;
            return ["lookupProperty(", parent, ",", JSON.stringify(name), ")"];
          },
          lookupPropertyFunctionIsUsed: false,
          compile: function compile(environment, options, context, asObject) {
            this.environment = environment;
            this.options = options;
            this.stringParams = this.options.stringParams;
            this.trackIds = this.options.trackIds;
            this.precompile = !asObject;
            this.name = this.environment.name;
            this.isChild = !!context;
            this.context = context || {
              decorators: [],
              programs: [],
              environments: [],
            };
            this.preamble();
            this.stackSlot = 0;
            this.stackVars = [];
            this.aliases = {};
            this.registers = {
              list: [],
            };
            this.hashes = [];
            this.compileStack = [];
            this.inlineStack = [];
            this.blockParams = [];
            this.compileChildren(environment, options);
            this.useDepths =
              this.useDepths ||
              environment.useDepths ||
              environment.useDecorators ||
              this.options.compat;
            this.useBlockParams =
              this.useBlockParams || environment.useBlockParams;
            var opcodes = environment.opcodes,
              opcode = undefined,
              firstLoc = undefined,
              i = undefined,
              l = undefined;

            for (i = 0, l = opcodes.length; i < l; i++) {
              opcode = opcodes[i];
              this.source.currentLocation = opcode.loc;
              firstLoc = firstLoc || opcode.loc;
              this[opcode.opcode].apply(this, opcode.args);
            } // Flush any trailing content that might be pending.

            this.source.currentLocation = firstLoc;
            this.pushSource("");
            /* istanbul ignore next */

            if (
              this.stackSlot ||
              this.inlineStack.length ||
              this.compileStack.length
            ) {
              throw new _exception2["default"](
                "Compile completed with content left on stack"
              );
            }

            if (!this.decorators.isEmpty()) {
              this.useDecorators = true;
              this.decorators.prepend([
                "var decorators = container.decorators, ",
                this.lookupPropertyFunctionVarDeclaration(),
                ";\n",
              ]);
              this.decorators.push("return fn;");

              if (asObject) {
                this.decorators = Function.apply(this, [
                  "fn",
                  "props",
                  "container",
                  "depth0",
                  "data",
                  "blockParams",
                  "depths",
                  this.decorators.merge(),
                ]);
              } else {
                this.decorators.prepend(
                  "function(fn, props, container, depth0, data, blockParams, depths) {\n"
                );
                this.decorators.push("}\n");
                this.decorators = this.decorators.merge();
              }
            } else {
              this.decorators = undefined;
            }

            var fn = this.createFunctionContext(asObject);

            if (!this.isChild) {
              var ret = {
                compiler: this.compilerInfo(),
                main: fn,
              };

              if (this.decorators) {
                ret.main_d = this.decorators; // eslint-disable-line camelcase

                ret.useDecorators = true;
              }

              var _context = this.context;
              var programs = _context.programs;
              var decorators = _context.decorators;

              for (i = 0, l = programs.length; i < l; i++) {
                if (programs[i]) {
                  ret[i] = programs[i];

                  if (decorators[i]) {
                    ret[i + "_d"] = decorators[i];
                    ret.useDecorators = true;
                  }
                }
              }

              if (this.environment.usePartial) {
                ret.usePartial = true;
              }

              if (this.options.data) {
                ret.useData = true;
              }

              if (this.useDepths) {
                ret.useDepths = true;
              }

              if (this.useBlockParams) {
                ret.useBlockParams = true;
              }

              if (this.options.compat) {
                ret.compat = true;
              }

              if (!asObject) {
                ret.compiler = JSON.stringify(ret.compiler);
                this.source.currentLocation = {
                  start: {
                    line: 1,
                    column: 0,
                  },
                };
                ret = this.objectLiteral(ret);

                if (options.srcName) {
                  ret = ret.toStringWithSourceMap({
                    file: options.destName,
                  });
                  ret.map = ret.map && ret.map.toString();
                } else {
                  ret = ret.toString();
                }
              } else {
                ret.compilerOptions = this.options;
              }

              return ret;
            } else {
              return fn;
            }
          },
          preamble: function preamble() {
            // track the last context pushed into place to allow skipping the
            // getContext opcode when it would be a noop
            this.lastContext = 0;
            this.source = new _codeGen2["default"](this.options.srcName);
            this.decorators = new _codeGen2["default"](this.options.srcName);
          },
          createFunctionContext: function createFunctionContext(asObject) {
            // istanbul ignore next
            var _this = this;

            var varDeclarations = "";
            var locals = this.stackVars.concat(this.registers.list);

            if (locals.length > 0) {
              varDeclarations += ", " + locals.join(", ");
            } // Generate minimizer alias mappings
            //
            // When using true SourceNodes, this will update all references to the given alias
            // as the source nodes are reused in situ. For the non-source node compilation mode,
            // aliases will not be used, but this case is already being run on the client and
            // we aren't concern about minimizing the template size.

            var aliasCount = 0;
            Object.keys(this.aliases).forEach(function (alias) {
              var node = _this.aliases[alias];

              if (node.children && node.referenceCount > 1) {
                varDeclarations += ", alias" + ++aliasCount + "=" + alias;
                node.children[0] = "alias" + aliasCount;
              }
            });

            if (this.lookupPropertyFunctionIsUsed) {
              varDeclarations +=
                ", " + this.lookupPropertyFunctionVarDeclaration();
            }

            var params = ["container", "depth0", "helpers", "partials", "data"];

            if (this.useBlockParams || this.useDepths) {
              params.push("blockParams");
            }

            if (this.useDepths) {
              params.push("depths");
            } // Perform a second pass over the output to merge content when possible

            var source = this.mergeSource(varDeclarations);

            if (asObject) {
              params.push(source);
              return Function.apply(this, params);
            } else {
              return this.source.wrap([
                "function(",
                params.join(","),
                ") {\n  ",
                source,
                "}",
              ]);
            }
          },
          mergeSource: function mergeSource(varDeclarations) {
            var isSimple = this.environment.isSimple,
              appendOnly = !this.forceBuffer,
              appendFirst = undefined,
              sourceSeen = undefined,
              bufferStart = undefined,
              bufferEnd = undefined;
            this.source.each(function (line) {
              if (line.appendToBuffer) {
                if (bufferStart) {
                  line.prepend("  + ");
                } else {
                  bufferStart = line;
                }

                bufferEnd = line;
              } else {
                if (bufferStart) {
                  if (!sourceSeen) {
                    appendFirst = true;
                  } else {
                    bufferStart.prepend("buffer += ");
                  }

                  bufferEnd.add(";");
                  bufferStart = bufferEnd = undefined;
                }

                sourceSeen = true;

                if (!isSimple) {
                  appendOnly = false;
                }
              }
            });

            if (appendOnly) {
              if (bufferStart) {
                bufferStart.prepend("return ");
                bufferEnd.add(";");
              } else if (!sourceSeen) {
                this.source.push('return "";');
              }
            } else {
              varDeclarations +=
                ", buffer = " + (appendFirst ? "" : this.initializeBuffer());

              if (bufferStart) {
                bufferStart.prepend("return buffer + ");
                bufferEnd.add(";");
              } else {
                this.source.push("return buffer;");
              }
            }

            if (varDeclarations) {
              this.source.prepend(
                "var " +
                  varDeclarations.substring(2) +
                  (appendFirst ? "" : ";\n")
              );
            }

            return this.source.merge();
          },
          lookupPropertyFunctionVarDeclaration: function lookupPropertyFunctionVarDeclaration() {
            return "\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim();
          },
          // [blockValue]
          //
          // On stack, before: hash, inverse, program, value
          // On stack, after: return value of blockHelperMissing
          //
          // The purpose of this opcode is to take a block of the form
          // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
          // replace it on the stack with the result of properly
          // invoking blockHelperMissing.
          blockValue: function blockValue(name) {
            var blockHelperMissing = this.aliasable(
                "container.hooks.blockHelperMissing"
              ),
              params = [this.contextName(0)];
            this.setupHelperArgs(name, 0, params);
            var blockName = this.popStack();
            params.splice(1, 0, blockName);
            this.push(
              this.source.functionCall(blockHelperMissing, "call", params)
            );
          },
          // [ambiguousBlockValue]
          //
          // On stack, before: hash, inverse, program, value
          // Compiler value, before: lastHelper=value of last found helper, if any
          // On stack, after, if no lastHelper: same as [blockValue]
          // On stack, after, if lastHelper: value
          ambiguousBlockValue: function ambiguousBlockValue() {
            // We're being a bit cheeky and reusing the options value from the prior exec
            var blockHelperMissing = this.aliasable(
                "container.hooks.blockHelperMissing"
              ),
              params = [this.contextName(0)];
            this.setupHelperArgs("", 0, params, true);
            this.flushInline();
            var current = this.topStack();
            params.splice(1, 0, current);
            this.pushSource([
              "if (!",
              this.lastHelper,
              ") { ",
              current,
              " = ",
              this.source.functionCall(blockHelperMissing, "call", params),
              "}",
            ]);
          },
          // [appendContent]
          //
          // On stack, before: ...
          // On stack, after: ...
          //
          // Appends the string value of `content` to the current buffer
          appendContent: function appendContent(content) {
            if (this.pendingContent) {
              content = this.pendingContent + content;
            } else {
              this.pendingLocation = this.source.currentLocation;
            }

            this.pendingContent = content;
          },
          // [append]
          //
          // On stack, before: value, ...
          // On stack, after: ...
          //
          // Coerces `value` to a String and appends it to the current buffer.
          //
          // If `value` is truthy, or 0, it is coerced into a string and appended
          // Otherwise, the empty string is appended
          append: function append() {
            if (this.isInline()) {
              this.replaceStack(function (current) {
                return [" != null ? ", current, ' : ""'];
              });
              this.pushSource(this.appendToBuffer(this.popStack()));
            } else {
              var local = this.popStack();
              this.pushSource([
                "if (",
                local,
                " != null) { ",
                this.appendToBuffer(local, undefined, true),
                " }",
              ]);

              if (this.environment.isSimple) {
                this.pushSource([
                  "else { ",
                  this.appendToBuffer("''", undefined, true),
                  " }",
                ]);
              }
            }
          },
          // [appendEscaped]
          //
          // On stack, before: value, ...
          // On stack, after: ...
          //
          // Escape `value` and append it to the buffer
          appendEscaped: function appendEscaped() {
            this.pushSource(
              this.appendToBuffer([
                this.aliasable("container.escapeExpression"),
                "(",
                this.popStack(),
                ")",
              ])
            );
          },
          // [getContext]
          //
          // On stack, before: ...
          // On stack, after: ...
          // Compiler value, after: lastContext=depth
          //
          // Set the value of the `lastContext` compiler value to the depth
          getContext: function getContext(depth) {
            this.lastContext = depth;
          },
          // [pushContext]
          //
          // On stack, before: ...
          // On stack, after: currentContext, ...
          //
          // Pushes the value of the current context onto the stack.
          pushContext: function pushContext() {
            this.pushStackLiteral(this.contextName(this.lastContext));
          },
          // [lookupOnContext]
          //
          // On stack, before: ...
          // On stack, after: currentContext[name], ...
          //
          // Looks up the value of `name` on the current context and pushes
          // it onto the stack.
          lookupOnContext: function lookupOnContext(
            parts,
            falsy,
            strict,
            scoped
          ) {
            var i = 0;

            if (!scoped && this.options.compat && !this.lastContext) {
              // The depthed query is expected to handle the undefined logic for the root level that
              // is implemented below, so we evaluate that directly in compat mode
              this.push(this.depthedLookup(parts[i++]));
            } else {
              this.pushContext();
            }

            this.resolvePath("context", parts, i, falsy, strict);
          },
          // [lookupBlockParam]
          //
          // On stack, before: ...
          // On stack, after: blockParam[name], ...
          //
          // Looks up the value of `parts` on the given block param and pushes
          // it onto the stack.
          lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
            this.useBlockParams = true;
            this.push([
              "blockParams[",
              blockParamId[0],
              "][",
              blockParamId[1],
              "]",
            ]);
            this.resolvePath("context", parts, 1);
          },
          // [lookupData]
          //
          // On stack, before: ...
          // On stack, after: data, ...
          //
          // Push the data lookup operator
          lookupData: function lookupData(depth, parts, strict) {
            if (!depth) {
              this.pushStackLiteral("data");
            } else {
              this.pushStackLiteral("container.data(data, " + depth + ")");
            }

            this.resolvePath("data", parts, 0, true, strict);
          },
          resolvePath: function resolvePath(type, parts, i, falsy, strict) {
            // istanbul ignore next
            var _this2 = this;

            if (this.options.strict || this.options.assumeObjects) {
              this.push(
                strictLookup(this.options.strict && strict, this, parts, type)
              );
              return;
            }

            var len = parts.length;

            for (; i < len; i++) {
              /* eslint-disable no-loop-func */
              this.replaceStack(function (current) {
                var lookup = _this2.nameLookup(current, parts[i], type); // We want to ensure that zero and false are handled properly if the context (falsy flag)
                // needs to have the special handling for these values.

                if (!falsy) {
                  return [" != null ? ", lookup, " : ", current];
                } else {
                  // Otherwise we can use generic falsy handling
                  return [" && ", lookup];
                }
              });
              /* eslint-enable no-loop-func */
            }
          },
          // [resolvePossibleLambda]
          //
          // On stack, before: value, ...
          // On stack, after: resolved value, ...
          //
          // If the `value` is a lambda, replace it on the stack by
          // the return value of the lambda
          resolvePossibleLambda: function resolvePossibleLambda() {
            this.push([
              this.aliasable("container.lambda"),
              "(",
              this.popStack(),
              ", ",
              this.contextName(0),
              ")",
            ]);
          },
          // [pushStringParam]
          //
          // On stack, before: ...
          // On stack, after: string, currentContext, ...
          //
          // This opcode is designed for use in string mode, which
          // provides the string value of a parameter along with its
          // depth rather than resolving it immediately.
          pushStringParam: function pushStringParam(string, type) {
            this.pushContext();
            this.pushString(type); // If it's a subexpression, the string result
            // will be pushed after this opcode.

            if (type !== "SubExpression") {
              if (typeof string === "string") {
                this.pushString(string);
              } else {
                this.pushStackLiteral(string);
              }
            }
          },
          emptyHash: function emptyHash(omitEmpty) {
            if (this.trackIds) {
              this.push("{}"); // hashIds
            }

            if (this.stringParams) {
              this.push("{}"); // hashContexts

              this.push("{}"); // hashTypes
            }

            this.pushStackLiteral(omitEmpty ? "undefined" : "{}");
          },
          pushHash: function pushHash() {
            if (this.hash) {
              this.hashes.push(this.hash);
            }

            this.hash = {
              values: {},
              types: [],
              contexts: [],
              ids: [],
            };
          },
          popHash: function popHash() {
            var hash = this.hash;
            this.hash = this.hashes.pop();

            if (this.trackIds) {
              this.push(this.objectLiteral(hash.ids));
            }

            if (this.stringParams) {
              this.push(this.objectLiteral(hash.contexts));
              this.push(this.objectLiteral(hash.types));
            }

            this.push(this.objectLiteral(hash.values));
          },
          // [pushString]
          //
          // On stack, before: ...
          // On stack, after: quotedString(string), ...
          //
          // Push a quoted version of `string` onto the stack
          pushString: function pushString(string) {
            this.pushStackLiteral(this.quotedString(string));
          },
          // [pushLiteral]
          //
          // On stack, before: ...
          // On stack, after: value, ...
          //
          // Pushes a value onto the stack. This operation prevents
          // the compiler from creating a temporary variable to hold
          // it.
          pushLiteral: function pushLiteral(value) {
            this.pushStackLiteral(value);
          },
          // [pushProgram]
          //
          // On stack, before: ...
          // On stack, after: program(guid), ...
          //
          // Push a program expression onto the stack. This takes
          // a compile-time guid and converts it into a runtime-accessible
          // expression.
          pushProgram: function pushProgram(guid) {
            if (guid != null) {
              this.pushStackLiteral(this.programExpression(guid));
            } else {
              this.pushStackLiteral(null);
            }
          },
          // [registerDecorator]
          //
          // On stack, before: hash, program, params..., ...
          // On stack, after: ...
          //
          // Pops off the decorator's parameters, invokes the decorator,
          // and inserts the decorator into the decorators list.
          registerDecorator: function registerDecorator(paramSize, name) {
            var foundDecorator = this.nameLookup(
                "decorators",
                name,
                "decorator"
              ),
              options = this.setupHelperArgs(name, paramSize);
            this.decorators.push([
              "fn = ",
              this.decorators.functionCall(foundDecorator, "", [
                "fn",
                "props",
                "container",
                options,
              ]),
              " || fn;",
            ]);
          },
          // [invokeHelper]
          //
          // On stack, before: hash, inverse, program, params..., ...
          // On stack, after: result of helper invocation
          //
          // Pops off the helper's parameters, invokes the helper,
          // and pushes the helper's return value onto the stack.
          //
          // If the helper is not found, `helperMissing` is called.
          invokeHelper: function invokeHelper(paramSize, name, isSimple) {
            var nonHelper = this.popStack(),
              helper = this.setupHelper(paramSize, name);
            var possibleFunctionCalls = [];

            if (isSimple) {
              // direct call to helper
              possibleFunctionCalls.push(helper.name);
            } // call a function from the input object

            possibleFunctionCalls.push(nonHelper);

            if (!this.options.strict) {
              possibleFunctionCalls.push(
                this.aliasable("container.hooks.helperMissing")
              );
            }

            var functionLookupCode = [
              "(",
              this.itemsSeparatedBy(possibleFunctionCalls, "||"),
              ")",
            ];
            var functionCall = this.source.functionCall(
              functionLookupCode,
              "call",
              helper.callParams
            );
            this.push(functionCall);
          },
          itemsSeparatedBy: function itemsSeparatedBy(items, separator) {
            var result = [];
            result.push(items[0]);

            for (var i = 1; i < items.length; i++) {
              result.push(separator, items[i]);
            }

            return result;
          },
          // [invokeKnownHelper]
          //
          // On stack, before: hash, inverse, program, params..., ...
          // On stack, after: result of helper invocation
          //
          // This operation is used when the helper is known to exist,
          // so a `helperMissing` fallback is not required.
          invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
            var helper = this.setupHelper(paramSize, name);
            this.push(
              this.source.functionCall(helper.name, "call", helper.callParams)
            );
          },
          // [invokeAmbiguous]
          //
          // On stack, before: hash, inverse, program, params..., ...
          // On stack, after: result of disambiguation
          //
          // This operation is used when an expression like `{{foo}}`
          // is provided, but we don't know at compile-time whether it
          // is a helper or a path.
          //
          // This operation emits more code than the other options,
          // and can be avoided by passing the `knownHelpers` and
          // `knownHelpersOnly` flags at compile-time.
          invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
            this.useRegister("helper");
            var nonHelper = this.popStack();
            this.emptyHash();
            var helper = this.setupHelper(0, name, helperCall);
            var helperName = (this.lastHelper = this.nameLookup(
              "helpers",
              name,
              "helper"
            ));
            var lookup = [
              "(",
              "(helper = ",
              helperName,
              " || ",
              nonHelper,
              ")",
            ];

            if (!this.options.strict) {
              lookup[0] = "(helper = ";
              lookup.push(
                " != null ? helper : ",
                this.aliasable("container.hooks.helperMissing")
              );
            }

            this.push([
              "(",
              lookup,
              helper.paramsInit ? ["),(", helper.paramsInit] : [],
              "),",
              "(typeof helper === ",
              this.aliasable('"function"'),
              " ? ",
              this.source.functionCall("helper", "call", helper.callParams),
              " : helper))",
            ]);
          },
          // [invokePartial]
          //
          // On stack, before: context, ...
          // On stack after: result of partial invocation
          //
          // This operation pops off a context, invokes a partial with that context,
          // and pushes the result of the invocation back.
          invokePartial: function invokePartial(isDynamic, name, indent) {
            var params = [],
              options = this.setupParams(name, 1, params);

            if (isDynamic) {
              name = this.popStack();
              delete options.name;
            }

            if (indent) {
              options.indent = JSON.stringify(indent);
            }

            options.helpers = "helpers";
            options.partials = "partials";
            options.decorators = "container.decorators";

            if (!isDynamic) {
              params.unshift(this.nameLookup("partials", name, "partial"));
            } else {
              params.unshift(name);
            }

            if (this.options.compat) {
              options.depths = "depths";
            }

            options = this.objectLiteral(options);
            params.push(options);
            this.push(
              this.source.functionCall("container.invokePartial", "", params)
            );
          },
          // [assignToHash]
          //
          // On stack, before: value, ..., hash, ...
          // On stack, after: ..., hash, ...
          //
          // Pops a value off the stack and assigns it to the current hash
          assignToHash: function assignToHash(key) {
            var value = this.popStack(),
              context = undefined,
              type = undefined,
              id = undefined;

            if (this.trackIds) {
              id = this.popStack();
            }

            if (this.stringParams) {
              type = this.popStack();
              context = this.popStack();
            }

            var hash = this.hash;

            if (context) {
              hash.contexts[key] = context;
            }

            if (type) {
              hash.types[key] = type;
            }

            if (id) {
              hash.ids[key] = id;
            }

            hash.values[key] = value;
          },
          pushId: function pushId(type, name, child) {
            if (type === "BlockParam") {
              this.pushStackLiteral(
                "blockParams[" +
                  name[0] +
                  "].path[" +
                  name[1] +
                  "]" +
                  (child ? " + " + JSON.stringify("." + child) : "")
              );
            } else if (type === "PathExpression") {
              this.pushString(name);
            } else if (type === "SubExpression") {
              this.pushStackLiteral("true");
            } else {
              this.pushStackLiteral("null");
            }
          },
          // HELPERS
          compiler: JavaScriptCompiler,
          compileChildren: function compileChildren(environment, options) {
            var children = environment.children,
              child = undefined,
              compiler = undefined;

            for (var i = 0, l = children.length; i < l; i++) {
              child = children[i];
              compiler = new this.compiler(); // eslint-disable-line new-cap

              var existing = this.matchExistingProgram(child);

              if (existing == null) {
                this.context.programs.push(""); // Placeholder to prevent name conflicts for nested children

                var index = this.context.programs.length;
                child.index = index;
                child.name = "program" + index;
                this.context.programs[index] = compiler.compile(
                  child,
                  options,
                  this.context,
                  !this.precompile
                );
                this.context.decorators[index] = compiler.decorators;
                this.context.environments[index] = child;
                this.useDepths = this.useDepths || compiler.useDepths;
                this.useBlockParams =
                  this.useBlockParams || compiler.useBlockParams;
                child.useDepths = this.useDepths;
                child.useBlockParams = this.useBlockParams;
              } else {
                child.index = existing.index;
                child.name = "program" + existing.index;
                this.useDepths = this.useDepths || existing.useDepths;
                this.useBlockParams =
                  this.useBlockParams || existing.useBlockParams;
              }
            }
          },
          matchExistingProgram: function matchExistingProgram(child) {
            for (
              var i = 0, len = this.context.environments.length;
              i < len;
              i++
            ) {
              var environment = this.context.environments[i];

              if (environment && environment.equals(child)) {
                return environment;
              }
            }
          },
          programExpression: function programExpression(guid) {
            var child = this.environment.children[guid],
              programParams = [child.index, "data", child.blockParams];

            if (this.useBlockParams || this.useDepths) {
              programParams.push("blockParams");
            }

            if (this.useDepths) {
              programParams.push("depths");
            }

            return "container.program(" + programParams.join(", ") + ")";
          },
          useRegister: function useRegister(name) {
            if (!this.registers[name]) {
              this.registers[name] = true;
              this.registers.list.push(name);
            }
          },
          push: function push(expr) {
            if (!(expr instanceof Literal)) {
              expr = this.source.wrap(expr);
            }

            this.inlineStack.push(expr);
            return expr;
          },
          pushStackLiteral: function pushStackLiteral(item) {
            this.push(new Literal(item));
          },
          pushSource: function pushSource(source) {
            if (this.pendingContent) {
              this.source.push(
                this.appendToBuffer(
                  this.source.quotedString(this.pendingContent),
                  this.pendingLocation
                )
              );
              this.pendingContent = undefined;
            }

            if (source) {
              this.source.push(source);
            }
          },
          replaceStack: function replaceStack(callback) {
            var prefix = ["("],
              stack = undefined,
              createdStack = undefined,
              usedLiteral = undefined;
            /* istanbul ignore next */

            if (!this.isInline()) {
              throw new _exception2["default"]("replaceStack on non-inline");
            } // We want to merge the inline statement into the replacement statement via ','

            var top = this.popStack(true);

            if (top instanceof Literal) {
              // Literals do not need to be inlined
              stack = [top.value];
              prefix = ["(", stack];
              usedLiteral = true;
            } else {
              // Get or create the current stack name for use by the inline
              createdStack = true;

              var _name = this.incrStack();

              prefix = ["((", this.push(_name), " = ", top, ")"];
              stack = this.topStack();
            }

            var item = callback.call(this, stack);

            if (!usedLiteral) {
              this.popStack();
            }

            if (createdStack) {
              this.stackSlot--;
            }

            this.push(prefix.concat(item, ")"));
          },
          incrStack: function incrStack() {
            this.stackSlot++;

            if (this.stackSlot > this.stackVars.length) {
              this.stackVars.push("stack" + this.stackSlot);
            }

            return this.topStackName();
          },
          topStackName: function topStackName() {
            return "stack" + this.stackSlot;
          },
          flushInline: function flushInline() {
            var inlineStack = this.inlineStack;
            this.inlineStack = [];

            for (var i = 0, len = inlineStack.length; i < len; i++) {
              var entry = inlineStack[i];
              /* istanbul ignore if */

              if (entry instanceof Literal) {
                this.compileStack.push(entry);
              } else {
                var stack = this.incrStack();
                this.pushSource([stack, " = ", entry, ";"]);
                this.compileStack.push(stack);
              }
            }
          },
          isInline: function isInline() {
            return this.inlineStack.length;
          },
          popStack: function popStack(wrapped) {
            var inline = this.isInline(),
              item = (inline ? this.inlineStack : this.compileStack).pop();

            if (!wrapped && item instanceof Literal) {
              return item.value;
            } else {
              if (!inline) {
                /* istanbul ignore next */
                if (!this.stackSlot) {
                  throw new _exception2["default"]("Invalid stack pop");
                }

                this.stackSlot--;
              }

              return item;
            }
          },
          topStack: function topStack() {
            var stack = this.isInline() ? this.inlineStack : this.compileStack,
              item = stack[stack.length - 1];
            /* istanbul ignore if */

            if (item instanceof Literal) {
              return item.value;
            } else {
              return item;
            }
          },
          contextName: function contextName(context) {
            if (this.useDepths && context) {
              return "depths[" + context + "]";
            } else {
              return "depth" + context;
            }
          },
          quotedString: function quotedString(str) {
            return this.source.quotedString(str);
          },
          objectLiteral: function objectLiteral(obj) {
            return this.source.objectLiteral(obj);
          },
          aliasable: function aliasable(name) {
            var ret = this.aliases[name];

            if (ret) {
              ret.referenceCount++;
              return ret;
            }

            ret = this.aliases[name] = this.source.wrap(name);
            ret.aliasable = true;
            ret.referenceCount = 1;
            return ret;
          },
          setupHelper: function setupHelper(paramSize, name, blockHelper) {
            var params = [],
              paramsInit = this.setupHelperArgs(
                name,
                paramSize,
                params,
                blockHelper
              );
            var foundHelper = this.nameLookup("helpers", name, "helper"),
              callContext = this.aliasable(
                this.contextName(0) +
                  " != null ? " +
                  this.contextName(0) +
                  " : (container.nullContext || {})"
              );
            return {
              params: params,
              paramsInit: paramsInit,
              name: foundHelper,
              callParams: [callContext].concat(params),
            };
          },
          setupParams: function setupParams(helper, paramSize, params) {
            var options = {},
              contexts = [],
              types = [],
              ids = [],
              objectArgs = !params,
              param = undefined;

            if (objectArgs) {
              params = [];
            }

            options.name = this.quotedString(helper);
            options.hash = this.popStack();

            if (this.trackIds) {
              options.hashIds = this.popStack();
            }

            if (this.stringParams) {
              options.hashTypes = this.popStack();
              options.hashContexts = this.popStack();
            }

            var inverse = this.popStack(),
              program = this.popStack(); // Avoid setting fn and inverse if neither are set. This allows
            // helpers to do a check for `if (options.fn)`

            if (program || inverse) {
              options.fn = program || "container.noop";
              options.inverse = inverse || "container.noop";
            } // The parameters go on to the stack in order (making sure that they are evaluated in order)
            // so we need to pop them off the stack in reverse order

            var i = paramSize;

            while (i--) {
              param = this.popStack();
              params[i] = param;

              if (this.trackIds) {
                ids[i] = this.popStack();
              }

              if (this.stringParams) {
                types[i] = this.popStack();
                contexts[i] = this.popStack();
              }
            }

            if (objectArgs) {
              options.args = this.source.generateArray(params);
            }

            if (this.trackIds) {
              options.ids = this.source.generateArray(ids);
            }

            if (this.stringParams) {
              options.types = this.source.generateArray(types);
              options.contexts = this.source.generateArray(contexts);
            }

            if (this.options.data) {
              options.data = "data";
            }

            if (this.useBlockParams) {
              options.blockParams = "blockParams";
            }

            return options;
          },
          setupHelperArgs: function setupHelperArgs(
            helper,
            paramSize,
            params,
            useRegister
          ) {
            var options = this.setupParams(helper, paramSize, params);
            options.loc = JSON.stringify(this.source.currentLocation);
            options = this.objectLiteral(options);

            if (useRegister) {
              this.useRegister("options");
              params.push("options");
              return ["options=", options];
            } else if (params) {
              params.push(options);
              return "";
            } else {
              return options;
            }
          },
        };

        (function () {
          var reservedWords = (
            "break else new var" +
            " case finally return void" +
            " catch for switch while" +
            " continue function this with" +
            " default if throw" +
            " delete in try" +
            " do instanceof typeof" +
            " abstract enum int short" +
            " boolean export interface static" +
            " byte extends long super" +
            " char final native synchronized" +
            " class float package throws" +
            " const goto private transient" +
            " debugger implements protected volatile" +
            " double import public let yield await" +
            " null true false"
          ).split(" ");
          var compilerWords = (JavaScriptCompiler.RESERVED_WORDS = {});

          for (var i = 0, l = reservedWords.length; i < l; i++) {
            compilerWords[reservedWords[i]] = true;
          }
        })();
        /**
         * @deprecated May be removed in the next major version
         */

        JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
          return (
            !JavaScriptCompiler.RESERVED_WORDS[name] &&
            /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name)
          );
        };

        function strictLookup(requireTerminal, compiler, parts, type) {
          var stack = compiler.popStack(),
            i = 0,
            len = parts.length;

          if (requireTerminal) {
            len--;
          }

          for (; i < len; i++) {
            stack = compiler.nameLookup(stack, parts[i], type);
          }

          if (requireTerminal) {
            return [
              compiler.aliasable("container.strict"),
              "(",
              stack,
              ", ",
              compiler.quotedString(parts[i]),
              ", ",
              JSON.stringify(compiler.source.currentLocation),
              " )",
            ];
          } else {
            return stack;
          }
        }

        exports["default"] = JavaScriptCompiler;
        module.exports = exports["default"];
      },
      {
        "../base": "node_modules/handlebars/dist/cjs/handlebars/base.js",
        "../exception":
          "node_modules/handlebars/dist/cjs/handlebars/exception.js",
        "../utils": "node_modules/handlebars/dist/cjs/handlebars/utils.js",
        "./code-gen":
          "node_modules/handlebars/dist/cjs/handlebars/compiler/code-gen.js",
      },
    ],
    "node_modules/handlebars/dist/cjs/handlebars.js": [
      function (require, module, exports) {
        "use strict";

        exports.__esModule = true; // istanbul ignore next

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        var _handlebarsRuntime = require("./handlebars.runtime");

        var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime); // Compiler imports

        var _handlebarsCompilerAst = require("./handlebars/compiler/ast");

        var _handlebarsCompilerAst2 = _interopRequireDefault(
          _handlebarsCompilerAst
        );

        var _handlebarsCompilerBase = require("./handlebars/compiler/base");

        var _handlebarsCompilerCompiler = require("./handlebars/compiler/compiler");

        var _handlebarsCompilerJavascriptCompiler = require("./handlebars/compiler/javascript-compiler");

        var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(
          _handlebarsCompilerJavascriptCompiler
        );

        var _handlebarsCompilerVisitor = require("./handlebars/compiler/visitor");

        var _handlebarsCompilerVisitor2 = _interopRequireDefault(
          _handlebarsCompilerVisitor
        );

        var _handlebarsNoConflict = require("./handlebars/no-conflict");

        var _handlebarsNoConflict2 = _interopRequireDefault(
          _handlebarsNoConflict
        );

        var _create = _handlebarsRuntime2["default"].create;

        function create() {
          var hb = _create();

          hb.compile = function (input, options) {
            return _handlebarsCompilerCompiler.compile(input, options, hb);
          };

          hb.precompile = function (input, options) {
            return _handlebarsCompilerCompiler.precompile(input, options, hb);
          };

          hb.AST = _handlebarsCompilerAst2["default"];
          hb.Compiler = _handlebarsCompilerCompiler.Compiler;
          hb.JavaScriptCompiler =
            _handlebarsCompilerJavascriptCompiler2["default"];
          hb.Parser = _handlebarsCompilerBase.parser;
          hb.parse = _handlebarsCompilerBase.parse;
          hb.parseWithoutProcessing =
            _handlebarsCompilerBase.parseWithoutProcessing;
          return hb;
        }

        var inst = create();
        inst.create = create;

        _handlebarsNoConflict2["default"](inst);

        inst.Visitor = _handlebarsCompilerVisitor2["default"];
        inst["default"] = inst;
        exports["default"] = inst;
        module.exports = exports["default"];
      },
      {
        "./handlebars.runtime":
          "node_modules/handlebars/dist/cjs/handlebars.runtime.js",
        "./handlebars/compiler/ast":
          "node_modules/handlebars/dist/cjs/handlebars/compiler/ast.js",
        "./handlebars/compiler/base":
          "node_modules/handlebars/dist/cjs/handlebars/compiler/base.js",
        "./handlebars/compiler/compiler":
          "node_modules/handlebars/dist/cjs/handlebars/compiler/compiler.js",
        "./handlebars/compiler/javascript-compiler":
          "node_modules/handlebars/dist/cjs/handlebars/compiler/javascript-compiler.js",
        "./handlebars/compiler/visitor":
          "node_modules/handlebars/dist/cjs/handlebars/compiler/visitor.js",
        "./handlebars/no-conflict":
          "node_modules/handlebars/dist/cjs/handlebars/no-conflict.js",
      },
    ],
    "node_modules/handlebars/dist/cjs/handlebars/compiler/printer.js": [
      function (require, module, exports) {
        /* eslint-disable new-cap */
        "use strict";

        exports.__esModule = true;
        exports.print = print;
        exports.PrintVisitor = PrintVisitor; // istanbul ignore next

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        var _visitor = require("./visitor");

        var _visitor2 = _interopRequireDefault(_visitor);

        function print(ast) {
          return new PrintVisitor().accept(ast);
        }

        function PrintVisitor() {
          this.padding = 0;
        }

        PrintVisitor.prototype = new _visitor2["default"]();

        PrintVisitor.prototype.pad = function (string) {
          var out = "";

          for (var i = 0, l = this.padding; i < l; i++) {
            out += "  ";
          }

          out += string + "\n";
          return out;
        };

        PrintVisitor.prototype.Program = function (program) {
          var out = "",
            body = program.body,
            i = undefined,
            l = undefined;

          if (program.blockParams) {
            var blockParams = "BLOCK PARAMS: [";

            for (i = 0, l = program.blockParams.length; i < l; i++) {
              blockParams += " " + program.blockParams[i];
            }

            blockParams += " ]";
            out += this.pad(blockParams);
          }

          for (i = 0, l = body.length; i < l; i++) {
            out += this.accept(body[i]);
          }

          this.padding--;
          return out;
        };

        PrintVisitor.prototype.MustacheStatement = function (mustache) {
          return this.pad("{{ " + this.SubExpression(mustache) + " }}");
        };

        PrintVisitor.prototype.Decorator = function (mustache) {
          return this.pad(
            "{{ DIRECTIVE " + this.SubExpression(mustache) + " }}"
          );
        };

        PrintVisitor.prototype.BlockStatement = PrintVisitor.prototype.DecoratorBlock = function (
          block
        ) {
          var out = "";
          out += this.pad(
            (block.type === "DecoratorBlock" ? "DIRECTIVE " : "") + "BLOCK:"
          );
          this.padding++;
          out += this.pad(this.SubExpression(block));

          if (block.program) {
            out += this.pad("PROGRAM:");
            this.padding++;
            out += this.accept(block.program);
            this.padding--;
          }

          if (block.inverse) {
            if (block.program) {
              this.padding++;
            }

            out += this.pad("{{^}}");
            this.padding++;
            out += this.accept(block.inverse);
            this.padding--;

            if (block.program) {
              this.padding--;
            }
          }

          this.padding--;
          return out;
        };

        PrintVisitor.prototype.PartialStatement = function (partial) {
          var content = "PARTIAL:" + partial.name.original;

          if (partial.params[0]) {
            content += " " + this.accept(partial.params[0]);
          }

          if (partial.hash) {
            content += " " + this.accept(partial.hash);
          }

          return this.pad("{{> " + content + " }}");
        };

        PrintVisitor.prototype.PartialBlockStatement = function (partial) {
          var content = "PARTIAL BLOCK:" + partial.name.original;

          if (partial.params[0]) {
            content += " " + this.accept(partial.params[0]);
          }

          if (partial.hash) {
            content += " " + this.accept(partial.hash);
          }

          content += " " + this.pad("PROGRAM:");
          this.padding++;
          content += this.accept(partial.program);
          this.padding--;
          return this.pad("{{> " + content + " }}");
        };

        PrintVisitor.prototype.ContentStatement = function (content) {
          return this.pad("CONTENT[ '" + content.value + "' ]");
        };

        PrintVisitor.prototype.CommentStatement = function (comment) {
          return this.pad("{{! '" + comment.value + "' }}");
        };

        PrintVisitor.prototype.SubExpression = function (sexpr) {
          var params = sexpr.params,
            paramStrings = [],
            hash = undefined;

          for (var i = 0, l = params.length; i < l; i++) {
            paramStrings.push(this.accept(params[i]));
          }

          params = "[" + paramStrings.join(", ") + "]";
          hash = sexpr.hash ? " " + this.accept(sexpr.hash) : "";
          return this.accept(sexpr.path) + " " + params + hash;
        };

        PrintVisitor.prototype.PathExpression = function (id) {
          var path = id.parts.join("/");
          return (id.data ? "@" : "") + "PATH:" + path;
        };

        PrintVisitor.prototype.StringLiteral = function (string) {
          return '"' + string.value + '"';
        };

        PrintVisitor.prototype.NumberLiteral = function (number) {
          return "NUMBER{" + number.value + "}";
        };

        PrintVisitor.prototype.BooleanLiteral = function (bool) {
          return "BOOLEAN{" + bool.value + "}";
        };

        PrintVisitor.prototype.UndefinedLiteral = function () {
          return "UNDEFINED";
        };

        PrintVisitor.prototype.NullLiteral = function () {
          return "NULL";
        };

        PrintVisitor.prototype.Hash = function (hash) {
          var pairs = hash.pairs,
            joinedPairs = [];

          for (var i = 0, l = pairs.length; i < l; i++) {
            joinedPairs.push(this.accept(pairs[i]));
          }

          return "HASH{" + joinedPairs.join(", ") + "}";
        };

        PrintVisitor.prototype.HashPair = function (pair) {
          return pair.key + "=" + this.accept(pair.value);
        };
        /* eslint-enable new-cap */
      },
      {
        "./visitor":
          "node_modules/handlebars/dist/cjs/handlebars/compiler/visitor.js",
      },
    ],
    "node_modules/parcel-bundler/src/builtins/_empty.js": [
      function (require, module, exports) {},
      {},
    ],
    "node_modules/handlebars/lib/index.js": [
      function (require, module, exports) {
        // USAGE:
        // var handlebars = require('handlebars');

        /* eslint-disable no-var */
        // var local = handlebars.create();
        var handlebars = require("../dist/cjs/handlebars")["default"];

        var printer = require("../dist/cjs/handlebars/compiler/printer");

        handlebars.PrintVisitor = printer.PrintVisitor;
        handlebars.print = printer.print;
        module.exports = handlebars; // Publish a Node.js require() handler for .handlebars and .hbs files

        function extension(module, filename) {
          var fs = require("fs");

          var templateString = fs.readFileSync(filename, "utf8");
          module.exports = handlebars.compile(templateString);
        }
        /* istanbul ignore else */

        if (typeof require !== "undefined" && require.extensions) {
          require.extensions[".handlebars"] = extension;
          require.extensions[".hbs"] = extension;
        }
      },
      {
        "../dist/cjs/handlebars":
          "node_modules/handlebars/dist/cjs/handlebars.js",
        "../dist/cjs/handlebars/compiler/printer":
          "node_modules/handlebars/dist/cjs/handlebars/compiler/printer.js",
        fs: "node_modules/parcel-bundler/src/builtins/_empty.js",
      },
    ],
    "public/templates/index.js": [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.default = void 0;

        var _fs = _interopRequireDefault(require("fs"));

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var _default = {
          allProjects:
            '{{!-- Each project section is an array of projects, this limits the size of the row --}}\n{{#each projectsSection}}\n  <div class="gtx-project-box__container">\n    {{#each this }}\n      <a class="gtx-project-box" href="project.html?project={{name}}" data-aos="fade-up">\n        <aside class="gtx-project-box__index">/ {{increment index}}</aside>\n        <span class="gtx-project-box__tag">{{type}}</span>\n        <h2 class="gtx-project-box__title">{{name}}</h2>\n      </a>\n    {{/each}}\n  </div>\n{{/each}}',
          projectsPreview:
            '{{!-- Limit this to 3 --}}\n<div class="gtx-project-box__container">\n  {{#each projects }}\n    <a class="gtx-project-box" href="project.html?project={{name}}" data-aos="fade-up">\n      <aside class="gtx-project-box__index">/ {{increment @index}}</aside>\n      <span class="gtx-project-box__tag">{{type}}</span>\n      <h2 class="gtx-project-box__title">{{name}}</h2>\n    </a>\n  {{/each}}\n</div>',
          projectDetails:
            '{{!-- Github corner from: https://tholman.com/github-corners/  --}}\n<a href="{{  project.githubUrl }}" class="github-corner" aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>\n<div class="gtx-markdown markdown-body">\n  {{{ projectReadme }}}\n</div>',
        };
        exports.default = _default;
      },
      { fs: "node_modules/parcel-bundler/src/builtins/_empty.js" },
    ],
    "public/scripts/helpers.js": [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.renderTemplate = renderTemplate;
        exports.increment = increment;
        exports.pickFirstThree = pickFirstThree;
        exports.getUrlParam = getUrlParam;

        var _handlebars = _interopRequireDefault(require("handlebars"));

        var _templates = _interopRequireDefault(require("../templates"));

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _unsupportedIterableToArray(arr, i) ||
            _nonIterableRest()
          );
        }

        function _nonIterableRest() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        function _iterableToArrayLimit(arr, i) {
          if (
            typeof Symbol === "undefined" ||
            !(Symbol.iterator in Object(arr))
          )
            return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;
          try {
            for (
              var _i = arr[Symbol.iterator](), _s;
              !(_n = (_s = _i.next()).done);
              _n = true
            ) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

        // Render template into the element provided, using the template name providen
        function renderTemplate(id, name, ctx) {
          var template = _templates.default[name]; // If the template does not exist, log a warning and escape

          if (!template) {
            console.warn(
              "Template ".concat(
                name,
                " does not exist in the handlebars context"
              )
            );
            return;
          }

          var element = document.getElementById(id); // If the element does not exist, log a warning and escape

          if (!element) {
            console.warn(
              "Element with id ".concat(id, " does not exist in the document")
            );
            return;
          }

          element.outerHTML = _handlebars.default.compile(template)(ctx);
        } // Return an incremented + 1 value

        function increment(value, options) {
          return parseInt(value) + 1;
        } // Return the first 3 elements of an array

        function pickFirstThree(value, options) {
          var _value = _slicedToArray(value, 3),
            first = _value[0],
            second = _value[1],
            third = _value[2];

          return [first, second, third];
        } // Gets a query params from the url

        function getUrlParam(key) {
          var urlParams = new URLSearchParams(window.location.search);
          return urlParams.get(key);
        } // Export each helper on it's needed context

        window.helpers = {
          renderTemplate: renderTemplate,
          getUrlParam: getUrlParam,
          pickFirstThree: pickFirstThree,
        };

        _handlebars.default.registerHelper("increment", increment);

        _handlebars.default.registerHelper("pickFirstThree", increment);
      },
      {
        handlebars: "node_modules/handlebars/lib/index.js",
        "../templates": "public/templates/index.js",
      },
    ],
    "public/data/projects.json": [
      function (require, module, exports) {
        module.exports = [
          {
            name: "memory-usage-webpack-plugin",
            type: "Webpack Plugin",
            readme:
              "https://raw.githubusercontent.com/sirgalleto/memory-usage-webpack-plugin/base/README.md",
            githubUrl:
              "https://github.com/sirgalleto/memory-usage-webpack-plugin",
          },
          {
            name: "prs-vemos-rolas-no-sabemos",
            type: "Git Hook",
            readme:
              "https://raw.githubusercontent.com/sirgalleto/prs-vemos-rolas-no-sabemos/master/README.md",
            githubUrl:
              "https://github.com/sirgalleto/prs-vemos-rolas-no-sabemos",
          },
          {
            name: "navajitas bot",
            type: "Twitter Bot",
            readme:
              "https://raw.githubusercontent.com/sirgalleto/navajitasbot/master/README.md",
            githubUrl: "https://github.com/sirgalleto/navajitasbot",
          },
          {
            name: "Como ayudar",
            type: "WEB - Collaboration",
            readme:
              "https://raw.githubusercontent.com/eldelentes/comoayudarmx/master/README.md",
            githubUrl: "https://github.com/eldelentes/comoayudarmx",
          },
          {
            name: "crypto-notifier",
            type: "CLI",
            readme:
              "https://raw.githubusercontent.com/sirgalleto/crypto-notifier/master/README.md",
            githubUrl: "https://github.com/sirgalleto/crypto-notifier",
          },
          {
            name: "map-location",
            type: "WEB",
            readme:
              "https://raw.githubusercontent.com/sirgalleto/map-location/master/README.md",
            githubUrl: "https://github.com/sirgalleto/map-location",
          },
          {
            name: "node-ping-server",
            type: "node",
            readme:
              "https://raw.githubusercontent.com/sirgalleto/node-ping-server/master/README.md",
            githubUrl: "https://github.com/sirgalleto/node-ping-server",
          },
          {
            name: "hue-screen-ambiance",
            type: "node",
            readme:
              "https://raw.githubusercontent.com/sirgalleto/hue-screen-ambiance/master/README.md",
            githubUrl: "https://github.com/sirgalleto/hue-screen-ambiance",
          },
        ];
      },
      {},
    ],
    "node_modules/parcel-bundler/src/builtins/bundle-url.js": [
      function (require, module, exports) {
        var bundleURL = null;

        function getBundleURLCached() {
          if (!bundleURL) {
            bundleURL = getBundleURL();
          }

          return bundleURL;
        }

        function getBundleURL() {
          // Attempt to find the URL of the current script and use that as the base URL
          try {
            throw new Error();
          } catch (err) {
            var matches = ("" + err.stack).match(
              /(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g
            );

            if (matches) {
              return getBaseURL(matches[0]);
            }
          }

          return "/";
        }

        function getBaseURL(url) {
          return (
            ("" + url).replace(
              /^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/,
              "$1"
            ) + "/"
          );
        }

        exports.getBundleURL = getBundleURLCached;
        exports.getBaseURL = getBaseURL;
      },
      {},
    ],
    "node_modules/parcel-bundler/src/builtins/css-loader.js": [
      function (require, module, exports) {
        var bundle = require("./bundle-url");

        function updateLink(link) {
          var newLink = link.cloneNode();

          newLink.onload = function () {
            link.remove();
          };

          newLink.href = link.href.split("?")[0] + "?" + Date.now();
          link.parentNode.insertBefore(newLink, link.nextSibling);
        }

        var cssTimeout = null;

        function reloadCSS() {
          if (cssTimeout) {
            return;
          }

          cssTimeout = setTimeout(function () {
            var links = document.querySelectorAll('link[rel="stylesheet"]');

            for (var i = 0; i < links.length; i++) {
              if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
                updateLink(links[i]);
              }
            }

            cssTimeout = null;
          }, 50);
        }

        module.exports = reloadCSS;
      },
      {
        "./bundle-url":
          "node_modules/parcel-bundler/src/builtins/bundle-url.js",
      },
    ],
    "node_modules/github-markdown-css/github-markdown.css": [
      function (require, module, exports) {
        var reloadCSS = require("_css_loader");
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      },
      { _css_loader: "node_modules/parcel-bundler/src/builtins/css-loader.js" },
    ],
    "public/scripts/project.js": [
      function (require, module, exports) {
        "use strict";

        var _showdown = _interopRequireDefault(require("showdown"));

        var _helpers = require("./helpers");

        var _projects = _interopRequireDefault(
          require("../data/projects.json")
        );

        require("github-markdown-css/github-markdown.css");

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        (function () {
          var fetch = window.fetch;

          function start() {
            var projectName = (0, _helpers.getUrlParam)("project"); // Set tab/window title so the user gets the current context

            document.title = "Galleto - " + projectName; // Find the project by name using the url's query param name

            var currentProject = _projects.default.find(function (_ref) {
              var name = _ref.name;
              return name === projectName;
            }); // Makes an http request to the readme URL

            fetch(currentProject.readme)
              .then(function (response) {
                if (response.ok) {
                  // If response is ok, extract the text
                  return response.text();
                } else {
                  // If response is not ok, reject the promise
                  return Promise.reject();
                }
              })
              .then(function (readme) {
                // Transform the markdown into html
                var html = new _showdown.default.Converter().makeHtml(readme);
                (0,
                _helpers.renderTemplate)("project-details", "projectDetails", {
                  projectReadme: html,
                  project: currentProject,
                });
              })
              .catch(function (error) {
                // Error for developer
                console.error(error); // Alert for end-user

                alert("There was an error loading the project info");
              });
          }

          window.onload = start;
        })();
      },
      {
        showdown: "node_modules/showdown/dist/showdown.js",
        "./helpers": "public/scripts/helpers.js",
        "../data/projects.json": "public/data/projects.json",
        "github-markdown-css/github-markdown.css":
          "node_modules/github-markdown-css/github-markdown.css",
      },
    ],
    "node_modules/parcel-bundler/src/builtins/hmr-runtime.js": [
      function (require, module, exports) {
        var global = arguments[3];
        var OVERLAY_ID = "__parcel__error__overlay__";
        var OldModule = module.bundle.Module;

        function Module(moduleName) {
          OldModule.call(this, moduleName);
          this.hot = {
            data: module.bundle.hotData,
            _acceptCallbacks: [],
            _disposeCallbacks: [],
            accept: function (fn) {
              this._acceptCallbacks.push(fn || function () {});
            },
            dispose: function (fn) {
              this._disposeCallbacks.push(fn);
            },
          };
          module.bundle.hotData = null;
        }

        module.bundle.Module = Module;
        var checkedAssets, assetsToAccept;
        var parent = module.bundle.parent;

        if (
          (!parent || !parent.isParcelRequire) &&
          typeof WebSocket !== "undefined"
        ) {
          var hostname = "" || location.hostname;
          var protocol = location.protocol === "https:" ? "wss" : "ws";
          var ws = new WebSocket(
            protocol + "://" + hostname + ":" + "58786" + "/"
          );

          ws.onmessage = function (event) {
            checkedAssets = {};
            assetsToAccept = [];
            var data = JSON.parse(event.data);

            if (data.type === "update") {
              var handled = false;
              data.assets.forEach(function (asset) {
                if (!asset.isNew) {
                  var didAccept = hmrAcceptCheck(
                    global.parcelRequire,
                    asset.id
                  );

                  if (didAccept) {
                    handled = true;
                  }
                }
              }); // Enable HMR for CSS by default.

              handled =
                handled ||
                data.assets.every(function (asset) {
                  return asset.type === "css" && asset.generated.js;
                });

              if (handled) {
                console.clear();
                data.assets.forEach(function (asset) {
                  hmrApply(global.parcelRequire, asset);
                });
                assetsToAccept.forEach(function (v) {
                  hmrAcceptRun(v[0], v[1]);
                });
              } else if (location.reload) {
                // `location` global exists in a web worker context but lacks `.reload()` function.
                location.reload();
              }
            }

            if (data.type === "reload") {
              ws.close();

              ws.onclose = function () {
                location.reload();
              };
            }

            if (data.type === "error-resolved") {
              console.log("[parcel] ✨ Error resolved");
              removeErrorOverlay();
            }

            if (data.type === "error") {
              console.error(
                "[parcel] 🚨  " + data.error.message + "\n" + data.error.stack
              );
              removeErrorOverlay();
              var overlay = createErrorOverlay(data);
              document.body.appendChild(overlay);
            }
          };
        }

        function removeErrorOverlay() {
          var overlay = document.getElementById(OVERLAY_ID);

          if (overlay) {
            overlay.remove();
          }
        }

        function createErrorOverlay(data) {
          var overlay = document.createElement("div");
          overlay.id = OVERLAY_ID; // html encode message and stack trace

          var message = document.createElement("div");
          var stackTrace = document.createElement("pre");
          message.innerText = data.error.message;
          stackTrace.innerText = data.error.stack;
          overlay.innerHTML =
            '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' +
            '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' +
            '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' +
            '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' +
            message.innerHTML +
            "</div>" +
            "<pre>" +
            stackTrace.innerHTML +
            "</pre>" +
            "</div>";
          return overlay;
        }

        function getParents(bundle, id) {
          var modules = bundle.modules;

          if (!modules) {
            return [];
          }

          var parents = [];
          var k, d, dep;

          for (k in modules) {
            for (d in modules[k][1]) {
              dep = modules[k][1][d];

              if (
                dep === id ||
                (Array.isArray(dep) && dep[dep.length - 1] === id)
              ) {
                parents.push(k);
              }
            }
          }

          if (bundle.parent) {
            parents = parents.concat(getParents(bundle.parent, id));
          }

          return parents;
        }

        function hmrApply(bundle, asset) {
          var modules = bundle.modules;

          if (!modules) {
            return;
          }

          if (modules[asset.id] || !bundle.parent) {
            var fn = new Function(
              "require",
              "module",
              "exports",
              asset.generated.js
            );
            asset.isNew = !modules[asset.id];
            modules[asset.id] = [fn, asset.deps];
          } else if (bundle.parent) {
            hmrApply(bundle.parent, asset);
          }
        }

        function hmrAcceptCheck(bundle, id) {
          var modules = bundle.modules;

          if (!modules) {
            return;
          }

          if (!modules[id] && bundle.parent) {
            return hmrAcceptCheck(bundle.parent, id);
          }

          if (checkedAssets[id]) {
            return;
          }

          checkedAssets[id] = true;
          var cached = bundle.cache[id];
          assetsToAccept.push([bundle, id]);

          if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
            return true;
          }

          return getParents(global.parcelRequire, id).some(function (id) {
            return hmrAcceptCheck(global.parcelRequire, id);
          });
        }

        function hmrAcceptRun(bundle, id) {
          var cached = bundle.cache[id];
          bundle.hotData = {};

          if (cached) {
            cached.hot.data = bundle.hotData;
          }

          if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
            cached.hot._disposeCallbacks.forEach(function (cb) {
              cb(bundle.hotData);
            });
          }

          delete bundle.cache[id];
          bundle(id);
          cached = bundle.cache[id];

          if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
            cached.hot._acceptCallbacks.forEach(function (cb) {
              cb();
            });

            return true;
          }
        }
      },
      {},
    ],
  },
  {},
  [
    "node_modules/parcel-bundler/src/builtins/hmr-runtime.js",
    "public/scripts/project.js",
  ],
  null
);
//# sourceMappingURL=/project.ef1b340e.js.map
