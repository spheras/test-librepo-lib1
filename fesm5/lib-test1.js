import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

var LibTest1Service = /** @class */ (function () {
    function LibTest1Service() {
    }
    LibTest1Service.ɵfac = function LibTest1Service_Factory(t) { return new (t || LibTest1Service)(); };
    LibTest1Service.ɵprov = ɵɵdefineInjectable({ token: LibTest1Service, factory: LibTest1Service.ɵfac, providedIn: 'root' });
    return LibTest1Service;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(LibTest1Service, [{
        type: Injectable,
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
    LibTest1Component.ɵcmp = ɵɵdefineComponent({ type: LibTest1Component, selectors: [["foo-lib-test1"]], decls: 2, vars: 0, template: function LibTest1Component_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1, " lib-test1 works! ");
            ɵɵelementEnd();
        } }, encapsulation: 2 });
    return LibTest1Component;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(LibTest1Component, [{
        type: Component,
        args: [{
                selector: 'foo-lib-test1',
                template: "\n    <p>\n      lib-test1 works!\n    </p>\n  ",
                styles: []
            }]
    }], function () { return []; }, null); })();

var LibTest1Module = /** @class */ (function () {
    function LibTest1Module() {
    }
    LibTest1Module.ɵmod = ɵɵdefineNgModule({ type: LibTest1Module });
    LibTest1Module.ɵinj = ɵɵdefineInjector({ factory: function LibTest1Module_Factory(t) { return new (t || LibTest1Module)(); }, imports: [[]] });
    return LibTest1Module;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(LibTest1Module, { declarations: [LibTest1Component], exports: [LibTest1Component] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(LibTest1Module, [{
        type: NgModule,
        args: [{
                declarations: [LibTest1Component],
                imports: [],
                exports: [LibTest1Component]
            }]
    }], null, null); })();

/*
 * Public API Surface of lib-test1
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LibTest1Component, LibTest1Module, LibTest1Service };
//# sourceMappingURL=lib-test1.js.map
