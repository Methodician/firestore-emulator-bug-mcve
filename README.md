# EmulatorBugMcve

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## Development server

Open two terminals.
Run `firebase emulators:start` in one terminal. Navigate to `http://localhost:4000/`. The Emulator Suite will display (most of) your Firestore data.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Seeing the bug

Open your browser to localhost:4200 and open developer tools console.
Click each of the buttons at least once. You may need to reload the Emulator suite to see any data.

Notice, console logs show that data exists in all three collections. However, the Emulator Suite does not display the data in the "invisible collection".
From what I have seen, this problem does not appear in the Firebase console for a project in the serverless cloud.
