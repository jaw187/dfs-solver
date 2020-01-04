module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+oT+":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("eVuF");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

var _WeakMap = __webpack_require__("G4HQ");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
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

/***/ "7lOh":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

var _Object$defineProperties = __webpack_require__("2Eek");

var _Object$getOwnPropertyDescriptors = __webpack_require__("XoMD");

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$getOwnPropertySymbols = __webpack_require__("4mXO");

var _Object$keys = __webpack_require__("pLtp");

var _defineProperty = __webpack_require__("xHqa");

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

let id = 1;

const createPlayer = (points, salary, ownership, startTime) => ({
  points,
  pointz: points,
  salary,
  ownership,
  startTime,
  player: 1,
  id: ++id
});

module.exports = {
  nfl: {
    draftkings: {
      classic: {
        QB: (points, salary, ownership, startTime) => {
          const positions = {
            qb: 1,
            rb: 0,
            wr: 0,
            te: 0,
            dst: 0
          };
          const player = createPlayer(points, salary, ownership, startTime);
          return _objectSpread({}, player, {}, positions);
        },
        RB: (points, salary, ownership, startTime) => {
          const positions = {
            qb: 0,
            rb: 1,
            wr: 0,
            te: 0,
            dst: 0
          };
          const player = createPlayer(points, salary, ownership, startTime);
          return _objectSpread({}, player, {}, positions);
        },
        WR: (points, salary, ownership, startTime) => {
          const positions = {
            qb: 0,
            rb: 0,
            wr: 1,
            te: 0,
            dst: 0
          };
          const player = createPlayer(points, salary, ownership, startTime);
          return _objectSpread({}, player, {}, positions);
        },
        TE: (points, salary, ownership, startTime) => {
          const positions = {
            qb: 0,
            rb: 0,
            wr: 0,
            te: 1,
            dst: 0
          };
          const player = createPlayer(points, salary, ownership, startTime);
          return _objectSpread({}, player, {}, positions);
        },
        DST: (points, salary, ownership, startTime) => {
          const positions = {
            qb: 0,
            rb: 0,
            wr: 0,
            te: 0,
            dst: 1
          };
          const player = createPlayer(points, salary, ownership, startTime);
          return _objectSpread({}, player, {}, positions);
        }
      }
    }
  },
  golf: {
    draftkings: {
      classic: {
        G: (points, salary, ownership, startTime) => {
          const positions = {
            g: 1
          };
          const player = createPlayer(points, salary, ownership, startTime);
          return _objectSpread({}, player, {}, positions);
        }
      }
    }
  }
};

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("g/15");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      Component,
      ctx
    } = _ref;
    var pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "E/Kx":
/***/ (function(module, exports) {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "JPPj":
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "OdWO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "P5f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("XoMD");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("eVuF");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/header.js

var __jsx = external_react_default.a.createElement;
const headerStyle = {
  fontSize: 36,
  fontWeight: 900,
  paddingTop: 6,
  paddingRight: 16
};

const Header = () => __jsx("div", {
  style: headerStyle
}, "DFS Solver");

/* harmony default export */ var components_header = (Header);
// CONCATENATED MODULE: ./components/card.js

var card_jsx = external_react_default.a.createElement;
const layoutStyle = {
  padding: 24,
  border: '1px solid #DDD',
  backgroundColor: '#ffffff',
  boxShadow: '0 0 17px -5px hsla(0, 0%, 63%, .95)',
  marginRight: 48,
  marginBottom: 16
};

const Card = props => card_jsx("div", {
  style: layoutStyle
}, props.children);

/* harmony default export */ var card = (Card);
// EXTERNAL MODULE: external "@hapi/joi"
var joi_ = __webpack_require__("a8BA");
var joi_default = /*#__PURE__*/__webpack_require__.n(joi_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__("IbbU");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: ./components/utils.js
var utils = __webpack_require__("fmlw");

// CONCATENATED MODULE: ./components/importprojection.js

var importprojection_jsx = external_react_default.a.createElement;







const getState = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const importErrors = Object(external_react_redux_["useSelector"])(state => state.importErrors, external_react_redux_["shallowEqual"]);
  const rawProjection = Object(external_react_redux_["useSelector"])(state => state.rawProjection, external_react_redux_["shallowEqual"]);
  const projection = Object(external_react_redux_["useSelector"])(state => state.projection, external_react_redux_["shallowEqual"]);
  const view = Object(external_react_redux_["useSelector"])(state => state.view, external_react_redux_["shallowEqual"]);
  const slates = Object(external_react_redux_["useSelector"])(state => state.slates, external_react_redux_["shallowEqual"]);
  const selectedSlate = Object(external_react_redux_["useSelector"])(state => state.selectedSlate, external_react_redux_["shallowEqual"]);

  const setRawProjection = value => {
    dispatch({
      type: 'SET_RAW_PROJECTION',
      payload: value
    });
  };

  const importProjection = () => {
    Object(utils["log"])('import');
    dispatch({
      type: 'CLEAR_IMPORT_ERRORS'
    });

    if (!rawProjection) {
      Object(utils["log"])('import error empty textarea');
      return dispatch({
        type: 'ADD_IMPORT_ERROR',
        payload: new Error('empty textarea')
      });
    }

    const validationSchema = joi_default.a.object({
      player: joi_default.a.string().required(),
      value: joi_default.a.number().required(),
      ownership: joi_default.a.number().required()
    }); // track players, they should be unique

    const players = {}; // assumes that values will not contain commas

    let errors = false;
    const formattedProjection = rawProjection.split('\n').map(line => {
      const [player, projection, ownership] = line.indexOf(',') > 0 ? line.split(',') : line.split('\t');

      if (player === 'ID' || player === '') {
        return 'REMOVE';
      }

      const result = {
        player,
        value: Number(projection),
        ownership: Number(ownership)
      };

      if (players[player]) {
        errors = true;
        Object(utils["log"])('import error duplicate player');
        dispatch({
          type: 'ADD_IMPORT_ERROR',
          payload: new Error(`Duplicate player - ${player}`)
        });
      }

      players[player] = true;
      const validation = validationSchema.validate(result);

      if (validation.error) {
        errors = true;
        Object(utils["log"])('import error validation error');
        dispatch({
          type: 'ADD_IMPORT_ERROR',
          payload: validation
        });
      }

      return result;
    }).filter(result => result !== 'REMOVE');

    if (!errors) {
      Object(utils["log"])(`import ${formattedProjection.length} records`);
      dispatch({
        type: 'SET_PROJECTION',
        payload: formattedProjection
      });
    }
  };

  const exportTemplate = () => {
    if (slates && selectedSlate) {
      Object(utils["log"])(`export template`);
      const {
        players
      } = slates[selectedSlate];

      const format = player => {
        return `${player.displayName},${player.draftableId},,50`;
      };

      const header = "Do not copy the player name column as well as this row\nName,ID,Projection,Ownership\n";
      const csv = "data:text/csv;charset=utf-8," + header + players.map(format).join('\n');
      const {
        encodeURI
      } = window;
      const downloadLink = document.createElement("a");
      downloadLink.href = encodeURI(csv);
      downloadLink.download = `${selectedSlate} - Projections.csv`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return {
    setRawProjection,
    projection,
    importErrors,
    importProjection,
    view,
    exportTemplate
  };
};

const importprojection_componentContainer = {
  padding: 16
};
const importprojection_cardContainer = {
  display: 'flex',
  flexDirection: 'row'
};
const placeholder = `Copy and paste a csv or tab deliminated file of your own projections with desired ownership percentages.  Format each line of your csv like this:

player id, projection, desired ownership

or for a tab deliminated file, like this:
player id projection  desired ownership
`;

const ImportProjection = () => {
  const {
    importErrors,
    projection,
    setRawProjection,
    importProjection,
    view,
    exportTemplate
  } = getState();

  if (view !== 'importprojections') {
    return null;
  }

  const onChange = event => setRawProjection(event.target.value);

  const textAreaStyle = {
    width: 480,
    padding: 8
  };
  const buttonsContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 24
  };
  const buttonContainerStyle = {
    paddingRight: 24
  };
  const buttonStyle = {
    paddingLeft: 36,
    paddingRight: 36
  };
  const infoContainer = {
    paddingBottom: 36
  };
  return importprojection_jsx("div", {
    style: importprojection_componentContainer
  }, importprojection_jsx("h2", {
    style: {
      marginTop: 0
    }
  }, "Your Projections"), importprojection_jsx("div", {
    style: importprojection_cardContainer
  }, importprojection_jsx(card, null, !projection && importprojection_jsx("div", {
    style: infoContainer
  }, "DFS Solver is a Bring Your Own Projection system.  You'll need to copy and paste your projections into the text area below. Use the Export Template button to download a sheet with proper player id's for your selected slate."), importErrors && !!importErrors.length && importprojection_jsx("div", {
    style: infoContainer
  }, importprojection_jsx("h3", {
    style: {
      marginTop: 0
    }
  }, "Import Has Errors"), importprojection_jsx("ul", null, importErrors.map(err => importprojection_jsx("li", null, err.error && err.error.toString() || err.toString())))), projection && importprojection_jsx("div", {
    style: infoContainer
  }, importprojection_jsx("h3", {
    style: {
      marginTop: 0
    }
  }, "Current Projection"), importprojection_jsx("div", null, `Projections for ${projection.length} players`)), importprojection_jsx("div", {
    style: buttonsContainerStyle
  }, importprojection_jsx("div", {
    style: buttonContainerStyle
  }, importprojection_jsx(Button_default.a, {
    variant: "contained",
    onClick: importProjection,
    color: "primary",
    style: buttonStyle
  }, "Import Projections")), importprojection_jsx("div", {
    style: buttonContainerStyle
  }, importprojection_jsx(Button_default.a, {
    variant: "contained",
    onClick: exportTemplate,
    color: "secondary",
    style: buttonStyle
  }, "Export Template"))), importprojection_jsx(TextField_default.a, {
    id: "standard-multiline-static",
    label: "Import projections",
    multiline: true,
    rows: "28",
    placeholder: placeholder,
    variant: "outlined",
    style: textAreaStyle,
    onChange: onChange
  }))));
};

/* harmony default export */ var importprojection = (ImportProjection);
// EXTERNAL MODULE: external "@material-ui/core/InputLabel"
var InputLabel_ = __webpack_require__("zOcm");
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__("x54t");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__("lWoh");
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// EXTERNAL MODULE: external "@material-ui/core/Select"
var Select_ = __webpack_require__("OdWO");
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);

// CONCATENATED MODULE: ./components/slatepicker.js

var slatepicker_jsx = external_react_default.a.createElement;









const slatepicker_getState = () => {
  const slates = Object(external_react_redux_["useSelector"])(state => state.slates, external_react_redux_["shallowEqual"]);
  const view = Object(external_react_redux_["useSelector"])(state => state.view);
  const projection = Object(external_react_redux_["useSelector"])(state => state.projection);
  const selectedSlate = Object(external_react_redux_["useSelector"])(state => state.selectedSlate);
  const dispatch = Object(external_react_redux_["useDispatch"])();

  const setSelectedSlate = selected => {
    console.log('set', {
      type: 'SET_SELECTED_SLATE',
      payload: selected
    });
    dispatch({
      type: 'SET_SELECTED_SLATE',
      payload: selected
    });
    const nextView = projection ? 'playerpool' : 'importprojections';
    dispatch({
      type: 'SET_VIEW',
      payload: nextView
    });
  };

  return {
    slates,
    setSelectedSlate,
    view,
    selectedSlate
  };
};

const SlatePicker = () => {
  const {
    slates,
    setSelectedSlate,
    view,
    selectedSlate
  } = slatepicker_getState();

  const draftGroupIds = keys_default()(slates);

  let selected = draftGroupIds && draftGroupIds[0];

  const selectSlate = () => setSelectedSlate(selected);

  const onChange = event => {
    setSelectedSlate(event.target.value);
  };

  const cardContainer = {
    display: 'flex',
    flexDirection: 'row'
  };
  const componentContainer = {
    padding: 16
  };
  const buttonContainerStyle = {
    paddingTop: 16
  };

  if (view !== 'slatepicker') {
    return null;
  }

  return slatepicker_jsx("div", {
    style: componentContainer
  }, slatepicker_jsx("h2", {
    style: {
      marginTop: 0
    }
  }, "Upcoming Slates"), slatepicker_jsx("div", {
    style: cardContainer
  }, slatepicker_jsx(card, null, slatepicker_jsx("div", null, slatepicker_jsx(FormControl_default.a, {
    style: {
      minWidth: 480
    }
  }, slatepicker_jsx(InputLabel_default.a, {
    id: "select-label"
  }, "Select a slate"), slatepicker_jsx(Select_default.a, {
    onChange: onChange,
    labelId: "select-label",
    value: selectedSlate
  }, draftGroupIds && draftGroupIds.map(draftGroupId => {
    const slate = slates[draftGroupId];
    const startTime = new Date(slate.StartDateEdt.substring(6, slate.StartDateEdt.length - 2) - 0);
    const lineText = `${slate.SportDisplayName} ${slate.GameType.GameStyle.Name} on ${startTime} ${slate.ContestStartTimeSuffix || ''}`;
    return slatepicker_jsx(MenuItem_default.a, {
      value: draftGroupId,
      key: draftGroupId
    }, lineText);
  })))), slatepicker_jsx("div", {
    style: buttonContainerStyle
  }, slatepicker_jsx(Button_default.a, {
    variant: "contained",
    onClick: selectSlate,
    color: "primary"
  }, "Select")))));
};

/* harmony default export */ var slatepicker = (SlatePicker);
// EXTERNAL MODULE: external "@material-ui/core/Slider"
var Slider_ = __webpack_require__("bfSA");
var Slider_default = /*#__PURE__*/__webpack_require__.n(Slider_);

// EXTERNAL MODULE: external "@material-ui/core/Input"
var Input_ = __webpack_require__("tBFs");
var Input_default = /*#__PURE__*/__webpack_require__.n(Input_);

// CONCATENATED MODULE: ./components/stacks.js
var stacks_jsx = external_react_default.a.createElement;








const stacks_getState = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const stacks = Object(external_react_redux_["useSelector"])(state => state.stacks, external_react_redux_["shallowEqual"]);
  const view = Object(external_react_redux_["useSelector"])(state => state.view);
  const stackCounts = Object(external_react_redux_["useSelector"])(state => state.stackCounts);

  const removeStack = i => dispatch({
    type: "REMOVE_STACK",
    payload: i
  });

  const setStackN = (i, n) => {
    dispatch({
      type: "SET_STACK_N",
      payload: {
        i,
        n
      }
    });
  };

  const moveStack = (j, which) => {
    dispatch({
      type: "MOVE_STACK",
      payload: {
        j,
        which
      }
    });
  };

  return {
    stacks,
    removeStack,
    setStackN,
    view,
    stackCounts,
    moveStack
  };
};

const Stacks = () => {
  const {
    stacks,
    removeStack,
    setStackN,
    view,
    stackCounts,
    moveStack
  } = stacks_getState();

  if (view !== 'stackbuilder') {
    return null;
  }

  if (!stacks || stacks.length === 0) {
    return null;
  }

  const remove = i => {
    return () => {
      Object(utils["log"])('stack remove');
      removeStack(i);
    };
  };

  const onChange = i => {
    return event => {
      event.target.value = Number(event.target.value);
      setStackN(i, event.target.value);
    };
  };

  const cardContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: "wrap"
  };
  const marks = [{
    value: 0
  }, {
    value: 5
  }, {
    value: 10
  }, {
    value: 15
  }];

  const handleSliderChange = i => {
    return (event, newValue) => {
      setStackN(i, newValue);
    };
  };

  const handleInputChange = i => {
    return event => {
      const newValue = event.target.value === '' ? '' : Number(event.target.value);
      setStackN(i, newValue);
    };
  };

  const handleBlur = i => {
    return () => {
      if (stackCounts[i] < 0) {
        setStackN(i, 1);
      } else if (stackCounts[i] > 20) {
        setStackN(i, 20);
      }
    };
  };

  const move = (j, which) => {
    return () => {
      moveStack(j, which);
    };
  };

  return stacks_jsx("div", null, stacks_jsx("h2", {
    style: {
      marginTop: 0
    }
  }, "Stacks"), stacks_jsx("div", {
    style: cardContainer
  }, stacks.map((stack, j) => {
    if (!stackCounts[j]) {
      stackCounts[j] = 10;
    }

    return stacks_jsx(card, null, stacks_jsx("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
      },
      key: j
    }, stacks_jsx("div", {
      style: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }
    }, stacks_jsx("div", {
      onClick: move(j, 'left')
    }, "Move Left"), stacks_jsx("div", {
      onClick: move(j, 'right')
    }, "Move Right")), stacks_jsx("div", {
      style: {
        display: 'flex'
      }
    }, stacks_jsx("ul", null, stack.map((player, i) => stacks_jsx("li", {
      key: i
    }, player.displayName)))), stacks_jsx("div", {
      style: {
        display: "flex",
        flexDirection: "row"
      }
    }, stacks_jsx("div", {
      style: {
        minWidth: 240,
        marginRight: 16
      }
    }, "No. of lineups", stacks_jsx(Slider_default.a, {
      defaultValue: stackCounts[j],
      value: stackCounts[j],
      step: 1,
      marks: marks,
      min: 1,
      max: 20,
      onChange: handleSliderChange(j),
      "aria-labelledby": "input-slider"
    })), stacks_jsx("div", {
      style: {
        marginTop: 4
      }
    }, stacks_jsx(Input_default.a, {
      value: stackCounts[j],
      margin: "dense",
      onChange: handleInputChange(j),
      onBlur: handleBlur(j),
      inputProps: {
        step: 1,
        min: 1,
        max: 20,
        type: 'number',
        'aria-labelledby': 'input-slider'
      }
    }))), stacks_jsx("div", {
      style: {
        display: "flex",
        flexDirection: "row"
      }
    }), stacks_jsx("div", {
      style: {
        display: 'flex'
      }
    }, stacks_jsx(Button_default.a, {
      onClick: remove(j),
      variant: "contained",
      color: "secondary"
    }, "Delete"))));
  })));
};

/* harmony default export */ var components_stacks = (Stacks);
// CONCATENATED MODULE: ./components/stackbuilder.js
var stackbuilder_jsx = external_react_default.a.createElement;






const stackbuilder_getState = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    pool,
    stack,
    slates,
    selectedSlate,
    view
  } = Object(external_react_redux_["useSelector"])(state => state, external_react_redux_["shallowEqual"]);

  const clearStack = () => dispatch({
    type: "CLEAR_STACK"
  });

  const addStack = () => dispatch({
    type: "ADD_STACK",
    payload: stack
  });

  const removeStack = i => dispatch({
    type: "REMOVE_STACK",
    payload: i
  });

  const addPlayerToStack = player => dispatch({
    type: "ADD_PLAYER_TO_STACK",
    payload: player
  });

  const removePlayerFromStack = player => dispatch({
    type: "REMOVE_PLAYER_FROM_STACK",
    payload: player
  });

  return {
    pool,
    stack,
    slate: slates[selectedSlate],
    clearStack,
    addStack,
    removeStack,
    addPlayerToStack,
    removePlayerFromStack,
    view
  };
};

const StackBuilder = () => {
  const {
    pool,
    stack,
    slate,
    clearStack,
    addStack,
    addPlayerToStack,
    removePlayerFromStack,
    view
  } = stackbuilder_getState();

  if (view !== 'stackbuilder') {
    return null;
  }

  if (!pool.length) {
    return stackbuilder_jsx("div", null, "Pick players for pool first.");
  }

  const togglePlayer = player => {
    return () => {
      const inStack = stack && !!stack.find(stackPlayer => player.playerId === stackPlayer.playerId);

      if (inStack) {
        return removePlayerFromStack(player);
      }

      addPlayerToStack(player);
    };
  };

  const checkboxes = [];

  const clear = () => {
    checkboxes.forEach(checkbox => {
      checkbox.current.checked = false;
    });
    clearStack();
  };

  const add = () => {
    Object(utils["log"])('stack add');
    addStack();
    clear();
  };

  const componentContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 16
  };
  const cardContainer = {
    display: 'flex',
    flexDirection: 'row'
  };
  return stackbuilder_jsx("div", {
    style: componentContainer
  }, stackbuilder_jsx("div", null, stackbuilder_jsx("h2", {
    style: {
      marginTop: 0
    }
  }, "Stack Builder"), stackbuilder_jsx("div", {
    style: cardContainer
  }, stackbuilder_jsx(card, null, stackbuilder_jsx("div", null, stackbuilder_jsx("div", {
    style: {
      display: "flex",
      flexDirection: "row"
    }
  }, stackbuilder_jsx("div", {
    style: {
      minWidth: 240
    }
  }, stackbuilder_jsx("h3", null, "Players"), pool && pool.map((player, i) => {
    const ref = external_react_default.a.createRef();
    checkboxes.push(ref);
    return stackbuilder_jsx("div", null, stackbuilder_jsx("input", {
      ref: ref,
      type: "checkbox",
      onClick: togglePlayer(player),
      key: i
    }), player.displayName, " - $", player.salary);
  })), stackbuilder_jsx("div", {
    style: {
      paddingLeft: 16,
      minWidth: 240
    }
  }, stackbuilder_jsx("h3", null, "Stack"), stackbuilder_jsx("ul", null, stack && stack.map((player, i) => stackbuilder_jsx("li", {
    key: i
  }, player.displayName))), stack && stack.length > 1 && stackbuilder_jsx("div", null, stackbuilder_jsx("button", {
    onClick: add
  }, "Add"), stackbuilder_jsx("button", {
    onClick: clear
  }, "Clear")))))))), stackbuilder_jsx("div", null, stackbuilder_jsx(components_stacks, null)));
};

/* harmony default export */ var stackbuilder = (StackBuilder);
// EXTERNAL MODULE: ./solver/solve.worker.js
var solve_worker = __webpack_require__("xyLz");
var solve_worker_default = /*#__PURE__*/__webpack_require__.n(solve_worker);

// CONCATENATED MODULE: ./solver/players.js








function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }

const rosters = __webpack_require__("7lOh");

const convertPlayer = (rawPlayer, positions) => {
  const {
    draftableId,
    salary,
    position,
    projection,
    ownership,
    competition: {
      startTime
    }
  } = rawPlayer;
  const playerPositions = position.split('/');
  const primaryPosition = playerPositions.shift();
  const player = positions[primaryPosition](projection, salary, ownership, new Date(startTime));
  playerPositions.forEach(extraPosition => {
    player[extraPosition] = 1;
  });
  player[draftableId] = 1;
  return player;
};

const convertPlayers = (rawPlayers, rawProjections, sport, site, type) => {
  const positions = rosters[sport][site][type];
  const projections = {};
  rawProjections.forEach(rawProjection => {
    const {
      value,
      ownership,
      player
    } = rawProjection;
    projections[player] = {
      value,
      ownership
    };
  });
  const players = {};
  rawPlayers.forEach(rawPlayer => {
    const {
      draftableId
    } = rawPlayer; // Ignore players without a projection

    if (!projections[draftableId]) {
      return null;
    }

    const {
      value,
      ownership
    } = projections[draftableId];

    const player = _objectSpread({}, rawPlayer, {
      ownership,
      projection: value
    });

    players[draftableId] = convertPlayer(player, positions);
  });
  return players;
};

const players_players = {
  convertPlayers
};
/* harmony default export */ var solver_players = (players_players);
/*
module.exports = {
  'Taysom Hill': positions.qb(1000, 1000, 100, new Date()),
  'Matt Ryan': positions.qb(100, 10000, 100, new Date()),
  'Drew Brees': positions.qb(100, 10000, 100, new Date()),
  'David Blough': positions.qb(500, 500, 100, new Date()),
  'Devin Singletary': positions.rb(1000, 10000, 100, new Date(3)),
  'Zeke': positions.rb(1000, 1000, 100, new Date(2)),
  'Kamara': positions.rb(100, 10000, 100, new Date()),
  'David Montgomery': positions.rb(145, 3344, 50, new Date(1)),
  'Bo': positions.rb(66, 8745, 50, new Date()),
  'Kenny Golladay': positions.wr(1000, 1000, 100, new Date(10000)),
  'Michael Thomas': positions.wr(100, 6780, 50, new Date()),
  'Cole Beasley': positions.wr(10000, 10000, 100, new Date(0)),
  'Anthony Miller': positions.wr(900, 6788, 50, new Date(54545454545454)),
  'Russell Gage Jr': positions.wr(100, 100, 50, new Date()),
  'Calvin Ridley': positions.wr(1000, 1000, 100, new Date(-1)),
  'Julio Jones': positions.wr(0, 100, 50, new Date()),
  'Dawson Knox': positions.te(5, 1000, 50, new Date()),
  'Jason Whitten': positions.te(15, 1000, 50, new Date()),
  'Jared Cook': positions.te(7, 1000, 50, new Date()),
  'Jaedeanaean Graham': positions.te(25, 4500, 50, new Date()),
  'Bears': positions.dst(5, 1000, 50, new Date()),
  'Lions': positions.dst(5, 1000, 50, new Date()),
  'Tigers': positions.dst(500, 1000, 100, new Date())
}
*/
// EXTERNAL MODULE: ./solver/models.js
var models = __webpack_require__("ezx2");
var models_default = /*#__PURE__*/__webpack_require__.n(models);

// CONCATENATED MODULE: ./solver/index.js



const Solver = {
  Worker: solve_worker_default.a,
  players: solver_players,
  Models: models_default.a
};
/* harmony default export */ var solver = (Solver);
// EXTERNAL MODULE: external "lodash/clone"
var clone_ = __webpack_require__("lEqE");
var clone_default = /*#__PURE__*/__webpack_require__.n(clone_);

// CONCATENATED MODULE: ./components/generator.js

var generator_jsx = external_react_default.a.createElement;





const {
  Models,
  players: generator_players,
  Worker
} = solver;

const generator_getState = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const stacks = Object(external_react_redux_["useSelector"])(state => state.stacks, external_react_redux_["shallowEqual"]);
  const stackCounts = Object(external_react_redux_["useSelector"])(state => state.stackCounts, external_react_redux_["shallowEqual"]);
  const slates = Object(external_react_redux_["useSelector"])(state => state.slates, external_react_redux_["shallowEqual"]);
  const selectedSlate = Object(external_react_redux_["useSelector"])(state => state.selectedSlate);
  const projection = Object(external_react_redux_["useSelector"])(state => state.projection);
  const results = Object(external_react_redux_["useSelector"])(state => state.results);
  const pool = Object(external_react_redux_["useSelector"])(state => state.pool);
  const view = Object(external_react_redux_["useSelector"])(state => state.view);

  const addResults = results => {
    dispatch({
      type: 'ADD_RESULT',
      payload: results
    });
  };

  return {
    stacks,
    stackCounts,
    slates,
    selectedSlate,
    projection,
    addResults,
    results,
    pool,
    view
  };
};

const Generator = () => {
  const {
    stacks,
    stackCounts,
    slates,
    selectedSlate,
    projection,
    addResults,
    results,
    pool,
    view
  } = generator_getState();

  if (view !== 'generator') {
    return null;
  }

  if (!projection || stacks.length === 0) {
    const issues = [];

    if (stacks.length === 0) {
      issues.push(generator_jsx("div", null, "You need to create stacks first"));
    }

    if (!projection) {
      issues.push(generator_jsx("div", null, "You need to import projections first"));
    }

    return generator_jsx("div", null, issues.map(issue => generator_jsx("div", null, issue)));
  }

  const slate = slates && slates[selectedSlate];
  const sport = slate.Sport.toLowerCase();
  const site = 'draftkings';
  const type = slate.GameType.Name.toLowerCase();

  const generate = () => {
    Object(utils["log"])('generate');
    const playersForModel = generator_players.convertPlayers(pool, projection, sport, site, type);
    let n = 0;
    stackCounts.forEach(count => {
      n = n + count;
    });
    const worker = new Worker();
    stacks.forEach((stack, i) => {
      const stackPlayers = clone_default()(playersForModel);
      const model = Models[sport][site][type](stackPlayers); // Force players in stack into lineup

      stack.forEach(player => model.constraints[player.draftableId] = {
        equal: 1
      });
      const ownershipOptions = {
        players: stackPlayers,
        n: stackCounts[i],
        stack
      };
      worker.postMessage({
        action: 'ownership',
        options: ownershipOptions
      });
      const enqueueOptions = {
        action: 'enqueue',
        n: stackCounts[i],
        maxIterations: 500,
        model,
        players: stackPlayers,
        sport,
        site,
        type
      };
      worker.postMessage(enqueueOptions);
    });
    worker.postMessage({
      action: 'solve'
    });
    worker.addEventListener('message', event => {
      const results = event.data;
      Object(utils["log"])(`generated ${results.length} lineups`);

      if (results.length) {
        addResults(results);
      }
    });
  };

  const formatPlayer = draftableId => {
    const player = slate.players.find(player => player.draftableId == draftableId);

    if (!player) {
      return draftableId;
    }

    return `${player.position} - ${player.displayName} - ${player.salary}`;
  };

  return generator_jsx(card, null, generator_jsx("h2", null, "Generator"), generator_jsx("button", {
    onClick: generate
  }, "Generate"), generator_jsx("ul", null, stacks.map((stack, i) => generator_jsx("li", {
    key: i
  }, "Stack with ", stackCounts[i], " lineups"))));
};

/* harmony default export */ var generator = (Generator);
// EXTERNAL MODULE: external "@material-ui/core/Checkbox"
var Checkbox_ = __webpack_require__("r6Lb");

// EXTERNAL MODULE: external "@material-ui/core/Collapse"
var Collapse_ = __webpack_require__("igu8");

// CONCATENATED MODULE: ./components/pool.js







var pool_jsx = external_react_default.a.createElement;

function pool_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function pool_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pool_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { pool_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }













const pool_getState = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    slates,
    selectedSlate,
    pool,
    view,
    projection,
    poolSalaryRange,
    showPoolTools
  } = Object(external_react_redux_["useSelector"])(state => state, external_react_redux_["shallowEqual"]);

  const addPlayerToPool = player => dispatch({
    type: "ADD_PLAYER_TO_POOL",
    payload: player
  });

  const removePlayerFromPool = player => dispatch({
    type: "REMOVE_PLAYER_FROM_POOL",
    payload: player
  });

  const clearPool = () => dispatch({
    type: "CLEAR_POOL"
  });

  const setPoolSalaryRange = range => dispatch({
    type: "SET_POOL_SALARY_RANGE",
    payload: range
  });

  const togglePoolTools = () => dispatch({
    type: "TOGGLE_POOL_TOOLS"
  });

  return {
    slates,
    selectedSlate,
    pool,
    addPlayerToPool,
    removePlayerFromPool,
    view,
    projection,
    clearPool,
    setPoolSalaryRange,
    poolSalaryRange,
    showPoolTools,
    togglePoolTools
  };
};

const Pool = () => {
  const {
    slates,
    selectedSlate,
    pool,
    addPlayerToPool,
    removePlayerFromPool,
    view,
    projection,
    clearPool,
    setPoolSalaryRange,
    poolSalaryRange = [2500, 13000],
    showPoolTools,
    togglePoolTools
  } = pool_getState();

  if (view !== 'playerpool') {
    return null;
  }

  const slate = slates && slates[selectedSlate];

  if (!slate) {
    return pool_jsx("div", null, "Pick a slate first");
  }

  const poolPositions = {};
  slate.players.forEach(player => {
    const positions = player.position.split('/');
    positions.forEach(position => {
      if (!poolPositions[position]) {
        poolPositions[position] = [];
      }

      poolPositions[position].push(player);
    });
  });

  const togglePlayer = player => {
    return () => {
      const inPool = pool && !!pool.find(poolPlayer => player.playerId === poolPlayer.playerId);

      if (inPool) {
        return removePlayerFromPool(player);
      }

      addPlayerToPool(player);
    };
  };

  const checkboxes = [];

  const clear = () => {
    checkboxes.forEach(checkbox => {
      checkbox.current.checked = false;
    });
    clearPool();
  };

  const cardContainer = {
    display: 'flex',
    flexDirection: 'row'
  };
  const componentContainer = {
    padding: 16
  };

  const positionCard = which => {
    const players = poolPositions[which];

    if (!players) {
      return null;
    }

    const playerContainerStyle = {
      whiteSpace: 'nowrap',
      fontSize: 12
    };

    const missingProjectionStyle = pool_objectSpread({}, playerContainerStyle, {
      color: 'red'
    });

    const checkboxStyle = {
      marginRight: 8
    };
    return pool_jsx(card, null, pool_jsx("h3", {
      style: {
        marginTop: 0
      }
    }, which.toUpperCase()), players && players.map((player, i) => {
      const ref = external_react_default.a.createRef();
      checkboxes.push(ref);
      const hasProjection = projection && projection.filter(row => row.player == player.draftableId).length === 1;
      const style = hasProjection ? playerContainerStyle : missingProjectionStyle;
      const inPool = pool && !!pool.find(poolPlayer => player.playerId === poolPlayer.playerId);
      return pool_jsx("div", {
        style: style,
        key: i
      }, pool_jsx("label", null, pool_jsx("input", {
        ref: ref,
        style: checkboxStyle,
        type: "checkbox",
        onClick: togglePlayer(player),
        checked: inPool
      }), player.displayName, " - $", player.salary));
    }));
  };

  const games = slate;

  const valuetext = value => {
    return `$${value}`;
  };

  const setRange = (event, range) => {
    setPoolSalaryRange(range);
  };

  const marks = [{
    value: 3000,
    label: '$3,000'
  }, {
    value: 5500,
    label: '$5,500'
  }, {
    value: 10000,
    label: '$10,000'
  }];
  return pool_jsx("div", {
    style: componentContainer
  }, pool_jsx("h2", {
    style: {
      marginTop: 0
    }
  }, "Player Pool"), pool_jsx("div", {
    style: cardContainer
  }, pool_jsx("div", {
    style: {
      color: 'red',
      paddingBottom: 24
    }
  }, "Player names in red indicate missing projection")), pool_jsx("div", {
    style: cardContainer
  }, positionCard("QB"), positionCard("RB"), positionCard("WR"), positionCard("TE"), positionCard("DST"), positionCard("G")));
};

/* harmony default export */ var components_pool = (Pool);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");

// CONCATENATED MODULE: ./components/navigation.js








var navigation_jsx = external_react_default.a.createElement;

function navigation_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function navigation_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { navigation_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { navigation_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }




const navigation_getState = () => {
  const view = Object(external_react_redux_["useSelector"])(state => state.view, external_react_redux_["shallowEqual"]);
  const dispatch = Object(external_react_redux_["useDispatch"])();

  const setView = selected => {
    dispatch({
      type: 'SET_VIEW',
      payload: selected
    });
  };

  return {
    view,
    setView
  };
};

const Navigation = () => {
  const {
    view,
    setView
  } = navigation_getState();

  const clear = () => {
    if (window && window.localStorage) {
      window.localStorage.clear();
      window.location.reload(true);
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row'
  };
  const linkContainerStyle = {
    padding: 16
  };
  const buttonStyle = {
    padding: '8px 16px 8px 16px',
    border: 'none',
    outline: 'none',
    backgroundColor: '#f6f6f6'
  };

  const selectedButtonStyle = navigation_objectSpread({}, buttonStyle, {
    backgroundColor: '#f60',
    color: '#fff'
  });

  const clearButtonStyle = navigation_objectSpread({}, buttonStyle, {
    backgroundColor: 'red',
    color: '#fff'
  });

  const set = which => {
    return () => setView(which);
  };

  const navigationButton = (id, display) => navigation_jsx("div", {
    style: linkContainerStyle
  }, navigation_jsx("button", {
    style: view === id ? selectedButtonStyle : buttonStyle,
    onClick: set(id),
    selected: true
  }, display));

  return navigation_jsx("div", {
    style: containerStyle
  }, navigationButton('slatepicker', 'Slate'), navigationButton('importprojections', 'Projections'), navigationButton('playerpool', 'Player Pool'), navigationButton('stackbuilder', 'Stacks'), navigationButton('generator', 'Generate'), navigationButton('results', 'Lineups'), navigation_jsx("div", {
    style: linkContainerStyle
  }, navigation_jsx("button", {
    style: clearButtonStyle,
    onClick: clear
  }, "Clear")));
};

/* harmony default export */ var navigation = (Navigation);
// CONCATENATED MODULE: ./components/lineups.js


var lineups_jsx = external_react_default.a.createElement;




const {
  solve,
  Models: lineups_Models,
  players: lineups_players
} = solver;

const lineups_getState = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const slates = Object(external_react_redux_["useSelector"])(state => state.slates, external_react_redux_["shallowEqual"]);
  const selectedSlate = Object(external_react_redux_["useSelector"])(state => state.selectedSlate);
  const projection = Object(external_react_redux_["useSelector"])(state => state.projection);
  const results = Object(external_react_redux_["useSelector"])(state => state.results);
  const view = Object(external_react_redux_["useSelector"])(state => state.view);

  const removeLineup = i => {
    dispatch({
      type: 'REMOVE_RESULT',
      payload: i
    });
  };

  return {
    slates,
    selectedSlate,
    projection,
    results,
    view,
    removeLineup
  };
};

const Lineups = () => {
  const {
    slates,
    selectedSlate,
    projection,
    results,
    view,
    removeLineup
  } = lineups_getState();

  if (view !== 'results') {
    return null;
  }

  if (results.length === 0) {
    return lineups_jsx("div", null, "Generate some lineups");
  }

  const slate = slates && slates[selectedSlate];
  const sport = slate.Sport.toLowerCase();
  const site = 'draftkings';
  const type = slate.GameType.Name.toLowerCase();

  const formatPlayer = lineupPlayer => {
    const player = slate.players.find(player => player.draftableId == lineupPlayer.id);

    if (!player) {
      return lineupPlayer.id;
    }

    return `${player.position} - ${player.displayName} - $${player.salary}`;
  };

  const headers = {
    nfl: {
      draftkings: {
        classic: "QB,RB,RB,WR,WR,WR,TE,FLEX,DST\n"
      }
    },
    golf: {
      draftkings: {
        classic: "G,G,G,G,G,G\n"
      }
    }
  };
  const exporters = {
    nfl: {
      draftkings: {
        classic: result => {
          const {
            lineup: {
              qb,
              rbs,
              wrs,
              te,
              flex,
              dst
            }
          } = result;
          return `${qb.id},${rbs[0].id},${rbs[1].id},${wrs[0].id},${wrs[1].id},${wrs[2].id},${te.id},${flex.id},${dst.id}`;
        }
      }
    },
    golf: {
      draftkings: {
        classic: result => {
          const {
            lineup: {
              g
            }
          } = result;
          return `${g[0].id},${g[1].id},${g[2].id},${g[3].id},${g[4].id},${g[5].id}`;
        }
      }
    }
  };

  const exportToCSV = () => {
    Object(utils["log"])('export linieups');
    const header = headers[sport][site][type];
    const csv = "data:text/csv;charset=utf-8," + header + results.map(exporters[sport][site][type]).join('\n');
    const {
      encodeURI
    } = window;
    const downloadLink = document.createElement("a");
    downloadLink.href = encodeURI(csv);
    downloadLink.download = `${selectedSlate} - Lineups.csv`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const remove = i => {
    Object(utils["log"])('remove lineup');
    return () => removeLineup(i);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  };
  const lineupStyle = {
    padding: 16,
    margin: 8,
    backgroundColor: "#f3f3f3",
    border: '1px solid #DDD',
    fontSize: 12
  };
  const cardContainer = {
    display: 'flex',
    flexDirection: 'row'
  };
  const componentContainer = {
    padding: 16
  };
  const playerCounts = {};
  results.forEach(result => {
    result.players.forEach(player => {
      if (!playerCounts[player]) {
        playerCounts[player] = 0;
      }

      ++playerCounts[player];
    });
  });

  const ownership = keys_default()(playerCounts).map(player => {
    return {
      player: formatPlayer({
        id: player
      }),
      count: playerCounts[player],
      percentage: (playerCounts[player] / results.length * 100).toFixed(0)
    };
  });

  const ownershipPlayerStyle = {
    whiteSpace: 'nowrap'
  };
  const lineupFormats = {
    nfl: {
      draftkings: {
        classic: (result, i) => lineups_jsx("div", {
          key: i,
          style: lineupStyle
        }, lineups_jsx("button", {
          onClick: remove(i)
        }, "Remove"), lineups_jsx("div", null, formatPlayer(result.lineup.qb)), lineups_jsx("div", null, formatPlayer(result.lineup.rbs[0])), lineups_jsx("div", null, formatPlayer(result.lineup.rbs[1])), lineups_jsx("div", null, formatPlayer(result.lineup.wrs[0])), lineups_jsx("div", null, formatPlayer(result.lineup.wrs[1])), lineups_jsx("div", null, formatPlayer(result.lineup.wrs[2])), lineups_jsx("div", null, formatPlayer(result.lineup.te)), lineups_jsx("div", null, formatPlayer(result.lineup.flex)), lineups_jsx("div", null, formatPlayer(result.lineup.dst)))
      }
    },
    golf: {
      draftkings: {
        classic: (result, i) => lineups_jsx("div", {
          key: i,
          style: lineupStyle
        }, lineups_jsx("button", {
          onClick: remove(i)
        }, "Remove"), lineups_jsx("div", null, formatPlayer(result.lineup.g[0])), lineups_jsx("div", null, formatPlayer(result.lineup.g[1])), lineups_jsx("div", null, formatPlayer(result.lineup.g[2])), lineups_jsx("div", null, formatPlayer(result.lineup.g[3])), lineups_jsx("div", null, formatPlayer(result.lineup.g[4])), lineups_jsx("div", null, formatPlayer(result.lineup.g[5])))
      }
    }
  };
  return lineups_jsx("div", {
    style: componentContainer
  }, lineups_jsx("h2", {
    style: {
      marginTop: 0
    }
  }, "Lineups"), lineups_jsx("div", {
    style: cardContainer
  }, lineups_jsx(card, null, lineups_jsx("h3", {
    style: {
      marginTop: 0
    }
  }, "Ownership"), !!ownership.length && lineups_jsx("div", null, ownership.map(data => lineups_jsx("div", {
    style: ownershipPlayerStyle
  }, data.player, " - ", data.count, " - ", data.percentage, "%")))), lineups_jsx(card, null, !!results.length && lineups_jsx("div", null, lineups_jsx("h3", {
    style: {
      marginTop: 0
    }
  }, results.length, " lineups"), lineups_jsx("button", {
    onClick: exportToCSV
  }, "Export"), lineups_jsx("div", {
    style: containerStyle
  }, results.map(lineupFormats[sport][site][type]))))));
};

/* harmony default export */ var lineups = (Lineups);
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__("VNb8");

// EXTERNAL MODULE: external "redux-persist/lib/storage"
var storage_ = __webpack_require__("T8f9");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_);

// CONCATENATED MODULE: ./store.js








function store_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { store_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { store_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }





const store_initialState = {
  slates: {},
  importErrors: [],
  stack: [],
  stacks: [],
  stackCounts: [],
  results: [],
  pool: [],
  view: 'slatepicker',
  showPoolTools: false
};

const reducer = (state = store_initialState, {
  type,
  payload
}) => {
  const stackCounts = [...state.stackCounts];

  switch (type) {
    case 'SET_SLATES':
      return store_objectSpread({}, state, {
        slates: store_objectSpread({}, payload)
      });

    case 'SET_SELECTED_SLATE':
      return store_objectSpread({}, state, {
        selectedSlate: payload
      });

    case 'CLEAR_IMPORT_ERRORS':
      return store_objectSpread({}, state, {
        importErrors: []
      });

    case 'ADD_IMPORT_ERROR':
      return store_objectSpread({}, state, {
        importErrors: state.importErrors.concat([payload])
      });

    case 'SET_RAW_PROJECTION':
      return store_objectSpread({}, state, {
        rawProjection: payload
      });

    case 'SET_PROJECTION':
      return store_objectSpread({}, state, {
        projection: payload
      });

    case 'CLEAR_STACK':
      return store_objectSpread({}, state, {
        stack: []
      });

    case 'ADD_STACK':
      return store_objectSpread({}, state, {
        stacks: state.stacks.concat([payload]),
        stackCounts: state.stackCounts.concat([0])
      });

    case 'REMOVE_STACK':
      return store_objectSpread({}, state, {
        stacks: state.stacks.filter((stack, i) => i !== payload),
        stackCounts: state.stackCounts.filter((n, i) => i !== payload)
      });

    case 'ADD_PLAYER_TO_STACK':
      return store_objectSpread({}, state, {
        stack: state.stack.concat([payload])
      });

    case 'REMOVE_PLAYER_FROM_STACK':
      return store_objectSpread({}, state, {
        stack: state.stack.filter(player => player.playerId !== payload.playerId)
      });

    case 'SET_STACK_N':
      const {
        i,
        n
      } = payload;
      stackCounts[i] = Number(n);
      return store_objectSpread({}, state, {
        stackCounts
      });

    case 'ADD_RESULT':
      return store_objectSpread({}, state, {
        results: state.results.concat(payload)
      });

    case 'REMOVE_RESULT':
      return store_objectSpread({}, state, {
        results: state.results.filter((result, i) => i !== payload)
      });

    case 'ADD_PLAYER_TO_POOL':
      return store_objectSpread({}, state, {
        pool: state.pool.concat([payload])
      });

    case 'REMOVE_PLAYER_FROM_POOL':
      return store_objectSpread({}, state, {
        pool: state.pool.filter(player => player.playerId !== payload.playerId)
      });

    case 'SET_VIEW':
      return store_objectSpread({}, state, {
        view: payload
      });

    case 'MOVE_STACK':
      const {
        j,
        which
      } = payload;
      const stacks = state.stacks.concat([]);
      const stack = stacks[j];

      if (which === "right" && j < stacks.length - 1) {
        const right = stacks[j + 1];
        stacks.splice(j, 1, right);
        stacks.splice(j + 1, 1, stack);
      }

      if (which === "left" && j > 0) {
        const left = stacks[j - 1];
        stacks.splice(j, 1, left);
        stacks.splice(j - 1, 1, stack);
      }

      return store_objectSpread({}, state, {
        stacks,
        stackCounts
      });

    case 'CLEAR_POOL':
      return store_objectSpread({}, state, {
        pool: []
      });

    case 'SET_POOL_SALARY_RANGE':
      return store_objectSpread({}, state, {
        poolSalaryRange: payload
      });

    case 'TOGGLE_POOL_TOOLS':
      return store_objectSpread({}, state, {
        showPoolTools: !state.showPoolTools
      });

    case 'PURGE':
      return state;

    default:
      return state;
  }
};

const persistConfig = {
  key: 'primary',
  storage: storage_default.a
};
const persistedReducer = Object(external_redux_persist_["persistReducer"])(persistConfig, reducer);
const initializeStore = (preloadedState = store_initialState) => {
  return Object(external_redux_["createStore"])(persistedReducer, preloadedState, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])()));
};
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");

// EXTERNAL MODULE: external "redux-persist/integration/react"
var react_ = __webpack_require__("JPPj");

// CONCATENATED MODULE: ./lib/redux.js








var redux_jsx = external_react_default.a.createElement;

function redux_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function redux_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { redux_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { redux_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }







const isServer = true;
const withRedux = (PageComponent, {
  ssr = true
} = {}) => {
  const WithRedux = (_ref) => {
    let {
      initialReduxState
    } = _ref,
        props = _objectWithoutProperties(_ref, ["initialReduxState"]);

    const store = getOrInitializeStore(initialReduxState);
    const persistor = Object(external_redux_persist_["persistStore"])(store);

    if (!isServer) {
      window.persistor = persistor;
    }

    return redux_jsx(external_react_redux_["Provider"], {
      store: store
    }, redux_jsx(react_["PersistGate"], {
      loading: redux_jsx(PageComponent, props),
      persistor: persistor
    }, redux_jsx(PageComponent, props)));
  }; // Make sure people don't use this HOC on _app.js level


  if (false) {} // Set the correct displayName in development


  if (false) {}

  if (ssr || PageComponent.getInitialProps) {
    WithRedux.getInitialProps = async context => {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrInitializeStore(); // Provide the store to getInitialProps of pages

      context.reduxStore = reduxStore; // Run getInitialProps from HOCed PageComponent

      const pageProps = typeof PageComponent.getInitialProps === 'function' ? await PageComponent.getInitialProps(context) : {}; // Pass props to PageComponent

      return redux_objectSpread({}, pageProps, {
        initialReduxState: reduxStore.getState()
      });
    };
  }

  return WithRedux;
};
let redux_reduxStore;

const getOrInitializeStore = initialState => {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!redux_reduxStore) {
    redux_reduxStore = initializeStore(initialState);
  }

  return redux_reduxStore;
};
// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// CONCATENATED MODULE: ./pages/index.js










var pages_jsx = external_react_default.a.createElement;

function pages_ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function pages_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pages_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { pages_ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }












const pages_slates = {};
const supportedSports = ['NFL', 'GOLF'];
const supportedGameTypes = ['Classic'];

const getPlayers = async function (slate) {
  if (supportedSports.includes(slate.Sport) && slate.GameType && supportedGameTypes.includes(slate.GameType.Name)) {
    const draftGroupId = slate.DraftGroupId;

    if (!pages_slates[draftGroupId]) {
      //Handle errrrrsssds
      console.log(`http://api.draftkings.com/draftgroups/v1/draftgroups/${draftGroupId}/draftables?format=json`);
      const playersRes = await external_isomorphic_unfetch_default()(`http://api.draftkings.com/draftgroups/v1/draftgroups/${draftGroupId}/draftables?format=json`, {
        mode: 'no-cors'
      });
      const playerIds = [];
      const rawPlayers = await playersRes.json();
      const players = rawPlayers && rawPlayers.draftables && rawPlayers.draftables.filter(player => {
        const id = player.playerId;

        if (playerIds.includes(id)) {
          return false;
        }

        playerIds.push(id);
        return true;
      });
      pages_slates[draftGroupId] = pages_objectSpread({}, slate, {
        players
      });
    }
  }
};

const pages_containerStyle = {
  backgroundColor: '#f6f6f6',
  height: '100%',
  width: '100%'
};
const topBarStyle = {
  backgroundColor: '#ffffff',
  margin: '0px 0px 16px 0px',
  padding: 16,
  display: 'flex',
  flexDirection: 'row',
  boxShadow: '1px 1px 17px -1px hsla(0, 0%, 63%, .69)'
};

const Index = () => {
  return pages_jsx("div", {
    style: pages_containerStyle,
    className: "jsx-2111231969"
  }, pages_jsx(head_default.a, null, pages_jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-2111231969"
  }), pages_jsx("meta", {
    charSet: "utf-8",
    className: "jsx-2111231969"
  }), pages_jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Ubuntu&display=swap",
    rel: "stylesheet",
    className: "jsx-2111231969"
  })), pages_jsx(style_default.a, {
    id: "2111231969"
  }, ["body{background:#f6f6f6;color:#333;margin:0;padding:0;font-family:'Ubuntu';overflow-x:scroll;}"]), pages_jsx("div", {
    style: topBarStyle,
    className: "jsx-2111231969"
  }, pages_jsx(components_header, null), pages_jsx(navigation, null)), pages_jsx(slatepicker, null), pages_jsx(importprojection, null), pages_jsx(components_pool, null), pages_jsx(stackbuilder, null), pages_jsx(generator, null), pages_jsx(lineups, null), pages_jsx("img", {
    src: "https://logs-01.loggly.com/inputs/8a465978-add2-4b58-9d57-02f8869b2f17.gif?source=pixel&data=load",
    className: "jsx-2111231969"
  }));
}; // This is to try and stop spamming DK


let fetched = false;
let fetching = false;
const refreshSlatesRate = 1000 * 60 * 60;

const clearSlates = () => {
  keys_default()(pages_slates).forEach(slate => {
    delete pages_slates[slate];
  });

  fetched = false;
  fetching = false;
};

setInterval(clearSlates, refreshSlatesRate);

Index.getInitialProps = async ({
  reduxStore
}) => {
  if (!fetched && !fetching) {
    fetching = true; // Handle errrrrs
    // Get all slates
    // Needs to be improved such that each request doesn't trigger an outgoing request

    console.log('getting slates');
    const res = await external_isomorphic_unfetch_default()('https://www.draftkings.com/lineup/getupcomingcontestinfo', {
      method: 'post',
      mode: 'no-cors'
    });
    const rawSlates = await res.json(); // Get players from slate

    await promise_default.a.all(rawSlates.map(getPlayers));
    fetched = true;
  }

  const {
    dispatch
  } = reduxStore;
  console.log('setting slates'); //, slates)

  dispatch({
    type: 'SET_SLATES',
    payload: pages_slates
  });
  return {};
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (withRedux(Index));

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "T8f9":
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "VNb8":
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
  ] = groupIndex++, $1.indexOf('\\.\\.\\.') === 0 ? '/(.+?)' : '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "a8BA":
/***/ (function(module, exports) {

module.exports = require("@hapi/joi");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bfSA":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slider");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("P5f7");

var _utils = __webpack_require__("g/15");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) { var exact, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("SqZg");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
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

exports.default = mitt;

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__("eVuF");

var _Object$assign = __webpack_require__("UXZV");

var _Object$defineProperty = __webpack_require__("hfKm");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const rewrite_url_for_export_1 = __webpack_require__("P5f7");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
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
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
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


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (false) {} else {
            console.error(error);
          }

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (false) {} // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
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
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "ezx2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$keys = __webpack_require__("pLtp");

const clone = __webpack_require__("E/Kx");

const constraintList = {
  nfl: {
    draftkings: {
      classic: {
        pointz: {
          max: 100000
        },
        salary: {
          max: 50000
        },
        qb: {
          min: 1,
          max: 1
        },
        rb: {
          min: 2,
          max: 3
        },
        wr: {
          min: 3,
          max: 4
        },
        te: {
          min: 1,
          max: 2
        },
        dst: {
          min: 1,
          max: 1
        },
        player: {
          equal: 9
        }
      }
    }
  },
  golf: {
    draftkings: {
      classic: {
        pointz: {
          max: 100000
        },
        salary: {
          max: 50000
        },
        g: {
          equal: 6
        }
      }
    }
  }
};

class Model {
  constructor(players, constraints) {
    this.optimize = 'points';
    this.opType = 'max';
    this.constraints = constraints;
    this.variables = players;
    const ints = this.ints = {};

    _Object$keys(players).forEach(player => {
      // Limit results so player only shows up once in results.
      // More players results in more complexity
      players[player][player] = 1;
      constraints[player] = {
        max: 1
      };
      ints[player] = 1;
    });
  }

  removePlayer(player) {
    const {
      constraints,
      ints
    } = this;
    delete constraints[player];
    delete ints[player];
  }

}

module.exports = {
  nfl: {
    draftkings: {
      classic: players => new Model(players, clone(constraintList.nfl.draftkings.classic))
    }
  },
  golf: {
    draftkings: {
      classic: players => new Model(players, clone(constraintList.golf.draftkings.classic))
    }
  }
};

/***/ }),

/***/ "fmlw":
/***/ (function(module, exports) {

const log = data => {
  const pixel = new Image();
  pixel.src = `https://logs-01.loggly.com/inputs/8a465978-add2-4b58-9d57-02f8869b2f17.gif?source=pixel&data=${data}`;
};

module.exports = {
  log
};

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (false) {} // when called from _app `ctx` is nested in `ctx`


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

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

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

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = m.indexOf('/') !== -1 ? m.split('/').map(entry => decodeURIComponent(entry)) : decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "igu8":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "lEqE":
/***/ (function(module, exports) {

module.exports = require("lodash/clone");

/***/ }),

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "r6Lb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "tBFs":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "x54t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "xHqa":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xyLz":
/***/ (function(module, exports) {

module.exports = function () {
  return new Worker("/_next/" + "static/64470936f89ddceff490.worker.js");
};

/***/ }),

/***/ "zOcm":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ })

/******/ });