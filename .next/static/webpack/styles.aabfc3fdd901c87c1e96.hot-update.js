webpackHotUpdate("styles",{

/***/ "./css/services.scss":
/*!***************************!*\
  !*** ./css/services.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"servicesWrapper":"_3RxGEUf9pb5amGYTziwZTn","servicesLinksWrappers":"gc3IwhZMyqeys3d3kDKJF","chevron":"_3-Wzngr6Z-Fr1sBiXYxEUs"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1553353382797");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.aabfc3fdd901c87c1e96.hot-update.js.map