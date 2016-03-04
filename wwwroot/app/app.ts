import {Component } from 'angular2/core';
import {OptionItem } from './option-item/option-item';
import {OptionBox } from './option-box/option-box';


@Component({
    selector: 'app',
    templateUrl: 'app/app.html',
    directives: [OptionItem, OptionBox]
})
export class AppComponent {

    title: string;
    postOption = 1;

    constructor() {
        this.title = 'Component-Demo';
    }

    change(event) {
        console.log('change!');
        console.log(event);
    }

}