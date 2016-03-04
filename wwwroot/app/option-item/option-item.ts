import { Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'option-item',
    templateUrl: 'app/option-item/option-item.html',
    styleUrls: ['app/option-item/option-item.css']
})
export class OptionItem {
    @Input() selected: boolean;
    @Input() value: string;
    @Output() change = new EventEmitter();

    select() {
        this.selected = !this.selected;
        this.change.emit(
            {
                target: this,
                selected: this.selected,
                value: this.value
            });
    }
    
}
