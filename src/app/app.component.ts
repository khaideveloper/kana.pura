import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

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

  constructor(
    private screenOrientation: ScreenOrientation,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
}
