webpackHotUpdate("styles",{

/***/ "./css/about/advantages.scss":
/*!***********************************!*\
  !*** ./css/about/advantages.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"advatagesWrapper":"H6UQ1dm8vWVzz9rugBuBi","advatagesItemsWrapper":"_3uJYpF1iq4ZY7CahXuFsii","advatagesItem":"TKJo0-bqkj-BVnQxRxyfr","chevronWrapper":"o1yN3WHLZ-tunp3FJiXS7"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1553334281537");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.662d61b0ff857531751d.hot-update.js.map