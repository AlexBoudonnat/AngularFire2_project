import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Import the AF2 Module
import { AngularFireModule} from "angularfire2";
import { AngularFireDatabaseModule} from "angularfire2/database";

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyCTyVsxiwx7HZKPpby5RExPMcKWPPcYXVA",
  authDomain: "fir-test-295cc.firebaseapp.com",
  databaseURL: "https://fir-test-295cc.firebaseio.com",
  projectId: "fir-test-295cc",
  storageBucket: "fir-test-295cc.appspot.com",
  messagingSenderId: "447199834477",
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
