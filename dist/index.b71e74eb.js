// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8wcER":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h7u1C":[function(require,module,exports) {
var _electribeCore = require("electribe-core");
var _dom = require("./dom");
var _gitHubStorage = require("./storage/GitHubStorage");
var _setting = require("./setting");
var _log = require("./log");
var Buffer = require("buffer").Buffer;
// Define fake html lit-html
// import { html } from 'lit-html';
// https://lit.dev/docs/libraries/standalone-templates/
// or could use /* html */
const html = (strings, ...values)=>{
    return strings.flatMap((str, i)=>[
            str,
            values[i] ?? ''
        ]
    ).join('');
};
// request MIDI access
if (navigator.requestMIDIAccess) navigator.requestMIDIAccess({
    sysex: true
}).then(onMIDISuccess, onMIDIFailure);
else alert('No MIDI support in your browser.');
let midi;
let midiOutput;
function findElectribe2(sources) {
    return [
        ...sources.values()
    ].find(({ name  })=>name.startsWith('electribe2')
    );
}
function onMIDISuccess(midiAccess) {
    midi = midiAccess;
    const midiInput = findElectribe2(midi.inputs);
    midiOutput = findElectribe2(midi.outputs);
    if (!midiInput || !midiOutput) alert('Could not find electribe 2, check if device is properly connect.');
    else {
        midiInput.onmidimessage = onMIDIMessage;
        _dom.elById('io').innerHTML = midiInput.name === midiOutput.name ? midiOutput.name : `${midiInput.name} / ${midiOutput.name}`;
        queryCurrentPattern();
    }
}
function queryCurrentPattern() {
    midiOutput.send(_electribeCore.SYSEX_GET_CURRENT_PATTERN);
}
function onMIDIFailure(error) {
    console.error("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim ", error);
}
function onMIDIMessage({ data  }) {
    // ignore with clock data[0] !== 248
    if (data[0] === 248) return;
    _electribeCore.parseMessage(data);
}
_electribeCore.event.onMidiData = ({ data  })=>console.log('MIDI data', data)
;
_electribeCore.event.onError = ({ type  })=>console.error('Error', type)
;
_electribeCore.event.onWriteDone = ()=>console.log('Write done successfully.')
;
_electribeCore.event.onPatternData = handlePatternData;
function handlePatternData({ pattern: { name , tempo , beat , length , parts , ...pattern } , data  }) {
    _dom.elById('send').onclick = ()=>{
        console.log('try to send data', data);
        midiOutput.send(data);
        alert('Pattern sent');
    };
    const download = ()=>{
        const e2pat = _electribeCore.sys2pat([
            ...data
        ]);
        const a = _dom.elById('download');
        a.href = 'data:application/octet-stream;base64,' + Buffer.from(e2pat).toString('base64');
        a.download = `${name}.e2pat`;
    };
    _dom.elById('download').onclick = download;
    download();
    _dom.elById('push').onclick = async ()=>{
        const e2pat = _electribeCore.sys2pat([
            ...data
        ]);
        await _gitHubStorage.gitHubStorage.saveFile(`${name.replace(/ /g, '_')}.e2pat`, e2pat);
    };
    _dom.inputById('edit-name').onblur = ()=>{
        _dom.elById('pattern-name').style.display = 'block';
        _dom.elById('edit-name').style.display = 'none';
        // should instead change data and rerender
        // elById('pattern-name').innerHTML = `${inputById('edit-name').value} ${svgEdit()}`;
        const newData = _electribeCore.setName(data, _dom.inputById('edit-name').value);
        handlePatternData({
            data: newData,
            pattern: _electribeCore.parsePattern(newData)
        });
    };
    // console.log({ pattern, part });
    _dom.elById('pattern-name').innerHTML = `${name} ${svgEdit()}`;
    _dom.inputById('edit-name').value = name;
    _dom.elById('pattern-tempo').innerHTML = renderPatternTempo(tempo, beat, length);
    _dom.elById('pattern-detail').innerHTML = renderDetails(pattern);
    _dom.elById('parts').innerHTML = parts.map(renderPart).join('');
    parts.forEach(({ name: id  }, i)=>{
        // download
        const a = _dom.elById(id).getElementsByClassName('download')[0];
        const partDownload = ()=>{
            const e2part = [
                ...data
            ].slice(_electribeCore.START_POS[i], _electribeCore.START_POS[i] + 930);
            a.href = 'data:application/octet-stream;base64,' + Buffer.from(e2part).toString('base64');
            a.download = `${name}_${id.replace(' ', '')}.e2part`;
        };
        a.onclick = partDownload;
        partDownload();
        // upload
        _dom.elById(id).getElementsByClassName('fileSelector')[0].onchange = async (event)=>{
            const file = event.target.files[0];
            const partData = [
                ...new Uint8Array(await file.arrayBuffer())
            ];
            const startData = [
                ...data
            ].slice(0, _electribeCore.START_POS[i]);
            const endData = [
                ...data
            ].slice(_electribeCore.START_POS[i] + 930);
            const newData = [
                ...startData,
                ...partData,
                ...endData
            ];
            _electribeCore.parseMessage(newData);
        };
    });
}
_dom.elById('fileSelector').onchange = async (event)=>{
    const file = event.target.files[0];
    const data = _electribeCore.pat2sys([
        ...new Uint8Array(await file.arrayBuffer())
    ]);
    _electribeCore.parseMessage(data);
};
_dom.elById('pattern-name').onclick = ()=>{
    _dom.elById('pattern-name').style.display = 'none';
    _dom.elById('edit-name').style.display = 'block';
    _dom.inputById('edit-name').focus();
};
_dom.elById('pattern-tempo').onclick = ()=>{
    const display = _dom.elById('pattern-detail').style.display;
    _dom.elById('pattern-detail').style.display = display === 'block' ? 'none' : 'block';
};
function displayView(id) {
    _dom.forEachClass('view', (el)=>el.style.display = 'none'
    );
    const el1 = _dom.elById(id);
    el1.style.display = 'block';
    el1.dispatchEvent(new Event('display'));
}
_dom.evEach(_dom.elByClass('viewBtn'), 'click', (event)=>displayView(event.target.dataset.view)
);
_dom.elById('gitFileSelectorView').addEventListener('display', async ()=>{
    const files = await _gitHubStorage.gitHubStorage.readdir('/');
    _dom.elById('gitFiles').innerHTML = files.filter((f)=>f.endsWith('.e2pat')
    ).map((file)=>html` <div class="gitFile">${file}</div> `
    ).join('');
    _dom.evEach(_dom.elByClass('gitFile'), 'click', async (event)=>{
        const filename = event.target.innerText;
        const data = _electribeCore.pat2sys([
            ...new Uint8Array(await _gitHubStorage.gitHubStorage.read(filename)), 
        ]);
        _electribeCore.parseMessage(data);
        displayView('mainView');
    });
});
function svgEdit() {
    return html`<svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
    >
        <title>edit</title>
        <path
            d="M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zm-5.81-3.71L1 14.25V19h4.75l9.96-9.96-4.75-4.75z"
        />
    </svg>`;
}
function renderPart({ name , oscillator , filter , modulation , effect , envelope , settings  }) {
    return html`
        <div class="part" id="${name}">
            <h3>${name}</h3>
            <div class="content">
                <div class="oscillator">
                    <h4>
                        Osc
                        <span
                            >${oscillator.name.name}
                            (${oscillator.name.type})</span
                        >
                    </h4>
                    <div class="inline">${renderDetails(oscillator)}</div>
                </div>
                <div class="filter">
                    <h4>
                        Filter
                        <span>${filter.name.name} (${filter.name.type})</span>
                    </h4>
                    ${renderDetails(filter)}
                </div>
                <div class="modulation">
                    <h4>
                        Mod
                        <span
                            title="${modulation.name.source} to ${modulation.name.destination} (bpmSync: ${modulation.name.bpmSync} keySync: ${modulation.name.keySync})"
                            >${modulation.name.name} ⓘ</span
                        >
                    </h4>
                    <div class="inline">${renderDetails(modulation)}</div>
                </div>
                <div class="effect">
                    <div class="onOff ${effect.on ? 'on' : 'off'}">
                        <div>IFX <span>${effect.name}</span></div>
                        <div class="${effect.on ? 'on' : 'off'}">
                            ${effect.edit}
                        </div>
                    </div>
                </div>
                <div class="envelope">
                    <h4>Envelope</h4>
                    <div class="level">
                        <span class="label">Level</span
                        ><span>${envelope.level}</span
                        ><span>${envelope.pan}</span>
                    </div>
                    <div class="ampEG ${envelope.ampEG ? 'on' : 'off'}">
                        <span class="label">Attack</span
                        ><span>${envelope.attack}</span
                        ><span class="label">Decay</span
                        ><span>${envelope.decayRelease}</span>
                    </div>
                </div>
                <div class="setting">
                    <h4>Settings</h4>
                    ${renderDetails(settings)}
                </div>
                <div>
                    <input type="file" class="fileSelector" accept=".e2part" />
                    <a class="download">Download</a>
                </div>
            </div>
        </div>
    `;
}
function renderPatternTempo(tempo, beat, length) {
    return html`<b>BPM: ${tempo / 10}</b>
        <span>Beat: ${beat} Lenght: ${length}</span>`;
}
function renderDetails(data, skip = [
    'id',
    'name'
]) {
    return Object.keys(data).filter((key)=>!skip.includes(key)
    ).map((key)=>renderDetail(key, data[key])
    ).join('');
}
function renderDetail(key, value) {
    if (typeof value === 'boolean') value = value ? 'on' : 'off';
    else 'object';
    return html`<div><span>${key}</span> <span>${value}</span></div>`;
}

},{"electribe-core":"6gcYi","./dom":"4c0m4","./setting":"falTm","./storage/GitHubStorage":"drxmx","buffer":"fCgem","./log":"2r2Y2"}],"6gcYi":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.START_POS = exports.parsePart = exports.sys2pat = exports.pat2sys = exports.checkDiff = void 0;
__exportStar(require("./constant"), exports);
__exportStar(require("./mod"), exports);
__exportStar(require("./osc"), exports);
__exportStar(require("./electribe"), exports);
__exportStar(require("./hex"), exports);
var codec_1 = require("./codec");
Object.defineProperty(exports, "checkDiff", {
    enumerable: true,
    get: function() {
        return codec_1.checkDiff;
    }
});
Object.defineProperty(exports, "pat2sys", {
    enumerable: true,
    get: function() {
        return codec_1.pat2sys;
    }
});
Object.defineProperty(exports, "sys2pat", {
    enumerable: true,
    get: function() {
        return codec_1.sys2pat;
    }
});
__exportStar(require("./pattern"), exports);
var part_1 = require("./part");
Object.defineProperty(exports, "parsePart", {
    enumerable: true,
    get: function() {
        return part_1.parsePart;
    }
});
Object.defineProperty(exports, "START_POS", {
    enumerable: true,
    get: function() {
        return part_1.START_POS;
    }
});

},{"./constant":"1FZLF","./mod":"gIlIH","./osc":"4Uasb","./electribe":"j0j8B","./hex":"98LpD","./codec":"3u6xs","./pattern":"85eza","./part":"f9q6k"}],"1FZLF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VOICE = exports.IFX = exports.FILTER = exports.SCALE = exports.KEY = exports.MFX = exports.BEAT = void 0;
exports.BEAT = [
    '16',
    '32',
    '8 Tri',
    '16 Tri'
];
exports.MFX = [
    'Mod Delay',
    'Tape Delay',
    'High Pass Delay',
    'Hall Reverb',
    'Room Reverb',
    'Wet Reverb',
    'Looper',
    'Pitch Lopper',
    'Step Shifter',
    'Slicer',
    'Jag Filter',
    'Grain Shifter',
    'Vinyl Break',
    'Seq Reverse',
    'Seq Doubler',
    'Odd Stepper',
    'Even Stepper',
    'Low Pass Filter',
    'High Pass Filter',
    'Band Plus Filter',
    'Touch Wah',
    'Tube EQ',
    'Decimator',
    'Distortion',
    'Compressor',
    'Limiter',
    'Chorus',
    'XY Flanger',
    'LFO Flanger',
    'XY Phaser',
    'LFO Phaser',
    'Auto Pan', 
];
exports.KEY = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B'
];
exports.SCALE = [
    'Chromatic',
    'Ionian',
    'Dorian',
    'Phrygian',
    'Lydian',
    'Mixolidian',
    'Aeolian',
    'Locrian',
    'Harm minor',
    'Melo minor',
    'Major Blues',
    'minor Blues',
    'Diminished',
    'Com.Dim',
    'Major Penta',
    'minor Penta',
    'Raga 1',
    'Raga 2',
    'Raga 3',
    'Arabic',
    'Spanish',
    'Gypsy',
    'Egyptian',
    'Hawaiian',
    'Pelog',
    'Japanese',
    'Ryuku',
    'Chinese',
    'Bass Line',
    'Whole Tone',
    'minor 3rd',
    'Major 3rd',
    '4th Interval',
    '5th Interval',
    'Octave', 
];
exports.FILTER = [
    {
        name: 'OFF',
        type: 'OFF'
    },
    {
        name: 'electribe LPF',
        type: 'LPF'
    },
    {
        name: 'MS20 LPF',
        type: 'LPF'
    },
    {
        name: 'MG LPF',
        type: 'LPF'
    },
    {
        name: 'P5 LPF',
        type: 'LPF'
    },
    {
        name: 'OB LPF',
        type: 'LPF'
    },
    {
        name: 'Acid LPF',
        type: 'LPF'
    },
    {
        name: 'electribe HPF',
        type: 'HPF'
    },
    {
        name: 'MS20 HPF',
        type: 'HPF'
    },
    {
        name: 'P5 HPF',
        type: 'HPF'
    },
    {
        name: 'OB HPF',
        type: 'HPF'
    },
    {
        name: 'Acid HPF',
        type: 'HPF'
    },
    {
        name: 'electribe BPF',
        type: 'BPF'
    },
    {
        name: 'MS20 BPF',
        type: 'BPF'
    },
    {
        name: 'P5 BPF',
        type: 'BPF'
    },
    {
        name: 'OB BPF',
        type: 'BPF'
    },
    {
        name: 'Acid BPF',
        type: 'BPF'
    }, 
];
exports.IFX = [
    'Punch',
    'Overdrive',
    'Distortion',
    'Decimator',
    'Bit Crusher',
    'Ring Modulator',
    'Sustainer',
    'Limiter',
    'Low EQ',
    'Mid EQ',
    'High EQ',
    'Radio EQ',
    'Exciter',
    'Low Pass Filter',
    'High Pass Filter',
    'Band Plus Filter',
    'Talk Filter',
    'Delay 1/4',
    'Delay 3/16',
    'Delay 1/8',
    'Delay 1/16',
    'Roller 1/32',
    'One Delay',
    'Short Delay',
    'Ring Delay 1',
    'Ring Delay 2',
    'Chorus',
    'Flanger LFO',
    'Flanger +',
    'Flanger -',
    'Phaser LFO 1',
    'Phaser LFO 2',
    'Phaser Manual',
    'Tremolo',
    'Off Beater',
    'Pumper',
    'Repeater',
    'Slicer', 
];
exports.VOICE = [
    'Mono 1',
    'Mono 2',
    'Poly 1',
    'Poly 2', 
];

},{}],"gIlIH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MOD = void 0;
exports.MOD = [
    {
        name: 'EG+ Filter',
        source: 'AD Envelope (positive)',
        destination: 'Filter Cutoff',
        bpmSync: false,
        keySync: false
    },
    {
        name: 'EG+ Pitch',
        source: 'AD Envelope (positive)',
        destination: 'Oscillator Pitch',
        bpmSync: false,
        keySync: false
    },
    {
        name: 'EG+ OSC',
        source: 'AD Envelope (positive)',
        destination: 'Oscillator Edit',
        bpmSync: false,
        keySync: false
    },
    {
        name: 'EG+ Level',
        source: 'AD Envelope (positive)',
        destination: 'Amp Level',
        bpmSync: false,
        keySync: false
    },
    {
        name: 'EG+ Pan',
        source: 'AD Envelope (positive)',
        destination: 'Pan',
        bpmSync: false,
        keySync: false
    },
    {
        name: 'EG+ IFX',
        source: 'AD Envelope (positive)',
        destination: 'IFX Edit',
        bpmSync: false,
        keySync: false
    },
    {
        name: 'EG+ BPM Filter',
        source: 'AD Envelope (positive)',
        destination: 'Filter Cutoff',
        bpmSync: true,
        keySync: false
    },
    {
        name: 'EG+ BPM Pitch',
        source: 'AD Envelope (positive)',
        destination: 'Oscillator Pitch',
        bpmSync: true,
        keySync: false
    },
    {
        name: 'EG+ BPM OSC',
        source: 'AD Envelope (positive)',
        destination: 'Oscillator Edit',
        bpmSync: true,
        keySync: false
    },
    {
        name: 'EG+ BPM Level',
        source: 'AD Envelope (positive)',
        destination: 'Amp Level',
        bpmSync: true,
        keySync: false
    },
    {
        name: 'EG+ BPM Pan',
        source: 'AD Envelope (positive)',
        destination: 'Pan',
        bpmSync: true,
        keySync: false
    },
    {
        name: 'EG+ BPM IFX',
        source: 'AD Envelope (positive)',
        destination: 'IFX Edit',
        bpmSync: true,
        keySync: false
    },
    {
        name: 'EG- Filter',
        source: 'AD Envelope (negative)',
        destination: 'Filter Cutoff',
        bpmSync: false,
        keySync: false
    },
    {
        name: 'EG- Pitch',
        source: 'AD Envelope (negative)',
        destination: 'Oscillator Pitch',
        bpmSync: false,
        keySync: false
    },
    {
        name: 'EG- OSC',
        source: 'AD Envelope (negative)',
        destination: 'Oscillator Edit',
        bpmSync: false,
        keySync: false
    },
    {
        name: 'EG- Level',
        source: 'AD Envelope (negative)',
        destination: 'Amp Level',
        bpmSync: false,
        keySync: false
    },
    {
        name: 'EG- Pan',
        source: 'AD Envelope (negative)',
        destination: 'Pan',
        bpmSync: false,
        keySync: false
    },
    {
        name: 'EG- IFX',
        source: 'AD Envelope (negative)',
        destination: 'IFX Edit',
        bpmSync: false,
        keySync: false
    },
    {
        name: 'EG- BPM Filter',
        source: 'AD Envelope (negative)',
        destination: 'Filter Cutoff',
        bpmSync: true,
        keySync: false
    },
    {
        name: 'EG- BPM Pitch',
        source: 'AD Envelope (negative)',
        destination: 'Oscillator Pitch',
        bpmSync: true,
        keySync: false
    },
    {
        name: 'EG- BPM OSC',
        source: 'AD Envelope (negative)',
        destination: 'Oscillator Edit',
        bpmSync: true,
        keySync: false
    },
    {
        name: 'EG- BPM Level',
        source: 'AD Envelope (negative)',
        destination: 'Amp Level',
        bpmSync: true,
        keySync: false
    },
    {
        name: 'EG- BPM Pan',
        source: 'AD Envelope (negative)',
        destination: 'Pan',
        bpmSync: true,
        keySync: false
    },
    {
        name: 'EG- BPM IFX',
        source: 'AD Envelope (negative)',
        destination: 'IFX Edit',
        bpmSync: true,
        keySync: false
    },
    {
        name: 'LFOTri Filter',
        source: 'LFO (triangle)',
        destination: 'Filter Cutoff',
        bpmSync: false,
        keySync: false
    },
    {
        name: 'LFOTri Pitch',
        source: 'LFO (triangle)',
        destination: 'Oscillator Pitch',
        bpmSync: false,
        keySync: false
    },
    {
        name: 'LFOTri OSC',
        source: 'LFO (triangle)',
        destination: 'Oscillator Edit',
        bpmSync: false,
        keySync: false
    },
    {
        name: 'LFOTri Level',
        source: 'LFO (triangle)',
        destination: 'Amp Level',
        bpmSync: false,
        keySync: false
    },
    {
        name: 'LFOTri Pan',
        source: 'LFO (triangle)',
        destination: 'Pan',
        bpmSync: false,
        keySync: false
    },
    {
        name: 'LFOTri IFX',
        source: 'LFO (triangle)',
        destination: 'IFX Edit',
        bpmSync: false,
        keySync: false
    },
    {
        name: 'LFOTriB Filter',
        source: 'LFO (triangle)',
        destination: 'Filter Cutoff',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'LFOTriB Pitch',
        source: 'LFO (triangle)',
        destination: 'Oscillator Pitch',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'LFOTriB OSC',
        source: 'LFO (triangle)',
        destination: 'Oscillator Edit',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'LFOTriB Level',
        source: 'LFO (triangle)',
        destination: 'Amp Level',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'LFOTriB Pan',
        source: 'LFO (triangle)',
        destination: 'Pan',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'LFOTriB IFX',
        source: 'LFO (triangle)',
        destination: 'IFX Edit',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'SawUpB Filter',
        source: 'LFO (up-saw)',
        destination: 'Filter Cutoff',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'SawUpB Pitch',
        source: 'LFO (up-saw)',
        destination: 'Oscillator Pitch',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'SawUpB OSC',
        source: 'LFO (up-saw)',
        destination: 'Oscillator Edit',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'SawUpB Level',
        source: 'LFO (up-saw)',
        destination: 'Amp Level',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'SawUpB Pan',
        source: 'LFO (up-saw)',
        destination: 'Pan',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'SawUpB IFX',
        source: 'LFO (up-saw)',
        destination: 'IFX Edit',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'SawDwnB Filter',
        source: 'LFO (down-saw)',
        destination: 'Filter Cutoff',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'SawDwnB Pitch',
        source: 'LFO (down-saw)',
        destination: 'Oscillator Pitch',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'SawDwnB OSC',
        source: 'LFO (down-saw)',
        destination: 'Oscillator Edit',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'SawDwnB Level',
        source: 'LFO (down-saw)',
        destination: 'Amp Level',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'SawDwnB Pan',
        source: 'LFO (down-saw)',
        destination: 'Pan',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'SawDwnB IFX',
        source: 'LFO (down-saw)',
        destination: 'IFX Edit',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'SquUpB Filter',
        source: 'LFO (up-square)',
        destination: 'Filter Cutoff',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'SquUpB Pitch',
        source: 'LFO (up-square)',
        destination: 'Oscillator Pitch',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'SquUpB OSC',
        source: 'LFO (up-square)',
        destination: 'Oscillator Edit',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'SquUpB Level',
        source: 'LFO (up-square)',
        destination: 'Amp Level',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'SquUpB Pan',
        source: 'LFO (up-square)',
        destination: 'Pan',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'SquUpB IFX',
        source: 'LFO (up-square)',
        destination: 'IFX Edit',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'SquDwnB Filter',
        source: 'LFO (down-square)',
        destination: 'Filter Cutoff',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'SquDwnB Pitch',
        source: 'LFO (down-square)',
        destination: 'Oscillator Pitch',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'SquDwnB OSC',
        source: 'LFO (down-square)',
        destination: 'Oscillator Edit',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'SquDwnB Level',
        source: 'LFO (down-square)',
        destination: 'Amp Level',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'SquDwnB Pan',
        source: 'LFO (down-square)',
        destination: 'Pan',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'SquDwnB IFX',
        source: 'LFO (down-square)',
        destination: 'IFX Edit',
        bpmSync: true,
        keySync: true
    },
    {
        name: 'S&HBPM Filter',
        source: 'LFO (sample & hold)',
        destination: 'Filter Cutoff',
        bpmSync: true,
        keySync: false
    },
    {
        name: 'S&HBPM Pitch',
        source: 'LFO (sample & hold)',
        destination: 'Oscillator Pitch',
        bpmSync: true,
        keySync: false
    },
    {
        name: 'S&HBPM OSC',
        source: 'LFO (sample & hold)',
        destination: 'Oscillator Edit',
        bpmSync: true,
        keySync: false
    },
    {
        name: 'S&HBPM Level',
        source: 'LFO (sample & hold)',
        destination: 'Amp Level',
        bpmSync: true,
        keySync: false
    },
    {
        name: 'S&HBPM Pan',
        source: 'LFO (sample & hold)',
        destination: 'Pan',
        bpmSync: true,
        keySync: false
    },
    {
        name: 'S&HBPM IFX',
        source: 'LFO (sample & hold)',
        destination: 'IFX Edit',
        bpmSync: true,
        keySync: false
    },
    {
        name: 'Random Filter',
        source: 'LFO (random)',
        destination: 'Filter Cutoff',
        bpmSync: false,
        keySync: false
    },
    {
        name: 'Random Pitch',
        source: 'LFO (random)',
        destination: 'Oscillator Pitch',
        bpmSync: false,
        keySync: false
    },
    {
        name: 'Random OSC',
        source: 'LFO (random)',
        destination: 'Oscillator Edit',
        bpmSync: false,
        keySync: false
    },
    {
        name: 'Random Level',
        source: 'LFO (random)',
        destination: 'Amp Level',
        bpmSync: false,
        keySync: false
    },
    {
        name: 'Random Pan',
        source: 'LFO (random)',
        destination: 'Pan',
        bpmSync: false,
        keySync: false
    },
    {
        name: 'Random IFX',
        source: 'LFO (random)',
        destination: 'IFX Edit',
        bpmSync: false,
        keySync: false
    }, 
];

},{}],"4Uasb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OSC = void 0;
exports.OSC = [
    {
        name: 'SubBeef',
        type: 'Kick'
    },
    {
        name: 'Lazy',
        type: 'Kick'
    },
    {
        name: 'Echoes',
        type: 'Kick'
    },
    {
        name: 'Lay',
        type: 'Kick'
    },
    {
        name: 'Hardstyle',
        type: 'Kick'
    },
    {
        name: 'Hardcore',
        type: 'Kick'
    },
    {
        name: 'Southpaw',
        type: 'Kick'
    },
    {
        name: '8BitGrime',
        type: 'Kick'
    },
    {
        name: 'Noiz',
        type: 'Kick'
    },
    {
        name: 'HiKnock',
        type: 'Kick'
    },
    {
        name: 'LoKnock',
        type: 'Kick'
    },
    {
        name: 'Tronica',
        type: 'Kick'
    },
    {
        name: 'HiClicky',
        type: 'Kick'
    },
    {
        name: 'LoClicky',
        type: 'Kick'
    },
    {
        name: 'Subsonic',
        type: 'Kick'
    },
    {
        name: 'Threed',
        type: 'Kick'
    },
    {
        name: 'Lololow',
        type: 'Kick'
    },
    {
        name: 'Risky',
        type: 'Kick'
    },
    {
        name: 'ShortBoom',
        type: 'Kick'
    },
    {
        name: 'AttackEight',
        type: 'Kick'
    },
    {
        name: 'PureEight',
        type: 'Kick'
    },
    {
        name: 'UltraEight',
        type: 'Kick'
    },
    {
        name: 'SnipEight',
        type: 'Kick'
    },
    {
        name: 'ShortNine',
        type: 'Kick'
    },
    {
        name: 'PureNine',
        type: 'Kick'
    },
    {
        name: 'BoostNine',
        type: 'Kick'
    },
    {
        name: 'Harder',
        type: 'Kick'
    },
    {
        name: 'BitBreak',
        type: 'Kick'
    },
    {
        name: 'Finger',
        type: 'Kick'
    },
    {
        name: 'Filthy',
        type: 'Kick'
    },
    {
        name: 'Visual',
        type: 'Kick'
    },
    {
        name: 'Breaker',
        type: 'Kick'
    },
    {
        name: 'Urban',
        type: 'Kick'
    },
    {
        name: 'Roomy',
        type: 'Kick'
    },
    {
        name: 'Studio',
        type: 'Kick'
    },
    {
        name: 'Twinkling',
        type: 'Kick'
    },
    {
        name: 'Hippy',
        type: 'Kick'
    },
    {
        name: 'Ringy',
        type: 'Kick'
    },
    {
        name: 'Womp',
        type: 'Kick'
    },
    {
        name: 'Hip',
        type: 'Kick'
    },
    {
        name: 'Jungle',
        type: 'Kick'
    },
    {
        name: 'EastCoast',
        type: 'Kick'
    },
    {
        name: 'Jazz',
        type: 'Kick'
    },
    {
        name: 'Rock',
        type: 'Kick'
    },
    {
        name: 'Warm',
        type: 'Kick'
    },
    {
        name: 'Breaks',
        type: 'Kick'
    },
    {
        name: "80'sR&B1",
        type: 'Kick'
    },
    {
        name: "80'sR&B2",
        type: 'Kick'
    },
    {
        name: "80'sR&B3",
        type: 'Kick'
    },
    {
        name: 'DDD1',
        type: 'Kick'
    },
    {
        name: 'DoncaMatic',
        type: 'Kick'
    },
    {
        name: 'BeatVox1',
        type: 'Kick'
    },
    {
        name: 'BeatVox2',
        type: 'Kick'
    },
    {
        name: 'BeatVox3',
        type: 'Kick'
    },
    {
        name: 'Reverse1',
        type: 'Kick'
    },
    {
        name: 'Reverse2',
        type: 'Kick'
    },
    {
        name: 'Aftertaste',
        type: 'Snare'
    },
    {
        name: 'Sharp',
        type: 'Snare'
    },
    {
        name: 'Toofer',
        type: 'Snare'
    },
    {
        name: 'Clpsnr',
        type: 'Snare'
    },
    {
        name: 'Bosh',
        type: 'Snare'
    },
    {
        name: 'Wide',
        type: 'Snare'
    },
    {
        name: 'BreaksLofi',
        type: 'Snare'
    },
    {
        name: 'Beach',
        type: 'Snare'
    },
    {
        name: 'Hefty',
        type: 'Snare'
    },
    {
        name: 'Goodie',
        type: 'Snare'
    },
    {
        name: 'Steady',
        type: 'Snare'
    },
    {
        name: 'Tech',
        type: 'Snare'
    },
    {
        name: 'Lay',
        type: 'Snare'
    },
    {
        name: 'LoNine',
        type: 'Snare'
    },
    {
        name: 'HiNine',
        type: 'Snare'
    },
    {
        name: 'CompNine',
        type: 'Snare'
    },
    {
        name: 'PureEight',
        type: 'Snare'
    },
    {
        name: 'BodyEight',
        type: 'Snare'
    },
    {
        name: 'TrapEight',
        type: 'Snare'
    },
    {
        name: 'Shortate',
        type: 'Snare'
    },
    {
        name: 'LeanSnare',
        type: 'Snare'
    },
    {
        name: 'Seventy',
        type: 'Snare'
    },
    {
        name: 'DDD1',
        type: 'Snare'
    },
    {
        name: 'Nuxx',
        type: 'Snare'
    },
    {
        name: 'Oldie',
        type: 'Snare'
    },
    {
        name: 'Bigger',
        type: 'Snare'
    },
    {
        name: "80'sR&B1",
        type: 'Snare'
    },
    {
        name: "80'sR&B2",
        type: 'Snare'
    },
    {
        name: 'Jazz1',
        type: 'Snare'
    },
    {
        name: 'Jazz2',
        type: 'Snare'
    },
    {
        name: 'Snappy',
        type: 'Snare'
    },
    {
        name: 'Ambee',
        type: 'Snare'
    },
    {
        name: 'Verdy',
        type: 'Snare'
    },
    {
        name: 'Tubeverb',
        type: 'Snare'
    },
    {
        name: 'Open1',
        type: 'Snare'
    },
    {
        name: 'Open2',
        type: 'Snare'
    },
    {
        name: 'Oldskool',
        type: 'Snare'
    },
    {
        name: 'Hoppy',
        type: 'Snare'
    },
    {
        name: 'Ringy',
        type: 'Snare'
    },
    {
        name: 'OldBreaks',
        type: 'Snare'
    },
    {
        name: 'Piccolo',
        type: 'Snare'
    },
    {
        name: 'Jungla',
        type: 'Snare'
    },
    {
        name: 'EastCoast',
        type: 'Snare'
    },
    {
        name: "D'n'B",
        type: 'Snare'
    },
    {
        name: 'Ambig',
        type: 'Snare'
    },
    {
        name: 'Juggler',
        type: 'Snare'
    },
    {
        name: 'DoncaMatic',
        type: 'Snare'
    },
    {
        name: 'Whip',
        type: 'Snare'
    },
    {
        name: 'Arcade',
        type: 'Snare'
    },
    {
        name: 'RimVox',
        type: 'Snare'
    },
    {
        name: 'Parched',
        type: 'Snare'
    },
    {
        name: 'Rimmy',
        type: 'Snare'
    },
    {
        name: 'AmbiRim',
        type: 'Snare'
    },
    {
        name: 'SnareVox',
        type: 'Snare'
    },
    {
        name: 'Waffle',
        type: 'Snare'
    },
    {
        name: 'Blast',
        type: 'Snare'
    },
    {
        name: 'Reverse1',
        type: 'Snare'
    },
    {
        name: 'Reverse2',
        type: 'Snare'
    },
    {
        name: 'PureEight',
        type: 'Clap'
    },
    {
        name: 'AmbEight',
        type: 'Clap'
    },
    {
        name: 'DirtySouth',
        type: 'Clap'
    },
    {
        name: 'PureNine',
        type: 'Clap'
    },
    {
        name: 'Mixed',
        type: 'Clap'
    },
    {
        name: 'Trap',
        type: 'Clap'
    },
    {
        name: 'Small',
        type: 'Clap'
    },
    {
        name: 'Clapper',
        type: 'Clap'
    },
    {
        name: 'Doubler',
        type: 'Clap'
    },
    {
        name: 'EastCoast',
        type: 'Clap'
    },
    {
        name: 'Liteclap',
        type: 'Clap'
    },
    {
        name: 'DDD1',
        type: 'Clap'
    },
    {
        name: 'Crispy',
        type: 'Clap'
    },
    {
        name: 'B.Boy',
        type: 'Clap'
    },
    {
        name: 'Crumbles',
        type: 'Clap'
    },
    {
        name: 'FingerSnap',
        type: 'Clap'
    },
    {
        name: 'NineClose1',
        type: 'HiHat'
    },
    {
        name: 'NineOpen1',
        type: 'HiHat'
    },
    {
        name: 'NineClose2',
        type: 'HiHat'
    },
    {
        name: 'NineOpen2',
        type: 'HiHat'
    },
    {
        name: 'EightClose1',
        type: 'HiHat'
    },
    {
        name: 'EightOpen1',
        type: 'HiHat'
    },
    {
        name: 'EightOpen2',
        type: 'HiHat'
    },
    {
        name: 'CompClose',
        type: 'HiHat'
    },
    {
        name: 'CompOpen',
        type: 'HiHat'
    },
    {
        name: 'EastClose',
        type: 'HiHat'
    },
    {
        name: 'EastOpen',
        type: 'HiHat'
    },
    {
        name: 'DDD1Close',
        type: 'HiHat'
    },
    {
        name: 'DDD1Open',
        type: 'HiHat'
    },
    {
        name: 'WarmClose',
        type: 'HiHat'
    },
    {
        name: 'WarmOpen',
        type: 'HiHat'
    },
    {
        name: 'ZeeClose',
        type: 'HiHat'
    },
    {
        name: 'ZeeOpen',
        type: 'HiHat'
    },
    {
        name: 'RoomyClose',
        type: 'HiHat'
    },
    {
        name: 'RoomyOpen',
        type: 'HiHat'
    },
    {
        name: 'RockClose',
        type: 'HiHat'
    },
    {
        name: 'RockOpen',
        type: 'HiHat'
    },
    {
        name: 'JazzClose',
        type: 'HiHat'
    },
    {
        name: 'JazzOpen',
        type: 'HiHat'
    },
    {
        name: 'HoppyClose',
        type: 'HiHat'
    },
    {
        name: 'HoppyOpen',
        type: 'HiHat'
    },
    {
        name: 'PhaseClose',
        type: 'HiHat'
    },
    {
        name: 'PhaseOpen',
        type: 'HiHat'
    },
    {
        name: 'NuHopClose',
        type: 'HiHat'
    },
    {
        name: 'NuHopOpen',
        type: 'HiHat'
    },
    {
        name: 'RightClose',
        type: 'HiHat'
    },
    {
        name: 'RightOpen',
        type: 'HiHat'
    },
    {
        name: 'NoizClose',
        type: 'HiHat'
    },
    {
        name: 'NoizOpen',
        type: 'HiHat'
    },
    {
        name: 'GranClose',
        type: 'HiHat'
    },
    {
        name: 'GranOpen',
        type: 'HiHat'
    },
    {
        name: 'Ambi',
        type: 'HiHat'
    },
    {
        name: 'Crackle',
        type: 'HiHat'
    },
    {
        name: 'Hippy',
        type: 'HiHat'
    },
    {
        name: 'Pump',
        type: 'HiHat'
    },
    {
        name: 'Voice1',
        type: 'HiHat'
    },
    {
        name: 'Voice2',
        type: 'HiHat'
    },
    {
        name: 'Reverse',
        type: 'HiHat'
    },
    {
        name: 'NineCym',
        type: 'Cymbal'
    },
    {
        name: 'Hi Cymbal',
        type: 'Cymbal'
    },
    {
        name: 'DoncaMatic',
        type: 'Cymbal'
    },
    {
        name: 'EastCoast',
        type: 'Cymbal'
    },
    {
        name: 'Rock',
        type: 'Cymbal'
    },
    {
        name: 'Synth',
        type: 'Cymbal'
    },
    {
        name: 'WhiteNoiz',
        type: 'Cymbal'
    },
    {
        name: 'RevCrash',
        type: 'Cymbal'
    },
    {
        name: 'NineRide',
        type: 'Cymbal'
    },
    {
        name: 'JazzRide1',
        type: 'Cymbal'
    },
    {
        name: 'JazzRide2',
        type: 'Cymbal'
    },
    {
        name: 'RockRide',
        type: 'Cymbal'
    },
    {
        name: 'ZeeRide',
        type: 'Cymbal'
    },
    {
        name: 'RevRide',
        type: 'Cymbal'
    },
    {
        name: 'Real Hi',
        type: 'Tom'
    },
    {
        name: 'Real MidHi',
        type: 'Tom'
    },
    {
        name: 'Real MidLo',
        type: 'Tom'
    },
    {
        name: 'Real Lo',
        type: 'Tom'
    },
    {
        name: 'Driven',
        type: 'Tom'
    },
    {
        name: 'Zee Hi',
        type: 'Tom'
    },
    {
        name: 'Zee Lo',
        type: 'Tom'
    },
    {
        name: 'OldSkool',
        type: 'Tom'
    },
    {
        name: 'Crunchy',
        type: 'Tom'
    },
    {
        name: 'E.Tom',
        type: 'Tom'
    },
    {
        name: 'Synth Hi1',
        type: 'Tom'
    },
    {
        name: 'Synth Mid1',
        type: 'Tom'
    },
    {
        name: 'Synth Lo1',
        type: 'Tom'
    },
    {
        name: 'Synth Hi2',
        type: 'Tom'
    },
    {
        name: 'Synth Lo2',
        type: 'Tom'
    },
    {
        name: 'TomEight',
        type: 'Tom'
    },
    {
        name: 'Conga1',
        type: 'Percussion'
    },
    {
        name: 'Conga2',
        type: 'Percussion'
    },
    {
        name: 'Conga3',
        type: 'Percussion'
    },
    {
        name: 'Conga4',
        type: 'Percussion'
    },
    {
        name: 'Conga5',
        type: 'Percussion'
    },
    {
        name: 'Bongo1',
        type: 'Percussion'
    },
    {
        name: 'Bongo2',
        type: 'Percussion'
    },
    {
        name: 'Bongo3',
        type: 'Percussion'
    },
    {
        name: 'Bongo4',
        type: 'Percussion'
    },
    {
        name: 'Bongo5',
        type: 'Percussion'
    },
    {
        name: 'Bongo6',
        type: 'Percussion'
    },
    {
        name: 'Djembe1',
        type: 'Percussion'
    },
    {
        name: 'Djembe2',
        type: 'Percussion'
    },
    {
        name: 'Djembe3',
        type: 'Percussion'
    },
    {
        name: 'Djembe4',
        type: 'Percussion'
    },
    {
        name: 'Darbuka1',
        type: 'Percussion'
    },
    {
        name: 'Darbuka2',
        type: 'Percussion'
    },
    {
        name: 'Darbuka3',
        type: 'Percussion'
    },
    {
        name: 'Darbuka4',
        type: 'Percussion'
    },
    {
        name: 'Timbales Hi',
        type: 'Percussion'
    },
    {
        name: 'Timbales Lo',
        type: 'Percussion'
    },
    {
        name: 'CowBell1',
        type: 'Percussion'
    },
    {
        name: 'CowBell2',
        type: 'Percussion'
    },
    {
        name: 'CowBell3',
        type: 'Percussion'
    },
    {
        name: 'Tambourine1',
        type: 'Percussion'
    },
    {
        name: 'Tambourine2',
        type: 'Percussion'
    },
    {
        name: 'Clave',
        type: 'Percussion'
    },
    {
        name: 'Guiro',
        type: 'Percussion'
    },
    {
        name: 'Cabasa',
        type: 'Percussion'
    },
    {
        name: 'Shaker',
        type: 'Percussion'
    },
    {
        name: 'WaveDrum1',
        type: 'Percussion'
    },
    {
        name: 'WaveDrum2',
        type: 'Percussion'
    },
    {
        name: 'WaveDrum3',
        type: 'Percussion'
    },
    {
        name: 'WaveDrum4',
        type: 'Percussion'
    },
    {
        name: 'WaveDrum5',
        type: 'Percussion'
    },
    {
        name: 'WaveDrum6',
        type: 'Percussion'
    },
    {
        name: 'WaveDrum7',
        type: 'Percussion'
    },
    {
        name: 'WaveDrum8',
        type: 'Percussion'
    },
    {
        name: 'ShakerHit',
        type: 'Percussion'
    },
    {
        name: 'RimPerc',
        type: 'Percussion'
    },
    {
        name: 'Wavestation',
        type: 'Percussion'
    },
    {
        name: 'RimNine',
        type: 'Percussion'
    },
    {
        name: 'RimEight',
        type: 'Percussion'
    },
    {
        name: 'SynthShake',
        type: 'Percussion'
    },
    {
        name: 'CowbellEight',
        type: 'Percussion'
    },
    {
        name: 'DoncaCongaS',
        type: 'Percussion'
    },
    {
        name: 'DoncaCongaL',
        type: 'Percussion'
    },
    {
        name: 'DoncaMaracas',
        type: 'Percussion'
    },
    {
        name: 'DoncaClaves',
        type: 'Percussion'
    },
    {
        name: 'DoncaW.block',
        type: 'Percussion'
    },
    {
        name: 'Synthclave',
        type: 'Percussion'
    },
    {
        name: 'ClickRoll',
        type: 'Percussion'
    },
    {
        name: 'GlitchDmg',
        type: 'Percussion'
    },
    {
        name: 'MouthPop',
        type: 'Percussion'
    },
    {
        name: 'Droplet',
        type: 'Percussion'
    },
    {
        name: 'Rave',
        type: 'Voice'
    },
    {
        name: 'Whoo',
        type: 'Voice'
    },
    {
        name: 'Ohooo',
        type: 'Voice'
    },
    {
        name: 'ComOn',
        type: 'Voice'
    },
    {
        name: 'Nahh',
        type: 'Voice'
    },
    {
        name: 'Ahaa..',
        type: 'Voice'
    },
    {
        name: 'Haa',
        type: 'Voice'
    },
    {
        name: 'Baaa',
        type: 'Voice'
    },
    {
        name: 'Grun',
        type: 'Voice'
    },
    {
        name: 'Ahaaw',
        type: 'Voice'
    },
    {
        name: 'Paa',
        type: 'Voice'
    },
    {
        name: 'Hey',
        type: 'Voice'
    },
    {
        name: 'Doh',
        type: 'Voice'
    },
    {
        name: 'GlitchEey',
        type: 'Voice'
    },
    {
        name: 'BotVox1',
        type: 'Voice'
    },
    {
        name: 'BotVox2',
        type: 'Voice'
    },
    {
        name: 'NoizyVox',
        type: 'Synth FX'
    },
    {
        name: 'Noiser',
        type: 'Synth FX'
    },
    {
        name: 'Botox',
        type: 'Synth FX'
    },
    {
        name: 'ShockSonar',
        type: 'Synth FX'
    },
    {
        name: 'Quark',
        type: 'Synth FX'
    },
    {
        name: 'ebPerc',
        type: 'Synth FX'
    },
    {
        name: 'Needle',
        type: 'Synth FX'
    },
    {
        name: 'SqueakyBum',
        type: 'Synth FX'
    },
    {
        name: 'SynSiren',
        type: 'Synth FX'
    },
    {
        name: 'Bubble',
        type: 'Synth FX'
    },
    {
        name: 'Burp',
        type: 'Synth FX'
    },
    {
        name: 'Lux',
        type: 'Synth FX'
    },
    {
        name: 'Squirt',
        type: 'Synth FX'
    },
    {
        name: 'Degraded',
        type: 'Synth FX'
    },
    {
        name: 'Flyby',
        type: 'Synth FX'
    },
    {
        name: 'SonicDrop',
        type: 'Synth FX'
    },
    {
        name: 'LoZap',
        type: 'Synth FX'
    },
    {
        name: 'SubBang',
        type: 'Synth FX'
    },
    {
        name: 'Stabium',
        type: 'Synth Hit'
    },
    {
        name: 'Futurize',
        type: 'Synth Hit'
    },
    {
        name: 'LilChord',
        type: 'Synth Hit'
    },
    {
        name: 'Ploinky',
        type: 'Synth Hit'
    },
    {
        name: 'Strippa',
        type: 'Synth Hit'
    },
    {
        name: 'BigChords',
        type: 'Synth Hit'
    },
    {
        name: 'StarBurst',
        type: 'Synth Hit'
    },
    {
        name: 'WishWash',
        type: 'Synth Hit'
    },
    {
        name: 'BangPop',
        type: 'Synth Hit'
    },
    {
        name: 'RegulatePop',
        type: 'Synth Hit'
    },
    {
        name: 'TigerPad',
        type: 'Synth Hit'
    },
    {
        name: 'LofiSynth',
        type: 'Synth Hit'
    },
    {
        name: 'BlastBass',
        type: 'Synth Hit'
    },
    {
        name: 'BenderBass',
        type: 'Synth Hit'
    },
    {
        name: 'RockHit1',
        type: 'Synth Hit'
    },
    {
        name: 'RockHit2',
        type: 'Synth Hit'
    },
    {
        name: 'FormantBass',
        type: 'Synth Hit'
    },
    {
        name: 'SynGrowl',
        type: 'Synth Hit'
    },
    {
        name: 'BrassHit1',
        type: 'Inst.Hit'
    },
    {
        name: 'BrassHit2',
        type: 'Inst.Hit'
    },
    {
        name: 'StringsHit1',
        type: 'Inst.Hit'
    },
    {
        name: 'StringsHit2',
        type: 'Inst.Hit'
    },
    {
        name: 'BadOrch',
        type: 'Inst.Hit'
    },
    {
        name: 'CarmOrch',
        type: 'Inst.Hit'
    },
    {
        name: 'Sho2DOrch',
        type: 'Inst.Hit'
    },
    {
        name: 'V2Orch',
        type: 'Inst.Hit'
    },
    {
        name: 'Suspended',
        type: 'Inst.Hit'
    },
    {
        name: 'Jazz',
        type: 'Inst.Hit'
    },
    {
        name: 'Jazzy',
        type: 'Inst.Hit'
    },
    {
        name: 'Hop',
        type: 'Inst.Hit'
    },
    {
        name: 'OldBrass',
        type: 'Inst.Hit'
    },
    {
        name: 'Record',
        type: 'Inst.Hit'
    },
    {
        name: 'Rave',
        type: 'Inst.Hit'
    },
    {
        name: 'Oldie',
        type: 'Inst.Hit'
    },
    {
        name: 'SAW',
        type: 'Synth'
    },
    {
        name: 'BOOST-SAW',
        type: 'Synth'
    },
    {
        name: 'PULSE',
        type: 'Synth'
    },
    {
        name: 'TRIANGLE',
        type: 'Synth'
    },
    {
        name: 'SINE',
        type: 'Synth'
    },
    {
        name: 'DUAL-SAW',
        type: 'Synth'
    },
    {
        name: 'DUAL-SQU',
        type: 'Synth'
    },
    {
        name: 'DUAL-TRI',
        type: 'Synth'
    },
    {
        name: 'DUAL-SINE',
        type: 'Synth'
    },
    {
        name: 'OCT-SAW',
        type: 'Synth'
    },
    {
        name: 'OCT-SQU',
        type: 'Synth'
    },
    {
        name: 'OCT-TRI',
        type: 'Synth'
    },
    {
        name: 'OCT-SINE',
        type: 'Synth'
    },
    {
        name: 'UNI-SAW',
        type: 'Synth'
    },
    {
        name: 'UNI-SQU',
        type: 'Synth'
    },
    {
        name: 'UNI-TRI',
        type: 'Synth'
    },
    {
        name: 'UNI-SINE',
        type: 'Synth'
    },
    {
        name: 'SYNC-SAW',
        type: 'Synth'
    },
    {
        name: 'SYNC-SQU',
        type: 'Synth'
    },
    {
        name: 'SYNC-TRI',
        type: 'Synth'
    },
    {
        name: 'SYNC-SINE',
        type: 'Synth'
    },
    {
        name: 'CHIP-TRI 1',
        type: 'Synth'
    },
    {
        name: 'CHIP-TRI 2',
        type: 'Synth'
    },
    {
        name: 'CHIP-PULSE',
        type: 'Synth'
    },
    {
        name: 'CHIP-NOISE',
        type: 'Synth'
    },
    {
        name: 'RING-SAW',
        type: 'Synth'
    },
    {
        name: 'RING-SQU',
        type: 'Synth'
    },
    {
        name: 'RING-TRI',
        type: 'Synth'
    },
    {
        name: 'RING-SINE',
        type: 'Synth'
    },
    {
        name: 'X-SAW 1',
        type: 'Synth'
    },
    {
        name: 'X-SAW 2',
        type: 'Synth'
    },
    {
        name: 'X-SQUARE 1',
        type: 'Synth'
    },
    {
        name: 'X-SQUARE 2',
        type: 'Synth'
    },
    {
        name: 'X-TRI 1',
        type: 'Synth'
    },
    {
        name: 'X-TRI 2',
        type: 'Synth'
    },
    {
        name: 'X-SINE 1',
        type: 'Synth'
    },
    {
        name: 'X-SINE 2',
        type: 'Synth'
    },
    {
        name: 'VPM-SAW',
        type: 'Synth'
    },
    {
        name: 'VPM-SQUARE',
        type: 'Synth'
    },
    {
        name: 'VPM-TRI',
        type: 'Synth'
    },
    {
        name: 'VPM-SINE 1',
        type: 'Synth'
    },
    {
        name: 'VPM-SINE 2',
        type: 'Synth'
    },
    {
        name: 'VPM-SINE 3',
        type: 'Synth'
    },
    {
        name: 'VPM-SINE 4',
        type: 'Synth'
    },
    {
        name: 'SYN-SINE 1',
        type: 'Synth'
    },
    {
        name: 'SYN-SINE 2',
        type: 'Synth'
    },
    {
        name: 'SYN-SINE 3',
        type: 'Synth'
    },
    {
        name: 'SYN-SINE 4',
        type: 'Synth'
    },
    {
        name: 'SYN-SINE 5',
        type: 'Synth'
    },
    {
        name: 'SYN-SINE 6',
        type: 'Synth'
    },
    {
        name: 'SYN-SINE 7',
        type: 'Synth'
    },
    {
        name: 'HPF NOISE',
        type: 'Synth'
    },
    {
        name: 'LPF NOISE',
        type: 'Synth'
    },
    {
        name: 'LOFI NOISE',
        type: 'Synth'
    },
    {
        name: 'RES NOISE',
        type: 'Synth'
    },
    {
        name: 'M1 Piano',
        type: 'Instrument'
    },
    {
        name: 'E.P.Roads',
        type: 'Instrument'
    },
    {
        name: 'E.P.Wurly',
        type: 'Instrument'
    },
    {
        name: 'Clav',
        type: 'Instrument'
    },
    {
        name: 'M1 Organ',
        type: 'Instrument'
    },
    {
        name: 'Brass Ens.',
        type: 'Instrument'
    },
    {
        name: 'Tenor Sax',
        type: 'Instrument'
    },
    {
        name: 'Alto Sax',
        type: 'Instrument'
    },
    {
        name: 'Strings Ens.',
        type: 'Instrument'
    },
    {
        name: 'Strings Pizz',
        type: 'Instrument'
    },
    {
        name: 'Vox Pop Ah',
        type: 'Instrument'
    },
    {
        name: 'Vox Pad',
        type: 'Instrument'
    },
    {
        name: 'Vox Helium',
        type: 'Instrument'
    },
    {
        name: 'A.Bass',
        type: 'Instrument'
    },
    {
        name: 'E.Bass Finger',
        type: 'Instrument'
    },
    {
        name: 'E.Bass Pick',
        type: 'Instrument'
    },
    {
        name: 'E.Bass Slap',
        type: 'Instrument'
    },
    {
        name: 'E.Bass Dist.',
        type: 'Instrument'
    },
    {
        name: 'A.Guitar',
        type: 'Instrument'
    },
    {
        name: 'E.Guitar1',
        type: 'Instrument'
    },
    {
        name: 'E.Guitar2',
        type: 'Instrument'
    },
    {
        name: 'Kalimba',
        type: 'Instrument'
    },
    {
        name: 'Metal Bell',
        type: 'Instrument'
    },
    {
        name: 'GamelanWave',
        type: 'Instrument'
    },
    {
        name: 'Bell1',
        type: 'Instrument'
    },
    {
        name: 'Bell2',
        type: 'Instrument'
    },
    {
        name: 'Bell3',
        type: 'Instrument'
    },
    {
        name: 'Bell4',
        type: 'Instrument'
    },
    {
        name: 'Audio In',
        type: 'Audio In'
    }, 
];

},{}],"j0j8B":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseMessage = exports.event = void 0;
var hex_1 = require("./hex");
var pattern_1 = require("./pattern");
exports.event = {
    onPatternData: function(_a) {
        var pattern = _a.pattern, data = _a.data;
    },
    onMidiData: function(_) {
    },
    onError: function(_) {
    },
    onWriteDone: function() {
    }
};
function parseMessage(data) {
    var headerEnd = hex_1.E2_SYSEX_HEADER.length;
    var headers = data.slice(0, headerEnd).toString();
    if (headers === hex_1.E2_SYSEX_HEADER_STR) // See 1-4 SYSTEM EXCLUSIVE MESSAGES
    switch(data[headerEnd]){
        // should move those to hex...
        case 64:
        case 76:
            // console.log('Received pattern', data);
            var pattern = (0, pattern_1.parsePattern)(data);
            exports.event.onPatternData({
                pattern: pattern,
                data: data
            });
            return {
                pattern: pattern
            };
        case 38:
            exports.event.onError({
                data: data,
                type: 'DATA_FORMAT_ERROR'
            });
            return;
        case 34:
            exports.event.onError({
                data: data,
                type: 'WRITE_ERROR'
            });
            return;
        case 36:
            exports.event.onError({
                data: data,
                type: 'DATA_LOAD_ERROR'
            });
            return;
        case 33:
            exports.event.onWriteDone();
            return;
        case 81:
        case 35:
    }
    exports.event.onMidiData({
        data: data
    });
}
exports.parseMessage = parseMessage;

},{"./hex":"98LpD","./pattern":"85eza"}],"98LpD":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateHexE2BinHeader = exports.E2_BIN_HEADER = exports.SYSEX_GET_PATTERN = exports.SYSEX_SEND_CURRENT_PATTERN2 = exports.SYSEX_SEND_CURRENT_PATTERN = exports.SYSEX_GET_CURRENT_PATTERN = exports.E2_SYSEX_HEADER_STR = exports.E2_SYSEX_HEADER = void 0;
exports.E2_SYSEX_HEADER = [
    240,
    66,
    48,
    0,
    1,
    35
]; // 0xf0, 0x42, 0x30, 0, 1, 0x23
exports.E2_SYSEX_HEADER_STR = exports.E2_SYSEX_HEADER.toString();
exports.SYSEX_GET_CURRENT_PATTERN = __spreadArray(__spreadArray([], __read(exports.E2_SYSEX_HEADER), false), [
    16,
    247
], false); // F0,42,30,00,01,23,10,F7
exports.SYSEX_SEND_CURRENT_PATTERN = __spreadArray(__spreadArray([], __read(exports.E2_SYSEX_HEADER), false), [
    64
], false);
exports.SYSEX_SEND_CURRENT_PATTERN2 = __spreadArray(__spreadArray([], __read(exports.E2_SYSEX_HEADER), false), [
    64,
    0
], false);
var SYSEX_GET_PATTERN = function(pos) {
    return __spreadArray(__spreadArray([], __read(exports.E2_SYSEX_HEADER), false), [
        76,
        (pos - 1) % 128,
        pos > 128 ? 1 : 0, 
    ], false);
};
exports.SYSEX_GET_PATTERN = SYSEX_GET_PATTERN;
// Python
// (b'KORG'.ljust(16, b'\x00') + 
//     b'electribe'.ljust(16, b'\x00') +
//     b'\x01\x00\x00\x00'.ljust(224, b'\xff'))
exports.E2_BIN_HEADER = [
    75,
    79,
    82,
    71,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    101,
    108,
    101,
    99,
    116,
    114,
    105,
    98,
    101,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255, 
];
function generateHexE2BinHeader() {
    var ljust = function(arr, len, val) {
        return __spreadArray(__spreadArray([], __read(arr), false), __read(Array(len - arr.length).fill(val)), false);
    };
    var b = function(str) {
        return __spreadArray([], __read(str), false).map(function(c) {
            return c.charCodeAt(0);
        });
    };
    return __spreadArray(__spreadArray(__spreadArray([], __read(ljust(b('KORG'), 16, 0)), false), __read(ljust(b('electribe'), 16, 0)), false), __read(ljust([
        1,
        0,
        0,
        0
    ], 224, 255)), false);
}
exports.generateHexE2BinHeader = generateHexE2BinHeader;

},{}],"85eza":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parsePattern = exports.setName = void 0;
var constant_1 = require("./constant");
var part_1 = require("./part");
function setName(rawData, name) {
    // here we sould replace all none possible char to empty string
    // [A-Za-z0-9 !#$%&'()+,-]
    var data = __spreadArray([], __read(rawData), false);
    for(var i = 0; i < 15; i++){
        var p = 26 + i + (i > 4 ? 1 : 0) + (i > 11 ? 1 : 0);
        data[p] = name.charCodeAt(i) || 32; // 32 = space
    }
    return data;
}
exports.setName = setName;
function parsePattern(rawData) {
    var data = __spreadArray([], __read(rawData), false);
    var name = data.slice(26, 43).filter(function(c, k) {
        return c && k != 13 && k != 5;
    }) // data[39], here 13, is used for tempo ? kind of weird...
    .map(function(c) {
        return String.fromCharCode(c);
    }).join('').trim();
    var pattern = {
        name: name,
        tempo: data[46] + data[48] * 256 + (data[39] ? 128 : 0),
        swing: data[49] > 50 ? data[49] - 128 : data[49],
        length: data[50] + 1,
        beat: constant_1.BEAT[data[51]],
        key: constant_1.KEY[data[52]],
        keyId: data[52],
        scale: constant_1.SCALE[data[53]],
        scaleId: data[53],
        chordSet: data[54] + 1,
        level: 127 - data[56],
        gateArp: data[64] + 1,
        mfx: constant_1.MFX[data[77]],
        mfxId: data[77] + 1,
        alternate13_14: !!data[85],
        alternate15_16: !!data[86],
        chainTo: data[17269] + (data[17263] && 128),
        chainRepeat: data[17272],
        mfxHold: !!data[82],
        // last step is per part?
        // groove is per s
        // ...
        parts: __spreadArray([], __read(Array(16)), false).map(function(_, partId) {
            return (0, part_1.parsePartFromPattern)(data, partId);
        })
    };
    return pattern;
}
exports.parsePattern = parsePattern;

},{"./constant":"1FZLF","./part":"f9q6k"}],"f9q6k":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parsePart = exports.parsePartFromPattern = exports.START_POS = void 0;
var constant_1 = require("./constant");
var osc_1 = require("./osc");
var mod_1 = require("./mod");
var _1 = require(".");
exports.START_POS = [
    2347,
    3280,
    4212,
    5145,
    6077,
    7010,
    7942,
    8875,
    9808,
    10740,
    11673,
    12605,
    13538,
    14470,
    15403,
    16336
];
function parsePartFromPattern(data, partId) {
    var pos = exports.START_POS[partId];
    var partData = data.slice(pos);
    return parsePart(partData, partId);
}
exports.parsePartFromPattern = parsePartFromPattern;
function parsePart(data, partId) {
    var POS_VAR0 = {
        modDepthPos: 21,
        modSpeedPos: 20,
        levelPos: 28,
        ifxOnPos: 37
    };
    var POS_VAR1 = __assign(__assign({
    }, POS_VAR0), {
        oscEditPos: 13,
        filterPos: 14,
        ampEGpos: 30,
        ifxPos: 38,
        panPos: 29
    });
    var POS_VAR2 = {
        glidePos: 44,
        modPos: 20,
        voiceAssignPos: 4
    };
    var POS_VAR3 = __assign(__assign({
    }, POS_VAR2), {
        pitchPos: 43,
        egInt: 19,
        oscPos: 11
    });
    var POS_VAR4 = {
        modSpeedPos: 20,
        levelPos: 28
    };
    var POS_VAR5 = __assign(__assign({
    }, POS_VAR3), {
        resPos: 18,
        decayReleasePos: 26,
        lastStepPos: 2
    });
    var POS_VAR6 = __assign(__assign({
    }, POS_VAR0), {
        oscEditPos: 13,
        panPos: 29
    });
    var POS_VAR = [
        {
        },
        POS_VAR1,
        POS_VAR2,
        POS_VAR6,
        POS_VAR3,
        POS_VAR4,
        POS_VAR5,
        {
        },
        POS_VAR1,
        POS_VAR2,
        POS_VAR6,
        POS_VAR3,
        __assign(__assign({
        }, POS_VAR4), {
            modDepthPos: 22
        }),
        POS_VAR5,
        {
        },
        POS_VAR1
    ];
    var WEIRD_OSC_POS = [
        [
            32,
            -6,
            1
        ],
        [
            4,
            -3,
            1
        ],
        [
            64,
            -7,
            2
        ],
        [
            8,
            -4,
            1
        ],
        [
            1,
            -1,
            1
        ],
        [
            16,
            -5,
            1
        ],
        [
            2,
            -2,
            1
        ], 
    ];
    var _a = __read(WEIRD_OSC_POS[partId % 7], 3), weirdoA = _a[1], weirdoB = _a[2];
    var _b = POS_VAR[partId], _c = _b.oscPos, oscPos = _c === void 0 ? 10 : _c, _d = _b.oscEditPos, oscEditPos = _d === void 0 ? 14 : _d, _e = _b.modPos, modPos = _e === void 0 ? 19 : _e, _f = _b.modDepthPos, modDepthPos = _f === void 0 ? 22 : _f, _g = _b.modSpeedPos, modSpeedPos = _g === void 0 ? 21 : _g, _h = _b.levelPos, levelPos = _h === void 0 ? 29 : _h, _j = _b.ifxOnPos, ifxOnPos = _j === void 0 ? 38 : _j, _k = _b.ifxPos, ifxPos = _k === void 0 ? 39 : _k, _l = _b.ifxEditPos, ifxEditPos = _l === void 0 ? 40 : _l, _m = _b.filterPos, filterPos = _m === void 0 ? 15 : _m, _o = _b.ampEGpos, ampEGpos = _o === void 0 ? 31 : _o, _p = _b.glidePos, glidePos = _p === void 0 ? 43 : _p, _q = _b.pitchPos, pitchPos = _q === void 0 ? 42 : _q, _r = _b.egInt, egInt = _r === void 0 ? 18 : _r, _s = _b.resPos, resPos = _s === void 0 ? 17 : _s, _t = _b.decayReleasePos, decayReleasePos = _t === void 0 ? 25 : _t, _u = _b.panPos, panPos = _u === void 0 ? 30 : _u, _v = _b.lastStepPos, lastStepPos = _v === void 0 ? 1 : _v, _w = _b.voiceAssignPos, voiceAssignPos = _w === void 0 ? 3 : _w, _x = _b.partPriorityPos, partPriorityPos = _x === void 0 ? 8 : _x, _y = _b.cutoffPos, cutoffPos = _y === void 0 ? 16 : _y, _z = _b.attackPos, attackPos = _z === void 0 ? 24 : _z, _0 = _b.mfxSendPos, mfxSendPos = _0 === void 0 ? 32 : _0;
    var oscId = data[oscPos] + (data[oscPos + weirdoA] && 128) + (data[oscPos + weirdoB] && 256);
    var part = {
        name: "part ".concat(partId + 1),
        settings: {
            mfxSend: !!data[mfxSendPos],
            lastStep: data[lastStepPos] || 16,
            voiceAssign: _1.VOICE[data[voiceAssignPos]],
            partPriority: data[partPriorityPos] ? 'High' : 'Normal'
        },
        oscillator: {
            id: oscId + 1,
            name: osc_1.OSC[oscId],
            edit: data[oscEditPos],
            pitch: data[pitchPos] > 64 ? data[pitchPos] - 128 : data[pitchPos],
            glide: data[glidePos]
        },
        filter: {
            id: data[filterPos],
            name: constant_1.FILTER[data[filterPos]],
            cutoff: data[cutoffPos],
            resonance: data[resPos],
            egInt: data[egInt] > 64 ? data[egInt] - 128 : data[egInt]
        },
        modulation: {
            id: data[modPos] + 1,
            name: mod_1.MOD[data[modPos]],
            speed: data[modSpeedPos],
            depth: data[modDepthPos]
        },
        envelope: {
            ampEG: !!data[ampEGpos],
            level: data[levelPos],
            pan: data[panPos] === 0 ? 'center' : data[panPos] > 64 ? "L ".concat(data[panPos] * -1 + 128) : "R ".concat(data[panPos]),
            attack: data[attackPos],
            decayRelease: data[decayReleasePos]
        },
        effect: {
            id: data[ifxPos] + 1,
            name: constant_1.IFX[data[ifxPos]],
            on: !!data[ifxOnPos],
            edit: data[ifxEditPos]
        }
    };
    return part;
}
exports.parsePart = parsePart;

},{"./constant":"1FZLF","./osc":"4Uasb","./mod":"gIlIH",".":"6gcYi"}],"3u6xs":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pat2sysConvert = exports.pat2sys = exports.sys2patConvert = exports.sys2pat = exports.checkDiff = void 0;
var hex_1 = require("./hex");
// see https://github.com/bangcorrupt/e2-scripts
// too lazy to implement unit test
// const res = sys2pat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
// console.log(res, res.toString() === [130, 3, 4, 5, 6, 7, 8, 138, 11, 12, 141, 14, 15, 16].toString());
// const test = [...Array(10008)].map(e=>~~(Math.random()*127));
// const test = [...(<any>Array(102).keys())];
// const res = pat2sysConvert(sys2patConvert([...test]));
// checkDiff(test, res);
// to compare results
// cmp -l 091_Basement3.e2pat  hello.e2pat
function checkDiff(data, result, onlyDiff) {
    if (onlyDiff === void 0) onlyDiff = false;
    var diffCount = 0;
    data.forEach(function(value, i) {
        var diff = value !== result[i];
        diff && diffCount++;
        (!onlyDiff || diff && diffCount < 100) && console.log(i % 8, value, result[i], diff ? "<<<<< (".concat(i, ")") : '');
    });
    console.log({
        diffCount: diffCount,
        dataLen: data.length
    });
}
exports.checkDiff = checkDiff;
function sys2pat(data) {
    var trimmedData = data.slice(hex_1.SYSEX_SEND_CURRENT_PATTERN.length, -1);
    var converted = sys2patConvert(trimmedData);
    return __spreadArray(__spreadArray([], __read(hex_1.E2_BIN_HEADER), false), __read(converted), false);
}
exports.sys2pat = sys2pat;
function sys2patConvert(data) {
    var chunks = chunk(data, 8);
    return chunks.flatMap(function(_a) {
        var _b = __read(_a), first = _b[0], values = _b.slice(1);
        return values.map(function(a, i) {
            return a | (first & 1 << i) >> i << 7;
        });
    });
}
exports.sys2patConvert = sys2patConvert;
function pat2sys(data) {
    var trimmedData = data.slice(hex_1.E2_BIN_HEADER.length);
    var converted = pat2sysConvert(trimmedData);
    return __spreadArray(__spreadArray(__spreadArray([], __read(hex_1.SYSEX_SEND_CURRENT_PATTERN), false), __read(converted), false), [
        247
    ], false);
}
exports.pat2sys = pat2sys;
function pat2sysConvert(data) {
    var chunks = chunk(data, 7);
    return chunks.flatMap(function(values) {
        var first = 0;
        var rest = values.map(function(a, i) {
            first |= (a & 128) >> 7 - i; // 128 = 1 << 7 = Math.pow(2, 7) = 2*2*2*2*2*2*2
            return a & -129;
        });
        return __spreadArray([
            first
        ], __read(rest), false);
    });
}
exports.pat2sysConvert = pat2sysConvert;
function chunk(data, chunkSize) {
    var res = [];
    while(data.length > 0){
        var chunk_1 = data.splice(0, chunkSize);
        res.push(chunk_1);
    }
    return res;
}

},{"./hex":"98LpD"}],"4c0m4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "elSel", ()=>elSel
);
// export function evNumVal(fn: (val: number) => void) {
//     return evStrVal((val) => fn(Number(val)));
// }
parcelHelpers.export(exports, "evStrVal", ()=>evStrVal
);
parcelHelpers.export(exports, "evEach", ()=>evEach
);
// export function applyToChild(
//     parent: HTMLElement,
//     fn: (el: HTMLElement, index?: number) => void,
// ) {
//     return parent.childNodes.forEach((el, index) =>
//         fn(el as HTMLElement, index),
//     );
// }
// export function toggleChildClass(parent: HTMLElement, classname: string) {
//     return applyToChild(parent, (el) => el.classList.toggle(classname));
// }
// export function addChildClass(parent: HTMLElement, classname: string) {
//     return applyToChild(parent, (el) => el.classList.add(classname));
// }
// export function removeChildClass(parent: HTMLElement, classname: string) {
//     return applyToChild(parent, (el) => el.classList.remove(classname));
// }
// export function toggleSiblingClass(el: HTMLElement, classname: string) {
//     if (el.classList.contains(classname)) {
//         addChildClass(el.parentElement, classname);
//         el.classList.remove(classname);
//     } else {
//         removeChildClass(el.parentElement, classname);
//         el.classList.add(classname);
//     }
// }
// export function setClass(el: HTMLElement, classname: string, value: boolean) {
//     if (value) {
//         el.classList.add(classname);
//     } else {
//         el.classList.remove(classname);
//     }
// }
// export function toggleAttr(
//     el: HTMLElement,
//     name: string,
//     val1: string,
//     val2: string,
// ) {
//     if (el.getAttribute(name) === val1) {
//         el.setAttribute(name, val2);
//     } else {
//         el.setAttribute(name, val1);
//     }
// }
parcelHelpers.export(exports, "forEachEl", ()=>forEachEl
);
parcelHelpers.export(exports, "forEachClass", ()=>forEachClass
);
parcelHelpers.export(exports, "inputById", ()=>inputById
);
parcelHelpers.export(exports, "elById", ()=>elById
);
parcelHelpers.export(exports, "elByClass", ()=>elByClass
) // export function elFromHtml(html: string) {
 //     var template = document.createElement('template');
 //     template.innerHTML = html.trim();
 //     return template.content.firstChild as HTMLElement;
 // }
 // export function join(classnames: string[]) {
 //     return classnames.filter((f) => f).join(' ');
 // }
;
var _dom = require("./dom");
window.$ = _dom;
function elSel(selector) {
    return document.querySelectorAll(selector);
}
function evStrVal(fn) {
    return ({ target  })=>{
        fn(target.value);
    };
}
function evEach(elements, type, listener) {
    [
        ...elements
    ].forEach((el)=>el.addEventListener(type, listener)
    );
}
function forEachEl(elements, fn) {
    // this could be forEachEl
    Array.from(elements).forEach((el, index)=>fn(el, index)
    );
}
function forEachClass(classname, fn) {
    forEachEl(elByClass(classname), fn);
}
function inputById(id) {
    return elById(id);
}
function elById(id) {
    return document.getElementById(id);
}
function elByClass(classname) {
    return document.getElementsByClassName(classname);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./dom":"4c0m4"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"falTm":[function(require,module,exports) {
var _dom = require("./dom");
var _gitHubStorage = require("./storage/GitHubStorage");
var _localStorage = require("./storage/localStorage");
_dom.elById('githubUser').onchange = _dom.evStrVal(_localStorage.storeGithubUser);
_dom.inputById('githubUser').value = _localStorage.getGithubUser();
_dom.elById('githubRepo').onchange = _dom.evStrVal(_localStorage.storeGithubRepo);
_dom.inputById('githubRepo').value = _localStorage.getGithubRepo();
_dom.elById('githubToken').onchange = _dom.evStrVal(_localStorage.storeGithubToken);
_dom.inputById('githubToken').value = _localStorage.getGithubToken();
_gitHubStorage.gitHubStorage.info().then((info)=>_dom.elById('githubInfo').innerText = info
);

},{"./dom":"4c0m4","./storage/GitHubStorage":"drxmx","./storage/localStorage":"4zXFG"}],"drxmx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ERR", ()=>ERR
);
parcelHelpers.export(exports, "GitHubStorage", ()=>GitHubStorage
);
parcelHelpers.export(exports, "gitHubStorage", ()=>gitHubStorage
);
// might want to use import { Octokit } from '@octokit/core';
var _localStorage = require("./localStorage");
var Buffer = require("buffer").Buffer;
const BASE_URL = 'https://api.github.com';
const COMMIT_PREFIX = '[GitZic]';
let ERR;
(function(ERR1) {
    ERR1["missingGitHubConfig"] = 'Please authenticate to use GitHub api';
})(ERR || (ERR = {
}));
class GitHubStorage {
    async readdir(path) {
        try {
            const data = await this.getContents(path);
            return data.map(({ name  })=>name
            ); // type is also available so we could filter for type === 'file'
        } catch (error) {
            if (error?.response?.status === 404) return [];
            throw error;
        }
    }
    async read(path) {
        const { content  } = await this.getContents(path);
        return Buffer.from(content, 'base64');
    }
    async saveFile(file, content) {
        if (!this.repo) throw new Error('GitHub repository required.');
        const sha = await this.getSha(file);
        const body = JSON.stringify({
            message: `${COMMIT_PREFIX} save file`,
            content: Buffer.from(content).toString('base64'),
            ...sha && {
                sha
            }
        });
        return this.fetch(`${this.contentsUrl}/${file}`, {
            method: 'PUT',
            body
        });
    }
    async getSha(file) {
        try {
            const { sha  } = await this.getContents(file);
            return sha;
        } catch (error) {
            if (error?.response?.status !== 404) throw error;
        }
    }
    async repos() {
        const data = await this.fetch(`${BASE_URL}/users/${this.user}/repos?sort=updated&per_page=1000`);
        return data.map(({ name  })=>name
        );
    }
    async getRepo() {
        return this.repo;
    }
    async info() {
        const { rate: { limit , remaining  } ,  } = await this.fetch(`${BASE_URL}/rate_limit`);
        return `For GitHub API requests, you can make up to 5000 requests per hour.
        Your current rate limit is: ${remaining} of ${limit}`;
    }
    async fetch(url, config) {
        if (!this.token || !this.user) throw new Error(ERR.missingGitHubConfig);
        const res = await fetch(url, {
            ...config,
            headers: {
                ...config?.headers,
                Authorization: `token ${this.token}`
            }
        });
        return res.json();
    }
    getContents(path) {
        return this.fetch(`${this.contentsUrl}/${path}`);
    }
    get baseRepo() {
        return `${BASE_URL}/repos/${this.user}/${this.repo}`;
    }
    get contentsUrl() {
        return `${this.baseRepo}/contents`;
    }
    get user() {
        return _localStorage.getGithubUser();
    }
    get token() {
        return _localStorage.getGithubToken();
    }
    get repo() {
        return _localStorage.getGithubRepo();
    }
}
const gitHubStorage = new GitHubStorage();

},{"./localStorage":"4zXFG","buffer":"fCgem","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4zXFG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getGithubUser", ()=>getGithubUser
);
parcelHelpers.export(exports, "getGithubRepo", ()=>getGithubRepo
);
parcelHelpers.export(exports, "getGithubToken", ()=>getGithubToken
);
parcelHelpers.export(exports, "storeGithubUser", ()=>storeGithubUser
);
parcelHelpers.export(exports, "storeGithubRepo", ()=>storeGithubRepo
);
parcelHelpers.export(exports, "storeGithubToken", ()=>storeGithubToken
);
let githubStorageKeys;
(function(githubStorageKeys1) {
    githubStorageKeys1["githubUser"] = "githubUser";
    githubStorageKeys1["githubToken"] = "githubToken";
    githubStorageKeys1["githubRepo"] = "githubRepo";
})(githubStorageKeys || (githubStorageKeys = {
}));
function store(key, value) {
    window.localStorage.setItem(key, value);
}
function get(key) {
    return window.localStorage.getItem(key);
}
function getGithubUser() {
    return get(githubStorageKeys.githubUser) || '';
}
function getGithubRepo() {
    return get(githubStorageKeys.githubRepo) || '';
}
function getGithubToken() {
    return get(githubStorageKeys.githubToken) || '';
}
function storeGithubUser(val) {
    store(githubStorageKeys.githubUser, val);
}
function storeGithubRepo(val) {
    store(githubStorageKeys.githubRepo, val);
}
function storeGithubToken(val) {
    store(githubStorageKeys.githubToken, val);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fCgem":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
const base64 = require('base64-js');
const ieee754 = require('ieee754');
const customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 2147483647;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return utf8Slice(this, start, end);
        case 'ascii':
            return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return latin1Slice(this, start, end);
        case 'base64':
            return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = '';
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 2147483647) byteOffset = 2147483647;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 255 // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i1;
    if (dir) {
        let foundIndex = -1;
        for(i1 = byteOffset; i1 < arrLength; i1++)if (read(arr, i1) === read(val, foundIndex === -1 ? 0 : i1 - foundIndex)) {
            if (foundIndex === -1) foundIndex = i1;
            if (i1 - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i1 -= i1 - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i1 = byteOffset; i1 >= 0; i1--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i1 + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i1;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 128) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 192) === 128) {
                        tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                        if (tempCodePoint > 127) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                        if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                        if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 65533;
            bytesPerSequence = 1;
        } else if (codePoint > 65535) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = '';
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 127);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = '';
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength1 && (mul *= 256))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength2, this.length);
    let val = this[offset + --byteLength2];
    let mul = 1;
    while(byteLength2 > 0 && (mul *= 256))val += this[offset + --byteLength2] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 65536 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 65536 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength3, noAssert) {
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength3, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength3 && (mul *= 256))val += this[offset + i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength3);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength4, noAssert) {
    offset = offset >>> 0;
    byteLength4 = byteLength4 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength4, this.length);
    let i = byteLength4;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 256))val += this[offset + --i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength4);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 128)) return this[offset];
    return (255 - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 65536 + (last << 24) // Overflow
    ;
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 65536 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + this[++offset] * 65536 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength5, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength5 = byteLength5 >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength5) - 1;
        checkInt(this, value, offset, byteLength5, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 255;
    while(++i < byteLength5 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength5;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength6, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength6 = byteLength6 >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength6) - 1;
        checkInt(this, value, offset, byteLength6, maxBytes, 0);
    }
    let i = byteLength6 - 1;
    let mul = 1;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength6;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength7, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength7 - 1);
        checkInt(this, value, offset, byteLength7, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 255;
    while(++i < byteLength7 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength7;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength8, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength8 - 1);
        checkInt(this, value, offset, byteLength8, limit - 1, -limit);
    }
    let i = byteLength8 - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength8;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
    if (value < 0) value = 255 + value + 1;
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    if (value < 0) value = 4294967295 + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {
};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, 'message', {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, 'code', {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E('ERR_BUFFER_OUT_OF_BOUNDS', function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return 'Attempt to access memory outside buffer bounds';
}, RangeError);
E('ERR_INVALID_ARG_TYPE', function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E('ERR_OUT_OF_RANGE', function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === 'bigint') {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += 'n';
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = '';
    let i = val.length;
    const start = val[0] === '-' ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength9) {
    validateNumber(offset, 'offset');
    if (buf[offset] === undefined || buf[offset + byteLength9] === undefined) boundsError(offset, buf.length - (byteLength9 + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength10) {
    if (value > max || value < min) {
        const n = typeof min === 'bigint' ? 'n' : '';
        let range;
        if (byteLength10 > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength10 + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength10 + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength10 + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE('value', range, value);
    }
    checkBounds(buf, offset, byteLength10);
}
function validateNumber(value, name) {
    if (typeof value !== 'number') throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 55295 && codePoint < 57344) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 56319) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 56320) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 255);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = '0123456789abcdef';
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error('BigInt not supported');
}

},{"base64-js":"eIiSV","ieee754":"cO95r"}],"eIiSV":[function(require,module,exports) {
'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len1 = b64.length;
    if (len1 % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len1;
    var placeHoldersLen = validLen === len1 ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i1;
    for(i1 = 0; i1 < len2; i1 += 4){
        tmp = revLookup[b64.charCodeAt(i1)] << 18 | revLookup[b64.charCodeAt(i1 + 1)] << 12 | revLookup[b64.charCodeAt(i1 + 2)] << 6 | revLookup[b64.charCodeAt(i1 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i1)] << 2 | revLookup[b64.charCodeAt(i1 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i1)] << 10 | revLookup[b64.charCodeAt(i1 + 1)] << 4 | revLookup[b64.charCodeAt(i1 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i2 = start; i2 < end; i2 += 3){
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len3 = uint8.length;
    var extraBytes = len3 % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i3 = 0, len2 = len3 - extraBytes; i3 < len2; i3 += maxChunkLength)parts.push(encodeChunk(uint8, i3, i3 + maxChunkLength > len2 ? len2 : i3 + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len3 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len3 - 2] << 8) + uint8[len3 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + '=');
    }
    return parts.join('');
}

},{}],"cO95r":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"2r2Y2":[function(require,module,exports) {
const eleLog = document.getElementById('log');
if (new URLSearchParams(window.location.search).get('log') !== null) eleLog.style.display = 'block';
rewireLoggingToElement();
function rewireLoggingToElement() {
    fixLoggingFunc('log');
    fixLoggingFunc('debug');
    fixLoggingFunc('warn');
    fixLoggingFunc('error');
    fixLoggingFunc('info');
    function fixLoggingFunc(name) {
        console['old' + name] = console[name];
        console[name] = function(...params) {
            const output = produceOutput(name, params);
            eleLog.innerHTML += output + '<br>';
            console['old' + name].apply(undefined, params);
        };
    }
    function produceOutput(name, args) {
        return args.reduce((output, arg)=>{
            return output + '<span class="log-' + typeof arg + ' log-' + name + '">' + (typeof arg === 'object' ? JSON.stringify(arg) : arg) + '</span>&nbsp;';
        }, '');
    }
}

},{}]},["8wcER","h7u1C"], "h7u1C", "parcelRequire4c4a")

//# sourceMappingURL=index.b71e74eb.js.map
