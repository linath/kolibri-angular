import {Component, ViewChild} from '@angular/core';

import {Components} from "@public-ui/components";

@Component({
    selector: 'app',
    templateUrl: 'component.html',
})
export class AppComponent {
    public changed($event: Event) {
				console.log("changed", $event);
    }
}
