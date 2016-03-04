System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var OptionItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            OptionItem = (function () {
                function OptionItem() {
                    this.change = new core_1.EventEmitter();
                }
                OptionItem.prototype.select = function () {
                    this.selected = !this.selected;
                    this.change.emit({
                        target: this,
                        selected: this.selected,
                        value: this.value
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], OptionItem.prototype, "selected", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], OptionItem.prototype, "value", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], OptionItem.prototype, "change", void 0);
                OptionItem = __decorate([
                    core_1.Component({
                        selector: 'option-item',
                        templateUrl: 'app/option-item/option-item.html',
                        styleUrls: ['app/option-item/option-item.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], OptionItem);
                return OptionItem;
            })();
            exports_1("OptionItem", OptionItem);
        }
    }
});
//# sourceMappingURL=option-item.js.map