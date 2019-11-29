(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _artwork_detail_artwork_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./artwork-detail/artwork-detail.component */ "./src/app/artwork-detail/artwork-detail.component.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/portfolios', pathMatch: 'full' },
    { path: 'artwork/:id', component: _artwork_detail_artwork_detail_component__WEBPACK_IMPORTED_MODULE_3__["ArtworkDetailComponent"] },
    { path: 'pages/:slug', component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_4__["PagesComponent"] },
    { path: 'portfolios', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioComponent"] },
    { path: 'portfolio/:slug', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Primary Page Layout\n–––––––––––––––––––––––––––––––––––––––––––––––––– -->\n<main>\n  <header class=\"container\">\n    <div class=\"row\">\n      <div class=\"eight columns offset-by-three\">\n        <h2 class=\"u-pull-left\"><a routerLink=\"/\">{{ title }}</a></h2>\n        <nav id=\"topnav\">\n          <a routerLink=\"/portfolios\">Portfolio</a>\n          <!-- TODO: dynamic page links -->\n          <a routerLink=\"/pages/arts-beacon\">Arts Beacon</a>\n          <a routerLink=\"/pages/cv\">CV</a>\n        </nav>\n      </div>\n    </div>\n  </header>\n\n  <router-outlet></router-outlet>\n</main>\n\n<app-messages></app-messages>\n\n<!-- End Document\n–––––––––––––––––––––––––––––––––––––––––––––––––– -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Jena Dost';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _artworks_artworks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./artworks/artworks.component */ "./src/app/artworks/artworks.component.ts");
/* harmony import */ var _artwork_detail_artwork_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./artwork-detail/artwork-detail.component */ "./src/app/artwork-detail/artwork-detail.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _artworks_artworks_component__WEBPACK_IMPORTED_MODULE_3__["ArtworksComponent"],
                _artwork_detail_artwork_detail_component__WEBPACK_IMPORTED_MODULE_4__["ArtworkDetailComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_5__["MessagesComponent"],
                _pages_pages_component__WEBPACK_IMPORTED_MODULE_7__["PagesComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/artwork-detail/artwork-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/artwork-detail/artwork-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".artworkDetail h1 {\n  font-size: 2.5rem;\n  font-style: italic;\n  margin-bottom: 0.5rem;\n}\n\n.artworkDetail img {\n  border: 1px solid #999;\n}\n\n.artworkDetail {\n  text-align: right;\n}\n\n.artworkDetail .description {\n  text-align: left;\n  margin-top: 5.0rem;\n}\n\n.portfolioList li {\n  list-style: none;\n}\n\n.modal img {\n  border: 1px solid #999;\n  box-sizing: content-box;\n}\n\n/* modal */\n\n.modal {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0,0,0,0.65);\n\tvisibility: hidden;\n\t-webkit-backface-visibility: hidden;\n\t        backface-visibility: hidden;\n  opacity: 0;\n  transition: opacity .15s ease-in-out;\n}\n\n.modal.modal-open {\n  visibility: visible;\n  -webkit-backface-visibility: visible;\n          backface-visibility: visible;\n  opacity: 1;\n  z-index: 1;\n}\n\n.modal .modal-inner {\n  position: relative;\n  height: 100%;\n  display:flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.modal .modal-content {\n  background-color: white;\n  max-width: 75em;\n  padding: 1em 1.5em;\n  position: relative;\n  margin: 2em;\n  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.35);\n}\n\n.modal .modal-close-icon {\n  position: absolute;\n  right: 1.5em;\n}\n\n.modal h1, .modal h2, .modal h3, .modal h4, .modal h5, .modal h6 {\n  margin-bottom: 0.25em;\n}\n\n.modal p {\n    margin-bottom: 1em;\n}\n\n.modal .modal-buttons-seperator {\n  margin: 1.5em 0;\n  margin-top: 0;\n}\n\n.modal .modal-buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.modal button {\n  margin-left: 1em;\n}\n\n.modal button:first-child {\n  margin-left: 0;\n}\n"

/***/ }),

/***/ "./src/app/artwork-detail/artwork-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/artwork-detail/artwork-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"artwork$ | async as artworkAsync\">\n  <div class=\"row\">\n    <div class=\"three columns\">\n      <nav id=\"leftnav\">\n        <div *ngFor=\"let p of portfolioList; let i = index\" class=\"portfolioList\">\n            <a routerLink=\"/portfolio/{{p.slug}}\" [class.active]=\"p.slug == activePortfolioSlug\">\n              <i class=\"fas fa-angle-double-right\"></i> {{p.title}}\n            </a>\n        </div>\n      </nav>\n    </div>\n    <div class=\"eight columns\">\n      <p><a (click)=\"showPrev(artworkAsync.id)\" class=\"u-pull-left\"><i class=\"fas fa-angle-left\"></i> Previous</a><a (click)=\"showNext(artworkAsync.id)\" class=\"u-pull-right\">Next <i class=\"fas fa-angle-right\"></i></a></p>\n    <article class=\"artworkDetail\">\n      <a (click)=\"showModal()\"><img class=\"u-full-width\" src=\"{{artworkAsync.img}}\" /></a>\n      <h1>{{artworkAsync.name}}</h1>\n      <p>{{artworkAsync.media}}, {{artworkAsync.year}}</p>\n      <p class=\"description\" [innerHTML]=\"artworkAsync.description\"></p>\n    </article>\n    </div>\n    <div class=\"one columns\">&nbsp;</div>\n  </div>\n</div>\n\n<div class=\"modal\">\n  <div class=\"modal-inner\">\n    <div class=\"modal-content\">\n      <div class=\"modal-close-icon\">\n        <a href=\"javascript:void(0)\" class=\"close-modal\" (click)=\"closeModal()\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></a>\n      </div>\n      <div class=\"modal-content-inner\" *ngIf=\"artwork$ | async as artworkAsync\">\n        <h4>{{artworkAsync.name}}</h4>\n        <p><img class=\"u-full-width\" src=\"{{artworkAsync.imgZoom}}\" /></p>\n      </div>\n      <hr class=\"modal-buttons-seperator\">\n      <div class=\"modal-buttons\">\n        <button class=\"button close-modal\" (click)=\"closeModal()\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/artwork-detail/artwork-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/artwork-detail/artwork-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ArtworkDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtworkDetailComponent", function() { return ArtworkDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _artwork_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../artwork.service */ "./src/app/artwork.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArtworkDetailComponent = /** @class */ (function () {
    function ArtworkDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    ArtworkDetailComponent.prototype.ngOnInit = function () {
        // TODO: make the artworks use a slug instead of id for the url
        var _this = this;
        // NOTE: template must use async
        this.artwork$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) { return _this.service.getArtworkById(+params.get('id')); }));
        // TODO: change artworks data to link by portfolio id not slug
        this.artwork$.subscribe(function (curArtwork) {
            _this.activePortfolioSlug = curArtwork.portfolio;
            // load all artworks for this portfolio for use by the prev/next links
            _this.service.getArtworksByPortfolioSlug(curArtwork.portfolio).subscribe(function (portfolioArtworks) { return _this.artworkList = portfolioArtworks; });
        });
        // TODO: move the portfolio list nav to a left nav component
        this.service.getPortfolios().subscribe(function (allPortfolios) { return _this.portfolioList = allPortfolios; });
        // handle modal content
        var modal = document.querySelector('.modal');
        // close modal if clicked outside content area
        document.querySelector('.modal-inner').addEventListener('click', function () {
            modal.classList.toggle('modal-open');
        });
        // prevent modal inner from closing parent when clicked
        document.querySelector('.modal-content').addEventListener('click', function (e) {
            e.stopPropagation();
        });
    };
    ArtworkDetailComponent.prototype.showModal = function () {
        var modal = document.querySelector('.modal');
        modal.classList.toggle('modal-open');
    };
    ArtworkDetailComponent.prototype.closeModal = function () {
        var modal = document.querySelector('.modal');
        modal.classList.toggle('modal-open');
    };
    // TODO: update the url OR make the links use the portfolio's id
    ArtworkDetailComponent.prototype.showPrev = function (id) {
        // NOTE: use of to set the object as an observable
        var newIndex = this.artworkList.findIndex(function (el) { return el.id === id; }) - 1;
        if (newIndex < 0) {
            newIndex = this.artworkList.length - 1;
        }
        this.artwork$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.artworkList[newIndex]);
    };
    ArtworkDetailComponent.prototype.showNext = function (id) {
        // NOTE: use of to set the object as an observable
        var newIndex = this.artworkList.findIndex(function (el) { return el.id === id; }) + 1;
        if (newIndex > this.artworkList.length - 1) {
            newIndex = 0;
        }
        this.artwork$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.artworkList[newIndex]);
    };
    ArtworkDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-artwork-detail',
            template: __webpack_require__(/*! ./artwork-detail.component.html */ "./src/app/artwork-detail/artwork-detail.component.html"),
            styles: [__webpack_require__(/*! ./artwork-detail.component.css */ "./src/app/artwork-detail/artwork-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _artwork_service__WEBPACK_IMPORTED_MODULE_4__["ArtworkService"]])
    ], ArtworkDetailComponent);
    return ArtworkDetailComponent;
}());



/***/ }),

/***/ "./src/app/artwork.service.ts":
/*!************************************!*\
  !*** ./src/app/artwork.service.ts ***!
  \************************************/
/*! exports provided: ArtworkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtworkService", function() { return ArtworkService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArtworkService = /** @class */ (function () {
    function ArtworkService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.artworkServiceUrl = 'assets/data/artworks.json'; // URL to web api
        this.portfolioServiceUrl = 'assets/data/portfolios.json'; // URL to web api
    }
    ArtworkService.prototype.getPortfolios = function () {
        // TODO: send the message _after_ fetching the heroes
        //this.messageService.add('ArtworkService: fetched artworks');
        return this.http.get(this.portfolioServiceUrl);
    };
    ArtworkService.prototype.getPortfolioBySlug = function (slug) {
        return this.getPortfolios().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (portfolios) { return portfolios.find(function (portfolio) { return portfolio.slug === slug; }); }));
    };
    // returns the first in the list
    ArtworkService.prototype.getFeaturedPortfolio = function () {
        return this.getPortfolios().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (portfolios) { return portfolios[0]; }));
    };
    /** GET data from the server */
    ArtworkService.prototype.getArtworks = function () {
        // TODO: send the message _after_ fetching the heroes
        //this.messageService.add('ArtworkService: fetched artworks');
        return this.http.get(this.artworkServiceUrl);
    };
    ArtworkService.prototype.getArtworksByPortfolioSlug = function (portfolioSlug) {
        return this.getArtworks().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (artwork) { return artwork.filter(function (artwork) { return artwork.portfolio === portfolioSlug; }); }));
    };
    ArtworkService.prototype.getArtworkById = function (id) {
        // TODO: send the message _after_ fetching the hero
        //this.messageService.add(`ArtworkService: fetched artwork id=${id}`);
        return this.getArtworks().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (artwork) { return artwork.find(function (artwork) { return artwork.id === id; }); }));
    };
    ArtworkService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], ArtworkService);
    return ArtworkService;
}());



/***/ }),

/***/ "./src/app/artworks/artworks.component.css":
/*!*************************************************!*\
  !*** ./src/app/artworks/artworks.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ArtworksComponent's private CSS styles */\n.artworkList li {\n  list-style: none;\n  width: 47%;\n  float: left;\n  text-align: center;\n  margin-bottom: 2em;\n}\n.artworkList li:nth-child(odd) {\n  margin-right: 5%;\n}\n.artworkList p {\n  line-height: 1.2em;\n}\n.artworkList li img {\n  max-width: 100%;\n  max-height: 250px;\n  border: 1px solid #999;\n}\n.portfolioList li {\n  list-style: none;\n}\n"

/***/ }),

/***/ "./src/app/artworks/artworks.component.html":
/*!**************************************************!*\
  !*** ./src/app/artworks/artworks.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"portfolio$ | async as portfolioAsync\">\n  <div class=\"row\">\n    <div class=\"three columns\">\n      <nav id=\"leftnav\">\n        <div *ngFor=\"let p of portfolioList; let i = index\" class=\"portfolioList\">\n          <a routerLink=\"/portfolio/{{p.slug}}\" [class.active]=\"p.slug == portfolioAsync.slug\">\n            <i class=\"fas fa-angle-double-right\"></i> {{p.title}}\n          </a>\n        </div>\n      </nav>\n    </div>\n    <div class=\"eight columns\">\n      <ul class=\"artworkList\">\n        <li *ngFor=\"let artwork of artworkList; let i = index\">\n          <p><a routerLink=\"/artwork/{{artwork.id}}\">\n            <img src=\"{{artwork.img}}\"><br>\n            <em>{{artwork.name}}</em><br>\n            {{artwork.media}}\n          </a></p>\n        </li>\n      </ul>\n    </div>\n    <div class=\"one columns\">&nbsp;</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/artworks/artworks.component.ts":
/*!************************************************!*\
  !*** ./src/app/artworks/artworks.component.ts ***!
  \************************************************/
/*! exports provided: ArtworksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtworksComponent", function() { return ArtworksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _artwork_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../artwork.service */ "./src/app/artwork.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArtworksComponent = /** @class */ (function () {
    function ArtworksComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    ArtworksComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.getArtworks()
        this.service.getArtworks().subscribe(function (artworks) { return _this.artworkList = artworks; });
        this.service.getPortfolios().subscribe(function (portfolios) { return _this.portfolioList = portfolios; });
        this.portfolio$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) { return _this.service.getPortfolioBySlug(params.get('slug')); }));
    };
    ArtworksComponent.prototype.getPortfolios = function () {
        var _this = this;
        this.service.getPortfolios()
            .subscribe(function (portfolios) { return _this.portfolioList = portfolios; });
    };
    ArtworksComponent.prototype.getArtworks = function () {
        var _this = this;
        this.service.getArtworks()
            .subscribe(function (artworks) { return _this.artworkList = artworks; });
    };
    ArtworksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-artworks',
            template: __webpack_require__(/*! ./artworks.component.html */ "./src/app/artworks/artworks.component.html"),
            styles: [__webpack_require__(/*! ./artworks.component.css */ "./src/app/artworks/artworks.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _artwork_service__WEBPACK_IMPORTED_MODULE_2__["ArtworkService"]])
    ], ArtworksComponent);
    return ArtworksComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MessagesComponent's private CSS styles */\n"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n  <h2>Messages</h2>\n  <button class=\"clear\"\n          (click)=\"messageService.clear()\">clear</button>\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/page.service.ts":
/*!*********************************!*\
  !*** ./src/app/page.service.ts ***!
  \*********************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageService = /** @class */ (function () {
    function PageService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.serviceUrl = 'assets/data/pages.json'; // URL to web api
    }
    /** GET data from the server */
    PageService.prototype.getPages = function () {
        return this.http.get(this.serviceUrl);
    };
    PageService.prototype.getPage = function (slug) {
        return this.getPages().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (pages) { return pages.find(function (page) { return page.slug === slug; }); }));
    };
    PageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.css":
/*!*******************************************!*\
  !*** ./src/app/pages/pages.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pages.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"page$ | async as pageAsync\">\n  <div class=\"row\">\n    <div class=\"three columns\">\n      <!-- dynamic page links -->\n      <nav id=\"leftnav\">\n        <div *ngFor=\"let link of pageList; let i = index\">\n        <a routerLink=\"/pages/{{link.slug}}\" [class.active]=\"link.slug == pageAsync.slug\"><i class=\"fas fa-angle-double-right\"></i> {{link.title}}</a><br>\n        </div>\n      </nav>\n    </div>\n    <article class=\"eight columns\">\n      <h1>{{pageAsync.title}}</h1>\n      <div class=\"pageBody\" [innerHTML]=\"pageAsync.body\"></div>\n    </article>\n    <div class=\"one columns\">&nbsp;</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page.service */ "./src/app/page.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PagesComponent = /** @class */ (function () {
    function PagesComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    PagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // NOTE: this can be simpler if there is no navigation between pages. see  https://angular.io/guide/router#route-definition-with-a-parameter
        //
        this.service.getPages().subscribe(function (pages) { return _this.pageList = pages; });
        // the fix was to add async as in the template
        this.page$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) { return _this.service.getPage(params.get('slug')); }));
    };
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.css */ "./src/app/pages/pages.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _page_service__WEBPACK_IMPORTED_MODULE_1__["PageService"]])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* PortfolioComponent's private CSS styles */\n.artworkList li {\n  list-style: none;\n  width: 47%;\n  float: left;\n  text-align: center;\n  margin-bottom: 2em;\n}\n.artworkList li:nth-child(odd) {\n  margin-right: 5%;\n}\n.artworkList p {\n  line-height: 1.2em;\n}\n.artworkList li img {\n  max-width: 100%;\n  max-height: 250px;\n  border: 1px solid #999;\n}\n.portfolioList li {\n  list-style: none;\n}\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"portfolio$ | async as portfolioAsync\">\n  <div class=\"row\">\n    <div class=\"three columns\">\n      <nav id=\"leftnav\">\n        <div *ngFor=\"let p of portfolioList; let i = index\" class=\"portfolioList\">\n          <a routerLink=\"/portfolio/{{p.slug}}\" [class.active]=\"p.slug == activePortfolioSlug\">\n            <i class=\"fas fa-angle-double-right\"></i> {{p.title}}\n          </a>\n        </div>\n      </nav>\n    </div>\n    <div class=\"eight columns\">\n      <h5>{{portfolioAsync.title}}</h5>\n      <ul class=\"artworkList\">\n        <li *ngFor=\"let artwork of artworkList; let i = index\">\n          <p><a routerLink=\"/artwork/{{artwork.id}}\">\n            <img src=\"{{artwork.img}}\"><br>\n            <em>{{artwork.name}}</em><br>\n            {{artwork.media}}\n          </a></p>\n        </li>\n      </ul>\n    </div>\n    <div class=\"one columns\">&nbsp;</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _artwork_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../artwork.service */ "./src/app/artwork.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        // TODO: only make 1 call for the portfolio data
        // TODO: move the portfolio list nav to a left nav component
        // TODO: change artworks data to link by portfolio id not slug
        var _this = this;
        // get the list of all portfolios for the left nav
        this.service.getPortfolios().subscribe(function (allPortfolios) { return _this.portfolioList = allPortfolios; });
        // get the current or featured portfolio
        this.portfolio$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            var slug = params.get('slug');
            if (slug) {
                return _this.service.getPortfolioBySlug(slug);
            }
            return _this.service.getFeaturedPortfolio();
        }));
        this.portfolio$.subscribe(function (curPortfolio) {
            _this.activePortfolioSlug = curPortfolio.slug;
            _this.service.getArtworksByPortfolioSlug(curPortfolio.slug).subscribe(function (portfolioArtworks) { return _this.artworkList = portfolioArtworks; });
        });
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _artwork_service__WEBPACK_IMPORTED_MODULE_2__["ArtworkService"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jeremy/Documents/artsbeacon/lynoredost-com/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map