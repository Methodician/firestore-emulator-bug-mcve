import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import * as fb from 'firebase/app';
import 'firebase/firestore';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(){
    this.initFb();
  }

  initFb = () => {
    const fbConfig = {
      apiKey: "AIzaSyCbod9L6I0nlTrGE7toyNAALXIyQV1Nu2Y",
      authDomain: "emulator-bug-mcve.firebaseapp.com",
      databaseURL: "https://emulator-bug-mcve.firebaseio.com",
      projectId: "emulator-bug-mcve",
      storageBucket: "emulator-bug-mcve.appspot.com",
      messagingSenderId: "899183225404",
      appId: "1:899183225404:web:e32da9dde404e1ba29f139"
    }
  
    fb.initializeApp(fbConfig);
  }
}

