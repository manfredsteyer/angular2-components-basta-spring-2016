System.register(['angular2/core', '../option-item/option-item'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, option_item_1;
    var OptionBox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (option_item_1_1) {
                option_item_1 = option_item_1_1;
            }],
        execute: function() {
            // <option-box [value]="1" ></option-box>
            OptionBox = (function () {
                function OptionBox() {
                    this.valueChange = new core_1.EventEmitter();
                    // Leere QueryList !!!
                }
                OptionBox.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    for (var _i = 0, _a = this.items.toArray(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.selected = item.value == this.value;
                        item.change.subscribe(function (event) { return _this.onChange(event); });
                    }
                };
                OptionBox.prototype.onChange = function (event) {
                    var targetItem = event.target;
                    if (!targetItem.selected)
                        return;
                    for (var _i = 0, _a = this.items.toArray(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.selected = item == targetItem;
                    }
                    this.valueChange.emit(targetItem.value);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], OptionBox.prototype, "value", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], OptionBox.prototype, "valueChange", void 0);
                __decorate([
                    core_1.ContentChildren(option_item_1.OptionItem), 
                    __metadata('design:type', core_1.QueryList)
                ], OptionBox.prototype, "items", void 0);
                OptionBox = __decorate([
                    core_1.Directive({
                        selector: 'option-box'
                    }), 
                    __metadata('design:paramtypes', [])
                ], OptionBox);
                return OptionBox;
            })();
            exports_1("OptionBox", OptionBox);
        }
    }
});
//# sourceMappingURL=option-box.js.map