import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var AppComponent = /** @class */ (function () {
    function AppComponent(httpClient) {
        this.httpClient = httpClient;
        this.name = '';
        this.title = '';
        this.weather = [];
    }
    // getTitle:Function;
    AppComponent.prototype.onNameKeyUp = function (event) {
        this.name = event.target.value;
    };
    AppComponent.prototype.getCountry = function (name) {
        var _this = this;
        this.httpClient.get("https://www.metaweather.com/api/location/search/?query=" + name)
            .subscribe(function (res) {
            _this.weather = res;
            _this.title = _this.weather[0].title;
            // this.getTitle(this.title){};
            console.log(_this.weather);
            console.log(_this.title);
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map