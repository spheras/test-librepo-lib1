import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

var LibTest1Service = /** @class */ (function () {
    function LibTest1Service() {
    }
    LibTest1Service.ɵprov = ɵɵdefineInjectable({ factory: function LibTest1Service_Factory() { return new LibTest1Service(); }, token: LibTest1Service, providedIn: "root" });
    LibTest1Service = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], LibTest1Service);
    return LibTest1Service;
}());

var LibTest1Component = /** @class */ (function () {
    function LibTest1Component() {
    }
    LibTest1Component.prototype.ngOnInit = function () {
    };
    LibTest1Component = __decorate([
        Component({
            selector: 'foo-lib-test1',
            template: "\n    <p>\n      lib-test1 works!\n    </p>\n  "
        })
    ], LibTest1Component);
    return LibTest1Component;
}());

var LibTest1Module = /** @class */ (function () {
    function LibTest1Module() {
    }
    LibTest1Module = __decorate([
        NgModule({
            declarations: [LibTest1Component],
            imports: [],
            exports: [LibTest1Component]
        })
    ], LibTest1Module);
    return LibTest1Module;
}());

/*
 * Public API Surface of lib-test1
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LibTest1Component, LibTest1Module, LibTest1Service };
//# sourceMappingURL=lib-test1.js.map
