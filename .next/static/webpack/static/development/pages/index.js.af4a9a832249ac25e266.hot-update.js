webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ "./components/card.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _solver_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../solver/index */ "./solver/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/jwesto1/Code/jaw187/dfs-solver/components/lineups.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var solve = _solver_index__WEBPACK_IMPORTED_MODULE_4__["default"].solve,
    Models = _solver_index__WEBPACK_IMPORTED_MODULE_4__["default"].Models,
    players = _solver_index__WEBPACK_IMPORTED_MODULE_4__["default"].players;

var getState = function getState() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var slates = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.slates;
  }, react_redux__WEBPACK_IMPORTED_MODULE_3__["shallowEqual"]);
  var selectedSlate = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.selectedSlate;
  });
  var projection = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.projection;
  });
  var results = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.results;
  });
  var view = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.view;
  });

  var removeLineup = function removeLineup(i) {
    dispatch({
      type: 'REMOVE_RESULT',
      payload: i
    });
  };

  return {
    slates: slates,
    selectedSlate: selectedSlate,
    projection: projection,
    results: results,
    view: view,
    removeLineup: removeLineup
  };
};

var Lineups = function Lineups() {
  var _getState = getState(),
      slates = _getState.slates,
      selectedSlate = _getState.selectedSlate,
      projection = _getState.projection,
      results = _getState.results,
      view = _getState.view,
      removeLineup = _getState.removeLineup;

  if (view !== 'results') {
    return null;
  }

  if (results.length === 0) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Generate some lineups");
  }

  var slate = slates && slates[selectedSlate];
  var sport = slate.Sport.toLowerCase();
  var site = 'draftkings';
  var type = slate.GameType.Name.toLowerCase();

  var formatPlayer = function formatPlayer(lineupPlayer) {
    var player = slate.players.find(function (player) {
      return player.draftableId == lineupPlayer.id;
    });

    if (!player) {
      return lineupPlayer.id;
    }

    return "".concat(player.position, " - ").concat(player.displayName, " - $").concat(player.salary);
  };

  var headers = {
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
  var exporters = {
    nfl: {
      draftkings: {
        classic: function classic(result) {
          var _result$lineup = result.lineup,
              qb = _result$lineup.qb,
              rbs = _result$lineup.rbs,
              wrs = _result$lineup.wrs,
              te = _result$lineup.te,
              flex = _result$lineup.flex,
              dst = _result$lineup.dst;
          return "".concat(qb.id, ",").concat(rbs[0].id, ",").concat(rbs[1].id, ",").concat(wrs[0].id, ",").concat(wrs[1].id, ",").concat(wrs[2].id, ",").concat(te.id, ",").concat(flex.id, ",").concat(dst.id);
        }
      }
    },
    golf: {
      draftkings: {
        classic: function classic(result) {
          var g = result.lineup.g;
          return "".concat(g[0].id, ",").concat(g[1].id, ",").concat(g[2].id, ",").concat(g[3].id, ",").concat(g[4].id, ",").concat(g[5].id);
        }
      }
    }
  };

  var exportToCSV = function exportToCSV() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["log"])('export linieups');
    var header = headers[sport][site][type];
    var csv = "data:text/csv;charset=utf-8," + header + results.map(exporters[sport][site][type]).join('\n');
    var _window = window,
        encodeURI = _window.encodeURI;
    var downloadLink = document.createElement("a");
    downloadLink.href = encodeURI(csv);
    downloadLink.download = "".concat(selectedSlate, " - Lineups.csv");
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  var remove = function remove(i) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["log"])('remove lineup');
    return function () {
      return removeLineup(i);
    };
  };

  var containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  };
  var lineupStyle = {
    padding: 16,
    margin: 8,
    backgroundColor: "#f3f3f3",
    border: '1px solid #DDD',
    fontSize: 12
  };
  var cardContainer = {
    display: 'flex',
    flexDirection: 'row'
  };
  var componentContainer = {
    padding: 16
  };
  var playerCounts = {};
  results.forEach(function (result) {
    result.players.forEach(function (player) {
      if (!playerCounts[player]) {
        playerCounts[player] = 0;
      }

      ++playerCounts[player];
    });
  });

  var ownership = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(playerCounts).map(function (player) {
    return {
      player: formatPlayer({
        id: player
      }),
      count: playerCounts[player],
      percentage: (playerCounts[player] / results.length * 100).toFixed(0)
    };
  });

  var ownershipPlayerStyle = {
    whiteSpace: 'nowrap'
  };
  var lineupFormats = {
    nfl: {
      draftkings: {
        classic: function classic(result, i) {
          return __jsx("div", {
            key: i,
            style: lineupStyle,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 168
            },
            __self: this
          }, __jsx("button", {
            onClick: remove(i),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169
            },
            __self: this
          }, "Remove"), __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 170
            },
            __self: this
          }, formatPlayer(result.lineup.qb)), __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 171
            },
            __self: this
          }, formatPlayer(result.lineup.rbs[0])), __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 172
            },
            __self: this
          }, formatPlayer(result.lineup.rbs[1])), __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173
            },
            __self: this
          }, formatPlayer(result.lineup.wrs[0])), __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            },
            __self: this
          }, formatPlayer(result.lineup.wrs[1])), __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 175
            },
            __self: this
          }, formatPlayer(result.lineup.wrs[2])), __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176
            },
            __self: this
          }, formatPlayer(result.lineup.te)), __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 177
            },
            __self: this
          }, formatPlayer(result.lineup.flex)), __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 178
            },
            __self: this
          }, formatPlayer(result.lineup.dst)));
        }
      }
    },
    golf: {
      draftkings: {
        classic: function classic(result, i) {
          return __jsx("div", {
            key: i,
            style: lineupStyle,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 186
            },
            __self: this
          }, __jsx("button", {
            onClick: remove(i),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 187
            },
            __self: this
          }, "Remove"), __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 188
            },
            __self: this
          }, formatPlayer(result.lineup.g[0])), __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 189
            },
            __self: this
          }, formatPlayer(result.lineup.g[1])), __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 190
            },
            __self: this
          }, formatPlayer(result.lineup.g[2])), __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 191
            },
            __self: this
          }, formatPlayer(result.lineup.g[3])), __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 192
            },
            __self: this
          }, formatPlayer(result.lineup.g[4])), __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 193
            },
            __self: this
          }, formatPlayer(result.lineup.g[5])));
        }
      }
    }
  };
  return __jsx("div", {
    style: componentContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx("h2", {
    style: {
      marginTop: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "Lineups"), __jsx("div", {
    style: cardContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx("h3", {
    style: {
      marginTop: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "Ownership"), !!ownership.length && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, ownership.map(function (data) {
    return __jsx("div", {
      style: ownershipPlayerStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, data.player, " - ", data.count, " - ", data.percentage, "%");
  }))), __jsx(_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, !!results.length && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx("h3", {
    style: {
      marginTop: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, results.length, " lineups"), __jsx("button", {
    onClick: exportToCSV,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "Export"), __jsx("div", {
    style: containerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, results.map(lineupFormats[sport][site][type]))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Lineups);

/***/ })

})
//# sourceMappingURL=index.js.af4a9a832249ac25e266.hot-update.js.map