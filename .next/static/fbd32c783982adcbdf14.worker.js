/******/ (function(modules) { // webpackBootstrap
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		importScripts(__webpack_require__.p + "static/webpack/" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "static/webpack/" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	//eslint-disable-next-line no-unused-vars
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "fbd32c783982adcbdf14";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
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
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./solver/solve.worker.js")(__webpack_require__.s = "./solver/solve.worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "./node_modules/core-js/library/fn/object/define-properties.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "./node_modules/core-js/library/fn/object/get-own-property-descriptors.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

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

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-properties.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-properties */ "./node_modules/core-js/library/modules/es6.object.define-properties.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptors.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-descriptors.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getOwnPropertyDescriptors;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-symbols.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.10' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_own-keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_own-keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var Reflect = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-properties.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var ownKeys = __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/library/modules/_own-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/library/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/javascript-lp-solver/src/External/lpsolve/Reformat.js":
/*!****************************************************************************!*\
  !*** ./node_modules/javascript-lp-solver/src/External/lpsolve/Reformat.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*global describe*/
/*global require*/
/*global module*/
/*global it*/
/*global console*/
/*global process*/
/*jshint -W083 */

 /*************************************************************
 * Method: to_JSON
 * Scope: Public:
 * Agruments: input: Whatever the user gives us
 * Purpose: Convert an unfriendly formatted LP
 *          into something that our library can
 *          work with
 **************************************************************/
function to_JSON(input){
    var rxo = {
        /* jshint ignore:start */
        "is_blank": /^\W{0,}$/,
        "is_objective": /(max|min)(imize){0,}\:/i,
        "is_int": /^(?!\/\*)\W{0,}int/i,
        "is_bin": /^(?!\/\*)\W{0,}bin/i,
        "is_constraint": /(\>|\<){0,}\=/i,
        "is_unrestricted": /^\S{0,}unrestricted/i,
        "parse_lhs":  /(\-|\+){0,1}\s{0,1}\d{0,}\.{0,}\d{0,}\s{0,}[A-Za-z]\S{0,}/gi,
        "parse_rhs": /(\-|\+){0,1}\d{1,}\.{0,}\d{0,}\W{0,}\;{0,1}$/i,
        "parse_dir": /(\>|\<){0,}\=/gi,
        "parse_int": /[^\s|^\,]+/gi,
        "parse_bin": /[^\s|^\,]+/gi,
        "get_num": /(\-|\+){0,1}(\W|^)\d+\.{0,1}\d{0,}/g,
        "get_word": /[A-Za-z].*/
        /* jshint ignore:end */
    },
    model = {
        "opType": "",
        "optimize": "_obj",
        "constraints": {},
        "variables": {}
    },
    constraints = {
        ">=": "min",
        "<=": "max",
        "=": "equal"
    },
    tmp = "", tst = 0, ary = null, hldr = "", hldr2 = "",
    constraint = "", rhs = 0;

    // Handle input if its coming
    // to us as a hard string
    // instead of as an array of
    // strings
    if(typeof input === "string"){
        input = input.split("\n");
    }

    // Start iterating over the rows
    // to see what all we have
    for(var i = 0; i < input.length; i++){

        constraint = "__" + i;

        // Get the string we're working with
        tmp = input[i];

        // Set the test = 0
        tst = 0;

        // Reset the array
        ary = null;

        // Test to see if we're the objective
        if(rxo.is_objective.test(tmp)){
            // Set up in model the opType
            model.opType = tmp.match(/(max|min)/gi)[0];

            // Pull apart lhs
            ary = tmp.match(rxo.parse_lhs).map(function(d){
                return d.replace(/\s+/,"");
            }).slice(1);



            // *** STEP 1 *** ///
            // Get the variables out
            ary.forEach(function(d){

                // Get the number if its there
                hldr = d.match(rxo.get_num);

                // If it isn't a number, it might
                // be a standalone variable
                if(hldr === null){
                    if(d.substr(0,1) === "-"){
                        hldr = -1;
                    } else {
                        hldr = 1;
                    }
                } else {
                    hldr = hldr[0];
                }

                hldr = parseFloat(hldr);

                // Get the variable type
                hldr2 = d.match(rxo.get_word)[0].replace(/\;$/,"");

                // Make sure the variable is in the model
                model.variables[hldr2] = model.variables[hldr2] || {};
                model.variables[hldr2]._obj = hldr;

            });
        ////////////////////////////////////
        }else if(rxo.is_int.test(tmp)){
            // Get the array of ints
            ary = tmp.match(rxo.parse_int).slice(1);

            // Since we have an int, our model should too
            model.ints = model.ints || {};

            ary.forEach(function(d){
                d = d.replace(";","");
                model.ints[d] = 1;
            });
        ////////////////////////////////////
        } else if(rxo.is_bin.test(tmp)){
            // Get the array of bins
            ary = tmp.match(rxo.parse_bin).slice(1);

            // Since we have an binary, our model should too
            model.binaries = model.binaries || {};

            ary.forEach(function(d){
                d = d.replace(";","");
                model.binaries[d] = 1;
            });
        ////////////////////////////////////
        } else if(rxo.is_constraint.test(tmp)){
            var separatorIndex = tmp.indexOf(":");
            var constraintExpression = (separatorIndex === -1) ? tmp : tmp.slice(separatorIndex + 1);

            // Pull apart lhs
            ary = constraintExpression.match(rxo.parse_lhs).map(function(d){
                return d.replace(/\s+/,"");
            });

            // *** STEP 1 *** ///
            // Get the variables out
            ary.forEach(function(d){
                // Get the number if its there
                hldr = d.match(rxo.get_num);

                if(hldr === null){
                    if(d.substr(0,1) === "-"){
                        hldr = -1;
                    } else {
                        hldr = 1;
                    }
                } else {
                    hldr = hldr[0];
                }

                hldr = parseFloat(hldr);


                // Get the variable name
                hldr2 = d.match(rxo.get_word)[0];

                // Make sure the variable is in the model
                model.variables[hldr2] = model.variables[hldr2] || {};
                model.variables[hldr2][constraint] = hldr;

            });

            // *** STEP 2 *** ///
            // Get the RHS out
            rhs = parseFloat(tmp.match(rxo.parse_rhs)[0]);

            // *** STEP 3 *** ///
            // Get the Constrainer out
            tmp = constraints[tmp.match(rxo.parse_dir)[0]];
            model.constraints[constraint] = model.constraints[constraint] || {};
            model.constraints[constraint][tmp] = rhs;
        ////////////////////////////////////
        } else if(rxo.is_unrestricted.test(tmp)){
            // Get the array of unrestricted
            ary = tmp.match(rxo.parse_int).slice(1);

            // Since we have an int, our model should too
            model.unrestricted = model.unrestricted || {};

            ary.forEach(function(d){
                d = d.replace(";","");
                model.unrestricted[d] = 1;
            });
        }
    }
    return model;
}


 /*************************************************************
 * Method: from_JSON
 * Scope: Public:
 * Agruments: model: The model we want solver to operate on
 * Purpose: Convert a friendly JSON model into a model for a
 *          real solving library...in this case
 *          lp_solver
 **************************************************************/
function from_JSON(model){
    // Make sure we at least have a model
    if (!model) {
        throw new Error("Solver requires a model to operate on");
    }

    var output = "",
        ary = [],
        norm = 1,
        lookup = {
            "max": "<=",
            "min": ">=",
            "equal": "="
        },
        rxClean = new RegExp("[^A-Za-z0-9_\[\{\}\/\.\&\#\$\%\~\'\@\^]", "gi");

    // Build the objective statement
    
    if(model.opType){
        
        output += model.opType + ":";

        // Iterate over the variables
        for(var x in model.variables){
            // Give each variable a self of 1 unless
            // it exists already
            model.variables[x][x] = model.variables[x][x] ? model.variables[x][x] : 1;

            // Does our objective exist here?
            if(model.variables[x][model.optimize]){
                output += " " + model.variables[x][model.optimize] + " " + x.replace(rxClean,"_");
            }
        }
    } else {
        output += "max:";
    }
    


    // Add some closure to our line thing
    output += ";\n\n";

    // And now... to iterate over the constraints
    for(var xx in model.constraints){
        for(var y in model.constraints[xx]){
            if(typeof lookup[y] !== "undefined"){
                
                for(var z in model.variables){

                    // Does our Constraint exist here?
                    if(typeof model.variables[z][xx] !== "undefined"){
                        output += " " + model.variables[z][xx] + " " + z.replace(rxClean,"_");
                    }
                }
                // Add the constraint type and value...

                output += " " + lookup[y] + " " + model.constraints[xx][y];
                output += ";\n";
                
            }
        }
    }

    // Are there any ints?
    if(model.ints){
        output += "\n\n";
        for(var xxx in model.ints){
            output += "int " + xxx.replace(rxClean,"_") + ";\n";
        }
    }

    // Are there any unrestricted?
    if(model.unrestricted){
        output += "\n\n";
        for(var xxxx in model.unrestricted){
            output += "unrestricted " + xxxx.replace(rxClean,"_") + ";\n";
        }
    }

    // And kick the string back
    return output;

}


module.exports = function (model) {
    // If the user is giving us an array
    // or a string, convert it to a JSON Model
    // otherwise, spit it out as a string
    if(model.length){
        return to_JSON(model);
    } else {
        return from_JSON(model);
    }
};


/***/ }),

/***/ "./node_modules/javascript-lp-solver/src/Model.js":
/*!********************************************************!*\
  !*** ./node_modules/javascript-lp-solver/src/Model.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*global describe*/
/*global require*/
/*global module*/
/*global it*/
/*global console*/
/*global process*/

var Tableau = __webpack_require__(/*! ./Tableau/Tableau.js */ "./node_modules/javascript-lp-solver/src/Tableau/Tableau.js");
var branchAndCut = __webpack_require__(/*! ./Tableau/branchAndCut.js */ "./node_modules/javascript-lp-solver/src/Tableau/branchAndCut.js");
var expressions = __webpack_require__(/*! ./expressions.js */ "./node_modules/javascript-lp-solver/src/expressions.js");
var Constraint = expressions.Constraint;
var Equality = expressions.Equality;
var Variable = expressions.Variable;
var IntegerVariable = expressions.IntegerVariable;
var Term = expressions.Term;

/*************************************************************
 * Class: Model
 * Description: Holds the model of a linear optimisation problem
 **************************************************************/
function Model(precision, name) {
    this.tableau = new Tableau(precision);

    this.name = name;

    this.variables = [];

    this.integerVariables = [];

    this.unrestrictedVariables = {};

    this.constraints = [];

    this.nConstraints = 0;

    this.nVariables = 0;

    this.isMinimization = true;

    this.tableauInitialized = false;
    
    this.relaxationIndex = 1;

    this.useMIRCuts = false;

    this.checkForCycles = true;
    
    //
    // Quick and dirty way to leave useful information
    // for the end user without hitting the console
    // or modifying the primary return object...
    //
    this.messages = [];
}
module.exports = Model;

Model.prototype.minimize = function () {
    this.isMinimization = true;
    return this;
};

Model.prototype.maximize = function () {
    this.isMinimization = false;
    return this;
};

// Model.prototype.addConstraint = function (constraint) {
//     // TODO: make sure that the constraint does not belong do another model
//     // and make
//     this.constraints.push(constraint);
//     return this;
// };

Model.prototype._getNewElementIndex = function () {
    if (this.availableIndexes.length > 0) {
        return this.availableIndexes.pop();
    }

    var index = this.lastElementIndex;
    this.lastElementIndex += 1;
    return index;
};

Model.prototype._addConstraint = function (constraint) {
    var slackVariable = constraint.slack;
    this.tableau.variablesPerIndex[slackVariable.index] = slackVariable;
    this.constraints.push(constraint);
    this.nConstraints += 1;
    if (this.tableauInitialized === true) {
        this.tableau.addConstraint(constraint);
    }
};

Model.prototype.smallerThan = function (rhs) {
    var constraint = new Constraint(rhs, true, this.tableau.getNewElementIndex(), this);
    this._addConstraint(constraint);
    return constraint;
};

Model.prototype.greaterThan = function (rhs) {
    var constraint = new Constraint(rhs, false, this.tableau.getNewElementIndex(), this);
    this._addConstraint(constraint);
    return constraint;
};

Model.prototype.equal = function (rhs) {
    var constraintUpper = new Constraint(rhs, true, this.tableau.getNewElementIndex(), this);
    this._addConstraint(constraintUpper);

    var constraintLower = new Constraint(rhs, false, this.tableau.getNewElementIndex(), this);
    this._addConstraint(constraintLower);

    return new Equality(constraintUpper, constraintLower);
};

Model.prototype.addVariable = function (cost, id, isInteger, isUnrestricted, priority) {
    if (typeof priority === "string") {
        switch (priority) {
        case "required":
            priority = 0;
            break;
        case "strong":
            priority = 1;
            break;
        case "medium":
            priority = 2;
            break;
        case "weak":
            priority = 3;
            break;
        default:
            priority = 0;
            break;
        }
    }

    var varIndex = this.tableau.getNewElementIndex();
    if (id === null || id === undefined) {
        id = "v" + varIndex;
    }

    if (cost === null || cost === undefined) {
        cost = 0;
    }

    if (priority === null || priority === undefined) {
        priority = 0;
    }

    var variable;
    if (isInteger) {
        variable = new IntegerVariable(id, cost, varIndex, priority);
        this.integerVariables.push(variable);
    } else {
        variable = new Variable(id, cost, varIndex, priority);
    }

    this.variables.push(variable);
    this.tableau.variablesPerIndex[varIndex] = variable;

    if (isUnrestricted) {
        this.unrestrictedVariables[varIndex] = true;
    }

    this.nVariables += 1;

    if (this.tableauInitialized === true) {
        this.tableau.addVariable(variable);
    }

    return variable;
};

Model.prototype._removeConstraint = function (constraint) {
    var idx = this.constraints.indexOf(constraint);
    if (idx === -1) {
        console.warn("[Model.removeConstraint] Constraint not present in model");
        return;
    }

    this.constraints.splice(idx, 1);
    this.nConstraints -= 1;

    if (this.tableauInitialized === true) {
        this.tableau.removeConstraint(constraint);
    }

    if (constraint.relaxation) {
        this.removeVariable(constraint.relaxation);
    }
};

//-------------------------------------------------------------------
// For dynamic model modification
//-------------------------------------------------------------------
Model.prototype.removeConstraint = function (constraint) {
    if (constraint.isEquality) {
        this._removeConstraint(constraint.upperBound);
        this._removeConstraint(constraint.lowerBound);
    } else {
        this._removeConstraint(constraint);
    }

    return this;
};

Model.prototype.removeVariable = function (variable) {
    var idx = this.variables.indexOf(variable);
    if (idx === -1) {
        console.warn("[Model.removeVariable] Variable not present in model");
        return;
    }
    this.variables.splice(idx, 1);

    if (this.tableauInitialized === true) {
        this.tableau.removeVariable(variable);
    }

    return this;
};

Model.prototype.updateRightHandSide = function (constraint, difference) {
    if (this.tableauInitialized === true) {
        this.tableau.updateRightHandSide(constraint, difference);
    }
    return this;
};

Model.prototype.updateConstraintCoefficient = function (constraint, variable, difference) {
    if (this.tableauInitialized === true) {
        this.tableau.updateConstraintCoefficient(constraint, variable, difference);
    }
    return this;
};


Model.prototype.setCost = function (cost, variable) {
    var difference = cost - variable.cost;
    if (this.isMinimization === false) {
        difference = -difference;
    }

    variable.cost = cost;
    this.tableau.updateCost(variable, difference);
    return this;
};

//-------------------------------------------------------------------
//-------------------------------------------------------------------
Model.prototype.loadJson = function (jsonModel) {
    this.isMinimization = (jsonModel.opType !== "max");

    var variables = jsonModel.variables;
    var constraints = jsonModel.constraints;

    var constraintsMin = {};
    var constraintsMax = {};

    // Instantiating constraints
    var constraintIds = Object.keys(constraints);
    var nConstraintIds = constraintIds.length;

    for (var c = 0; c < nConstraintIds; c += 1) {
        var constraintId = constraintIds[c];
        var constraint = constraints[constraintId];
        var equal = constraint.equal;

        var weight = constraint.weight;
        var priority = constraint.priority;
        var relaxed = weight !== undefined || priority !== undefined;

        var lowerBound, upperBound;
        if (equal === undefined) {
            var min = constraint.min;
            if (min !== undefined) {
                lowerBound = this.greaterThan(min);
                constraintsMin[constraintId] = lowerBound;
                if (relaxed) { lowerBound.relax(weight, priority); }
            }

            var max = constraint.max;
            if (max !== undefined) {
                upperBound = this.smallerThan(max);
                constraintsMax[constraintId] = upperBound;
                if (relaxed) { upperBound.relax(weight, priority); }
            }
        } else {
            lowerBound = this.greaterThan(equal);
            constraintsMin[constraintId] = lowerBound;

            upperBound = this.smallerThan(equal);
            constraintsMax[constraintId] = upperBound;

            var equality = new Equality(lowerBound, upperBound);
            if (relaxed) { equality.relax(weight, priority); }
        }
    }

    var variableIds = Object.keys(variables);
    var nVariables = variableIds.length;
    
    
    
//
//
// *** OPTIONS ***
//
//

    this.tolerance = jsonModel.tolerance || 0;
    
    if(jsonModel.timeout){
        this.timeout = jsonModel.timeout;
    }
    
    //
    //
    // The model is getting too sloppy with options added to it...
    // mebe it needs an "options" option...?
    //
    // YES! IT DOES!
    // DO IT!
    // NOW!
    // HERE!!!
    //
    if(jsonModel.options){
        
        //
        // TIMEOUT
        //
        if(jsonModel.options.timeout){
            this.timeout = jsonModel.options.timeout;
        }
        
        //
        // TOLERANCE
        //
        if(this.tolerance === 0){
            this.tolerance = jsonModel.options.tolerance || 0;
        }
        
        //
        // MIR CUTS - (NOT WORKING)
        //
        if(jsonModel.options.useMIRCuts){
            this.useMIRCuts = jsonModel.options.useMIRCuts;
        }
        
        //
        // CYCLE CHECK...tricky because it defaults to false
        //
        //
        // This should maybe be on by default...
        //
        if(typeof jsonModel.options.exitOnCycles === "undefined"){
            this.checkForCycles = true;
        } else {
            this.checkForCycles = jsonModel.options.exitOnCycles;
        }

        
    }
    
    
//
//
// /// OPTIONS \\\
//
//
    
    var integerVarIds = jsonModel.ints || {};
    var binaryVarIds = jsonModel.binaries || {};
    var unrestrictedVarIds = jsonModel.unrestricted || {};

    // Instantiating variables and constraint terms
    var objectiveName = jsonModel.optimize;
    for (var v = 0; v < nVariables; v += 1) {
        // Creation of the variables
        var variableId = variableIds[v];
        var variableConstraints = variables[variableId];
        var cost = variableConstraints[objectiveName] || 0;
        var isBinary = !!binaryVarIds[variableId];
        var isInteger = !!integerVarIds[variableId] || isBinary;
        var isUnrestricted = !!unrestrictedVarIds[variableId];
        var variable = this.addVariable(cost, variableId, isInteger, isUnrestricted);

        if (isBinary) {
            // Creating an upperbound constraint for this variable
            this.smallerThan(1).addTerm(1, variable);
        }

        var constraintNames = Object.keys(variableConstraints);
        for (c = 0; c < constraintNames.length; c += 1) {
            var constraintName = constraintNames[c];
            if (constraintName === objectiveName) {
                continue;
            }

            var coefficient = variableConstraints[constraintName];

            var constraintMin = constraintsMin[constraintName];
            if (constraintMin !== undefined) {
                constraintMin.addTerm(coefficient, variable);
            }

            var constraintMax = constraintsMax[constraintName];
            if (constraintMax !== undefined) {
                constraintMax.addTerm(coefficient, variable);
            }
        }
    }

    return this;
};

//-------------------------------------------------------------------
//-------------------------------------------------------------------
Model.prototype.getNumberOfIntegerVariables = function () {
    return this.integerVariables.length;
};

Model.prototype.solve = function () {
    // Setting tableau if not done
    if (this.tableauInitialized === false) {
        this.tableau.setModel(this);
        this.tableauInitialized = true;
    }

    return this.tableau.solve();
};

Model.prototype.isFeasible = function () {
    return this.tableau.feasible;
};

Model.prototype.save = function () {
    return this.tableau.save();
};

Model.prototype.restore = function () {
    return this.tableau.restore();
};

Model.prototype.activateMIRCuts = function (useMIRCuts) {
    this.useMIRCuts = useMIRCuts;
};

Model.prototype.debug = function (debugCheckForCycles) {
    this.checkForCycles = debugCheckForCycles;
};

Model.prototype.log = function (message) {
    return this.tableau.log(message);
};


/***/ }),

/***/ "./node_modules/javascript-lp-solver/src/Polyopt.js":
/*!**********************************************************!*\
  !*** ./node_modules/javascript-lp-solver/src/Polyopt.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*global describe*/
/*global require*/
/*global module*/
/*global it*/
/*global console*/
/*global process*/

    /***************************************************************
     * Method: polyopt
     * Scope: private
     * Agruments:
     *        model: The model we want solver to operate on.
                     Because we're in here, we're assuming that
                     we're solving a multi-objective optimization
                     problem. Poly-Optimization. polyopt.

                     This model has to be formed a little differently
                     because it has multiple objective functions.
                     Normally, a model has 2 attributes: opType (string,
                     "max" or "min"), and optimize (string, whatever
                     attribute we're optimizing.

                     Now, there is no opType attribute on the model,
                     and optimize is an object of attributes to be
                     optimized, and how they're to be optimized.
                     For example:

                     ...
                     "optimize": {
                        "pancakes": "max",
                        "cost": "minimize"
                     }
                     ...


     **************************************************************/

module.exports = function(solver, model){

    // I have no idea if this is actually works, or what,
    // but here is my algorithm to solve linear programs
    // with multiple objective functions

    // 1. Optimize for each constraint
    // 2. The results for each solution is a vector
    //    representing a vertex on the polytope we're creating
    // 3. The results for all solutions describes the shape
    //    of the polytope (would be nice to have the equation
    //    representing this)
    // 4. Find the mid-point between all vertices by doing the
    //    following (a_1 + a_2 ... a_n) / n;
    var objectives = model.optimize,
        new_constraints = JSON.parse(JSON.stringify(model.optimize)),
        keys = Object.keys(model.optimize),
        tmp,
        counter = 0,
        vectors = {},
        vector_key = "",
        obj = {},
        pareto = [],
        i,j,x,y,z;

    // Delete the optimize object from the model
    delete model.optimize;

    // Iterate and Clear
    for(i = 0; i < keys.length; i++){
        // Clean up the new_constraints
        new_constraints[keys[i]] = 0;
    }

    // Solve and add
    for(i = 0; i < keys.length; i++){

        // Prep the model
        model.optimize = keys[i];
        model.opType = objectives[keys[i]];

        // solve the model
        tmp = solver.Solve(model, undefined, undefined, true);

        // Only the variables make it into the solution;
        // not the attributes.
        //
        // Because of this, we have to add the attributes
        // back onto the solution so we can do math with
        // them later...

        // Loop over the keys
        for(y in keys){
            // We're only worried about attributes, not variables
            if(!model.variables[keys[y]]){
                // Create space for the attribute in the tmp object
                tmp[keys[y]] = tmp[keys[y]] ? tmp[keys[y]] : 0;
                // Go over each of the variables
                for(x in model.variables){
                    // Does the variable exist in tmp *and* does attribute exist in this model?
                    if(model.variables[x][keys[y]] && tmp[x]){
                        // Add it to tmp
                        tmp[keys[y]] += tmp[x] * model.variables[x][keys[y]];
                    }
                }
            }
        }

        // clear our key
        vector_key = "base";
        // this makes sure that if we get
        // the same vector more than once,
        // we only count it once when finding
        // the midpoint
        for(j = 0; j < keys.length; j++){
            if(tmp[keys[j]]){
                vector_key += "-" + ((tmp[keys[j]] * 1000) | 0) / 1000;
            } else {
                vector_key += "-0";
            }
        }

        // Check here to ensure it doesn't exist
        if(!vectors[vector_key]){
            // Add the vector-key in
            vectors[vector_key] = 1;
            counter++;
            
            // Iterate over the keys
            // and update our new constraints
            for(j = 0; j < keys.length; j++){
                if(tmp[keys[j]]){
                    new_constraints[keys[j]] += tmp[keys[j]];
                }
            }
            
            // Push the solution into the paretos
            // array after cleaning it of some
            // excess data markers
            
            delete tmp.feasible;
            delete tmp.result;            
            pareto.push(tmp);
        }
    }

    // Trying to find the mid-point
    // divide each constraint by the
    // number of constraints
    // *midpoint formula*
    // (x1 + x2 + x3) / 3
    for(i = 0; i < keys.length; i++){
        model.constraints[keys[i]] = {"equal": new_constraints[keys[i]] / counter};
    }

    // Give the model a fake thing to optimize on
    model.optimize = "cheater-" + Math.random();
    model.opType = "max";

    // And add the fake attribute to the variables
    // in the model
    for(i in model.variables){
        model.variables[i].cheater = 1;
    }
    
    // Build out the object with all attributes
    for(i in pareto){
        for(x in pareto[i]){
            obj[x] = obj[x] || {min: 1e99, max: -1e99};
        }
    }
    
    // Give each pareto a full attribute list
    // while getting the max and min values
    // for each attribute
    for(i in obj){
        for(x in pareto){
            if(pareto[x][i]){
                if(pareto[x][i] > obj[i].max){
                    obj[i].max = pareto[x][i];
                } 
                if(pareto[x][i] < obj[i].min){
                    obj[i].min = pareto[x][i];
                }
            } else {
                pareto[x][i] = 0;
                obj[i].min = 0;
            }
        }
    }
    // Solve the model for the midpoints
    tmp =  solver.Solve(model, undefined, undefined, true);
    
    return {
        midpoint: tmp,
        vertices: pareto,
        ranges: obj
    };    

};


/***/ }),

/***/ "./node_modules/javascript-lp-solver/src/Tableau/MilpSolution.js":
/*!***********************************************************************!*\
  !*** ./node_modules/javascript-lp-solver/src/Tableau/MilpSolution.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*global module*/
/*global require*/
var Solution = __webpack_require__(/*! ./Solution.js */ "./node_modules/javascript-lp-solver/src/Tableau/Solution.js");

function MilpSolution(tableau, evaluation, feasible, bounded, branchAndCutIterations) {
    Solution.call(this, tableau, evaluation, feasible, bounded);
    this.iter = branchAndCutIterations;
}
module.exports = MilpSolution;
MilpSolution.prototype = Object.create(Solution.prototype);
MilpSolution.constructor = MilpSolution;


/***/ }),

/***/ "./node_modules/javascript-lp-solver/src/Tableau/Solution.js":
/*!*******************************************************************!*\
  !*** ./node_modules/javascript-lp-solver/src/Tableau/Solution.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*global module*/

function Solution(tableau, evaluation, feasible, bounded) {
    this.feasible = feasible;
    this.evaluation = evaluation;
    this.bounded = bounded;
    this._tableau = tableau;
}
module.exports = Solution;

Solution.prototype.generateSolutionSet = function () {
    var solutionSet = {};

    var tableau = this._tableau;
    var varIndexByRow = tableau.varIndexByRow;
    var variablesPerIndex = tableau.variablesPerIndex;
    var matrix = tableau.matrix;
    var rhsColumn = tableau.rhsColumn;
    var lastRow = tableau.height - 1;
    var roundingCoeff = Math.round(1 / tableau.precision);

    for (var r = 1; r <= lastRow; r += 1) {
        var varIndex = varIndexByRow[r];
        var variable = variablesPerIndex[varIndex];
        if (variable === undefined || variable.isSlack === true) {
            continue;
        }

        var varValue = matrix[r][rhsColumn];
        solutionSet[variable.id] =
            Math.round((Number.EPSILON + varValue) * roundingCoeff) / roundingCoeff;
    }

    return solutionSet;
};


/***/ }),

/***/ "./node_modules/javascript-lp-solver/src/Tableau/Tableau.js":
/*!******************************************************************!*\
  !*** ./node_modules/javascript-lp-solver/src/Tableau/Tableau.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*global describe*/
/*global require*/
/*global module*/
/*global it*/
/*global console*/
/*global process*/
var Solution = __webpack_require__(/*! ./Solution.js */ "./node_modules/javascript-lp-solver/src/Tableau/Solution.js");
var MilpSolution = __webpack_require__(/*! ./MilpSolution.js */ "./node_modules/javascript-lp-solver/src/Tableau/MilpSolution.js");

/*************************************************************
 * Class: Tableau
 * Description: Simplex tableau, holding a the tableau matrix
 *              and all the information necessary to perform
 *              the simplex algorithm
 * Agruments:
 *        precision: If we're solving a MILP, how tight
 *                   do we want to define an integer, given
 *                   that 20.000000000000001 is not an integer.
 *                   (defaults to 1e-8)
 **************************************************************/
function Tableau(precision) {
    this.model = null;

    this.matrix = null;
    this.width = 0;
    this.height = 0;

    this.costRowIndex = 0;
    this.rhsColumn = 0;

    this.variablesPerIndex = [];
    this.unrestrictedVars = null;

    // Solution attributes
    this.feasible = true; // until proven guilty
    this.evaluation = 0;
    this.simplexIters = 0;

    this.varIndexByRow = null;
    this.varIndexByCol = null;

    this.rowByVarIndex = null;
    this.colByVarIndex = null;

    this.precision = precision || 1e-8;

    this.optionalObjectives = [];
    this.objectivesByPriority = {};

    this.savedState = null;

    this.availableIndexes = [];
    this.lastElementIndex = 0;

    this.variables = null;
    this.nVars = 0;

    this.bounded = true;
    this.unboundedVarIndex = null;

    this.branchAndCutIterations = 0;
}
module.exports = Tableau;

Tableau.prototype.solve = function () {
    if (this.model.getNumberOfIntegerVariables() > 0) {
        this.branchAndCut();
    } else {
        this.simplex();
    }
    this.updateVariableValues();
    return this.getSolution();
};

function OptionalObjective(priority, nColumns) {
    this.priority = priority;
    this.reducedCosts = new Array(nColumns);
    for (var c = 0; c < nColumns; c += 1) {
        this.reducedCosts[c] = 0;
    }
}

OptionalObjective.prototype.copy = function () {
    var copy = new OptionalObjective(this.priority, this.reducedCosts.length);
    copy.reducedCosts = this.reducedCosts.slice();
    return copy;
};

Tableau.prototype.setOptionalObjective = function (priority, column, cost) {
    var objectiveForPriority = this.objectivesByPriority[priority];
    if (objectiveForPriority === undefined) {
        var nColumns = Math.max(this.width, column + 1);
        objectiveForPriority = new OptionalObjective(priority, nColumns);
        this.objectivesByPriority[priority] = objectiveForPriority;
        this.optionalObjectives.push(objectiveForPriority);
        this.optionalObjectives.sort(function (a, b) {
            return a.priority - b.priority;
        });
    }

    objectiveForPriority.reducedCosts[column] = cost;
};

//-------------------------------------------------------------------
//-------------------------------------------------------------------
Tableau.prototype.initialize = function (width, height, variables, unrestrictedVars) {
    this.variables = variables;
    this.unrestrictedVars = unrestrictedVars;

    this.width = width;
    this.height = height;


// console.time("tableau_build");
    // BUILD AN EMPTY ARRAY OF THAT WIDTH
    var tmpRow = new Array(width);
    for (var i = 0; i < width; i++) {
        tmpRow[i] = 0;
    }

    // BUILD AN EMPTY TABLEAU
    this.matrix = new Array(height);
    for (var j = 0; j < height; j++) {
        this.matrix[j] = tmpRow.slice();
    }

//
// TODO: Benchmark This
//this.matrix = new Array(height).fill(0).map(() => new Array(width).fill(0));

// console.timeEnd("tableau_build");
// console.log("height",height);
// console.log("width",width);
// console.log("------");
// console.log("");


    this.varIndexByRow = new Array(this.height);
    this.varIndexByCol = new Array(this.width);

    this.varIndexByRow[0] = -1;
    this.varIndexByCol[0] = -1;

    this.nVars = width + height - 2;
    this.rowByVarIndex = new Array(this.nVars);
    this.colByVarIndex = new Array(this.nVars);

    this.lastElementIndex = this.nVars;
};

Tableau.prototype._resetMatrix = function () {
    var variables = this.model.variables;
    var constraints = this.model.constraints;

    var nVars = variables.length;
    var nConstraints = constraints.length;

    var v, varIndex;
    var costRow = this.matrix[0];
    var coeff = (this.model.isMinimization === true) ? -1 : 1;
    for (v = 0; v < nVars; v += 1) {
        var variable = variables[v];
        var priority = variable.priority;
        var cost = coeff * variable.cost;
        if (priority === 0) {
            costRow[v + 1] = cost;
        } else {
            this.setOptionalObjective(priority, v + 1, cost);
        }

        varIndex = variables[v].index;
        this.rowByVarIndex[varIndex] = -1;
        this.colByVarIndex[varIndex] = v + 1;
        this.varIndexByCol[v + 1] = varIndex;
    }

    var rowIndex = 1;
    for (var c = 0; c < nConstraints; c += 1) {
        var constraint = constraints[c];

        var constraintIndex = constraint.index;
        this.rowByVarIndex[constraintIndex] = rowIndex;
        this.colByVarIndex[constraintIndex] = -1;
        this.varIndexByRow[rowIndex] = constraintIndex;

        var t, term, column;
        var terms = constraint.terms;
        var nTerms = terms.length;
        var row = this.matrix[rowIndex++];
        if (constraint.isUpperBound) {
            for (t = 0; t < nTerms; t += 1) {
                term = terms[t];
                column = this.colByVarIndex[term.variable.index];
                row[column] = term.coefficient;
            }

            row[0] = constraint.rhs;
        } else {
            for (t = 0; t < nTerms; t += 1) {
                term = terms[t];
                column = this.colByVarIndex[term.variable.index];
                row[column] = -term.coefficient;
            }

            row[0] = -constraint.rhs;
        }
    }
};

//-------------------------------------------------------------------
//-------------------------------------------------------------------
Tableau.prototype.setModel = function (model) {
    this.model = model;

    var width = model.nVariables + 1;
    var height = model.nConstraints + 1;


    this.initialize(width, height, model.variables, model.unrestrictedVariables);
    this._resetMatrix();
    return this;
};

Tableau.prototype.getNewElementIndex = function () {
    if (this.availableIndexes.length > 0) {
        return this.availableIndexes.pop();
    }

    var index = this.lastElementIndex;
    this.lastElementIndex += 1;
    return index;
};

Tableau.prototype.density = function () {
    var density = 0;

    var matrix = this.matrix;
    for (var r = 0; r < this.height; r++) {
        var row = matrix[r];
        for (var c = 0; c < this.width; c++) {
            if (row[c] !== 0) {
                density += 1;
            }
        }
    }

    return density / (this.height * this.width);
};

//-------------------------------------------------------------------
//-------------------------------------------------------------------
Tableau.prototype.setEvaluation = function () {
    // Rounding objective value
    var roundingCoeff = Math.round(1 / this.precision);
    var evaluation = this.matrix[this.costRowIndex][this.rhsColumn];
    var roundedEvaluation =
        Math.round((Number.EPSILON + evaluation) * roundingCoeff) / roundingCoeff;

    this.evaluation = roundedEvaluation;
    if (this.simplexIters === 0) {
        this.bestPossibleEval = roundedEvaluation;
    }
};

//-------------------------------------------------------------------
//-------------------------------------------------------------------
Tableau.prototype.getSolution = function () {
    var evaluation = (this.model.isMinimization === true) ?
        this.evaluation : -this.evaluation;

    if (this.model.getNumberOfIntegerVariables() > 0) {
        return new MilpSolution(this, evaluation, this.feasible, this.bounded, this.branchAndCutIterations);
    } else {
        return new Solution(this, evaluation, this.feasible, this.bounded);
    }
};


/***/ }),

/***/ "./node_modules/javascript-lp-solver/src/Tableau/backup.js":
/*!*****************************************************************!*\
  !*** ./node_modules/javascript-lp-solver/src/Tableau/backup.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*global require*/
var Tableau = __webpack_require__(/*! ./Tableau.js */ "./node_modules/javascript-lp-solver/src/Tableau/Tableau.js");

Tableau.prototype.copy = function () {
    var copy = new Tableau(this.precision);

    copy.width = this.width;
    copy.height = this.height;

    copy.nVars = this.nVars;
    copy.model = this.model;

    // Making a shallow copy of integer variable indexes
    // and variable ids
    copy.variables = this.variables;
    copy.variablesPerIndex = this.variablesPerIndex;
    copy.unrestrictedVars = this.unrestrictedVars;
    copy.lastElementIndex = this.lastElementIndex;

    // All the other arrays are deep copied
    copy.varIndexByRow = this.varIndexByRow.slice();
    copy.varIndexByCol = this.varIndexByCol.slice();

    copy.rowByVarIndex = this.rowByVarIndex.slice();
    copy.colByVarIndex = this.colByVarIndex.slice();

    copy.availableIndexes = this.availableIndexes.slice();

    var optionalObjectivesCopy = [];
    for(var o = 0; o < this.optionalObjectives.length; o++){
        optionalObjectivesCopy[o] = this.optionalObjectives[o].copy();
    }
    copy.optionalObjectives = optionalObjectivesCopy;


    var matrix = this.matrix;
    var matrixCopy = new Array(this.height);
    for (var r = 0; r < this.height; r++) {
        matrixCopy[r] = matrix[r].slice();
    }

    copy.matrix = matrixCopy;

    return copy;
};

Tableau.prototype.save = function () {
    this.savedState = this.copy();
};

Tableau.prototype.restore = function () {
    if (this.savedState === null) {
        return;
    }

    var save = this.savedState;
    var savedMatrix = save.matrix;
    this.nVars = save.nVars;
    this.model = save.model;

    // Shallow restore
    this.variables = save.variables;
    this.variablesPerIndex = save.variablesPerIndex;
    this.unrestrictedVars = save.unrestrictedVars;
    this.lastElementIndex = save.lastElementIndex;

    this.width = save.width;
    this.height = save.height;

    // Restoring matrix
    var r, c;
    for (r = 0; r < this.height; r += 1) {
        var savedRow = savedMatrix[r];
        var row = this.matrix[r];
        for (c = 0; c < this.width; c += 1) {
            row[c] = savedRow[c];
        }
    }

    // Restoring all the other structures
    var savedBasicIndexes = save.varIndexByRow;
    for (c = 0; c < this.height; c += 1) {
        this.varIndexByRow[c] = savedBasicIndexes[c];
    }

    while (this.varIndexByRow.length > this.height) {
        this.varIndexByRow.pop();
    }

    var savedNonBasicIndexes = save.varIndexByCol;
    for (r = 0; r < this.width; r += 1) {
        this.varIndexByCol[r] = savedNonBasicIndexes[r];
    }

    while (this.varIndexByCol.length > this.width) {
        this.varIndexByCol.pop();
    }

    var savedRows = save.rowByVarIndex;
    var savedCols = save.colByVarIndex;
    for (var v = 0; v < this.nVars; v += 1) {
        this.rowByVarIndex[v] = savedRows[v];
        this.colByVarIndex[v] = savedCols[v];
    }


    if (save.optionalObjectives.length > 0 && this.optionalObjectives.length > 0) {
        this.optionalObjectives = [];
        this.optionalObjectivePerPriority = {};
        for(var o = 0; o < save.optionalObjectives.length; o++){
            var optionalObjectiveCopy = save.optionalObjectives[o].copy();
            this.optionalObjectives[o] = optionalObjectiveCopy;
            this.optionalObjectivePerPriority[optionalObjectiveCopy.priority] = optionalObjectiveCopy;
        }
    }
};


/***/ }),

/***/ "./node_modules/javascript-lp-solver/src/Tableau/branchAndCut.js":
/*!***********************************************************************!*\
  !*** ./node_modules/javascript-lp-solver/src/Tableau/branchAndCut.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*global describe*/
/*global require*/
/*global module*/
/*global it*/
/*global console*/
/*global process*/
var Tableau = __webpack_require__(/*! ./Tableau.js */ "./node_modules/javascript-lp-solver/src/Tableau/Tableau.js");

//-------------------------------------------------------------------
//-------------------------------------------------------------------
function Cut(type, varIndex, value) {
    this.type = type;
    this.varIndex = varIndex;
    this.value = value;
}

//-------------------------------------------------------------------
//-------------------------------------------------------------------
function Branch(relaxedEvaluation, cuts) {
    this.relaxedEvaluation = relaxedEvaluation;
    this.cuts = cuts;
}

//-------------------------------------------------------------------
// Branch sorting strategies
//-------------------------------------------------------------------
function sortByEvaluation(a, b) {
    return b.relaxedEvaluation - a.relaxedEvaluation;
}


//-------------------------------------------------------------------
// Applying cuts on a tableau and resolving
//-------------------------------------------------------------------
Tableau.prototype.applyCuts = function (branchingCuts){
    // Restoring initial solution
    this.restore();

    this.addCutConstraints(branchingCuts);
    this.simplex();
    // Adding MIR cuts
    if (this.model.useMIRCuts){
        var fractionalVolumeImproved = true;
        while(fractionalVolumeImproved){
            var fractionalVolumeBefore = this.computeFractionalVolume(true);
            this.applyMIRCuts();
            this.simplex();

            var fractionalVolumeAfter = this.computeFractionalVolume(true);

            // If the new fractional volume is bigger than 90% of the previous one
            // we assume there is no improvement from the MIR cuts
            if(fractionalVolumeAfter >= 0.9 * fractionalVolumeBefore){
                fractionalVolumeImproved = false;
            }
        }
    }
};

//-------------------------------------------------------------------
// Function: MILP
// Detail: Main function, my attempt at a mixed integer linear programming
//         solver
//-------------------------------------------------------------------
Tableau.prototype.branchAndCut = function () {
    var branches = [];
    var iterations = 0;
    var tolerance = this.model.tolerance;
    var toleranceFlag = true;
    var terminalTime = 1e99;
    
    //
    // Set Start Time on model...
    // Let's build out a way to *gracefully* quit
    // after {{time}} milliseconds
    //
    
    // 1.) Check to see if there's a timeout on the model
    //
    if(this.model.timeout){
        // 2.) Hooray! There is!
        //     Calculate the final date
        //
        terminalTime = Date.now() + this.model.timeout;
    }

    // This is the default result
    // If nothing is both *integral* and *feasible*
    var bestEvaluation = Infinity;
    var bestBranch = null;
    var bestOptionalObjectivesEvaluations = [];
    for (var oInit = 0; oInit < this.optionalObjectives.length; oInit += 1){
        bestOptionalObjectivesEvaluations.push(Infinity);
    }

    // And here...we...go!

    // 1.) Load a model into the queue
    var branch = new Branch(-Infinity, []);
    var acceptableThreshold;
    
    branches.push(branch);
    // If all branches have been exhausted terminate the loop
    while (branches.length > 0 && toleranceFlag === true && Date.now() < terminalTime) {
        
        if(this.model.isMinimization){
            acceptableThreshold = this.bestPossibleEval * (1 + tolerance);
        } else {
            acceptableThreshold = this.bestPossibleEval * (1 - tolerance);
        }
        
        // Abort while loop if termination tolerance is both specified and condition is met
        if (tolerance > 0) {
            if (bestEvaluation < acceptableThreshold) {
                toleranceFlag = false;
            }
        }
        
        // Get a model from the queue
        branch = branches.pop();
        if (branch.relaxedEvaluation > bestEvaluation) {
            continue;
        }

        // Solving from initial relaxed solution
        // with additional cut constraints

        // Adding cut constraints
        var cuts = branch.cuts;
        this.applyCuts(cuts);

        iterations++;
        if (this.feasible === false) {
            continue;
        }

        var evaluation = this.evaluation;
        if (evaluation > bestEvaluation) {
            // This branch does not contain the optimal solution
            continue;
        }

        // To deal with the optional objectives
        if (evaluation === bestEvaluation){
            var isCurrentEvaluationWorse = true;
            for (var o = 0; o < this.optionalObjectives.length; o += 1){
                if (this.optionalObjectives[o].reducedCosts[0] > bestOptionalObjectivesEvaluations[o]){
                    break;
                } else if (this.optionalObjectives[o].reducedCosts[0] < bestOptionalObjectivesEvaluations[o]) {
                    isCurrentEvaluationWorse = false;
                    break;
                }
            }

            if (isCurrentEvaluationWorse){
                continue;
            }
        }

        // Is the model both integral and feasible?
        if (this.isIntegral() === true) {
            
            //
            // Store the fact that we are integral
            //
            this.__isIntegral = true;
            
            
            if (iterations === 1) {
                this.branchAndCutIterations = iterations;
                return;
            }
            // Store the solution as the bestSolution
            bestBranch = branch;
            bestEvaluation = evaluation;
            for (var oCopy = 0; oCopy < this.optionalObjectives.length; oCopy += 1){
                bestOptionalObjectivesEvaluations[oCopy] = this.optionalObjectives[oCopy].reducedCosts[0];
            }
        } else {
            if (iterations === 1) {
                // Saving the first iteration
                // TODO: implement a better strategy for saving the tableau?
                this.save();
            }

            // If the solution is
            //  a. Feasible
            //  b. Better than the current solution
            //  c. but *NOT* integral

            // So the solution isn't integral? How do we solve this.
            // We create 2 new models, that are mirror images of the prior
            // model, with 1 exception.

            // Say we're trying to solve some stupid problem requiring you get
            // animals for your daughter's kindergarten petting zoo party
            // and you have to choose how many ducks, goats, and lambs to get.

            // Say that the optimal solution to this problem if we didn't have
            // to make it integral was {duck: 8, lambs: 3.5}
            //
            // To keep from traumatizing your daughter and the other children
            // you're going to want to have whole animals

            // What we would do is find the most fractional variable (lambs)
            // and create new models from the old models, but with a new constraint
            // on apples. The constraints on the low model would look like:
            // constraints: {...
            //   lamb: {max: 3}
            //   ...
            // }
            //
            // while the constraints on the high model would look like:
            //
            // constraints: {...
            //   lamb: {min: 4}
            //   ...
            // }
            // If neither of these models is feasible because of this constraint,
            // the model is not integral at this point, and fails.

            // Find out where we want to split the solution
            var variable = this.getMostFractionalVar();

            var varIndex = variable.index;

            var cutsHigh = [];
            var cutsLow = [];

            var nCuts = cuts.length;
            for (var c = 0; c < nCuts; c += 1) {
                var cut = cuts[c];
                if (cut.varIndex === varIndex) {
                    if (cut.type === "min") {
                        cutsLow.push(cut);
                    } else {
                        cutsHigh.push(cut);
                    }
                } else {
                    cutsHigh.push(cut);
                    cutsLow.push(cut);
                }
            }

            var min = Math.ceil(variable.value);
            var max = Math.floor(variable.value);

            var cutHigh = new Cut("min", varIndex, min);
            cutsHigh.push(cutHigh);

            var cutLow = new Cut("max", varIndex, max);
            cutsLow.push(cutLow);

            branches.push(new Branch(evaluation, cutsHigh));
            branches.push(new Branch(evaluation, cutsLow));

            // Sorting branches
            // Branches with the most promising lower bounds
            // will be picked first
            branches.sort(sortByEvaluation);
        }
    }

    // Adding cut constraints for the optimal solution
    if (bestBranch !== null) {
        // The model is feasible
        this.applyCuts(bestBranch.cuts);
    }
    this.branchAndCutIterations = iterations;
};


/***/ }),

/***/ "./node_modules/javascript-lp-solver/src/Tableau/branchingStrategies.js":
/*!******************************************************************************!*\
  !*** ./node_modules/javascript-lp-solver/src/Tableau/branchingStrategies.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*global require*/
var Tableau = __webpack_require__(/*! ./Tableau.js */ "./node_modules/javascript-lp-solver/src/Tableau/Tableau.js");

function VariableData(index, value) {
    this.index = index;
    this.value = value;
}

//-------------------------------------------------------------------
//-------------------------------------------------------------------
Tableau.prototype.getMostFractionalVar = function () {
    var biggestFraction = 0;
    var selectedVarIndex = null;
    var selectedVarValue = null;
    var mid = 0.5;

    var integerVariables = this.model.integerVariables;
    var nIntegerVars = integerVariables.length;
    for (var v = 0; v < nIntegerVars; v++) {
        var varIndex = integerVariables[v].index;
        var varRow = this.rowByVarIndex[varIndex];
        if (varRow === -1) {
            continue;
        }

        var varValue = this.matrix[varRow][this.rhsColumn];
        var fraction = Math.abs(varValue - Math.round(varValue));
        if (biggestFraction < fraction) {
            biggestFraction = fraction;
            selectedVarIndex = varIndex;
            selectedVarValue = varValue;
        }
    }

    return new VariableData(selectedVarIndex, selectedVarValue);
};

//-------------------------------------------------------------------
//-------------------------------------------------------------------
Tableau.prototype.getFractionalVarWithLowestCost = function () {
    var highestCost = Infinity;
    var selectedVarIndex = null;
    var selectedVarValue = null;

    var integerVariables = this.model.integerVariables;
    var nIntegerVars = integerVariables.length;
    for (var v = 0; v < nIntegerVars; v++) {
        var variable = integerVariables[v];
        var varIndex = variable.index;
        var varRow = this.rowByVarIndex[varIndex];
        if (varRow === -1) {
            // Variable value is non basic
            // its value is 0
            continue;
        }

        var varValue = this.matrix[varRow][this.rhsColumn];
        if (Math.abs(varValue - Math.round(varValue)) > this.precision) {
            var cost = variable.cost;
            if (highestCost > cost) {
                highestCost = cost;
                selectedVarIndex = varIndex;
                selectedVarValue = varValue;
            }
        }
    }

    return new VariableData(selectedVarIndex, selectedVarValue);
};


/***/ }),

/***/ "./node_modules/javascript-lp-solver/src/Tableau/cuttingStrategies.js":
/*!****************************************************************************!*\
  !*** ./node_modules/javascript-lp-solver/src/Tableau/cuttingStrategies.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*global require*/
var Tableau = __webpack_require__(/*! ./Tableau.js */ "./node_modules/javascript-lp-solver/src/Tableau/Tableau.js");
var SlackVariable = __webpack_require__(/*! ../expressions.js */ "./node_modules/javascript-lp-solver/src/expressions.js").SlackVariable;

Tableau.prototype.addCutConstraints = function (cutConstraints) {
    var nCutConstraints = cutConstraints.length;

    var height = this.height;
    var heightWithCuts = height + nCutConstraints;

    // Adding rows to hold cut constraints
    for (var h = height; h < heightWithCuts; h += 1) {
        if (this.matrix[h] === undefined) {
            this.matrix[h] = this.matrix[h - 1].slice();
        }
    }

    // Adding cut constraints
    this.height = heightWithCuts;
    this.nVars = this.width + this.height - 2;

    var c;
    var lastColumn = this.width - 1;
    for (var i = 0; i < nCutConstraints; i += 1) {
        var cut = cutConstraints[i];

        // Constraint row index
        var r = height + i;

        var sign = (cut.type === "min") ? -1 : 1;

        // Variable on which the cut is applied
        var varIndex = cut.varIndex;
        var varRowIndex = this.rowByVarIndex[varIndex];
        var constraintRow = this.matrix[r];
        if (varRowIndex === -1) {
            // Variable is non basic
            constraintRow[this.rhsColumn] = sign * cut.value;
            for (c = 1; c <= lastColumn; c += 1) {
                constraintRow[c] = 0;
            }
            constraintRow[this.colByVarIndex[varIndex]] = sign;
        } else {
            // Variable is basic
            var varRow = this.matrix[varRowIndex];
            var varValue = varRow[this.rhsColumn];
            constraintRow[this.rhsColumn] = sign * (cut.value - varValue);
            for (c = 1; c <= lastColumn; c += 1) {
                constraintRow[c] = -sign * varRow[c];
            }
        }

        // Creating slack variable
        var slackVarIndex = this.getNewElementIndex();
        this.varIndexByRow[r] = slackVarIndex;
        this.rowByVarIndex[slackVarIndex] = r;
        this.colByVarIndex[slackVarIndex] = -1;
        this.variablesPerIndex[slackVarIndex] = new SlackVariable("s"+slackVarIndex, slackVarIndex);
        this.nVars += 1;
    }
};

Tableau.prototype._addLowerBoundMIRCut = function(rowIndex) {

	if(rowIndex === this.costRowIndex) {
		//console.log("! IN MIR CUTS : The index of the row corresponds to the cost row. !");
		return false;
	}

	var model = this.model;
	var matrix = this.matrix;

	var intVar = this.variablesPerIndex[this.varIndexByRow[rowIndex]];
	if (!intVar.isInteger) {
		return false;
    }

	var d = matrix[rowIndex][this.rhsColumn];
	var frac_d = d - Math.floor(d);

	if (frac_d < this.precision || 1 - this.precision < frac_d) {
		return false;
    }

	//Adding a row
	var r = this.height;
	matrix[r] = matrix[r - 1].slice();
	this.height += 1;

	// Creating slack variable
	this.nVars += 1;
	var slackVarIndex = this.getNewElementIndex();
	this.varIndexByRow[r] = slackVarIndex;
	this.rowByVarIndex[slackVarIndex] = r;
	this.colByVarIndex[slackVarIndex] = -1;
	this.variablesPerIndex[slackVarIndex] = new SlackVariable("s"+slackVarIndex, slackVarIndex);

	matrix[r][this.rhsColumn] = Math.floor(d);

	for (var colIndex = 1; colIndex < this.varIndexByCol.length; colIndex += 1) {
		var variable = this.variablesPerIndex[this.varIndexByCol[colIndex]];

		if (!variable.isInteger) {
			matrix[r][colIndex] = Math.min(0, matrix[rowIndex][colIndex] / (1 - frac_d));
		} else {
			var coef = matrix[rowIndex][colIndex];
			var termCoeff = Math.floor(coef)+Math.max(0, coef - Math.floor(coef) - frac_d) / (1 - frac_d);
			matrix[r][colIndex] = termCoeff;
		}
	}

	for(var c = 0; c < this.width; c += 1) {
		matrix[r][c] -= matrix[rowIndex][c];
	}

	return true;
};

Tableau.prototype._addUpperBoundMIRCut = function(rowIndex) {

	if (rowIndex === this.costRowIndex) {
		//console.log("! IN MIR CUTS : The index of the row corresponds to the cost row. !");
		return false;
	}

	var model = this.model;
	var matrix = this.matrix;

	var intVar = this.variablesPerIndex[this.varIndexByRow[rowIndex]];
	if (!intVar.isInteger) {
		return false;
    }

	var b = matrix[rowIndex][this.rhsColumn];
	var f = b - Math.floor(b);

	if (f < this.precision || 1 - this.precision < f) {
		return false;
    }

	//Adding a row
	var r = this.height;
	matrix[r] = matrix[r - 1].slice();
	this.height += 1;

	// Creating slack variable
    
	this.nVars += 1;
	var slackVarIndex = this.getNewElementIndex();
	this.varIndexByRow[r] = slackVarIndex;
	this.rowByVarIndex[slackVarIndex] = r;
	this.colByVarIndex[slackVarIndex] = -1;
	this.variablesPerIndex[slackVarIndex] = new SlackVariable("s"+slackVarIndex, slackVarIndex);

	matrix[r][this.rhsColumn] = -f;


	for(var colIndex = 1; colIndex < this.varIndexByCol.length; colIndex += 1) {
		var variable = this.variablesPerIndex[this.varIndexByCol[colIndex]];

		var aj = matrix[rowIndex][colIndex];
		var fj = aj - Math.floor(aj);

		if(variable.isInteger) {
			if(fj <= f) {
				matrix[r][colIndex] = -fj;
            } else {
				matrix[r][colIndex] = -(1 - fj) * f / fj;
            }
		} else {
			if (aj >= 0) {
				matrix[r][colIndex] = -aj;
            } else {
				matrix[r][colIndex] = aj * f / (1 - f);
            }
		}
	}

	return true;
};


//
// THIS MAKES SOME MILP PROBLEMS PROVIDE INCORRECT
// ANSWERS...
//
// QUICK FIX: MAKE THE FUNCTION EMPTY...
//
Tableau.prototype.applyMIRCuts = function () {
    
    // var nRows = this.height;
    // for (var cst = 0; cst < nRows; cst += 1) {
    //    this._addUpperBoundMIRCut(cst);
    // }


    // // nRows = tableau.height;
    // for (cst = 0; cst < nRows; cst += 1) {
    //    this._addLowerBoundMIRCut(cst);
    // }
    
};


/***/ }),

/***/ "./node_modules/javascript-lp-solver/src/Tableau/dynamicModification.js":
/*!******************************************************************************!*\
  !*** ./node_modules/javascript-lp-solver/src/Tableau/dynamicModification.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*global require*/
/*global console*/
var Tableau = __webpack_require__(/*! ./Tableau.js */ "./node_modules/javascript-lp-solver/src/Tableau/Tableau.js");

//-------------------------------------------------------------------
//-------------------------------------------------------------------
Tableau.prototype._putInBase = function (varIndex) {
    // Is varIndex in the base?
    var r = this.rowByVarIndex[varIndex];
    if (r === -1) {
        // Outside the base
        // pivoting to take it out
        var c = this.colByVarIndex[varIndex];

        // Selecting pivot row
        // (Any row with coefficient different from 0)
        for (var r1 = 1; r1 < this.height; r1 += 1) {
            var coefficient = this.matrix[r1][c];
            if (coefficient < -this.precision || this.precision < coefficient) {
                r = r1;
                break;
            }
        }

        this.pivot(r, c);
    }

    return r;
};

Tableau.prototype._takeOutOfBase = function (varIndex) {
    // Is varIndex in the base?
    var c = this.colByVarIndex[varIndex];
    if (c === -1) {
        // Inside the base
        // pivoting to take it out
        var r = this.rowByVarIndex[varIndex];

        // Selecting pivot column
        // (Any column with coefficient different from 0)
        var pivotRow = this.matrix[r];
        for (var c1 = 1; c1 < this.height; c1 += 1) {
            var coefficient = pivotRow[c1];
            if (coefficient < -this.precision || this.precision < coefficient) {
                c = c1;
                break;
            }
        }

        this.pivot(r, c);
    }

    return c;
};

Tableau.prototype.updateVariableValues = function () {
    var nVars = this.variables.length;
    var roundingCoeff = Math.round(1 / this.precision);
    for (var v = 0; v < nVars; v += 1) {
        var variable = this.variables[v];
        var varIndex = variable.index;

        var r = this.rowByVarIndex[varIndex];
        if (r === -1) {
            // Variable is non basic
            variable.value = 0;
        } else {
            // Variable is basic
            var varValue = this.matrix[r][this.rhsColumn];
            variable.value = Math.round((varValue + Number.EPSILON) * roundingCoeff) / roundingCoeff;
        }
    }
};

Tableau.prototype.updateRightHandSide = function (constraint, difference) {
    // Updates RHS of given constraint
    var lastRow = this.height - 1;
    var constraintRow = this.rowByVarIndex[constraint.index];
    if (constraintRow === -1) {
        // Slack is not in base
        var slackColumn = this.colByVarIndex[constraint.index];

        // Upading all the RHS values
        for (var r = 0; r <= lastRow; r += 1) {
            var row = this.matrix[r];
            row[this.rhsColumn] -= difference * row[slackColumn];
        }

        var nOptionalObjectives = this.optionalObjectives.length;
        if (nOptionalObjectives > 0) {
            for (var o = 0; o < nOptionalObjectives; o += 1) {
                var reducedCosts = this.optionalObjectives[o].reducedCosts;
                reducedCosts[this.rhsColumn] -= difference * reducedCosts[slackColumn];
            }
        }
    } else {
        // Slack variable of constraint is in base
        // Updating RHS with the difference between the old and the new one
        this.matrix[constraintRow][this.rhsColumn] -= difference;
    }
};

Tableau.prototype.updateConstraintCoefficient = function (constraint, variable, difference) {
    // Updates variable coefficient within a constraint
    if (constraint.index === variable.index) {
        throw new Error("[Tableau.updateConstraintCoefficient] constraint index should not be equal to variable index !");
    }

    var r = this._putInBase(constraint.index);

    var colVar = this.colByVarIndex[variable.index];
    if (colVar === -1) {
        var rowVar = this.rowByVarIndex[variable.index];
        for (var c = 0; c < this.width; c += 1){
            this.matrix[r][c] += difference * this.matrix[rowVar][c];
        }
    } else {
        this.matrix[r][colVar] -= difference;
    }
};

Tableau.prototype.updateCost = function (variable, difference) {
    // Updates variable coefficient within the objective function
    var varIndex = variable.index;
    var lastColumn = this.width - 1;
    var varColumn = this.colByVarIndex[varIndex];
    if (varColumn === -1) {
        // Variable is in base
        var variableRow = this.matrix[this.rowByVarIndex[varIndex]];

        var c;
        if (variable.priority === 0) {
            var costRow = this.matrix[0];

            // Upading all the reduced costs
            for (c = 0; c <= lastColumn; c += 1) {
                costRow[c] += difference * variableRow[c];
            }
        } else {
            var reducedCosts = this.objectivesByPriority[variable.priority].reducedCosts;
            for (c = 0; c <= lastColumn; c += 1) {
                reducedCosts[c] += difference * variableRow[c];
            }
        }
    } else {
        // Variable is not in the base
        // Updating coefficient with difference
        this.matrix[0][varColumn] -= difference;
    }
};

Tableau.prototype.addConstraint = function (constraint) {
    // Adds a constraint to the tableau
    var sign = constraint.isUpperBound ? 1 : -1;
    var lastRow = this.height;

    var constraintRow = this.matrix[lastRow];
    if (constraintRow === undefined) {
        constraintRow = this.matrix[0].slice();
        this.matrix[lastRow] = constraintRow;
    }

    // Setting all row cells to 0
    var lastColumn = this.width - 1;
    for (var c = 0; c <= lastColumn; c += 1) {
        constraintRow[c] = 0;
    }

    // Initializing RHS
    constraintRow[this.rhsColumn] = sign * constraint.rhs;

    var terms = constraint.terms;
    var nTerms = terms.length;
    for (var t = 0; t < nTerms; t += 1) {
        var term = terms[t];
        var coefficient = term.coefficient;
        var varIndex = term.variable.index;

        var varRowIndex = this.rowByVarIndex[varIndex];
        if (varRowIndex === -1) {
            // Variable is non basic
            constraintRow[this.colByVarIndex[varIndex]] += sign * coefficient;
        } else {
            // Variable is basic
            var varRow = this.matrix[varRowIndex];
            var varValue = varRow[this.rhsColumn];
            for (c = 0; c <= lastColumn; c += 1) {
                constraintRow[c] -= sign * coefficient * varRow[c];
            }
        }
    }
    // Creating slack variable
    var slackIndex = constraint.index;
    this.varIndexByRow[lastRow] = slackIndex;
    this.rowByVarIndex[slackIndex] = lastRow;
    this.colByVarIndex[slackIndex] = -1;

    this.height += 1;
};

Tableau.prototype.removeConstraint = function (constraint) {
    var slackIndex = constraint.index;
    var lastRow = this.height - 1;

    // Putting the constraint's slack in the base
    var r = this._putInBase(slackIndex);

    // Removing constraint
    // by putting the corresponding row at the bottom of the matrix
    // and virtually reducing the height of the matrix by 1
    var tmpRow = this.matrix[lastRow];
    this.matrix[lastRow] = this.matrix[r];
    this.matrix[r] = tmpRow;

    // Removing associated slack variable from basic variables
    this.varIndexByRow[r] = this.varIndexByRow[lastRow];
    this.varIndexByRow[lastRow] = -1;
    this.rowByVarIndex[slackIndex] = -1;

    // Putting associated slack variable index in index manager
    this.availableIndexes[this.availableIndexes.length] = slackIndex;

    constraint.slack.index = -1;

    this.height -= 1;
};

Tableau.prototype.addVariable = function (variable) {
    // Adds a variable to the tableau
    // var sign = constraint.isUpperBound ? 1 : -1;

    var lastRow = this.height - 1;
    var lastColumn = this.width;
    var cost = this.model.isMinimization === true ? -variable.cost : variable.cost;
    var priority = variable.priority;

    // Setting reduced costs
    var nOptionalObjectives = this.optionalObjectives.length;
    if (nOptionalObjectives > 0) {
        for (var o = 0; o < nOptionalObjectives; o += 1) {
            this.optionalObjectives[o].reducedCosts[lastColumn] = 0;
        }
    }

    if (priority === 0) {
        this.matrix[0][lastColumn] = cost;
    } else {
        this.setOptionalObjective(priority, lastColumn, cost);
        this.matrix[0][lastColumn] = 0;
    }

    // Setting all other column cells to 0
    for (var r = 1; r <= lastRow; r += 1) {
        this.matrix[r][lastColumn] = 0;
    }

    // Adding variable to trackers
    var varIndex = variable.index;
    this.varIndexByCol[lastColumn] = varIndex;

    this.rowByVarIndex[varIndex] = -1;
    this.colByVarIndex[varIndex] = lastColumn;

    this.width += 1;
};


Tableau.prototype.removeVariable = function (variable) {
    var varIndex = variable.index;

    // Putting the variable out of the base
    var c = this._takeOutOfBase(varIndex);
    var lastColumn = this.width - 1;
    if (c !== lastColumn) {
        var lastRow = this.height - 1;
        for (var r = 0; r <= lastRow; r += 1) {
            var row = this.matrix[r];
            row[c] = row[lastColumn];
        }

        var nOptionalObjectives = this.optionalObjectives.length;
        if (nOptionalObjectives > 0) {
            for (var o = 0; o < nOptionalObjectives; o += 1) {
                var reducedCosts = this.optionalObjectives[o].reducedCosts;
                reducedCosts[c] = reducedCosts[lastColumn];
            }
        }

        var switchVarIndex = this.varIndexByCol[lastColumn];
        this.varIndexByCol[c] = switchVarIndex;
        this.colByVarIndex[switchVarIndex] = c;
    }

    // Removing variable from non basic variables
    this.varIndexByCol[lastColumn] = -1;
    this.colByVarIndex[varIndex] = -1;

    // Adding index into index manager
    this.availableIndexes[this.availableIndexes.length] = varIndex;

    variable.index = -1;

    this.width -= 1;
};


/***/ }),

/***/ "./node_modules/javascript-lp-solver/src/Tableau/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/javascript-lp-solver/src/Tableau/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*global require*/
/*global module*/
__webpack_require__(/*! ./simplex.js */ "./node_modules/javascript-lp-solver/src/Tableau/simplex.js");
__webpack_require__(/*! ./cuttingStrategies.js */ "./node_modules/javascript-lp-solver/src/Tableau/cuttingStrategies.js");
__webpack_require__(/*! ./dynamicModification.js */ "./node_modules/javascript-lp-solver/src/Tableau/dynamicModification.js");
__webpack_require__(/*! ./log.js */ "./node_modules/javascript-lp-solver/src/Tableau/log.js");
__webpack_require__(/*! ./backup.js */ "./node_modules/javascript-lp-solver/src/Tableau/backup.js");
__webpack_require__(/*! ./branchingStrategies.js */ "./node_modules/javascript-lp-solver/src/Tableau/branchingStrategies.js");
__webpack_require__(/*! ./integerProperties.js */ "./node_modules/javascript-lp-solver/src/Tableau/integerProperties.js");

module.exports = __webpack_require__(/*! ./Tableau.js */ "./node_modules/javascript-lp-solver/src/Tableau/Tableau.js");


/***/ }),

/***/ "./node_modules/javascript-lp-solver/src/Tableau/integerProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/javascript-lp-solver/src/Tableau/integerProperties.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*global require*/
var Tableau = __webpack_require__(/*! ./Tableau.js */ "./node_modules/javascript-lp-solver/src/Tableau/Tableau.js");

Tableau.prototype.countIntegerValues = function(){
    var count = 0;
    for (var r = 1; r < this.height; r += 1) {
        if (this.variablesPerIndex[this.varIndexByRow[r]].isInteger) {
            var decimalPart = this.matrix[r][this.rhsColumn];
            decimalPart = decimalPart - Math.floor(decimalPart);
            if (decimalPart < this.precision && -decimalPart < this.precision) {
                count += 1;
            }
        }
    }

    return count;
};

//-------------------------------------------------------------------
//-------------------------------------------------------------------
Tableau.prototype.isIntegral = function () {
    var integerVariables = this.model.integerVariables;
    var nIntegerVars = integerVariables.length;
    for (var v = 0; v < nIntegerVars; v++) {
        var varRow = this.rowByVarIndex[integerVariables[v].index];
        if (varRow === -1) {
            continue;
        }

        var varValue = this.matrix[varRow][this.rhsColumn];
        if (Math.abs(varValue - Math.round(varValue)) > this.precision) {
            return false;
        }
    }
    return true;
};

// Multiply all the fractional parts of variables supposed to be integer
Tableau.prototype.computeFractionalVolume = function(ignoreIntegerValues) {
    var volume = -1;
    // var integerVariables = this.model.integerVariables;
    // var nIntegerVars = integerVariables.length;
    // for (var v = 0; v < nIntegerVars; v++) {
    //     var r = this.rowByVarIndex[integerVariables[v].index];
    //     if (r === -1) {
    //         continue;
    //     }
    //     var rhs = this.matrix[r][this.rhsColumn];
    //     rhs = Math.abs(rhs);
    //     var decimalPart = Math.min(rhs - Math.floor(rhs), Math.floor(rhs + 1));
    //     if (decimalPart < this.precision) {
    //         if (!ignoreIntegerValues) {
    //             return 0;
    //         }
    //     } else {
    //         if (volume === -1) {
    //             volume = rhs;
    //         } else {
    //             volume *= rhs;
    //         }
    //     }
    // }

    for (var r = 1; r < this.height; r += 1) {
        if (this.variablesPerIndex[this.varIndexByRow[r]].isInteger) {
            var rhs = this.matrix[r][this.rhsColumn];
            rhs = Math.abs(rhs);
            var decimalPart = Math.min(rhs - Math.floor(rhs), Math.floor(rhs + 1));
            if (decimalPart < this.precision) {
                if (!ignoreIntegerValues) {
                    return 0;
                }
            } else {
                if (volume === -1) {
                    volume = rhs;
                } else {
                    volume *= rhs;
                }
            }
        }
    }

    if (volume === -1){
        return 0;
    }
    return volume;
};


/***/ }),

/***/ "./node_modules/javascript-lp-solver/src/Tableau/log.js":
/*!**************************************************************!*\
  !*** ./node_modules/javascript-lp-solver/src/Tableau/log.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*global require*/
/*global console*/
var Tableau = __webpack_require__(/*! ./Tableau.js */ "./node_modules/javascript-lp-solver/src/Tableau/Tableau.js");

//-------------------------------------------------------------------
// Description: Display a tableau matrix
//              and additional tableau information
//
//-------------------------------------------------------------------
Tableau.prototype.log = function (message, force) {
    if (false) {}

    console.log("****", message, "****");
    console.log("Nb Variables", this.width - 1);
    console.log("Nb Constraints", this.height - 1);
    // console.log("Variable Ids", this.variablesPerIndex);
    console.log("Basic Indexes", this.varIndexByRow);
    console.log("Non Basic Indexes", this.varIndexByCol);
    console.log("Rows", this.rowByVarIndex);
    console.log("Cols", this.colByVarIndex);

    var digitPrecision = 5;

    // Variable declaration
    var varNameRowString = "",
        spacePerColumn = [" "],
        j,
        c,
        s,
        r,
        variable,
        varIndex,
        varName,
        varNameLength,
        nSpaces,
        valueSpace,
        nameSpace;

    var row,
        rowString;

    for (c = 1; c < this.width; c += 1) {
        varIndex = this.varIndexByCol[c];
        variable = this.variablesPerIndex[varIndex];
        if (variable === undefined) {
            varName = "c" + varIndex;
        } else {
            varName = variable.id;
        }

        varNameLength = varName.length;
        nSpaces = Math.abs(varNameLength - 5);
        valueSpace = " ";
        nameSpace = "\t";

        ///////////
        /*valueSpace = " ";
        nameSpace = " ";

        for (s = 0; s < nSpaces; s += 1) {
            if (varNameLength > 5) {
                valueSpace += " ";
            } else {
                nameSpace += " ";
            }
        }*/

        ///////////
        if (varNameLength > 5) {
            valueSpace += " ";
        } else {
            nameSpace += "\t";
        }

        spacePerColumn[c] = valueSpace;

        varNameRowString += nameSpace + varName;
    }
    console.log(varNameRowString);

    var signSpace;

    // Displaying reduced costs
    var firstRow = this.matrix[this.costRowIndex];
    var firstRowString = "\t";

    ///////////
    /*for (j = 1; j < this.width; j += 1) {
        signSpace = firstRow[j] < 0 ? "" : " ";
        firstRowString += signSpace;
        firstRowString += spacePerColumn[j];
        firstRowString += firstRow[j].toFixed(2);
    }
    signSpace = firstRow[0] < 0 ? "" : " ";
    firstRowString += signSpace + spacePerColumn[0] +
        firstRow[0].toFixed(2);
    console.log(firstRowString + " Z");*/

    ///////////
    for (j = 1; j < this.width; j += 1) {
        signSpace = "\t";
        firstRowString += signSpace;
        firstRowString += spacePerColumn[j];
        firstRowString += firstRow[j].toFixed(digitPrecision);
    }
    signSpace = "\t";
    firstRowString += signSpace + spacePerColumn[0] +
        firstRow[0].toFixed(digitPrecision);
    console.log(firstRowString + "\tZ");


    // Then the basic variable rowByVarIndex
    for (r = 1; r < this.height; r += 1) {
        row = this.matrix[r];
        rowString = "\t";

        ///////////
        /*for (c = 1; c < this.width; c += 1) {
            signSpace = row[c] < 0 ? "" : " ";
            rowString += signSpace + spacePerColumn[c] + row[c].toFixed(2);
        }
        signSpace = row[0] < 0 ? "" : " ";
        rowString += signSpace + spacePerColumn[0] + row[0].toFixed(2);*/

        ///////////
        for (c = 1; c < this.width; c += 1) {
            signSpace = "\t";
            rowString += signSpace + spacePerColumn[c] + row[c].toFixed(digitPrecision);
        }
        signSpace = "\t";
        rowString += signSpace + spacePerColumn[0] + row[0].toFixed(digitPrecision);


        varIndex = this.varIndexByRow[r];
        variable = this.variablesPerIndex[varIndex];
        if (variable === undefined) {
            varName = "c" + varIndex;
        } else {
            varName = variable.id;
        }
        console.log(rowString + "\t" + varName);
    }
    console.log("");

    // Then reduced costs for optional objectives
    var nOptionalObjectives = this.optionalObjectives.length;
    if (nOptionalObjectives > 0) {
        console.log("    Optional objectives:");
        for (var o = 0; o < nOptionalObjectives; o += 1) {
            var reducedCosts = this.optionalObjectives[o].reducedCosts;
            var reducedCostsString = "";
            for (j = 1; j < this.width; j += 1) {
                signSpace = reducedCosts[j] < 0 ? "" : " ";
                reducedCostsString += signSpace;
                reducedCostsString += spacePerColumn[j];
                reducedCostsString += reducedCosts[j].toFixed(digitPrecision);
            }
            signSpace = reducedCosts[0] < 0 ? "" : " ";
            reducedCostsString += signSpace + spacePerColumn[0] +
                reducedCosts[0].toFixed(digitPrecision);
            console.log(reducedCostsString + " z" + o);
        }
    }
    console.log("Feasible?", this.feasible);
    console.log("evaluation", this.evaluation);

    return this;
};


/***/ }),

/***/ "./node_modules/javascript-lp-solver/src/Tableau/simplex.js":
/*!******************************************************************!*\
  !*** ./node_modules/javascript-lp-solver/src/Tableau/simplex.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*global describe*/
/*global require*/
/*global module*/
/*global it*/
/*global console*/
/*global process*/

var Tableau = __webpack_require__(/*! ./Tableau.js */ "./node_modules/javascript-lp-solver/src/Tableau/Tableau.js");

//-------------------------------------------------------------------
// Function: solve
// Detail: Main function, linear programming solver
//-------------------------------------------------------------------
Tableau.prototype.simplex = function () {
    // Bounded until proven otherwise
    this.bounded = true;

    // Execute Phase 1 to obtain a Basic Feasible Solution (BFS)
    this.phase1();

    // Execute Phase 2
    if (this.feasible === true) {
        // Running simplex on Initial Basic Feasible Solution (BFS)
        // N.B current solution is feasible
        this.phase2();
    }

    return this;
};

//-------------------------------------------------------------------
// Description: Convert a non standard form tableau
//              to a standard form tableau by eliminating
//              all negative values in the Right Hand Side (RHS)
//              This results in a Basic Feasible Solution (BFS)
//
//-------------------------------------------------------------------
Tableau.prototype.phase1 = function () {
    var debugCheckForCycles = this.model.checkForCycles;
    var varIndexesCycle = [];

    var matrix = this.matrix;
    var rhsColumn = this.rhsColumn;
    var lastColumn = this.width - 1;
    var lastRow = this.height - 1;

    var unrestricted;
    var iterations = 0;

    while (true) {
        // ******************************************
        // ** PHASE 1 - STEP  1 : FIND PIVOT ROW **
        //
        // Selecting leaving variable (feasibility condition):
        // Basic variable with most negative value
        //
        // ******************************************
        var leavingRowIndex = 0;
        var rhsValue = -this.precision;
        for (var r = 1; r <= lastRow; r++) {
            unrestricted = this.unrestrictedVars[this.varIndexByRow[r]] === true;
            
            //
            // *Don't think this does anything...
            //
            //if (unrestricted) {
            //    continue;
            //}

            var value = matrix[r][rhsColumn];
            if (value < rhsValue) {
                rhsValue = value;
                leavingRowIndex = r;
            }
        }

        // If nothing is strictly smaller than 0; we're done with phase 1.
        if (leavingRowIndex === 0) {
            // Feasible, champagne!
            this.feasible = true;
            return iterations;
        }


        // ******************************************
        // ** PHASE 1 - STEP  2 : FIND PIVOT COLUMN **
        //
        //
        // ******************************************
        // Selecting entering variable
        var enteringColumn = 0;
        var maxQuotient = -Infinity;
        var costRow = matrix[0];
        var leavingRow = matrix[leavingRowIndex];
        for (var c = 1; c <= lastColumn; c++) {
            var coefficient = leavingRow[c];
            //
            // *Don't think this does anything...
            //
            //if (-this.precision < coefficient && coefficient < this.precision) {
            //    continue;
            //}
            //

            unrestricted = this.unrestrictedVars[this.varIndexByCol[c]] === true;
            if (unrestricted || coefficient < -this.precision) {
                var quotient = -costRow[c] / coefficient;
                if (maxQuotient < quotient) {
                    maxQuotient = quotient;
                    enteringColumn = c;
                }
            }
        }

        if (enteringColumn === 0) {
            // Not feasible
            this.feasible = false;
            return iterations;
        }

        if(debugCheckForCycles){
            varIndexesCycle.push([this.varIndexByRow[leavingRowIndex], this.varIndexByCol[enteringColumn]]);

            var cycleData = this.checkForCycles(varIndexesCycle);
            if(cycleData.length > 0){

                this.model.messages.push("Cycle in phase 1");
                this.model.messages.push("Start :"+ cycleData[0]);
                this.model.messages.push("Length :"+ cycleData[1]);

                this.feasible = false;
                return iterations;
                
            }
        }

        this.pivot(leavingRowIndex, enteringColumn);
        iterations += 1;
    }
};

//-------------------------------------------------------------------
// Description: Apply simplex to obtain optimal solution
//              used as phase2 of the simplex
//
//-------------------------------------------------------------------
Tableau.prototype.phase2 = function () {
    var debugCheckForCycles = this.model.checkForCycles;
    var varIndexesCycle = [];

    var matrix = this.matrix;
    var rhsColumn = this.rhsColumn;
    var lastColumn = this.width - 1;
    var lastRow = this.height - 1;

    var precision = this.precision;
    var nOptionalObjectives = this.optionalObjectives.length;
    var optionalCostsColumns = null;

    var iterations = 0;
    var reducedCost, unrestricted;

    while (true) {
        var costRow = matrix[this.costRowIndex];

        // Selecting entering variable (optimality condition)
        if (nOptionalObjectives > 0) {
            optionalCostsColumns = [];
        }

        var enteringColumn = 0;
        var enteringValue = precision;
        var isReducedCostNegative = false;
        for (var c = 1; c <= lastColumn; c++) {
            reducedCost = costRow[c];
            unrestricted = this.unrestrictedVars[this.varIndexByCol[c]] === true;

            if (nOptionalObjectives > 0 && -precision < reducedCost && reducedCost < precision) {
                optionalCostsColumns.push(c);
                continue;
            }

            if (unrestricted && reducedCost < 0) {
                if (-reducedCost > enteringValue) {
                    enteringValue = -reducedCost;
                    enteringColumn = c;
                    isReducedCostNegative = true;
                }
                continue;
            }

            if (reducedCost > enteringValue) {
                enteringValue = reducedCost;
                enteringColumn = c;
                isReducedCostNegative = false;
            }
        }

        if (nOptionalObjectives > 0) {
            // There exist optional improvable objectives
            var o = 0;
            while (enteringColumn === 0 && optionalCostsColumns.length > 0 && o < nOptionalObjectives) {
                var optionalCostsColumns2 = [];
                var reducedCosts = this.optionalObjectives[o].reducedCosts;

                enteringValue = precision;

                for (var i = 0; i < optionalCostsColumns.length; i++) {
                    c = optionalCostsColumns[i];

                    reducedCost = reducedCosts[c];
                    unrestricted = this.unrestrictedVars[this.varIndexByCol[c]] === true;

                    if (-precision < reducedCost && reducedCost < precision) {
                        optionalCostsColumns2.push(c);
                        continue;
                    }

                    if (unrestricted && reducedCost < 0) {
                        if (-reducedCost > enteringValue) {
                            enteringValue = -reducedCost;
                            enteringColumn = c;
                            isReducedCostNegative = true;
                        }
                        continue;
                    }

                    if (reducedCost > enteringValue) {
                        enteringValue = reducedCost;
                        enteringColumn = c;
                        isReducedCostNegative = false;
                    }
                }
                optionalCostsColumns = optionalCostsColumns2;
                o += 1;
            }
        }


        // If no entering column could be found we're done with phase 2.
        if (enteringColumn === 0) {
            this.setEvaluation();
            this.simplexIters += 1;
            return iterations;
        }

        // Selecting leaving variable
        var leavingRow = 0;
        var minQuotient = Infinity;

        var varIndexByRow = this.varIndexByRow;

        for (var r = 1; r <= lastRow; r++) {
            var row = matrix[r];
            var rhsValue = row[rhsColumn];
            var colValue = row[enteringColumn];

            if (-precision < colValue && colValue < precision) {
                continue;
            }

            if (colValue > 0 && precision > rhsValue && rhsValue > -precision) {
                minQuotient = 0;
                leavingRow = r;
                break;
            }

            var quotient = isReducedCostNegative ? -rhsValue / colValue : rhsValue / colValue;
            if (quotient > precision && minQuotient > quotient) {
                minQuotient = quotient;
                leavingRow = r;
            }
        }

        if (minQuotient === Infinity) {
            // optimal value is -Infinity
            this.evaluation = -Infinity;
            this.bounded = false;
            this.unboundedVarIndex = this.varIndexByCol[enteringColumn];
            return iterations;
        }

        if(debugCheckForCycles){
            varIndexesCycle.push([this.varIndexByRow[leavingRow], this.varIndexByCol[enteringColumn]]);

            var cycleData = this.checkForCycles(varIndexesCycle);
            if(cycleData.length > 0){

                this.model.messages.push("Cycle in phase 2");
                this.model.messages.push("Start :"+ cycleData[0]);
                this.model.messages.push("Length :"+ cycleData[1]);

                this.feasible = false;
                return iterations;
            }
        }

        this.pivot(leavingRow, enteringColumn, true);
        iterations += 1;
    }
};

// Array holding the column indexes for which the value is not null
// on the pivot row
// Shared by all tableaux for smaller overhead and lower memory usage
var nonZeroColumns = [];


//-------------------------------------------------------------------
// Description: Execute pivot operations over a 2d array,
//          on a given row, and column
//
//-------------------------------------------------------------------
Tableau.prototype.pivot = function (pivotRowIndex, pivotColumnIndex) {
    var matrix = this.matrix;

    var quotient = matrix[pivotRowIndex][pivotColumnIndex];

    var lastRow = this.height - 1;
    var lastColumn = this.width - 1;

    var leavingBasicIndex = this.varIndexByRow[pivotRowIndex];
    var enteringBasicIndex = this.varIndexByCol[pivotColumnIndex];

    this.varIndexByRow[pivotRowIndex] = enteringBasicIndex;
    this.varIndexByCol[pivotColumnIndex] = leavingBasicIndex;

    this.rowByVarIndex[enteringBasicIndex] = pivotRowIndex;
    this.rowByVarIndex[leavingBasicIndex] = -1;

    this.colByVarIndex[enteringBasicIndex] = -1;
    this.colByVarIndex[leavingBasicIndex] = pivotColumnIndex;

    // Divide everything in the target row by the element @
    // the target column
    var pivotRow = matrix[pivotRowIndex];
    var nNonZeroColumns = 0;
    for (var c = 0; c <= lastColumn; c++) {
        if (!(pivotRow[c] >= -1e-16 && pivotRow[c] <= 1e-16)) {
            pivotRow[c] /= quotient;
            nonZeroColumns[nNonZeroColumns] = c;
            nNonZeroColumns += 1;
        } else {
            pivotRow[c] = 0;
        }
    }
    pivotRow[pivotColumnIndex] = 1 / quotient;

    // for every row EXCEPT the pivot row,
    // set the value in the pivot column = 0 by
    // multiplying the value of all elements in the objective
    // row by ... yuck... just look below; better explanation later
    var coefficient, i, v0;
    var precision = this.precision;
    
    // //////////////////////////////////////
    //
    // This is step 2 of the pivot function.
    // It is, by far, the most expensive piece of
    // this whole process where the code can be optimized (faster code)
    // without changing the whole algorithm (fewer cycles)
    //
    // 1.) For every row but the pivot row
    // 2.) Update each column to 
    //    a.) itself
    //        less
    //    b.) active-row's pivot column
    //        times
    //    c.) whatever-the-hell this is: nonZeroColumns[i]
    // 
    // //////////////////////////////////////
    // console.time("step-2");
    for (var r = 0; r <= lastRow; r++) {
        if (r !== pivotRowIndex) {
            //if(1 === 1){
            if(!(matrix[r][pivotColumnIndex] >= -1e-16 && matrix[r][pivotColumnIndex] <= 1e-16)){
            //if((matrix[r][pivotColumnIndex] !== 0)){
                // Set reference to the row we're working on
                //
                var row = matrix[r];

                // Catch the coefficient that we're going to end up dividing everything by
                coefficient = row[pivotColumnIndex];
                
                // No point Burning Cycles if
                // Zero to the thing
                if (!(coefficient >= -1e-16 && coefficient <= 1e-16)) {
                    for (i = 0; i < nNonZeroColumns; i++) {
                        c = nonZeroColumns[i];
                        // No point in doing math if you're just adding
                        // Zero to the thing
                        v0 = pivotRow[c];
                        if (!(v0 >= -1e-16 && v0 <= 1e-16)) {
                            row[c] = row[c] - coefficient * v0;
                        } else {
                            if(v0 !== 0){
                                pivotRow[c] = 0;
                            }
                        }
                    }

                    row[pivotColumnIndex] = -coefficient / quotient;
                } else {
                    if(coefficient !== 0){
                        row[pivotColumnIndex] = 0;
                    }
                }
            }
        }
    }
    // console.timeEnd("step-2");

    var nOptionalObjectives = this.optionalObjectives.length;
    if (nOptionalObjectives > 0) {
        for (var o = 0; o < nOptionalObjectives; o += 1) {
            var reducedCosts = this.optionalObjectives[o].reducedCosts;
            coefficient = reducedCosts[pivotColumnIndex];
            if (coefficient !== 0) {
                for (i = 0; i < nNonZeroColumns; i++) {
                    c = nonZeroColumns[i];
                    v0 = pivotRow[c];
                    if (v0 !== 0) {
                        reducedCosts[c] = reducedCosts[c] - coefficient * v0;
                    }
                }

                reducedCosts[pivotColumnIndex] = -coefficient / quotient;
            }
        }
    }
};



Tableau.prototype.checkForCycles = function (varIndexes) {
    for (var e1 = 0; e1 < varIndexes.length - 1; e1++) {
        for (var e2 = e1 + 1; e2 < varIndexes.length; e2++) {
            var elt1 = varIndexes[e1];
            var elt2 = varIndexes[e2];
            if (elt1[0] === elt2[0] && elt1[1] === elt2[1]) {
                if (e2 - e1 > varIndexes.length - e2) {
                    break;
                }
                var cycleFound = true;
                for (var i = 1; i < e2 - e1; i++) {
                    var tmp1 = varIndexes[e1+i];
                    var tmp2 = varIndexes[e2+i];
                    if(tmp1[0] !== tmp2[0] || tmp1[1] !== tmp2[1]) {
                        cycleFound = false;
                        break;
                    }
                }
                if (cycleFound) {
                    return [e1, e2 - e1];
                }
            }
        }
    }
    return [];
};


/***/ }),

/***/ "./node_modules/javascript-lp-solver/src/Validation.js":
/*!*************************************************************!*\
  !*** ./node_modules/javascript-lp-solver/src/Validation.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*global describe*/
/*global require*/
/*global module*/
/*global it*/
/*global console*/
/*global process*/
/*global exports*/


// All functions in this module that
// get exported to main ***MUST***
// return a functional LPSolve JSON style
// model or throw an error

exports.CleanObjectiveAttributes = function(model){
  // Test to see if the objective attribute
  // is also used by one of the constraints
  //
  // If so...create a new attribute on each
  // variable
    var fakeAttr,
        x, z;
  
    if(typeof model.optimize === "string"){
        if(model.constraints[model.optimize]){
            // Create the new attribute
            fakeAttr = Math.random();

            // Go over each variable and check
            for(x in model.variables){
                // Is it there?
                if(model.variables[x][model.optimize]){
                    model.variables[x][fakeAttr] = model.variables[x][model.optimize];
                }
            }

        // Now that we've cleaned up the variables
        // we need to clean up the constraints
            model.constraints[fakeAttr] = model.constraints[model.optimize];
            delete model.constraints[model.optimize];
            return model;
        } else {    
            return model;
        }  
    } else {
        // We're assuming its an object?
        for(z in model.optimize){
            if(model.constraints[z]){
            // Make sure that the constraint
            // being optimized isn't constrained
            // by an equity collar
                if(model.constraints[z] === "equal"){
                    // Its constrained by an equal sign;
                    // delete that objective and move on
                    delete model.optimize[z];
                
                } else {
                    // Create the new attribute
                    fakeAttr = Math.random();

                    // Go over each variable and check
                    for(x in model.variables){
                        // Is it there?
                        if(model.variables[x][z]){
                            model.variables[x][fakeAttr] = model.variables[x][z];
                        }
                    }
                // Now that we've cleaned up the variables
                // we need to clean up the constraints
                    model.constraints[fakeAttr] = model.constraints[z];
                    delete model.constraints[z];            
                }
            }    
        }
        return model;
    }
};


/***/ }),

/***/ "./node_modules/javascript-lp-solver/src/expressions.js":
/*!**************************************************************!*\
  !*** ./node_modules/javascript-lp-solver/src/expressions.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*global describe*/
/*global require*/
/*global module*/
/*global it*/
/*global console*/
/*global process*/

//-------------------------------------------------------------------
//-------------------------------------------------------------------
function Variable(id, cost, index, priority) {
    this.id = id;
    this.cost = cost;
    this.index = index;
    this.value = 0;
    this.priority = priority;
}

function IntegerVariable(id, cost, index, priority) {
    Variable.call(this, id, cost, index, priority);
}
IntegerVariable.prototype.isInteger = true;

function SlackVariable(id, index) {
    Variable.call(this, id, 0, index, 0);
}
SlackVariable.prototype.isSlack = true;

//-------------------------------------------------------------------
//-------------------------------------------------------------------
function Term(variable, coefficient) {
    this.variable = variable;
    this.coefficient = coefficient;
}

function createRelaxationVariable(model, weight, priority) {
    if (priority === 0 || priority === "required") {
        return null;
    }

    weight = weight || 1;
    priority = priority || 1;

    if (model.isMinimization === false) {
        weight = -weight;
    }

    return model.addVariable(weight, "r" + (model.relaxationIndex++), false, false, priority);
}

//-------------------------------------------------------------------
//-------------------------------------------------------------------
function Constraint(rhs, isUpperBound, index, model) {
    this.slack = new SlackVariable("s" + index, index);
    this.index = index;
    this.model = model;
    this.rhs = rhs;
    this.isUpperBound = isUpperBound;

    this.terms = [];
    this.termsByVarIndex = {};

    // Error variable in case the constraint is relaxed
    this.relaxation = null;
}

Constraint.prototype.addTerm = function (coefficient, variable) {
    var varIndex = variable.index;
    var term = this.termsByVarIndex[varIndex];
    if (term === undefined) {
        // No term for given variable
        term = new Term(variable, coefficient);
        this.termsByVarIndex[varIndex] = term;
        this.terms.push(term);
        if (this.isUpperBound === true) {
            coefficient = -coefficient;
        }
        this.model.updateConstraintCoefficient(this, variable, coefficient);
    } else {
        // Term for given variable already exists
        // updating its coefficient
        var newCoefficient = term.coefficient + coefficient;
        this.setVariableCoefficient(newCoefficient, variable);
    }

    return this;
};

Constraint.prototype.removeTerm = function (term) {
    // TODO
    return this;
};

Constraint.prototype.setRightHandSide = function (newRhs) {
    if (newRhs !== this.rhs) {
        var difference = newRhs - this.rhs;
        if (this.isUpperBound === true) {
            difference = -difference;
        }

        this.rhs = newRhs;
        this.model.updateRightHandSide(this, difference);
    }

    return this;
};

Constraint.prototype.setVariableCoefficient = function (newCoefficient, variable) {
    var varIndex = variable.index;
    if (varIndex === -1) {
        console.warn("[Constraint.setVariableCoefficient] Trying to change coefficient of inexistant variable.");
        return;
    }

    var term = this.termsByVarIndex[varIndex];
    if (term === undefined) {
        // No term for given variable
        this.addTerm(newCoefficient, variable);
    } else {
        // Term for given variable already exists
        // updating its coefficient if changed
        if (newCoefficient !== term.coefficient) {
            var difference = newCoefficient - term.coefficient;
            if (this.isUpperBound === true) {
                difference = -difference;
            }

            term.coefficient = newCoefficient;
            this.model.updateConstraintCoefficient(this, variable, difference);
        }
    }

    return this;
};

Constraint.prototype.relax = function (weight, priority) {
    this.relaxation = createRelaxationVariable(this.model, weight, priority);
    this._relax(this.relaxation);
};

Constraint.prototype._relax = function (relaxationVariable) {
    if (relaxationVariable === null) {
        // Relaxation variable not created, priority was probably "required"
        return;
    }

    if (this.isUpperBound) {
        this.setVariableCoefficient(-1, relaxationVariable);
    } else {
        this.setVariableCoefficient(1, relaxationVariable);
    }
};

//-------------------------------------------------------------------
//-------------------------------------------------------------------
function Equality(constraintUpper, constraintLower) {
    this.upperBound = constraintUpper;
    this.lowerBound = constraintLower;
    this.model = constraintUpper.model;
    this.rhs = constraintUpper.rhs;
    this.relaxation = null;
}

Equality.prototype.isEquality = true;

Equality.prototype.addTerm = function (coefficient, variable) {
    this.upperBound.addTerm(coefficient, variable);
    this.lowerBound.addTerm(coefficient, variable);
    return this;
};

Equality.prototype.removeTerm = function (term) {
    this.upperBound.removeTerm(term);
    this.lowerBound.removeTerm(term);
    return this;
};

Equality.prototype.setRightHandSide = function (rhs) {
    this.upperBound.setRightHandSide(rhs);
    this.lowerBound.setRightHandSide(rhs);
    this.rhs = rhs;
};

Equality.prototype.relax = function (weight, priority) {
    this.relaxation = createRelaxationVariable(this.model, weight, priority);
    this.upperBound.relaxation = this.relaxation;
    this.upperBound._relax(this.relaxation);
    this.lowerBound.relaxation = this.relaxation;
    this.lowerBound._relax(this.relaxation);
};


module.exports = {
    Constraint: Constraint,
    Variable: Variable,
    IntegerVariable: IntegerVariable,
    SlackVariable: SlackVariable,
    Equality: Equality,
    Term: Term
};


/***/ }),

/***/ "./node_modules/javascript-lp-solver/src/main.js":
/*!*******************************************************!*\
  !*** ./node_modules/javascript-lp-solver/src/main.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*global describe*/
/*global require*/
/*global module*/
/*global it*/
/*global console*/
/*global process*/
/*global setTimeout*/
/*global self*/


//-------------------------------------------------------------------
// SimplexJS
// https://github.com/
// An Object-Oriented Linear Programming Solver
//
// By Justin Wolcott (c)
// Licensed under the MIT License.
//-------------------------------------------------------------------

var Tableau = __webpack_require__(/*! ./Tableau/index.js */ "./node_modules/javascript-lp-solver/src/Tableau/index.js");
var Model = __webpack_require__(/*! ./Model */ "./node_modules/javascript-lp-solver/src/Model.js");
var branchAndCut = __webpack_require__(/*! ./Tableau/branchAndCut */ "./node_modules/javascript-lp-solver/src/Tableau/branchAndCut.js");
var expressions = __webpack_require__(/*! ./expressions.js */ "./node_modules/javascript-lp-solver/src/expressions.js");
var validation = __webpack_require__(/*! ./Validation */ "./node_modules/javascript-lp-solver/src/Validation.js");
var Constraint = expressions.Constraint;
var Variable = expressions.Variable;
var Numeral = expressions.Numeral;
var Term = expressions.Term;
//var External = require("./External/main.js");

// Place everything under the Solver Name Space
var Solver = function () {

    "use strict";

    this.Model = Model;
    this.branchAndCut = branchAndCut;
    this.Constraint = Constraint;
    this.Variable = Variable;
    this.Numeral = Numeral;
    this.Term = Term;
    this.Tableau = Tableau;
    this.lastSolvedModel = null;

    //this.External = External;

    /*************************************************************
     * Method: Solve
     * Scope: Public:
     * Agruments:
     *        model: The model we want solver to operate on
     *        precision: If we're solving a MILP, how tight
     *                   do we want to define an integer, given
     *                   that 20.000000000000001 is not an integer.
     *                   (defaults to 1e-9)
     *            full: *get better description*
     *        validate: if left blank, it will get ignored; otherwise
     *                  it will run the model through all validation
     *                  functions in the *Validate* module
     **************************************************************/
    this.Solve = function (model, precision, full, validate) {
        //
        // Run our validations on the model
        // if the model doesn't have a validate
        // attribute set to false
        //
        if(validate){
            for(var test in validation){
                model = validation[test](model);
            }
        }

        // Make sure we at least have a model
        if (!model) {
            throw new Error("Solver requires a model to operate on");
        }

        //
        // If the objective function contains multiple objectives,
        // pass it to the multi-solver thing...
        //
        if(typeof model.optimize === "object"){
            if(Object.keys(model.optimize > 1)){
                return __webpack_require__(/*! ./Polyopt */ "./node_modules/javascript-lp-solver/src/Polyopt.js")(this, model);
            }
        }

// /////////////////////////////////////////////////////////////////////
// *********************************************************************
// START
// Try our hand at handling external solvers...
// START
// *********************************************************************
// /////////////////////////////////////////////////////////////////////
        if(model.external){

            var solvers = Object.keys(External);
            solvers = JSON.stringify(solvers);

            //
            // The model needs to have a "solver" attribute if nothing else
            // for us to pass data into
            //
            if(!model.external.solver){
                throw new Error("The model you provided has an 'external' object that doesn't have a solver attribute. Use one of the following:" + solvers);
            }

            //
            // If the solver they request doesn't exist; provide them
            // with a list of possible options:
            //
            if(!External[model.external.solver]){
                throw new Error("No support (yet) for " + model.external.solver + ". Please use one of these instead:" + solvers);
            }

            return External[model.external.solver].solve(model);


// /////////////////////////////////////////////////////////////////////
// *********************************************************************
//  END
// Try our hand at handling external solvers...
//  END
// *********************************************************************
// /////////////////////////////////////////////////////////////////////

        } else {

            if (model instanceof Model === false) {
                model = new Model(precision).loadJson(model);
            }

            var solution = model.solve();
            this.lastSolvedModel = model;
            solution.solutionSet = solution.generateSolutionSet();

            // If the user asks for a full breakdown
            // of the tableau (e.g. full === true)
            // this will return it
            if (full) {
                return solution;
            } else {
                // Otherwise; give the user the bare
                // minimum of info necessary to carry on

                var store = {};

                // 1.) Add in feasibility to store;
                store.feasible = solution.feasible;

                // 2.) Add in the objective value
                store.result = solution.evaluation;

                store.bounded = solution.bounded;

                if(solution._tableau.__isIntegral){
                    store.isIntegral = true;
                }

                // 3.) Load all of the variable values
                Object.keys(solution.solutionSet)
                    .forEach(function (d) {
                        //
                        // When returning data in standard format,
                        // Remove all 0's
                        //
                        if(solution.solutionSet[d] !== 0){
                            store[d] = solution.solutionSet[d];
                        }

                    });

                return store;
            }

        }

    };

    /*************************************************************
     * Method: ReformatLP
     * Scope: Public:
     * Agruments: model: The model we want solver to operate on
     * Purpose: Convert a friendly JSON model into a model for a
     *          real solving library...in this case
     *          lp_solver
     **************************************************************/
    this.ReformatLP = __webpack_require__(/*! ./External/lpsolve/Reformat.js */ "./node_modules/javascript-lp-solver/src/External/lpsolve/Reformat.js");


     /*************************************************************
     * Method: MultiObjective
     * Scope: Public:
     * Agruments:
     *        model: The model we want solver to operate on
     *        detail: if false, or undefined; it will return the
     *                result of using the mid-point formula; otherwise
     *                it will return an object containing:
     *
     *                1. The results from the mid point formula
     *                2. The solution for each objective solved
     *                   in isolation (pareto)
     *                3. The min and max of each variable along
     *                   the frontier of the polytope (ranges)
     * Purpose: Solve a model with multiple objective functions.
     *          Since a potential infinite number of solutions exist
     *          this naively returns the mid-point between
     *
     * Note: The model has to be changed a little to work with this.
     *       Before an *opType* was required. No more. The objective
     *       attribute of the model is now an object instead of a
     *       string.
     *
     *  *EXAMPLE MODEL*
     *
     *   model = {
     *       optimize: {scotch: "max", soda: "max"},
     *       constraints: {fluid: {equal: 100}},
     *       variables: {
     *           scotch: {fluid: 1, scotch: 1},
     *           soda: {fluid: 1, soda: 1}
     *       }
     *   }
     *
     **************************************************************/
    this.MultiObjective = function(model){
        return __webpack_require__(/*! ./Polyopt */ "./node_modules/javascript-lp-solver/src/Polyopt.js")(this, model);
    };
};

// var define = define || undefined;
// var window = window || undefined;

// If the project is loading through require.js, use `define` and exit
if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return new Solver();
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
// If the project doesn't see define, but sees window, put solver on window
} else {}
// Ensure that its available in node.js env
module.exports = new Solver();


/***/ }),

/***/ "./solver/formaters.js":
/*!*****************************!*\
  !*** ./solver/formaters.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

module.exports = {
  nfl: {
    draftkings: {
      classic: function classic(players) {
        return function (solution) {
          var points = solution.result;
          var roster = {
            positions: {
              qb: [],
              rb: [],
              wr: [],
              te: [],
              dst: []
            }
          };

          var resultPlayers = _Object$keys(solution).filter(function (key) {
            var keysToRemove = ['feasible', 'result', 'bounded', 'isIntegral'];
            return !keysToRemove.includes(key);
          }); // Add players to positions their eligible for


          var playersEligibleAtMoreThanOnePosition = [];
          resultPlayers.forEach(function (playerId) {
            var positions = 0;
            var player = players[playerId];
            player.id = playerId;

            if (player.qb) {
              ++positions;
              roster.positions.qb.push(player);
            }

            if (player.dst) {
              ++positions;
              roster.positions.dst.push(player);
            }

            if (player.rb) {
              ++positions;
              roster.positions.rb.push(player);
            }

            if (player.wr) {
              ++positions;
              roster.positions.wr.push(player);
            }

            if (player.te) {
              ++positions;
              roster.positions.te.push(player);
            }

            var playsMultiplePositions = positions > 1;

            if (playsMultiplePositions) {
              player.multiplePositions = true;
              playersEligibleAtMoreThanOnePosition.push(player);
            }
          }); // Determine expected position of player.

          playersEligibleAtMoreThanOnePosition.forEach(function (player) {
            var removePlayer = function removePlayer(positionPlayer) {
              return !(player.id === positionPlayer.id);
            };

            if (player.qb && roster.positions.qb.length === 1) {
              roster.positions.rb = roster.positions.rb.filter(removePlayer);
              roster.positions.wr = roster.positions.wr.filter(removePlayer);
              roster.positions.te = roster.positions.te.filter(removePlayer);
              roster.positions.dst = roster.positions.dst.filter(removePlayer);
              return null;
            }

            if (player.rb && roster.positions.rb.length === 2) {
              roster.positions.qb = roster.positions.qb.filter(removePlayer);
              roster.positions.wr = roster.positions.wr.filter(removePlayer);
              roster.positions.te = roster.positions.te.filter(removePlayer);
              roster.positions.dst = roster.positions.dst.filter(removePlayer);
              return null;
            }

            if (player.wr && roster.positions.wr.length === 2) {
              roster.positions.qb = roster.positions.qb.filter(removePlayer);
              roster.positions.rb = roster.positions.rb.filter(removePlayer);
              roster.positions.te = roster.positions.te.filter(removePlayer);
              roster.positions.dst = roster.positions.dst.filter(removePlayer);
              return null;
            }

            if (player.te && roster.positions.te.length === 1) {
              roster.positions.qb = roster.positions.qb.filter(removePlayer);
              roster.positions.rb = roster.positions.rb.filter(removePlayer);
              roster.positions.wr = roster.positions.wr.filter(removePlayer);
              roster.positions.dst = roster.positions.dst.filter(removePlayer);
              return null;
            }

            if (player.dst && roster.positions.dst.length === 1) {
              roster.positions.qb = roster.positions.qb.filter(removePlayer);
              roster.positions.rb = roster.positions.rb.filter(removePlayer);
              roster.positions.wr = roster.positions.wr.filter(removePlayer);
              roster.positions.te = roster.positions.te.filter(removePlayer);
            }
          }); // Sort by start time
          // Attempting to account for late swap

          var sort = function sort(a, b) {
            return a.startTime - b.startTime;
          };

          roster.positions.rb.sort(sort);
          roster.positions.wr.sort(sort);
          roster.positions.te.sort(sort); //construct lineup

          var lineup = {
            qb: roster.positions.qb[0],
            rbs: roster.positions.rb.slice(0, 2),
            wrs: roster.positions.wr.slice(0, 3),
            te: roster.positions.te[0],
            flex: roster.positions.rb[2] || roster.positions.wr[3] || roster.positions.te[1],
            dst: roster.positions.dst[0]
          };
          return {
            points: points,
            lineup: lineup,
            players: resultPlayers
          };
        };
      }
    }
  },
  golf: {
    draftkings: {
      classic: function classic(players) {
        return function (solution) {
          var points = solution.result;
          var roster = {
            positions: {
              g: []
            }
          };

          var resultPlayers = _Object$keys(solution).filter(function (key) {
            var keysToRemove = ['feasible', 'result', 'bounded', 'isIntegral'];
            return !keysToRemove.includes(key);
          }); // Add players to positions their eligible for


          var playersEligibleAtMoreThanOnePosition = [];
          resultPlayers.forEach(function (playerId) {
            var player = players[playerId];
            player.id = playerId;
            roster.positions.g.push(player);
          }); // Sort by start time
          // Attempting to account for late swap

          var sort = function sort(a, b) {
            return a.startTime - b.startTime;
          };

          roster.positions.g.sort(sort); //construct lineup

          var lineup = {
            g: roster.positions.g
          };
          return {
            points: points,
            lineup: lineup,
            players: resultPlayers
          };
        };
      }
    }
  }
};

/***/ }),

/***/ "./solver/ownership.js":
/*!*****************************!*\
  !*** ./solver/ownership.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _Object$defineProperties = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");

var _Object$getOwnPropertyDescriptors = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$getOwnPropertySymbols = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");

var _defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");

var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

var OwnershipWatcher =
/*#__PURE__*/
function () {
  "use strict";

  function OwnershipWatcher(_ref) {
    var players = _ref.players,
        n = _ref.n,
        stack = _ref.stack,
        lineupStrings = _ref.lineupStrings;

    _classCallCheck(this, OwnershipWatcher);

    var pool = this.pool = players;
    var lineupsAllowed = {};

    _Object$keys(pool).forEach(function (player) {
      var count = pool[player].ownership / 100 * n;
      lineupsAllowed[player] = count >= 1 ? lineupsAllowed : 1;
    });

    this.lineupsAllowed = _objectSpread({}, lineupsAllowed);
    this.originalLineupsAllowed = _objectSpread({}, lineupsAllowed);
    this.stack = stack.map(function (player) {
      return player.draftableId;
    });
    this.lineupStrings = lineupStrings;
  }

  _createClass(OwnershipWatcher, [{
    key: "update",
    value: function update(players) {
      var _this = this;

      var lineupsAllowed = this.lineupsAllowed,
          lineupStrings = this.lineupStrings;
      var lineupString = players.sort(function (a, b) {
        return a > b;
      }).join('');
      lineupStrings.push(lineupString);
      players.forEach(function (player) {
        --lineupsAllowed[player]; // Remove players from pool

        if (lineupsAllowed[player] < 1 && !_this.stack.includes(Number(player))) {
          delete _this.pool[player];
        }
      });
    }
  }, {
    key: "validate",
    value: function validate(players) {
      var _this2 = this;

      var lineupsAllowed = this.lineupsAllowed,
          lineupStrings = this.lineupStrings;
      var lineupString = players.sort(function (a, b) {
        return a > b;
      }).join('');

      if (lineupStrings.includes(lineupString)) {
        return false;
      }

      var ineligiblePlayers = players.filter(function (player) {
        if (lineupsAllowed[player] < 1) {
          if (_this2.stack.includes(Number(player))) {
            return false;
          }

          return true;
        }

        return false;
      });
      return ineligiblePlayers.length === 0;
    }
  }]);

  return OwnershipWatcher;
}();

module.exports = OwnershipWatcher;

/***/ }),

/***/ "./solver/queue.js":
/*!*************************!*\
  !*** ./solver/queue.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _solver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solver */ "./solver/solver.js");
/* harmony import */ var _solver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_solver__WEBPACK_IMPORTED_MODULE_0__);

var queue = [];
var Queue = {
  register: function register(n, maxIterations, model, ownership, players, sport, site, type) {
    queue.push(Object(_solver__WEBPACK_IMPORTED_MODULE_0__["solve"])(n, maxIterations, model, ownership, players, sport, site, type));
  },
  go: function go() {
    var results = [];

    while (queue.length) {
      var top = queue.shift();
      var response = top.go();

      if (response.notFeasible || top.isDone()) {
        top.results.forEach(function (result) {
          return results.push(result);
        });
        continue;
      }

      queue.push(top);
    }

    return results;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Queue);

/***/ }),

/***/ "./solver/solve.worker.js":
/*!********************************!*\
  !*** ./solver/solve.worker.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queue */ "./solver/queue.js");
/* harmony import */ var _ownership__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ownership */ "./solver/ownership.js");
/* harmony import */ var _ownership__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ownership__WEBPACK_IMPORTED_MODULE_1__);



const lineupStrings = [];
let ownership = null;

self.addEventListener('message', (event) => {
  const { data: { action } } = event;
console.log('wat', action, event)
  if (action === 'ownership') {
    const { data: { options } } = event;
    ownership = new _ownership__WEBPACK_IMPORTED_MODULE_1___default.a({ ...options, lineupStrings });
    console.log('ownership', ownership)
  }

  if (action === 'enqueue') {
    const { data: { n, maxIterations, model, players, sport, site, type } } = event;
    _queue__WEBPACK_IMPORTED_MODULE_0__["default"].register(n, maxIterations, model, ownership, players, sport, site, type);
    console.log('ownership', ownership)
  }

  if (action === 'solve') {
    const results = _queue__WEBPACK_IMPORTED_MODULE_0__["default"].go();
    self.postMessage(results);
    console.log('ownership', ownership)
  }
});


/***/ }),

/***/ "./solver/solver.js":
/*!**************************!*\
  !*** ./solver/solver.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var solver = __webpack_require__(/*! javascript-lp-solver */ "./node_modules/javascript-lp-solver/src/main.js");

var formaters = __webpack_require__(/*! ./formaters */ "./solver/formaters.js");

module.exports.solve = function (n, maxIterations, model, ownership, players, sport, site, type) {
  var format = formaters[sport][site][type](players);
  var results = [];
  var i = 0;

  var go = function go() {
    ++i;
    var solution = solver.Solve(model);
    console.log("Iteration ".concat(i, " is ").concat(solution.feasible ? '' : 'not', " feasible"));
    console.log('ownership - solver', ownership);

    if (!solution.feasible) {
      return {
        notFeasible: true
      };
    } // Prevents finding solutions which have the same total points


    model.constraints.pointz.max = solution.result - 1;
    var result = format(solution); // Test if lineup is allowed as per ownership

    if (!ownership.validate(result.players)) {
      return {};
    }

    ownership.update(result.players);
    results.push(result);
    return {};
  };

  var isDone = function isDone() {
    return i === maxIterations || results.length === n;
  };

  return {
    go: go,
    isDone: isDone,
    results: results
  };
  /*
    for (let i = 0; i < maxIterations; ++i) {
      const solution = solver.Solve(model);
      console.log(`Iteration ${i + 1} is ${solution.feasible ? '' : 'not'} feasible`);
      if (!solution.feasible) {
        break;
      }
  
      // Prevents finding solutions which have the same total points
      model.constraints.pointz.max = solution.result - 1;
  
      const result = format(solution);
  
      // Test if lineup is allowed as per ownership
      if (!ownership.validate(result.players)) {
        continue;
      }
  
      results.push(result);
      ownership.update(result.players);
  
      if (results.length === n) {
        break;
      }
    }
  
    return results;
    */
};

/***/ })

/******/ });
//# sourceMappingURL=fbd32c783982adcbdf14.worker.js.map