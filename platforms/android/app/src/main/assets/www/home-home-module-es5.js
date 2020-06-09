(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text=center>Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n      <ion-card-title color=\"danger\">Seja bem-vindo</ion-card-title>\n       <ion-card-subtitle>iPec - Manejo Pecuario</ion-card-subtitle>\n        <ion-card-content color=\"light\">\n        <ion-text color=\"light\">\n          <h1>O aplicativo móvel iPec trás uma simplicidade na forma de coleta de informações de trabalho de gado. As informações são armazenadas no dispositivo e gera para o produtor rural informações compiladas dos trabalhos realizados.</h1>\n        </ion-text>\n        \n        </ion-card-content>\n\n</ion-content>  \n   "

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-menu {\n  --ion-background-color: var(--ion-color-dark-tint);\n  --ion-text-color: var(--ion-color-primary-contrast);\n}\nion-menu ion-toolbar {\n  --background: var(--ion-color-danger-shade);\n}\nion-menu ion-list {\n  /* optional, but it needs when you use gradient as a background color.*/\n  background: transparent;\n}\nion-content {\n  --background: url('boi.jpg') no-repeat center center / cover !important;\n}\nion-card-title {\n  --ion-text-color: var(--ion-color-primary-contrast);\n}\n.fabAddBtn {\n  color: var(--ion-color-primary);\n  right: 10px;\n  margin: 150px;\n  background: var(--ion-color-primary);\n  height: 70px;\n  width: 70px;\n  font-size: 50px;\n  line-height: 16px;\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  border-radius: 30px;\n  color: #fff;\n  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxib3JnZXMvRG9jdW1lbnRzL2lvbmljL2lQZWN1YXJpby9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrREFBQTtFQUNBLG1EQUFBO0FDQ0Y7QURDRTtFQUNFLDJDQUFBO0FDQ0o7QURFRTtFQUFVLHVFQUFBO0VBQ1IsdUJBQUE7QUNDSjtBREdBO0VBQ0UsdUVBQUE7QUNBRjtBREdBO0VBQ0UsbURBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFRQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlFQUFBO0FDUEYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuXG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xuICB9XG5cbiAgaW9uLWxpc3Qgey8qIG9wdGlvbmFsLCBidXQgaXQgbmVlZHMgd2hlbiB5b3UgdXNlIGdyYWRpZW50IGFzIGEgYmFja2dyb3VuZCBjb2xvci4qL1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG5cbn1cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZW5zL2JvaS5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyICFpbXBvcnRhbnQ7XG5cbn1cbmlvbi1jYXJkLXRpdGxlIHtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xufVxuXG4uZmFiQWRkQnRuIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLy8gZm9udC1zaXplOiAzMHB4O1xuICAvLyBtYXJnaW46IDhweDtcbiAgLy8gd2lkdGg6IDQwcHg7XG4gIC8vIGhlaWdodDogNDBweDtcbiAgLy8gbGluZS1oZWlnaHQ6IDQwcHg7XG4gIC8vXG4gIC8vcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgbWFyZ2luOiAxNTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBmb250LXNpemU6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA0cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuXG5cblxuLy9pb24tY29udGVudCB7XG4vLyAgLS1iYWNrZ3JvdW5kOiAjZmZmZjAwIHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlbnMvZmFybTEuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlciAhaW1wb3J0YW50O1xuXG4vL30iLCJpb24tbWVudSB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG59XG5pb24tbWVudSBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG59XG5pb24tbWVudSBpb24tbGlzdCB7XG4gIC8qIG9wdGlvbmFsLCBidXQgaXQgbmVlZHMgd2hlbiB5b3UgdXNlIGdyYWRpZW50IGFzIGEgYmFja2dyb3VuZCBjb2xvci4qL1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZW5zL2JvaS5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlciAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbn1cblxuLmZhYkFkZEJ0biB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHJpZ2h0OiAxMHB4O1xuICBtYXJnaW46IDE1MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDcwcHg7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDRweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map