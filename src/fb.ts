import * as fb from 'firebase/app';
import 'firebase/firestore';



export const initFb = () => {
    const fbConfig = {
      apiKey: "AIzaSyCbod9L6I0nlTrGE7toyNAALXIyQV1Nu2Y",
      authDomain: "emulator-bug-mcve.firebaseapp.com",
      databaseURL: "https://emulator-bug-mcve.firebaseio.com",
      projectId: "emulator-bug-mcve",
      storageBucket: "emulator-bug-mcve.appspot.com",
      messagingSenderId: "899183225404",
      appId: "1:899183225404:web:e32da9dde404e1ba29f139"
    }
  
    console.log('initializing app')
    return fb.initializeApp(fbConfig);

  }

  let _db: fb.firestore.Firestore;

  export const getDb = () => {

      if(!!_db){
        console.log('providing existing db');
        return _db
      };
       
      console.log('creating new db');
      const db = fb.firestore();
      if(location.hostname === 'localhost') db.settings({host: 'localhost:8080', ssl: false})
      _db = db;
      return _db;
  }

