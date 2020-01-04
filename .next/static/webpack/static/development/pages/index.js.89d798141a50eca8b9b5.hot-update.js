webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/importprojection.js":
/*!****************************************!*\
  !*** ./components/importprojection.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ "./components/card.js");
/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hapi/joi */ "./node_modules/@hapi/joi/dist/joi-browser.min.js");
/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hapi_joi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/Users/jwesto1/Code/jaw187/dfs-solver/components/importprojection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var getState = function getState() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var importErrors = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.importErrors;
  }, react_redux__WEBPACK_IMPORTED_MODULE_4__["shallowEqual"]);
  var rawProjection = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.rawProjection;
  }, react_redux__WEBPACK_IMPORTED_MODULE_4__["shallowEqual"]);
  var projection = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.projection;
  }, react_redux__WEBPACK_IMPORTED_MODULE_4__["shallowEqual"]);
  var view = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.view;
  }, react_redux__WEBPACK_IMPORTED_MODULE_4__["shallowEqual"]);
  var slates = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.slates;
  }, react_redux__WEBPACK_IMPORTED_MODULE_4__["shallowEqual"]);
  var selectedSlate = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.selectedSlate;
  }, react_redux__WEBPACK_IMPORTED_MODULE_4__["shallowEqual"]);

  var setRawProjection = function setRawProjection(value) {
    dispatch({
      type: 'SET_RAW_PROJECTION',
      payload: value
    });
  };

  var importProjection = function importProjection() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["log"])('import');
    dispatch({
      type: 'CLEAR_IMPORT_ERRORS'
    });

    if (!rawProjection) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["log"])('import error empty textarea');
      return dispatch({
        type: 'ADD_IMPORT_ERROR',
        payload: new Error('empty textarea')
      });
    }

    var validationSchema = _hapi_joi__WEBPACK_IMPORTED_MODULE_3___default.a.object({
      player: _hapi_joi__WEBPACK_IMPORTED_MODULE_3___default.a.string().required(),
      value: _hapi_joi__WEBPACK_IMPORTED_MODULE_3___default.a.number().required(),
      ownership: _hapi_joi__WEBPACK_IMPORTED_MODULE_3___default.a.number().required()
    }); // track players, they should be unique

    var players = {}; // assumes that values will not contain commas

    var errors = false;
    var formattedProjection = rawProjection.split('\n').map(function (line) {
      var _ref = line.indexOf(',') > 0 ? line.split(',') : line.split('\t'),
          _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 3),
          player = _ref2[0],
          projection = _ref2[1],
          ownership = _ref2[2];

      if (player === 'ID' || player === '') {
        return 'REMOVE';
      }

      var result = {
        player: player,
        value: Number(projection),
        ownership: Number(ownership)
      };

      if (players[player]) {
        errors = true;
        Object(_utils__WEBPACK_IMPORTED_MODULE_7__["log"])('import error duplicate player');
        dispatch({
          type: 'ADD_IMPORT_ERROR',
          payload: new Error("Duplicate player - ".concat(player))
        });
      }

      players[player] = true;
      var validation = validationSchema.validate(result);

      if (validation.error) {
        errors = true;
        Object(_utils__WEBPACK_IMPORTED_MODULE_7__["log"])('import error validation error');
        dispatch({
          type: 'ADD_IMPORT_ERROR',
          payload: validation
        });
      }

      return result;
    }).filter(function (result) {
      return result !== 'REMOVE';
    });

    if (!errors) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["log"])("import ".concat(formattedProjection.length, " records"));
      dispatch({
        type: 'SET_PROJECTION',
        payload: formattedProjection
      });
    }
  };

  var exportTemplate = function exportTemplate() {
    if (slates && selectedSlate) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["log"])("export template");
      var players = slates[selectedSlate].players;

      var format = function format(player) {
        return "".concat(player.displayName, ",").concat(player.draftableId, ",,50");
      };

      var header = "Do not copy the player name column as well as this row\nName,ID,Projection,Ownership\n";
      var csv = "data:text/csv;charset=utf-8," + header + players.map(format).join('\n');
      var _window = window,
          _encodeURI = _window.encodeURI;
      var _document = document,
          createElement = _document.createElement,
          body = _document.body;
      var downloadLink = document.createElement("a");
      downloadLink.href = _encodeURI(csv);
      downloadLink.download = "".concat(selectedSlate, " - Projections.csv");
      body.appendChild(downloadLink);
      downloadLink.click();
      body.removeChild(downloadLink);
    }
  };

  return {
    setRawProjection: setRawProjection,
    projection: projection,
    importErrors: importErrors,
    importProjection: importProjection,
    view: view,
    exportTemplate: exportTemplate
  };
};

var componentContainer = {
  padding: 16
};
var cardContainer = {
  display: 'flex',
  flexDirection: 'row'
};
var placeholder = "Copy and paste a csv or tab deliminated file of your own projections with desired ownership percentages.  Format each line of your csv like this:\n\nplayer id, projection, desired ownership\n\nor for a tab deliminated file, like this:\nplayer id projection  desired ownership\n";

var ImportProjection = function ImportProjection() {
  var _getState = getState(),
      importErrors = _getState.importErrors,
      projection = _getState.projection,
      setRawProjection = _getState.setRawProjection,
      importProjection = _getState.importProjection,
      view = _getState.view,
      exportTemplate = _getState.exportTemplate;

  if (view !== 'importprojections') {
    return null;
  }

  var onChange = function onChange(event) {
    return setRawProjection(event.target.value);
  };

  var textAreaStyle = {
    width: 480,
    padding: 8
  };
  var buttonsContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 24
  };
  var buttonContainerStyle = {
    paddingRight: 24
  };
  var buttonStyle = {
    paddingLeft: 36,
    paddingRight: 36
  };
  var infoContainer = {
    paddingBottom: 36
  };
  return __jsx("div", {
    style: componentContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx("h2", {
    style: {
      marginTop: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "Your Projections"), __jsx("div", {
    style: cardContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, !projection && __jsx("div", {
    style: infoContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "DFS Solver is a Bring Your Own Projection system.  You'll need to copy and paste your projections into the text area below. Use the Export Template button to download a sheet with proper player id's for your selected slate."), importErrors && !!importErrors.length && __jsx("div", {
    style: infoContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx("h3", {
    style: {
      marginTop: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "Import Has Errors"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, importErrors.map(function (err) {
    return __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, err.error && err.error.toString() || err.toString());
  }))), projection && __jsx("div", {
    style: infoContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx("h3", {
    style: {
      marginTop: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "Current Projection"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, "Projections for ".concat(projection.length, " players"))), __jsx("div", {
    style: buttonsContainerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx("div", {
    style: buttonContainerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "contained",
    onClick: importProjection,
    color: "primary",
    style: buttonStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, "Import Projections")), __jsx("div", {
    style: buttonContainerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "contained",
    onClick: exportTemplate,
    color: "secondary",
    style: buttonStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, "Export Template"))), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      lineNumber: 220
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ImportProjection);

/***/ })

})
//# sourceMappingURL=index.js.89d798141a50eca8b9b5.hot-update.js.map