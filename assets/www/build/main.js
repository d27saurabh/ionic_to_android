webpackJsonp([0],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Profile = (function () {
    function Profile(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.filterClosed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.NoOfBathrooms = 0;
        this.NoOfBedrooms = 0;
        this.price = 0;
        this.AreaSpace_SQFT = 0;
        this.EstimatedRent = 0;
    }
    Profile.prototype.increment = function (type) {
        if (type == "bathroom")
            this.NoOfBathrooms++;
        else
            this.NoOfBedrooms++;
    };
    Profile.prototype.decrement = function (type) {
        if (type == "bathroom") {
            if (this.NoOfBathrooms > 0)
                this.NoOfBathrooms--;
        }
        else {
            if (this.NoOfBedrooms > 0)
                this.NoOfBedrooms--;
        }
    };
    Profile.prototype.search = function () {
        var filter = [{
                searchType: 'bedroom',
                searchValue: this.NoOfBedrooms
            },
            {
                searchType: 'bathroom',
                searchValue: this.NoOfBathrooms
            },
            {
                searchType: 'price',
                searchValue: this.price
            },
            {
                searchType: 'AreaSpace_SQFT',
                searchValue: this.AreaSpace_SQFT
            },
            {
                searchType: 'EstimatedRent',
                searchValue: this.EstimatedRent
            }
        ];
        if (filter != undefined) {
            this.viewCtrl.dismiss(filter);
        }
    };
    return Profile;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], Profile.prototype, "filterClosed", void 0);
Profile = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-filter',template:/*ion-inline-start:"/Users/prinkle/Downloads/IonicCharts-2/src/pages/contact/filter.html"*/'<ion-content>\n\n        <ion-list>       \n\n                <ion-list-header  style="font-size:14pt"><b>Bedrooms</b>  <ion-icon name="home"></ion-icon>\n\n                </ion-list-header>\n\n                <ion-item>\n\n                <ion-row>\n\n                <ion-col col-1> <ion-icon  style="font-size:34pt" name="remove-circle" (click)="decrement(\'bedroom\')"></ion-icon> {{NoOfBedrooms}} <ion-icon name="add-circle"  style="font-size:34pt" (click)="increment(\'bedroom\')"></ion-icon>\n\n                </ion-col>\n\n                </ion-row>\n\n                </ion-item> \n\n                <ion-list-header  style="font-size:14pt"><b>Bathroom</b>  <ion-icon name="water"></ion-icon>\n\n                </ion-list-header>\n\n                <ion-item>\n\n                <ion-row>\n\n                                <ion-col col-1> <ion-icon  style="font-size:34pt" name="remove-circle" (click)="decrement(\'bathroom\')"></ion-icon>{{NoOfBathrooms}} <ion-icon name="add-circle"  style="font-size:34pt" (click)="increment(\'bathroom\')"></ion-icon>\n\n                                </ion-col>\n\n                </ion-row>\n\n                </ion-item>                               \n\n\n\n\n\n                                <ion-list-header  style="font-size:14pt"><b>Price</b>  <ion-icon name="pricetag"></ion-icon>\n\n                                </ion-list-header>\n\n                                <ion-item>\n\n        <ion-label>{{price}}</ion-label>       \n\n        <ion-range min="0" max="2000000" pin="true" snap="true" [(ngModel)]="price" color="default">\n\n                        <ion-label range-left>0</ion-label>\n\n                        <ion-label range-right>2000000</ion-label>\n\n                      </ion-range>\n\n                </ion-item>\n\n\n\n                                <ion-list-header  style="font-size:14pt"><b>Area Space SQFT</b>  <ion-icon name="pricetag"></ion-icon>\n\n                                </ion-list-header>\n\n                                <ion-item>\n\n                      <ion-label>{{AreaSpace_SQFT}}</ion-label>       \n\n                      <ion-range min="0" max="5000" pin="true" snap="true" [(ngModel)]="AreaSpace_SQFT" color="default">\n\n                                      <ion-label range-left>0</ion-label>\n\n                                      <ion-label range-right>5000</ion-label>\n\n                                    </ion-range>\n\n                                </ion-item> \n\n                            \n\n                                <ion-list-header  style="font-size:14pt"><b>Estimated Rent</b>  <ion-icon name="pricetag"></ion-icon>\n\n                                 </ion-list-header> \n\n                                 <ion-item>            \n\n                      <ion-label>{{EstimatedRent}}</ion-label>       \n\n                      <ion-range min="0" max="5000" pin="true" snap="true" [(ngModel)]="EstimatedRent" color="default">\n\n                                      <ion-label range-left>0</ion-label>\n\n                                      <ion-label range-right>5000</ion-label>\n\n                                    </ion-range>\n\n                                </ion-item>\n\n                                <button ion-button (click)="search()">Search</button>\n\n                                \n\n                                </ion-list>                         \n\n</ion-content>\n\n'/*ion-inline-end:"/Users/prinkle/Downloads/IonicCharts-2/src/pages/contact/filter.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
], Profile);

var ContactPage = (function () {
    function ContactPage(navCtrl, http, renderer, alertCtrl, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.renderer = renderer;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.data2 = [];
        this.City = [];
        this.Zipcode = [];
        this.City2 = [];
        this.Zipcode2 = [];
        this.SelectedZipCodesToCompare = [];
        this.StateData = [];
        //array of selected list items data
        this.selectedDataItems = [];
        // count of selected list items
        // if more than 2, compare button is set to visble
        this.selectedItemCount = 0;
        // Toggle view type
        // True - Apartment List
        // False - Zip Code Search
        this.ListView = true;
        this.rangeObject = { lower: 0, upper: 100 };
        // get Json data from file
        debugger;
        this.http.get('./assets/data/housing_compare_app.json')
            .subscribe(function (res) { return _this.data = _this.originalData = res.json(); });
    }
    //Highlight selected list item
    //Add data of list item to array
    //if exists, remove list item data from array and un highlight it.
    //prevent selection of more than 4 list items
    ContactPage.prototype.onItemSelect = function (data, event) {
        var selectedId = event.currentTarget.id;
        // if number of seleted items is less than 4 and the selected list item is not in the array
        if (this.selectedItemCount < 4 && this.selectedDataItems.find(function (x) { return x.Id == selectedId; }) == undefined) {
            this.selectedItemCount++;
            this.selectedDataItems.push(data);
            //Add a class attribure so we can change the CSS of the selected item to make it Gray
            this.renderer.setElementClass(event.target, "selected", true);
        }
        else if (this.selectedDataItems.find(function (x) { return x.Id == selectedId; }) != undefined) {
            this.selectedItemCount--;
            //Remove the class 
            this.renderer.setElementClass(event.target, "selected", false);
            //remove Item from array with matching Id
            this.selectedDataItems.splice(this.selectedDataItems.findIndex(function (x) { return x.Id == selectedId; }), 1);
        }
        else if (this.selectedItemCount >= 4) {
            var alert_1 = this.alertCtrl.create({
                title: 'Hey!',
                subTitle: 'At a maximum 4 items can be compared',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    ContactPage.prototype.onItemLongPress = function (data, event) {
        debugger;
        var propertyDetails = ' <img src="https://static.pexels.com/photos/106399/pexels-photo-106399.jpeg"><br/><br/><b>Locality:</b> ' + data.Locality + '<br/><b>Status: </b>' + data.Status + '<br/><b>Price: </b>' + data.Price + '<br/><b>Area Space: </b>' + data.AreaSpace_SQFT + '<br/><b>Year Built: </b>' + data.YearBuilt;
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: propertyDetails,
            buttons: ['OK']
        });
        alert.present();
    };
    ContactPage.prototype.onFilterDismissRefineList = function (filterData) {
        var _this = this;
        debugger;
        this.data = this.originalData;
        console.log(filterData);
        debugger;
        filterData.forEach(function (filterData) {
            if (filterData.searchType.toLowerCase() == "bedroom" && filterData.searchValue != "0")
                _this.data = _this.data.filter(function (x) { return x.Bedrooms == filterData.searchValue; });
            else if (filterData.searchType.toLowerCase() == "bathroom" && filterData.searchValue != "0")
                _this.data = _this.data.filter(function (x) { return x.Bathrooms == filterData.searchValue; });
            else if (filterData.searchType.toLowerCase() == "price" && filterData.searchValue != "0") {
                _this.data = _this.data.filter(function (x) { return (x.Price > 0 && x.Price < filterData.searchValue); });
            }
            else if (filterData.searchType.toLowerCase() == "areaspace_sqft" && filterData.searchValue != "0") {
                _this.data = _this.data.filter(function (x) { return (x.AreaSpace_SQFT > 0 && x.AreaSpace_SQFT < filterData.searchValue); });
            }
            else if (filterData.searchType.toLowerCase() == "estimatedrent" && filterData.searchValue != "0") {
                _this.data = _this.data.filter(function (x) { return (x.EstimatedRent > 0 && x.EstimatedRent < filterData.searchValue); });
            }
        });
        console.log(this.data);
        console.log(this.originalData);
    };
    ContactPage.prototype.filterList = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(Profile, { userId: 8675309 });
        profileModal.onDidDismiss(function (dataa) {
            _this.onFilterDismissRefineList(dataa);
        });
        profileModal.present();
    };
    ContactPage.prototype.compareClick = function () {
        var _this = this;
        debugger;
        if (!this.ListView) {
            this.ListView = true;
        }
        else {
            if (this.selectedDataItems.length < 1) {
                if (this.ListView == true) {
                    var alert_2 = this.alertCtrl.create({
                        title: '',
                        subTitle: 'Select at least 2 to compare',
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
            }
            else {
                var alert_3 = this.alertCtrl.create();
                alert_3.setTitle('Select properties to compare?');
                alert_3.addInput({
                    type: 'checkbox',
                    label: 'Area in SQ ft',
                    value: 'AreaSpace_SQFT',
                    checked: false
                });
                alert_3.addInput({
                    type: 'checkbox',
                    label: 'Price',
                    value: 'Price'
                });
                alert_3.addInput({
                    type: 'checkbox',
                    label: 'Estimated Rent',
                    value: 'EstimatedRent'
                });
                alert_3.addButton('Cancel');
                alert_3.addButton({
                    text: 'Okay',
                    handler: function (data) {
                        _this.compareListData(data);
                    }
                });
                alert_3.present();
            }
        }
    };
    ContactPage.prototype.compareListData = function (chartParams) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */], { data: this.selectedDataItems, comparisonType: "list", chartParams: chartParams });
    };
    ContactPage.prototype.saveZipcodeDataToCompare = function (selectedZipCode) {
        debugger;
        if (this.SelectedZipCodesToCompare.indexOf(selectedZipCode) === -1) {
            this.SelectedZipCodesToCompare.push(selectedZipCode);
        }
    };
    ContactPage.prototype.compareZipDataClick = function () {
        var _this = this;
        debugger;
        if (this.SelectedZipCodesToCompare.length != 2) {
            var alert_4 = this.alertCtrl.create({
                title: '',
                subTitle: 'Select Zipcodes to compare',
                buttons: ['OK']
            });
            alert_4.present();
        }
        else {
            debugger;
            var newArr = this.ZipData.filter(function (el) {
                if (_this.SelectedZipCodesToCompare.indexOf(el.Zipcode) !== -1) {
                    // If not present in array, then add it
                    _this.data2.push(el);
                    return true;
                }
                else {
                    // Already present in array, don't add it
                    return false;
                }
            });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */], { data: this.data2, comparisonType: "zipcode", chartParams: null });
        }
    };
    ContactPage.prototype.compareZipCodeClick = function () {
        var _this = this;
        this.ListView = false;
        // get Json data from file
        this.http.get('./assets/data/zip.json')
            .subscribe(function (res) { return _this.ZipData = res.json(); }, function (error) { return console.log("Error getting Zipcode Data"); }, function () { return _this.unique(_this.ZipData); });
    };
    ContactPage.prototype.unique = function (arr) {
        var _this = this;
        debugger;
        var newArr = arr.filter(function (el) {
            if (_this.StateData.indexOf(el.state) === -1) {
                // If not present in array, then add it
                _this.StateData.push(el.state);
                return true;
            }
            else {
                // Already present in array, don't add it
                return false;
            }
        });
    };
    ContactPage.prototype.populateCity = function (selectedState) {
        var _this = this;
        debugger;
        this.Zipcode = [];
        this.City = [];
        var newArr = this.ZipData.filter(function (el) {
            if (el.state.toUpperCase() == selectedState.toUpperCase() && _this.City.indexOf(el.city) === -1) {
                // If not present in array, then add it
                _this.City.push(el.city);
                return true;
            }
            else {
                // Already present in array, don't add it
                return false;
            }
        });
    };
    ContactPage.prototype.populateCity2 = function (selectedState) {
        var _this = this;
        debugger;
        this.Zipcode2 = [];
        this.City2 = [];
        var newArr = this.ZipData.filter(function (el) {
            if (el.state.toUpperCase() == selectedState.toUpperCase() && _this.City2.indexOf(el.city) === -1) {
                // If not present in array, then add it
                _this.City2.push(el.city);
                return true;
            }
            else {
                // Already present in array, don't add it
                return false;
            }
        });
    };
    ContactPage.prototype.populateZip = function (selectedCity) {
        var _this = this;
        debugger;
        var newArr = this.ZipData.filter(function (el) {
            if (el.city.toUpperCase() == selectedCity.toUpperCase() && _this.Zipcode.indexOf(el.zip_code) === -1) {
                // If not present in array, then add it
                _this.Zipcode.push(el.zip_code);
                return true;
            }
            else {
                // Already present in array, don't add it
                return false;
            }
        });
    };
    ContactPage.prototype.populateZip2 = function (selectedCity) {
        var _this = this;
        debugger;
        var newArr = this.ZipData.filter(function (el) {
            if (el.City.toUpperCase() == selectedCity.toUpperCase() && _this.Zipcode2.indexOf(el.Zipcode) === -1) {
                // If not present in array, then add it
                _this.Zipcode2.push(el.Zipcode);
                return true;
            }
            else {
                // Already present in array, don't add it
                return false;
            }
        });
    };
    ContactPage.prototype.find_in_object = function (my_object, my_criteria) {
        return my_object.filter(function (obj) {
            return Object.keys(my_criteria).every(function (c) {
                return obj[c] == my_criteria[c];
            });
        });
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/prinkle/Downloads/IonicCharts-2/src/pages/contact/contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Apartment Listings \n\n      <button ion-button icon-right (click)="compareClick()">\n\n         Compare \n\n          <ion-icon name="podium"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-right (click)="compareZipCodeClick()">\n\n          Compare by Zip Code\n\n           <ion-icon name="podium"></ion-icon>\n\n         </button>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content *ngIf="ListView==true">\n\n    <ion-fab top left edge>\n\n        <button ion-fab mini><ion-icon name="menu"></ion-icon></button>\n\n        <ion-fab-list>\n\n          <button ion-fab (click)="filterList()"><ion-icon name="options"></ion-icon></button>\n\n        </ion-fab-list>\n\n      </ion-fab>\n\n  <ion-list multiple="true">\n\n    <button ion-item *ngFor="let x of data" id="{{x?.Id}}" (click)="onItemSelect(x,$event)" (press)="onItemLongPress(x,$event)" >\n\n      <ion-avatar item-start>\n\n        <img src="https://static.pexels.com/photos/106399/pexels-photo-106399.jpeg">\n\n      </ion-avatar>\n\n      <h2>Townhouse available for sale at {{x?.Locality}}</h2>  <h2>Bedrooms:{{x?.Bedrooms}} Bath:{{x?.Bathrooms}}</h2>\n\n      <h3>State: {{x?.State}}</h3>\n\n    </button>    \n\n  </ion-list>\n\n</ion-content>\n\n\n\n<ion-content *ngIf="ListView==false" item-width="30">\n\n    <br><br> <br><br>\n\n\n\n    <form (ngSubmit)="logForm()">\n\n        <ion-grid>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label>State</ion-label>\n\n                  <ion-select [ngModel]="StateData" [ngModelOptions]="{standalone: true}">\n\n                      <ion-option (ionSelect)="populateCity($event)" *ngFor="let stateData of StateData" [value]="stateData">{{stateData}}</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label>City</ion-label>\n\n                    <ion-select [ngModel]="City" [ngModelOptions]="{standalone: true}">\n\n                      <ion-option (ionSelect)="populateZip($event)" *ngFor="let C of City" [value]="C">{{C}}</ion-option>\n\n                      </ion-select>\n\n                  </ion-item>\n\n                  <ion-item>\n\n                  <ion-label>Zip Code</ion-label>\n\n                  <ion-select [ngModel]="Zipcode" [ngModelOptions]="{standalone: true}">\n\n                      <ion-option (ionSelect)="saveZipcodeDataToCompare($event)" *ngFor="let z of Zipcode" [value]="z">{{z}}</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <br/><br/>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-item>\n\n                  <ion-label>State</ion-label>\n\n                  <ion-select [ngModel]="StateData" [ngModelOptions]="{standalone: true}">\n\n                      <ion-option (ionSelect)="populateCity2($event)" *ngFor="let stateData of StateData"  [value]="stateData">{{stateData}}</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label>City</ion-label>\n\n                    <ion-select [ngModel]="City2" [ngModelOptions]="{standalone: true}">\n\n                      <ion-option (ionSelect)="populateZip2($event)" *ngFor="let C of City2" [value]="C">{{C}}</ion-option>\n\n                      </ion-select>\n\n                  </ion-item>\n\n                  <ion-item>\n\n                  <ion-label>Zip Code</ion-label>\n\n                  <ion-select [ngModel]="Zipcode2" [ngModelOptions]="{standalone: true}">\n\n                      <ion-option (ionSelect)="saveZipcodeDataToCompare($event)" *ngFor="let z of Zipcode2" [value]="z">{{z}}</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n\n\n        <button ion-button type="submit" (click)="compareZipDataClick()" block>Compare</button>\n\n      </form>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/prinkle/Downloads/IonicCharts-2/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.graphdatasets = [];
        this.chartParams = [];
        // get data passed from navigation   
        this.data = this.navParams.get('data');
        this.comparisonType = this.navParams.get('comparisonType');
        this.chartParams = this.navParams.get('chartParams');
        this.buildGraphJsonData(this.data);
    }
    HomePage.prototype.buildGraphJsonData = function (data) {
        var r, g, b;
        for (var j = 0; j < data.length; j++) {
            var rArr = [205, 120, 106, 238];
            var gArr = [83, 88, 142, 252];
            var bArr = [83, 212, 96, 116];
            if (this.comparisonType.toLocaleLowerCase() == "zipcode") {
                this.graphdatasets[j] =
                    { label: data[j].State,
                        backgroundColor: ['rgba(' + rArr[j] + ',' + gArr[j] + ',' + bArr[j] + ',0.5)'],
                        borderColor: ['rgba(' + r + ',' + g + ',' + b + ',1)'],
                        data: [(data[j].AVG_Zip_PctOfHomesDecreasingInValues_AllHomes),
                            data[j].AVG_ZipListingsPriceCutSeasAdjAllHomes_,
                            data[j].CV_ZipPctOfListingsWithPriceReductionsAllHomes_]
                    };
            }
            else {
                var i;
                var paramArr = [];
                var param;
                for (i = 0; i < this.chartParams.length; i++) {
                    param = this.chartParams[i];
                    if (param.toLowerCase() == "price")
                        paramArr.push((data[j][param]) / 100);
                    else
                        paramArr.push(data[j][param]);
                }
                if (paramArr.length == 1) {
                    this.graphdatasets[j] =
                        { label: data[j].Locality + ' ' + data[j].State,
                            backgroundColor: ['rgba(' + rArr[j] + ',' + gArr[j] + ',' + bArr[j] + ',0.5)'],
                            borderColor: ['rgba(' + r + ',' + g + ',' + b + ',1)'],
                            data: [paramArr[0]]
                        };
                }
                if (paramArr.length == 2) {
                    this.graphdatasets[j] =
                        { label: data[j].Locality + ' ' + data[j].State,
                            backgroundColor: ['rgba(' + rArr[j] + ',' + gArr[j] + ',' + bArr[j] + ',0.5)'],
                            borderColor: ['rgba(' + r + ',' + g + ',' + b + ',1)'],
                            data: [paramArr[0], paramArr[1]]
                        };
                }
                if (paramArr.length == 3) {
                    this.graphdatasets[j] =
                        { label: data[j].Locality + ' ' + data[j].State,
                            backgroundColor: ['rgba(' + rArr[j] + ',' + gArr[j] + ',' + bArr[j] + ',0.5)'],
                            borderColor: ['rgba(' + r + ',' + g + ',' + b + ',1)'],
                            data: [paramArr[0], paramArr[1], paramArr[2]]
                        };
                }
                if (paramArr.length == 4) {
                    this.graphdatasets[j] =
                        { label: data[j].Locality + ' ' + data[j].State,
                            backgroundColor: ['rgba(' + rArr[j] + ',' + gArr[j] + ',' + bArr[j] + ',0.5)'],
                            borderColor: ['rgba(' + r + ',' + g + ',' + b + ',1)'],
                            data: [paramArr[0], paramArr[1], paramArr[2], paramArr[3]]
                        };
                }
            }
        }
    };
    HomePage.prototype.ionViewDidLoad = function () {
        if (this.comparisonType.toLocaleLowerCase() == "zipcode") {
            this.radarChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.radarCanvas.nativeElement, {
                type: 'radar',
                data: {
                    labels: ["AVG Zip % Of Homes Decreasing In Values", "AVG Zip Listings Price Cut Seas Adj All Homes", "CV Zip % Of Listings With Price Reductions All Homes"],
                    datasets: this.graphdatasets,
                    options: {
                        scale: {
                            // Hides the scale
                            display: true
                        }
                    }
                }
            });
        }
        else {
            this.radarChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.radarCanvas.nativeElement, {
                type: 'radar',
                data: {
                    labels: ["AreaSpace (SQFT)", "Price(x100))", "EstimatedRent"],
                    datasets: this.graphdatasets,
                    options: {
                        scale: {
                            // Hides the scale
                            display: true
                        }
                    }
                }
            });
        }
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('radarCanvas'),
    __metadata("design:type", Object)
], HomePage.prototype, "radarCanvas", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/prinkle/Downloads/IonicCharts-2/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Charts in Ionic 2\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n \n    <ion-card>\n      <ion-card-header>\n       Radar Chart\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #radarCanvas width="600" height="800"></canvas>\n      </ion-card-content>\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/prinkle/Downloads/IonicCharts-2/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
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
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage(nav) {
        this.nav = nav;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    ;
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/prinkle/Downloads/IonicCharts-2/src/pages/tabs/tabs.html"*/'<ion-tabs  selectedIndex="0">\n  <ion-tab [root]="tab3Root" tabTitle="Apartment Listings" tabIcon="home"></ion-tab> \n  <ion-tab [root]="tab1Root" tabTitle="Compare" tabIcon="analytics"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  \n</ion-tabs>\n'/*ion-inline-end:"/Users/prinkle/Downloads/IonicCharts-2/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/prinkle/Downloads/IonicCharts-2/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/prinkle/Downloads/IonicCharts-2/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(343);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__unique_pipe__ = __webpack_require__(440);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__unique_pipe__["a" /* UniquePipe */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["b" /* Profile */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["b" /* Profile */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/prinkle/Downloads/IonicCharts-2/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/prinkle/Downloads/IonicCharts-2/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 209,
	"./af.js": 209,
	"./ar": 210,
	"./ar-dz": 211,
	"./ar-dz.js": 211,
	"./ar-kw": 212,
	"./ar-kw.js": 212,
	"./ar-ly": 213,
	"./ar-ly.js": 213,
	"./ar-ma": 214,
	"./ar-ma.js": 214,
	"./ar-sa": 215,
	"./ar-sa.js": 215,
	"./ar-tn": 216,
	"./ar-tn.js": 216,
	"./ar.js": 210,
	"./az": 217,
	"./az.js": 217,
	"./be": 218,
	"./be.js": 218,
	"./bg": 219,
	"./bg.js": 219,
	"./bn": 220,
	"./bn.js": 220,
	"./bo": 221,
	"./bo.js": 221,
	"./br": 222,
	"./br.js": 222,
	"./bs": 223,
	"./bs.js": 223,
	"./ca": 224,
	"./ca.js": 224,
	"./cs": 225,
	"./cs.js": 225,
	"./cv": 226,
	"./cv.js": 226,
	"./cy": 227,
	"./cy.js": 227,
	"./da": 228,
	"./da.js": 228,
	"./de": 229,
	"./de-at": 230,
	"./de-at.js": 230,
	"./de-ch": 231,
	"./de-ch.js": 231,
	"./de.js": 229,
	"./dv": 232,
	"./dv.js": 232,
	"./el": 233,
	"./el.js": 233,
	"./en-au": 234,
	"./en-au.js": 234,
	"./en-ca": 235,
	"./en-ca.js": 235,
	"./en-gb": 236,
	"./en-gb.js": 236,
	"./en-ie": 237,
	"./en-ie.js": 237,
	"./en-nz": 238,
	"./en-nz.js": 238,
	"./eo": 239,
	"./eo.js": 239,
	"./es": 240,
	"./es-do": 241,
	"./es-do.js": 241,
	"./es.js": 240,
	"./et": 242,
	"./et.js": 242,
	"./eu": 243,
	"./eu.js": 243,
	"./fa": 244,
	"./fa.js": 244,
	"./fi": 245,
	"./fi.js": 245,
	"./fo": 246,
	"./fo.js": 246,
	"./fr": 247,
	"./fr-ca": 248,
	"./fr-ca.js": 248,
	"./fr-ch": 249,
	"./fr-ch.js": 249,
	"./fr.js": 247,
	"./fy": 250,
	"./fy.js": 250,
	"./gd": 251,
	"./gd.js": 251,
	"./gl": 252,
	"./gl.js": 252,
	"./gom-latn": 253,
	"./gom-latn.js": 253,
	"./he": 254,
	"./he.js": 254,
	"./hi": 255,
	"./hi.js": 255,
	"./hr": 256,
	"./hr.js": 256,
	"./hu": 257,
	"./hu.js": 257,
	"./hy-am": 258,
	"./hy-am.js": 258,
	"./id": 259,
	"./id.js": 259,
	"./is": 260,
	"./is.js": 260,
	"./it": 261,
	"./it.js": 261,
	"./ja": 262,
	"./ja.js": 262,
	"./jv": 263,
	"./jv.js": 263,
	"./ka": 264,
	"./ka.js": 264,
	"./kk": 265,
	"./kk.js": 265,
	"./km": 266,
	"./km.js": 266,
	"./kn": 267,
	"./kn.js": 267,
	"./ko": 268,
	"./ko.js": 268,
	"./ky": 269,
	"./ky.js": 269,
	"./lb": 270,
	"./lb.js": 270,
	"./lo": 271,
	"./lo.js": 271,
	"./lt": 272,
	"./lt.js": 272,
	"./lv": 273,
	"./lv.js": 273,
	"./me": 274,
	"./me.js": 274,
	"./mi": 275,
	"./mi.js": 275,
	"./mk": 276,
	"./mk.js": 276,
	"./ml": 277,
	"./ml.js": 277,
	"./mr": 278,
	"./mr.js": 278,
	"./ms": 279,
	"./ms-my": 280,
	"./ms-my.js": 280,
	"./ms.js": 279,
	"./my": 281,
	"./my.js": 281,
	"./nb": 282,
	"./nb.js": 282,
	"./ne": 283,
	"./ne.js": 283,
	"./nl": 284,
	"./nl-be": 285,
	"./nl-be.js": 285,
	"./nl.js": 284,
	"./nn": 286,
	"./nn.js": 286,
	"./pa-in": 287,
	"./pa-in.js": 287,
	"./pl": 288,
	"./pl.js": 288,
	"./pt": 289,
	"./pt-br": 290,
	"./pt-br.js": 290,
	"./pt.js": 289,
	"./ro": 291,
	"./ro.js": 291,
	"./ru": 292,
	"./ru.js": 292,
	"./sd": 293,
	"./sd.js": 293,
	"./se": 294,
	"./se.js": 294,
	"./si": 295,
	"./si.js": 295,
	"./sk": 296,
	"./sk.js": 296,
	"./sl": 297,
	"./sl.js": 297,
	"./sq": 298,
	"./sq.js": 298,
	"./sr": 299,
	"./sr-cyrl": 300,
	"./sr-cyrl.js": 300,
	"./sr.js": 299,
	"./ss": 301,
	"./ss.js": 301,
	"./sv": 302,
	"./sv.js": 302,
	"./sw": 303,
	"./sw.js": 303,
	"./ta": 304,
	"./ta.js": 304,
	"./te": 305,
	"./te.js": 305,
	"./tet": 306,
	"./tet.js": 306,
	"./th": 307,
	"./th.js": 307,
	"./tl-ph": 308,
	"./tl-ph.js": 308,
	"./tlh": 309,
	"./tlh.js": 309,
	"./tr": 310,
	"./tr.js": 310,
	"./tzl": 311,
	"./tzl.js": 311,
	"./tzm": 312,
	"./tzm-latn": 313,
	"./tzm-latn.js": 313,
	"./tzm.js": 312,
	"./uk": 314,
	"./uk.js": 314,
	"./ur": 315,
	"./ur.js": 315,
	"./uz": 316,
	"./uz-latn": 317,
	"./uz-latn.js": 317,
	"./uz.js": 316,
	"./vi": 318,
	"./vi.js": 318,
	"./x-pseudo": 319,
	"./x-pseudo.js": 319,
	"./yo": 320,
	"./yo.js": 320,
	"./zh-cn": 321,
	"./zh-cn.js": 321,
	"./zh-hk": 322,
	"./zh-hk.js": 322,
	"./zh-tw": 323,
	"./zh-tw.js": 323
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 422;

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UniquePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UniquePipe = (function () {
    function UniquePipe() {
    }
    UniquePipe.prototype.transform = function (value) {
        debugger;
        if (value !== undefined && value !== null) {
            return __WEBPACK_IMPORTED_MODULE_1_lodash__["uniqBy"](value, 'State');
        }
        return value;
    };
    return UniquePipe;
}());
UniquePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'unique',
        pure: false
    })
], UniquePipe);

//# sourceMappingURL=unique.pipe.js.map

/***/ })

},[324]);
//# sourceMappingURL=main.js.map