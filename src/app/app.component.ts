import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Play', url: '/main', icon: 'play' },
    { title: 'Info', url: '/info', icon: 'information-circle' },
    { title: 'Settings', url: '/settings', icon: 'settings' },
  ];

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
}
