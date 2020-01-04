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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/card.js":
/*!****************************!*\
  !*** ./components/card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jwesto1/Code/jaw187/dfs-solver/components/card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const layoutStyle = {
  padding: 24,
  border: '1px solid #DDD',
  backgroundColor: '#ffffff',
  boxShadow: '0 0 17px -5px hsla(0, 0%, 63%, .95)',
  marginRight: 48,
  marginBottom: 16
};

const Card = props => __jsx("div", {
  style: layoutStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, props.children);

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/generator.js":
/*!*********************************!*\
  !*** ./components/generator.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "./components/card.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _solver_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../solver/index */ "./solver/index.js");
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/clone */ "lodash/clone");
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_clone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/jwesto1/Code/jaw187/dfs-solver/components/generator.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const {
  Models,
  players,
  Worker
} = _solver_index__WEBPACK_IMPORTED_MODULE_3__["default"];

const getState = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const stacks = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.stacks, react_redux__WEBPACK_IMPORTED_MODULE_2__["shallowEqual"]);
  const stackCounts = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.stackCounts, react_redux__WEBPACK_IMPORTED_MODULE_2__["shallowEqual"]);
  const slates = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.slates, react_redux__WEBPACK_IMPORTED_MODULE_2__["shallowEqual"]);
  const selectedSlate = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.selectedSlate);
  const projection = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.projection);
  const results = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.results);
  const pool = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.pool);
  const view = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.view);

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
  } = getState();

  if (view !== 'generator') {
    return null;
  }

  if (!projection || stacks.length === 0) {
    const issues = [];

    if (stacks.length === 0) {
      issues.push(__jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: undefined
      }, "You need to create stacks first"));
    }

    if (!projection) {
      issues.push(__jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: undefined
      }, "You need to import projections first"));
    }

    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: undefined
    }, issues.map(issue => __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: undefined
    }, issue)));
  }

  const slate = slates && slates[selectedSlate];
  const sport = slate.Sport.toLowerCase();
  const site = 'draftkings';
  const type = slate.GameType.Name.toLowerCase();

  const generate = () => {
    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["log"])('generate');
    const playersForModel = players.convertPlayers(pool, projection, sport, site, type);
    let n = 0;
    stackCounts.forEach(count => {
      n = n + count;
    });
    const worker = new Worker();
    stacks.forEach((stack, i) => {
      const stackPlayers = lodash_clone__WEBPACK_IMPORTED_MODULE_4___default()(playersForModel);
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
      Object(_utils__WEBPACK_IMPORTED_MODULE_5__["log"])(`generated ${results.length} lineups`);

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

  return __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, "Generator"), __jsx("button", {
    onClick: generate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, "Generate"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, stacks.map((stack, i) => __jsx("li", {
    key: i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, "Stack with ", stackCounts[i], " lineups"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Generator);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jwesto1/Code/jaw187/dfs-solver/components/header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const headerStyle = {
  fontSize: 36,
  fontWeight: 900,
  paddingTop: 6,
  paddingRight: 16
};

const Header = () => __jsx("div", {
  style: headerStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "DFS Solver");

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/importprojection.js":
/*!****************************************!*\
  !*** ./components/importprojection.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "./components/card.js");
/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hapi/joi */ "@hapi/joi");
/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hapi_joi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/jwesto1/Code/jaw187/dfs-solver/components/importprojection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const getState = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const importErrors = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.importErrors, react_redux__WEBPACK_IMPORTED_MODULE_3__["shallowEqual"]);
  const rawProjection = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.rawProjection, react_redux__WEBPACK_IMPORTED_MODULE_3__["shallowEqual"]);
  const projection = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.projection, react_redux__WEBPACK_IMPORTED_MODULE_3__["shallowEqual"]);
  const view = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.view, react_redux__WEBPACK_IMPORTED_MODULE_3__["shallowEqual"]);
  const slates = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.slates, react_redux__WEBPACK_IMPORTED_MODULE_3__["shallowEqual"]);
  const selectedSlate = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.selectedSlate, react_redux__WEBPACK_IMPORTED_MODULE_3__["shallowEqual"]);

  const setRawProjection = value => {
    dispatch({
      type: 'SET_RAW_PROJECTION',
      payload: value
    });
  };

  const importProjection = () => {
    Object(_utils__WEBPACK_IMPORTED_MODULE_6__["log"])('import');
    dispatch({
      type: 'CLEAR_IMPORT_ERRORS'
    });

    if (!rawProjection) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_6__["log"])('import error empty textarea');
      return dispatch({
        type: 'ADD_IMPORT_ERROR',
        payload: new Error('empty textarea')
      });
    }

    const validationSchema = _hapi_joi__WEBPACK_IMPORTED_MODULE_2___default.a.object({
      player: _hapi_joi__WEBPACK_IMPORTED_MODULE_2___default.a.string().required(),
      value: _hapi_joi__WEBPACK_IMPORTED_MODULE_2___default.a.number().required(),
      ownership: _hapi_joi__WEBPACK_IMPORTED_MODULE_2___default.a.number().required()
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
        Object(_utils__WEBPACK_IMPORTED_MODULE_6__["log"])('import error duplicate player');
        dispatch({
          type: 'ADD_IMPORT_ERROR',
          payload: new Error(`Duplicate player - ${player}`)
        });
      }

      players[player] = true;
      const validation = validationSchema.validate(result);

      if (validation.error) {
        errors = true;
        Object(_utils__WEBPACK_IMPORTED_MODULE_6__["log"])('import error validation error');
        dispatch({
          type: 'ADD_IMPORT_ERROR',
          payload: validation
        });
      }

      return result;
    }).filter(result => result !== 'REMOVE');

    if (!errors) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_6__["log"])(`import ${formattedProjection.length} records`);
      dispatch({
        type: 'SET_PROJECTION',
        payload: formattedProjection
      });
    }
  };

  const exportTemplate = () => {
    if (slates && selectedSlate) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_6__["log"])(`export template`);
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

const componentContainer = {
  padding: 16
};
const cardContainer = {
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
  return __jsx("div", {
    style: componentContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  }, __jsx("h2", {
    style: {
      marginTop: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  }, "Your Projections"), __jsx("div", {
    style: cardContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: undefined
  }, !projection && __jsx("div", {
    style: infoContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: undefined
  }, "DFS Solver is a Bring Your Own Projection system.  You'll need to copy and paste your projections into the text area below. Use the Export Template button to download a sheet with proper player id's for your selected slate."), importErrors && !!importErrors.length && __jsx("div", {
    style: infoContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      marginTop: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }, "Import Has Errors"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: undefined
  }, importErrors.map(err => __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: undefined
  }, err.error && err.error.toString() || err.toString())))), projection && __jsx("div", {
    style: infoContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      marginTop: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: undefined
  }, "Current Projection"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: undefined
  }, `Projections for ${projection.length} players`)), __jsx("div", {
    style: buttonsContainerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: undefined
  }, __jsx("div", {
    style: buttonContainerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "contained",
    onClick: importProjection,
    color: "primary",
    style: buttonStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: undefined
  }, "Import Projections")), __jsx("div", {
    style: buttonContainerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "contained",
    onClick: exportTemplate,
    color: "secondary",
    style: buttonStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: undefined
  }, "Export Template"))), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "standard-multiline-static",
    label: "Import projections",
    multiline: true,
    rows: "28",
    placeholder: placeholder,
    variant: "outlined",
    style: textAreaStyle,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ImportProjection);

/***/ }),

/***/ "./components/lineups.js":
/*!*******************************!*\
  !*** ./components/lineups.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ "./components/card.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _solver_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../solver/index */ "./solver/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/jwesto1/Code/jaw187/dfs-solver/components/lineups.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const {
  solve,
  Models,
  players
} = _solver_index__WEBPACK_IMPORTED_MODULE_4__["default"];

const getState = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const slates = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.slates, react_redux__WEBPACK_IMPORTED_MODULE_3__["shallowEqual"]);
  const selectedSlate = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.selectedSlate);
  const projection = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.projection);
  const results = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.results);
  const view = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.view);

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
  } = getState();

  if (view !== 'results') {
    return null;
  }

  if (results.length === 0) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: undefined
    }, "Generate some lineups");
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
    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["log"])('export linieups');
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
    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["log"])('remove lineup');
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

  const ownership = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(playerCounts).map(player => {
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
        classic: (result, i) => __jsx("div", {
          key: i,
          style: lineupStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: undefined
        }, __jsx("button", {
          onClick: remove(i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          },
          __self: undefined
        }, "Remove"), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          },
          __self: undefined
        }, formatPlayer(result.lineup.qb)), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: undefined
        }, formatPlayer(result.lineup.rbs[0])), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          },
          __self: undefined
        }, formatPlayer(result.lineup.rbs[1])), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: undefined
        }, formatPlayer(result.lineup.wrs[0])), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: undefined
        }, formatPlayer(result.lineup.wrs[1])), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          },
          __self: undefined
        }, formatPlayer(result.lineup.wrs[2])), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: undefined
        }, formatPlayer(result.lineup.te)), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: undefined
        }, formatPlayer(result.lineup.flex)), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: undefined
        }, formatPlayer(result.lineup.dst)))
      }
    },
    golf: {
      draftkings: {
        classic: (result, i) => __jsx("div", {
          key: i,
          style: lineupStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: undefined
        }, __jsx("button", {
          onClick: remove(i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          },
          __self: undefined
        }, "Remove"), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: undefined
        }, formatPlayer(result.lineup.g[0])), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: undefined
        }, formatPlayer(result.lineup.g[1])), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: undefined
        }, formatPlayer(result.lineup.g[2])), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: undefined
        }, formatPlayer(result.lineup.g[3])), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: undefined
        }, formatPlayer(result.lineup.g[4])), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: undefined
        }, formatPlayer(result.lineup.g[5])))
      }
    }
  };
  return __jsx("div", {
    style: componentContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: undefined
  }, __jsx("h2", {
    style: {
      marginTop: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: undefined
  }, "Lineups"), __jsx("div", {
    style: cardContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: undefined
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      marginTop: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: undefined
  }, "Ownership"), !!ownership.length && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: undefined
  }, ownership.map(data => __jsx("div", {
    style: ownershipPlayerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: undefined
  }, data.player, " - ", data.count, " - ", data.percentage, "%")))), __jsx(_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: undefined
  }, !!results.length && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      marginTop: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: undefined
  }, results.length, " lineups"), __jsx("button", {
    onClick: exportToCSV,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: undefined
  }, "Export"), __jsx("div", {
    style: containerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: undefined
  }, results.map(lineupFormats[sport][site][type]))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Lineups);

/***/ }),

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/jwesto1/Code/jaw187/dfs-solver/components/navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




const getState = () => {
  const view = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(state => state.view, react_redux__WEBPACK_IMPORTED_MODULE_9__["shallowEqual"]);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();

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
  } = getState();

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

  const selectedButtonStyle = _objectSpread({}, buttonStyle, {
    backgroundColor: '#f60',
    color: '#fff'
  });

  const clearButtonStyle = _objectSpread({}, buttonStyle, {
    backgroundColor: 'red',
    color: '#fff'
  });

  const set = which => {
    return () => setView(which);
  };

  const navigationButton = (id, display) => __jsx("div", {
    style: linkContainerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("button", {
    style: view === id ? selectedButtonStyle : buttonStyle,
    onClick: set(id),
    selected: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, display));

  return __jsx("div", {
    style: containerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, navigationButton('slatepicker', 'Slate'), navigationButton('importprojections', 'Projections'), navigationButton('playerpool', 'Player Pool'), navigationButton('stackbuilder', 'Stacks'), navigationButton('generator', 'Generate'), navigationButton('results', 'Lineups'), __jsx("div", {
    style: linkContainerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("button", {
    style: clearButtonStyle,
    onClick: clear,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "Clear")));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./components/pool.js":
/*!****************************!*\
  !*** ./components/pool.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card */ "./components/card.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Slider */ "@material-ui/core/Slider");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Collapse */ "@material-ui/core/Collapse");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_17__);







var _jsxFileName = "/Users/jwesto1/Code/jaw187/dfs-solver/components/pool.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }













const getState = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();
  const {
    slates,
    selectedSlate,
    pool,
    view,
    projection,
    poolSalaryRange,
    showPoolTools
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(state => state, react_redux__WEBPACK_IMPORTED_MODULE_9__["shallowEqual"]);

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
  } = getState();

  if (view !== 'playerpool') {
    return null;
  }

  const slate = slates && slates[selectedSlate];

  if (!slate) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: undefined
    }, "Pick a slate first");
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

    const missingProjectionStyle = _objectSpread({}, playerContainerStyle, {
      color: 'red'
    });

    const checkboxStyle = {
      marginRight: 8
    };
    return __jsx(_card__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: undefined
    }, __jsx("h3", {
      style: {
        marginTop: 0
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: undefined
    }, which.toUpperCase()), players && players.map((player, i) => {
      const ref = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
      checkboxes.push(ref);
      const hasProjection = projection && projection.filter(row => row.player == player.draftableId).length === 1;
      const style = hasProjection ? playerContainerStyle : missingProjectionStyle;
      const inPool = pool && !!pool.find(poolPlayer => player.playerId === poolPlayer.playerId);
      return __jsx("div", {
        style: style,
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: undefined
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: undefined
      }, __jsx("input", {
        ref: ref,
        style: checkboxStyle,
        type: "checkbox",
        onClick: togglePlayer(player),
        checked: inPool,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: undefined
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
  return __jsx("div", {
    style: componentContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  }, __jsx("h2", {
    style: {
      marginTop: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: undefined
  }, "Player Pool"), __jsx("div", {
    style: cardContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      color: 'red',
      paddingBottom: 24
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: undefined
  }, "Player names in red indicate missing projection")), __jsx("div", {
    style: cardContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: undefined
  }, positionCard("QB"), positionCard("RB"), positionCard("WR"), positionCard("TE"), positionCard("DST"), positionCard("G")));
};

/* harmony default export */ __webpack_exports__["default"] = (Pool);

/***/ }),

/***/ "./components/slatepicker.js":
/*!***********************************!*\
  !*** ./components/slatepicker.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ "./components/card.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/Users/jwesto1/Code/jaw187/dfs-solver/components/slatepicker.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const getState = () => {
  const slates = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.slates, react_redux__WEBPACK_IMPORTED_MODULE_3__["shallowEqual"]);
  const view = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.view);
  const projection = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.projection);
  const selectedSlate = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.selectedSlate);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

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
  } = getState();

  const draftGroupIds = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(slates);

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

  return __jsx("div", {
    style: componentContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("h2", {
    style: {
      marginTop: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, "Upcoming Slates"), __jsx("div", {
    style: cardContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      minWidth: 480
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "select-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "Select a slate"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onChange: onChange,
    labelId: "select-label",
    value: selectedSlate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, draftGroupIds && draftGroupIds.map(draftGroupId => {
    const slate = slates[draftGroupId];
    const startTime = new Date(slate.StartDateEdt.substring(6, slate.StartDateEdt.length - 2) - 0);
    const lineText = `${slate.SportDisplayName} ${slate.GameType.GameStyle.Name} on ${startTime} ${slate.ContestStartTimeSuffix || ''}`;
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
      value: draftGroupId,
      key: draftGroupId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: undefined
    }, lineText);
  })))), __jsx("div", {
    style: buttonContainerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "contained",
    onClick: selectSlate,
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "Select")))));
};

/* harmony default export */ __webpack_exports__["default"] = (SlatePicker);

/***/ }),

/***/ "./components/stackbuilder.js":
/*!************************************!*\
  !*** ./components/stackbuilder.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "./components/card.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stacks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stacks */ "./components/stacks.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/jwesto1/Code/jaw187/dfs-solver/components/stackbuilder.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const getState = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    pool,
    stack,
    slates,
    selectedSlate,
    view
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state, react_redux__WEBPACK_IMPORTED_MODULE_2__["shallowEqual"]);

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
  } = getState();

  if (view !== 'stackbuilder') {
    return null;
  }

  if (!pool.length) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: undefined
    }, "Pick players for pool first.");
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
    Object(_utils__WEBPACK_IMPORTED_MODULE_4__["log"])('stack add');
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
  return __jsx("div", {
    style: componentContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx("h2", {
    style: {
      marginTop: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, "Stack Builder"), __jsx("div", {
    style: cardContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      display: "flex",
      flexDirection: "row"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      minWidth: 240
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, "Players"), pool && pool.map((player, i) => {
    const ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    checkboxes.push(ref);
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: undefined
    }, __jsx("input", {
      ref: ref,
      type: "checkbox",
      onClick: togglePlayer(player),
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: undefined
    }), player.displayName, " - $", player.salary);
  })), __jsx("div", {
    style: {
      paddingLeft: 16,
      minWidth: 240
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, "Stack"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, stack && stack.map((player, i) => __jsx("li", {
    key: i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, player.displayName))), stack && stack.length > 1 && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, __jsx("button", {
    onClick: add,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, "Add"), __jsx("button", {
    onClick: clear,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, "Clear")))))))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, __jsx(_stacks__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (StackBuilder);

/***/ }),

/***/ "./components/stacks.js":
/*!******************************!*\
  !*** ./components/stacks.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "./components/card.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Slider */ "@material-ui/core/Slider");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/jwesto1/Code/jaw187/dfs-solver/components/stacks.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const getState = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const stacks = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.stacks, react_redux__WEBPACK_IMPORTED_MODULE_2__["shallowEqual"]);
  const view = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.view);
  const stackCounts = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.stackCounts);

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
  } = getState();

  if (view !== 'stackbuilder') {
    return null;
  }

  if (!stacks || stacks.length === 0) {
    return null;
  }

  const remove = i => {
    Object(_utils__WEBPACK_IMPORTED_MODULE_6__["log"])('stack remove');
    return () => {
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

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx("h2", {
    style: {
      marginTop: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "Stacks"), __jsx("div", {
    style: cardContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, stacks.map((stack, j) => {
    if (!stackCounts[j]) {
      stackCounts[j] = 10;
    }

    return __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: undefined
    }, __jsx("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
      },
      key: j,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: undefined
    }, __jsx("div", {
      style: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: undefined
    }, __jsx("div", {
      onClick: move(j, 'left'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: undefined
    }, "Move Left"), __jsx("div", {
      onClick: move(j, 'right'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: undefined
    }, "Move Right")), __jsx("div", {
      style: {
        display: 'flex'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: undefined
    }, __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: undefined
    }, stack.map((player, i) => __jsx("li", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: undefined
    }, player.displayName)))), __jsx("div", {
      style: {
        display: "flex",
        flexDirection: "row"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: undefined
    }, __jsx("div", {
      style: {
        minWidth: 240,
        marginRight: 16
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: undefined
    }, "No. of lineups", __jsx(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_3___default.a, {
      defaultValue: stackCounts[j],
      value: stackCounts[j],
      step: 1,
      marks: marks,
      min: 1,
      max: 20,
      onChange: handleSliderChange(j),
      "aria-labelledby": "input-slider",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: undefined
    })), __jsx("div", {
      style: {
        marginTop: 4
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: undefined
    }, __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: undefined
    }))), __jsx("div", {
      style: {
        display: "flex",
        flexDirection: "row"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: undefined
    }), __jsx("div", {
      style: {
        display: 'flex'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: undefined
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      onClick: remove(j),
      variant: "contained",
      color: "secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: undefined
    }, "Delete"))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Stacks);

/***/ }),

/***/ "./components/utils.js":
/*!*****************************!*\
  !*** ./components/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

const log = data => {
  const pixel = new Image();
  pixel.src = `https://logs-01.loggly.com/inputs/8a465978-add2-4b58-9d57-02f8869b2f17.gif?source=pixel&data=${data}`;
};

module.exports = {
  log
};

/***/ }),

/***/ "./lib/redux.js":
/*!**********************!*\
  !*** ./lib/redux.js ***!
  \**********************/
/*! exports provided: withRedux */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRedux", function() { return withRedux; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux-persist/integration/react */ "redux-persist/integration/react");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_14__);









var _jsxFileName = "/Users/jwesto1/Code/jaw187/dfs-solver/lib/redux.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }







const isServer = true;
const withRedux = (PageComponent, {
  ssr = true
} = {}) => {
  const WithRedux = (_ref) => {
    let {
      initialReduxState
    } = _ref,
        props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, ["initialReduxState"]);

    const store = getOrInitializeStore(initialReduxState);
    const persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_13__["persistStore"])(store);

    if (!isServer) {
      window.persistor = persistor;
    }

    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_10__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    }, __jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_14__["PersistGate"], {
      loading: __jsx(PageComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: undefined
      })),
      persistor: persistor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    }, __jsx(PageComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: undefined
    }))));
  }; // Make sure people don't use this HOC on _app.js level


  if (true) {
    const isAppHoc = PageComponent === next_app__WEBPACK_IMPORTED_MODULE_12___default.a || PageComponent.prototype instanceof next_app__WEBPACK_IMPORTED_MODULE_12___default.a;

    if (isAppHoc) {
      throw new Error('The withRedux HOC only works with PageComponents');
    }
  } // Set the correct displayName in development


  if (true) {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';
    WithRedux.displayName = `withRedux(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithRedux.getInitialProps = async context => {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrInitializeStore(); // Provide the store to getInitialProps of pages

      context.reduxStore = reduxStore; // Run getInitialProps from HOCed PageComponent

      const pageProps = typeof PageComponent.getInitialProps === 'function' ? await PageComponent.getInitialProps(context) : {}; // Pass props to PageComponent

      return _objectSpread({}, pageProps, {
        initialReduxState: reduxStore.getState()
      });
    };
  }

  return WithRedux;
};
let reduxStore;

const getOrInitializeStore = initialState => {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Object(_store__WEBPACK_IMPORTED_MODULE_11__["initializeStore"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!reduxStore) {
    reduxStore = Object(_store__WEBPACK_IMPORTED_MODULE_11__["initializeStore"])(initialState);
  }

  return reduxStore;
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

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

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

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

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

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

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

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

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

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

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

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
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

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

          if (true) {
            throw new Error(error);
          } else {}

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

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


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
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

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

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

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
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
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
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


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

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

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

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
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
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_importprojection_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/importprojection.js */ "./components/importprojection.js");
/* harmony import */ var _components_slatepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/slatepicker */ "./components/slatepicker.js");
/* harmony import */ var _components_stackbuilder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/stackbuilder */ "./components/stackbuilder.js");
/* harmony import */ var _components_generator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/generator */ "./components/generator.js");
/* harmony import */ var _components_pool__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/pool */ "./components/pool.js");
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/navigation */ "./components/navigation.js");
/* harmony import */ var _components_lineups__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/lineups */ "./components/lineups.js");
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../lib/redux */ "./lib/redux.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_20__);








var _jsxFileName = "/Users/jwesto1/Code/jaw187/dfs-solver/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }












const slates = {};
const supportedSports = ['NFL', 'GOLF'];
const supportedGameTypes = ['Classic'];

const getPlayers = async function (slate) {
  if (supportedSports.includes(slate.Sport) && slate.GameType && supportedGameTypes.includes(slate.GameType.Name)) {
    const draftGroupId = slate.DraftGroupId;

    if (!slates[draftGroupId]) {
      //Handle errrrrsssds
      console.log(`http://api.draftkings.com/draftgroups/v1/draftgroups/${draftGroupId}/draftables?format=json`);
      const playersRes = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_20___default()(`http://api.draftkings.com/draftgroups/v1/draftgroups/${draftGroupId}/draftables?format=json`, {
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
      slates[draftGroupId] = _objectSpread({}, slate, {
        players
      });
    }
  }
};

const containerStyle = {
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
  return __jsx("div", {
    style: containerStyle,
    className: "jsx-2111231969",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-2111231969",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }), __jsx("meta", {
    charSet: "utf-8",
    className: "jsx-2111231969",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Ubuntu&display=swap",
    rel: "stylesheet",
    className: "jsx-2111231969",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "2111231969",
    __self: undefined
  }, "body{background:#f6f6f6;color:#333;margin:0;padding:0;font-family:'Ubuntu';overflow-x:scroll;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qd2VzdG8xL0NvZGUvamF3MTg3L2Rmcy1zb2x2ZXIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUV5QixBQUc4QixtQkFDUixXQUNGLFNBQ0MsVUFDVyxxQkFDSCxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2p3ZXN0bzEvQ29kZS9qYXcxODcvZGZzLXNvbHZlci9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgSW1wb3J0UHJvamVjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2ltcG9ydHByb2plY3Rpb24uanMnO1xuaW1wb3J0IFNsYXRlUGlja2VyIGZyb20gJy4uL2NvbXBvbmVudHMvc2xhdGVwaWNrZXInO1xuaW1wb3J0IFN0YWNrQnVpbGRlciBmcm9tICcuLi9jb21wb25lbnRzL3N0YWNrYnVpbGRlcic7XG5pbXBvcnQgR2VuZXJhdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvZ2VuZXJhdG9yJztcbmltcG9ydCBQb29sIGZyb20gJy4uL2NvbXBvbmVudHMvcG9vbCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24nO1xuaW1wb3J0IExpbmV1cHMgZnJvbSAnLi4vY29tcG9uZW50cy9saW5ldXBzJztcbmltcG9ydCB7IHdpdGhSZWR1eCB9IGZyb20gJy4uL2xpYi9yZWR1eCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuY29uc3Qgc2xhdGVzID0ge307XG5cbmNvbnN0IHN1cHBvcnRlZFNwb3J0cyA9IFsnTkZMJywgJ0dPTEYnXTtcbmNvbnN0IHN1cHBvcnRlZEdhbWVUeXBlcyA9IFsnQ2xhc3NpYyddO1xuXG5jb25zdCBnZXRQbGF5ZXJzID0gYXN5bmMgZnVuY3Rpb24gKHNsYXRlKSB7XG4gIGlmIChzdXBwb3J0ZWRTcG9ydHMuaW5jbHVkZXMoc2xhdGUuU3BvcnQpICYmIHNsYXRlLkdhbWVUeXBlICYmIHN1cHBvcnRlZEdhbWVUeXBlcy5pbmNsdWRlcyhzbGF0ZS5HYW1lVHlwZS5OYW1lKSkge1xuICAgIGNvbnN0IGRyYWZ0R3JvdXBJZCA9IHNsYXRlLkRyYWZ0R3JvdXBJZDtcbiAgICBpZiAoIXNsYXRlc1tkcmFmdEdyb3VwSWRdKSB7XG4gICAgICAvL0hhbmRsZSBlcnJycnJzc3Nkc1xuICAgICAgY29uc29sZS5sb2coYGh0dHA6Ly9hcGkuZHJhZnRraW5ncy5jb20vZHJhZnRncm91cHMvdjEvZHJhZnRncm91cHMvJHtkcmFmdEdyb3VwSWR9L2RyYWZ0YWJsZXM/Zm9ybWF0PWpzb25gKVxuICAgICAgY29uc3QgcGxheWVyc1JlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLmRyYWZ0a2luZ3MuY29tL2RyYWZ0Z3JvdXBzL3YxL2RyYWZ0Z3JvdXBzLyR7ZHJhZnRHcm91cElkfS9kcmFmdGFibGVzP2Zvcm1hdD1qc29uYCwgeyBtb2RlOiAnbm8tY29ycycgfSk7XG5cbiAgICAgIGNvbnN0IHBsYXllcklkcyA9IFtdO1xuICAgICAgY29uc3QgcmF3UGxheWVycyA9IGF3YWl0IHBsYXllcnNSZXMuanNvbigpO1xuXG4gICAgICBjb25zdCBwbGF5ZXJzID0gcmF3UGxheWVycyAmJiByYXdQbGF5ZXJzLmRyYWZ0YWJsZXMgJiYgcmF3UGxheWVycy5kcmFmdGFibGVzLmZpbHRlcigocGxheWVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gcGxheWVyLnBsYXllcklkO1xuICAgICAgICBpZiAocGxheWVySWRzLmluY2x1ZGVzKGlkKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBsYXllcklkcy5wdXNoKGlkKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcblxuICAgICAgc2xhdGVzW2RyYWZ0R3JvdXBJZF0gPSB7XG4gICAgICAgIC4uLnNsYXRlLFxuICAgICAgICBwbGF5ZXJzXG4gICAgICB9O1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmNmY2ZjYnLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgd2lkdGg6ICcxMDAlJ1xufTtcblxuY29uc3QgdG9wQmFyU3R5bGUgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICBtYXJnaW46ICcwcHggMHB4IDE2cHggMHB4JyxcbiAgcGFkZGluZzogMTYsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGJveFNoYWRvdzogJzFweCAxcHggMTdweCAtMXB4IGhzbGEoMCwgMCUsIDYzJSwgLjY5KSdcbn1cblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGV9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VWJ1bnR1JmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcbiAgICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxkaXYgc3R5bGU9e3RvcEJhclN0eWxlfT5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8U2xhdGVQaWNrZXIgLz5cbiAgICAgIDxJbXBvcnRQcm9qZWN0aW9uIC8+XG4gICAgICA8UG9vbCAvPlxuICAgICAgPFN0YWNrQnVpbGRlciAvPlxuICAgICAgPEdlbmVyYXRvciAvPlxuICAgICAgPExpbmV1cHMgLz5cbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9sb2dzLTAxLmxvZ2dseS5jb20vaW5wdXRzLzhhNDY1OTc4LWFkZDItNGI1OC05ZDU3LTAyZjg4NjliMmYxNy5naWY/c291cmNlPXBpeGVsJmRhdGE9bG9hZFwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vIFRoaXMgaXMgdG8gdHJ5IGFuZCBzdG9wIHNwYW1taW5nIERLXG5sZXQgZmV0Y2hlZCA9IGZhbHNlO1xubGV0IGZldGNoaW5nID0gZmFsc2U7XG5jb25zdCByZWZyZXNoU2xhdGVzUmF0ZSA9IDEwMDAgKiA2MCAqIDYwO1xuY29uc3QgY2xlYXJTbGF0ZXMgPSAoKSA9PiB7XG4gIE9iamVjdC5rZXlzKHNsYXRlcykuZm9yRWFjaCgoc2xhdGUpID0+IHtcbiAgICBkZWxldGUgc2xhdGVzW3NsYXRlXTtcbiAgfSk7XG5cbiAgZmV0Y2hlZCA9IGZhbHNlO1xuICBmZXRjaGluZyA9IGZhbHNlO1xufTtcbnNldEludGVydmFsKGNsZWFyU2xhdGVzLCByZWZyZXNoU2xhdGVzUmF0ZSk7XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlZHV4U3RvcmUgfSkgPT4ge1xuICBpZiAoIWZldGNoZWQgJiYgIWZldGNoaW5nKSB7XG4gICAgZmV0Y2hpbmcgPSB0cnVlO1xuICAgIC8vIEhhbmRsZSBlcnJycnJzXG4gICAgLy8gR2V0IGFsbCBzbGF0ZXNcbiAgICAvLyBOZWVkcyB0byBiZSBpbXByb3ZlZCBzdWNoIHRoYXQgZWFjaCByZXF1ZXN0IGRvZXNuJ3QgdHJpZ2dlciBhbiBvdXRnb2luZyByZXF1ZXN0XG4gICAgY29uc29sZS5sb2coJ2dldHRpbmcgc2xhdGVzJylcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93d3cuZHJhZnRraW5ncy5jb20vbGluZXVwL2dldHVwY29taW5nY29udGVzdGluZm8nLCB7IG1ldGhvZDogJ3Bvc3QnLCBtb2RlOiAnbm8tY29ycycgfSk7XG4gICAgY29uc3QgcmF3U2xhdGVzID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIC8vIEdldCBwbGF5ZXJzIGZyb20gc2xhdGVcbiAgICBhd2FpdCBQcm9taXNlLmFsbChyYXdTbGF0ZXMubWFwKGdldFBsYXllcnMpKTtcbiAgICBmZXRjaGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHJlZHV4U3RvcmU7XG4gIGNvbnNvbGUubG9nKCdzZXR0aW5nIHNsYXRlcycpLy8sIHNsYXRlcylcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6ICdTRVRfU0xBVEVTJyxcbiAgICBwYXlsb2FkOiBzbGF0ZXNcbiAgfSk7XG5cbiAgcmV0dXJuIHt9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KEluZGV4KTtcbiJdfQ== */\n/*@ sourceURL=/Users/jwesto1/Code/jaw187/dfs-solver/pages/index.js */"), __jsx("div", {
    style: topBarStyle,
    className: "jsx-2111231969",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }), __jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  })), __jsx(_components_slatepicker__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }), __jsx(_components_importprojection_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }), __jsx(_components_pool__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }), __jsx(_components_stackbuilder__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }), __jsx(_components_generator__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }), __jsx(_components_lineups__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }), __jsx("img", {
    src: "https://logs-01.loggly.com/inputs/8a465978-add2-4b58-9d57-02f8869b2f17.gif?source=pixel&data=load",
    className: "jsx-2111231969",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }));
}; // This is to try and stop spamming DK


let fetched = false;
let fetching = false;
const refreshSlatesRate = 1000 * 60 * 60;

const clearSlates = () => {
  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(slates).forEach(slate => {
    delete slates[slate];
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
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_20___default()('https://www.draftkings.com/lineup/getupcomingcontestinfo', {
      method: 'post',
      mode: 'no-cors'
    });
    const rawSlates = await res.json(); // Get players from slate

    await _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_5___default.a.all(rawSlates.map(getPlayers));
    fetched = true;
  }

  const {
    dispatch
  } = reduxStore;
  console.log('setting slates'); //, slates)

  dispatch({
    type: 'SET_SLATES',
    payload: slates
  });
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_redux__WEBPACK_IMPORTED_MODULE_19__["withRedux"])(Index));

/***/ }),

/***/ "./solver/index.js":
/*!*************************!*\
  !*** ./solver/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _solve_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solve.worker */ "./solver/solve.worker.js");
/* harmony import */ var _solve_worker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_solve_worker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./players */ "./solver/players.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models */ "./solver/models.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models__WEBPACK_IMPORTED_MODULE_2__);



const Solver = {
  Worker: (_solve_worker__WEBPACK_IMPORTED_MODULE_0___default()),
  players: _players__WEBPACK_IMPORTED_MODULE_1__["default"],
  Models: (_models__WEBPACK_IMPORTED_MODULE_2___default())
};
/* harmony default export */ __webpack_exports__["default"] = (Solver);

/***/ }),

/***/ "./solver/models.js":
/*!**************************!*\
  !*** ./solver/models.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

const clone = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");

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

/***/ "./solver/players.js":
/*!***************************!*\
  !*** ./solver/players.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

const rosters = __webpack_require__(/*! ./rosters */ "./solver/rosters.js");

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

const players = {
  convertPlayers
};
/* harmony default export */ __webpack_exports__["default"] = (players);
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

/***/ }),

/***/ "./solver/rosters.js":
/*!***************************!*\
  !*** ./solver/rosters.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _Object$defineProperties = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");

var _Object$getOwnPropertyDescriptors = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$getOwnPropertySymbols = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");

var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");

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

/***/ "./solver/solve.worker.js":
/*!********************************!*\
  !*** ./solver/solve.worker.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () {
  return new Worker("/_next/" + "static/9373c79e7a4673d9d37b.worker.js");
};

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_10__);








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





const initialState = {
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

const reducer = (state = initialState, {
  type,
  payload
}) => {
  const stackCounts = [...state.stackCounts];

  switch (type) {
    case 'SET_SLATES':
      return _objectSpread({}, state, {
        slates: _objectSpread({}, payload)
      });

    case 'SET_SELECTED_SLATE':
      return _objectSpread({}, state, {
        selectedSlate: payload
      });

    case 'CLEAR_IMPORT_ERRORS':
      return _objectSpread({}, state, {
        importErrors: []
      });

    case 'ADD_IMPORT_ERROR':
      return _objectSpread({}, state, {
        importErrors: state.importErrors.concat([payload])
      });

    case 'SET_RAW_PROJECTION':
      return _objectSpread({}, state, {
        rawProjection: payload
      });

    case 'SET_PROJECTION':
      return _objectSpread({}, state, {
        projection: payload
      });

    case 'CLEAR_STACK':
      return _objectSpread({}, state, {
        stack: []
      });

    case 'ADD_STACK':
      return _objectSpread({}, state, {
        stacks: state.stacks.concat([payload]),
        stackCounts: state.stackCounts.concat([0])
      });

    case 'REMOVE_STACK':
      return _objectSpread({}, state, {
        stacks: state.stacks.filter((stack, i) => i !== payload),
        stackCounts: state.stackCounts.filter((n, i) => i !== payload)
      });

    case 'ADD_PLAYER_TO_STACK':
      return _objectSpread({}, state, {
        stack: state.stack.concat([payload])
      });

    case 'REMOVE_PLAYER_FROM_STACK':
      return _objectSpread({}, state, {
        stack: state.stack.filter(player => player.playerId !== payload.playerId)
      });

    case 'SET_STACK_N':
      const {
        i,
        n
      } = payload;
      stackCounts[i] = Number(n);
      return _objectSpread({}, state, {
        stackCounts
      });

    case 'ADD_RESULT':
      return _objectSpread({}, state, {
        results: state.results.concat(payload)
      });

    case 'REMOVE_RESULT':
      return _objectSpread({}, state, {
        results: state.results.filter((result, i) => i !== payload)
      });

    case 'ADD_PLAYER_TO_POOL':
      return _objectSpread({}, state, {
        pool: state.pool.concat([payload])
      });

    case 'REMOVE_PLAYER_FROM_POOL':
      return _objectSpread({}, state, {
        pool: state.pool.filter(player => player.playerId !== payload.playerId)
      });

    case 'SET_VIEW':
      return _objectSpread({}, state, {
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

      return _objectSpread({}, state, {
        stacks,
        stackCounts
      });

    case 'CLEAR_POOL':
      return _objectSpread({}, state, {
        pool: []
      });

    case 'SET_POOL_SALARY_RANGE':
      return _objectSpread({}, state, {
        poolSalaryRange: payload
      });

    case 'TOGGLE_POOL_TOOLS':
      return _objectSpread({}, state, {
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
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_10___default())
};
const persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_9__["persistReducer"])(persistConfig, reducer);
const initializeStore = (preloadedState = initialState) => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_7__["createStore"])(persistedReducer, preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_8__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_7__["applyMiddleware"])()));
};

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jwesto1/Code/jaw187/dfs-solver/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@hapi/joi":
/*!****************************!*\
  !*** external "@hapi/joi" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@hapi/joi");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "@material-ui/core/Collapse":
/*!*********************************************!*\
  !*** external "@material-ui/core/Collapse" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/Input":
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/Slider":
/*!*******************************************!*\
  !*** external "@material-ui/core/Slider" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slider");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "lodash/clone":
/*!*******************************!*\
  !*** external "lodash/clone" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/clone");

/***/ }),

/***/ "lodash/cloneDeep":
/*!***********************************!*\
  !*** external "lodash/cloneDeep" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map