// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
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
})({"../typescript/app.ts":[function(require,module,exports) {
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProjectStatus;

(function (ProjectStatus) {
  ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
  ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));

var Project = function Project(id, title, description, people, status) {
  _classCallCheck(this, Project);

  this.id = id;
  this.title = title;
  this.description = description;
  this.people = people;
  this.status = status;
};

var State = /*#__PURE__*/function () {
  function State() {
    _classCallCheck(this, State);

    this.listeners = [];
  }

  _createClass(State, [{
    key: "addListener",
    value: function addListener(listerFn) {
      this.listeners.push(listerFn);
    }
  }]);

  return State;
}();

var ProjectState = /*#__PURE__*/function (_State) {
  _inherits(ProjectState, _State);

  var _super = _createSuper(ProjectState);

  function ProjectState() {
    var _this;

    _classCallCheck(this, ProjectState);

    _this = _super.call(this);
    _this.projects = [];
    return _this;
  }

  _createClass(ProjectState, [{
    key: "addProject",
    value: function addProject(title, description, numOfPeople) {
      var newProject = new Project(Math.random().toString(), title, description, numOfPeople, ProjectStatus.Active);
      this.projects.push(newProject);

      var _iterator = _createForOfIteratorHelper(this.listeners),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var listerFn = _step.value;
          listerFn(this.projects.slice());
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (this.instance) return this.instance;
      this.instance = new ProjectState();
      return this.instance;
    }
  }]);

  return ProjectState;
}(State);

var projectState = ProjectState.getInstance();

function validate(validatableInput) {
  var isValid = true;
  if (validatableInput.required) isValid = isValid && validatableInput.toString().trim().length !== 0;
  if (validatableInput.minLength != null && typeof validatableInput.value === 'string') isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
  if (validatableInput.maxLength != null && typeof validatableInput.value === 'string') isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
  if (validatableInput.min != null && typeof validatableInput.value === 'number') isValid = isValid && validatableInput.value >= validatableInput.min;
  if (validatableInput.max != null && typeof validatableInput.value === 'number') isValid = isValid && validatableInput.value <= validatableInput.max;
  return isValid;
}

function autobind(_, _2, descriptor) {
  var originalMethod = descriptor.value;
  var adjDescriptor = {
    configurable: true,
    get: function get() {
      var boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  return adjDescriptor;
}

var Component = /*#__PURE__*/function () {
  function Component(templateId, hostElementId, insertAtStart, newElementId) {
    _classCallCheck(this, Component);

    this.templateElement = document.getElementById(templateId);
    this.hostElement = document.getElementById(hostElementId);
    var importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild;
    if (newElementId) this.element.id = newElementId;
    this.attach(insertAtStart);
  }

  _createClass(Component, [{
    key: "attach",
    value: function attach(insertAtBeginning) {
      this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element);
    }
  }]);

  return Component;
}();

var ProjectList = /*#__PURE__*/function (_Component) {
  _inherits(ProjectList, _Component);

  var _super2 = _createSuper(ProjectList);

  function ProjectList(type) {
    var _this2;

    _classCallCheck(this, ProjectList);

    _this2 = _super2.call(this, 'project-list', 'app', false, "".concat(type, "-projects"));
    _this2.type = type;
    _this2.assingedProjects = [];

    _this2.configure();

    _this2.renderContent();

    return _this2;
  }

  _createClass(ProjectList, [{
    key: "configure",
    value: function configure() {
      var _this3 = this;

      projectState.addListener(function (projects) {
        var relevantProjects = projects.filter(function (prj) {
          if (_this3.type === 'active') return prj.status === ProjectStatus.Active;else return prj.status === ProjectStatus.Finished;
        });
        _this3.assingedProjects = relevantProjects;

        _this3.renderProjects();
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var listId = "".concat(this.type, "-projects-list");
      this.element.querySelector('ul').id = listId;
      this.element.querySelector('h2').textContent = this.type.toUpperCase() + 'PROJECTS';
    }
  }, {
    key: "renderProjects",
    value: function renderProjects() {
      var listEl = document.getElementById("".concat(this.type, "-projects-list"));
      listEl.innerText = '';

      var _iterator2 = _createForOfIteratorHelper(this.assingedProjects),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var prjItem = _step2.value;
          var listItem = document.createElement('li');
          listItem.textContent = prjItem.title;
          listEl.appendChild(listItem);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);

  return ProjectList;
}(Component);

var ProjectInput = /*#__PURE__*/function (_Component2) {
  _inherits(ProjectInput, _Component2);

  var _super3 = _createSuper(ProjectInput);

  function ProjectInput() {
    var _this4;

    _classCallCheck(this, ProjectInput);

    _this4 = _super3.call(this, 'project-input', 'app', true, 'user-input');
    _this4.titleInputElement = _this4.element.querySelector('#title');
    _this4.descriptionInputElement = _this4.element.querySelector('#description');
    _this4.peopleInputElement = _this4.element.querySelector('#people');

    _this4.configure();

    return _this4;
  }

  _createClass(ProjectInput, [{
    key: "configure",
    value: function configure() {
      this.element.addEventListener('submit', this.submitHandler.bind(this));
    }
  }, {
    key: "renderContent",
    value: function renderContent() {}
  }, {
    key: "gatherUserInput",
    value: function gatherUserInput() {
      var enteredTitle = this.titleInputElement.value;
      var enteredDescription = this.descriptionInputElement.value;
      var enteredPeople = this.peopleInputElement.value;
      var titleValidatable = {
        value: enteredTitle,
        required: true
      };
      var descriptionValidatable = {
        value: enteredDescription,
        required: true,
        minLength: 5
      };
      var peopleValidatable = {
        value: +enteredPeople,
        required: true,
        min: 1,
        max: 5
      };

      if (!validate(titleValidatable) || !validate(descriptionValidatable) || !validate(peopleValidatable)) {
        alert('Invalid input, please try again!');
        return;
      } else return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }, {
    key: "clearInputs",
    value: function clearInputs() {
      this.titleInputElement.value = '';
      this.descriptionInputElement.value = '';
      this.peopleInputElement.value = '';
    }
  }, {
    key: "submitHandler",
    value: function submitHandler(event) {
      event.preventDefault();
      var userInput = this.gatherUserInput();

      if (Array.isArray(userInput)) {
        var _userInput = _slicedToArray(userInput, 3),
            title = _userInput[0],
            desc = _userInput[1],
            people = _userInput[2];

        projectState.addProject(title, desc, people);
        this.clearInputs();
      }
    }
  }]);

  return ProjectInput;
}(Component);

__decorate([autobind], ProjectInput.prototype, "submitHandler", null);

var prjInput = new ProjectInput();
var activePrjList = new ProjectList('active');
var finishedPrjList = new ProjectList('finished');
},{}],"../../../../../../../home/matt/.nvm/versions/node/v15.5.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
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
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63342" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
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

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
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
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
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

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
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
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
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
},{}]},{},["../../../../../../../home/matt/.nvm/versions/node/v15.5.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../typescript/app.ts"], null)
//# sourceMappingURL=/app.2e0c7f2b.js.map