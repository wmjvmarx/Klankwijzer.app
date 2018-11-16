webpackJsonp([1],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StemmenPageModule", function() { return StemmenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stemmen__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StemmenPageModule = /** @class */ (function () {
    function StemmenPageModule() {
    }
    StemmenPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__stemmen__["a" /* StemmenPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__stemmen__["a" /* StemmenPage */]),
            ],
        })
    ], StemmenPageModule);
    return StemmenPageModule;
}());

//# sourceMappingURL=stemmen.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StemmenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_favorite_favorite__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StemmenPage = /** @class */ (function () {
    function StemmenPage(navCtrl, navParams, favoriteProvider, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favoriteProvider = favoriteProvider;
        this.http = http;
        this.identifier = this.navParams.get('identifier');
        this.http.get('https://beta.klankwijzer.nl/app/get_stemronde/' + this.identifier).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (!data.stemronde) {
                _this.navCtrl.popToRoot();
            }
            _this.stemronde = data.stemronde;
            _this.opties = data.stemronde.opties;
            _this.favoriteProvider.isVoted(_this.stemronde).then(function (isVoted) {
                _this.vote = isVoted;
            });
            console.log(_this.stemronde);
        }, function (err) {
            _this.navCtrl.popToRoot();
        });
    }
    StemmenPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    StemmenPage.prototype.makeVote = function (optie) {
        var _this = this;
        console.log('vote started');
        this.favoriteProvider.makeVote(this.stemronde, optie).then(function () {
            console.log('vote made: ' + optie);
            _this.vote = optie;
            console.log('vote: ' + _this.vote);
        });
    };
    StemmenPage.prototype.unVote = function () {
        var _this = this;
        console.log('unvote started');
        this.favoriteProvider.unVote(this.stemronde).then(function () {
            console.log('unvote made');
            _this.vote = false;
            console.log('vote: ' + _this.vote);
        });
    };
    StemmenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StemmenPage');
    };
    StemmenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stemmen',template:/*ion-inline-start:"/Users/wilco/Klankwijzer/src/pages/stemmen/stemmen.html"*/'<ion-header>\n\n  <ion-navbar color=primary>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n	<ng-container *ngIf="stemronde">\n		<h2 [innerHtml]="stemronde.titel"></h2>\n		<div [innerHtml]="stemronde.omschrijving"></div>\n	</ng-container>\n\n	<ng-container *ngIf="opties && vote !== undefined">\n\n		<ng-container *ngIf="!vote">\n				<ion-card *ngFor="let optie of opties" (click)="makeVote(optie.identifier)">\n						<ion-card-content>\n							<span [innerHtml]="optie.optie"></span>\n						</ion-card-content>\n					</ion-card>\n		</ng-container>\n\n\n			\n	</ng-container>\n\n	<ng-container *ngIf="vote">\n		<ng-container *ngFor="let optie of opties">\n\n				<ion-card  *ngIf="optie.identifier === vote" class="voted" (click)="unVote()">\n					<ion-card-content>\n						<span [innerHtml]="optie.optie"></span>\n					</ion-card-content>\n				</ion-card>\n				\n				<ion-card *ngIf="optie.identifier !== vote" >\n					<ion-card-content>\n						<span [innerHtml]="optie.optie"></span>\n					</ion-card-content>\n				</ion-card>\n		</ng-container>	\n	</ng-container>\n\n</ion-content>'/*ion-inline-end:"/Users/wilco/Klankwijzer/src/pages/stemmen/stemmen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_favorite_favorite__["a" /* FavoriteProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], StemmenPage);
    return StemmenPage;
}());

//# sourceMappingURL=stemmen.js.map

/***/ })

});
//# sourceMappingURL=1.js.map