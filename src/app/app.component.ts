import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Deredorm';
  subTitle = 'imas libraries';

  constructor( @Inject(DOCUMENT) private document: any) { }

  atUnitList() {
    let isOnUnit = false;

    const currentUrl: string = this.document.location.href;

    if (currentUrl.indexOf('unit') !== -1) {
      isOnUnit = true;
    }

    return isOnUnit;
  }

}
