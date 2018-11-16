webpackJsonp([3],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuzikantDetailsPageModule", function() { return MuzikantDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__muzikant_details__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MuzikantDetailsPageModule = /** @class */ (function () {
    function MuzikantDetailsPageModule() {
    }
    MuzikantDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__muzikant_details__["a" /* MuzikantDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__muzikant_details__["a" /* MuzikantDetailsPage */]),
            ],
        })
    ], MuzikantDetailsPageModule);
    return MuzikantDetailsPageModule;
}());

//# sourceMappingURL=muzikant-details.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MuzikantDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MuzikantDetailsPage = /** @class */ (function () {
    function MuzikantDetailsPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.article = this.navParams.get('muzikant');
    }
    MuzikantDetailsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    MuzikantDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MuzikantDetailsPage');
    };
    MuzikantDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-muzikant-details',template:/*ion-inline-start:"/Users/wilco/Klankwijzer/src/pages/muzikant-details/muzikant-details.html"*/'<ion-header>\n\n    <ion-navbar color=primary>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n    <div *ngIf="article" class="article">\n      \n      <div class="articleWrapper">\n        <div class="articleCategory">\n              <span class="category-bullet bullet-{{article.categorie_slug}}"></span>\n        </div>\n        <h1 [innerHtml]="article.titel"></h1>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n                <p>\n                  <strong>Naam</strong><br/>\n                  <span [innerHtml]="article.naam"></span>\n                </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                <p>\n                  <strong>E-mail</strong><br/>\n                  <span [innerHtml]="article.email"></span>\n                </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n                <p>\n                  <strong>Instrument</strong><br/>\n                  <span [innerHtml]="article.instrument"></span><br/>\n                  <span>Speelniveau: </span><span [innerHtml]="article.niveau"></span>\n                </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n                <p>\n                  <strong>Woonplaats</strong><br/>\n                  <span [innerHtml]="article.woonplaats +\' (\' + article.provincie + \')\'"></span><br/>\n                  <span>Maximale reisafstand: </span><span [innerHtml]="article.reisafstand"></span>\n                </p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <div class="articleContent" [innerHtml]="article.omschrijving"></div>\n      </div>\n    </div>\n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/wilco/Klankwijzer/src/pages/muzikant-details/muzikant-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], MuzikantDetailsPage);
    return MuzikantDetailsPage;
}());

//# sourceMappingURL=muzikant-details.js.map

/***/ })

});
//# sourceMappingURL=3.js.map