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
    // for testing purpose
    window.midi = midi;
    window.midiOutput = midiOutput;
    if (!midiInput || !midiOutput) alert('Could not find electribe 2, check if device is properly connect.');
    else {
        midiInput.onmidimessage = onMIDIMessage;
        document.getElementById('input').innerHTML = midiInput.name;
        document.getElementById('output').innerHTML = midiOutput.name;
        queryCurrentPattern();
    }
}
function queryCurrentPattern() {
    midiOutput.send([
        240,
        66,
        48,
        0,
        1,
        35,
        16,
        247
    ]);
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
_electribeCore.event.onPatternData = ({ pattern: { name , tempo , beat , length , part , ...pattern } , data ,  })=>{
    // For testing purpose
    // https://webaudio.github.io/web-midi-api/#midioutput-interface
    // midiOutput.send(lastPatternData)
    // unfortunately, it is too big and doesnt work for the moment
    // https://github.com/WebAudio/web-midi-api/issues/158
    window.lastPatternData = data;
    document.getElementById('test').onclick = ()=>{
        alert('try to send pattern');
        midiOutput.send(data);
        alert('Pattern sent');
    };
    console.log({
        pattern,
        part
    });
    document.getElementById('pattern-name').innerText = name;
    document.getElementById('pattern-tempo').innerHTML = renderPatternTempo(tempo, beat, length);
    document.getElementById('pattern-detail').innerHTML = renderDetails(pattern);
    document.getElementById('parts').innerHTML = part.map(renderPart).join('');
};
document.getElementById('pattern-tempo').onclick = ()=>{
    const display = document.getElementById('pattern-detail').style.display;
    document.getElementById('pattern-detail').style.display = display === 'block' ? 'none' : 'block';
};
function renderPart({ name , oscillator , filter , modulation , effect , envelope , ...rest }) {
    return html`
        <div class="part">
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
                    ${renderDetails(oscillator)}
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
                        Modulation
                        <span
                            title="${modulation.name.source} to ${modulation.name.destination} (bpmSync: ${modulation.name.bpmSync} keySync: ${modulation.name.keySync})"
                            >${modulation.name.name} ⓘ</span
                        >
                    </h4>
                    ${renderDetails(modulation)}
                </div>
                <div class="effect">
                    <h4>Effect <span>${effect.name}</span></h4>
                    ${renderDetails(effect)}
                </div>
                <div class="envelope">
                    <h4>Envelope</h4>
                    ${renderDetails(envelope)}
                </div>
                <div class="setting">
                    <h4>Setting</h4>
                    ${renderDetails(rest)}
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
    return html`<div><span>${key}</span>: <span>${value}</span></div>`;
}

},{"electribe-core":"6gcYi"}],"6gcYi":[function(require,module,exports) {
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
__exportStar(require("./constant"), exports);
__exportStar(require("./mod"), exports);
__exportStar(require("./osc"), exports);
__exportStar(require("./electribe"), exports);

},{"./constant":"1FZLF","./mod":"gIlIH","./osc":"4Uasb","./electribe":"j0j8B"}],"1FZLF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IFX = exports.FILTER = exports.SCALE = exports.KEY = exports.MFX = exports.BEAT = exports.ELECTRIBE2_SYSEX_HEADER = void 0;
exports.ELECTRIBE2_SYSEX_HEADER = '240,66,48,0,1,35'; // 0xf0, 0x42, 0x30, 0, 1, 0x23
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
exports.parsePattern = exports.parseMessage = exports.event = void 0;
var constant_1 = require("./constant");
var osc_1 = require("./osc");
var mod_1 = require("./mod");
var _1 = require(".");
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
    var headers = data.slice(0, 6).toString();
    if (headers === _1.ELECTRIBE2_SYSEX_HEADER) // See 1-4 SYSTEM EXCLUSIVE MESSAGES
    switch(data[6]){
        case 64:
        case 76:
            // console.log('Received pattern', data);
            var pattern = parsePattern(data);
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
function parsePattern(rawData) {
    var data = __spreadArray([], __read(rawData), false);
    var name = data.slice(26, 43).filter(function(c, k) {
        return c && k != 13;
    }) // data[39], here 13, is used for tempo ? kind of weird...
    .map(function(c) {
        return String.fromCharCode(c);
    }).join('');
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
        part: __spreadArray([], __read(Array(16)), false).map(function(_, partId) {
            return parsePart(data, partId);
        })
    };
    return pattern;
}
exports.parsePattern = parsePattern;
function parsePart(data, partId) {
    // part2 many stuff wrong
    // part4
    var POS_VAR0 = {
        modDepthPos: 8,
        modSpeedPos: 7,
        levelPos: 15,
        ifxOnPos: 24
    };
    var POS_VAR1 = __assign(__assign({
    }, POS_VAR0), {
        oscEditPos: 0,
        filterPos: 1,
        ampEGpos: 17,
        ifxPos: 25,
        panPos: 16
    });
    var POS_VAR2 = {
        glidePos: 31,
        modPos: 7
    };
    var POS_VAR3 = __assign(__assign({
    }, POS_VAR2), {
        pitchPos: 30,
        egInt: 6
    });
    var POS_VAR4 = {
        modSpeedPos: 7,
        levelPos: 15
    };
    var POS_VAR5 = __assign(__assign({
    }, POS_VAR3), {
        resPos: 5,
        decayReleasePos: 13
    });
    var POS_VAR6 = __assign(__assign({
    }, POS_VAR0), {
        oscEditPos: 0,
        panPos: 16
    });
    var START_POS = [
        [
            2357,
            2360,
            {
            }
        ],
        [
            3290,
            3293,
            POS_VAR1
        ],
        [
            4222,
            4225,
            POS_VAR2
        ],
        [
            5155,
            5158,
            POS_VAR6
        ],
        [
            6088,
            6090,
            POS_VAR3
        ],
        [
            7020,
            7023,
            POS_VAR4
        ],
        [
            7953,
            7955,
            POS_VAR5
        ],
        [
            8885,
            8888,
            {
            }
        ],
        [
            9818,
            9821,
            POS_VAR1
        ],
        [
            10750,
            10753,
            POS_VAR2
        ],
        [
            11683,
            11686,
            POS_VAR6
        ],
        [
            12616,
            12618,
            POS_VAR3
        ],
        [
            13548,
            13551,
            __assign(__assign({
            }, POS_VAR4), {
                modDepthPos: 9
            })
        ],
        [
            14481,
            14483,
            POS_VAR5
        ],
        [
            15413,
            15416,
            {
            }
        ],
        [
            16346,
            16349,
            POS_VAR1
        ]
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
    var _b = __read(START_POS[partId], 3), oscPos = _b[0], pos = _b[1], _c = _b[2], _d = _c.oscEditPos, oscEditPos = _d === void 0 ? 1 : _d, _e = _c.modPos, modPos = _e === void 0 ? 6 : _e, _f = _c.modDepthPos, modDepthPos = _f === void 0 ? 9 : _f, _g = _c.modSpeedPos, modSpeedPos = _g === void 0 ? 8 : _g, _h = _c.levelPos, levelPos = _h === void 0 ? 16 : _h, _j = _c.ifxOnPos, ifxOnPos = _j === void 0 ? 25 : _j, _k = _c.ifxPos, ifxPos = _k === void 0 ? 26 : _k, _l = _c.ifxEditPos, ifxEditPos = _l === void 0 ? 27 : _l, _m = _c.filterPos, filterPos = _m === void 0 ? 2 : _m, _o = _c.ampEGpos, ampEGpos = _o === void 0 ? 18 : _o, _p = _c.glidePos, glidePos = _p === void 0 ? 30 : _p, _q = _c.pitchPos, pitchPos = _q === void 0 ? 29 : _q, _r = _c.egInt, egInt = _r === void 0 ? 5 : _r, _s = _c.resPos, resPos = _s === void 0 ? 4 : _s, _t = _c.decayReleasePos, decayReleasePos = _t === void 0 ? 12 : _t, _u = _c.panPos, panPos = _u === void 0 ? 17 : _u;
    // console.log('part', partId, ':', pos + modPos);
    var oscId = data[oscPos] + (data[oscPos + weirdoA] && 128) + (data[oscPos + weirdoB] && 256);
    var part = {
        name: "part ".concat(partId + 1),
        oscillator: {
            id: oscId + 1,
            name: osc_1.OSC[oscId],
            edit: data[pos + oscEditPos],
            pitch: data[pos + pitchPos] > 64 ? data[pos + pitchPos] - 128 : data[pos + pitchPos],
            glide: data[pos + glidePos]
        },
        filter: {
            id: data[pos + filterPos],
            name: constant_1.FILTER[data[pos + filterPos]],
            cutoff: data[pos + 3],
            resonance: data[pos + resPos],
            egInt: data[pos + egInt] > 64 ? data[pos + egInt] - 128 : data[pos + egInt]
        },
        modulation: {
            id: data[pos + modPos] + 1,
            name: mod_1.MOD[data[pos + modPos]],
            speed: data[pos + modSpeedPos],
            depth: data[pos + modDepthPos]
        },
        mfxSend: !!data[pos + 19],
        envelope: {
            ampEG: !!data[pos + ampEGpos],
            level: data[pos + levelPos],
            pan: data[pos + panPos] === 0 ? 'center' : data[pos + panPos] > 64 ? "L ".concat(data[pos + panPos] * -1 + 128) : "R ".concat(data[pos + panPos]),
            attack: data[pos + 11],
            decayRelease: data[pos + decayReleasePos]
        },
        effect: {
            id: data[pos + ifxPos] + 1,
            name: constant_1.IFX[data[pos + ifxPos]],
            on: !!data[pos + ifxOnPos],
            edit: data[pos + ifxEditPos]
        }
    };
    return part;
}

},{"./constant":"1FZLF","./osc":"4Uasb","./mod":"gIlIH",".":"6gcYi"}]},["8wcER","h7u1C"], "h7u1C", "parcelRequire4c4a")

//# sourceMappingURL=index.b71e74eb.js.map
