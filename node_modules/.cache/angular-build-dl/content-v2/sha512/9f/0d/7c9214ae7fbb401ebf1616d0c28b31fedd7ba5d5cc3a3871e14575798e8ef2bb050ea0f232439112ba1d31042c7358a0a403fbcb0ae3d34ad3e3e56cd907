function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<app-nav></app-nav>\r\n\r\n<app-messages></app-messages>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<app-footer></app-footer>\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/add-product-form/add-product-form.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/add-product-form/add-product-form.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminAddProductFormAddProductFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form-wrapper\">\r\n  <form\r\n    class=\"form-signin\"\r\n    [formGroup]=\"addProductForm\"\r\n    autocomplete=\"off\"\r\n    novalidate\r\n  >\r\n    <h3 class=\"h3 mb-3 font-weight-normal\">Ajouter produit</h3>\r\n    <input\r\n      type=\"text\"\r\n      id=\"inputName\"\r\n      class=\"form-control\"\r\n      formControlName=\"name\"\r\n      placeholder=\"Product name\"\r\n      autofocus\r\n    />\r\n\r\n    <input\r\n      type=\"text\"\r\n      id=\"inputPrice\"\r\n      class=\"form-control\"\r\n      formControlName=\"price\"\r\n      placeholder=\"Price\"\r\n      autofocus\r\n    />\r\n\r\n    <select class=\"form-control\" id=\"selectCategory\" formControlName=\"category\">\r\n      <option hidden=\"hidden\">Sélectionner une catégorie</option>\r\n      <option value=\"all\">Toutes</option>\r\n      <option value=\"food\">Alimentaire</option>\r\n      <option value=\"khassida\">Khassida</option>\r\n      <option value=\"clothe\">Habits</option>\r\n    </select>\r\n\r\n    <div\r\n      class=\"uploadfilecontainer\"\r\n      appDragAndDrop\r\n      (click)=\"fileInput.click()\"\r\n      (onFileDropped)=\"uploadFile($event)\"\r\n    >\r\n      <input\r\n        hidden\r\n        type=\"file\"\r\n        #fileInput\r\n        (change)=\"uploadFile($event.target.files)\"\r\n      />\r\n    </div>\r\n    <div class=\"files-list\" *ngIf=\"file\">\r\n      <p>{{ file.name }}</p>\r\n      <button class=\"delete-file\" (click)=\"deleteAttachment()\">\r\n        <i class=\"fa fa-trash\"></i>\r\n      </button>\r\n    </div>\r\n\r\n    <button\r\n      class=\"btn btn-lg btn-primary btn-block\"\r\n      type=\"submit\"\r\n      (click)=\"uploadProduct()\"\r\n    >\r\n      Télécharger produit\r\n    </button>\r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-3\">\r\n  <div class=\"nav-scroller py-1 mb-2 text-center align-items-center\">\r\n    <h2>Administration</h2>\r\n    <div>\r\n      <nav class=\"my-2 my-md-0 mr-md-3 mr-md-auto\">\r\n        <a class=\"p-2 text-dark mr-4\" routerLink=\"/admin/addProduct\"\r\n          >Ajouter produit</a\r\n        >\r\n        <a class=\"p-2 text-dark mr-4\" routerLink=\"/admin/userActivity\"\r\n          >Activité utilisateur</a\r\n        >\r\n        <a class=\"p-2 text-dark mr-4\" routerLink=\"/admin/purchasesHistory\"\r\n          >Dernières commandes</a\r\n        >\r\n      </nav>\r\n      <hr />\r\n    </div>\r\n  </div>\r\n  <div class=\"container w-75\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--<router-outlet></router-outlet>-->\r\n  <!--<div class=\"container-fluid\">-->\r\n  <!--  <div class=\"row\">-->\r\n  <!--      <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4 text-center\">-->\r\n\r\n  <!--      <div class=\"table-responsive\">-->\r\n  <!--        <table class=\"table table-striped table-sm\">-->\r\n  <!--          <thead>-->\r\n  <!--          <tr>-->\r\n  <!--            <th>#</th>-->\r\n  <!--            <th>Header</th>-->\r\n  <!--            <th>Header</th>-->\r\n  <!--            <th>Header</th>-->\r\n  <!--            <th>Header</th>-->\r\n  <!--          </tr>-->\r\n  <!--          </thead>-->\r\n  <!--          <tbody>-->\r\n  <!--          <tr>-->\r\n  <!--            <td>1,001</td>-->\r\n  <!--            <td>Lorem</td>-->\r\n  <!--            <td>ipsum</td>-->\r\n  <!--            <td>dolor</td>-->\r\n  <!--            <td>sit</td>-->\r\n  <!--          </tr>-->\r\n  <!--          <tr>-->\r\n  <!--            <td>1,002</td>-->\r\n  <!--            <td>amet</td>-->\r\n  <!--            <td>consectetur</td>-->\r\n  <!--            <td>adipiscing</td>-->\r\n  <!--            <td>elit</td>-->\r\n  <!--          </tr>-->\r\n  <!--          <tr>-->\r\n  <!--            <td>1,003</td>-->\r\n  <!--            <td>Integer</td>-->\r\n  <!--            <td>nec</td>-->\r\n  <!--            <td>odio</td>-->\r\n  <!--            <td>Praesent</td>-->\r\n  <!--          </tr>-->\r\n  <!--          <tr>-->\r\n  <!--            <td>1,003</td>-->\r\n  <!--            <td>libero</td>-->\r\n  <!--            <td>Sed</td>-->\r\n  <!--            <td>cursus</td>-->\r\n  <!--            <td>ante</td>-->\r\n  <!--          </tr>-->\r\n  <!--          <tr>-->\r\n  <!--            <td>1,004</td>-->\r\n  <!--            <td>dapibus</td>-->\r\n  <!--            <td>diam</td>-->\r\n  <!--            <td>Sed</td>-->\r\n  <!--            <td>nisi</td>-->\r\n  <!--          </tr>-->\r\n  <!--          <tr>-->\r\n  <!--            <td>1,005</td>-->\r\n  <!--            <td>Nulla</td>-->\r\n  <!--            <td>quis</td>-->\r\n  <!--            <td>sem</td>-->\r\n  <!--            <td>at</td>-->\r\n  <!--          </tr>-->\r\n  <!--          <tr>-->\r\n  <!--            <td>1,006</td>-->\r\n  <!--            <td>nibh</td>-->\r\n  <!--            <td>elementum</td>-->\r\n  <!--            <td>imperdiet</td>-->\r\n  <!--            <td>Duis</td>-->\r\n  <!--          </tr>-->\r\n  <!--          <tr>-->\r\n  <!--            <td>1,007</td>-->\r\n  <!--            <td>sagittis</td>-->\r\n  <!--            <td>ipsum</td>-->\r\n  <!--            <td>Praesent</td>-->\r\n  <!--            <td>mauris</td>-->\r\n  <!--          </tr>-->\r\n  <!--          <tr>-->\r\n  <!--            <td>1,008</td>-->\r\n  <!--            <td>Fusce</td>-->\r\n  <!--            <td>nec</td>-->\r\n  <!--            <td>tellus</td>-->\r\n  <!--            <td>sed</td>-->\r\n  <!--          </tr>-->\r\n  <!--          <tr>-->\r\n  <!--            <td>1,009</td>-->\r\n  <!--            <td>augue</td>-->\r\n  <!--            <td>semper</td>-->\r\n  <!--            <td>porta</td>-->\r\n  <!--            <td>Mauris</td>-->\r\n  <!--          </tr>-->\r\n  <!--          <tr>-->\r\n  <!--            <td>1,010</td>-->\r\n  <!--            <td>massa</td>-->\r\n  <!--            <td>Vestibulum</td>-->\r\n  <!--            <td>lacinia</td>-->\r\n  <!--            <td>arcu</td>-->\r\n  <!--          </tr>-->\r\n  <!--          <tr>-->\r\n  <!--            <td>1,011</td>-->\r\n  <!--            <td>eget</td>-->\r\n  <!--            <td>nulla</td>-->\r\n  <!--            <td>Class</td>-->\r\n  <!--            <td>aptent</td>-->\r\n  <!--          </tr>-->\r\n  <!--          <tr>-->\r\n  <!--            <td>1,012</td>-->\r\n  <!--            <td>taciti</td>-->\r\n  <!--            <td>sociosqu</td>-->\r\n  <!--            <td>ad</td>-->\r\n  <!--            <td>litora</td>-->\r\n  <!--          </tr>-->\r\n  <!--          <tr>-->\r\n  <!--            <td>1,013</td>-->\r\n  <!--            <td>torquent</td>-->\r\n  <!--            <td>per</td>-->\r\n  <!--            <td>conubia</td>-->\r\n  <!--            <td>nostra</td>-->\r\n  <!--          </tr>-->\r\n  <!--          <tr>-->\r\n  <!--            <td>1,014</td>-->\r\n  <!--            <td>per</td>-->\r\n  <!--            <td>inceptos</td>-->\r\n  <!--            <td>himenaeos</td>-->\r\n  <!--            <td>Curabitur</td>-->\r\n  <!--          </tr>-->\r\n  <!--          <tr>-->\r\n  <!--            <td>1,015</td>-->\r\n  <!--            <td>sodales</td>-->\r\n  <!--            <td>ligula</td>-->\r\n  <!--            <td>in</td>-->\r\n  <!--            <td>libero</td>-->\r\n  <!--          </tr>-->\r\n  <!--          </tbody>-->\r\n  <!--        </table>-->\r\n  <!--      </div>-->\r\n  <!--    </main>-->\r\n  <!--  </div>-->\r\n  <!--</div>-->\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/purchases-history/purchases-history.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/purchases-history/purchases-history.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminPurchasesHistoryPurchasesHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container text-center\" *ngIf=\"lastPurchases\">\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr class=\"alert-primary\">\r\n        <th>Nom & Prénom</th>\r\n        <th>Email</th>\r\n        <th>Date</th>\r\n        <th>Nombre de commandandes</th>\r\n        <th>Total</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let purchase of lastPurchases\">\r\n        <td>\r\n          {{ purchase.personal.firstName + \" \" + purchase.personal.lastName }}\r\n        </td>\r\n        <td>{{ purchase.personal.email }}</td>\r\n        <td>{{ purchase.purchaseDate | date }}</td>\r\n        <td>{{ purchase.items.length }}</td>\r\n        <td>{{ getTotal(purchase.items) | currency: \"EUR\" }}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/user-activity/user-activity.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/user-activity/user-activity.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminUserActivityUserActivityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container text-center\">\r\n  <div class=\"row mb-4\">\r\n    <div class=\"col-lg-6 offset-lg-3\">\r\n      <form\r\n        [formGroup]=\"searchData\"\r\n        (ngSubmit)=\"search(searchData.value.search)\"\r\n      >\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">\r\n              <i class=\"fas fa-search\"></i>\r\n            </span>\r\n          </div>\r\n          <input\r\n            class=\"form-control\"\r\n            type=\"search\"\r\n            aria-label=\"Search\"\r\n            formControlName=\"search\"\r\n          />\r\n          <div class=\"input-group-append\">\r\n            <button class=\"btn btn-success\" type=\"submit\">\r\n              Chercher utilisateur\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr class=\"alert-primary\">\r\n          <th>Nom & Prénom</th>\r\n          <th>Email</th>\r\n          <th>Dérnière connection</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let activity of usersActivityFiltered\">\r\n          <td>{{ activity[0] }}</td>\r\n          <td>{{ activity[1] }}</td>\r\n          <td>{{ activity[2] }}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"fog-header\" class=\"jumbotron jumbotron-fluid h-75\">\r\n  <div class=\"container text-center\">\r\n    <div class=\"transbox\"></div>\r\n  </div>\r\n</div>\r\n<div class=\"container w-75 text-center\">\r\n  <h1 class=\"cover-heading\">Bienvenue sur Massalk Xeweul web!</h1>\r\n  <p class=\"lead\">\r\n    <a routerLink=\"/shop\" class=\"btn btn-success btn-lg\"\r\n      >Commencez vos achats</a\r\n    >\r\n  </p>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form-wrapper\">\r\n  <form class=\"form-signin\" [formGroup]=\"loginForm\">\r\n    <img class=\"mb-1\" src=\"/assets/images/logo.png\" alt=\"\" width=\"200\" height=\"auto\">\r\n    <h1 class=\"h3 mb-3 font-weight-normal\">Please Login</h1>\r\n\r\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" formControlName=\"email\" autofocus\r\n           [ngClass]=\"getValidationClasses('email')\">\r\n\r\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\"\r\n           [ngClass]=\"getValidationClasses('password')\">\r\n\r\n    <div class=\"custom-checkbox my-3\">\r\n      <label>\r\n        <input type=\"checkbox\" class=\"custom-checkbox mr-2\" value=\"remember-me\" formControlName=\"remember\"> Remember me\r\n      </label>\r\n    </div>\r\n\r\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)=\"login()\">Login</button>\r\n    <a class=\"link\" routerLink='/register'>Not register?</a>\r\n  </form>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/readme/readme.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/readme/readme.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsReadmeReadmeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container  mt-4\">\r\n  <h1 class=\"text-center\">README</h1>\r\n  <hr>\r\n  <h2 class=\"mb-0\">Store Name:</h2>\r\n  <p  class=\"lead\">Green Garden</p>\r\n\r\n  <h2 class=\"mb-0\">What we are selling?</h2>\r\n  <p  class=\"lead\">vegetables, fruits and more...</p>\r\n\r\n  <h2 class=\"mb-0\">Additional Pages:</h2>\r\n  <p  class=\"lead\">Add product page - <mark>http://localhost:4200/admin/addProduct</mark> (you must have admin role)\r\n    This page available only for admins and enable to upload a new product to the server.</p>\r\n\r\n  <p class=\"lead\">Last purchases page - <mark>http://localhost:4200/admin/purchasesHistory</mark>\r\n    This page available only for admins and enable to see the history purchase of all users.</p>\r\n\r\n  <h2 class=\"mb-0\">partner:</h2>\r\n  <p class=\"lead\">Yogev Nissan, 204542047</p>\r\n  <p class=\"lead\" >I was responsible for the front-end server anג Yogev was responsible for the server-side.\r\n  </p>\r\n\r\n  <h2 class=\"mb-0\">routes:</h2>\r\n  <p class=\"lead\">/home</p>\r\n  <p class=\"lead\">/shop</p>\r\n  <p class=\"lead\">/cart</p>\r\n  <p class=\"lead\">/checkout</p>\r\n  <p class=\"lead\">/login</p>\r\n  <p class=\"lead\">/register</p>\r\n  <p class=\"lead\">/admin</p>\r\n  <p class=\"lead\">/admin/addProduct</p>\r\n  <p class=\"lead\">/admin/userActivity</p>\r\n  <p class=\"lead\">/admin/purchasesHistory</p>\r\n\r\n  <h2 class=\"mb-0\">Security:</h2>\r\n  <p class=\"lead\">- The server defended from ddos by ddos npm package</p>\r\n  <p class=\"lead\">- All routes protected by guard auth - that check if the user login</p>\r\n  <p class=\"lead\">- cookies available only via html - meaning protected from JS attacks.</p>\r\n  <p class=\"lead\">- The server side allow origin only for the client host name - no other site can send request to the server</p>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form-wrapper\">\r\n  <form [formGroup]=\"regForm\" class=\"form-signin\" autocomplete=\"off\" novalidate>\r\n    <img class=\"mb-1\" src=\"/assets/images/logo.png\" alt=\"\" width=\"200\" height=\"auto\">\r\n    <h1 class=\"h3 mb-3 font-weight-normal\">Please register</h1>\r\n    <input type=\"text\" id=\"inputFirstName\" class=\"form-control\" placeholder=\"First name\" formControlName=\"firstName\" autofocus\r\n            [ngClass]=\"getValidationClasses('firstName')\">\r\n\r\n\r\n    <input type=\"text\" id=\"inputLastName\" class=\"form-control\" placeholder=\"Last name\" formControlName=\"lastName\" autofocus\r\n           [ngClass]=\"getValidationClasses('lastName')\">\r\n\r\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" formControlName=\"email\" autofocus\r\n           [ngClass]=\"getValidationClasses('email')\">\r\n\r\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\"\r\n           [ngClass]=\"getValidationClasses('password')\">\r\n\r\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)=\"submitForm()\">Register now</button>\r\n    <a class=\"link\" routerLink='/login'>Already register?</a>\r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<hr>\r\n<small>&copy; Yaniv Falik & </small>\r\n<small> Yogev Nissan</small>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header/header.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header/header.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<img src=\"/assets/images/logo.png\">\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/messages/messages.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/messages/messages.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedMessagesMessagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"(message$ | async)\" class=\"container mt-5 text-center\">\r\n  <div class=\"col-10 offset-1 col-md-4 offset-md-4\">\r\n    <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n      {{message$ | async}}\r\n      <button type=\"button\" class=\"close\" (click)=\"clear()\">\r\n        <i class=\"fas fa-times\"></i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/nav/nav.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/nav/nav.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedNavNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark shadow-lg\">\r\n  <span href=\"#\" class=\"massalik-icon\"></span>\r\n  <a class=\"navbar-brand\" href=\"#\">Massalik xeweul</a>\r\n  <button\r\n    class=\"navbar-toggler\"\r\n    type=\"button\"\r\n    data-toggle=\"collapse\"\r\n    data-target=\"#navbarCollapse\"\r\n    aria-controls=\"navbarCollapse\"\r\n    aria-expanded=\"false\"\r\n    aria-label=\"Toggle navigation\"\r\n  >\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/home\"\r\n          ><i class=\"fas fa-home m-2\"></i>Acceuil</a\r\n        >\r\n      </li>\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/shop\"\r\n          ><i class=\"fa fa-tag m-2\" aria-hidden=\"true\"></i>Boutique</a\r\n        >\r\n      </li>\r\n      <li class=\"nav-item active\" *ngIf=\"isAdmin()\">\r\n        <a class=\"nav-link\" routerLink=\"/admin\" aria-disabled=\"true\"\r\n          ><i class=\"fa fa-lock m-2\" aria-hidden=\"true\"></i>Admin</a\r\n        >\r\n      </li>\r\n      <li class=\"nav-item active\">\r\n        <a\r\n          class=\"nav-link\"\r\n          routerLink=\"/admin\"\r\n          aria-disabled=\"true\"\r\n          routerLink=\"/cart\"\r\n          ><i class=\"fa fa-shopping-cart text-white m-2\"></i>Panier\r\n          <span\r\n            *ngIf=\"!(getNumberOfItemsInCart() === 0) && (isLoggedIn() | async)\"\r\n            class=\"badge badge-primary badge-size badge-pill ml-2\"\r\n            >{{ getNumberOfItemsInCart() }}</span\r\n          ></a\r\n        >\r\n      </li>\r\n    </ul>\r\n    <button\r\n      class=\"btn btn-outline-success\"\r\n      routerLink=\"/login\"\r\n      *ngIf=\"!(isLoggedIn() | async)\"\r\n    >\r\n      <i class=\"fa fa-user-circle mr-2\" aria-hidden=\"true\"></i>Se connecter\r\n    </button>\r\n\r\n    <button\r\n      class=\"btn btn-outline-success\"\r\n      (click)=\"logout()\"\r\n      *ngIf=\"isLoggedIn() | async\"\r\n    >\r\n      <i class=\"fa fa-arrow-circle-left mr-2\" aria-hidden=\"true\"></i>Se\r\n      déconnecter\r\n    </button>\r\n  </div>\r\n</nav>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/page-not-found/page-not-found.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/page-not-found/page-not-found.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedPageNotFoundPageNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>page-not-found works!</p>\r\n<a routerLink=\"/\">Back to home page</a>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/cart/cart-item/cart-item.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/cart/cart-item/cart-item.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShoppingCartCartCartItemCartItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <div class=\"p-2\">\r\n        <img\r\n          src=\"{{ this.cartItem.product.image }}\"\r\n          width=\"100px\"\r\n          height=\"70px\"\r\n          class=\"img-fluid rounded shadow-lg\"\r\n        />\r\n        <div class=\"ml-3 d-inline-block align-middle text-center\">\r\n          <span class=\"text-muted font-weight-normal font-italic d-block\">{{\r\n            this.cartItem.product.name\r\n          }}</span>\r\n          <span class=\"text-muted font-weight-normal font-italic d-block\">{{\r\n            this.cartItem.product.price | currency: \"EUR\"\r\n          }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-2 border-0 align-middle text-center my-auto\">\r\n      <strong>{{\r\n        this.cartItem.product.price * this.cartItem.qty | currency: \"EUR\"\r\n      }}</strong>\r\n    </div>\r\n    <div class=\"col-2 border-0 align-middle text-center my-auto\">\r\n      <i class=\"fa fa-minus m-3\" aria-hidden=\"true\" (click)=\"decreaseQty()\"></i>\r\n      <strong>{{ this.cartItem.qty }}</strong>\r\n      <i class=\"fa fa-plus m-3\" aria-hidden=\"true\" (click)=\"increaseQty()\"></i>\r\n    </div>\r\n    <div class=\"col-2 border-0 align-middle text-center my-auto\">\r\n      <i class=\"fa fa-trash\" (click)=\"remove()\"></i>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/cart/cart.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/cart/cart.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShoppingCartCartCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container shadow p-3 my-5 bg-white rounded\">\r\n  <div class=\"px-4 px-lg-0\" *ngIf=\"!((this.cartItems$ | async).length === 0)\">\r\n    <div class=\"pb-1\">\r\n      <div class=\"text-center\">\r\n        <h2>Votre panier</h2>\r\n        <hr />\r\n      </div>\r\n      <div>\r\n        <div *ngFor=\"let item of this.cartItems$ | async; let last = last\">\r\n          <app-cart-item [cartItem]=\"item\"></app-cart-item>\r\n          <hr />\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <button routerLink=\"/checkout\" class=\"btn btn-outline-success btn-lg\">\r\n            {{ this.cartTotal$ | async | currency: \"EUR\" }} - Continue to\r\n            checkout\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"px-4 px-lg-0\" *ngIf=\"(this.cartItems$ | async).length === 0\">\r\n    <div class=\"pb-5\">\r\n      <div class=\"text-center\">\r\n        <h2>There Are No Items In The Cart</h2>\r\n        <img src=\"assets/images/empty-cart.png\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/check-out/cart-summary/cart-summary.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/check-out/cart-summary/cart-summary.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShoppingCartCheckOutCartSummaryCartSummaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h4 class=\"d-flex justify-content-between align-items-center mb-3\">\r\n  <span class=\"text-muted\">Cart Summary</span>\r\n  <span class=\"badge badge-primary badge-pill\">{{this.getNumberOfItems() | async}}</span>\r\n</h4>\r\n<ul class=\"list-group mb-3\">\r\n  <li class=\"list-group-item d-flex justify-content-between lh-condensed\" *ngFor=\"let item of (this.cartItems$ | async);\">\r\n    <div>\r\n      <h4 class=\"my-0 text-muted\">{{item.product.name}}</h4>\r\n      <small class=\"text-muted\">{{(item.product.price | currency: 'ILS') + \" X \" + item.qty}}</small>\r\n    </div>\r\n    <span class=\"text-muted my-auto\">{{item.qty * item.product.price | currency: 'ILS'}}</span>\r\n  </li>\r\n  <li class=\"list-group-item d-flex justify-content-between bg-light\">\r\n    <div class=\"text-success\">\r\n      <h4 class=\"my-0\">Promo code</h4>\r\n      <small>EXAMPLECODE</small>\r\n    </div>\r\n    <span class=\"text-success my-auto\">$0</span>\r\n  </li>\r\n  <li class=\"list-group-item d-flex justify-content-between\">\r\n    <span>Total (ILS)</span>\r\n    <strong>{{(this.cartTotal$ | async) | currency: 'ILS'}}</strong>\r\n  </li>\r\n</ul>\r\n\r\n<form class=\"card p-2\">\r\n  <div class=\"input-group\">\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Promo code\">\r\n    <div class=\"input-group-append\">\r\n      <button type=\"submit\" class=\"btn btn-primary\">Redeem</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/check-out/check-out.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/check-out/check-out.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShoppingCartCheckOutCheckOutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-5\">\r\n  <div class=\"text-center\">\r\n    <h2>Checkout</h2>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 order-md-2 mb-4\">\r\n      <app-cart-summary></app-cart-summary>\r\n    </div>\r\n    <div class=\"col-md-8 order-md-1\">\r\n      <app-checkout-form></app-checkout-form>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/check-out/checkout-form/checkout-form.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/check-out/checkout-form/checkout-form.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShoppingCartCheckOutCheckoutFormCheckoutFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"checkOutForm\" class=\"needs-validation\" novalidate>\r\n  <!--  personal-->\r\n  <h4 class=\"mb-3\">Personal details</h4>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 mb-3\">\r\n      <label for=\"inputFirstName\">First name</label>\r\n      <input type=\"text\" id=\"inputFirstName\" class=\"form-control\" formControlName=\"firstName\" autofocus\r\n             [ngClass]=\"getValidationClasses('firstName')\">\r\n    </div>\r\n    <div class=\"col-md-6 mb-3\">\r\n      <label for=\"inputLastName\">Last name</label>\r\n      <input type=\"text\" id=\"inputLastName\" class=\"form-control\" formControlName=\"lastName\" autofocus\r\n             [ngClass]=\"getValidationClasses('lastName')\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"mb-3\">\r\n    <label for=\"inputEmail\">Email</label>\r\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" formControlName=\"email\" autofocus\r\n           [ngClass]=\"getValidationClasses('email')\">\r\n  </div>\r\n  <hr class=\"mb-4 mt-4\">\r\n\r\n<!--  Address-->\r\n  <div class=\"mb-3\">\r\n    <h4 class=\"mb-3\">Address</h4>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 mb-3\">\r\n        <label for=\"city\">City</label>\r\n        <input type=\"text\" id=\"city\" class=\"form-control\" formControlName=\"city\" autofocus\r\n               [ngClass]=\"getValidationClasses('city')\">\r\n      </div>\r\n      <div class=\"col-md-6 mb-3\">\r\n        <label for=\"street\">Street</label>\r\n        <input type=\"text\" id=\"street\" class=\"form-control\" formControlName=\"street\" autofocus\r\n               [ngClass]=\"getValidationClasses('street')\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 mb-3\">\r\n        <label for=\"home_number\">Home number</label>\r\n        <input type=\"text\" id=\"home_number\" class=\"form-control\" formControlName=\"homeNumber\" autofocus\r\n               [ngClass]=\"getValidationClasses('homeNumber')\">\r\n      </div>\r\n      <div class=\"col-md-6 mb-3\">\r\n        <label for=\"apartment\">Apartment</label>\r\n        <input type=\"text\" id=\"apartment\" class=\"form-control\" formControlName=\"apartment\" autofocus\r\n               [ngClass]=\"getValidationClasses('apartment')\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n<!--  Payment-->\r\n  <hr class=\"mb-4\">\r\n  <h4 class=\"mb-3\">Payment</h4>\r\n\r\n  <div class=\"d-block my-3\">\r\n    <div class=\"custom-control custom-radio\">\r\n      <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked required>\r\n      <label class=\"custom-control-label\" for=\"credit\">Credit card</label>\r\n    </div>\r\n    <div class=\"custom-control custom-radio\">\r\n      <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\r\n      <label class=\"custom-control-label\" for=\"debit\">Debit card</label>\r\n    </div>\r\n    <div class=\"custom-control custom-radio\">\r\n      <input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\r\n      <label class=\"custom-control-label\" for=\"paypal\">PayPal</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 mb-3\">\r\n      <label for=\"cc-name\">Name on card</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required>\r\n      <small class=\"text-muted\">Full name as displayed on card</small>\r\n      <div class=\"invalid-feedback\">\r\n        Name on card is required\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 mb-3\">\r\n      <label for=\"cc-number\">Credit card number</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"cc-number\" placeholder=\"\" required>\r\n      <div class=\"invalid-feedback\">\r\n        Credit card number is required\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 mb-3\">\r\n      <label for=\"cc-expiration\">Expiration</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"\" required>\r\n      <div class=\"invalid-feedback\">\r\n        Expiration date required\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 mb-3\">\r\n      <label for=\"cc-cvv\">CVV</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required>\r\n      <div class=\"invalid-feedback\">\r\n        Security code required\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr class=\"mb-4\">\r\n  <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"submit()\">Confirm and pay</button>\r\n</form>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/check-out/thank-you/thank-you.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/check-out/thank-you/thank-you.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShoppingCartCheckOutThankYouThankYouComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron text-center\">\r\n  <h1 class=\"display-3\">Thank You!</h1>\r\n  <hr>\r\n  <p>\r\n    Having trouble? <a>Contact us</a>\r\n  </p>\r\n  <p class=\"lead\">\r\n    <a class=\"btn btn-primary btn-sm\" href=\"https://bootstrapcreative.com/\" routerLink=\"/shop\">Continue to shop</a>\r\n  </p>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/product-list/product-item/product-item.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/product-list/product-item/product-item.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShoppingCartProductListProductItemProductItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mb-4 shadow-sm\">\r\n  <div class=\"card-img text-center\">\r\n    <img\r\n      class=\"bd-placeholder-img card-img-top p-2 img-responsive mt-3\"\r\n      width=\"100%\"\r\n      [src]=\"productItem.image\"\r\n    />\r\n  </div>\r\n\r\n  <div class=\"card-body text-center\">\r\n    <h3 class=\"card-text\">\r\n      <strong>{{ productItem.name }}</strong>\r\n    </h3>\r\n    <h4 class=\"card-text\">{{ productItem.price | currency: \"EUR\" }}</h4>\r\n    <div class=\"border-0 align-middle text-center\">\r\n      <i\r\n        class=\"fa fa-minus m-3\"\r\n        aria-hidden=\"true\"\r\n        (click)=\"decreaseQuantity()\"\r\n      ></i>\r\n      <strong>{{ quantity }}</strong>\r\n      <i\r\n        class=\"fa fa-plus m-3\"\r\n        aria-hidden=\"true\"\r\n        (click)=\"increaseQuantity()\"\r\n      ></i>\r\n    </div>\r\n  </div>\r\n  <div\r\n    *ngIf=\"!isExistInCart\"\r\n    class=\"card-footer bg-primary text-center text-white\"\r\n    (click)=\"handleAddToCart()\"\r\n    id=\"footerButton\"\r\n  >\r\n    <span\r\n      ><i class=\"fa fa-plus-circle mr-2\" aria-hidden=\"true\"></i>Ajouter</span\r\n    >\r\n  </div>\r\n  <div\r\n    *ngIf=\"isExistInCart\"\r\n    class=\"card-footer bg-success text-center text-white\"\r\n  >\r\n    <span><i class=\"fas fa-check-circle mr-2\"></i>Produit ajouté</span>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/product-list/product-list.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/product-list/product-list.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShoppingCartProductListProductListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section>\r\n  <div class=\"container text-center\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 offset-lg-4\">\r\n        <form\r\n          [formGroup]=\"searchData\"\r\n          (ngSubmit)=\"search(searchData.value.search)\"\r\n        >\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"fas fa-search\"></i>\r\n              </span>\r\n            </div>\r\n            <input\r\n              class=\"form-control\"\r\n              type=\"search\"\r\n              aria-label=\"Search\"\r\n              formControlName=\"search\"\r\n            />\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-success\" type=\"submit\">Chercher</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ul class=\"nav nav-tabs mt-3\" id=\"myTab\" role=\"tablist\">\r\n    <li class=\"nav-item\" role=\"presentation\">\r\n      <a\r\n        class=\"nav-link active\"\r\n        id=\"all-tab\"\r\n        data-toggle=\"tab\"\r\n        role=\"tab\"\r\n        aria-controls=\"home\"\r\n        aria-selected=\"true\"\r\n        (click)=\"changeCategoryFilter(Category.ALL)\"\r\n        >Tous</a\r\n      >\r\n    </li>\r\n    <li class=\"nav-item\" role=\"presentation\">\r\n      <a\r\n        class=\"nav-link\"\r\n        id=\"vegetables-tab\"\r\n        data-toggle=\"tab\"\r\n        role=\"tab\"\r\n        aria-controls=\"profile\"\r\n        aria-selected=\"false\"\r\n        (click)=\"changeCategoryFilter(Category.FOOD)\"\r\n        >Alimentaire</a\r\n      >\r\n    </li>\r\n    <li class=\"nav-item\" role=\"presentation\">\r\n      <a\r\n        class=\"nav-link\"\r\n        id=\"fruits-tab\"\r\n        data-toggle=\"tab\"\r\n        role=\"tab\"\r\n        aria-controls=\"contact\"\r\n        aria-selected=\"false\"\r\n        (click)=\"changeCategoryFilter(Category.KHASSIDA)\"\r\n        >Khassida</a\r\n      >\r\n    </li>\r\n    <li class=\"nav-item\" role=\"presentation\">\r\n      <a\r\n        class=\"nav-link\"\r\n        id=\"dry-tab\"\r\n        data-toggle=\"tab\"\r\n        role=\"tab\"\r\n        aria-controls=\"contact\"\r\n        aria-selected=\"false\"\r\n        (click)=\"changeCategoryFilter(Category.CLOTHE)\"\r\n        >Habits</a\r\n      >\r\n    </li>\r\n  </ul>\r\n  <div class=\"row mt-4\">\r\n    <div\r\n      class=\"col-md-3 mb-3\"\r\n      *ngFor=\"\r\n        let product of productsList | filterByCategory: this.categoryFilter\r\n      \"\r\n    >\r\n      <app-product-item [productItem]=\"product\"> </app-product-item>\r\n    </div>\r\n  </div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/shopping-cart.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/shopping-cart.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShoppingCartShoppingCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-product-list></app-product-list>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/shopping-cart/shopping-cart.component */
    "./src/app/components/shopping-cart/shopping-cart.component.ts");
    /* harmony import */


    var _components_shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/shared/page-not-found/page-not-found.component */
    "./src/app/components/shared/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _components_shopping_cart_cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/shopping-cart/cart/cart.component */
    "./src/app/components/shopping-cart/cart/cart.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _components_shopping_cart_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/shopping-cart/check-out/check-out.component */
    "./src/app/components/shopping-cart/check-out/check-out.component.ts");
    /* harmony import */


    var _services_resolvers_products_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/resolvers/products-resolver */
    "./src/app/services/resolvers/products-resolver.ts");
    /* harmony import */


    var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/admin/admin.component */
    "./src/app/components/admin/admin.component.ts");
    /* harmony import */


    var _services_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/auth.guard */
    "./src/app/services/auth.guard.ts");
    /* harmony import */


    var _components_shopping_cart_check_out_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/shopping-cart/check-out/thank-you/thank-you.component */
    "./src/app/components/shopping-cart/check-out/thank-you/thank-you.component.ts");
    /* harmony import */


    var _components_admin_add_product_form_add_product_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/admin/add-product-form/add-product-form.component */
    "./src/app/components/admin/add-product-form/add-product-form.component.ts");
    /* harmony import */


    var _components_admin_user_activity_user_activity_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/admin/user-activity/user-activity.component */
    "./src/app/components/admin/user-activity/user-activity.component.ts");
    /* harmony import */


    var _components_admin_purchases_history_purchases_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/admin/purchases-history/purchases-history.component */
    "./src/app/components/admin/purchases-history/purchases-history.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_readme_readme_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/readme/readme.component */
    "./src/app/components/readme/readme.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/shop',
      pathMatch: 'full'
    }, {
      path: 'readme',
      component: _components_readme_readme_component__WEBPACK_IMPORTED_MODULE_17__["ReadmeComponent"]
    }, {
      path: 'home',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"]
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'register',
      component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
    }, {
      path: 'checkout',
      component: _components_shopping_cart_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_8__["CheckOutComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
      path: 'checkout/thanks',
      component: _components_shopping_cart_check_out_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_12__["ThankYouComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
      path: 'shop',
      component: _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartComponent"],
      resolve: {
        products: _services_resolvers_products_resolver__WEBPACK_IMPORTED_MODULE_9__["ProductsResolver"]
      },
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
      path: 'cart',
      component: _components_shopping_cart_cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }, {
      path: 'admin',
      component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
      children: [{
        path: '',
        redirectTo: 'addProduct',
        pathMatch: 'full'
      }, {
        path: 'addProduct',
        component: _components_admin_add_product_form_add_product_form_component__WEBPACK_IMPORTED_MODULE_13__["AddProductFormComponent"]
      }, {
        path: 'userActivity',
        component: _components_admin_user_activity_user_activity_component__WEBPACK_IMPORTED_MODULE_14__["UserActivityComponent"]
      }, {
        path: 'purchasesHistory',
        component: _components_admin_purchases_history_purchases_history_component__WEBPACK_IMPORTED_MODULE_15__["PurchasesHistoryComponent"]
      }]
    }, {
      path: '**',
      component: _components_shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_services_resolvers_products_resolver__WEBPACK_IMPORTED_MODULE_9__["ProductsResolver"], _services_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_stores_cart_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/stores/cart-store */
    "./src/app/services/stores/cart-store.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(cartStore) {
        _classCallCheck(this, AppComponent);

        this.cartStore = cartStore;
        this.title = "shopping-cart";
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cartStore.init();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_stores_cart_store__WEBPACK_IMPORTED_MODULE_2__["CartStore"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/shared/header/header.component */
    "./src/app/components/shared/header/header.component.ts");
    /* harmony import */


    var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/shared/footer/footer.component */
    "./src/app/components/shared/footer/footer.component.ts");
    /* harmony import */


    var _components_shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/shared/nav/nav.component */
    "./src/app/components/shared/nav/nav.component.ts");
    /* harmony import */


    var _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/shopping-cart/shopping-cart.component */
    "./src/app/components/shopping-cart/shopping-cart.component.ts");
    /* harmony import */


    var _components_shopping_cart_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/shopping-cart/product-list/product-list.component */
    "./src/app/components/shopping-cart/product-list/product-list.component.ts");
    /* harmony import */


    var _components_shopping_cart_cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/shopping-cart/cart/cart.component */
    "./src/app/components/shopping-cart/cart/cart.component.ts");
    /* harmony import */


    var _components_shopping_cart_cart_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/shopping-cart/cart/cart-item/cart-item.component */
    "./src/app/components/shopping-cart/cart/cart-item/cart-item.component.ts");
    /* harmony import */


    var _components_shopping_cart_product_list_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/shopping-cart/product-list/product-item/product-item.component */
    "./src/app/components/shopping-cart/product-list/product-item/product-item.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _components_shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/shared/page-not-found/page-not-found.component */
    "./src/app/components/shared/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_shopping_cart_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/shopping-cart/check-out/check-out.component */
    "./src/app/components/shopping-cart/check-out/check-out.component.ts");
    /* harmony import */


    var _components_shopping_cart_check_out_cart_summary_cart_summary_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/shopping-cart/check-out/cart-summary/cart-summary.component */
    "./src/app/components/shopping-cart/check-out/cart-summary/cart-summary.component.ts");
    /* harmony import */


    var _components_shopping_cart_check_out_checkout_form_checkout_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/shopping-cart/check-out/checkout-form/checkout-form.component */
    "./src/app/components/shopping-cart/check-out/checkout-form/checkout-form.component.ts");
    /* harmony import */


    var _services_pipes_filter_product_by_category__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./services/pipes/filter-product-by-category */
    "./src/app/services/pipes/filter-product-by-category.ts");
    /* harmony import */


    var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/admin/admin.component */
    "./src/app/components/admin/admin.component.ts");
    /* harmony import */


    var _services_Interceptors_tokenInterceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./services/Interceptors/tokenInterceptor */
    "./src/app/services/Interceptors/tokenInterceptor.ts");
    /* harmony import */


    var _components_shopping_cart_check_out_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/shopping-cart/check-out/thank-you/thank-you.component */
    "./src/app/components/shopping-cart/check-out/thank-you/thank-you.component.ts");
    /* harmony import */


    var _components_admin_add_product_form_add_product_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/admin/add-product-form/add-product-form.component */
    "./src/app/components/admin/add-product-form/add-product-form.component.ts");
    /* harmony import */


    var _directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./directives/drag-and-drop.directive */
    "./src/app/directives/drag-and-drop.directive.ts");
    /* harmony import */


    var _components_admin_user_activity_user_activity_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/admin/user-activity/user-activity.component */
    "./src/app/components/admin/user-activity/user-activity.component.ts");
    /* harmony import */


    var _components_admin_purchases_history_purchases_history_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/admin/purchases-history/purchases-history.component */
    "./src/app/components/admin/purchases-history/purchases-history.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_shared_messages_messages_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/shared/messages/messages.component */
    "./src/app/components/shared/messages/messages.component.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _components_readme_readme_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/readme/readme.component */
    "./src/app/components/readme/readme.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/common/locales/fr */
    "./node_modules/@angular/common/locales/fr.js");
    /* harmony import */


    var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_34__);

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_33__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_34___default.a);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _components_shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"], _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingCartComponent"], _components_shopping_cart_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_9__["ProductListComponent"], _components_shopping_cart_cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"], _components_shopping_cart_cart_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_11__["CartItemComponent"], _components_shopping_cart_product_list_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_12__["ProductItemComponent"], _components_shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"], _components_shopping_cart_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_18__["CheckOutComponent"], _components_shopping_cart_check_out_cart_summary_cart_summary_component__WEBPACK_IMPORTED_MODULE_19__["CartSummaryComponent"], _components_shopping_cart_check_out_checkout_form_checkout_form_component__WEBPACK_IMPORTED_MODULE_20__["CheckoutFormComponent"], _services_pipes_filter_product_by_category__WEBPACK_IMPORTED_MODULE_21__["FilterProductByCategory"], _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_22__["AdminComponent"], _components_shopping_cart_check_out_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_24__["ThankYouComponent"], _components_admin_add_product_form_add_product_form_component__WEBPACK_IMPORTED_MODULE_25__["AddProductFormComponent"], _directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_26__["DragAndDropDirective"], _components_admin_user_activity_user_activity_component__WEBPACK_IMPORTED_MODULE_27__["UserActivityComponent"], _components_admin_purchases_history_purchases_history_component__WEBPACK_IMPORTED_MODULE_28__["PurchasesHistoryComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_29__["HomeComponent"], _components_shared_messages_messages_component__WEBPACK_IMPORTED_MODULE_30__["MessagesComponent"], _components_readme_readme_component__WEBPACK_IMPORTED_MODULE_32__["ReadmeComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"]],
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],
        useValue: "fr-FR"
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _services_Interceptors_tokenInterceptor__WEBPACK_IMPORTED_MODULE_23__["TokenInterceptor"],
        multi: true
      }, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_31__["CookieService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/admin/add-product-form/add-product-form.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/admin/add-product-form/add-product-form.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminAddProductFormAddProductFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-signin {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.link {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  background-color: transparent;\r\n  -webkit-text-decoration-skip: objects;\r\n  cursor: pointer;\r\n  margin-top: 10px;\r\n}\r\n\r\n.link:hover { color: #007bff; }\r\n\r\n.upload-drop-zone {\r\n  height: 200px;\r\n  border-width: 2px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n/* skin.css Style*/\r\n\r\n.upload-drop-zone {\r\n  color: cornflowerblue;\r\n  border-style: dashed;\r\n  border-color: cornflowerblue;\r\n  line-height: 200px;\r\n  text-align: center\r\n}\r\n\r\n.upload-drop-zone.drop {\r\n  color: red;\r\n  border-color: red;\r\n}\r\n\r\n.uploadfilecontainer {\r\n  background-image: url('uploadFile.png');\r\n  background-repeat: no-repeat;\r\n  background-size: 100px;\r\n  background-position: center;\r\n  height: 200px;\r\n  width: 100%;\r\n  margin: 20px auto;\r\n  border: 2px dashed #1C8ADB;\r\n  border-radius: 10px;\r\n}\r\n\r\n.uploadfilecontainer:hover {\r\n  cursor: pointer;\r\n  background-color: #9ecbec !important;\r\n  opacity: 0.8;\r\n}\r\n\r\n.files-list {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 80%;\r\n  margin: 10px auto;\r\n  background: #ffffff;\r\n  border: 1px dashed;\r\n  border-radius: 12px;\r\n  padding: 5px;\r\n  color: #1c8adb;\r\n}\r\n\r\n.files-list .delete-file {\r\n  background: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.files-list .delete-file img {\r\n  width: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZGQtcHJvZHVjdC1mb3JtL2FkZC1wcm9kdWN0LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFHQTtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBLGNBQWMsY0FBYyxFQUFFOztBQUU5QjtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBLGtCQUFrQjs7QUFDbEI7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEI7QUFDRjs7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBR0E7RUFDRSx1Q0FBaUU7RUFDakUsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZGQtcHJvZHVjdC1mb3JtL2FkZC1wcm9kdWN0LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXNpZ25pbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAzMzBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcblxyXG4ubGluayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubGluazpob3ZlciB7IGNvbG9yOiAjMDA3YmZmOyB9XHJcblxyXG4udXBsb2FkLWRyb3Atem9uZSB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4vKiBza2luLmNzcyBTdHlsZSovXHJcbi51cGxvYWQtZHJvcC16b25lIHtcclxuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICBsaW5lLWhlaWdodDogMjAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuLnVwbG9hZC1kcm9wLXpvbmUuZHJvcCB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBib3JkZXItY29sb3I6IHJlZDtcclxufVxyXG5cclxuXHJcbi51cGxvYWRmaWxlY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdXBsb2FkRmlsZS5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkICMxQzhBREI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnVwbG9hZGZpbGVjb250YWluZXI6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVjYmVjICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uZmlsZXMtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBjb2xvcjogIzFjOGFkYjtcclxufVxyXG5cclxuLmZpbGVzLWxpc3QgLmRlbGV0ZS1maWxlIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZmlsZXMtbGlzdCAuZGVsZXRlLWZpbGUgaW1nIHtcclxuICB3aWR0aDogMzBweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/admin/add-product-form/add-product-form.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/admin/add-product-form/add-product-form.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: AddProductFormComponent */

  /***/
  function srcAppComponentsAdminAddProductFormAddProductFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProductFormComponent", function () {
      return AddProductFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/product.service */
    "./src/app/services/product.service.ts");

    var AddProductFormComponent = /*#__PURE__*/function () {
      function AddProductFormComponent(fb, productService, router) {
        _classCallCheck(this, AddProductFormComponent);

        this.fb = fb;
        this.productService = productService;
        this.router = router;
        this.file = null;
        this.initializeControls();
        this.attachControlsToForm();
      }

      _createClass(AddProductFormComponent, [{
        key: "initializeControls",
        value: function initializeControls() {
          this.nameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]);
          this.priceControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
          this.categoryControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Cat", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]);
        }
      }, {
        key: "attachControlsToForm",
        value: function attachControlsToForm() {
          this.addProductForm = this.fb.group({
            name: this.nameControl,
            price: this.priceControl,
            category: this.categoryControl
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "uploadFile",
        value: function uploadFile(event) {
          // for (let index = 0; index < event.length; index++) {
          //   const element = event[index];
          //   this.fileNames.push(element.name);
          // }
          if (event.length !== 1) {
            alert("only one image allowed");
          } else {
            this.file = event[0];
          }
        }
      }, {
        key: "deleteAttachment",
        value: function deleteAttachment() {
          //this.fileNames.splice(index, 1);
          this.file = null;
        }
      }, {
        key: "uploadProduct",
        value: function uploadProduct() {
          var _this = this;

          if (this.addProductForm.valid && this.file != null) {
            this.productService.uploadProduct(this.nameControl.value, this.priceControl.value, this.categoryControl.value, this.file).subscribe(function () {
              return _this.router.navigateByUrl("/shop");
            }, function (error) {
              return alert("error in upload product");
            });
          }
        }
      }]);

      return AddProductFormComponent;
    }();

    AddProductFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AddProductFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-add-product-form",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-product-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/add-product-form/add-product-form.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-product-form.component.css */
      "./src/app/components/admin/add-product-form/add-product-form.component.css"))["default"]]
    })], AddProductFormComponent);
    /***/
  },

  /***/
  "./src/app/components/admin/admin.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/admin/admin.component.ts ***!
    \*****************************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppComponentsAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent() {
        _classCallCheck(this, AdminComponent);
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminComponent;
    }();

    AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-admin",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html"))["default"]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/components/admin/purchases-history/purchases-history.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/admin/purchases-history/purchases-history.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: PurchasesHistoryComponent */

  /***/
  function srcAppComponentsAdminPurchasesHistoryPurchasesHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PurchasesHistoryComponent", function () {
      return PurchasesHistoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_purchase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/purchase.service */
    "./src/app/services/purchase.service.ts");

    var PurchasesHistoryComponent = /*#__PURE__*/function () {
      function PurchasesHistoryComponent(purchaseService) {
        _classCallCheck(this, PurchasesHistoryComponent);

        this.purchaseService = purchaseService;
      }

      _createClass(PurchasesHistoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.purchaseService.loadPurchases().subscribe(function (result) {
            _this2.lastPurchases = result.reverse();
          });
        }
      }, {
        key: "getTotal",
        value: function getTotal(items) {
          var total = 0;

          var _iterator = _createForOfIteratorHelper(items),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;
              total = total + item.qty * item.product.price;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return total;
        }
      }]);

      return PurchasesHistoryComponent;
    }();

    PurchasesHistoryComponent.ctorParameters = function () {
      return [{
        type: _services_purchase_service__WEBPACK_IMPORTED_MODULE_2__["PurchaseService"]
      }];
    };

    PurchasesHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-purchases-history",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./purchases-history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/purchases-history/purchases-history.component.html"))["default"]
    })], PurchasesHistoryComponent);
    /***/
  },

  /***/
  "./src/app/components/admin/user-activity/user-activity.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/components/admin/user-activity/user-activity.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminUserActivityUserActivityComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vdXNlci1hY3Rpdml0eS91c2VyLWFjdGl2aXR5LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/admin/user-activity/user-activity.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/admin/user-activity/user-activity.component.ts ***!
    \***************************************************************************/

  /*! exports provided: UserActivityComponent */

  /***/
  function srcAppComponentsAdminUserActivityUserActivityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserActivityComponent", function () {
      return UserActivityComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var UserActivityComponent = /*#__PURE__*/function () {
      function UserActivityComponent() {
        _classCallCheck(this, UserActivityComponent);

        this.allUserActivity = [[]];
        this.usersActivityFiltered = [[]];
      }

      _createClass(UserActivityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.allUserActivity.push(['Yaniv Falik', 'falik@gmail.com', 'Sep 09, 2020']);
          this.allUserActivity.push(['ohad assulin', 'ohad@gmail.com', 'Sep 09, 2020']);
          this.allUserActivity.push(['Yaniv Falik', 'falik@gmail.com', 'Aug 31, 2020']);
          this.allUserActivity.push(['Sapir Alperovich', 'sapir@gmail.com', 'Aug 10, 2020']);
          this.allUserActivity.push(['Yogev Nissan', 'Nissan@gmail.com', 'Aug 10, 2020']);
          this.allUserActivity.push(['Yaniv Falik', 'falik@gmail.com', 'Aug 10, 2020']);
          this.usersActivityFiltered = this.allUserActivity;
          this.searchData = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
          });
          this.searchData.valueChanges.subscribe(function (val) {
            if (val.search === '') {
              _this3.usersActivityFiltered = _this3.allUserActivity;
            }
          });
        }
      }, {
        key: "search",
        value: function search(text) {
          this.usersActivityFiltered = this.allUserActivity.filter(function (user) {
            return user[1].startsWith(text);
          });
        }
      }]);

      return UserActivityComponent;
    }();

    UserActivityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-activity',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-activity.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/user-activity/user-activity.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user-activity.component.css */
      "./src/app/components/admin/user-activity/user-activity.component.css"))["default"]]
    })], UserActivityComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#fog-header {\r\n  background: url(\"https://images.unsplash.com/photo-1519897831810-a9a01aceccd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80\");\r\n  background-position: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlKQUF5SjtFQUN6SiwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ZvZy1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE5ODk3ODMxODEwLWE5YTAxYWNlY2NkMT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTE4OSZxPTgwXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/login/login.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-signin {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.form-wrapper {\r\n  text-align: center !important;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.link {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  background-color: transparent;\r\n  -webkit-text-decoration-skip: objects;\r\n  cursor: pointer;\r\n  margin-top: 10px;\r\n}\r\n\r\n.link:hover {\r\n  color: #007bff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tc2lnbmluIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5mb3JtLXdyYXBwZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5saW5rIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5saW5rOmhvdmVyIHtcclxuICBjb2xvcjogIzAwN2JmZjtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_stores_auth_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/stores/auth.store */
    "./src/app/services/stores/auth.store.ts");
    /* harmony import */


    var _services_messenger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/messenger.service */
    "./src/app/services/messenger.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(fb, router, auth, messageService) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.router = router;
        this.auth = auth;
        this.messageService = messageService;
        this.wasTryToSubmitted = false;
        this.loginForm = fb.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          remember: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this4 = this;

          this.wasTryToSubmitted = true;

          if (this.loginForm.valid) {
            var val = this.loginForm.value;
            this.auth.login(val.email, val.password, val.remember).subscribe(function () {
              _this4.router.navigateByUrl('/shop');
            }, function (err) {
              _this4.messageService.alertMessage(err.error);
            });
          }
        }
      }, {
        key: "getValidationClasses",
        value: function getValidationClasses(controlName) {
          if (!this.loginForm.controls[controlName].valid) {
            if (this.wasTryToSubmitted) {
              return 'is-invalid';
            }
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_stores_auth_store__WEBPACK_IMPORTED_MODULE_4__["AuthStore"]
      }, {
        type: _services_messenger_service__WEBPACK_IMPORTED_MODULE_5__["MessengerService"]
      }];
    };

    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/readme/readme.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/readme/readme.component.ts ***!
    \*******************************************************/

  /*! exports provided: ReadmeComponent */

  /***/
  function srcAppComponentsReadmeReadmeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReadmeComponent", function () {
      return ReadmeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ReadmeComponent = /*#__PURE__*/function () {
      function ReadmeComponent() {
        _classCallCheck(this, ReadmeComponent);
      }

      _createClass(ReadmeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReadmeComponent;
    }();

    ReadmeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-readme",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./readme.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/readme/readme.component.html"))["default"]
    })], ReadmeComponent);
    /***/
  },

  /***/
  "./src/app/components/register/register.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/register/register.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-signin {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.form-wrapper {\r\n  text-align: center!important;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.link {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  background-color: transparent;\r\n  -webkit-text-decoration-skip: objects;\r\n  cursor: pointer;\r\n  margin-top: 10px;\r\n}\r\n\r\n.link:hover { color: #007bff; }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUdBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUEsY0FBYyxjQUFjLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1zaWduaW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMzMwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmZvcm0td3JhcHBlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2wge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG5cclxuLmxpbmsge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0cztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmxpbms6aG92ZXIgeyBjb2xvcjogIzAwN2JmZjsgfVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/register/register.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/register/register.component.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_stores_auth_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/stores/auth.store */
    "./src/app/services/stores/auth.store.ts");
    /* harmony import */


    var _services_messenger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/messenger.service */
    "./src/app/services/messenger.service.ts");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(fb, auth, router, messageService) {
        _classCallCheck(this, RegisterComponent);

        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.messageService = messageService;
        this.wasTryToSubmitted = false;
        this.initializeControls();
        this.attachControlsToForm();
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "initializeControls",
        value: function initializeControls() {
          this.firstNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]);
          this.lastNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]);
          this.emailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]);
          this.passControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]);
        }
      }, {
        key: "attachControlsToForm",
        value: function attachControlsToForm() {
          this.regForm = this.fb.group({
            firstName: this.firstNameControl,
            lastName: this.lastNameControl,
            email: this.emailControl,
            password: this.passControl
          });
        }
      }, {
        key: "getValidationClasses",
        value: function getValidationClasses(controlName) {
          if (this.regForm.controls[controlName].valid) {
            return 'is-valid';
          } else {
            if (this.wasTryToSubmitted) {
              return 'is-invalid';
            }
          }
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this5 = this;

          this.wasTryToSubmitted = true;

          if (this.regForm.valid) {
            var newUser = this.regForm.value;
            this.auth.register(newUser).subscribe(function () {
              _this5.router.navigateByUrl('/shop');
            }, function (err) {
              _this5.messageService.alertMessage(err.error);
            });
          }
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services_stores_auth_store__WEBPACK_IMPORTED_MODULE_4__["AuthStore"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_messenger_service__WEBPACK_IMPORTED_MODULE_5__["MessengerService"]
      }];
    };

    RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register.component.css */
      "./src/app/components/register/register.component.css"))["default"]]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/shared/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-footer",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html"))["default"]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/header/header.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/components/shared/header/header.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\r\n  width: 100px;\r\n  height: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/shared/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/shared/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsSharedHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header/header.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./header.component.css */
      "./src/app/components/shared/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/messages/messages.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/shared/messages/messages.component.ts ***!
    \******************************************************************/

  /*! exports provided: MessagesComponent */

  /***/
  function srcAppComponentsSharedMessagesMessagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () {
      return MessagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_messenger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/messenger.service */
    "./src/app/services/messenger.service.ts");

    var MessagesComponent = /*#__PURE__*/function () {
      function MessagesComponent(messageService) {
        _classCallCheck(this, MessagesComponent);

        this.messageService = messageService;
      }

      _createClass(MessagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.message$ = this.messageService.message$;
        }
      }, {
        key: "clear",
        value: function clear() {
          this.messageService.clearMessage();
        }
      }]);

      return MessagesComponent;
    }();

    MessagesComponent.ctorParameters = function () {
      return [{
        type: _services_messenger_service__WEBPACK_IMPORTED_MODULE_2__["MessengerService"]
      }];
    };

    MessagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-messages",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./messages.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/messages/messages.component.html"))["default"]
    })], MessagesComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/nav/nav.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/components/shared/nav/nav.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedNavNavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "svg {\r\n  margin-right: 6px;\r\n  cursor: pointer;\r\n}\r\n\r\n.cart-icon {\r\n  margin-right: 20px;\r\n}\r\n\r\n.cart-button {\r\n  font-size: 25px;\r\n  color: black;\r\n}\r\n\r\nimg {\r\n  width: 80px;\r\n  height: 50px;\r\n}\r\n\r\n.badge-size {\r\n  font-size: 12px;\r\n}\r\n\r\n.massalik-icon {\r\n  background: url('/assets/images/massalik-logo.svg') center/contain;\r\n  height: 45px;\r\n  width: 45px;\r\n  margin-right: 20px;\r\n}\r\n\r\n/*.badge-notify{*/\r\n\r\n/*  position:relative;*/\r\n\r\n/*  top: -15px;*/\r\n\r\n/*  left: -15px;*/\r\n\r\n/*}*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrRUFBaUU7RUFDakUsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUEsaUJBQWlCOztBQUNqQix1QkFBdUI7O0FBQ3ZCLGdCQUFnQjs7QUFDaEIsaUJBQWlCOztBQUNqQixJQUFJIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3ZnIHtcclxuICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJ0LWljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmNhcnQtYnV0dG9uIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmJhZGdlLXNpemUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLm1hc3NhbGlrLWljb24ge1xyXG4gIGJhY2tncm91bmQ6IHVybCh+L2Fzc2V0cy9pbWFnZXMvbWFzc2FsaWstbG9nby5zdmcpIGNlbnRlci9jb250YWluO1xyXG4gIGhlaWdodDogNDVweDtcclxuICB3aWR0aDogNDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi8qLmJhZGdlLW5vdGlmeXsqL1xyXG4vKiAgcG9zaXRpb246cmVsYXRpdmU7Ki9cclxuLyogIHRvcDogLTE1cHg7Ki9cclxuLyogIGxlZnQ6IC0xNXB4OyovXHJcbi8qfSovXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/shared/nav/nav.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/shared/nav/nav.component.ts ***!
    \********************************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppComponentsSharedNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_stores_auth_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/stores/auth.store */
    "./src/app/services/stores/auth.store.ts");
    /* harmony import */


    var _services_stores_cart_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/stores/cart-store */
    "./src/app/services/stores/cart-store.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_messenger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/messenger.service */
    "./src/app/services/messenger.service.ts");

    var NavComponent = /*#__PURE__*/function () {
      function NavComponent(auth, cartStore, router, messageService) {
        _classCallCheck(this, NavComponent);

        this.auth = auth;
        this.cartStore = cartStore;
        this.router = router;
        this.messageService = messageService;
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return this.auth.isLoggedIn$;
        }
      }, {
        key: "getNumberOfItemsInCart",
        value: function getNumberOfItemsInCart() {
          return this.cartStore.getNumberOfItemsInCart();
        }
      }, {
        key: "isAdmin",
        value: function isAdmin() {
          var userStr = localStorage.getItem('auth_data');

          if (userStr) {
            var user = JSON.parse(userStr);
            return user.isAdmin;
          } else {
            return false;
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this6 = this;

          this.auth.logout().subscribe(function () {}, function (err) {
            _this6.messageService.alertMessage(err.error);
          });
        }
      }]);

      return NavComponent;
    }();

    NavComponent.ctorParameters = function () {
      return [{
        type: _services_stores_auth_store__WEBPACK_IMPORTED_MODULE_2__["AuthStore"]
      }, {
        type: _services_stores_cart_store__WEBPACK_IMPORTED_MODULE_3__["CartStore"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_messenger_service__WEBPACK_IMPORTED_MODULE_5__["MessengerService"]
      }];
    };

    NavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/nav/nav.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./nav.component.css */
      "./src/app/components/shared/nav/nav.component.css"))["default"]]
    })], NavComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/page-not-found/page-not-found.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/shared/page-not-found/page-not-found.component.ts ***!
    \******************************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppComponentsSharedPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-page-not-found",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/page-not-found/page-not-found.component.html"))["default"]
    })], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/components/shopping-cart/cart/cart-item/cart-item.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/shopping-cart/cart/cart-item/cart-item.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShoppingCartCartCartItemCartItemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcHBpbmctY2FydC9jYXJ0L2NhcnQtaXRlbS9jYXJ0LWl0ZW0uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/shopping-cart/cart/cart-item/cart-item.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/shopping-cart/cart/cart-item/cart-item.component.ts ***!
    \********************************************************************************/

  /*! exports provided: CartItemComponent */

  /***/
  function srcAppComponentsShoppingCartCartCartItemCartItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartItemComponent", function () {
      return CartItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_messenger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/messenger.service */
    "./src/app/services/messenger.service.ts");
    /* harmony import */


    var _services_stores_cart_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/stores/cart-store */
    "./src/app/services/stores/cart-store.ts");

    var CartItemComponent = /*#__PURE__*/function () {
      function CartItemComponent(msg, cartStore) {
        _classCallCheck(this, CartItemComponent);

        this.msg = msg;
        this.cartStore = cartStore;
      }

      _createClass(CartItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.cartItem);
        }
      }, {
        key: "remove",
        value: function remove() {
          this.cartStore.deleteItemFromCart(this.cartItem).subscribe(function () {
            return console.log("item deleted");
          });
        }
      }, {
        key: "updateCartItem",
        value: function updateCartItem() {
          this.cartStore.updateCart(this.cartItem).subscribe(function () {
            return console.log("cart updated");
          });
        }
      }, {
        key: "increaseQty",
        value: function increaseQty() {
          this.cartItem.qty++;
          this.updateCartItem();
        }
      }, {
        key: "decreaseQty",
        value: function decreaseQty() {
          this.cartItem.qty--;
          this.updateCartItem();
        }
      }]);

      return CartItemComponent;
    }();

    CartItemComponent.ctorParameters = function () {
      return [{
        type: _services_messenger_service__WEBPACK_IMPORTED_MODULE_2__["MessengerService"]
      }, {
        type: _services_stores_cart_store__WEBPACK_IMPORTED_MODULE_3__["CartStore"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CartItemComponent.prototype, "cartItem", void 0);
    CartItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-cart-item",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cart-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/cart/cart-item/cart-item.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cart-item.component.css */
      "./src/app/components/shopping-cart/cart/cart-item/cart-item.component.css"))["default"]]
    })], CartItemComponent);
    /***/
  },

  /***/
  "./src/app/components/shopping-cart/cart/cart.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/components/shopping-cart/cart/cart.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShoppingCartCartCartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cart-item {\r\n  font-size: small;\r\n}\r\n\r\n.headers-row {\r\n  background-color: #56C596!important;\r\n  border-radius: 50px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wcGluZy1jYXJ0L2NhcnQvY2FydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcHBpbmctY2FydC9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0LWl0ZW0ge1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbi5oZWFkZXJzLXJvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2QzU5NiFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/shopping-cart/cart/cart.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/shopping-cart/cart/cart.component.ts ***!
    \*****************************************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppComponentsShoppingCartCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_messenger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/messenger.service */
    "./src/app/services/messenger.service.ts");
    /* harmony import */


    var _services_stores_cart_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/stores/cart-store */
    "./src/app/services/stores/cart-store.ts");

    var CartComponent = /*#__PURE__*/function () {
      function CartComponent(msg, cartStore) {
        _classCallCheck(this, CartComponent);

        this.msg = msg;
        this.cartStore = cartStore;
        this.cartTotal = 0;
        this.cartTotal$ = this.cartStore.cartTotal$;
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cartItems$ = this.cartStore.cartItems$;
        }
      }, {
        key: "isCartEmpty",
        value: function isCartEmpty() {
          return false;
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ctorParameters = function () {
      return [{
        type: _services_messenger_service__WEBPACK_IMPORTED_MODULE_2__["MessengerService"]
      }, {
        type: _services_stores_cart_store__WEBPACK_IMPORTED_MODULE_3__["CartStore"]
      }];
    };

    CartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/cart/cart.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cart.component.css */
      "./src/app/components/shopping-cart/cart/cart.component.css"))["default"]]
    })], CartComponent);
    /***/
  },

  /***/
  "./src/app/components/shopping-cart/check-out/cart-summary/cart-summary.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/shopping-cart/check-out/cart-summary/cart-summary.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: CartSummaryComponent */

  /***/
  function srcAppComponentsShoppingCartCheckOutCartSummaryCartSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartSummaryComponent", function () {
      return CartSummaryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_messenger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/messenger.service */
    "./src/app/services/messenger.service.ts");
    /* harmony import */


    var _services_stores_cart_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/stores/cart-store */
    "./src/app/services/stores/cart-store.ts");

    var CartSummaryComponent = /*#__PURE__*/function () {
      function CartSummaryComponent(msg, cartStore) {
        _classCallCheck(this, CartSummaryComponent);

        this.msg = msg;
        this.cartStore = cartStore; //cartTotal = 0;

        this.numOfItems = 0;
      }

      _createClass(CartSummaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cartItems$ = this.cartStore.cartItems$;
          this.cartTotal$ = this.cartStore.cartTotal$; //this.calcTotal();
        } // calcTotal() {
        //   this.cartTotal = this.cartStore.getCartTotal();
        // }

      }, {
        key: "getNumberOfItems",
        value: function getNumberOfItems() {
          return this.cartStore.cartCount$;
        }
      }]);

      return CartSummaryComponent;
    }();

    CartSummaryComponent.ctorParameters = function () {
      return [{
        type: _services_messenger_service__WEBPACK_IMPORTED_MODULE_2__["MessengerService"]
      }, {
        type: _services_stores_cart_store__WEBPACK_IMPORTED_MODULE_3__["CartStore"]
      }];
    };

    CartSummaryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-cart-summary",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cart-summary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/check-out/cart-summary/cart-summary.component.html"))["default"]
    })], CartSummaryComponent);
    /***/
  },

  /***/
  "./src/app/components/shopping-cart/check-out/check-out.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/shopping-cart/check-out/check-out.component.ts ***!
    \***************************************************************************/

  /*! exports provided: CheckOutComponent */

  /***/
  function srcAppComponentsShoppingCartCheckOutCheckOutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function () {
      return CheckOutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CheckOutComponent = /*#__PURE__*/function () {
      function CheckOutComponent() {
        _classCallCheck(this, CheckOutComponent);
      }

      _createClass(CheckOutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CheckOutComponent;
    }();

    CheckOutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-check-out",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./check-out.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/check-out/check-out.component.html"))["default"]
    })], CheckOutComponent);
    /***/
  },

  /***/
  "./src/app/components/shopping-cart/check-out/checkout-form/checkout-form.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/shopping-cart/check-out/checkout-form/checkout-form.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: CheckoutFormComponent */

  /***/
  function srcAppComponentsShoppingCartCheckOutCheckoutFormCheckoutFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutFormComponent", function () {
      return CheckoutFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_stores_auth_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/stores/auth.store */
    "./src/app/services/stores/auth.store.ts");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _models_address__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../models/address */
    "./src/app/models/address.ts");
    /* harmony import */


    var _services_purchase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../services/purchase.service */
    "./src/app/services/purchase.service.ts");

    var CheckoutFormComponent = /*#__PURE__*/function () {
      function CheckoutFormComponent(fb, auth, router, purchaseService) {
        _classCallCheck(this, CheckoutFormComponent);

        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.purchaseService = purchaseService;
        this.wasTryToSubmitted = false;
        this.user = auth.getUserDetails();
        this.initializeControls();
        this.attachControlsToForm();
      }

      _createClass(CheckoutFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "initializeControls",
        value: function initializeControls() {
          this.firstNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.user.firstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]);
          this.lastNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.user.lastName, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]);
          this.emailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]);
          this.cityControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]);
          this.streetControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]);
          this.homeNumberControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
          this.apartmentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        }
      }, {
        key: "attachControlsToForm",
        value: function attachControlsToForm() {
          this.checkOutForm = this.fb.group({
            firstName: this.firstNameControl,
            lastName: this.lastNameControl,
            email: this.emailControl,
            city: this.cityControl,
            street: this.streetControl,
            homeNumber: this.homeNumberControl,
            apartment: this.apartmentControl
          });
        }
      }, {
        key: "getValidationClasses",
        value: function getValidationClasses(controlName) {
          if (this.checkOutForm.controls[controlName].valid) {
            return "is-valid";
          } else {
            if (this.wasTryToSubmitted) {
              return "is-invalid";
            }
          }
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this7 = this;

          this.wasTryToSubmitted = true;

          if (this.checkOutForm.valid) {
            var user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"](this.firstNameControl.value, this.lastNameControl.value, this.emailControl.value);
            var address = new _models_address__WEBPACK_IMPORTED_MODULE_6__["Address"](this.cityControl.value, this.streetControl.value, this.homeNumberControl.value, this.apartmentControl.value);
            this.purchaseService.postPurchase(user, address).subscribe(function () {
              _this7.router.navigateByUrl("/checkout/thanks");
            }, function (err) {
              console.log(err);
            });
          }
        }
      }]);

      return CheckoutFormComponent;
    }();

    CheckoutFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _services_stores_auth_store__WEBPACK_IMPORTED_MODULE_2__["AuthStore"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_purchase_service__WEBPACK_IMPORTED_MODULE_7__["PurchaseService"]
      }];
    };

    CheckoutFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-checkout-form",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./checkout-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/check-out/checkout-form/checkout-form.component.html"))["default"]
    })], CheckoutFormComponent);
    /***/
  },

  /***/
  "./src/app/components/shopping-cart/check-out/thank-you/thank-you.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/shopping-cart/check-out/thank-you/thank-you.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ThankYouComponent */

  /***/
  function srcAppComponentsShoppingCartCheckOutThankYouThankYouComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThankYouComponent", function () {
      return ThankYouComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ThankYouComponent = /*#__PURE__*/function () {
      function ThankYouComponent() {
        _classCallCheck(this, ThankYouComponent);
      }

      _createClass(ThankYouComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ThankYouComponent;
    }();

    ThankYouComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-thank-you",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./thank-you.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/check-out/thank-you/thank-you.component.html"))["default"]
    })], ThankYouComponent);
    /***/
  },

  /***/
  "./src/app/components/shopping-cart/product-list/product-item/product-item.component.css":
  /*!***********************************************************************************************!*\
    !*** ./src/app/components/shopping-cart/product-list/product-item/product-item.component.css ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShoppingCartProductListProductItemProductItemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".div button {\r\n  border: none;\r\n  outline: 0;\r\n  padding: 12px;\r\n  color: white;\r\n  background-color: #000;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  font-size: 18px;\r\n}\r\n\r\n.img-responsive {\r\n  width: auto;\r\n  height: 130px;\r\n}\r\n\r\n#footerButton {\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wcGluZy1jYXJ0L3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcHBpbmctY2FydC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdiBidXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5pbWctcmVzcG9uc2l2ZSB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxufVxyXG4jZm9vdGVyQnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/shopping-cart/product-list/product-item/product-item.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/components/shopping-cart/product-list/product-item/product-item.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: ProductItemComponent */

  /***/
  function srcAppComponentsShoppingCartProductListProductItemProductItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function () {
      return ProductItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_messenger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/messenger.service */
    "./src/app/services/messenger.service.ts");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _services_stores_cart_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/stores/cart-store */
    "./src/app/services/stores/cart-store.ts");

    var ProductItemComponent = /*#__PURE__*/function () {
      function ProductItemComponent(msg, cartService, cartStore) {
        _classCallCheck(this, ProductItemComponent);

        this.msg = msg;
        this.cartService = cartService;
        this.cartStore = cartStore;
        this.isExistInCart = false;
        this.quantity = 1;
      }

      _createClass(ProductItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "handleAddToCart",
        value: function handleAddToCart() {
          this.isExistInCart = true;
          this.cartStore.addToCart(this.productItem, this.quantity).subscribe(function () {
            console.log('product added');
          });
        }
      }, {
        key: "increaseQuantity",
        value: function increaseQuantity() {
          this.quantity++;
        }
      }, {
        key: "decreaseQuantity",
        value: function decreaseQuantity() {
          if (this.quantity > 1) {
            this.quantity--;
          }
        }
      }]);

      return ProductItemComponent;
    }();

    ProductItemComponent.ctorParameters = function () {
      return [{
        type: _services_messenger_service__WEBPACK_IMPORTED_MODULE_2__["MessengerService"]
      }, {
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
      }, {
        type: _services_stores_cart_store__WEBPACK_IMPORTED_MODULE_4__["CartStore"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProductItemComponent.prototype, "productItem", void 0);
    ProductItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-item',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/product-list/product-item/product-item.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product-item.component.css */
      "./src/app/components/shopping-cart/product-list/product-item/product-item.component.css"))["default"]]
    })], ProductItemComponent);
    /***/
  },

  /***/
  "./src/app/components/shopping-cart/product-list/product-list.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/shopping-cart/product-list/product-list.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcAppComponentsShoppingCartProductListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _models_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../models/product */
    "./src/app/models/product.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ProductListComponent = /*#__PURE__*/function () {
      function ProductListComponent(productService, route, router) {
        _classCallCheck(this, ProductListComponent);

        this.productService = productService;
        this.route = route;
        this.router = router;
        this.categoryFilter = _models_product__WEBPACK_IMPORTED_MODULE_3__["Category"].ALL;
        this.Category = _models_product__WEBPACK_IMPORTED_MODULE_3__["Category"];
      }

      _createClass(ProductListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.productsList = this.route.snapshot.data["products"];
          console.log(this.productsList);
          this.searchData = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("")
          });
          this.searchData.valueChanges.subscribe(function (val) {
            if (val.search === "") {
              _this8.productsList = _this8.route.snapshot.data["products"];
            }
          });
        }
      }, {
        key: "changeCategoryFilter",
        value: function changeCategoryFilter(newCategory) {
          this.categoryFilter = newCategory;
        }
      }, {
        key: "search",
        value: function search(productName) {
          this.productsList = this.productsList.filter(function (product) {
            return product.name.startsWith(productName);
          });
        }
      }]);

      return ProductListComponent;
    }();

    ProductListComponent.ctorParameters = function () {
      return [{
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ProductListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-product-list",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/product-list/product-list.component.html"))["default"]
    })], ProductListComponent);
    /***/
  },

  /***/
  "./src/app/components/shopping-cart/shopping-cart.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/shopping-cart/shopping-cart.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShoppingCartShoppingCartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-icon {\r\n  font-size: 100px;\r\n  cursor: pointer;\r\n}\r\n\r\n.mat-badge-content {\r\n  width: auto;\r\n  display: grid;\r\n  min-width: 32px;\r\n  min-height: 28px;\r\n  text-align: center;\r\n  align-items: center;\r\n  padding: 5px 3px;\r\n  top: -20px;\r\n  right: -22px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1pY29uIHtcclxuICBmb250LXNpemU6IDEwMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1hdC1iYWRnZS1jb250ZW50IHtcclxuICB3aWR0aDogYXV0bztcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIG1pbi13aWR0aDogMzJweDtcclxuICBtaW4taGVpZ2h0OiAyOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVweCAzcHg7XHJcbiAgdG9wOiAtMjBweDtcclxuICByaWdodDogLTIycHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/shopping-cart/shopping-cart.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/shopping-cart/shopping-cart.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ShoppingCartComponent */

  /***/
  function srcAppComponentsShoppingCartShoppingCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function () {
      return ShoppingCartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ShoppingCartComponent = /*#__PURE__*/function () {
      function ShoppingCartComponent() {
        _classCallCheck(this, ShoppingCartComponent);
      }

      _createClass(ShoppingCartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShoppingCartComponent;
    }();

    ShoppingCartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shopping-cart',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./shopping-cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/shopping-cart.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./shopping-cart.component.css */
      "./src/app/components/shopping-cart/shopping-cart.component.css"))["default"]]
    })], ShoppingCartComponent);
    /***/
  },

  /***/
  "./src/app/directives/drag-and-drop.directive.ts":
  /*!*******************************************************!*\
    !*** ./src/app/directives/drag-and-drop.directive.ts ***!
    \*******************************************************/

  /*! exports provided: DragAndDropDirective */

  /***/
  function srcAppDirectivesDragAndDropDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragAndDropDirective", function () {
      return DragAndDropDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DragAndDropDirective = /*#__PURE__*/function () {
      function DragAndDropDirective() {
        _classCallCheck(this, DragAndDropDirective);

        this.onFileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.background = '#f5fcff';
        this.opacity = '1';
      } // Dragover listener


      _createClass(DragAndDropDirective, [{
        key: "onDragOver",
        value: function onDragOver(evt) {
          evt.preventDefault();
          evt.stopPropagation();
          this.background = '#9ecbec';
          this.opacity = '0.8';
        } // Dragleave listener

      }, {
        key: "onDragLeave",
        value: function onDragLeave(evt) {
          evt.preventDefault();
          evt.stopPropagation();
          this.background = '#f5fcff';
          this.opacity = '1';
        } // Drop listener

      }, {
        key: "ondrop",
        value: function ondrop(evt) {
          evt.preventDefault();
          evt.stopPropagation();
          this.background = '#f5fcff';
          this.opacity = '1';
          var files = evt.dataTransfer.files;

          if (files.length > 0) {
            this.onFileDropped.emit(files);
          }
        }
      }]);

      return DragAndDropDirective;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DragAndDropDirective.prototype, "onFileDropped", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.background-color')], DragAndDropDirective.prototype, "background", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.opacity')], DragAndDropDirective.prototype, "opacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event'])], DragAndDropDirective.prototype, "onDragOver", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragleave', ['$event'])], DragAndDropDirective.prototype, "onDragLeave", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event'])], DragAndDropDirective.prototype, "ondrop", null);
    DragAndDropDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appDragAndDrop]'
    })], DragAndDropDirective);
    /***/
  },

  /***/
  "./src/app/models/address.ts":
  /*!***********************************!*\
    !*** ./src/app/models/address.ts ***!
    \***********************************/

  /*! exports provided: Address */

  /***/
  function srcAppModelsAddressTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Address", function () {
      return Address;
    });

    var Address = function Address(city, street, homeNumber, apartment) {
      _classCallCheck(this, Address);

      this.city = city;
      this.street = street;
      this.homeNumber = homeNumber;
      this.apartment = apartment;
    };
    /***/

  },

  /***/
  "./src/app/models/cart-item.ts":
  /*!*************************************!*\
    !*** ./src/app/models/cart-item.ts ***!
    \*************************************/

  /*! exports provided: CartItem */

  /***/
  function srcAppModelsCartItemTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartItem", function () {
      return CartItem;
    });

    var CartItem = function CartItem(product) {
      var qty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      _classCallCheck(this, CartItem);

      // this.id = id;
      this.product = product;
      this.qty = qty;
    };
    /***/

  },

  /***/
  "./src/app/models/product.ts":
  /*!***********************************!*\
    !*** ./src/app/models/product.ts ***!
    \***********************************/

  /*! exports provided: Product, Category */

  /***/
  function srcAppModelsProductTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Category", function () {
      return Category;
    });

    var Product = function Product(id, name) {
      var description = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var price = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var image = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png";
      var categories = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [Category.ALL];

      _classCallCheck(this, Product);

      this._id = id;
      this.name = name;
      this.price = price;
      this.desc = description;
      this.image = image;
      this.categories = categories;
    };

    var Category;

    (function (Category) {
      Category["ALL"] = "ALL";
      Category["FOOD"] = "FOOD";
      Category["KHASSIDA"] = "KHASSIDA";
      Category["CLOTHE"] = "CLOTHE";
    })(Category || (Category = {}));
    /***/

  },

  /***/
  "./src/app/models/purchase.ts":
  /*!************************************!*\
    !*** ./src/app/models/purchase.ts ***!
    \************************************/

  /*! exports provided: Purchase */

  /***/
  function srcAppModelsPurchaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Purchase", function () {
      return Purchase;
    });

    var Purchase = function Purchase(user, address, items) {
      _classCallCheck(this, Purchase);

      this.personal = user;
      this.address = address;
      this.items = items;
    };
    /***/

  },

  /***/
  "./src/app/models/user.ts":
  /*!********************************!*\
    !*** ./src/app/models/user.ts ***!
    \********************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User() {
      var firstName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var lastName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var email = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      _classCallCheck(this, User);

      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
    };
    /***/

  },

  /***/
  "./src/app/services/Interceptors/tokenInterceptor.ts":
  /*!***********************************************************!*\
    !*** ./src/app/services/Interceptors/tokenInterceptor.ts ***!
    \***********************************************************/

  /*! exports provided: TokenInterceptor */

  /***/
  function srcAppServicesInterceptorsTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _stores_auth_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../stores/auth.store */
    "./src/app/services/stores/auth.store.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TokenInterceptor = /*#__PURE__*/function () {
      function TokenInterceptor(router, auth) {
        _classCallCheck(this, TokenInterceptor);

        this.router = router;
        this.auth = auth;
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this9 = this;

          req = req.clone({
            withCredentials: true
          });
          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {}, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
              if (err.status !== 401) {
                return;
              }

              _this9.auth.logout();

              _this9.router.navigate(['login']);
            }
          }));
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _stores_auth_store__WEBPACK_IMPORTED_MODULE_3__["AuthStore"]
      }];
    };

    TokenInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TokenInterceptor);
    /***/
  },

  /***/
  "./src/app/services/auth.guard.ts":
  /*!****************************************!*\
    !*** ./src/app/services/auth.guard.ts ***!
    \****************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppServicesAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _stores_auth_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./stores/auth.store */
    "./src/app/services/stores/auth.store.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(auth, router) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          return this.isUserAuth();
        }
      }, {
        key: "canActivateChild",
        value: function canActivateChild(childRoute, state) {
          return this.isUserAuth();
        }
      }, {
        key: "isUserAuth",
        value: function isUserAuth() {
          var _this10 = this;

          return this.auth.isLoggedIn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (loggedIn) {
            return loggedIn ? true : _this10.router.parseUrl('/login');
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _stores_auth_store__WEBPACK_IMPORTED_MODULE_2__["AuthStore"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthGuard);
    /***/
  },

  /***/
  "./src/app/services/cart.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/cart.service.ts ***!
    \******************************************/

  /*! exports provided: CartService */

  /***/
  function srcAppServicesCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../config/api */
    "./src/config/api.ts");

    var CartService = /*#__PURE__*/function () {
      function CartService(http) {
        _classCallCheck(this, CartService);

        this.http = http;
        this.cartItems = [];
      }

      _createClass(CartService, [{
        key: "loadCartItems",
        value: function loadCartItems() {
          return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_4__["cartUrl"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return result;
          }));
        }
      }, {
        key: "addProductToCart",
        value: function addProductToCart(product, quantity) {
          var qty = 1;
          return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_4__["cartUrl"], {
            product: product,
            qty: qty
          });
        } // updateCartItem(item: CartItem): Observable<any> {
        //   return this.http.put(cartUrl + '/' + item.id, item);
        // }

      }, {
        key: "getItemCount",
        value: function getItemCount() {
          return this.cartItemsCount;
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(ProductID) {
          return this.http["delete"](_config_api__WEBPACK_IMPORTED_MODULE_4__["cartUrl"] + "/" + ProductID);
        }
      }]);

      return CartService;
    }();

    CartService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], CartService);
    /***/
  },

  /***/
  "./src/app/services/messenger.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/messenger.service.ts ***!
    \***********************************************/

  /*! exports provided: MessengerService */

  /***/
  function srcAppServicesMessengerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessengerService", function () {
      return MessengerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MessengerService = /*#__PURE__*/function () {
      function MessengerService(router) {
        var _this11 = this;

        _classCallCheck(this, MessengerService);

        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.message$ = this.subject.asObservable();
        router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
            _this11.subject.next(null);
          }
        });
      }

      _createClass(MessengerService, [{
        key: "alertMessage",
        value: function alertMessage(message) {
          this.subject.next(message);
        }
      }, {
        key: "clearMessage",
        value: function clearMessage() {
          this.subject.next(null);
        }
      }]);

      return MessengerService;
    }();

    MessengerService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    MessengerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], MessengerService);
    /***/
  },

  /***/
  "./src/app/services/pipes/filter-product-by-category.ts":
  /*!**************************************************************!*\
    !*** ./src/app/services/pipes/filter-product-by-category.ts ***!
    \**************************************************************/

  /*! exports provided: FilterProductByCategory */

  /***/
  function srcAppServicesPipesFilterProductByCategoryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterProductByCategory", function () {
      return FilterProductByCategory;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/product */
    "./src/app/models/product.ts");

    var FilterProductByCategory = /*#__PURE__*/function () {
      function FilterProductByCategory() {
        _classCallCheck(this, FilterProductByCategory);
      }

      _createClass(FilterProductByCategory, [{
        key: "transform",
        value: function transform(products, category) {
          console.log(products);

          if (category === _models_product__WEBPACK_IMPORTED_MODULE_2__["Category"].ALL) {
            return products;
          } else {
            return products.filter(function (product) {
              return product.categories.includes(category);
            });
          }
        }
      }]);

      return FilterProductByCategory;
    }();

    FilterProductByCategory = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: "filterByCategory"
    })], FilterProductByCategory);
    /***/
  },

  /***/
  "./src/app/services/product.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/product.service.ts ***!
    \*********************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppServicesProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../config/api */
    "./src/config/api.ts");
    /* harmony import */


    var _stores_auth_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./stores/auth.store */
    "./src/app/services/stores/auth.store.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ProductService = /*#__PURE__*/function () {
      function ProductService(http, auth) {
        _classCallCheck(this, ProductService);

        this.http = http;
        this.auth = auth;
      }

      _createClass(ProductService, [{
        key: "loadProducts",
        value: function loadProducts() {
          return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["productsUrl"], {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            return result.products;
          }));
        }
      }, {
        key: "uploadProduct",
        value: function uploadProduct(name, price, category, file) {
          var formData = new FormData();
          formData.append("image", file, file.name);
          formData.append("name", name);
          formData.append("categories", category);
          formData.append("price", price);
          return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_3__["productsUrl"] + "/new", formData);
        }
      }]);

      return ProductService;
    }();

    ProductService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _stores_auth_store__WEBPACK_IMPORTED_MODULE_4__["AuthStore"]
      }];
    };

    ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ProductService);
    /***/
  },

  /***/
  "./src/app/services/purchase.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/purchase.service.ts ***!
    \**********************************************/

  /*! exports provided: PurchaseService */

  /***/
  function srcAppServicesPurchaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PurchaseService", function () {
      return PurchaseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../config/api */
    "./src/config/api.ts");
    /* harmony import */


    var _stores_cart_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./stores/cart-store */
    "./src/app/services/stores/cart-store.ts");
    /* harmony import */


    var _models_purchase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/purchase */
    "./src/app/models/purchase.ts");

    var PurchaseService = /*#__PURE__*/function () {
      function PurchaseService(http, cartStore) {
        _classCallCheck(this, PurchaseService);

        this.http = http;
        this.cartStore = cartStore;
      }

      _createClass(PurchaseService, [{
        key: "loadPurchases",
        value: function loadPurchases() {
          return this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_3__["purchasesUrl"]);
        }
      }, {
        key: "postPurchase",
        value: function postPurchase(user, address) {
          var purchaseBody = this.buildPurchaseBody(user, address);
          return this.http.post(_config_api__WEBPACK_IMPORTED_MODULE_3__["purchasesUrl"], purchaseBody);
        }
      }, {
        key: "buildPurchaseBody",
        value: function buildPurchaseBody(user, address) {
          var items = this.cartStore.getCurrentCart();
          return new _models_purchase__WEBPACK_IMPORTED_MODULE_5__["Purchase"](user, address, items);
        }
      }]);

      return PurchaseService;
    }();

    PurchaseService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _stores_cart_store__WEBPACK_IMPORTED_MODULE_4__["CartStore"]
      }];
    };

    PurchaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PurchaseService);
    /***/
  },

  /***/
  "./src/app/services/resolvers/products-resolver.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/resolvers/products-resolver.ts ***!
    \*********************************************************/

  /*! exports provided: ProductsResolver */

  /***/
  function srcAppServicesResolversProductsResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsResolver", function () {
      return ProductsResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../product.service */
    "./src/app/services/product.service.ts");

    var ProductsResolver = /*#__PURE__*/function () {
      function ProductsResolver(productService) {
        _classCallCheck(this, ProductsResolver);

        this.productService = productService;
      }

      _createClass(ProductsResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.productService.loadProducts();
        }
      }]);

      return ProductsResolver;
    }();

    ProductsResolver.ctorParameters = function () {
      return [{
        type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }];
    };

    ProductsResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ProductsResolver);
    /***/
  },

  /***/
  "./src/app/services/stores/auth.store.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/stores/auth.store.ts ***!
    \***********************************************/

  /*! exports provided: AuthStore */

  /***/
  function srcAppServicesStoresAuthStoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthStore", function () {
      return AuthStore;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _cart_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cart-store */
    "./src/app/services/stores/cart-store.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var AUTH_DATA = "auth_data";

    var AuthStore = /*#__PURE__*/function () {
      function AuthStore(http, router, cartStore, cookieService) {
        _classCallCheck(this, AuthStore);

        this.http = http;
        this.router = router;
        this.cartStore = cartStore;
        this.cookieService = cookieService;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.user$ = this.subject.asObservable();
        this.isLoggedIn$ = this.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
          return !!user;
        }));
        this.isLoggedOut$ = this.isLoggedIn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (loggedIn) {
          return !loggedIn;
        }));
        var user = localStorage.getItem(AUTH_DATA);

        if (user) {
          this.subject.next(JSON.parse(user));
        }
      }

      _createClass(AuthStore, [{
        key: "login",
        value: function login(email, password, remember) {
          var _this12 = this;

          return this.http.post("http://127.0.0.1:3000/api/users/login", {
            email: email,
            password: password,
            remember: remember
          }, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
            console.log(user);

            _this12.subject.next(user);

            localStorage.setItem(AUTH_DATA, JSON.stringify(user));

            _this12.cartStore.init();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this13 = this;

          return this.http.post("http://127.0.0.1:3000/api/users/logout", {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) {
            _this13.subject.next(null);

            localStorage.removeItem(AUTH_DATA);

            _this13.router.navigateByUrl("/login");
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])()); // this.subject.next(null);
          // localStorage.removeItem(AUTH_DATA);
          // this.cookieService.delete('connect.sid', '/', 'localhost', false, 'None');
          // this.router.navigateByUrl('/login');
        }
      }, {
        key: "register",
        value: function register(newUser) {
          var _this14 = this;

          return this.http.post("http://localhost:3000/api/users/register", newUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
            _this14.subject.next(user);

            localStorage.setItem(AUTH_DATA, JSON.stringify(user));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
        }
      }, {
        key: "getToken",
        value: function getToken() {
          var user = JSON.parse(localStorage.getItem(AUTH_DATA));

          if (user) {
            return user.token;
          }
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails() {
          return this.subject.getValue();
        }
      }, {
        key: "isAdmin",
        value: function isAdmin() {}
      }]);

      return AuthStore;
    }();

    AuthStore.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _cart_store__WEBPACK_IMPORTED_MODULE_6__["CartStore"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    AuthStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AuthStore);
    /***/
  },

  /***/
  "./src/app/services/stores/cart-store.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/stores/cart-store.ts ***!
    \***********************************************/

  /*! exports provided: CartStore */

  /***/
  function srcAppServicesStoresCartStoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartStore", function () {
      return CartStore;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_cart_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/cart-item */
    "./src/app/models/cart-item.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _config_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../config/api */
    "./src/config/api.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var CartStore = /*#__PURE__*/function () {
      function CartStore(http) {
        var _this15 = this;

        _classCallCheck(this, CartStore);

        this.http = http;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.cartItems$ = this.subject.asObservable();
        this.cartCount$ = this.cartItems$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (cartItems) {
          return cartItems.length;
        }));
        this.cartTotal$ = this.cartItems$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (cartItems) {
          return _this15.getCartTotal(cartItems);
        }));
      }

      _createClass(CartStore, [{
        key: "init",
        value: function init() {
          var _this16 = this;

          this.http.get(_config_api__WEBPACK_IMPORTED_MODULE_5__["cartUrl"], {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
            return console.log("Http reques executed");
          })).subscribe(function (items) {
            return _this16.subject.next(items);
          });
        }
      }, {
        key: "addToCart",
        value: function addToCart(product, qty) {
          var cartItems = this.subject.getValue();
          var itemIndex = cartItems.findIndex(function (item) {
            return item.product._id === product._id;
          }); // check if item already exists

          if (itemIndex === -1) {
            var newItem = new _models_cart_item__WEBPACK_IMPORTED_MODULE_3__["CartItem"](product, qty);
            cartItems.push(newItem);
          } else {
            cartItems[itemIndex].qty = cartItems[itemIndex].qty + qty;
          }

          var newCart = cartItems.slice(0);
          this.subject.next(newCart);
          return this.doPutRequest(newCart);
        }
      }, {
        key: "updateCart",
        value: function updateCart(updatedItem) {
          var newCartItems = this.updateAndCreateNewCart(updatedItem);
          this.subject.next(newCartItems);
          return this.doPutRequest(newCartItems);
        }
      }, {
        key: "updateAndCreateNewCart",
        value: function updateAndCreateNewCart(updatedItem) {
          var cartItems = this.subject.getValue();
          var itemIndex = cartItems.findIndex(function (item) {
            return item.product._id === updatedItem.product._id;
          });
          var newCart = cartItems.slice(0);
          newCart[itemIndex] = Object.assign(Object.assign({}, cartItems[itemIndex]), updatedItem);
          return newCart;
        }
      }, {
        key: "deleteItemFromCart",
        value: function deleteItemFromCart(itemToDelete) {
          var newCartItems = this.deleteAndCreateNewCart(itemToDelete);
          this.subject.next(newCartItems);
          return this.http["delete"]("".concat(_config_api__WEBPACK_IMPORTED_MODULE_5__["cartUrl"], "/").concat(itemToDelete.product._id));
        }
      }, {
        key: "deleteAndCreateNewCart",
        value: function deleteAndCreateNewCart(itemToDelete) {
          var cartItems = this.subject.getValue();
          var newCart = cartItems.filter(function (item) {
            return !(item.product._id === itemToDelete.product._id);
          });
          return newCart;
        }
      }, {
        key: "convertItemToIdOnly",
        value: function convertItemToIdOnly(item) {
          return {
            product: item.product._id,
            qty: item.qty
          };
        }
      }, {
        key: "doPutRequest",
        value: function doPutRequest(newCartItems) {
          var _this17 = this;

          return this.http.put(_config_api__WEBPACK_IMPORTED_MODULE_5__["cartUrl"], {
            items: newCartItems.map(function (item) {
              return _this17.convertItemToIdOnly(item);
            })
          });
        }
      }, {
        key: "getCartTotal",
        value: function getCartTotal(cartItems) {
          var total = 0;

          var _iterator2 = _createForOfIteratorHelper(cartItems),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var item = _step2.value;
              total = total + item.qty * item.product.price;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return total;
        }
      }, {
        key: "getNumberOfItemsInCart",
        value: function getNumberOfItemsInCart() {
          var cartItems = this.subject.getValue();
          return cartItems ? cartItems.length : 0;
        }
      }, {
        key: "getCurrentCart",
        value: function getCurrentCart() {
          return this.subject.getValue();
        }
      }]);

      return CartStore;
    }();

    CartStore.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    CartStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], CartStore);
    /***/
  },

  /***/
  "./src/config/api.ts":
  /*!***************************!*\
    !*** ./src/config/api.ts ***!
    \***************************/

  /*! exports provided: baseUrl, productsUrl, cartUrl, purchasesUrl */

  /***/
  function srcConfigApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "baseUrl", function () {
      return baseUrl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "productsUrl", function () {
      return productsUrl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cartUrl", function () {
      return cartUrl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "purchasesUrl", function () {
      return purchasesUrl;
    });
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? 'https://blabla.co.il' : 'http://127.0.0.1:3000/api';
    var productsUrl = baseUrl + '/products';
    var cartUrl = baseUrl + '/cart';
    var purchasesUrl = baseUrl + '/purchases';
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\skebe\workspace\dahira\GreenGarden\Client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map