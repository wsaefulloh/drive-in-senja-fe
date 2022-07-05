module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "08Fa":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/team-2-dcfcf3b77210fe85b0abc8260e6fa70e.jpg";

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("sUSu");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5MOl":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/angular-368685db949cddcd901ba54559a727d9.jpg";

/***/ }),

/***/ "5njf":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/team-5-53033970a416368da35794389680266f.jpg";

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "8cHP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*!

=========================================================
* NextJS Argon Dashboard PRO - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-argon-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
const routes = [{
  collapse: true,
  name: "Dashboards",
  icon: "ni ni-shop text-primary",
  state: "dashboardsCollapse",
  views: [{
    path: "/dashboard",
    name: "Dashboard",
    miniName: "D",
    layout: "/admin"
  }, {
    path: "/alternative",
    name: "Alternative",
    miniName: "A",
    layout: "/admin"
  }]
}, {
  collapse: true,
  name: "Examples",
  icon: "ni ni-ungroup text-orange",
  state: "examplesCollapse",
  views: [{
    path: "/pricing",
    name: "Pricing",
    miniName: "P",
    layout: "/auth"
  }, {
    path: "/login",
    name: "Login",
    miniName: "L",
    layout: "/auth"
  }, {
    path: "/register",
    name: "Register",
    miniName: "R",
    layout: "/auth"
  }, {
    path: "/lock",
    name: "Lock",
    miniName: "L",
    layout: "/auth"
  }, {
    path: "/timeline",
    name: "Timeline",
    miniName: "T",
    layout: "/admin"
  }, {
    path: "/profile",
    name: "Profile",
    miniName: "P",
    layout: "/admin"
  }, {
    path: "/rtl-support",
    name: "RTL Support",
    miniName: "RS",
    layout: "/rtl"
  }]
}, {
  collapse: true,
  name: "Components",
  icon: "ni ni-ui-04 text-info",
  state: "componentsCollapse",
  views: [{
    path: "/buttons",
    name: "Buttons",
    miniName: "B",
    layout: "/admin"
  }, {
    path: "/cards",
    name: "Cards",
    miniName: "C",
    layout: "/admin"
  }, {
    path: "/grid",
    name: "Grid",
    miniName: "G",
    layout: "/admin"
  }, {
    path: "/notifications",
    name: "Notifications",
    miniName: "N",
    layout: "/admin"
  }, {
    path: "/icons",
    name: "Icons",
    miniName: "I",
    layout: "/admin"
  }, {
    path: "/typography",
    name: "Typography",
    miniName: "T",
    layout: "/admin"
  }, {
    collapse: true,
    name: "Multi Level",
    miniName: "M",
    state: "multiCollapse",
    views: [{
      path: "#pablo",
      name: "Third level menu",
      layout: "/"
    }, {
      path: "#pablo",
      name: "Just another link",
      layout: "/"
    }, {
      path: "#pablo",
      name: "One last link",
      layout: "/"
    }]
  }]
}, {
  collapse: true,
  name: "Forms",
  icon: "ni ni-single-copy-04 text-pink",
  state: "formsCollapse",
  views: [{
    path: "/elements",
    name: "Elements",
    miniName: "E",
    layout: "/admin"
  }, {
    path: "/components",
    name: "Components",
    miniName: "C",
    layout: "/admin"
  }, {
    path: "/validation",
    name: "Validation",
    miniName: "V",
    layout: "/admin"
  }]
}, {
  collapse: true,
  name: "Tables",
  icon: "ni ni-align-left-2 text-default",
  state: "tablesCollapse",
  views: [{
    path: "/tables",
    name: "Tables",
    miniName: "T",
    layout: "/admin"
  }, {
    path: "/sortable",
    name: "Sortable",
    miniName: "S",
    layout: "/admin"
  }, {
    path: "/react-bs-tables",
    name: "React BS Tables",
    miniName: "RBT",
    layout: "/admin"
  }]
}, {
  collapse: true,
  name: "Maps",
  icon: "ni ni-map-big text-primary",
  state: "mapsCollapse",
  views: [{
    path: "/google",
    name: "Google",
    miniName: "G",
    layout: "/admin"
  }, {
    path: "/vector",
    name: "Vector",
    miniName: "V",
    layout: "/admin"
  }]
}, {
  path: "/widgets",
  name: "Widgets",
  icon: "ni ni-archive-2 text-green",
  layout: "/admin"
}, {
  path: "/charts",
  name: "Charts",
  icon: "ni ni-chart-pie-35 text-info",
  layout: "/admin"
}, {
  path: "/calendar",
  name: "Calendar",
  icon: "ni ni-calendar-grid-58 text-red",
  layout: "/admin"
}];
/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),

/***/ "9usk":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/team-1-53033970a416368da35794389680266f.jpg";

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FuVP":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img-1-1000x600-35a52547bfba87e5480f3a5fa7691236.jpg";

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "HAYV":
/***/ (function(module, exports) {

module.exports = require("chart.js");

/***/ }),

/***/ "JXq+":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/team-3-497bb3590e24c9f8b645864bfffc39b8.jpg";

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "OzqN":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAeCAYAAABqpJ3BAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABUBJREFUWIXtll1MU2cYx3/v4bOFuGJFQM6K6BzF+hm4GItRA4kMLyQxmiUSl3jRC5ELpxIvnEvYhYlLlqBRs6saZBcYd+HMgNu5RZwZ0RQlpYU5tKWlKS2wtceh7Xl3UT2M+bFNlzCM/6uT8z7Pe/6/93mfJ0domlam6/pXwPuKoij8z6XrulQUZUxK2Wk2mz8V8Xj8B0VRNs23sZeRlPKEiMfjqYVw8s+Srut+ZaGafyx1IZtHURSxoAEA3gDMt15jgNQM4lH8hcmpVOq/9vOv9TRAxI3oaUJ0rIULGxAXt8AdF8hZsyMjIzQ3N3Pp0qU5qaFQiJaWFlwu1ysbu3LlCk6nk+Hh4X8OIPzfIb79EEI3QCjIggqYmUTcOIG42gpIAG7fvk00GsVut8/ZzO/3E4lEkFLS09NDa2srwWDwpQAGBgZIJBJkZma+MG529ZEGV1tBTyILKhDVhyDTBN6LcLcbfr4CZdug/AOGhoYQQpCfn084HKaoqAiAdevWcfLkSVRV5ejRo8RiMfLz89E0DbPZDEA4HCYajVJUVITVakVKydjYGIlEgrKyMnJzcwHYv38/Dx8+pKSkhOnpaSKRCDk5OaiqihDiGQCB72FmMl2JSS+yYBX0tSHfO46IDsL0KAx/jV62DZ/Ph5SSY8eOAbBr1y52797NqVOnuHnzJu3t7QQCAQCcTiebNm1i3759nD59GrfbDYDJZKK9vZ1z584Z7ywWC21tbWRlZdHc3ExNTQ0Wi4Xe3l7DpsPh4Pjx4wbELMD03dm65JVAVh6ivB6pKPD7VBrsNz9+vx9N01i7di0NDQ24XC4uX75MY2MjXq8XVVUJhUIAbN68GYfDQXl5OWfOnMHtdtPY2IjD4UBKSUdHB263m6amJlKpFF1dXfT09BhXs7Kyku7ubhYtWsSBAwfo6upicHCQYDBIaWkp8KceELkF6YeMHGTVx+C/CjdOgKkQlMecOW8xNDQEQG1tLVVVVaxatYpkMonX6yWRSGC3242Y+vp6tm7dSm5uLrdu3WLjxo3s2bOH9evXs3z5cvr6+qiqqmLHjh3U1dUBMDU1ZeQXFxcTDodZvXo1GzZsMK7qk2s2B0Cqm0FkpKdNZAAK3kE2XECMfAMPJtIxb9cam9vtdnRdZ3R0FLPZzPj4uPHe6/WSnZ1NeXk5gNHIqqoaHx4bGwNgxYoVAEbViouL8Xg8mEwm4vG4UQlITz+LxcLixYufBiC/FNY5QU8ifulF/PQ59HwE1z5Jr1tWICv34vF4sFgspFIpXC4XoVCI7du34/P5DIBIJEJmZibBYJDR0VEsFguQniyBQACPx0NeXh4APp+P+/fv09nZiRCC6upq/H6/cRBP9pyYmGBiYoLKysrnNDEgqw4hlCwY+BKCP2KELatBbvmC6K8PmJxMN3pLSwsAdXV17Ny5k4MHD2K1WlmyZAl2u51r165x5MgRrFYrZ8+epbq6mv7+fg4fPgzA+fPnWbNmDW63G7fbTUZGBk6nE03TkFIae5jNZmw2G9evX59TjScSmqZJ/qqZSRjvh+QDxGI7suDdNODjkXfv3j10XWflypUsW7YMKSUjIyOYTCZUVSWZTHLnzh00TcNms6GqKlJKBgcHicViLF26lIqKCnRdN+Z9RUUFhYWFTE1NEYlEKCkpYXx8nOzsbGw2G9FolFgsRmlpqTGSnw+wgPQa/8wtEL0BmG8tfABd1xfsFNJ1XVcURRmbbyOvoIAipeycbxcvKyFEh5BSZmqa1ial3AuoiqKIv82cR+m6rgMBIUSH2Wz+7A/zHDgmOfiReQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "RG8o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("RfFk");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!

=========================================================
* NextJS Argon Dashboard PRO - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-argon-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// react library that creates nice scrollbar on windows devices
 // reactstrap components



function Sidebar({
  toggleSidenav,
  sidenavOpen,
  routes,
  logo,
  rtlActive,
  router
}) {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({});
  const [windowWidth, setWindowWidth] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0);
  const [navigatorPlatform, setNavigatorPlatform] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("");
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    setState(getCollapseStates(routes));
    setWindowWidth(window.innerWidth);
    setNavigatorPlatform(navigator.platform); // eslint-disable-next-line
  }, []); // verifies if routeName is the one active (in browser input)

  const activeRoute = routeName => {
    return router.pathname.indexOf(routeName) > -1 ? "active" : "";
  }; // makes the sidenav normal on hover (actually when mouse enters on it)


  const onMouseEnterSidenav = () => {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.add("g-sidenav-show");
    }
  }; // makes the sidenav mini on hover (actually when mouse leaves from it)


  const onMouseLeaveSidenav = () => {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-show");
    }
  }; // this creates the intial state of this component based on the collapse routes
  // that it gets through props.routes


  const getCollapseStates = routes => {
    let initialState = {};
    routes.map((prop, key) => {
      if (prop.collapse) {
        initialState = _objectSpread(_objectSpread({
          [prop.state]: getCollapseInitialState(prop.views)
        }, getCollapseStates(prop.views)), initialState);
      }

      return null;
    });
    return initialState;
  }; // this verifies if any of the collapses should be default opened on a rerender of this component
  // for example, on the refresh of the page,
  // while on the src/views/forms/RegularForms.js - route /admin/regular-forms


  const getCollapseInitialState = routes => {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse && getCollapseInitialState(routes[i].views)) {
        return true;
      } else if (router.pathname.indexOf(routes[i].path) !== -1) {
        return true;
      }
    }

    return false;
  }; // this is used on mobile devices, when a user navigates
  // the sidebar will autoclose


  const closeSidenav = () => {
    if (windowWidth < 1200) {
      toggleSidenav();
    }
  }; // this function creates the links and collapses that appear in the sidebar (left menu)


  const createLinks = routes => {
    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }

      if (prop.collapse) {
        var st = {};
        st[prop["state"]] = !state[prop.state];
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
            href: "#pablo",
            "data-toggle": "collapse",
            "aria-expanded": state[prop.state],
            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
              active: getCollapseInitialState(prop.views)
            }),
            onClick: e => {
              e.preventDefault();
              setState(st);
            },
            children: prop.icon ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                className: prop.icon
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                className: "nav-link-text",
                children: prop.name
              })]
            }) : prop.miniName ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
                className: "sidenav-mini-icon",
                children: [" ", prop.miniName, " "]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
                className: "sidenav-normal",
                children: [" ", prop.name, " "]
              })]
            }) : null
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Collapse"], {
            isOpen: state[prop.state],
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
              className: "nav-sm flex-column",
              children: createLinks(prop.views)
            })
          })]
        }, key);
      }

      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
        className: activeRoute(prop.layout + prop.path),
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: prop.layout + prop.path,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
            href: "#pablo",
            onClick: closeSidenav,
            children: prop.icon !== undefined ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                className: prop.icon
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                className: "nav-link-text",
                children: prop.name
              })]
            }) : prop.miniName !== undefined ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
                className: "sidenav-mini-icon",
                children: [" ", prop.miniName, " "]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
                className: "sidenav-normal",
                children: [" ", prop.name, " "]
              })]
            }) : prop.name
          })
        })
      }, key);
    });
  };

  const scrollBarInner = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "scrollbar-inner",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "sidenav-header d-flex align-items-center",
      children: [logo && logo.innerLink ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: logo.innerLink,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavbarBrand"], {
            href: "#pablo",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              alt: logo.imgAlt,
              className: "navbar-brand-img",
              src: logo.imgSrc
            })
          })
        })
      }) : null, logo && logo.outterLink ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavbarBrand"], {
        href: logo.outterLink,
        target: "_blank",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
          alt: logo.imgAlt,
          className: "navbar-brand-img",
          src: logo.imgSrc
        })
      }) : null, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "ml-auto",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("sidenav-toggler d-none d-xl-block", {
            active: sidenavOpen
          }),
          onClick: toggleSidenav,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "sidenav-toggler-inner",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
              className: "sidenav-toggler-line"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
              className: "sidenav-toggler-line"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
              className: "sidenav-toggler-line"
            })]
          })
        })
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "navbar-inner",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Collapse"], {
        navbar: true,
        isOpen: true,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
          navbar: true,
          children: createLinks(routes)
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("hr", {
          className: "my-3"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h6", {
          className: "navbar-heading p-0 text-muted",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: "docs-normal",
            children: "Documentation"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: "docs-mini",
            children: "D"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
          className: "mb-md-3",
          navbar: true,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
              href: "https://www.creative-tim.com/learning-lab/nextjs/overview/argon-dashboard?ref=njsadp-sidebar",
              target: "_blank",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                className: "ni ni-spaceship"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                className: "nav-link-text",
                children: "Getting started"
              })]
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
              href: "https://www.creative-tim.com/learning-lab/nextjs/colors/argon-dashboard?ref=njsadp-sidebar",
              target: "_blank",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                className: "ni ni-palette"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                className: "nav-link-text",
                children: "Foundation"
              })]
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
              href: "https://www.creative-tim.com/learning-lab/nextjs/alerts/argon-dashboard?ref=njsadp-sidebar",
              target: "_blank",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                className: "ni ni-ui-04"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                className: "nav-link-text",
                children: "Components"
              })]
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
              href: "https://www.creative-tim.com/learning-lab/nextjs/react-chartjs-2/argon-dashboard?ref=njsadp-sidebar",
              target: "_blank",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                className: "ni ni-chart-pie-35"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                className: "nav-link-text",
                children: "Plugins"
              })]
            })
          })]
        })]
      })
    })]
  });

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"], {
    className: "sidenav navbar-vertical navbar-expand-xs navbar-light bg-white " + (rtlActive ? "" : "fixed-left"),
    onMouseEnter: onMouseEnterSidenav,
    onMouseLeave: onMouseLeaveSidenav,
    children: navigatorPlatform && navigatorPlatform.indexOf("Win") > -1 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: scrollBarInner
    }) : scrollBarInner
  });
}

Sidebar.defaultProps = {
  routes: [{}],
  toggleSidenav: () => {},
  sidenavOpen: false,
  rtlActive: false
};
/* harmony default export */ __webpack_exports__["a"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Sidebar));

/***/ }),

/***/ "RfFk":
/***/ (function(module, exports) {

module.exports = require("react-perfect-scrollbar");

/***/ }),

/***/ "SbLS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);




/*!

=========================================================
* NextJS Argon Dashboard PRO - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-argon-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
 // reactstrap components



function AdminFooter() {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      fluid: true,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("footer", {
        className: "footer pt-0",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          className: "align-items-center justify-content-lg-between",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            lg: "6",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "copyright text-center text-lg-left text-muted",
              children: ["\xA9 ", new Date().getFullYear(), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                className: "font-weight-bold ml-1",
                href: "https://www.creative-tim.com?ref=adpr-admin-footer",
                target: "_blank",
                children: "Creative Tim"
              })]
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            lg: "6",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
              className: "nav-footer justify-content-center justify-content-lg-end",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                  href: "https://www.creative-tim.com?ref=adpr-admin-footer",
                  target: "_blank",
                  children: "Creative Tim"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                  href: "https://www.creative-tim.com/presentation?ref=adpr-admin-footer",
                  target: "_blank",
                  children: "About Us"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                  href: "http://blog.creative-tim.com?ref=adpr-admin-footer",
                  target: "_blank",
                  children: "Blog"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                  href: "https://www.creative-tim.com/license?ref=adpr-admin-footer",
                  target: "_blank",
                  children: "License"
                })
              })]
            })
          })]
        })
      })
    })
  });
}

/* harmony default export */ __webpack_exports__["a"] = (AdminFooter);

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "XVCQ":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/react-c4eb3d0be0cf5a2d156a123bdf7fb40d.jpg";

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "anW6":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bootstrap-ab904daa548967670847fc3929bf50f4.jpg";

/***/ }),

/***/ "bBUN":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/vue-9378e368a757bd0c7ca556a0258cb527.jpg";

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "ccUJ":
/***/ (function(module, exports, __webpack_require__) {

if (true) {
  global.window = {};
}

if (typeof document === "undefined") {
  global.document = {
    querySelector: () => {}
  };
}
/*!

=========================================================
* NextJS Argon Dashboard PRO - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-argon-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


const Chart = __webpack_require__("HAYV"); // Only for demo purposes - return a random number to generate datasets


var randomScalingFactor = function () {
  return Math.round(Math.random() * 100);
}; //
// Chart extension for making the bars rounded
// Code from: https://codepen.io/jedtrow/full/ygRYgo
//


Chart.elements.Rectangle.prototype.draw = function () {
  var ctx = this._chart.ctx;
  var vm = this._view;
  var left, right, top, bottom, signX, signY, borderSkipped, radius;
  var borderWidth = vm.borderWidth; // Set Radius Here
  // If radius is large enough to cause drawing errors a max radius is imposed

  var cornerRadius = 6;

  if (!vm.horizontal) {
    // bar
    left = vm.x - vm.width / 2;
    right = vm.x + vm.width / 2;
    top = vm.y;
    bottom = vm.base;
    signX = 1;
    signY = bottom > top ? 1 : -1;
    borderSkipped = vm.borderSkipped || "bottom";
  } else {
    // horizontal bar
    left = vm.base;
    right = vm.x;
    top = vm.y - vm.height / 2;
    bottom = vm.y + vm.height / 2;
    signX = right > left ? 1 : -1;
    signY = 1;
    borderSkipped = vm.borderSkipped || "left";
  } // Canvas doesn't allow us to stroke inside the width so we can
  // adjust the sizes to fit if we're setting a stroke on the line


  if (borderWidth) {
    // borderWidth shold be less than bar width and bar height.
    var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
    borderWidth = borderWidth > barSize ? barSize : borderWidth;
    var halfStroke = borderWidth / 2; // Adjust borderWidth when bar top position is near vm.base(zero).

    var borderLeft = left + (borderSkipped !== "left" ? halfStroke * signX : 0);
    var borderRight = right + (borderSkipped !== "right" ? -halfStroke * signX : 0);
    var borderTop = top + (borderSkipped !== "top" ? halfStroke * signY : 0);
    var borderBottom = bottom + (borderSkipped !== "bottom" ? -halfStroke * signY : 0); // not become a vertical line?

    if (borderLeft !== borderRight) {
      top = borderTop;
      bottom = borderBottom;
    } // not become a horizontal line?


    if (borderTop !== borderBottom) {
      left = borderLeft;
      right = borderRight;
    }
  }

  ctx.beginPath();
  ctx.fillStyle = vm.backgroundColor;
  ctx.strokeStyle = vm.borderColor;
  ctx.lineWidth = borderWidth; // Corner points, from bottom-left to bottom-right clockwise
  // | 1 2 |
  // | 0 3 |

  var corners = [[left, bottom], [left, top], [right, top], [right, bottom]]; // Find first (starting) corner with fallback to 'bottom'

  var borders = ["bottom", "left", "top", "right"];
  var startCorner = borders.indexOf(borderSkipped, 0);

  if (startCorner === -1) {
    startCorner = 0;
  }

  function cornerAt(index) {
    return corners[(startCorner + index) % 4];
  } // Draw rectangle from 'startCorner'


  var corner = cornerAt(0);
  ctx.moveTo(corner[0], corner[1]);

  for (var i = 1; i < 4; i++) {
    corner = cornerAt(i);
    let nextCornerId = i + 1;

    if (nextCornerId === 4) {
      nextCornerId = 0;
    } // let nextCorner = cornerAt(nextCornerId);


    let width = corners[2][0] - corners[1][0];
    let height = corners[0][1] - corners[1][1];
    let x = corners[1][0];
    let y = corners[1][1]; // eslint-disable-next-line

    var radius = cornerRadius; // Fix radius being too large

    if (radius > height / 2) {
      radius = height / 2;
    }

    if (radius > width / 2) {
      radius = width / 2;
    }

    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
  }

  ctx.fill();

  if (borderWidth) {
    ctx.stroke();
  }
};

var mode = "light"; //(themeMode) ? themeMode : 'light';

var fonts = {
  base: "Open Sans"
}; // Colors

var colors = {
  gray: {
    100: "#f6f9fc",
    200: "#e9ecef",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#8898aa",
    700: "#525f7f",
    800: "#32325d",
    900: "#212529"
  },
  theme: {
    default: "#172b4d",
    primary: "#5e72e4",
    secondary: "#f4f5f7",
    info: "#11cdef",
    success: "#2dce89",
    danger: "#f5365c",
    warning: "#fb6340"
  },
  black: "#12263F",
  white: "#FFFFFF",
  transparent: "transparent"
}; // Methods
// Chart.js global options

function chartOptions() {
  // Options
  var options = {
    defaults: {
      global: {
        responsive: true,
        maintainAspectRatio: false,
        defaultColor: mode === "dark" ? colors.gray[700] : colors.gray[600],
        defaultFontColor: mode === "dark" ? colors.gray[700] : colors.gray[600],
        defaultFontFamily: fonts.base,
        defaultFontSize: 13,
        layout: {
          padding: 0
        },
        legend: {
          display: false,
          position: "bottom",
          labels: {
            usePointStyle: true,
            padding: 16
          }
        },
        elements: {
          point: {
            radius: 0,
            backgroundColor: colors.theme["primary"]
          },
          line: {
            tension: 0.4,
            borderWidth: 4,
            borderColor: colors.theme["primary"],
            backgroundColor: colors.transparent,
            borderCapStyle: "rounded"
          },
          rectangle: {
            backgroundColor: colors.theme["warning"]
          },
          arc: {
            backgroundColor: colors.theme["primary"],
            borderColor: mode === "dark" ? colors.gray[800] : colors.white,
            borderWidth: 4
          }
        },
        tooltips: {
          enabled: true,
          mode: "index",
          intersect: false
        }
      },
      doughnut: {
        cutoutPercentage: 83,
        legendCallback: function (chart) {
          var data = chart.data;
          var content = "";
          data.labels.forEach(function (label, index) {
            var bgColor = data.datasets[0].backgroundColor[index];
            content += '<span class="chart-legend-item">';
            content += '<i class="chart-legend-indicator" style="background-color: ' + bgColor + '"></i>';
            content += label;
            content += "</span>";
          });
          return content;
        }
      }
    }
  }; // yAxes

  Chart.scaleService.updateScaleDefaults("linear", {
    gridLines: {
      borderDash: [2],
      borderDashOffset: [2],
      color: mode === "dark" ? colors.gray[900] : colors.gray[300],
      drawBorder: false,
      drawTicks: false,
      lineWidth: 1,
      zeroLineWidth: 1,
      zeroLineColor: mode === "dark" ? colors.gray[900] : colors.gray[300],
      zeroLineBorderDash: [2],
      zeroLineBorderDashOffset: [2]
    },
    ticks: {
      beginAtZero: true,
      padding: 10,
      callback: function (value) {
        if (!(value % 10)) {
          return value;
        }
      }
    }
  }); // xAxes

  Chart.scaleService.updateScaleDefaults("category", {
    gridLines: {
      drawBorder: false,
      drawOnChartArea: false,
      drawTicks: false
    },
    ticks: {
      padding: 20
    }
  });
  return options;
} // Parse global options


function parseOptions(parent, options) {
  for (var item in options) {
    if (typeof options[item] !== "object") {
      parent[item] = options[item];
    } else {
      parseOptions(parent[item], options[item]);
    }
  }
} // Example 1 of Chart inside src/views/dashboards/Dashboard.js


let chartExample1 = {
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          color: colors.gray[700],
          zeroLineColor: colors.gray[700]
        },
        ticks: {
          callback: function (value) {
            if (!(value % 10)) {
              return "$" + value + "k";
            }
          }
        }
      }]
    },
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.datasets[item.datasetIndex].label || "";
          var yLabel = item.yLabel;
          var content = "";

          if (data.datasets.length > 1) {
            content += label;
          }

          content += "$" + yLabel + "k";
          return content;
        }
      }
    }
  },
  data1: canvas => {
    return {
      labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Performance",
        data: [0, 20, 10, 30, 15, 40, 20, 60, 60]
      }]
    };
  },
  data2: canvas => {
    return {
      labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Performance",
        data: [0, 20, 5, 25, 10, 30, 15, 40, 40]
      }]
    };
  }
}; // Example 2 of Chart inside src/views/dashboards/Dashboard.js and src/views/dashboards/Alternative.js and src/views/pages/Charts.js

let chartExample2 = {
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          color: colors.gray[200],
          zeroLineColor: colors.gray[200]
        },
        ticks: {
          callback: function (value) {
            if (!(value % 10)) {
              //return '$' + value + 'k'
              return value;
            }
          }
        }
      }]
    },
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.datasets[item.datasetIndex].label || "";
          var yLabel = item.yLabel;
          var content = "";

          if (data.datasets.length > 1) {
            content += label;
          }

          content += yLabel;
          return content;
        }
      }
    }
  },
  data: {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Sales",
      data: [25, 20, 30, 22, 17, 29],
      maxBarThickness: 10
    }]
  }
}; // Example 3 of Chart inside src/views/dashboards/Alternative.js and src/views/pages/Charts.js

let chartExample3 = {
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          color: colors.gray[200],
          zeroLineColor: colors.gray[200]
        },
        ticks: {}
      }]
    }
  },
  data: {
    labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Performance",
      data: [0, 20, 10, 30, 15, 40, 20, 60, 60]
    }]
  }
}; // Example 4 of Chart inside src/views/pages/Charts.js

const chartExample4 = {
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          color: colors.gray[200],
          zeroLineColor: colors.gray[200]
        },
        ticks: {}
      }]
    }
  },
  data: {
    labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Performance",
      data: [10, 18, 28, 23, 28, 40, 36, 46, 52],
      pointRadius: 10,
      pointHoverRadius: 15,
      showLine: false
    }]
  }
}; // Example 5 of Chart inside src/views/pages/Charts.js

const chartExample5 = {
  data: {
    labels: ["Danger", "Warning", "Success", "Primary", "Info"],
    datasets: [{
      data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
      backgroundColor: [colors.theme["danger"], colors.theme["warning"], colors.theme["success"], colors.theme["primary"], colors.theme["info"]],
      label: "Dataset 1"
    }]
  },
  options: {
    responsive: true,
    legend: {
      position: "top"
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
}; // Example 6 of Chart inside src/views/pages/Charts.js

const chartExample6 = {
  data: {
    labels: ["Danger", "Warning", "Success", "Primary", "Info"],
    datasets: [{
      data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
      backgroundColor: [colors.theme["danger"], colors.theme["warning"], colors.theme["success"], colors.theme["primary"], colors.theme["info"]],
      label: "Dataset 1"
    }]
  },
  options: {
    responsive: true,
    legend: {
      position: "top"
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
}; // Example 7 of Chart inside src/views/pages/Charts.js

const chartExample7 = {
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "Dataset 1",
      backgroundColor: colors.theme["danger"],
      data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
      maxBarThickness: 10
    }, {
      label: "Dataset 2",
      backgroundColor: colors.theme["primary"],
      data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
      maxBarThickness: 10
    }, {
      label: "Dataset 3",
      backgroundColor: colors.theme["success"],
      data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
      maxBarThickness: 10
    }]
  },
  options: {
    tooltips: {
      mode: "index",
      intersect: false
    },
    responsive: true,
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
    }
  }
};
module.exports = {
  chartOptions,
  // used alonside with the chartExamples variables
  parseOptions,
  // used alonside with the chartExamples variables
  chartExample1,
  // used inside src/views/dashboards/Dashboard.js
  chartExample2,
  // used inside src/views/dashboards/Dashboard.js and src/views/dashboards/Alternative.js and src/views/pages/Charts.js
  chartExample3,
  // used inside src/views/dashboards/Alternative.js and src/views/pages/Charts.js
  chartExample4,
  // used inside src/views/pages/Charts.js
  chartExample5,
  // used inside src/views/pages/Charts.js
  chartExample6,
  // used inside src/views/pages/Charts.js
  chartExample7 // used inside src/views/pages/Charts.js

};

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "i6E2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Navbars_AdminNavbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("jnuQ");
/* harmony import */ var components_Footers_AdminFooter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("SbLS");
/* harmony import */ var components_Sidebar_Sidebar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("RG8o");
/* harmony import */ var routes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("8cHP");




 // core components






function Admin({
  router,
  children
}) {
  const [sidenavOpen, setSidenavOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true);

  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }

      if (prop.layout === "/admin") {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Route, {
          path: prop.layout + prop.path,
          component: prop.component
        }, key);
      } else {
        return null;
      }
    });
  };

  const getBrandText = path => {
    for (let i = 0; i < routes_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].length; i++) {
      if (router.pathname.indexOf(routes_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"][i].layout + routes_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"][i].path) !== -1) {
        return routes_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"][i].name;
      }
    }

    return "Brand";
  }; // toggles collapse between mini sidenav and normal


  const toggleSidenav = e => {
    if (document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-pinned");
      document.body.classList.add("g-sidenav-hidden");
    } else {
      document.body.classList.add("g-sidenav-pinned");
      document.body.classList.remove("g-sidenav-hidden");
    }

    setSidenavOpen(!sidenavOpen);
  };

  const getNavbarTheme = () => {
    return router.pathname.indexOf("admin/alternative-dashboard") === -1 ? "dark" : "light";
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_Sidebar_Sidebar_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      routes: routes_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
      toggleSidenav: toggleSidenav,
      sidenavOpen: sidenavOpen,
      logo: {
        innerLink: "/",
        imgSrc: __webpack_require__("v3H1"),
        imgAlt: "..."
      }
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "main-content",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_Navbars_AdminNavbar_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        theme: getNavbarTheme(),
        toggleSidenav: toggleSidenav,
        sidenavOpen: sidenavOpen,
        brandText: getBrandText(router.pathname)
      }), children, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_Footers_AdminFooter_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {})]
    }), sidenavOpen ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "backdrop d-xl-none",
      onClick: toggleSidenav
    }) : null]
  });
}

/* harmony default export */ __webpack_exports__["a"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Admin));

/***/ }),

/***/ "jnuQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);




/*!

=========================================================
* NextJS Argon Dashboard PRO - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-argon-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// reactstrap components


function AdminNavbar({
  theme,
  sidenavOpen,
  toggleSidenav
}) {
  // function that on mobile devices makes the search open
  const openSearch = () => {
    document.body.classList.add("g-navbar-search-showing");
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-showing");
      document.body.classList.add("g-navbar-search-show");
    }, 150);
    setTimeout(function () {
      document.body.classList.add("g-navbar-search-shown");
    }, 300);
  }; // function that on mobile devices makes the search close


  const closeSearch = () => {
    document.body.classList.remove("g-navbar-search-shown");
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-show");
      document.body.classList.add("g-navbar-search-hiding");
    }, 150);
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-hiding");
      document.body.classList.add("g-navbar-search-hidden");
    }, 300);
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-hidden");
    }, 500);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("navbar-top navbar-expand border-bottom", {
        "navbar-dark bg-dark": theme === "dark"
      }, {
        "navbar-light bg-secondary": theme === "light"
      }),
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        fluid: true,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
          navbar: true,
          isOpen: true,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("navbar-search form-inline mr-sm-3", {
              "navbar-search-light": theme === "dark"
            }, {
              "navbar-search-dark": theme === "light"
            }),
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
              className: "mb-0",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
                className: "input-group-alternative input-group-merge",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroupAddon"], {
                  addonType: "prepend",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroupText"], {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                      className: "fas fa-search"
                    })
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
                  placeholder: "Search",
                  type: "text"
                })]
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
              "aria-label": "Close",
              className: "close",
              type: "button",
              onClick: closeSearch,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                "aria-hidden": true,
                children: "\xD7"
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
            className: "align-items-center ml-md-auto",
            navbar: true,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
              className: "d-xl-none",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("pr-3 sidenav-toggler", {
                  active: sidenavOpen
                }, {
                  "sidenav-toggler-dark": theme === "dark"
                }),
                onClick: toggleSidenav,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                  className: "sidenav-toggler-inner",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                    className: "sidenav-toggler-line"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                    className: "sidenav-toggler-line"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                    className: "sidenav-toggler-line"
                  })]
                })
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
              className: "d-sm-none",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
                onClick: openSearch,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                  className: "ni ni-zoom-split-in"
                })
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["UncontrolledDropdown"], {
              nav: true,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownToggle"], {
                className: "nav-link",
                color: "",
                tag: "a",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                  className: "ni ni-bell-55"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownMenu"], {
                className: "dropdown-menu-xl py-0 overflow-hidden",
                right: true,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                  className: "px-3 py-3",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h6", {
                    className: "text-sm text-muted m-0",
                    children: ["You have ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                      className: "text-info",
                      children: "13"
                    }), " ", "notifications."]
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroup"], {
                  flush: true,
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroupItem"], {
                    className: "list-group-item-action",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    tag: "a",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
                      className: "align-items-center",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
                        className: "col-auto",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                          alt: "...",
                          className: "avatar rounded-circle",
                          src: __webpack_require__("9usk")
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                        className: "col ml--2",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "d-flex justify-content-between align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
                              className: "mb-0 text-sm",
                              children: "John Snow"
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            className: "text-right text-muted",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                              children: "2 hrs ago"
                            })
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                          className: "text-sm mb-0",
                          children: "Let's meet at Starbucks at 11:30. Wdyt?"
                        })]
                      })]
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroupItem"], {
                    className: "list-group-item-action",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    tag: "a",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
                      className: "align-items-center",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
                        className: "col-auto",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                          alt: "...",
                          className: "avatar rounded-circle",
                          src: __webpack_require__("08Fa")
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                        className: "col ml--2",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "d-flex justify-content-between align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
                              className: "mb-0 text-sm",
                              children: "John Snow"
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            className: "text-right text-muted",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                              children: "3 hrs ago"
                            })
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                          className: "text-sm mb-0",
                          children: "A new issue has been reported for Argon."
                        })]
                      })]
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroupItem"], {
                    className: "list-group-item-action",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    tag: "a",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
                      className: "align-items-center",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
                        className: "col-auto",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                          alt: "...",
                          className: "avatar rounded-circle",
                          src: __webpack_require__("JXq+")
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                        className: "col ml--2",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "d-flex justify-content-between align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
                              className: "mb-0 text-sm",
                              children: "John Snow"
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            className: "text-right text-muted",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                              children: "5 hrs ago"
                            })
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                          className: "text-sm mb-0",
                          children: "Your posts have been liked a lot."
                        })]
                      })]
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroupItem"], {
                    className: "list-group-item-action",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    tag: "a",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
                      className: "align-items-center",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
                        className: "col-auto",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                          alt: "...",
                          className: "avatar rounded-circle",
                          src: __webpack_require__("wSe6")
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                        className: "col ml--2",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "d-flex justify-content-between align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
                              className: "mb-0 text-sm",
                              children: "John Snow"
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            className: "text-right text-muted",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                              children: "2 hrs ago"
                            })
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                          className: "text-sm mb-0",
                          children: "Let's meet at Starbucks at 11:30. Wdyt?"
                        })]
                      })]
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroupItem"], {
                    className: "list-group-item-action",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    tag: "a",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
                      className: "align-items-center",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
                        className: "col-auto",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                          alt: "...",
                          className: "avatar rounded-circle",
                          src: __webpack_require__("5njf")
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                        className: "col ml--2",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "d-flex justify-content-between align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
                              className: "mb-0 text-sm",
                              children: "John Snow"
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            className: "text-right text-muted",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                              children: "3 hrs ago"
                            })
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                          className: "text-sm mb-0",
                          children: "A new issue has been reported for Argon."
                        })]
                      })]
                    })
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
                  className: "text-center text-info font-weight-bold py-3",
                  href: "#pablo",
                  onClick: e => e.preventDefault(),
                  children: "View all"
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["UncontrolledDropdown"], {
              nav: true,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownToggle"], {
                className: "nav-link",
                color: "",
                tag: "a",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                  className: "ni ni-ungroup"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownMenu"], {
                className: "dropdown-menu-lg dropdown-menu-dark bg-default",
                right: true,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
                  className: "shortcuts px-4",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
                    className: "shortcut-item",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    xs: "4",
                    tag: "a",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                      className: "shortcut-media avatar rounded-circle bg-gradient-red",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                        className: "ni ni-calendar-grid-58"
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                      children: "Calendar"
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
                    className: "shortcut-item",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    xs: "4",
                    tag: "a",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                      className: "shortcut-media avatar rounded-circle bg-gradient-orange",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                        className: "ni ni-email-83"
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                      children: "Email"
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
                    className: "shortcut-item",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    xs: "4",
                    tag: "a",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                      className: "shortcut-media avatar rounded-circle bg-gradient-info",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                        className: "ni ni-credit-card"
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                      children: "Payments"
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
                    className: "shortcut-item",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    xs: "4",
                    tag: "a",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                      className: "shortcut-media avatar rounded-circle bg-gradient-green",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                        className: "ni ni-books"
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                      children: "Reports"
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
                    className: "shortcut-item",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    xs: "4",
                    tag: "a",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                      className: "shortcut-media avatar rounded-circle bg-gradient-purple",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                        className: "ni ni-pin-3"
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                      children: "Maps"
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
                    className: "shortcut-item",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    xs: "4",
                    tag: "a",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                      className: "shortcut-media avatar rounded-circle bg-gradient-yellow",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                        className: "ni ni-basket"
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                      children: "Shop"
                    })]
                  })]
                })
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
            className: "align-items-center ml-auto ml-md-0",
            navbar: true,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["UncontrolledDropdown"], {
              nav: true,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownToggle"], {
                className: "nav-link pr-0",
                color: "",
                tag: "a",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
                  className: "align-items-center",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                    className: "avatar avatar-sm rounded-circle",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                      alt: "...",
                      src: __webpack_require__("wSe6")
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
                    className: "ml-2 d-none d-lg-block",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                      className: "mb-0 text-sm font-weight-bold",
                      children: "John Snow"
                    })
                  })]
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownMenu"], {
                right: true,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
                  className: "noti-title",
                  header: true,
                  tag: "div",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h6", {
                    className: "text-overflow m-0",
                    children: "Welcome!"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
                  href: "#pablo",
                  onClick: e => e.preventDefault(),
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                    className: "ni ni-single-02"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                    children: "My profile"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
                  href: "#pablo",
                  onClick: e => e.preventDefault(),
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                    className: "ni ni-settings-gear-65"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                    children: "Settings"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
                  href: "#pablo",
                  onClick: e => e.preventDefault(),
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                    className: "ni ni-calendar-grid-58"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                    children: "Activity"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
                  href: "#pablo",
                  onClick: e => e.preventDefault(),
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                    className: "ni ni-support-16"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                    children: "Support"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
                  divider: true
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["DropdownItem"], {
                  href: "#pablo",
                  onClick: e => e.preventDefault(),
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                    className: "ni ni-user-run"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                    children: "Logout"
                  })]
                })]
              })]
            })
          })]
        })
      })
    })
  });
}

AdminNavbar.defaultProps = {
  toggleSidenav: () => {},
  sidenavOpen: false,
  theme: "dark"
};
/* harmony default export */ __webpack_exports__["a"] = (AdminNavbar);

/***/ }),

/***/ "mliW":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sketch-e7c82e5c569db9d9761b13ef1384f702.jpg";

/***/ }),

/***/ "mnju":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);




/*!

=========================================================
* NextJS Argon Dashboard PRO - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-argon-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
 // nodejs library to set properties for components

// reactstrap components


function CardsHeader({
  name,
  parentName
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "header bg-dark pb-6",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        fluid: true,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "header-body",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
            className: "align-items-center py-4",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              lg: "6",
              xs: "7",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h6", {
                className: "h2 text-white d-inline-block mb-0",
                children: name
              }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"], {
                className: "d-none d-md-inline-block ml-md-4",
                listClassName: "breadcrumb-links breadcrumb-dark",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                      className: "fas fa-home"
                    })
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    children: parentName
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
                  "aria-current": "page",
                  className: "active",
                  children: name
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              className: "text-right",
              lg: "6",
              xs: "5",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                className: "btn-neutral",
                color: "default",
                href: "#pablo",
                onClick: e => e.preventDefault(),
                size: "sm",
                children: "New"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                className: "btn-neutral",
                color: "default",
                href: "#pablo",
                onClick: e => e.preventDefault(),
                size: "sm",
                children: "Filters"
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              md: "6",
              xl: "3",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
                className: "card-stats",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                      className: "col",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
                        tag: "h5",
                        className: "text-uppercase text-muted mb-0",
                        children: "Total traffic"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                        className: "h2 font-weight-bold mb-0",
                        children: "350,897"
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
                      className: "col-auto",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                        className: "icon icon-shape bg-gradient-red text-white rounded-circle shadow",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                          className: "ni ni-active-40"
                        })
                      })
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
                    className: "mt-3 mb-0 text-sm",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
                      className: "text-success mr-2",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                        className: "fa fa-arrow-up"
                      }), " 3.48%"]
                    }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                      className: "text-nowrap",
                      children: "Since last month"
                    })]
                  })]
                })
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              md: "6",
              xl: "3",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
                className: "card-stats",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                      className: "col",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
                        tag: "h5",
                        className: "text-uppercase text-muted mb-0",
                        children: "New users"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                        className: "h2 font-weight-bold mb-0",
                        children: "2,356"
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
                      className: "col-auto",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                        className: "icon icon-shape bg-gradient-orange text-white rounded-circle shadow",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                          className: "ni ni-chart-pie-35"
                        })
                      })
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
                    className: "mt-3 mb-0 text-sm",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
                      className: "text-success mr-2",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                        className: "fa fa-arrow-up"
                      }), " 3.48%"]
                    }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                      className: "text-nowrap",
                      children: "Since last month"
                    })]
                  })]
                })
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              md: "6",
              xl: "3",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
                className: "card-stats",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                      className: "col",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
                        tag: "h5",
                        className: "text-uppercase text-muted mb-0",
                        children: "Sales"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                        className: "h2 font-weight-bold mb-0",
                        children: "924"
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
                      className: "col-auto",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                        className: "icon icon-shape bg-gradient-green text-white rounded-circle shadow",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                          className: "ni ni-money-coins"
                        })
                      })
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
                    className: "mt-3 mb-0 text-sm",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
                      className: "text-success mr-2",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                        className: "fa fa-arrow-up"
                      }), " 3.48%"]
                    }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                      className: "text-nowrap",
                      children: "Since last month"
                    })]
                  })]
                })
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              md: "6",
              xl: "3",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
                className: "card-stats",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                      className: "col",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
                        tag: "h5",
                        className: "text-uppercase text-muted mb-0",
                        children: "Performance"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                        className: "h2 font-weight-bold mb-0",
                        children: "49,65%"
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
                      className: "col-auto",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                        className: "icon icon-shape bg-gradient-primary text-white rounded-circle shadow",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                          className: "ni ni-chart-bar-32"
                        })
                      })
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
                    className: "mt-3 mb-0 text-sm",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
                      className: "text-success mr-2",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                        className: "fa fa-arrow-up"
                      }), " 3.48%"]
                    }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                      className: "text-nowrap",
                      children: "Since last month"
                    })]
                  })]
                })
              })
            })]
          })]
        })
      })
    })
  });
}

/* harmony default export */ __webpack_exports__["a"] = (CardsHeader);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "sUSu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("HAYV");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("t3hY");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var layouts_Admin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("i6E2");
/* harmony import */ var components_Headers_CardsHeader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("mnju");
/* harmony import */ var variables_charts_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ccUJ");
/* harmony import */ var variables_charts_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(variables_charts_js__WEBPACK_IMPORTED_MODULE_8__);




/*!

=========================================================
* NextJS Argon Dashboard PRO - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-argon-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
 // node.js library that concatenates classes (strings)

 // javascipt plugin for creating charts

 // react plugin used to create charts

 // reactstrap components

 // layout for this page

 // core components




function Dashboard() {
  const [activeNav, setActiveNav] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(1);
  const [chartExample1Data, setChartExample1Data] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("data1");

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data(chartExample1Data === "data1" ? "data2" : "data1");
  };

  if (false) {}

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_Headers_CardsHeader_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      name: "Default",
      parentName: "Dashboards"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
      className: "mt--6",
      fluid: true,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          xl: "8",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardHeader"], {
              className: "bg-transparent",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
                className: "align-items-center",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                  className: "col",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h6", {
                    className: "text-light text-uppercase ls-1 mb-1",
                    children: "Overview"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h5", {
                    className: "h3 mb-0",
                    children: "Sales value"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                  className: "col",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
                    className: "justify-content-end",
                    pills: true,
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavItem"], {
                      className: "mr-2 mr-md-0",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("py-2 px-3", {
                          active: activeNav === 1
                        }),
                        href: "#pablo",
                        onClick: e => toggleNavs(e, 1),
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                          className: "d-none d-md-block",
                          children: "Month"
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                          className: "d-md-none",
                          children: "M"
                        })]
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavItem"], {
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("py-2 px-3", {
                          active: activeNav === 2
                        }),
                        "data-toggle": "tab",
                        href: "#pablo",
                        onClick: e => toggleNavs(e, 2),
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                          className: "d-none d-md-block",
                          children: "Week"
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                          className: "d-md-none",
                          children: "W"
                        })]
                      })
                    })]
                  })
                })]
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "chart",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__["Line"], {
                  data: variables_charts_js__WEBPACK_IMPORTED_MODULE_8__["chartExample1"][chartExample1Data],
                  options: variables_charts_js__WEBPACK_IMPORTED_MODULE_8__["chartExample1"].options,
                  id: "chart-sales-dark",
                  className: "chart-canvas"
                })
              })
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          xl: "4",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardHeader"], {
              className: "bg-transparent",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
                className: "align-items-center",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                  className: "col",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h6", {
                    className: "text-uppercase text-muted ls-1 mb-1",
                    children: "Performance"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h5", {
                    className: "h3 mb-0",
                    children: "Total orders"
                  })]
                })
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "chart",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__["Bar"], {
                  data: variables_charts_js__WEBPACK_IMPORTED_MODULE_8__["chartExample2"].data,
                  options: variables_charts_js__WEBPACK_IMPORTED_MODULE_8__["chartExample2"].options,
                  className: "chart-canvas",
                  id: "chart-bars"
                })
              })
            })]
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          xl: "4",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardHeader"], {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h5", {
                className: "h3 mb-0",
                children: "Team members"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroup"], {
                className: "list my--3",
                flush: true,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroupItem"], {
                  className: "px-0",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
                    className: "align-items-center",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
                      className: "col-auto",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                        className: "avatar rounded-circle",
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("9usk")
                        })
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                      className: "col ml--2",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
                        className: "mb-0",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: "John Michael"
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                        className: "text-success",
                        children: "\u25CF"
                      }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                        children: "Online"
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
                      className: "col-auto",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
                        color: "primary",
                        size: "sm",
                        type: "button",
                        children: "Add"
                      })
                    })]
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroupItem"], {
                  className: "px-0",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
                    className: "align-items-center",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
                      className: "col-auto",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                        className: "avatar rounded-circle",
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("08Fa")
                        })
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                      className: "col ml--2",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
                        className: "mb-0",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: "Alex Smith"
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                        className: "text-warning",
                        children: "\u25CF"
                      }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                        children: "In a meeting"
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
                      className: "col-auto",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
                        color: "primary",
                        size: "sm",
                        type: "button",
                        children: "Add"
                      })
                    })]
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroupItem"], {
                  className: "px-0",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
                    className: "align-items-center",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
                      className: "col-auto",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                        className: "avatar rounded-circle",
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("JXq+")
                        })
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                      className: "col ml--2",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
                        className: "mb-0",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: "Samantha Ivy"
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                        className: "text-danger",
                        children: "\u25CF"
                      }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                        children: "Offline"
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
                      className: "col-auto",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
                        color: "primary",
                        size: "sm",
                        type: "button",
                        children: "Add"
                      })
                    })]
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroupItem"], {
                  className: "px-0",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
                    className: "align-items-center",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
                      className: "col-auto",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                        className: "avatar rounded-circle",
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("wSe6")
                        })
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                      className: "col ml--2",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
                        className: "mb-0",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: "John Michael"
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                        className: "text-success",
                        children: "\u25CF"
                      }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                        children: "Online"
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
                      className: "col-auto",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
                        color: "primary",
                        size: "sm",
                        type: "button",
                        children: "Add"
                      })
                    })]
                  })
                })]
              })
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          xl: "4",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardHeader"], {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h5", {
                className: "h3 mb-0",
                children: "To do list"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
              className: "p-0",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroup"], {
                "data-toggle": "checklist",
                flush: true,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroupItem"], {
                  className: "checklist-entry flex-column align-items-start py-4 px-4",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                    className: "checklist-item checklist-item-success checklist-item-checked",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                      className: "checklist-info",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h5", {
                        className: "checklist-title mb-0",
                        children: "Call with Dave"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                        children: "10:30 AM"
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                        className: "custom-control custom-checkbox custom-checkbox-success",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
                          className: "custom-control-input",
                          defaultChecked: true,
                          id: "chk-todo-task-1",
                          type: "checkbox"
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
                          className: "custom-control-label",
                          htmlFor: "chk-todo-task-1"
                        })]
                      })
                    })]
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroupItem"], {
                  className: "checklist-entry flex-column align-items-start py-4 px-4",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                    className: "checklist-item checklist-item-warning",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                      className: "checklist-info",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h5", {
                        className: "checklist-title mb-0",
                        children: "Lunch meeting"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                        children: "10:30 AM"
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                        className: "custom-control custom-checkbox custom-checkbox-warning",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
                          className: "custom-control-input",
                          id: "chk-todo-task-2",
                          type: "checkbox"
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
                          className: "custom-control-label",
                          htmlFor: "chk-todo-task-2"
                        })]
                      })
                    })]
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroupItem"], {
                  className: "checklist-entry flex-column align-items-start py-4 px-4",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                    className: "checklist-item checklist-item-info",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                      className: "checklist-info",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h5", {
                        className: "checklist-title mb-0",
                        children: "Argon Dashboard Launch"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                        children: "10:30 AM"
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                        className: "custom-control custom-checkbox custom-checkbox-info",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
                          className: "custom-control-input",
                          id: "chk-todo-task-3",
                          type: "checkbox"
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
                          className: "custom-control-label",
                          htmlFor: "chk-todo-task-3"
                        })]
                      })
                    })]
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroupItem"], {
                  className: "checklist-entry flex-column align-items-start py-4 px-4",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                    className: "checklist-item checklist-item-danger checklist-item-checked",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                      className: "checklist-info",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h5", {
                        className: "checklist-title mb-0",
                        children: "Winter Hackaton"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                        children: "10:30 AM"
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                        className: "custom-control custom-checkbox custom-checkbox-danger",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
                          className: "custom-control-input",
                          defaultChecked: true,
                          id: "chk-todo-task-4",
                          type: "checkbox"
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
                          className: "custom-control-label",
                          htmlFor: "chk-todo-task-4"
                        })]
                      })
                    })]
                  })
                })]
              })
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          xl: "4",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardHeader"], {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h5", {
                className: "h3 mb-0",
                children: "Progress track"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroup"], {
                className: "list my--3",
                flush: true,
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroupItem"], {
                  className: "px-0",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
                    className: "align-items-center",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
                      className: "col-auto",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                        className: "avatar rounded-circle",
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("anW6")
                        })
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                      className: "col",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h5", {
                        children: "Argon Design System"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
                        className: "progress-xs mb-0",
                        color: "orange",
                        max: "100",
                        value: "60"
                      })]
                    })]
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroupItem"], {
                  className: "px-0",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
                    className: "align-items-center",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
                      className: "col-auto",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                        className: "avatar rounded-circle",
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("5MOl")
                        })
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                      className: "col",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h5", {
                        children: "Angular Now UI Kit PRO"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
                        className: "progress-xs mb-0",
                        color: "success",
                        max: "100",
                        value: "100"
                      })]
                    })]
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroupItem"], {
                  className: "px-0",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
                    className: "align-items-center",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
                      className: "col-auto",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                        className: "avatar rounded-circle",
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("mliW")
                        })
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                      className: "col",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h5", {
                        children: "Black Dashboard"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
                        className: "progress-xs mb-0",
                        color: "danger",
                        max: "100",
                        value: "72"
                      })]
                    })]
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroupItem"], {
                  className: "px-0",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
                    className: "align-items-center",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
                      className: "col-auto",
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                        className: "avatar rounded-circle",
                        href: "#pablo",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("XVCQ")
                        })
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                      className: "col",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h5", {
                        children: "React Material Dashboard"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
                        className: "progress-xs mb-0",
                        color: "info",
                        max: "100",
                        value: "90"
                      })]
                    })]
                  })
                })]
              })
            })]
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          xl: "5",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardHeader"], {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h5", {
                className: "h3 mb-0",
                children: "Activity feed"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardHeader"], {
              className: "d-flex align-items-center",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                className: "d-flex align-items-center",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  href: "#pablo",
                  onClick: e => e.preventDefault(),
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                    alt: "...",
                    className: "avatar",
                    src: __webpack_require__("9usk")
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                  className: "mx-3",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                    className: "text-dark font-weight-600 text-sm",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    children: "John Snow"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                    className: "d-block text-muted",
                    children: "3 days ago"
                  })]
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "text-right ml-auto",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
                  className: "btn-icon",
                  color: "primary",
                  size: "sm",
                  type: "button",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                    className: "btn-inner--icon mr-1",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                      className: "ni ni-fat-add"
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                    className: "btn-inner--text",
                    children: "Follow"
                  })]
                })
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                className: "mb-4",
                children: "Personal profiles are the perfect way for you to grab their attention and persuade recruiters to continue reading your CV because you\u2019re telling them from the off exactly why they should hire you."
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                alt: "...",
                className: "img-fluid rounded",
                src: __webpack_require__("FuVP")
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
                className: "align-items-center my-3 pb-3 border-bottom",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
                  sm: "6",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                    className: "icon-actions",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
                      className: "like active",
                      href: "#pablo",
                      onClick: e => e.preventDefault(),
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                        className: "ni ni-like-2"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                        className: "text-muted",
                        children: "150"
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
                      href: "#pablo",
                      onClick: e => e.preventDefault(),
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                        className: "ni ni-chat-round"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                        className: "text-muted",
                        children: "36"
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
                      href: "#pablo",
                      onClick: e => e.preventDefault(),
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                        className: "ni ni-curved-next"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                        className: "text-muted",
                        children: "12"
                      })]
                    })]
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
                  className: "d-none d-sm-block",
                  sm: "6",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                    className: "d-flex align-items-center justify-content-sm-end",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                      className: "avatar-group",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                        className: "avatar avatar-xs rounded-circle",
                        href: "#pablo",
                        id: "tooltip36177092",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                          alt: "...",
                          src: __webpack_require__("9usk")
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip36177092",
                        children: "Jessica Rowland"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                        className: "avatar avatar-xs rounded-circle",
                        href: "#pablo",
                        id: "tooltip857639221",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                          alt: "...",
                          className: "rounded-circle",
                          src: __webpack_require__("08Fa")
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip857639221",
                        children: "Audrey Love"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                        className: "avatar avatar-xs rounded-circle",
                        href: "#pablo",
                        id: "tooltip260223080",
                        onClick: e => e.preventDefault(),
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                          alt: "...",
                          className: "rounded-circle",
                          src: __webpack_require__("JXq+")
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                        delay: 0,
                        target: "tooltip260223080",
                        children: "Michael Lewis"
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                      className: "pl-2 font-weight-bold",
                      children: "and 30+ more"
                    })]
                  })
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                className: "mb-1",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
                  className: "media-comment",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                    alt: "...",
                    className: "avatar avatar-lg media-comment-avatar rounded-circle",
                    src: __webpack_require__("9usk")
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                      className: "media-comment-text",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h6", {
                        className: "h5 mt-0",
                        children: "Michael Lewis"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                        className: "text-sm lh-160",
                        children: "Cras sit amet nibh libero nulla vel metus scelerisque ante sollicitudin. Cras purus odio vestibulum in vulputate viverra turpis."
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                        className: "icon-actions",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
                          className: "like active",
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                            className: "ni ni-like-2"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                            className: "text-muted",
                            children: "3 likes"
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                            className: "ni ni-curved-next"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                            className: "text-muted",
                            children: "2 shares"
                          })]
                        })]
                      })]
                    })
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
                  className: "media-comment",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                    alt: "...",
                    className: "avatar avatar-lg media-comment-avatar rounded-circle",
                    src: __webpack_require__("08Fa")
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                      className: "media-comment-text",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h6", {
                        className: "h5 mt-0",
                        children: "Jessica Stones"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                        className: "text-sm lh-160",
                        children: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis."
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                        className: "icon-actions",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
                          className: "like active",
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                            className: "ni ni-like-2"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                            className: "text-muted",
                            children: "10 likes"
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
                          href: "#pablo",
                          onClick: e => e.preventDefault(),
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                            className: "ni ni-curved-next"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                            className: "text-muted",
                            children: "1 share"
                          })]
                        })]
                      })]
                    })
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("hr", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
                  className: "align-items-center",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                    alt: "...",
                    className: "avatar avatar-lg rounded-circle mr-4",
                    src: __webpack_require__("JXq+")
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
                    body: true,
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
                        placeholder: "Write your comment",
                        rows: "1",
                        type: "textarea"
                      })
                    })
                  })]
                })]
              })]
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          xl: "7",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "col",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardHeader"], {
                  className: "border-0",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
                    className: "mb-0",
                    children: "Light table"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Table"], {
                  className: "align-items-center table-flush",
                  responsive: true,
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("thead", {
                    className: "thead-light",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                        className: "sort",
                        "data-sort": "name",
                        scope: "col",
                        children: "Project"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                        className: "sort",
                        "data-sort": "budget",
                        scope: "col",
                        children: "Budget"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                        className: "sort",
                        "data-sort": "status",
                        scope: "col",
                        children: "Status"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                        scope: "col",
                        children: "Users"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                        className: "sort",
                        "data-sort": "completion",
                        scope: "col",
                        children: "Completion"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                        scope: "col"
                      })]
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tbody", {
                    className: "list",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                        scope: "row",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
                          className: "align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar rounded-circle mr-3",
                            href: "#pablo",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("anW6")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                              className: "name mb-0 text-sm",
                              children: "Argon Design System"
                            })
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "budget",
                        children: "$2500 USD"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
                          className: "badge-dot mr-4",
                          color: "",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                            className: "bg-warning"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                            className: "status",
                            children: "pending"
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "avatar-group",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip792717700",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("9usk")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip792717700",
                            children: "Ryan Tompson"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip654289872",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("08Fa")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip654289872",
                            children: "Romina Hadid"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip409131762",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("JXq+")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip409131762",
                            children: "Alexander Smith"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip50788433",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("wSe6")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip50788433",
                            children: "Jessica Doe"
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "d-flex align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                            className: "completion mr-2",
                            children: "60%"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
                              max: "100",
                              value: "60",
                              color: "warning"
                            })
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "text-right",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledDropdown"], {
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownToggle"], {
                            color: "",
                            size: "sm",
                            className: "btn-icon-only text-light",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                              className: "fas fa-ellipsis-v"
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownMenu"], {
                            className: "dropdown-menu-arrow",
                            right: true,
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Action"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Another action"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Something else here"
                            })]
                          })]
                        })
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                        scope: "row",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
                          className: "align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar rounded-circle mr-3",
                            href: "#pablo",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("5MOl")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                              className: "name mb-0 text-sm",
                              children: "Angular Now UI Kit PRO"
                            })
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "budget",
                        children: "$1800 USD"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
                          className: "badge-dot mr-4",
                          color: "",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                            className: "bg-success"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                            className: "status",
                            children: "completed"
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "avatar-group",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip545726644",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("9usk")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip545726644",
                            children: "Ryan Tompson"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip823332447",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("08Fa")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip823332447",
                            children: "Romina Hadid"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip354076640",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("JXq+")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip354076640",
                            children: "Alexander Smith"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip625572621",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("wSe6")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip625572621",
                            children: "Jessica Doe"
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "d-flex align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                            className: "completion mr-2",
                            children: "100%"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
                              max: "100",
                              value: "100",
                              color: "success"
                            })
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "text-right",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledDropdown"], {
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownToggle"], {
                            color: "",
                            size: "sm",
                            className: "btn-icon-only text-light",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                              className: "fas fa-ellipsis-v"
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownMenu"], {
                            className: "dropdown-menu-arrow",
                            right: true,
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Action"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Another action"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Something else here"
                            })]
                          })]
                        })
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                        scope: "row",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
                          className: "align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar rounded-circle mr-3",
                            href: "#pablo",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("mliW")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                              className: "name mb-0 text-sm",
                              children: "Black Dashboard"
                            })
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "budget",
                        children: "$3150 USD"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
                          className: "badge-dot mr-4",
                          color: "",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                            className: "bg-danger"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                            className: "status",
                            children: "delayed"
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "avatar-group",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip927457712",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("9usk")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip927457712",
                            children: "Ryan Tompson"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip959509788",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("08Fa")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip959509788",
                            children: "Romina Hadid"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip239649821",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("JXq+")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip239649821",
                            children: "Alexander Smith"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip908443321",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("wSe6")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip908443321",
                            children: "Jessica Doe"
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "d-flex align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                            className: "completion mr-2",
                            children: "72%"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
                              max: "100",
                              value: "72",
                              color: "danger"
                            })
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "text-right",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledDropdown"], {
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownToggle"], {
                            color: "",
                            size: "sm",
                            className: "btn-icon-only text-light",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                              className: "fas fa-ellipsis-v"
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownMenu"], {
                            className: "dropdown-menu-arrow",
                            right: true,
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Action"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Another action"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Something else here"
                            })]
                          })]
                        })
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                        scope: "row",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
                          className: "align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar rounded-circle mr-3",
                            href: "#pablo",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("XVCQ")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                              className: "name mb-0 text-sm",
                              children: "React Material Dashboard"
                            })
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "budget",
                        children: "$4400 USD"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
                          className: "badge-dot mr-4",
                          color: "",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                            className: "bg-info"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                            className: "status",
                            children: "on schedule"
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "avatar-group",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip817843622",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("9usk")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip817843622",
                            children: "Ryan Tompson"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip885824111",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("08Fa")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip885824111",
                            children: "Romina Hadid"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip426851535",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("JXq+")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip426851535",
                            children: "Alexander Smith"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip913358720",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("wSe6")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip913358720",
                            children: "Jessica Doe"
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "d-flex align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                            className: "completion mr-2",
                            children: "90%"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
                              max: "100",
                              value: "90",
                              color: "info"
                            })
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "text-right",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledDropdown"], {
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownToggle"], {
                            color: "",
                            size: "sm",
                            className: "btn-icon-only text-light",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                              className: "fas fa-ellipsis-v"
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownMenu"], {
                            className: "dropdown-menu-arrow",
                            right: true,
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Action"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Another action"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Something else here"
                            })]
                          })]
                        })
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                        scope: "row",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
                          className: "align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar rounded-circle mr-3",
                            href: "#pablo",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("bBUN")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                              className: "name mb-0 text-sm",
                              children: "Vue Paper UI Kit PRO"
                            })
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "budget",
                        children: "$2200 USD"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
                          className: "badge-dot mr-4",
                          color: "",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                            className: "bg-success"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                            className: "status",
                            children: "completed"
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "avatar-group",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip460474820",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("9usk")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip460474820",
                            children: "Ryan Tompson"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip979995688",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("08Fa")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip979995688",
                            children: "Romina Hadid"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip732882700",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("JXq+")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip732882700",
                            children: "Alexander Smith"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip242724387",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("wSe6")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip242724387",
                            children: "Jessica Doe"
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "d-flex align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                            className: "completion mr-2",
                            children: "100%"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
                              max: "100",
                              value: "100",
                              color: "success"
                            })
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "text-right",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledDropdown"], {
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownToggle"], {
                            color: "",
                            size: "sm",
                            className: "btn-icon-only text-light",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                              className: "fas fa-ellipsis-v"
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownMenu"], {
                            className: "dropdown-menu-arrow",
                            right: true,
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Action"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Another action"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Something else here"
                            })]
                          })]
                        })
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                        scope: "row",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
                          className: "align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar rounded-circle mr-3",
                            href: "#pablo",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("anW6")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                              className: "name mb-0 text-sm",
                              children: "Argon Design System"
                            })
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "budget",
                        children: "$2500 USD"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
                          className: "badge-dot mr-4",
                          color: "",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                            className: "bg-warning"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                            className: "status",
                            children: "pending"
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "avatar-group",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip318080952",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("9usk")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip318080952",
                            children: "Ryan Tompson"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip221723068",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("08Fa")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip221723068",
                            children: "Romina Hadid"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip138748612",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("JXq+")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip138748612",
                            children: "Alexander Smith"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip431342349",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("wSe6")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip431342349",
                            children: "Jessica Doe"
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "d-flex align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                            className: "completion mr-2",
                            children: "60%"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
                              max: "100",
                              value: "60",
                              color: "warning"
                            })
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "text-right",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledDropdown"], {
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownToggle"], {
                            color: "",
                            size: "sm",
                            className: "btn-icon-only text-light",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                              className: "fas fa-ellipsis-v"
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownMenu"], {
                            className: "dropdown-menu-arrow",
                            right: true,
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Action"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Another action"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Something else here"
                            })]
                          })]
                        })
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                        scope: "row",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
                          className: "align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar rounded-circle mr-3",
                            href: "#pablo",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("5MOl")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                              className: "name mb-0 text-sm",
                              children: "Angular Now UI Kit PRO"
                            })
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "budget",
                        children: "$1800 USD"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
                          className: "badge-dot mr-4",
                          color: "",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                            className: "bg-success"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                            className: "status",
                            children: "completed"
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "avatar-group",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip384464413",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("9usk")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip384464413",
                            children: "Ryan Tompson"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip828512937",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("08Fa")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip828512937",
                            children: "Romina Hadid"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip409745485",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("JXq+")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip409745485",
                            children: "Alexander Smith"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip262162858",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("wSe6")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip262162858",
                            children: "Jessica Doe"
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "d-flex align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                            className: "completion mr-2",
                            children: "100%"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
                              max: "100",
                              value: "100",
                              color: "success"
                            })
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "text-right",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledDropdown"], {
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownToggle"], {
                            color: "",
                            size: "sm",
                            className: "btn-icon-only text-light",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                              className: "fas fa-ellipsis-v"
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownMenu"], {
                            className: "dropdown-menu-arrow",
                            right: true,
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Action"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Another action"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Something else here"
                            })]
                          })]
                        })
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                        scope: "row",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
                          className: "align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar rounded-circle mr-3",
                            href: "#pablo",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("mliW")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                              className: "name mb-0 text-sm",
                              children: "Black Dashboard"
                            })
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "budget",
                        children: "$3150 USD"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
                          className: "badge-dot mr-4",
                          color: "",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                            className: "bg-danger"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                            className: "status",
                            children: "delayed"
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "avatar-group",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip711925042",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("9usk")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip711925042",
                            children: "Ryan Tompson"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip664693924",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("08Fa")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip664693924",
                            children: "Romina Hadid"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip582913491",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("JXq+")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip582913491",
                            children: "Alexander Smith"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip699784330",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("wSe6")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip699784330",
                            children: "Jessica Doe"
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "d-flex align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                            className: "completion mr-2",
                            children: "72%"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
                              max: "100",
                              value: "72",
                              color: "danger"
                            })
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "text-right",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledDropdown"], {
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownToggle"], {
                            color: "",
                            size: "sm",
                            className: "btn-icon-only text-light",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                              className: "fas fa-ellipsis-v"
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownMenu"], {
                            className: "dropdown-menu-arrow",
                            right: true,
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Action"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Another action"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Something else here"
                            })]
                          })]
                        })
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                        scope: "row",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
                          className: "align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar rounded-circle mr-3",
                            href: "#pablo",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("5MOl")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                              className: "name mb-0 text-sm",
                              children: "Angular Now UI Kit PRO"
                            })
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "budget",
                        children: "$1800 USD"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
                          className: "badge-dot mr-4",
                          color: "",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                            className: "bg-success"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                            className: "status",
                            children: "completed"
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "avatar-group",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip912421317",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("9usk")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip912421317",
                            children: "Ryan Tompson"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip912012329",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("08Fa")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip912012329",
                            children: "Romina Hadid"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip366509724",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("JXq+")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip366509724",
                            children: "Alexander Smith"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                            className: "avatar avatar-sm rounded-circle",
                            href: "#pablo",
                            id: "tooltip569311457",
                            onClick: e => e.preventDefault(),
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                              alt: "...",
                              src: __webpack_require__("wSe6")
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledTooltip"], {
                            delay: 0,
                            target: "tooltip569311457",
                            children: "Jessica Doe"
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                          className: "d-flex align-items-center",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                            className: "completion mr-2",
                            children: "100%"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
                              max: "100",
                              value: "100",
                              color: "success"
                            })
                          })]
                        })
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "text-right",
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["UncontrolledDropdown"], {
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownToggle"], {
                            color: "",
                            size: "sm",
                            className: "btn-icon-only text-light",
                            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                              className: "fas fa-ellipsis-v"
                            })
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownMenu"], {
                            className: "dropdown-menu-arrow",
                            right: true,
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Action"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Another action"
                            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["DropdownItem"], {
                              href: "#pablo",
                              onClick: e => e.preventDefault(),
                              children: "Something else here"
                            })]
                          })]
                        })
                      })]
                    })]
                  })]
                })]
              })
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "card-deck",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
              className: "bg-gradient-default",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                  className: "mb-2",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("sup", {
                    className: "text-white",
                    children: "$"
                  }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                    className: "h2 text-white",
                    children: "3,300"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                    className: "text-light mt-2 text-sm",
                    children: "Your current balance"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                      className: "text-success font-weight-600",
                      children: "+ 15%"
                    }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                      className: "text-light",
                      children: "($250)"
                    })]
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
                  block: true,
                  className: "btn-neutral",
                  color: "default",
                  size: "sm",
                  children: "Add credit"
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                    className: "col",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                      className: "text-light",
                      children: "Orders: 60%"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
                      className: "progress-xs my-2",
                      max: "100",
                      value: "60",
                      color: "success"
                    })]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                    className: "col",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                      className: "text-light",
                      children: "Sales: 40%"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
                      className: "progress-xs my-2",
                      max: "100",
                      value: "40",
                      color: "warning"
                    })]
                  })]
                })
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
              className: "bg-gradient-danger",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
                  className: "justify-content-between align-items-center",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                    className: "col",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                      alt: "...",
                      src: __webpack_require__("OzqN")
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
                    className: "col-auto",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
                      className: "badge-lg",
                      color: "success",
                      children: "Active"
                    })
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                  className: "my-4",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                    className: "h6 surtitle text-light",
                    children: "Username"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                    className: "h1 text-white",
                    children: "@johnsnow"
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                    className: "col",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                      className: "h6 surtitle text-light",
                      children: "Name"
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                      className: "d-block h3 text-white",
                      children: "John Snow"
                    })]
                  })
                })]
              })
            })]
          })]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          xl: "8",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardHeader"], {
              className: "border-0",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
                className: "align-items-center",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                  className: "col",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
                    className: "mb-0",
                    children: "Page visits"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                  className: "col text-right",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
                    color: "primary",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    size: "sm",
                    children: "See all"
                  })
                })]
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Table"], {
              className: "align-items-center table-flush",
              responsive: true,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("thead", {
                className: "thead-light",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                    scope: "col",
                    children: "Page name"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                    scope: "col",
                    children: "Visitors"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                    scope: "col",
                    children: "Unique users"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                    scope: "col",
                    children: "Bounce rate"
                  })]
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tbody", {
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                    scope: "row",
                    children: "/argon/"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                    children: "4,569"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                    children: "340"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("td", {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                      className: "fas fa-arrow-up text-success mr-3"
                    }), "46,53%"]
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                    scope: "row",
                    children: "/argon/index.html"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                    children: "3,985"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                    children: "319"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("td", {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                      className: "fas fa-arrow-down text-warning mr-3"
                    }), "46,53%"]
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                    scope: "row",
                    children: "/argon/charts.html"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                    children: "3,513"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                    children: "294"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("td", {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                      className: "fas fa-arrow-down text-warning mr-3"
                    }), "36,49%"]
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                    scope: "row",
                    children: "/argon/tables.html"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                    children: "2,050"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                    children: "147"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("td", {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                      className: "fas fa-arrow-up text-success mr-3"
                    }), "50,87%"]
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                    scope: "row",
                    children: "/argon/profile.html"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                    children: "1,795"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                    children: "190"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("td", {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                      className: "fas fa-arrow-down text-danger mr-3"
                    }), "46,53%"]
                  })]
                })]
              })]
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          xl: "4",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardHeader"], {
              className: "border-0",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
                className: "align-items-center",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                  className: "col",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
                    className: "mb-0",
                    children: "Social traffic"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                  className: "col text-right",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
                    color: "primary",
                    href: "#pablo",
                    onClick: e => e.preventDefault(),
                    size: "sm",
                    children: "See all"
                  })
                })]
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Table"], {
              className: "align-items-center table-flush",
              responsive: true,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("thead", {
                className: "thead-light",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                    scope: "col",
                    children: "Referral"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                    scope: "col",
                    children: "Visitors"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                    scope: "col"
                  })]
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tbody", {
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                    scope: "row",
                    children: "Facebook"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                    children: "1,480"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                      className: "d-flex align-items-center",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                        className: "mr-2",
                        children: "60%"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
                          max: "100",
                          value: "60",
                          color: "gradient-danger"
                        })
                      })]
                    })
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                    scope: "row",
                    children: "Facebook"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                    children: "5,480"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                      className: "d-flex align-items-center",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                        className: "mr-2",
                        children: "70%"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
                          max: "100",
                          value: "70",
                          color: "gradient-success"
                        })
                      })]
                    })
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                    scope: "row",
                    children: "Google"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                    children: "4,807"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                      className: "d-flex align-items-center",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                        className: "mr-2",
                        children: "80%"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
                          max: "100",
                          value: "80",
                          clor: "gradient-primary"
                        })
                      })]
                    })
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                    scope: "row",
                    children: "Instagram"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                    children: "3,678"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                      className: "d-flex align-items-center",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                        className: "mr-2",
                        children: "75%"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
                          max: "100",
                          value: "75",
                          color: "gradient-info"
                        })
                      })]
                    })
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                    scope: "row",
                    children: "twitter"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                    children: "2,645"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                      className: "d-flex align-items-center",
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                        className: "mr-2",
                        children: "30%"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
                          max: "100",
                          value: "30",
                          color: "gradient-warning"
                        })
                      })]
                    })
                  })]
                })]
              })]
            })]
          })
        })]
      })]
    })]
  });
}

Dashboard.layout = layouts_Admin_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"];
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "t3hY":
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "v3H1":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/nextjs_argon_black-00653defbe44f7b5ed0e3926ec44f265.png";

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wSe6":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/team-4-230071328b705f8686cabd26a85ed6a5.jpg";

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ })

/******/ });