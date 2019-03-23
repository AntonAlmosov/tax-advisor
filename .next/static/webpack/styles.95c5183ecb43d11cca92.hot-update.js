webpackHotUpdate("styles",{

/***/ "./css/about/starter.scss":
/*!********************************!*\
  !*** ./css/about/starter.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"starterWrapper":"_3rzkGQo60jCKQOfHYNBi3B","starterChevron":"_2x3qAG7wkCzuqRFRwmCWgh"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1553333020343");
          });
      }
    }
  

/***/ }),

/***/ "./css/starter.scss":
false

})
//# sourceMappingURL=styles.95c5183ecb43d11cca92.hot-update.js.map