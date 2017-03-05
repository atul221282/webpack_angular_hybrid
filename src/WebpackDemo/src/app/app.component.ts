import { Component } from '@angular/core';
import { ApiService } from './shared';
let image: string = require('../images/mario.jpg');

@Component({
    selector: 'my-app', // <my-app></my-app>
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    url = 'https://github.com/preboot/angular2-webpack';
    title: string;
    imgSrc: string;
    constructor(private api: ApiService) {
        console.log(image);
        debugger;
        this.imgSrc = image.indexOf('data:') > -1 ? image : `./dist/${image}`;
        this.title = this.api.title;
    }
}
