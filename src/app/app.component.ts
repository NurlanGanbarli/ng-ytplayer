import { Component } from '@angular/core';

@Component({
  selector: 'ng-root',
  template: `<main>
    <ng-ytplayer videoID="K4wEI5zhHB0" parameters="rel=0"></ng-ytplayer>
    <ng-ytplayer videoID="mW6hFttt_KE" parameters="rel=0"></ng-ytplayer>
  </main>`,
  styles: [`main { width: 640px; height: 360px;`]
})
export class AppComponent {
}
