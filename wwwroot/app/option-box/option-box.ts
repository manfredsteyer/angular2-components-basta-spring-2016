import { Directive, Input, ContentChildren, QueryList, EventEmitter, Output } from 'angular2/core';
import { AfterContentInit } from 'angular2/core';

import { OptionItem} from '../option-item/option-item';

// <option-box [value]="1" ></option-box>
@Directive({
    selector: 'option-box'
})
export class OptionBox implements AfterContentInit {

    @Input() value;
    @Output() valueChange = new EventEmitter();

    @ContentChildren(OptionItem)
    items: QueryList<OptionItem>;


    constructor() {
        // Leere QueryList !!!
    }

    ngAfterContentInit() {
        for (var item of this.items.toArray()) {
            item.selected = item.value == this.value;
            item.change.subscribe((event) => this.onChange(event));
        }
    }

    onChange(event) {
        var targetItem: OptionItem = event.target; 

        if (!targetItem.selected) return;

        for (let item of this.items.toArray()) {
            item.selected = item == targetItem;
        }

        this.valueChange.emit(targetItem.value);

    }

}