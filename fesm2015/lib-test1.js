import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

let LibTest1Service = class LibTest1Service {
    constructor() {
    }
};
LibTest1Service.ɵprov = ɵɵdefineInjectable({ factory: function LibTest1Service_Factory() { return new LibTest1Service(); }, token: LibTest1Service, providedIn: "root" });
LibTest1Service = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LibTest1Service);

let LibTest1Component = class LibTest1Component {
    constructor() { }
    ngOnInit() {
    }
};
LibTest1Component = __decorate([
    Component({
        selector: 'foo-lib-test1',
        template: `
    <p>
      lib-test1 works!
    </p>
  `
    })
], LibTest1Component);

let LibTest1Module = class LibTest1Module {
};
LibTest1Module = __decorate([
    NgModule({
        declarations: [LibTest1Component],
        imports: [],
        exports: [LibTest1Component]
    })
], LibTest1Module);

/*
 * Public API Surface of lib-test1
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LibTest1Component, LibTest1Module, LibTest1Service };
//# sourceMappingURL=lib-test1.js.map
