import { Component } from '@angular/core';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';
import { Platform } from '@ionic/angular';  

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  
})
export class AppComponent {
  constructor( private ga: GoogleAnalytics, private platform: Platform,) {this.initializeApp()}
  initializeApp() {
    this.platform.ready().then(() => {


      this.ga.startTrackerWithId('G-YDNK3J0QHL')
      .then(() => {
        console.log('Google analytics is ready now');
        this.ga.trackView('Outbox') 
        .then(() => {

        })
        .catch(
          error => console.log(error)
        );  
       }).catch(
        error => console.log('Google Analytics Error: ' + error)
      );
      
    });
  }
}
