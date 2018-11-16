webpackJsonp([2],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NieuwsDetailsPageModule", function() { return NieuwsDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nieuws_details__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NieuwsDetailsPageModule = /** @class */ (function () {
    function NieuwsDetailsPageModule() {
    }
    NieuwsDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nieuws_details__["a" /* NieuwsDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nieuws_details__["a" /* NieuwsDetailsPage */]),
            ],
        })
    ], NieuwsDetailsPageModule);
    return NieuwsDetailsPageModule;
}());

//# sourceMappingURL=nieuws-details.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NieuwsDetailsPage; });
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




var NieuwsDetailsPage = /** @class */ (function () {
    function NieuwsDetailsPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.articleIdentifier = this.navParams.get('articleIdentifier');
        this.http.get('https://beta.klankwijzer.nl/app/read/nieuws/' + this.articleIdentifier).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.article = data.artikel;
            if (!_this.article) {
                _this.navCtrl.popToRoot();
            }
            console.log(_this.article);
        }, function (err) {
            _this.navCtrl.popToRoot();
        });
    }
    NieuwsDetailsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    NieuwsDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NieuwsDetailsPage');
    };
    NieuwsDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nieuws-details',template:/*ion-inline-start:"/Users/wilco/Klankwijzer/src/pages/nieuws-details/nieuws-details.html"*/'<ion-header>\n\n  <ion-navbar color=primary>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div *ngIf="article" class="article">\n		<div class="articleImage">\n			<img src="https://beta.klankwijzer.nl/media/{{article.afbeelding}}" alt="{{article.titel_stripped}}" />\n		</div>\n		<div class="articleWrapper">\n			<div class="articleCategory">\n		        <span class="category-bullet bullet-{{article.categorie_slug}}"></span>\n			</div>\n			<h1 [innerHtml]="article.titel_stripped"></h1>\n			<div class="articleDate">{{article.publiceren_op}}</div>\n			<div class="articleIntro" [innerHtml]="article.intro"></div>\n			<div class="articleContent" [innerHtml]="article.body"></div>\n		</div>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/wilco/Klankwijzer/src/pages/nieuws-details/nieuws-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], NieuwsDetailsPage);
    return NieuwsDetailsPage;
}());

//# sourceMappingURL=nieuws-details.js.map

/***/ })

});
//# sourceMappingURL=2.js.map