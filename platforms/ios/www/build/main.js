webpackJsonp([11],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaPage; });
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




var AgendaPage = /** @class */ (function () {
    function AgendaPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.page = 0;
        this.nPages = 0;
        this.http.get('https://beta.klankwijzer.nl/app/agenda').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = data.agenda;
            _this.page = _this.page + 1;
            _this.nPages = data.paginas;
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postData = JSON.stringify({
            pagina: "agenda"
        });
        this.http.post('https://beta.klankwijzer.nl/app/get_advertenties', postData, requestOptions)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data.success) {
                _this.ads = data.ads;
            }
        }, function (error) {
            console.log(error);
        });
    }
    AgendaPage.prototype.readAgendaArticle = function (articleIdentifier) {
        this.navCtrl.push('AgendaDetailsPage', { articleIdentifier: articleIdentifier });
    };
    AgendaPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            _this.http.get('https://beta.klankwijzer.nl/app/agenda?page=' + _this.page).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data.agenda) {
                    for (var i = 0; i < data.agenda.length; i++) {
                        _this.posts.push(data.agenda[i]);
                    }
                    _this.page = _this.page + 1;
                }
            });
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    AgendaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgendaPage');
    };
    AgendaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agenda',template:/*ion-inline-start:"/Users/wilco/Klankwijzer/src/pages/agenda/agenda.html"*/'<ion-header>\n  <ion-navbar color=primary>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>agenda</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="adWrapper" *ngIf="ads !== undefined && ads.leader !== undefined">\n    <div>Advertentie</div>\n    <img src="https://beta.klankwijzer.nl/media/advertenties/{{ads.leader.advertentie}}" />\n  </div>\n  <ion-list>\n    <ion-item no-lines *ngFor="let post of posts" (click)="readAgendaArticle(post.identifier)">\n        <div class="articleList">\n          	<div class="articleImage">\n            	<img src="https://beta.klankwijzer.nl/media/{{post.afbeelding}}" />\n          	</div>\n          	<div class="articleInfo">\n	            <div class="articleCategory">\n	              	<span class="category-bullet bullet-{{post.categorie_slug}}"></span>\n	            </div>\n	            <div class="articleDate" [innerHtml]="post.begindata[0]"></div>\n	            <div class="articleLocation">\n	            	<span [innerHtml]="post.plaats"></span> &bull; <span [innerHtml]="post.locatie"></span>\n	            </div>\n            	<h2 text-wrap [innerHtml]="post.titel"></h2>\n          	</div>\n        </div>\n    </ion-item>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="page < nPages">\n    <ion-infinite-scroll-content loadingText="Agenda wordt geladen...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/wilco/Klankwijzer/src/pages/agenda/agenda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], AgendaPage);
    return AgendaPage;
}());

//# sourceMappingURL=agenda.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchiefPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArchiefPage = /** @class */ (function () {
    function ArchiefPage(navCtrl, navParams, http, iab) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.iab = iab;
        this.page = 0;
        this.nPages = 0;
        this.http.get('https://beta.klankwijzer.nl/app/archief').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = data.archief;
            _this.page = _this.page + 1;
            _this.nPages = data.paginas;
        });
    }
    ArchiefPage.prototype.readUitgave = function (url) {
        var options = {
            toolbar: 'yes',
            location: 'no'
        };
        var browser = this.iab.create(url, '_system', options);
    };
    ArchiefPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            _this.http.get('https://beta.klankwijzer.nl/app/archief?page=' + _this.page).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data.archief) {
                    for (var i = 0; i < data.archief.length; i++) {
                        _this.posts.push(data.archief[i]);
                    }
                    _this.page = _this.page + 1;
                }
            });
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    ArchiefPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArchiefPage');
    };
    ArchiefPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-archief',template:/*ion-inline-start:"/Users/wilco/Klankwijzer/src/pages/archief/archief.html"*/'<ion-header>\n  <ion-navbar color=primary>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>archief</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	<ion-row>\n		<ion-col *ngFor="let post of posts" class="col">\n			<ion-card (click)="readUitgave(post.url)">\n		    	<img src="https://beta.klankwijzer.nl/media/archief/{{post.cover}}"/>\n		    	<div class="archiefInfo">\n			    	<div class="archiefType">{{post.type}}</div>\n			    	<h3>{{post.datum}}</h3>\n			    </div>\n\n			</ion-card>\n		</ion-col>\n	</ion-row>\n    \n    \n\n  	<ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="page < nPages">\n    	<ion-infinite-scroll-content loadingText="Meer uitgaven worden geladen...">\n    	</ion-infinite-scroll-content>\n  	</ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/wilco/Klankwijzer/src/pages/archief/archief.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], ArchiefPage);
    return ArchiefPage;
}());

//# sourceMappingURL=archief.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MuzikantenPage; });
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




var MuzikantenPage = /** @class */ (function () {
    function MuzikantenPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.page = 0;
        this.nPages = 0;
        this.http.get('https://beta.klankwijzer.nl/app/muzikanten').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = data.muzikanten;
            _this.page = _this.page + 1;
            _this.nPages = data.paginas;
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postData = JSON.stringify({
            pagina: "muzikantenpool"
        });
        this.http.post('https://beta.klankwijzer.nl/app/get_advertenties', postData, requestOptions)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data.success) {
                _this.ads = data.ads;
            }
        }, function (error) {
            console.log(error);
        });
    }
    MuzikantenPage.prototype.readMuzikantArticle = function (muzikant) {
        this.navCtrl.push('MuzikantDetailsPage', { muzikant: muzikant });
    };
    MuzikantenPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            _this.http.get('https://beta.klankwijzer.nl/app/nieuws?page=' + _this.page).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data.nieuws) {
                    for (var i = 0; i < data.nieuws.length; i++) {
                        _this.posts.push(data.nieuws[i]);
                    }
                    _this.page = _this.page + 1;
                }
            });
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    MuzikantenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MuzikantenPage');
    };
    MuzikantenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-muzikanten',template:/*ion-inline-start:"/Users/wilco/Klankwijzer/src/pages/muzikanten/muzikanten.html"*/'<ion-header>\n    <ion-navbar color=primary>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>muzikantenpool</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content>\n    <div class="adWrapper" *ngIf="ads !== undefined && ads.leader !== undefined">\n      <div>Advertentie</div>\n      <img src="https://beta.klankwijzer.nl/media/advertenties/{{ads.leader.advertentie}}" />\n    </div>\n\n    <ion-list>\n      <ion-item no-lines *ngFor="let post of posts" (click)="readMuzikantArticle(post)">\n        <div class="articleList">\n          <div class="articleInfo">\n            <div class="articleCategory">\n              <span class="category-bullet bullet-{{post.categorie_slug}}"></span>\n            </div>\n            <h2 text-wrap [innerHtml]="post.titel"></h2>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                    <p>\n                      <strong>Naam</strong><br/>\n                      <span [innerHtml]="post.naam"></span>\n                    </p>\n                </ion-col>\n                <ion-col>\n                    <p>\n                      <strong>Instrument</strong><br/>\n                      <span [innerHtml]="post.instrument"></span>\n                    </p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                    <p>\n                      <strong>Woonplaats</strong><br/>\n                      <span [innerHtml]="post.woonplaats +\' (\' + post.provincie + \')\'"></span>\n                    </p>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </div>\n      </ion-item>\n    </ion-list>\n  \n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="page < nPages">\n      <ion-infinite-scroll-content loadingText="Meer nieuws wordt geladen...">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-content>\n  '/*ion-inline-end:"/Users/wilco/Klankwijzer/src/pages/muzikanten/muzikanten.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], MuzikantenPage);
    return MuzikantenPage;
}());

//# sourceMappingURL=muzikanten.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NieuwsPage; });
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




var NieuwsPage = /** @class */ (function () {
    function NieuwsPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.page = 0;
        this.nPages = 0;
        this.http.get('https://beta.klankwijzer.nl/app/nieuws').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = data.nieuws;
            _this.page = _this.page + 1;
            _this.nPages = data.paginas;
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postData = JSON.stringify({
            pagina: "nieuws"
        });
        this.http.post('https://beta.klankwijzer.nl/app/get_advertenties', postData, requestOptions)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data.success) {
                _this.ads = data.ads;
            }
        }, function (error) {
            console.log(error);
        });
    }
    NieuwsPage.prototype.readNieuwsArticle = function (articleIdentifier) {
        this.navCtrl.push('NieuwsDetailsPage', { articleIdentifier: articleIdentifier });
    };
    NieuwsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            _this.http.get('https://beta.klankwijzer.nl/app/nieuws?page=' + _this.page).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data.nieuws) {
                    for (var i = 0; i < data.nieuws.length; i++) {
                        _this.posts.push(data.nieuws[i]);
                    }
                    _this.page = _this.page + 1;
                }
            });
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    NieuwsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NieuwsPage');
    };
    NieuwsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nieuws',template:/*ion-inline-start:"/Users/wilco/Klankwijzer/src/pages/nieuws/nieuws.html"*/'<ion-header>\n  <ion-navbar color=primary>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>nieuws</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="adWrapper" *ngIf="ads !== undefined && ads.leader !== undefined">\n    <div>Advertentie</div>\n    <img src="https://beta.klankwijzer.nl/media/advertenties/{{ads.leader.advertentie}}" />\n  </div>\n	<ion-list>\n    <ion-item no-lines *ngFor="let post of posts" (click)="readNieuwsArticle(post.identifier)">\n      <div *ngIf="post.is_sticky == 1; else normal" class="sticky">\n        <img src="https://beta.klankwijzer.nl/media/{{post.afbeelding}}" />\n        <div class="sticky_title_wrapper">\n          <div class="articleCategory">\n            <span class="category-bullet bullet-{{post.categorie_slug}}"></span>\n          </div>\n          <h2 text-wrap [innerHtml]="post.titel"></h2>\n        </div>\n      </div>\n      <ng-template #normal>\n        <div class="articleList">\n          <div class="articleImage">\n            <img src="https://beta.klankwijzer.nl/media/{{post.afbeelding}}" />\n          </div>\n          <div class="articleInfo">\n            <div class="articleCategory">\n              <span class="category-bullet bullet-{{post.categorie_slug}}"></span>\n            </div>\n            <h2 text-wrap [innerHtml]="post.titel"></h2>\n          </div>\n        </div>\n      </ng-template>\n    </ion-item>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="page < nPages">\n    <ion-infinite-scroll-content loadingText="Meer nieuws wordt geladen...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/wilco/Klankwijzer/src/pages/nieuws/nieuws.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], NieuwsPage);
    return NieuwsPage;
}());

//# sourceMappingURL=nieuws.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublieksprijsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PublieksprijsPage = /** @class */ (function () {
    function PublieksprijsPage(navCtrl, navParams, http, geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.geolocation = geolocation;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postData = JSON.stringify({
            pagina: "interactief"
        });
        this.http.post('https://beta.klankwijzer.nl/app/get_advertenties', postData, requestOptions)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data.success) {
                _this.ads = data.ads;
            }
        }, function (error) {
            console.log(error);
        });
    }
    PublieksprijsPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log('afterViewInit called');
        this.geolocation.getCurrentPosition().then(function (res) {
            console.log(res.coords.latitude);
            console.log(res.coords.longitude);
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var postData = JSON.stringify({
                lat: res.coords.latitude, long: res.coords.longitude
            });
            _this.http.post("https://beta.klankwijzer.nl/app/check_stemronde", postData, requestOptions)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                if (data.success) {
                    console.log(data);
                    _this.stemronde = data.stemronde;
                }
            }, function (error) {
                console.log(error);
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    PublieksprijsPage.prototype.stemStemronde = function (identifier) {
        this.navCtrl.push('StemmenPage', { identifier: identifier });
    };
    PublieksprijsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PublieksprijsPage');
    };
    PublieksprijsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-publieksprijs',template:/*ion-inline-start:"/Users/wilco/Klankwijzer/src/pages/publieksprijs/publieksprijs.html"*/'<ion-header>\n  <ion-navbar color=primary>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>KW <span class="titlePart">interactief</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	\n	<ion-card *ngIf="stemronde === undefined">\n		<ion-card-content>\n				<div style="text-align: center;"><ion-spinner></ion-spinner></div>\n				<p style="text-align: center;">Controleren op actieve stemronde...</p>\n		</ion-card-content>\n	</ion-card>\n\n	<ng-container *ngIf="stemronde !== undefined">\n		<ion-card *ngIf="stemronde; else geen_stemronde" class="stemronde" (click)="stemStemronde(stemronde.identifier)">\n			<ion-card-header>\n					{{stemronde.titel}}\n				</ion-card-header>\n				<ion-card-content>{{stemronde.subtitel}}</ion-card-content>\n		</ion-card>\n		<ng-template #geen_stemronde>\n			<ion-card class="geen_stemronde">\n					<ion-card-content>Er is op dit moment geen stemronde actief</ion-card-content>\n			</ion-card>\n		</ng-template>\n	</ng-container>\n\n	<div class="adWrapper" *ngIf="ads !== undefined && ads.leader !== undefined">\n		<div>Advertentie</div>\n		<img src="https://beta.klankwijzer.nl/media/advertenties/{{ads.leader.advertentie}}" />\n	</div>\n\n	<div class="ppOmschrijving">\n			<h3>Verhoog de betrokkenheid met KW Interactief</h3>\n			<p>Voeg een extra dimensie toe aan je concours of festival door het publiek te laten stemmen voor een publieksprijs. Verhoog als muziekbond of doelgroep de betrokkenheid van je muzikanten door ze een prikkelende stelling voor te leggen. Peil de mening van de achterban aan de hand van een enquête. Versterk de beleving door muzikanten en supporters in de aanloop naar een wedstrijd of kampioenschap de uitslag te laten voorspellen. KW Interactief biedt allerlei interactieve mogelijkheden om de betrokkenheid van spelers en publiek bij je evenement te vergroten. Deze service wordt door KNMO Klankwijzer gratis aangeboden aan bonden, doelgroepen en festivalorganisaties. Informeer naar de mogelijkheden via <a href="mailto:redactie@klankwijzer.nl">redactie@klankwijzer.nl</a></p>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/wilco/Klankwijzer/src/pages/publieksprijs/publieksprijs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], PublieksprijsPage);
    return PublieksprijsPage;
}());

//# sourceMappingURL=publieksprijs.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacaturesPage; });
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




var VacaturesPage = /** @class */ (function () {
    function VacaturesPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.page = 0;
        this.nPages = 0;
        this.http.get('https://beta.klankwijzer.nl/app/vacatures').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = data.vacatures;
            _this.page = _this.page + 1;
            _this.nPages = data.paginas;
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postData = JSON.stringify({
            pagina: "vacatures"
        });
        this.http.post('https://beta.klankwijzer.nl/app/get_advertenties', postData, requestOptions)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data.success) {
                _this.ads = data.ads;
            }
        }, function (error) {
            console.log(error);
        });
    }
    VacaturesPage.prototype.readVacatureArticle = function (articleIdentifier) {
        this.navCtrl.push('VacatureDetailsPage', { articleIdentifier: articleIdentifier });
    };
    VacaturesPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            _this.http.get('https://beta.klankwijzer.nl/app/vacatures?page=' + _this.page).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data.vacatures) {
                    for (var i = 0; i < data.vacatures.length; i++) {
                        _this.posts.push(data.vacatures[i]);
                    }
                    _this.page = _this.page + 1;
                }
            });
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    VacaturesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VacaturesPage');
    };
    VacaturesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vacatures',template:/*ion-inline-start:"/Users/wilco/Klankwijzer/src/pages/vacatures/vacatures.html"*/'<ion-header>\n  <ion-navbar color=primary>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>vacatures</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="adWrapper" *ngIf="ads !== undefined && ads.leader !== undefined">\n    <div>Advertentie</div>\n    <img src="https://beta.klankwijzer.nl/media/advertenties/{{ads.leader.advertentie}}" />\n  </div>\n\n	<ion-list>\n    <ion-item no-lines *ngFor="let post of posts" (click)="readVacatureArticle(post.identifier)">\n      <div *ngIf="post.is_sticky == 1; else normal" class="sticky">\n        <img src="https://beta.klankwijzer.nl/media/{{post.afbeelding}}" />\n        <div class="sticky_title_wrapper">\n          <div class="articleCategory">\n            <span class="category-bullet bullet-{{post.categorie_slug}}"></span>\n          </div>\n          <h2 text-wrap [innerHtml]="post.titel"></h2>\n        </div>\n      </div>\n      <ng-template #normal>\n        <div class="articleList">\n          <div class="articleImage">\n            <img src="https://beta.klankwijzer.nl/media/{{post.afbeelding}}" />\n          </div>\n          <div class="articleInfo">\n            <div class="articleCategory">\n              <span class="category-bullet bullet-{{post.categorie_slug}}"></span>\n            </div>\n            <h2 text-wrap [innerHtml]="post.titel"></h2>\n          </div>\n        </div>\n      </ng-template>\n    </ion-item>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="page < nPages">\n    <ion-infinite-scroll-content loadingText="Meer vacatures wordt geladen...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/wilco/Klankwijzer/src/pages/vacatures/vacatures.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], VacaturesPage);
    return VacaturesPage;
}());

//# sourceMappingURL=vacatures.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agenda-details/agenda-details.module": [
		284,
		4
	],
	"../pages/agenda/agenda.module": [
		285,
		10
	],
	"../pages/archief/archief.module": [
		286,
		9
	],
	"../pages/muzikant-details/muzikant-details.module": [
		287,
		3
	],
	"../pages/muzikanten/muzikanten.module": [
		288,
		8
	],
	"../pages/nieuws-details/nieuws-details.module": [
		289,
		2
	],
	"../pages/nieuws/nieuws.module": [
		290,
		7
	],
	"../pages/publieksprijs/publieksprijs.module": [
		291,
		6
	],
	"../pages/stemmen/stemmen.module": [
		292,
		1
	],
	"../pages/vacature-details/vacature-details.module": [
		293,
		0
	],
	"../pages/vacatures/vacatures.module": [
		294,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.http.get('https://beta.klankwijzer.nl/app/home').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = data.nieuws;
            _this.vacatures = data.vacatures;
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postData = JSON.stringify({
            pagina: "voorpagina"
        });
        this.http.post('https://beta.klankwijzer.nl/app/get_advertenties', postData, requestOptions)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data.success) {
                _this.ads = data.ads;
                console.log(_this.ads);
            }
        }, function (error) {
            console.log(error);
        });
    }
    HomePage.prototype.readNieuwsArticle = function (articleIdentifier) {
        this.navCtrl.push('NieuwsDetailsPage', { articleIdentifier: articleIdentifier });
    };
    HomePage.prototype.readVacatureArticle = function (articleIdentifier) {
        this.navCtrl.push('VacatureDetailsPage', { articleIdentifier: articleIdentifier });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/wilco/Klankwijzer/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color=primary>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>klank<span class="titlePart">wijzer</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="adWrapper" *ngIf="ads !== undefined && ads.leader !== undefined">\n    <div>Advertentie</div>\n    <img src="https://beta.klankwijzer.nl/media/advertenties/{{ads.leader.advertentie}}" />\n  </div>\n  <ion-list>\n    <ion-item no-lines *ngFor="let post of posts" (click)="readNieuwsArticle(post.identifier)">\n      <div *ngIf="post.is_sticky == 1; else normal" class="sticky">\n        <img src="https://beta.klankwijzer.nl/media/{{post.afbeelding}}" />\n        <div class="sticky_title_wrapper">\n          <div class="articleCategory">\n            <span class="category-bullet bullet-{{post.categorie_slug}}"></span>\n          </div>\n          <h2 text-wrap [innerHtml]="post.titel"></h2>\n        </div>\n      </div>\n      <ng-template #normal>\n        <div class="articleList">\n          <div class="articleImage">\n            <img src="https://beta.klankwijzer.nl/media/{{post.afbeelding}}" />\n          </div>\n          <div class="articleInfo">\n            <div class="articleCategory">\n              <span class="category-bullet bullet-{{post.categorie_slug}}"></span>\n            </div>\n            <h2 text-wrap [innerHtml]="post.titel"></h2>\n          </div>\n        </div>\n      </ng-template>\n    </ion-item>\n  </ion-list>\n\n  <div class="adWrapper" *ngIf="ads !== undefined && ads.nieuws !== undefined">\n      <div>Advertentie</div>\n      <img src="https://beta.klankwijzer.nl/media/advertenties/{{ads.nieuws.advertentie}}" />\n    </div>\n  \n  <div class="vacatureWrapper">\n    <h3 class="vacatureHeader">VACATURES</h3>\n    <div class="vacatures">\n      <div class="vacature" *ngFor="let vacature of vacatures" (click)="readVacatureArticle(vacature.identifier)">\n        <div class="vacatureImage">\n          <img src="https://beta.klankwijzer.nl/media/{{vacature.afbeelding}}" />\n        </div>\n        <div class="articleCategory">\n          <span class="category-bullet bullet-{{vacature.categorie_slug}}"></span>\n        </div>\n        <h3 text-wrap [innerHtml]="vacature.titel"></h3>\n      </div>\n    </div>\n  </div>\n\n  <div class="adWrapper" *ngIf="ads !== undefined && ads.vacatures !== undefined">\n      <div>Advertentie</div>\n      <img src="https://beta.klankwijzer.nl/media/advertenties/{{ads.vacatures.advertentie}}" />\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/wilco/Klankwijzer/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavoriteProvider = /** @class */ (function () {
    function FavoriteProvider(storage, http, device) {
        this.storage = storage;
        this.http = http;
        this.device = device;
    }
    FavoriteProvider.prototype.isVoted = function (stemronde) {
        return this.storage.get(stemronde.identifier);
    };
    FavoriteProvider.prototype.makeVote = function (stemronde, optie) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postData = JSON.stringify({
            stemronde: stemronde.identifier,
            optie: optie,
            user: this.device.uuid ? this.device.uuid : 't1234567890'
        });
        this.http.post("https://beta.klankwijzer.nl/app/make_vote", postData, requestOptions)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
        });
        return this.storage.set(stemronde.identifier, optie);
    };
    FavoriteProvider.prototype.unVote = function (stemronde) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postData = JSON.stringify({
            stemronde: stemronde.identifier,
            user: this.device.uuid ? this.device.uuid : 't1234567890'
        });
        this.http.post("https://beta.klankwijzer.nl/app/unvote", postData, requestOptions)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
        });
        return this.storage.remove(stemronde.identifier);
    };
    FavoriteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */]])
    ], FavoriteProvider);
    return FavoriteProvider;
}());

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_nieuws_nieuws__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_agenda_agenda__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_vacatures_vacatures__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_muzikanten_muzikanten__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_archief_archief__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_publieksprijs_publieksprijs__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_favorite_favorite__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_device__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_nieuws_nieuws__["a" /* NieuwsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_agenda_agenda__["a" /* AgendaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_vacatures_vacatures__["a" /* VacaturesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_muzikanten_muzikanten__["a" /* MuzikantenPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_archief_archief__["a" /* ArchiefPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_publieksprijs_publieksprijs__["a" /* PublieksprijsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    backButtonText: 'Terug'
                }, {
                    links: [
                        { loadChildren: '../pages/agenda-details/agenda-details.module#AgendaDetailsPageModule', name: 'AgendaDetailsPage', segment: 'agenda-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agenda/agenda.module#AgendaPageModule', name: 'AgendaPage', segment: 'agenda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/archief/archief.module#ArchiefPageModule', name: 'ArchiefPage', segment: 'archief', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/muzikant-details/muzikant-details.module#MuzikantDetailsPageModule', name: 'MuzikantDetailsPage', segment: 'muzikant-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/muzikanten/muzikanten.module#MuzikantenPageModule', name: 'MuzikantenPage', segment: 'muzikanten', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nieuws-details/nieuws-details.module#NieuwsDetailsPageModule', name: 'NieuwsDetailsPage', segment: 'nieuws-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nieuws/nieuws.module#NieuwsPageModule', name: 'NieuwsPage', segment: 'nieuws', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/publieksprijs/publieksprijs.module#PublieksprijsPageModule', name: 'PublieksprijsPage', segment: 'publieksprijs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stemmen/stemmen.module#StemmenPageModule', name: 'StemmenPage', segment: 'stemmen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vacature-details/vacature-details.module#VacatureDetailsPageModule', name: 'VacatureDetailsPage', segment: 'vacature-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vacatures/vacatures.module#VacaturesPageModule', name: 'VacaturesPage', segment: 'vacatures', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_nieuws_nieuws__["a" /* NieuwsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_agenda_agenda__["a" /* AgendaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_vacatures_vacatures__["a" /* VacaturesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_muzikanten_muzikanten__["a" /* MuzikantenPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_archief_archief__["a" /* ArchiefPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_publieksprijs_publieksprijs__["a" /* PublieksprijsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_16__providers_favorite_favorite__["a" /* FavoriteProvider */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_device__["a" /* Device */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_nieuws_nieuws__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_agenda_agenda__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_vacatures_vacatures__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_muzikanten_muzikanten__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_archief_archief__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_publieksprijs_publieksprijs__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.pages = [
            { title: 'Voorpagina', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Nieuws', component: __WEBPACK_IMPORTED_MODULE_5__pages_nieuws_nieuws__["a" /* NieuwsPage */] },
            { title: 'Agenda', component: __WEBPACK_IMPORTED_MODULE_6__pages_agenda_agenda__["a" /* AgendaPage */] },
            { title: 'Vacatures', component: __WEBPACK_IMPORTED_MODULE_7__pages_vacatures_vacatures__["a" /* VacaturesPage */] },
            { title: 'Muzikantenpool', component: __WEBPACK_IMPORTED_MODULE_8__pages_muzikanten_muzikanten__["a" /* MuzikantenPage */] },
            { title: 'Archief', component: __WEBPACK_IMPORTED_MODULE_9__pages_archief_archief__["a" /* ArchiefPage */] },
            { title: 'KW Interactief', component: __WEBPACK_IMPORTED_MODULE_10__pages_publieksprijs_publieksprijs__["a" /* PublieksprijsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleLightContent();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/wilco/Klankwijzer/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        <img src="../assets/imgs/logo_def_klankwijzer_knmo.png" left alt="Klankwijzer - nieuws- en informatieplatform van de KNMO" />\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/wilco/Klankwijzer/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map