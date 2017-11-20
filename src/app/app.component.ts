import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Deredorm';
  subTitle = 'imas libraries';

  constructor( @Inject(DOCUMENT) private document: any, private router: Router) { }

  ngOnInit() {
    /**
     * routerを使った画面描画時に、トップにスクロールするイベントを仕込む
     * @see https://stackoverflow.com/questions/39601026/angular-2-scroll-to-top-on-route-change
     */
    this.router.events.subscribe((evt) => {
      // urlに'#'を含む場合(anchor jump)には実行しない
      const currentUrl = this.router.url;
      if (!(evt instanceof NavigationEnd) || currentUrl.indexOf('#') !== -1) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  atUnitList() {
    let isOnUnit = false;

    const currentUrl: string = this.document.location.href;

    if (currentUrl.indexOf('unit') !== -1) {
      isOnUnit = true;
    }

    return isOnUnit;
  }

}
