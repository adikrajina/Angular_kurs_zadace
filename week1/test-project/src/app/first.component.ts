
/*import { Component } from '@angular/core';
@Component ({
    selector: 'app-first-component',
    template: '<div>First component</div>'
})

export class FirstComponent {

}

*/

/*
import { Component } from '@angular/core';

@Component({
    selector: 'app-first-component',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css']
})
export class FirstComponent  {

}

*/

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-first-component',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
