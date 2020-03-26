(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('lib-test1', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['lib-test1'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var LibTest1Service = /** @class */ (function () {
        function LibTest1Service() {
        }
        LibTest1Service.ɵfac = function LibTest1Service_Factory(t) { return new (t || LibTest1Service)(); };
        LibTest1Service.ɵprov = core["ɵɵdefineInjectable"]({ token: LibTest1Service, factory: LibTest1Service.ɵfac, providedIn: 'root' });
        return LibTest1Service;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](LibTest1Service, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var LibTest1Component = /** @class */ (function () {
        function LibTest1Component() {
        }
        LibTest1Component.prototype.ngOnInit = function () {
        };
        LibTest1Component.ɵfac = function LibTest1Component_Factory(t) { return new (t || LibTest1Component)(); };
        LibTest1Component.ɵcmp = core["ɵɵdefineComponent"]({ type: LibTest1Component, selectors: [["foo-lib-test1"]], decls: 2, vars: 0, template: function LibTest1Component_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "p");
                core["ɵɵtext"](1, " lib-test1 works! ");
                core["ɵɵelementEnd"]();
            } }, encapsulation: 2 });
        return LibTest1Component;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](LibTest1Component, [{
            type: core.Component,
            args: [{
                    selector: 'foo-lib-test1',
                    template: "\n    <p>\n      lib-test1 works!\n    </p>\n  ",
                    styles: []
                }]
        }], function () { return []; }, null); })();

    var LibTest1Module = /** @class */ (function () {
        function LibTest1Module() {
        }
        LibTest1Module.ɵmod = core["ɵɵdefineNgModule"]({ type: LibTest1Module });
        LibTest1Module.ɵinj = core["ɵɵdefineInjector"]({ factory: function LibTest1Module_Factory(t) { return new (t || LibTest1Module)(); }, imports: [[]] });
        return LibTest1Module;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](LibTest1Module, { declarations: [LibTest1Component], exports: [LibTest1Component] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](LibTest1Module, [{
            type: core.NgModule,
            args: [{
                    declarations: [LibTest1Component],
                    imports: [],
                    exports: [LibTest1Component]
                }]
        }], null, null); })();

    exports.LibTest1Component = LibTest1Component;
    exports.LibTest1Module = LibTest1Module;
    exports.LibTest1Service = LibTest1Service;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lib-test1.umd.js.map
