(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jiatong/Desktop/CSCI571_WebTechnologies/HW8/frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "2C2N":
/*!***************************************************************!*\
  !*** ./src/app/components/tvshowpage/tvshowpage.component.ts ***!
  \***************************************************************/
/*! exports provided: TvshowpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvshowpageComponent", function() { return TvshowpageComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_cast_modal_cast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-cast/modal-cast.component */ "VmL4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_gethomedata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/gethomedata.service */ "vZO3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _carousel_many_carousel_many_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../carousel-many/carousel-many.component */ "NqXv");












const _c0 = ["addAlert"];
const _c1 = ["removeAlert"];
function TvshowpageComponent_div_1_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TvshowpageComponent_div_1_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r9.add_watchlist(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Add to Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TvshowpageComponent_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ngb-alert", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closed", function TvshowpageComponent_div_1_div_20_Template_ngb_alert_closed_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r12.addMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.addMessage, " ");
} }
function TvshowpageComponent_div_1_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TvshowpageComponent_div_1_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r14.remove_watchlist(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Remove from Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TvshowpageComponent_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ngb-alert", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closed", function TvshowpageComponent_div_1_div_22_Template_ngb_alert_closed_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r17.removeMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.removeMessage, " ");
} }
function TvshowpageComponent_div_1_a_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r5.twitterURL, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r5.twitter_icon, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function TvshowpageComponent_div_1_a_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r6.facebookURL, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r6.facebook_icon, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function TvshowpageComponent_div_1_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TvshowpageComponent_div_1_div_38_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const cast_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r20.openModal(cast_r19.id, cast_r19.profile_path); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cast_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", cast_r19.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](cast_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](cast_r19.character);
} }
function TvshowpageComponent_div_1_div_43_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 33);
} }
function TvshowpageComponent_div_1_div_43_br_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "br");
} }
function TvshowpageComponent_div_1_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TvshowpageComponent_div_1_div_43_div_3_Template, 1, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TvshowpageComponent_div_1_div_43_br_8_Template, 1, 0, "br", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Read the rest ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r22 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", review_r22.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("A review created by ", review_r22.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \u2605 ", review_r22.rating, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Written by ", review_r22.author, " on ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](13, 9, review_r22.created_at, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](review_r22.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", review_r22.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function TvshowpageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "iframe", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Genres");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Spoken Languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, TvshowpageComponent_div_1_button_19_Template, 2, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, TvshowpageComponent_div_1_div_20_Template, 4, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, TvshowpageComponent_div_1_button_21_Template, 2, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, TvshowpageComponent_div_1_div_22_Template, 4, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, TvshowpageComponent_div_1_a_33_Template, 2, 2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, TvshowpageComponent_div_1_a_34_Template, 2, 2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Full Cast and Crew");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, TvshowpageComponent_div_1_div_38_Template, 9, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Reviews ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, TvshowpageComponent_div_1_div_43_Template, 18, 12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "app-carousel-many", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "app-carousel-many", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.movie_video_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.movie_details.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.movie_details.tagline);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"]("", ctx_r0.movie_details.year, " | \u2605 ", ctx_r0.movie_details.vote_average, " | ", ctx_r0.movie_details.runtime, " mins");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" : ", ctx_r0.movie_details.genres_str, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" : ", ctx_r0.movie_details.lang_str, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.inWatchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.addMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.inWatchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.removeMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.movie_details.overview);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.twitterURL);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.facebookURL);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.casts);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.reviews.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.reviews);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataReceived", ctx_r0.recommendedMovies)("dataReceived_arr", ctx_r0.recommendedMovies_arr)("cata", "Recommended TV Shows")("isMobile", ctx_r0.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataReceived", ctx_r0.similarMovies)("dataReceived_arr", ctx_r0.similarMovies_arr)("cata", "Similar TV Shows")("isMobile", ctx_r0.isMobile);
} }
class TvshowpageComponent {
    constructor(route, router, getdataService, sanitizer, breakpointObserver, modalService) {
        this.route = route;
        this.router = router;
        this.getdataService = getdataService;
        this.sanitizer = sanitizer;
        this.breakpointObserver = breakpointObserver;
        this.modalService = modalService;
        this.isMobile = false;
        this.casts = [];
        this.reviews = [];
        this.recommendedMovies = [];
        this.recommendedMovies_arr = [];
        this.similarMovies = [];
        this.similarMovies_arr = [];
        this.twitterURL = "";
        this.facebookURL = "";
        this.twitter_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACrUlEQVRYhe2WTUhUURSAj6EUrSKD0t69b8YJU9oIunIhQtQihCByGWSRqxCKIoh+lkFGbXNRc+99M04IIRQF1sJ+Nm0qNArdJrUI0nnn3Dej/XhbqGM6r5m50wxBeOAsHlzO9517zoMLsBH/TRhT48rgBFP0jCucZYoyXNB7JnGw1TMN64+zVLoDjNkEAADtQ6aOSX22XPbu+8bhQj9hEk1oKiSeyBxt9UxDROg+5tG46+HNXAE3mTnCJBpH6Wu28O642bLcaTg8J0GLTNHi0rf/sfkh7sgV4ULfWjloK8EkDhaFr0maiIpsl6PwJBdB/5KAh+L3Q67CR00js7wYvC0+t41L+mYjwBUtMInGlf7b9iGzdakLgTdC56b8gdyihASXQY9d9zmJly3S1K8WSmT3F1igae7hhX1xvWu9QEToPnsBmtjz2GzOn6VHk0WW6DsX+MAV+hyXQQ8T6RiTeNi6e6nHQq8zKrJdTOrAqqCiH7YCrkQvD+5IfZ4n/WNcBP1c0nw5cy1ZwMPr+QJecLWa0LUL6A/kb3OhJaxwRuK6LfyXUv7T6ndPn0PhAABNcr6ZS/pUVQEPxR8FAAAa72YYF/p1tQRiqUxnQYEWaerdewutjkenmaQvlRWg5wXhAADRYbOTKdRVuQGRPlhUAADASQRXKg+n0ZLgAABgTA2XdLticEUzzojZXrrAioSiXlfh1F/O/WckTt128HXBRDrGFL6y/uUULXBFveWTjalxk/4hruiD/bWjjg6nD1gz24dMXSyV6XRFcIkpnC5z5u9YKt1RMjQqsl1c6jEucW710WifXKHPhH8Gxk2tdecwbmqZ0se5oBfWcI8mXRlcDnsxlRU8mW7iCTzFFN5xlP+GKZphUgfLj8+vrsIpJmiUeXix0ZvfWxHoRvzL+AXFnK2J8UgF/AAAAABJRU5ErkJggg==";
        this.facebook_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA7ElEQVRYhWOwjpoRZBU5/ZV15Iz/9MRWEdNf20bODGAYCMvhjoic/ophoCyH4VEHUNUBzglz/k9ffuL/nYdv/v/69ec/OqCpA/wyF/2//+QdhqV0cYBN1Iz/l26+wGs5TR1Q1beToOU0dcD+k3cH1gEv33zGsOzlm8//i9q3/neMm41XL1Uc8OfPXwwHFLVvJUovVRyADRDyOc0dQKzeoekAcsCb918H1gFHzj4YWAfMXXN6YB1Q2rV9YB3gl7loGOWCUQeMOmDUAaMOoKoDrCKmvx4wB0TMeMlgGzkzgNIeMlkOiJjx0jpimh8AnpIM8LFP2hYAAAAASUVORK5CYII=";
        this.inWatchList = false;
        this._add = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._remove = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.addMessage = '';
        this.removeMessage = '';
        this.navigationSubscription = this.router.events.subscribe((e) => {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                this.initialiseInvites();
            }
        });
        this.breakpointObserver.observe('(max-width: 760px)').subscribe(result => {
            if (result.matches) {
                this.isMobile = true;
                console.log(this.isMobile);
            }
            else {
                this.isMobile = false;
            }
        });
        this._add.subscribe(message => this.addMessage = message);
        this._add.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(5000)).subscribe(() => {
            if (this.addAlert) {
                this.addAlert.close();
            }
        });
        this._remove.subscribe(message => this.removeMessage = message);
        this._remove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(5000)).subscribe(() => {
            if (this.removeAlert) {
                this.removeAlert.close();
            }
        });
    }
    ngOnInit() {
        this.initialiseInvites();
    }
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
    initialiseInvites() {
        let bothloaded = 0;
        this.twitterURL = "";
        this.facebookURL = "";
        // Set default values and re-fetch any data you need.
        this.movie_id = this.route.snapshot.paramMap.get('tvshow_id');
        this.getdataService.getVideoTVshows(this.movie_id).subscribe(res => {
            this.movie_video = res;
            this.movie_video_url = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie_video.link);
            if (++bothloaded == 2) {
                this.generateTwitterFacebook();
            }
        });
        this.getdataService.getDetailsTVshows(this.movie_id).subscribe(res => {
            this.movie_details = res;
            let p_date = new Date(this.movie_details.first_air_date);
            this.movie_details.year = p_date.getFullYear();
            this.movie_details.genres_str = "";
            for (let i = 0; i < this.movie_details.genres.length; i++) {
                this.movie_details.genres_str += this.movie_details.genres[i];
                if (i != this.movie_details.genres.length - 1) {
                    this.movie_details.genres_str += ", ";
                }
            }
            this.movie_details.lang_str = "";
            for (let i = 0; i < this.movie_details.spoken_languages.length; i++) {
                this.movie_details.lang_str += this.movie_details.spoken_languages[i];
                if (i != this.movie_details.spoken_languages.length - 1) {
                    this.movie_details.lang_str += ", ";
                }
            }
            // Transform from Movies to TV shows
            this.movie_details.runtime = this.movie_details.episode_run_time;
            this.movie_details.title = this.movie_details.name;
            this.refresh_continuelist();
            if (++bothloaded == 2) {
                this.generateTwitterFacebook();
            }
        });
        this.getdataService.getCastsTVshows(this.movie_id).subscribe(res => {
            this.casts = res;
            this.casts = this.casts.results;
        });
        this.getdataService.getReviewsTVshows(this.movie_id).subscribe(res => {
            this.reviews = res;
            this.reviews = this.reviews.results;
            for (let i = 0; i < this.reviews.length; i++) {
                this.reviews[i].created_at = new Date(this.reviews[i].created_at);
            }
        });
        this.getdataService.getRecommendedTVshows(this.movie_id).subscribe(res => {
            this.recommendedMovies = res;
            this.recommendedMovies = this.recommendedMovies.results;
            this.tagTVshows(this.recommendedMovies);
            this.organize(this.recommendedMovies, this.recommendedMovies_arr);
        });
        this.getdataService.getSimilarTVshows(this.movie_id).subscribe(res => {
            this.similarMovies = res;
            this.similarMovies = this.similarMovies.results;
            this.tagTVshows(this.similarMovies);
            this.organize(this.similarMovies, this.similarMovies_arr);
        });
        this.inWatchList = false;
    }
    organize(original_data, group_data) {
        let j = -1;
        for (let i = 0; i < original_data.length; i++) {
            if (i % 6 == 0) {
                j++;
                group_data[j] = [];
                group_data[j].push(original_data[i]);
            }
            else {
                group_data[j].push(original_data[i]);
            }
        }
    }
    tagTVshows(original_data) {
        for (let video of original_data) {
            video.isTVshow = true;
        }
    }
    openModal(person_id, backup_img) {
        const modalRef = this.modalService.open(_modal_cast_modal_cast_component__WEBPACK_IMPORTED_MODULE_1__["ModalCastComponent"], { size: 'xl' });
        modalRef.componentInstance.person_id = person_id;
        modalRef.componentInstance.backup_img = backup_img;
    }
    refresh_continuelist() {
        let continuelist_str = localStorage.getItem("continuelist");
        let curr_movie = "tv_" + this.movie_id;
        if (!this.movie_details.name) {
            this.movie_details.name = " ";
        }
        let curr_movie_details = "true,,," + this.movie_details.name + ",,," + this.movie_details.poster_path;
        if (continuelist_str) {
            let continuelist = continuelist_str.split(",");
            continuelist = continuelist.filter((movie_item) => { return movie_item != curr_movie; });
            if (continuelist.length >= 24) {
                // Delete videos more than 24
                let needdelete = continuelist.shift();
                if (needdelete) {
                    let watchlist_str = localStorage.getItem("watchlist");
                    if (!watchlist_str || !watchlist_str.includes(needdelete)) {
                        localStorage.removeItem(needdelete);
                    }
                }
            }
            continuelist.push(curr_movie);
            localStorage.setItem("continuelist", continuelist.join(","));
            localStorage.setItem(curr_movie, curr_movie_details);
        }
        else {
            localStorage.setItem("continuelist", curr_movie);
            localStorage.setItem(curr_movie, curr_movie_details);
        }
    }
    add_watchlist() {
        let watchlist_str = localStorage.getItem("watchlist");
        let curr_movie = "tv_" + this.movie_id;
        if (!this.movie_details.name) {
            this.movie_details.name = " ";
        }
        let curr_movie_details = "true,,," + this.movie_details.name + ",,," + this.movie_details.poster_path;
        if (watchlist_str) {
            let watchlist = watchlist_str.split(",");
            watchlist = watchlist.filter((movie_item) => { return movie_item != curr_movie; });
            watchlist.push(curr_movie);
            localStorage.setItem("watchlist", watchlist.join(","));
            localStorage.setItem(curr_movie, curr_movie_details);
        }
        else {
            localStorage.setItem("watchlist", curr_movie);
            localStorage.setItem(curr_movie, curr_movie_details);
        }
        this.inWatchList = true;
        this._add.next(`Added to watchlist.`);
    }
    remove_watchlist() {
        let watchlist_str = localStorage.getItem("watchlist");
        let curr_movie = "tv_" + this.movie_id;
        if (!this.movie_details.name) {
            this.movie_details.name = " ";
        }
        let curr_movie_details = "true,,," + this.movie_details.name + ",,," + this.movie_details.poster_path;
        if (watchlist_str) {
            let watchlist = watchlist_str.split(",");
            watchlist = watchlist.filter((movie_item) => { return movie_item != curr_movie; });
            localStorage.setItem("watchlist", watchlist.join(","));
            let continuelist_str = localStorage.getItem("continuelist");
            if (!continuelist_str || !continuelist_str.includes(curr_movie)) {
                localStorage.removeItem(curr_movie);
            }
        }
        this.inWatchList = false;
        this._remove.next(`Removed from watchlist.`);
    }
    generateTwitterFacebook() {
        this.twitterURL = `https://twitter.com/intent/tweet?text=Watch ${this.movie_details.name}&url=${this.movie_video.link}&hashtags=USC,CSCI571,FightOn`;
        this.facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${this.movie_video.link}`;
    }
}
TvshowpageComponent.ɵfac = function TvshowpageComponent_Factory(t) { return new (t || TvshowpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_gethomedata_service__WEBPACK_IMPORTED_MODULE_5__["GethomedataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"])); };
TvshowpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TvshowpageComponent, selectors: [["app-tvshowpage"]], viewQuery: function TvshowpageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.addAlert = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.removeAlert = _t.first);
    } }, decls: 3, vars: 1, consts: [[2, "height", "100px"], ["class", "row mx-0 p-2 w-100 justify-content-center", 4, "ngIf"], [1, "row", "mx-0", "p-2", "w-100", "justify-content-center"], [1, "col-11", "col-md-6", "mb-4", "embed-responsive", "embed-responsive-16by9"], ["allowfullscreen", "", 1, "embed-responsive-item", 3, "src"], [1, "col-11", "col-md-3", "p-0", "pl-md-4", "text-white", "mutiinfo"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "col-11", "col-md-9", "p-0", "text-white", "moreinfo"], [1, "mt-4"], ["class", "mr-3", "target", "_blank", 3, "href", 4, "ngIf"], [1, "scrolling-wrapper"], ["class", "scrolling-card", 3, "click", 4, "ngFor", "ngForOf"], [2, "color", "rgba(255,255,255,0.5)"], ["class", "review-card row mx-0", 4, "ngFor", "ngForOf"], [3, "dataReceived", "dataReceived_arr", "cata", "isMobile"], [1, "btn", "btn-primary", 3, "click"], ["type", "success", 3, "closed"], ["addAlert", ""], ["type", "danger", 3, "closed"], ["removeAlert", ""], ["target", "_blank", 1, "mr-3", 3, "href"], [2, "width", "32px", 3, "src"], [1, "scrolling-card", 3, "click"], [1, "img-fluid", 3, "src"], [1, "review-card", "row", "mx-0"], [1, "img-wrapper", "col"], ["class", "w-100", 4, "ngIf"], [1, "col", "p-3"], [2, "display", "inline-block", "height", "28px", "width", "60px", "border-radius", "14px", "background-color", "black", "color", "white", "text-align", "center"], [1, "my-3", 2, "color", "rgba(0,0,0,0.5)"], [1, "review-content", "mb-3"], ["target", "_blank", 3, "href"], [1, "w-100"]], template: function TvshowpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TvshowpageComponent_div_1_Template, 46, 26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.movie_details && ctx.movie_video);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _carousel_many_carousel_many_component__WEBPACK_IMPORTED_MODULE_10__["CarouselManyComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbAlert"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: [".mutiinfo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-size: 50px;\n}\n.mutiinfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 18px;\n}\n.scrolling-wrapper[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    white-space: nowrap;\n}\n.scrolling-card[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: top;\n    border-radius: 10px;\n\n    width: 15%;\n    min-width: 180px;\n    overflow: hidden;\n    background-color: white;\n    color: black;\n    margin-right: 30px;\n    text-align: center;\n    white-space: normal;\n}\n.scrolling-card[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n}\n.review-card[_ngcontent-%COMP%]{\n    border-radius: 10px;\n    background-color: white;\n    color: black;\n    margin-bottom: 30px;\n}\n.img-wrapper[_ngcontent-%COMP%]{\n    max-width: 180px;\n    padding: 45px;\n}\n.img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    border-radius: 45px;\n}\n.review-content[_ngcontent-%COMP%]{\n    overflow: hidden;\n   text-overflow: ellipsis;\n   display: -webkit-box;\n   -webkit-line-clamp: 3; \n   -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR2c2hvd3BhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG1CQUFtQjs7SUFFbkIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7R0FDakIsdUJBQXVCO0dBQ3ZCLG9CQUFvQjtHQUNwQixxQkFBcUIsRUFBRSw0QkFBNEI7R0FDbkQsNEJBQTRCO0FBQy9CIiwiZmlsZSI6InR2c2hvd3BhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm11dGlpbmZvIGgxe1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbn1cbi5tdXRpaW5mbyBwe1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNjcm9sbGluZy13cmFwcGVyIHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uc2Nyb2xsaW5nLWNhcmQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICB3aWR0aDogMTUlO1xuICAgIG1pbi13aWR0aDogMTgwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuLnNjcm9sbGluZy1jYXJkIDpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmV2aWV3LWNhcmR7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5pbWctd3JhcHBlcntcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgIHBhZGRpbmc6IDQ1cHg7XG59XG4uaW1nLXdyYXBwZXIgaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XG59XG4ucmV2aWV3LWNvbnRlbnR7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7IC8qIG51bWJlciBvZiBsaW5lcyB0byBzaG93ICovXG4gICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufSJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "K3Gg":
/*!*********************************************************************!*\
  !*** ./src/app/components/carousel-main/carousel-main.component.ts ***!
  \*********************************************************************/
/*! exports provided: CarouselMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselMainComponent", function() { return CarouselMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function CarouselMainComponent_ngb_carousel_0_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const video_r3 = ctx_r6.$implicit;
    const i_r4 = ctx_r6.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "watch/movie/" + video_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "My image ", i_r4 + 1, " description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", video_r3.backdrop_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r3.title);
} }
function CarouselMainComponent_ngb_carousel_0_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselMainComponent_ngb_carousel_0_1_ng_template_0_Template, 6, 4, "ng-template", 3);
} }
function CarouselMainComponent_ngb_carousel_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselMainComponent_ngb_carousel_0_1_Template, 1, 0, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 2000)("showNavigationArrows", true)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.dataReceived);
} }
function CarouselMainComponent_ngb_carousel_1_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const video_r8 = ctx_r11.$implicit;
    const i_r9 = ctx_r11.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "watch/movie/" + video_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "My image ", i_r9 + 1, " description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", video_r8.backdrop_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r8.title);
} }
function CarouselMainComponent_ngb_carousel_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselMainComponent_ngb_carousel_1_1_ng_template_0_Template, 6, 4, "ng-template", 3);
} }
function CarouselMainComponent_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselMainComponent_ngb_carousel_1_1_Template, 1, 0, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 2000)("showNavigationArrows", true)("showNavigationIndicators", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.dataReceived);
} }
class CarouselMainComponent {
    constructor() {
        this.dataReceived = [];
        this.isMobile = [];
    }
}
CarouselMainComponent.ɵfac = function CarouselMainComponent_Factory(t) { return new (t || CarouselMainComponent)(); };
CarouselMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselMainComponent, selectors: [["app-carousel-main"]], inputs: { dataReceived: "dataReceived", isMobile: "isMobile" }, decls: 2, vars: 2, consts: [["class", "main-carousel", 3, "interval", "showNavigationArrows", "showNavigationIndicators", 4, "ngIf"], [1, "main-carousel", 3, "interval", "showNavigationArrows", "showNavigationIndicators"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [3, "routerLink"], [1, "picsum-img-wrapper"], [1, "img-fluid", 3, "src", "alt"], [1, "Imgmask_mobile"], [1, "text-white"], [1, "Imgmask"]], template: function CarouselMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselMainComponent_ngb_carousel_0_Template, 2, 4, "ngb-carousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselMainComponent_ngb_carousel_1_Template, 2, 4, "ngb-carousel", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile && ctx.dataReceived.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile && ctx.dataReceived.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".picsum-img-wrapper[_ngcontent-%COMP%]{\n    max-height: 500px;\n    overflow: hidden;\n}\n.picsum-img-wrapper[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n    transform: scale(1.1);\n}\n.picsum-img-wrapper[_ngcontent-%COMP%]:hover   .Imgmask[_ngcontent-%COMP%]{\n    display: block;\n}\n.Imgmask[_ngcontent-%COMP%]{\n    display: none;\n    background-image: linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,1));\n    position: absolute;\n    bottom: 0px;\n    width: 100%;\n    height: 150px;\n    line-height: 150px;\n    text-align: left;\n    padding-left: 150px;\n    font-size: 20px;\n}\n.Imgmask[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    display: inline-block;\n    line-height: 1.5;\n    vertical-align: middle;\n}\n.Imgmask_mobile[_ngcontent-%COMP%]{\n    background-image: linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,1));\n    position: absolute;\n    bottom: 0px;\n    width: 100%;\n    height: 80px;\n    line-height: 80px;\n    text-align: left;\n    padding-left: 50px;\n    font-size: 20px;\n}\n.Imgmask_mobile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    display: inline-block;\n    line-height: 1.5;\n    vertical-align: middle;\n}\n.main-carousel[_ngcontent-%COMP%]     .carousel-control-prev{\n    width: 100px;\n}\n.main-carousel[_ngcontent-%COMP%]     .carousel-control-next{\n    width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLW1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlFQUFpRTtJQUNqRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGlFQUFpRTtJQUNqRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoiY2Fyb3VzZWwtbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpY3N1bS1pbWctd3JhcHBlcntcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnBpY3N1bS1pbWctd3JhcHBlcjpob3ZlciBpbWd7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLnBpY3N1bS1pbWctd3JhcHBlcjpob3ZlciAuSW1nbWFza3tcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5JbWdtYXNre1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC4yNSkscmdiYSgwLDAsMCwxKSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxNTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4uSW1nbWFzayBwe1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uSW1nbWFza19tb2JpbGV7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC4yNSkscmdiYSgwLDAsMCwxKSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODBweDtcbiAgICBsaW5lLWhlaWdodDogODBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4uSW1nbWFza19tb2JpbGUgcHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLm1haW4tY2Fyb3VzZWwgOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLXByZXZ7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuLm1haW4tY2Fyb3VzZWwgOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLW5leHR7XG4gICAgd2lkdGg6IDEwMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "NqXv":
/*!*********************************************************************!*\
  !*** ./src/app/components/carousel-many/carousel-many.component.ts ***!
  \*********************************************************************/
/*! exports provided: CarouselManyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselManyComponent", function() { return CarouselManyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function CarouselManyComponent_ngb_carousel_3_1_ng_template_0_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/watch/movie/" + video_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", video_r3.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r3.title);
} }
function CarouselManyComponent_ngb_carousel_3_1_ng_template_0_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/watch/tv/" + video_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", video_r3.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r3.name);
} }
function CarouselManyComponent_ngb_carousel_3_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselManyComponent_ngb_carousel_3_1_ng_template_0_a_1_Template, 5, 3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselManyComponent_ngb_carousel_3_1_ng_template_0_a_2_Template, 5, 3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !video_r3.isTVshow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", video_r3.isTVshow);
} }
function CarouselManyComponent_ngb_carousel_3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselManyComponent_ngb_carousel_3_1_ng_template_0_Template, 3, 2, "ng-template", 5);
} }
function CarouselManyComponent_ngb_carousel_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselManyComponent_ngb_carousel_3_1_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0)("showNavigationArrows", true)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.dataReceived);
} }
function CarouselManyComponent_ngb_carousel_4_1_ng_template_0_div_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/watch/movie/" + video_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", video_r14.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r14.title);
} }
function CarouselManyComponent_ngb_carousel_4_1_ng_template_0_div_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/watch/tv/" + video_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", video_r14.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r14.name);
} }
function CarouselManyComponent_ngb_carousel_4_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselManyComponent_ngb_carousel_4_1_ng_template_0_div_1_a_1_Template, 5, 3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselManyComponent_ngb_carousel_4_1_ng_template_0_div_1_a_2_Template, 5, 3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !video_r14.isTVshow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", video_r14.isTVshow);
} }
function CarouselManyComponent_ngb_carousel_4_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselManyComponent_ngb_carousel_4_1_ng_template_0_div_1_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r11);
} }
function CarouselManyComponent_ngb_carousel_4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselManyComponent_ngb_carousel_4_1_ng_template_0_Template, 2, 1, "ng-template", 5);
} }
function CarouselManyComponent_ngb_carousel_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselManyComponent_ngb_carousel_4_1_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0)("showNavigationArrows", true)("showNavigationIndicators", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.dataReceived_arr);
} }
class CarouselManyComponent {
    constructor() {
        this.dataReceived = [];
        this.isMobile = false;
        this.cata = "";
        this.dataReceived_arr = [];
    }
    ngOnInit() {
    }
}
CarouselManyComponent.ɵfac = function CarouselManyComponent_Factory(t) { return new (t || CarouselManyComponent)(); };
CarouselManyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselManyComponent, selectors: [["app-carousel-many"]], inputs: { dataReceived: "dataReceived", isMobile: "isMobile", cata: "cata", dataReceived_arr: "dataReceived_arr" }, decls: 5, vars: 3, consts: [[1, "text-white"], ["class", "single-carousel", 3, "interval", "showNavigationArrows", "showNavigationIndicators", 4, "ngIf"], ["class", "multi-carousel", 3, "interval", "showNavigationArrows", "showNavigationIndicators", 4, "ngIf"], [1, "single-carousel", 3, "interval", "showNavigationArrows", "showNavigationIndicators"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "single-img-container"], [3, "routerLink", 4, "ngIf"], [3, "routerLink"], [1, "img-fluid", 3, "src"], [1, "Imgmask_mobile"], [1, "multi-carousel", 3, "interval", "showNavigationArrows", "showNavigationIndicators"], [1, "d-flex", "multi-img-container"], ["class", "img-wrapper mx-3", 4, "ngFor", "ngForOf"], [1, "img-wrapper", "mx-3"], [1, "Imgmask"]], template: function CarouselManyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarouselManyComponent_ngb_carousel_3_Template, 2, 4, "ngb-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarouselManyComponent_ngb_carousel_4_Template, 2, 4, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cata);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile && ctx.dataReceived.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile && ctx.dataReceived_arr.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["h2[_ngcontent-%COMP%]{\n    margin-top: 50px;\n    margin-bottom: 50px;\n}\n.single-img-container[_ngcontent-%COMP%]{\n    margin-left: 50px;\n    margin-right: 50px;\n    position: relative;\n}\n.Imgmask_mobile[_ngcontent-%COMP%]{\n    background-image: linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,1));\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    width: 100%;\n    height: 120px;\n    line-height: 120px;\n    text-align: left;\n    padding-left: 20px;\n    padding-right: 20px;\n    font-size: 20px;\n}\n.Imgmask_mobile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    display: inline-block;\n    line-height: 1.5;\n    vertical-align: middle;\n}\n.multi-img-container[_ngcontent-%COMP%]{\n    margin-left: 50px;\n    margin-right: 50px;\n}\n.img-wrapper[_ngcontent-%COMP%]{\n    width: 15%;\n    position: relative;\n}\n.img-wrapper[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n    transform: scale(1.1);\n}\n.img-wrapper[_ngcontent-%COMP%]:hover   .Imgmask[_ngcontent-%COMP%]{\n    display: block;\n    transform: scale(1.1);\n}\n.Imgmask[_ngcontent-%COMP%]{\n    display: none;\n    background-image: linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,1));\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    width: 100%;\n    height: 120px;\n    line-height: 120px;\n    text-align: left;\n    padding-left: 20px;\n    padding-right: 20px;\n    font-size: 15px;\n}\n.Imgmask[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    display: inline-block;\n    line-height: 1.5;\n    vertical-align: middle;\n}\n.multi-carousel[_ngcontent-%COMP%]     .carousel-indicators{\n    bottom: -60px;\n}\n.multi-carousel[_ngcontent-%COMP%]     .carousel-control-prev{\n    width: 50px;\n}\n.multi-carousel[_ngcontent-%COMP%]     .carousel-control-next{\n    width: 50px;\n}\n.single-carousel[_ngcontent-%COMP%]     .carousel-control-prev{\n    width: 50px;\n}\n.single-carousel[_ngcontent-%COMP%]     .carousel-control-next{\n    width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLW1hbnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpRUFBaUU7SUFDakUsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlFQUFpRTtJQUNqRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6ImNhcm91c2VsLW1hbnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5zaW5nbGUtaW1nLWNvbnRhaW5lcntcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLkltZ21hc2tfbW9iaWxle1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuMjUpLHJnYmEoMCwwLDAsMSkpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBsaW5lLWhlaWdodDogMTIwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4uSW1nbWFza19tb2JpbGUgcHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLm11bHRpLWltZy1jb250YWluZXJ7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuLmltZy13cmFwcGVye1xuICAgIHdpZHRoOiAxNSU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmltZy13cmFwcGVyOmhvdmVyIGltZ3tcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4uaW1nLXdyYXBwZXI6aG92ZXIgLkltZ21hc2t7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLkltZ21hc2t7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjI1KSxyZ2JhKDAsMCwwLDEpKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEyMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLkltZ21hc2sgcHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLm11bHRpLWNhcm91c2VsIDo6bmctZGVlcCAuY2Fyb3VzZWwtaW5kaWNhdG9yc3tcbiAgICBib3R0b206IC02MHB4O1xufVxuLm11bHRpLWNhcm91c2VsIDo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2e1xuICAgIHdpZHRoOiA1MHB4O1xufVxuLm11bHRpLWNhcm91c2VsIDo6bmctZGVlcCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0e1xuICAgIHdpZHRoOiA1MHB4O1xufVxuLnNpbmdsZS1jYXJvdXNlbCA6Om5nLWRlZXAgLmNhcm91c2VsLWNvbnRyb2wtcHJldntcbiAgICB3aWR0aDogNTBweDtcbn1cbi5zaW5nbGUtY2Fyb3VzZWwgOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLW5leHR7XG4gICAgd2lkdGg6IDUwcHg7XG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "w-100", 2, "min-height", "100vh", "position", "relative", "overflow", "hidden"], [1, "bg-dark", "text-white", "text-center", "py-3", "w-100", 2, "position", "absolute", "bottom", "0px"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Powered by TMDB. Developed by Jiatong Li. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%]{ background-color:rgb(14, 8, 51); }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEdBQUcsK0JBQStCLEVBQUUiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqeyBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNCwgOCwgNTEpOyB9Il19 */"] });


/***/ }),

/***/ "VmL4":
/*!***************************************************************!*\
  !*** ./src/app/components/modal-cast/modal-cast.component.ts ***!
  \***************************************************************/
/*! exports provided: ModalCastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCastComponent", function() { return ModalCastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_gethomedata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/gethomedata.service */ "vZO3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ModalCastComponent_h4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.person_details.name);
} }
function ModalCastComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Birth: ", ctx_r1.person_details.birthday, " ");
} }
function ModalCastComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Birth Place: ", ctx_r2.person_details.place_of_birth, " ");
} }
function ModalCastComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Gender: ", ctx_r3.person_details.gender, " ");
} }
function ModalCastComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Website: ", ctx_r4.person_details.homepage, " ");
} }
function ModalCastComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" known for: ", ctx_r5.person_details.known_for_department, " ");
} }
function ModalCastComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Also Known as: ", ctx_r6.person_details.alias_str, " ");
} }
function ModalCastComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r7.person_externals.imdb_id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.imdb_icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ModalCastComponent_a_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r8.person_externals.instagram_id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r8.instagram_icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ModalCastComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r9.person_externals.facebook_id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r9.facebook_icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ModalCastComponent_a_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r10.person_externals.twitter_id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r10.twitter_icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ModalCastComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.person_details.biography, " ");
} }
class ModalCastComponent {
    constructor(activeModal, getdataService) {
        this.activeModal = activeModal;
        this.getdataService = getdataService;
        this.person_id = "";
        this.backup_img = "";
        this.person_details = {};
        this.person_externals = {};
        this.facebook_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA7ElEQVRYhWOwjpoRZBU5/ZV15Iz/9MRWEdNf20bODGAYCMvhjoic/ophoCyH4VEHUNUBzglz/k9ffuL/nYdv/v/69ec/OqCpA/wyF/2//+QdhqV0cYBN1Iz/l26+wGs5TR1Q1beToOU0dcD+k3cH1gEv33zGsOzlm8//i9q3/neMm41XL1Uc8OfPXwwHFLVvJUovVRyADRDyOc0dQKzeoekAcsCb918H1gFHzj4YWAfMXXN6YB1Q2rV9YB3gl7loGOWCUQeMOmDUAaMOoKoDrCKmvx4wB0TMeMlgGzkzgNIeMlkOiJjx0jpimh8AnpIM8LFP2hYAAAAASUVORK5CYII=";
        this.twitter_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACrUlEQVRYhe2WTUhUURSAj6EUrSKD0t69b8YJU9oIunIhQtQihCByGWSRqxCKIoh+lkFGbXNRc+99M04IIRQF1sJ+Nm0qNArdJrUI0nnn3Dej/XhbqGM6r5m50wxBeOAsHlzO9517zoMLsBH/TRhT48rgBFP0jCucZYoyXNB7JnGw1TMN64+zVLoDjNkEAADtQ6aOSX22XPbu+8bhQj9hEk1oKiSeyBxt9UxDROg+5tG46+HNXAE3mTnCJBpH6Wu28O642bLcaTg8J0GLTNHi0rf/sfkh7sgV4ULfWjloK8EkDhaFr0maiIpsl6PwJBdB/5KAh+L3Q67CR00js7wYvC0+t41L+mYjwBUtMInGlf7b9iGzdakLgTdC56b8gdyihASXQY9d9zmJly3S1K8WSmT3F1igae7hhX1xvWu9QEToPnsBmtjz2GzOn6VHk0WW6DsX+MAV+hyXQQ8T6RiTeNi6e6nHQq8zKrJdTOrAqqCiH7YCrkQvD+5IfZ4n/WNcBP1c0nw5cy1ZwMPr+QJecLWa0LUL6A/kb3OhJaxwRuK6LfyXUv7T6ndPn0PhAABNcr6ZS/pUVQEPxR8FAAAa72YYF/p1tQRiqUxnQYEWaerdewutjkenmaQvlRWg5wXhAADRYbOTKdRVuQGRPlhUAADASQRXKg+n0ZLgAABgTA2XdLticEUzzojZXrrAioSiXlfh1F/O/WckTt128HXBRDrGFL6y/uUULXBFveWTjalxk/4hruiD/bWjjg6nD1gz24dMXSyV6XRFcIkpnC5z5u9YKt1RMjQqsl1c6jEucW710WifXKHPhH8Gxk2tdecwbmqZ0se5oBfWcI8mXRlcDnsxlRU8mW7iCTzFFN5xlP+GKZphUgfLj8+vrsIpJmiUeXix0ZvfWxHoRvzL+AXFnK2J8UgF/AAAAABJRU5ErkJggg==";
        this.instagram_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAIXElEQVRYhbVWaVBUVxq9Wv725zhaNfMDnZoq+73eXr9eAe0FkEXoiDtClLiAkZiAC6JRdsENSgSlwUGQRkQjmFIzOtY4RlEjiBHjaJwZBknsKIs20gjS794zPyKOS7c6Vc6per/uffece77lfoT4QHtgWUCrUJ7WqqloahHL265qHK7vxMreK2KF+7JY6bmo3T/0rXa/97y2ip3THmBn9TXeM/qaoW/0Bz0n9E53k6Gu95jpkOuI8UhbveloU21wY5oz8ESAL65X0KErnnBLtcf5g7qUtqtL0a4uww2hDN8LZbgu7EWbsA+tmn1o0ZTjisaBS2IFLoqVOK/dj3PaKpzVHcBpXQ1O6Q/ia70TjYY6HDXWo97YgFrTUVoT2OSsiD4+wSf5baGEv6su6fpRtRuj3x3VbtxWleC2es/ILfUezy2htP+muuzRDWFvz/eafQ/ahL33WzSO+1fEigfNYmXPBW3Vo/O6A/1nddWe07qakZP6Whw3OHHMcAiHjYdRZzqC6qBjXbXBJ/lXyB9yxRPuKYt/6lQWoVNZhHvKInpPucvRKS+xdArlE0Ew5p32vQYQjPlWODjxtLbGckJf52g01NEjxnrUmRpQE3Ssq0L3khMu+S6nS7EDLsUO/KLY0fFAvVP/vxK+C98YGwzHDfUdR431OGRqQE3gV05CCCFufmtAH19I+/hCPOILaf8HJL+uq/rDRX1V0jlNJferiGrDcUMdfZ4X1Bl4IoB4uLy0J1w+Brg8DMhzHR+KvFUo/32rxuG5LFbggna/d1TEKX2N47jBiaPGejQYG1LJM1l20zNZDkZk2fDKcyzvS4Apu8f3KQpkvygKZAivHf/6+h3Nvtk3hDK0avbhisaBi/qqJEIIOSPWWk/pD+K4wYmvjIcbCZNntUncFkj8ZkDImPhW0sxz40bkOclDXF7LUy6fPeHy8ZgvQB+/jT2Qb2/5WV6UjMxz4wgh5N9i1W9vq/d03xDKcE1T/uSS4eAUQgg5E3Jo0l901TipP4ivDc5rhCo3uiRFBqgqYwSE+M12qLdOYfJNNyVuCyRZJryybAzLcjDI5eEJl49HfAF65NvwQL6t/aGwbfKoiH9oSmffDC793YtzCMb8Tfcn7xldNU4Za12ECum9knodqLDO45fckD6Fqjf0SsoNkBQbIck3gco3eyQus9nLZTU/43I9Hi4Pbn4revlCPJRv7x0V4QvNYuXgX7VV+LOupodQMc0tiamgYqrbn+1MXHNT0qyBJKwFFda7Jc36BBCMfelWYyVZdsIwn+cedeOhfFv7aDhex3eio/+CuB/ntAceE6pb7ZH0KWD6lF6fAowpyZJuNSTt56BiqhuB6X57OvitAcNcnnvgeW70qAqTfO1rFcv7LosVOK/bP0CYaeUQNSWDmZIf+tosmT5tocaVoIZVkAJXJ/gjf7Fflp0wLMvBAJcHN19w1deeG0JZd4umHJe0FU8JC17hpcHLwIKX3n/jRuFx41nwMkaDloMFrfS8bLtfFwjGUi5rcFiWAw+XzzBl9xsleksocV0X9uKqxjFC2PRERs1LwCyL771xmHmZjE5fAjo9EdK0xOZ3kb9wgd/SLMmyMCzLwTPVjqmvr/+oLum6qS5Fm1DOCLMmMGpdBGaL9y3AGg9qSYBkSXh/AcqNzRK/GZIsC/Ah4J/qkq6/q/egXdjLCAtd4GWh84Gw+W+GIC5uPEIXMBqyECxkkQd4zxCoNwxKio2g/GafIehUFbnuqnbjB6FshGDG3CEWPhuIiPWZhIiY3cJmzAULmwcpfNG7k1C7NkES1kJSpUNSfukzCX9WFnX/S1mMO+qSpwSRsR4WZQei7b7LMNKezCJngUXEAjPmuBG50H8ZBiYHUN3nbklMhSSsA1TpPsvQpdjZ16kswl1VyQBBTLSbxUQC9gg/jShzHGbab7KoGLDIj4DwOW6EL0x4ORwAxkrBSxNYUJKbGlZB0q0G06T5bUTd/I7+nxS70KEsfkzwUXgvmxUGxIb6b8V2+2TYo3rZzGiwKPtzN+Z5ELagWQqNb2bWjz102iegQctBTStB9Z/1QNjktxX3KgoH7yt24J6qqIcgNtSFuTZgoe3tj5HdPhn2iHYWPRMsKgYsIhZsxlzQ0AWg1kWg5sWg0z4BC1rRDmOKX3IQjHksL/A+kG/HPVWRiyDe1oYEG7DEBiwPe8dznDkOsVFJiJ55FVExjEXEgoXNBQtZyCRb/FVYEpP82T6KwT8WTnLzW9Et34Yuxa5rBEttTVhhBVZagVWh7z+QxMWNx5w5UxEzZyri4t4oNX8YkmdZn3D56OUL4VLubCRYGZKG1VYg1Qqst3ywkcwfqCzX4eHy8IgvgEu1M5UgPTIA620UGRZgs5Ui1/bBJ+JRQPWlgcqy6FMuF26+gLr5sl9LGpkWJ7ItQL4FKDR3IN9q+L+QKzZ1SLJMDMly0S/Pd/53MS96Arabu7DLDBSbgWILxS6LA4UhVhRGT3pbdfglJGQMQtZN8oqfWaku1UHV6VRSbITEbcEwl9s1IN/+m1d/KAnmUWbuQrkZ2GcGSs1AkRkosABZFi8ybIP4wtaPJFsfFod0Y26IC7PCumCP6EK03YXwOd0Im9/HbIv6mSVxkE1b7qWmZEj6FEhiKiT1OkiKDFAuq+sZn837Vl0RPQE105yonkZRYQb2mIGdZiDXAmy0AGnPqyXRBiywgc0KBYuJAJv5vC+EzQe1Pe8JwUtBTcmg+hRI4heg6vWUyjOceP3mPoU4IwNQbU1FubURRZZryLe5sNnSgzXWx/jUOoBltqeIs40gNpTBHsEQbR9B5OynCJs3wGzxj5n54x4WvMzFjEnXoEtphD411d8o9x+fDVR7brG1LAAAAABJRU5ErkJggg==";
        this.imdb_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAD80lEQVRoge2azU8bRxjG9//peq3Sqk0bB1eq1EoRVFWK0igfIorUS0+t2kOk5kjVW3vNNX8AqlNKlbWcFcZgOwHisBDUksZ8GIgQBsN+eXZnZp8e1l57SSCGGNaoHumRPO87M35+8+GZgwWhVpCR+jERVZCRdGQkdKh0TEQVZKN9QnNBRhrqAHNH1ZBnPhvt6wAzx1W/UNs2YRs5niaiioAJSQvdyLEBJE0I3cRbqgsQtroAYasLELa6AGGrCxC2/gcAkz3A7DVAHfSU/xh4erlRVweB3Dkg92Ew9vQKkPsoGJu9Bjy55I2RkYDs+4B6o5a7Dky+134AN98LMBP14qq34FrLaC7u/Ldw1W+CMfISfHYQry32JvD8jje2y7wYt+Hm4+0HYNkYuLPnfzeZuQlH+zfo55+fYS/8FIhRowQyc6MZCYyUG1VOwAtXwR3dqzoaWP4ToPAV8OTLNgPYu/sAngfMkuV7IC/u7gNYDQBwR8NqcgCM7PgxZ/4HsNrYLrPgGgv11sD6PSATPR0Ae3McZOPBGwFI7nNQs+THqnO3weyKv0KkXGisFzMbZ+WkAFxGvK1hrYEaS4DLwal5IAB9dBHUXPNj1txtf0WYvYuN1CW4zKq118Fz8ZMFoOY6qLnRmHXrJRxj9UAAJ38YQAX29GV/ArijgeV6TxbA3ltEdWu6kSsXYFcW3gLg61MG2JmHsTLs58zSqL+PjwUwddorsDMHfeE3P6cv3gUpzxwMkPsM1FwPAtQO8asA+ikAVJ5BL3zfAFDvwD4EgD37zjcIAJb6ow/A7V3YjwfAaeMQtw+gdtn4AHoRAODsLcJ8dMXPGVO3YO/MeQDm2r6L7NViTt0MAPFK4zwxUgab/KAdAOdBzXVwaoFTC9Xp6yDbKji1QLZVkMlPQaub4NSAlb0IsvUYnFqw9/4Gmb4KTk2/r8uq4NSAY5SwWfgF1tgFMLIFTi04+gpI/QfB5Sirv4KnD/fWGkA6iqU/LqCYiKOYiMNSelAaiaGYiKM0EgMdk7B0P4Ziohe2EsXan+dRTMSxOhKDpfSgmOj1+75IxFH8PYbi8LvY/kv0xr7v5ZcS57Ay/A6WHwxgabQP5VHxjeZbAkBGAh2L+HLHJbC095mlI4G8Bxxs29y3Ob5/7PpY1YcRECXSkvmWATpZXYCw1QUIW12AsHX2AZovlbMmd1yCUL8Bz6JYOgLBSrX25uhEWSkRgiaLmn2Et0enyFYi0JKiLuiyqGiyCCslgqWDD61OU/0haaVEaLIIXRYVwZSlfk32AmdNpiz1C4IgCLosDoVt5qjSZXEo8I8VMyl9ocuioiUjRtjmDlQyYuiyqPgzLwjCfzz/VktHxv2ZAAAAAElFTkSuQmCC";
    }
    ngOnInit() {
        this.getdataService.getDetailsPerson(this.person_id).subscribe(res => {
            this.person_details = res;
            this.person_details.profile_path = this.person_details.profile_path || this.backup_img;
            this.person_details.alias_str = "";
            for (let i = 0; i < this.person_details.also_known_as.length; i++) {
                this.person_details.alias_str += this.person_details.also_known_as[i];
                if (i != this.person_details.also_known_as.length - 1) {
                    this.person_details.alias_str += ", ";
                }
            }
        });
        this.getdataService.getExternalsPerson(this.person_id).subscribe(res => {
            this.person_externals = res;
            if (this.person_externals.imdb_id) {
                this.person_externals.imdb_id = "https://" + this.person_externals.imdb_id;
            }
            if (this.person_externals.instagram_id) {
                this.person_externals.instagram_id = "https://" + this.person_externals.instagram_id;
            }
            if (this.person_externals.facebook_id) {
                this.person_externals.facebook_id = "https://" + this.person_externals.facebook_id;
            }
            if (this.person_externals.twitter_id) {
                this.person_externals.twitter_id = "https://" + this.person_externals.twitter_id;
            }
        });
    }
}
ModalCastComponent.ɵfac = function ModalCastComponent_Factory(t) { return new (t || ModalCastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_gethomedata_service__WEBPACK_IMPORTED_MODULE_2__["GethomedataService"])); };
ModalCastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalCastComponent, selectors: [["app-modal-cast"]], inputs: { person_id: "person_id", backup_img: "backup_img" }, decls: 22, vars: 13, consts: [[1, "modal-header"], ["class", "modal-title", 4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "row", "mx-0"], [1, "col-12", "col-md-2"], [1, "img-fluid", 3, "src"], [1, "col-12", "col-md-10", "pl-2"], [4, "ngIf"], ["class", "mr-2", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "col col-12 mt-2", 4, "ngIf"], [1, "modal-title"], ["target", "_blank", 1, "mr-2", 3, "href"], [2, "width", "32px", 3, "src"], [1, "col", "col-12", "mt-2"]], template: function ModalCastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalCastComponent_h4_1_Template, 3, 1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalCastComponent_Template_button_click_2_listener() { return ctx.activeModal.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ModalCastComponent_span_10_Template, 3, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ModalCastComponent_span_11_Template, 3, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ModalCastComponent_span_12_Template, 3, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ModalCastComponent_span_13_Template, 3, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ModalCastComponent_span_14_Template, 3, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ModalCastComponent_span_15_Template, 3, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ModalCastComponent_a_17_Template, 2, 2, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ModalCastComponent_a_18_Template, 2, 2, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ModalCastComponent_a_19_Template, 2, 2, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ModalCastComponent_a_20_Template, 2, 2, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ModalCastComponent_div_21_Template, 6, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.person_details.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.person_details.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.person_details.birthday);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.person_details.place_of_birth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.person_details.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.person_details.homepage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.person_details.known_for_department);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.person_details.alias_str);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.person_externals.imdb_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.person_externals.instagram_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.person_externals.facebook_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.person_externals.twitter_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.person_details.biography);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1jYXN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_mylistpage_mylistpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mylistpage/mylistpage.component */ "tYri");
/* harmony import */ var _components_moviepage_moviepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/moviepage/moviepage.component */ "bq+H");
/* harmony import */ var _components_tvshowpage_tvshowpage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tvshowpage/tvshowpage.component */ "2C2N");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_carousel_main_carousel_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/carousel-main/carousel-main.component */ "K3Gg");
/* harmony import */ var _components_carousel_many_carousel_many_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/carousel-many/carousel-many.component */ "NqXv");
/* harmony import */ var _components_modal_cast_modal_cast_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/modal-cast/modal-cast.component */ "VmL4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















//import { VideoModule } from './components/video/video.module';
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
            //,VideoModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _components_mylistpage_mylistpage_component__WEBPACK_IMPORTED_MODULE_6__["MylistpageComponent"],
        _components_moviepage_moviepage_component__WEBPACK_IMPORTED_MODULE_7__["MoviepageComponent"],
        _components_tvshowpage_tvshowpage_component__WEBPACK_IMPORTED_MODULE_8__["TvshowpageComponent"],
        _components_carousel_main_carousel_main_component__WEBPACK_IMPORTED_MODULE_10__["CarouselMainComponent"],
        _components_carousel_many_carousel_many_component__WEBPACK_IMPORTED_MODULE_11__["CarouselManyComponent"],
        _components_modal_cast_modal_cast_component__WEBPACK_IMPORTED_MODULE_12__["ModalCastComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
        //,VideoModule
    ] }); })();


/***/ }),

/***/ "bq+H":
/*!*************************************************************!*\
  !*** ./src/app/components/moviepage/moviepage.component.ts ***!
  \*************************************************************/
/*! exports provided: MoviepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviepageComponent", function() { return MoviepageComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_cast_modal_cast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-cast/modal-cast.component */ "VmL4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_gethomedata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/gethomedata.service */ "vZO3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _carousel_many_carousel_many_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../carousel-many/carousel-many.component */ "NqXv");












const _c0 = ["addAlert"];
const _c1 = ["removeAlert"];
function MoviepageComponent_div_1_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MoviepageComponent_div_1_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r9.add_watchlist(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Add to Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MoviepageComponent_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ngb-alert", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closed", function MoviepageComponent_div_1_div_20_Template_ngb_alert_closed_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r12.addMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.addMessage, " ");
} }
function MoviepageComponent_div_1_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MoviepageComponent_div_1_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r14.remove_watchlist(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Remove from Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MoviepageComponent_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ngb-alert", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closed", function MoviepageComponent_div_1_div_22_Template_ngb_alert_closed_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r17.removeMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.removeMessage, " ");
} }
function MoviepageComponent_div_1_a_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r5.twitterURL, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r5.twitter_icon, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function MoviepageComponent_div_1_a_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r6.facebookURL, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r6.facebook_icon, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function MoviepageComponent_div_1_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MoviepageComponent_div_1_div_38_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const cast_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r20.openModal(cast_r19.id, cast_r19.profile_path); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cast_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", cast_r19.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](cast_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](cast_r19.character);
} }
function MoviepageComponent_div_1_div_43_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 33);
} }
function MoviepageComponent_div_1_div_43_br_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "br");
} }
function MoviepageComponent_div_1_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MoviepageComponent_div_1_div_43_div_3_Template, 1, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, MoviepageComponent_div_1_div_43_br_8_Template, 1, 0, "br", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Read the rest ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r22 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", review_r22.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("A review created by ", review_r22.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \u2605 ", review_r22.rating, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Written by ", review_r22.author, " on ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](13, 9, review_r22.created_at, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](review_r22.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", review_r22.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function MoviepageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "iframe", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Genres");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Spoken Languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, MoviepageComponent_div_1_button_19_Template, 2, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, MoviepageComponent_div_1_div_20_Template, 4, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, MoviepageComponent_div_1_button_21_Template, 2, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, MoviepageComponent_div_1_div_22_Template, 4, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, MoviepageComponent_div_1_a_33_Template, 2, 2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, MoviepageComponent_div_1_a_34_Template, 2, 2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Full Cast and Crew");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, MoviepageComponent_div_1_div_38_Template, 9, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Reviews ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, MoviepageComponent_div_1_div_43_Template, 18, 12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "app-carousel-many", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "app-carousel-many", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.movie_video_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.movie_details.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.movie_details.tagline);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"]("", ctx_r0.movie_details.year, " | \u2605 ", ctx_r0.movie_details.vote_average, " | ", ctx_r0.movie_details.runtime, " mins");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" : ", ctx_r0.movie_details.genres_str, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" : ", ctx_r0.movie_details.lang_str, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.inWatchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.addMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.inWatchList);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.removeMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.movie_details.overview);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.twitterURL);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.facebookURL);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.casts);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.reviews.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.reviews);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataReceived", ctx_r0.recommendedMovies)("dataReceived_arr", ctx_r0.recommendedMovies_arr)("cata", "Recommended Movies")("isMobile", ctx_r0.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataReceived", ctx_r0.similarMovies)("dataReceived_arr", ctx_r0.similarMovies_arr)("cata", "Similar Movies")("isMobile", ctx_r0.isMobile);
} }
class MoviepageComponent {
    constructor(route, router, getdataService, sanitizer, breakpointObserver, modalService) {
        this.route = route;
        this.router = router;
        this.getdataService = getdataService;
        this.sanitizer = sanitizer;
        this.breakpointObserver = breakpointObserver;
        this.modalService = modalService;
        this.isMobile = false;
        this.casts = [];
        this.reviews = [];
        this.recommendedMovies = [];
        this.recommendedMovies_arr = [];
        this.similarMovies = [];
        this.similarMovies_arr = [];
        this.twitterURL = "";
        this.facebookURL = "";
        this.twitter_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACrUlEQVRYhe2WTUhUURSAj6EUrSKD0t69b8YJU9oIunIhQtQihCByGWSRqxCKIoh+lkFGbXNRc+99M04IIRQF1sJ+Nm0qNArdJrUI0nnn3Dej/XhbqGM6r5m50wxBeOAsHlzO9517zoMLsBH/TRhT48rgBFP0jCucZYoyXNB7JnGw1TMN64+zVLoDjNkEAADtQ6aOSX22XPbu+8bhQj9hEk1oKiSeyBxt9UxDROg+5tG46+HNXAE3mTnCJBpH6Wu28O642bLcaTg8J0GLTNHi0rf/sfkh7sgV4ULfWjloK8EkDhaFr0maiIpsl6PwJBdB/5KAh+L3Q67CR00js7wYvC0+t41L+mYjwBUtMInGlf7b9iGzdakLgTdC56b8gdyihASXQY9d9zmJly3S1K8WSmT3F1igae7hhX1xvWu9QEToPnsBmtjz2GzOn6VHk0WW6DsX+MAV+hyXQQ8T6RiTeNi6e6nHQq8zKrJdTOrAqqCiH7YCrkQvD+5IfZ4n/WNcBP1c0nw5cy1ZwMPr+QJecLWa0LUL6A/kb3OhJaxwRuK6LfyXUv7T6ndPn0PhAABNcr6ZS/pUVQEPxR8FAAAa72YYF/p1tQRiqUxnQYEWaerdewutjkenmaQvlRWg5wXhAADRYbOTKdRVuQGRPlhUAADASQRXKg+n0ZLgAABgTA2XdLticEUzzojZXrrAioSiXlfh1F/O/WckTt128HXBRDrGFL6y/uUULXBFveWTjalxk/4hruiD/bWjjg6nD1gz24dMXSyV6XRFcIkpnC5z5u9YKt1RMjQqsl1c6jEucW710WifXKHPhH8Gxk2tdecwbmqZ0se5oBfWcI8mXRlcDnsxlRU8mW7iCTzFFN5xlP+GKZphUgfLj8+vrsIpJmiUeXix0ZvfWxHoRvzL+AXFnK2J8UgF/AAAAABJRU5ErkJggg==";
        this.facebook_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA7ElEQVRYhWOwjpoRZBU5/ZV15Iz/9MRWEdNf20bODGAYCMvhjoic/ophoCyH4VEHUNUBzglz/k9ffuL/nYdv/v/69ec/OqCpA/wyF/2//+QdhqV0cYBN1Iz/l26+wGs5TR1Q1beToOU0dcD+k3cH1gEv33zGsOzlm8//i9q3/neMm41XL1Uc8OfPXwwHFLVvJUovVRyADRDyOc0dQKzeoekAcsCb918H1gFHzj4YWAfMXXN6YB1Q2rV9YB3gl7loGOWCUQeMOmDUAaMOoKoDrCKmvx4wB0TMeMlgGzkzgNIeMlkOiJjx0jpimh8AnpIM8LFP2hYAAAAASUVORK5CYII=";
        this.inWatchList = false;
        this._add = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._remove = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.addMessage = '';
        this.removeMessage = '';
        this.navigationSubscription = this.router.events.subscribe((e) => {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                this.initialiseInvites();
            }
        });
        this.breakpointObserver.observe('(max-width: 760px)').subscribe(result => {
            if (result.matches) {
                this.isMobile = true;
            }
            else {
                this.isMobile = false;
            }
        });
        this._add.subscribe(message => this.addMessage = message);
        this._add.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(5000)).subscribe(() => {
            if (this.addAlert) {
                this.addAlert.close();
            }
        });
        this._remove.subscribe(message => this.removeMessage = message);
        this._remove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(5000)).subscribe(() => {
            if (this.removeAlert) {
                this.removeAlert.close();
            }
        });
    }
    ngOnInit() {
        this.initialiseInvites();
    }
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
    initialiseInvites() {
        let bothloaded = 0;
        this.twitterURL = "";
        this.facebookURL = "";
        // Set default values and re-fetch any data you need.
        this.movie_id = this.route.snapshot.paramMap.get('movie_id');
        this.getdataService.getVideoMovies(this.movie_id).subscribe(res => {
            this.movie_video = res;
            this.movie_video_url = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie_video.link);
            if (++bothloaded == 2) {
                this.generateTwitterFacebook();
            }
        });
        this.getdataService.getDetailsMovies(this.movie_id).subscribe(res => {
            this.movie_details = res;
            let p_date = new Date(this.movie_details.release_date);
            this.movie_details.year = p_date.getFullYear();
            this.movie_details.genres_str = "";
            for (let i = 0; i < this.movie_details.genres.length; i++) {
                this.movie_details.genres_str += this.movie_details.genres[i];
                if (i != this.movie_details.genres.length - 1) {
                    this.movie_details.genres_str += ", ";
                }
            }
            this.movie_details.lang_str = "";
            for (let i = 0; i < this.movie_details.spoken_languages.length; i++) {
                this.movie_details.lang_str += this.movie_details.spoken_languages[i];
                if (i != this.movie_details.spoken_languages.length - 1) {
                    this.movie_details.lang_str += ", ";
                }
            }
            this.refresh_continuelist();
            if (++bothloaded == 2) {
                this.generateTwitterFacebook();
            }
        });
        this.getdataService.getCastsMovies(this.movie_id).subscribe(res => {
            this.casts = res;
            this.casts = this.casts.results;
        });
        this.getdataService.getReviewsMovies(this.movie_id).subscribe(res => {
            this.reviews = res;
            this.reviews = this.reviews.results;
            for (let i = 0; i < this.reviews.length; i++) {
                this.reviews[i].created_at = new Date(this.reviews[i].created_at);
            }
        });
        this.getdataService.getRecommendedMovies(this.movie_id).subscribe(res => {
            this.recommendedMovies = res;
            this.recommendedMovies = this.recommendedMovies.results;
            this.tagMovies(this.recommendedMovies);
            this.organize(this.recommendedMovies, this.recommendedMovies_arr);
        });
        this.getdataService.getSimilarMovies(this.movie_id).subscribe(res => {
            this.similarMovies = res;
            this.similarMovies = this.similarMovies.results;
            this.tagMovies(this.similarMovies);
            this.organize(this.similarMovies, this.similarMovies_arr);
        });
        this.inWatchList = false;
    }
    organize(original_data, group_data) {
        let j = -1;
        for (let i = 0; i < original_data.length; i++) {
            if (i % 6 == 0) {
                j++;
                group_data[j] = [];
                group_data[j].push(original_data[i]);
            }
            else {
                group_data[j].push(original_data[i]);
            }
        }
    }
    tagMovies(original_data) {
        for (let video of original_data) {
            video.isTVshow = false;
        }
    }
    openModal(person_id, backup_img) {
        const modalRef = this.modalService.open(_modal_cast_modal_cast_component__WEBPACK_IMPORTED_MODULE_1__["ModalCastComponent"], { size: 'xl' });
        modalRef.componentInstance.person_id = person_id;
        modalRef.componentInstance.backup_img = backup_img;
    }
    refresh_continuelist() {
        let continuelist_str = localStorage.getItem("continuelist");
        let curr_movie = "movie_" + this.movie_id;
        if (!this.movie_details.title) {
            this.movie_details.title = " ";
        }
        let curr_movie_details = "false,,," + this.movie_details.title + ",,," + this.movie_details.poster_path;
        if (continuelist_str) {
            let continuelist = continuelist_str.split(",");
            continuelist = continuelist.filter((movie_item) => { return movie_item != curr_movie; });
            if (continuelist.length >= 24) {
                // Delete videos more than 24
                let needdelete = continuelist.shift();
                if (needdelete) {
                    let watchlist_str = localStorage.getItem("watchlist");
                    if (!watchlist_str || !watchlist_str.includes(needdelete)) {
                        localStorage.removeItem(needdelete);
                    }
                }
            }
            continuelist.push(curr_movie);
            localStorage.setItem("continuelist", continuelist.join(","));
            localStorage.setItem(curr_movie, curr_movie_details);
        }
        else {
            localStorage.setItem("continuelist", curr_movie);
            localStorage.setItem(curr_movie, curr_movie_details);
        }
    }
    add_watchlist() {
        let watchlist_str = localStorage.getItem("watchlist");
        let curr_movie = "movie_" + this.movie_id;
        if (!this.movie_details.title) {
            this.movie_details.title = " ";
        }
        let curr_movie_details = "false,,," + this.movie_details.title + ",,," + this.movie_details.poster_path;
        if (watchlist_str) {
            let watchlist = watchlist_str.split(",");
            watchlist = watchlist.filter((movie_item) => { return movie_item != curr_movie; });
            watchlist.push(curr_movie);
            localStorage.setItem("watchlist", watchlist.join(","));
            localStorage.setItem(curr_movie, curr_movie_details);
        }
        else {
            localStorage.setItem("watchlist", curr_movie);
            localStorage.setItem(curr_movie, curr_movie_details);
        }
        this.inWatchList = true;
        this._add.next(`Added to watchlist.`);
    }
    remove_watchlist() {
        let watchlist_str = localStorage.getItem("watchlist");
        let curr_movie = "movie_" + this.movie_id;
        if (!this.movie_details.title) {
            this.movie_details.title = " ";
        }
        let curr_movie_details = "false,,," + this.movie_details.title + ",,," + this.movie_details.poster_path;
        if (watchlist_str) {
            let watchlist = watchlist_str.split(",");
            watchlist = watchlist.filter((movie_item) => { return movie_item != curr_movie; });
            localStorage.setItem("watchlist", watchlist.join(","));
            let continuelist_str = localStorage.getItem("continuelist");
            if (!continuelist_str || !continuelist_str.includes(curr_movie)) {
                localStorage.removeItem(curr_movie);
            }
        }
        this.inWatchList = false;
        this._remove.next(`Removed from watchlist.`);
    }
    generateTwitterFacebook() {
        this.twitterURL = `https://twitter.com/intent/tweet?text=Watch ${this.movie_details.title}&url=${this.movie_video.link}&hashtags=USC,CSCI571,FightOn`;
        this.facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${this.movie_video.link}`;
    }
}
MoviepageComponent.ɵfac = function MoviepageComponent_Factory(t) { return new (t || MoviepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_gethomedata_service__WEBPACK_IMPORTED_MODULE_5__["GethomedataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"])); };
MoviepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MoviepageComponent, selectors: [["app-moviepage"]], viewQuery: function MoviepageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.addAlert = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.removeAlert = _t.first);
    } }, decls: 3, vars: 1, consts: [[2, "height", "100px"], ["class", "row mx-0 p-2 w-100 justify-content-center", 4, "ngIf"], [1, "row", "mx-0", "p-2", "w-100", "justify-content-center"], [1, "col-11", "col-md-6", "mb-4", "embed-responsive", "embed-responsive-16by9"], ["allowfullscreen", "", 1, "embed-responsive-item", 3, "src"], [1, "col-11", "col-md-3", "p-0", "pl-md-4", "text-white", "mutiinfo"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "col-11", "col-md-9", "p-0", "text-white", "moreinfo"], [1, "mt-4"], ["class", "mr-3", "target", "_blank", 3, "href", 4, "ngIf"], [1, "scrolling-wrapper"], ["class", "scrolling-card", 3, "click", 4, "ngFor", "ngForOf"], [2, "color", "rgba(255,255,255,0.5)"], ["class", "review-card row mx-0", 4, "ngFor", "ngForOf"], [3, "dataReceived", "dataReceived_arr", "cata", "isMobile"], [1, "btn", "btn-primary", 3, "click"], ["type", "success", 3, "closed"], ["addAlert", ""], ["type", "danger", 3, "closed"], ["removeAlert", ""], ["target", "_blank", 1, "mr-3", 3, "href"], [2, "width", "32px", 3, "src"], [1, "scrolling-card", 3, "click"], [1, "img-fluid", 3, "src"], [1, "review-card", "row", "mx-0"], [1, "img-wrapper", "col"], ["class", "w-100", 4, "ngIf"], [1, "col", "p-3"], [2, "display", "inline-block", "height", "28px", "width", "60px", "border-radius", "14px", "background-color", "black", "color", "white", "text-align", "center"], [1, "my-3", 2, "color", "rgba(0,0,0,0.5)"], [1, "review-content", "mb-3"], ["target", "_blank", 3, "href"], [1, "w-100"]], template: function MoviepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MoviepageComponent_div_1_Template, 46, 26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.movie_details && ctx.movie_video);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _carousel_many_carousel_many_component__WEBPACK_IMPORTED_MODULE_10__["CarouselManyComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbAlert"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: [".mutiinfo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-size: 50px;\n}\n.mutiinfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 18px;\n}\n.scrolling-wrapper[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    white-space: nowrap;\n}\n.scrolling-card[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: top;\n    border-radius: 10px;\n\n    width: 15%;\n    min-width: 180px;\n    overflow: hidden;\n    background-color: white;\n    color: black;\n    margin-right: 30px;\n    text-align: center;\n    white-space: normal;\n}\n.scrolling-card[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n}\n.review-card[_ngcontent-%COMP%]{\n    border-radius: 10px;\n    background-color: white;\n    color: black;\n    margin-bottom: 30px;\n}\n.img-wrapper[_ngcontent-%COMP%]{\n    max-width: 180px;\n    padding: 45px;\n}\n.img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    border-radius: 45px;\n}\n.review-content[_ngcontent-%COMP%]{\n    overflow: hidden;\n   text-overflow: ellipsis;\n   display: -webkit-box;\n   -webkit-line-clamp: 3; \n   -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsbUJBQW1COztJQUVuQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtHQUNqQix1QkFBdUI7R0FDdkIsb0JBQW9CO0dBQ3BCLHFCQUFxQixFQUFFLDRCQUE0QjtHQUNuRCw0QkFBNEI7QUFDL0IiLCJmaWxlIjoibW92aWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tdXRpaW5mbyBoMXtcbiAgICBmb250LXNpemU6IDUwcHg7XG59XG4ubXV0aWluZm8gcHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zY3JvbGxpbmctd3JhcHBlciB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnNjcm9sbGluZy1jYXJkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgd2lkdGg6IDE1JTtcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbi5zY3JvbGxpbmctY2FyZCA6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJldmlldy1jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uaW1nLXdyYXBwZXJ7XG4gICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICBwYWRkaW5nOiA0NXB4O1xufVxuLmltZy13cmFwcGVyIGltZ3tcbiAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xufVxuLnJldmlldy1jb250ZW50e1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzOyAvKiBudW1iZXIgb2YgbGluZXMgdG8gc2hvdyAqL1xuICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn0iXX0= */"] });


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_gethomedata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/gethomedata.service */ "vZO3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function NavbarComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngb-highlight", 14);
} if (rf & 2) {
    const r_r2 = ctx.result;
    const t_r3 = ctx.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", r_r2.backdrop_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("result", r_r2.name)("term", t_r3);
} }
class NavbarComponent {
    constructor(getdataService, router) {
        this.getdataService = getdataService;
        this.router = router;
        this.isCollapsed = true;
        this.searching = false;
        this.searchFailed = false;
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(() => this.searching = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(term => this.getdataService.getMultiSearch(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(() => this.searchFailed = false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(() => {
            this.searchFailed = true;
            return new Array();
        }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(() => this.searching = false));
        this.formatter = (x) => x.name;
    }
    ngOnInit() {
    }
    modelChanges() {
        if (this.model) {
            if (this.model.media_type == "tv") {
                this.router.navigateByUrl("/watch/tv/" + this.model.id);
                this.router.navigateByUrl("/watch/tv/" + this.model.id);
            }
            else if (this.model.media_type == "movie") {
                this.router.navigateByUrl("/watch/movie/" + this.model.id);
                this.router.navigateByUrl("/watch/movie/" + this.model.id);
            }
        }
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_gethomedata_service__WEBPACK_IMPORTED_MODULE_2__["GethomedataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 18, vars: 8, consts: [[1, "navbar", "navbar-expand-md", "bg-dark", "navbar-dark", "fixed-top"], [1, "container-fluid"], ["routerLink", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapsibleNavbar", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "collapsibleNavbar", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/mylist", 1, "nav-link"], [1, "form-inline", "mr-4"], ["rt", ""], ["id", "typeahead-http", "type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "editable", "ngModelChange"], [1, "mr-4", 2, "width", "100px", 3, "src"], [3, "result", "term"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "USC Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_4_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "My List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, NavbarComponent_ng_template_15_Template, 2, 3, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NavbarComponent_Template_input_ngModelChange_17_listener($event) { return ctx.model = $event; })("ngModelChange", function NavbarComponent_Template_input_ngModelChange_17_listener() { return ctx.modelChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.searchFailed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model)("ngbTypeahead", ctx.search)("resultTemplate", _r0)("inputFormatter", ctx.formatter)("editable", false);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapse"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbHighlight"]], styles: [".dropdown-menu.show { \n    background-color:rgb(14, 8, 51);\n    border: white 1px solid;\n}\n  .dropdown-item { \n    color: white !important;\n    padding-left: 20px;\n}\n.form-control[_ngcontent-%COMP%]{\n    background-color: transparent;\n    color: white;\n    border: white 2px;\n    border-style: none none solid none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFDSDtJQUNJLCtCQUErQjtJQUMvQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtDQUFrQztBQUN0QyIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIDo6bmctZGVlcCBbaWRePVwibmdiLXR5cGVhaGVhZC1cIl17IFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE0LCA4LCA1MSk7XG4gICAgYm9yZGVyOiB3aGl0ZSAxcHggc29saWQ7XG4gICAgY29sb3I6IHdoaXRlO1xufSAqL1xuOjpuZy1kZWVwIC5kcm9wZG93bi1tZW51LnNob3cgeyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNCwgOCwgNTEpO1xuICAgIGJvcmRlcjogd2hpdGUgMXB4IHNvbGlkO1xufVxuOjpuZy1kZWVwIC5kcm9wZG93bi1pdGVtIHsgXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmZvcm0tY29udHJvbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiB3aGl0ZSAycHg7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lIG5vbmUgc29saWQgbm9uZTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "kHmC":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_gethomedata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/gethomedata.service */ "vZO3");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _carousel_main_carousel_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carousel-main/carousel-main.component */ "K3Gg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _carousel_many_carousel_many_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../carousel-many/carousel-many.component */ "NqXv");






function HomepageComponent_app_carousel_many_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-carousel-many", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataReceived", ctx_r0.continuelist)("dataReceived_arr", ctx_r0.continuelist_arr)("cata", "Continue Watching")("isMobile", ctx_r0.isMobile);
} }
class HomepageComponent {
    constructor(gethomedataService, breakpointObserver) {
        this.gethomedataService = gethomedataService;
        this.continuelist = [];
        this.continuelist_arr = [];
        this.playingMovies = [];
        this.popularMovies = [];
        this.popularMovies_arr = [];
        this.topRatedMovies = [];
        this.topRatedMovies_arr = [];
        this.trendingMovies = [];
        this.trendingMovies_arr = [];
        this.popularTVshows = [];
        this.popularTVshows_arr = [];
        this.topRatedTVshows = [];
        this.topRatedTVshows_arr = [];
        this.trendingTVshows = [];
        this.trendingTVshows_arr = [];
        this.isMobile = false;
        breakpointObserver.observe('(max-width: 760px)').subscribe(result => {
            if (result.matches) {
                this.isMobile = true;
            }
            else {
                this.isMobile = false;
            }
        });
    }
    ngOnInit() {
        this.fetchData();
        this.getcontinuelist();
        this.organize(this.continuelist, this.continuelist_arr);
    }
    fetchData() {
        this.gethomedataService.getPlayingMovies().subscribe(res => {
            this.playingMovies = res;
            this.tagMovies(this.playingMovies);
        });
        this.gethomedataService.getPopularMovies().subscribe(res => {
            this.popularMovies = res;
            this.tagMovies(this.popularMovies);
            this.organize(this.popularMovies, this.popularMovies_arr);
        });
        this.gethomedataService.getTopRatedMovies().subscribe(res => {
            this.topRatedMovies = res;
            this.tagMovies(this.topRatedMovies);
            this.organize(this.topRatedMovies, this.topRatedMovies_arr);
        });
        this.gethomedataService.getTrendingMovies().subscribe(res => {
            this.trendingMovies = res;
            this.tagMovies(this.trendingMovies);
            this.organize(this.trendingMovies, this.trendingMovies_arr);
        });
        this.gethomedataService.getPopularTVshows().subscribe(res => {
            this.popularTVshows = res;
            this.tagTVshows(this.popularTVshows);
            this.organize(this.popularTVshows, this.popularTVshows_arr);
        });
        this.gethomedataService.getTopRatedTVshows().subscribe(res => {
            this.topRatedTVshows = res;
            this.tagTVshows(this.topRatedTVshows);
            this.organize(this.topRatedTVshows, this.topRatedTVshows_arr);
        });
        this.gethomedataService.getTrendingTVshows().subscribe(res => {
            this.trendingTVshows = res;
            this.tagTVshows(this.trendingTVshows);
            this.organize(this.trendingTVshows, this.trendingTVshows_arr);
        });
    }
    organize(original_data, group_data) {
        let j = -1;
        for (let i = 0; i < original_data.length; i++) {
            if (i % 6 == 0) {
                j++;
                group_data[j] = [];
                group_data[j].push(original_data[i]);
            }
            else {
                group_data[j].push(original_data[i]);
            }
        }
    }
    tagMovies(original_data) {
        for (let video of original_data) {
            video.isTVshow = false;
        }
    }
    tagTVshows(original_data) {
        for (let video of original_data) {
            video.isTVshow = true;
        }
    }
    getcontinuelist() {
        let continuelist_keys_str = localStorage.getItem("continuelist");
        if (continuelist_keys_str) {
            let continuelist_keys = continuelist_keys_str.split(",");
            for (let video_key of continuelist_keys) {
                let video_id = video_key.split("_")[1];
                let video_paras_str = localStorage.getItem(video_key);
                if (video_paras_str) {
                    let video_paras = video_paras_str.split(",,,");
                    if (video_paras[0] == "true") {
                        // Is a TV show
                        let video_item = {
                            isTVshow: true,
                            name: video_paras[1] ? video_paras[1] : "",
                            poster_path: video_paras[2] ? video_paras[2] : "https://cinemaone.net/images/movie_placeholder.png",
                            id: video_id,
                        };
                        this.continuelist.push(video_item);
                    }
                    else {
                        // Is a Movie
                        let video_item = {
                            isTVshow: false,
                            title: video_paras[1] ? video_paras[1] : "",
                            poster_path: video_paras[2] ? video_paras[2] : "https://cinemaone.net/images/movie_placeholder.png",
                            id: video_id,
                        };
                        this.continuelist.push(video_item);
                    }
                }
            }
            this.continuelist.reverse();
        }
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_gethomedata_service__WEBPACK_IMPORTED_MODULE_1__["GethomedataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 11, vars: 27, consts: [[2, "height", "100px"], [1, "row", "m-0", "justify-content-center"], [1, "col", "col-11", "col-md-9", 3, "dataReceived", "isMobile"], ["class", "col col-11 col-md-9", 3, "dataReceived", "dataReceived_arr", "cata", "isMobile", 4, "ngIf"], [1, "col", "col-11", "col-md-9", 3, "dataReceived", "dataReceived_arr", "cata", "isMobile"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-carousel-main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomepageComponent_app_carousel_many_3_Template, 1, 4, "app-carousel-many", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-carousel-many", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-carousel-many", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-carousel-many", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-carousel-many", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-carousel-many", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-carousel-many", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataReceived", ctx.playingMovies)("isMobile", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.continuelist.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataReceived", ctx.popularMovies)("dataReceived_arr", ctx.popularMovies_arr)("cata", "Popular Movies")("isMobile", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataReceived", ctx.topRatedMovies)("dataReceived_arr", ctx.topRatedMovies_arr)("cata", "Top Rated Movies")("isMobile", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataReceived", ctx.trendingMovies)("dataReceived_arr", ctx.trendingMovies_arr)("cata", "Trending Movies")("isMobile", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataReceived", ctx.popularTVshows)("dataReceived_arr", ctx.popularTVshows_arr)("cata", "Popular TV Shows")("isMobile", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataReceived", ctx.topRatedTVshows)("dataReceived_arr", ctx.topRatedTVshows_arr)("cata", "Top Rated TV Shows")("isMobile", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataReceived", ctx.trendingTVshows)("dataReceived_arr", ctx.trendingTVshows_arr)("cata", "Trending TV Shows")("isMobile", ctx.isMobile);
    } }, directives: [_carousel_main_carousel_main_component__WEBPACK_IMPORTED_MODULE_3__["CarouselMainComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _carousel_many_carousel_many_component__WEBPACK_IMPORTED_MODULE_5__["CarouselManyComponent"]], styles: ["*[_ngcontent-%COMP%]{\n    background-color:rgb(14, 8, 51);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7QUFDbkMiLCJmaWxlIjoiaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTQsIDgsIDUxKTtcbn0iXX0= */"] });


/***/ }),

/***/ "tYri":
/*!***************************************************************!*\
  !*** ./src/app/components/mylistpage/mylistpage.component.ts ***!
  \***************************************************************/
/*! exports provided: MylistpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistpageComponent", function() { return MylistpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function MylistpageComponent_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No items found in Watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MylistpageComponent_div_3_div_4_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/watch/movie/" + video_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", video_r4.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r4.title);
} }
function MylistpageComponent_div_3_div_4_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/watch/tv/" + video_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", video_r4.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r4.name);
} }
function MylistpageComponent_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MylistpageComponent_div_3_div_4_a_1_Template, 5, 3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MylistpageComponent_div_3_div_4_a_2_Template, 5, 3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !video_r4.isTVshow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", video_r4.isTVshow);
} }
function MylistpageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My WatchList");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MylistpageComponent_div_3_div_4_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.watchlist);
} }
function MylistpageComponent_div_4_div_4_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/watch/movie/" + video_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", video_r10.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r10.title);
} }
function MylistpageComponent_div_4_div_4_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/watch/tv/" + video_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", video_r10.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r10.name);
} }
function MylistpageComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MylistpageComponent_div_4_div_4_a_1_Template, 5, 3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MylistpageComponent_div_4_div_4_a_2_Template, 5, 3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !video_r10.isTVshow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", video_r10.isTVshow);
} }
function MylistpageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My WatchList");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MylistpageComponent_div_4_div_4_Template, 3, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.watchlist);
} }
class MylistpageComponent {
    constructor(breakpointObserver) {
        this.watchlist = [];
        this.isMobile = false;
        breakpointObserver.observe('(max-width: 760px)').subscribe(result => {
            if (result.matches) {
                this.isMobile = true;
            }
            else {
                this.isMobile = false;
            }
        });
    }
    ngOnInit() {
        this.getWatchlist();
    }
    getWatchlist() {
        let watchlist_keys_str = localStorage.getItem("watchlist");
        if (watchlist_keys_str) {
            let watchlist_keys = watchlist_keys_str.split(",");
            for (let video_key of watchlist_keys) {
                let video_id = video_key.split("_")[1];
                let video_paras_str = localStorage.getItem(video_key);
                if (video_paras_str) {
                    let video_paras = video_paras_str.split(",,,");
                    if (video_paras[0] == "true") {
                        // Is a TV show
                        let video_item = {
                            isTVshow: true,
                            name: video_paras[1] ? video_paras[1] : "",
                            poster_path: video_paras[2] ? video_paras[2] : "https://cinemaone.net/images/movie_placeholder.png",
                            id: video_id,
                        };
                        this.watchlist.push(video_item);
                    }
                    else {
                        // Is a Movie
                        let video_item = {
                            isTVshow: false,
                            title: video_paras[1] ? video_paras[1] : "",
                            poster_path: video_paras[2] ? video_paras[2] : "https://cinemaone.net/images/movie_placeholder.png",
                            id: video_id,
                        };
                        this.watchlist.push(video_item);
                    }
                }
            }
            this.watchlist.reverse();
        }
    }
}
MylistpageComponent.ɵfac = function MylistpageComponent_Factory(t) { return new (t || MylistpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
MylistpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MylistpageComponent, selectors: [["app-mylistpage"]], decls: 6, vars: 3, consts: [[2, "height", "100px"], [1, "row", "m-0", "justify-content-center"], ["class", "col-12 text-white", "style", "text-align: center;", 4, "ngIf"], ["class", "col col-9", 4, "ngIf"], [1, "col-12", "text-white", 2, "text-align", "center"], [1, "col", "col-9"], [1, "text-white", "mb-4"], [1, "row", "m-0", "multi-img-container"], ["class", "img-wrapper col-12 col-md-2 px-0 py-4", 4, "ngFor", "ngForOf"], [1, "img-wrapper", "col-12", "col-md-2", "px-0", "py-4"], [3, "routerLink", 4, "ngIf"], [3, "routerLink"], [2, "width", "90%", 3, "src"], [1, "Imgmask"], [1, "text-white"], ["class", "img-wrapper-mobile col-12 col-md-2 px-0 py-4", 4, "ngFor", "ngForOf"], [1, "img-wrapper-mobile", "col-12", "col-md-2", "px-0", "py-4"], [1, "Imgmask_mobile"]], template: function MylistpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MylistpageComponent_h1_2_Template, 2, 0, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MylistpageComponent_div_3_Template, 5, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MylistpageComponent_div_4_Template, 5, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.watchlist.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.watchlist.length && !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.watchlist.length && ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".img-wrapper[_ngcontent-%COMP%]{\n    position: relative;\n    text-align: center;\n}\n.img-wrapper[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n    transform: scale(1.1);\n}\n.img-wrapper[_ngcontent-%COMP%]:hover   .Imgmask[_ngcontent-%COMP%]{\n    display: block;\n    transform: scale(1.1);\n}\n.Imgmask[_ngcontent-%COMP%]{\n    display: none;\n    background-image: linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,1));\n    position: absolute;\n    bottom: 0px;\n    left: 5%;\n    width: 90%;\n    height: 120px;\n    line-height: 120px;\n    text-align: left;\n    padding-left: 20px;\n    padding-right: 20px;\n    font-size: 15px;\n}\n.Imgmask[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    display: inline-block;\n    line-height: 1.5;\n    vertical-align: middle;\n}\n.img-wrapper-mobile[_ngcontent-%COMP%]{\n    position: relative;\n    text-align: center;\n}\n.Imgmask_mobile[_ngcontent-%COMP%]{\n    background-image: linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,1));\n    position: absolute;\n    bottom: 0px;\n    left: 5%;\n    width: 90%;\n    height: 120px;\n    line-height: 120px;\n    text-align: left;\n    padding-left: 20px;\n    padding-right: 20px;\n    font-size: 15px;\n}\n.Imgmask_mobile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    display: inline-block;\n    line-height: 1.5;\n    vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15bGlzdHBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFDSDtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlFQUFpRTtJQUNqRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixVQUFVO0lBQ1YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUVBQWlFO0lBQ2pFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLFVBQVU7SUFDVixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6Im15bGlzdHBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5tdWx0aS1pbWctY29udGFpbmVye1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbn0gKi9cbi5pbWctd3JhcHBlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmltZy13cmFwcGVyOmhvdmVyIGltZ3tcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4uaW1nLXdyYXBwZXI6aG92ZXIgLkltZ21hc2t7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLkltZ21hc2t7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjI1KSxyZ2JhKDAsMCwwLDEpKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogNSU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMjBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5JbWdtYXNrIHB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmltZy13cmFwcGVyLW1vYmlsZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLkltZ21hc2tfbW9iaWxle1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuMjUpLHJnYmEoMCwwLDAsMSkpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiA1JTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEyMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLkltZ21hc2tfbW9iaWxlIHB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_mylistpage_mylistpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mylistpage/mylistpage.component */ "tYri");
/* harmony import */ var _components_moviepage_moviepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/moviepage/moviepage.component */ "bq+H");
/* harmony import */ var _components_tvshowpage_tvshowpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tvshowpage/tvshowpage.component */ "2C2N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__["HomepageComponent"], runGuardsAndResolvers: 'always' },
    { path: 'mylist', component: _components_mylistpage_mylistpage_component__WEBPACK_IMPORTED_MODULE_2__["MylistpageComponent"], runGuardsAndResolvers: 'always' },
    { path: 'watch/movie/:movie_id', component: _components_moviepage_moviepage_component__WEBPACK_IMPORTED_MODULE_3__["MoviepageComponent"], runGuardsAndResolvers: 'always' },
    { path: 'watch/tv/:tvshow_id', component: _components_tvshowpage_tvshowpage_component__WEBPACK_IMPORTED_MODULE_4__["TvshowpageComponent"], runGuardsAndResolvers: 'always' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vZO3":
/*!*************************************************!*\
  !*** ./src/app/services/gethomedata.service.ts ***!
  \*************************************************/
/*! exports provided: GethomedataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GethomedataService", function() { return GethomedataService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class GethomedataService {
    //serverURL: string = "https://x-planet-310205.wl.r.appspot.com";
    //serverURL: string = "http://localhost:8080";
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.serverURL = "https://server.lijiatong1997.com/trojanfilms";
    }
    getPlayingMovies() {
        let URL = this.serverURL + "/movie_now_playing";
        return this.httpClient.get(URL);
    }
    getPopularMovies() {
        let URL = this.serverURL + "/movie_popular";
        return this.httpClient.get(URL);
    }
    getTopRatedMovies() {
        let URL = this.serverURL + "/movie_top_rated";
        return this.httpClient.get(URL);
    }
    getTrendingMovies() {
        let URL = this.serverURL + "/trending_movie";
        return this.httpClient.get(URL);
    }
    getPopularTVshows() {
        let URL = this.serverURL + "/tv_popular";
        return this.httpClient.get(URL);
    }
    getTopRatedTVshows() {
        let URL = this.serverURL + "/tv_top_rated";
        return this.httpClient.get(URL);
    }
    getTrendingTVshows() {
        let URL = this.serverURL + "/trending_tv";
        return this.httpClient.get(URL);
    }
    // For Movie Page
    getDetailsMovies(movie_id) {
        let URL = this.serverURL + "/movie_details/" + movie_id;
        return this.httpClient.get(URL);
    }
    getVideoMovies(movie_id) {
        let URL = this.serverURL + "/movie_videos/" + movie_id;
        return this.httpClient.get(URL);
    }
    getCastsMovies(movie_id) {
        let URL = this.serverURL + "/movie_credits/" + movie_id;
        return this.httpClient.get(URL);
    }
    getReviewsMovies(movie_id) {
        let URL = this.serverURL + "/movie_reviews/" + movie_id;
        return this.httpClient.get(URL);
    }
    getRecommendedMovies(movie_id) {
        let URL = this.serverURL + "/movie_recommended/" + movie_id;
        return this.httpClient.get(URL);
    }
    getSimilarMovies(movie_id) {
        let URL = this.serverURL + "/movie_similar/" + movie_id;
        return this.httpClient.get(URL);
    }
    // For TVshow Page
    getDetailsTVshows(tv_id) {
        let URL = this.serverURL + "/tv_details/" + tv_id;
        return this.httpClient.get(URL);
    }
    getVideoTVshows(tv_id) {
        let URL = this.serverURL + "/tv_videos/" + tv_id;
        return this.httpClient.get(URL);
    }
    getCastsTVshows(tv_id) {
        let URL = this.serverURL + "/tv_credits/" + tv_id;
        return this.httpClient.get(URL);
    }
    getReviewsTVshows(tv_id) {
        let URL = this.serverURL + "/tv_reviews/" + tv_id;
        return this.httpClient.get(URL);
    }
    getRecommendedTVshows(tv_id) {
        let URL = this.serverURL + "/tv_recommended/" + tv_id;
        return this.httpClient.get(URL);
    }
    getSimilarTVshows(tv_id) {
        let URL = this.serverURL + "/tv_similar/" + tv_id;
        return this.httpClient.get(URL);
    }
    // For Person Modal
    getDetailsPerson(person_id) {
        let URL = this.serverURL + "/person/" + person_id;
        return this.httpClient.get(URL);
    }
    getExternalsPerson(person_id) {
        let URL = this.serverURL + "/person_external_ids/" + person_id;
        return this.httpClient.get(URL);
    }
    // For Search
    getMultiSearch(term) {
        if (term.trim() === "") {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }
        let URL = this.serverURL + "/search_multi";
        return this.httpClient.get(URL, { params: { "query": term } });
    }
}
GethomedataService.ɵfac = function GethomedataService_Factory(t) { return new (t || GethomedataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
GethomedataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GethomedataService, factory: GethomedataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map