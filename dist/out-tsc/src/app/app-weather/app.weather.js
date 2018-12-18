import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var AppWeatherComponent = /** @class */ (function () {
    function AppWeatherComponent(httpClient) {
        this.httpClient = httpClient;
        this.name = '';
        this.title = '';
        this.weather = [];
    }
    // getTitle:Function;
    AppWeatherComponent.prototype.onNameKeyUp = function (event) {
        this.name = event.target.value;
    };
    AppWeatherComponent.prototype.getCountry = function (name) {
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
    var _a;
    AppWeatherComponent = tslib_1.__decorate([
        Component({
            selector: 'app-weather',
            templateUrl: './app.weather.html',
            styleUrls: ['./app.weather.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof HttpClient !== "undefined" && HttpClient) === "function" ? _a : Object])
    ], AppWeatherComponent);
    return AppWeatherComponent;
}());
export { AppWeatherComponent };
//# sourceMappingURL=app.weather.js.map