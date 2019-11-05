(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text=center>Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n      <ion-card-title color=\"danger\">Seja bem-vindo</ion-card-title>\n       <ion-card-subtitle>iPec - Manejo Pecuario</ion-card-subtitle>\n        <ion-card-content color=\"light\">\n        <ion-text color=\"light\">\n          <h1>O aplicativo móvel iPec trás uma simplicidade na forma de coleta de informações de trabalho de gado. As informações são armazenadas no dispositivo e gera para o produtor rural informações compiladas dos trabalhos realizados.</h1>\n        </ion-text>\n        \n        </ion-card-content>\n</ion-content>  \n   "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
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



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-menu {\n  --ion-background-color: var(--ion-color-dark-tint);\n  --ion-text-color: var(--ion-color-primary-contrast);\n}\nion-menu ion-toolbar {\n  --background: var(--ion-color-danger-shade);\n}\nion-menu ion-list {\n  /* optional, but it needs when you use gradient as a background color.*/\n  background: transparent;\n}\nion-content {\n  --background: url('boi.jpg');\n}\nion-card-title {\n  --ion-text-color: var(--ion-color-primary-contrast);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxib3JnZXMvRG9jdW1lbnRzL2lvbmljL2lQZWN1YXJpby9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrREFBQTtFQUNBLG1EQUFBO0FDQ0Y7QURDRTtFQUNFLDJDQUFBO0FDQ0o7QURFRTtFQUFVLHVFQUFBO0VBQ1IsdUJBQUE7QUNDSjtBREdBO0VBQ0UsNEJBQUE7QUNBRjtBREdBO0VBQ0UsbURBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG4gIH1cblxuICBpb24tbGlzdCB7Lyogb3B0aW9uYWwsIGJ1dCBpdCBuZWVkcyB3aGVuIHlvdSB1c2UgZ3JhZGllbnQgYXMgYSBiYWNrZ3JvdW5kIGNvbG9yLiovXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cblxufVxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlbnMvYm9pLmpwZycpO1xuXG59XG5pb24tY2FyZC10aXRsZSB7XG4gIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbn1cblxuXG5cblxuLy9pb24tY29udGVudCB7XG4vLyAgLS1iYWNrZ3JvdW5kOiAjZmZmZjAwIHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlbnMvZmFybTEuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlciAhaW1wb3J0YW50O1xuXG4vL30iLCJpb24tbWVudSB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG59XG5pb24tbWVudSBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG59XG5pb24tbWVudSBpb24tbGlzdCB7XG4gIC8qIG9wdGlvbmFsLCBidXQgaXQgbmVlZHMgd2hlbiB5b3UgdXNlIGdyYWRpZW50IGFzIGEgYmFja2dyb3VuZCBjb2xvci4qL1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZW5zL2JvaS5qcGdcIik7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePage = class HomePage {
    constructor() { }
};
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map