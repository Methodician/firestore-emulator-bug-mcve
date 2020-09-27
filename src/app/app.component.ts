import { Component } from '@angular/core';

import { initFb ,getDb} from '../fb';

initFb();
const db = getDb();


@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <span style="display: block">{{ title }} app is running!</span>
      <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
    <h2>Here are some links to help you start: </h2>
    <ul>
      <li>
        <h2><button (click)="addVisibleDoc()">add visible doc</button></h2>
      </li>
      <li>
        <h2><button (click)="addInvisibleDoc()">add invisible doc</button></h2>
      </li>
      <li>
        <h2><button (click)="addVisibleSubDoc()">add visible nested doc</button></h2>
      </li>
      <li>
        <h2><button (click)="setDocToMakeNestVisible()">make nested doc visible</button></h2>
      </li>
    </ul>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'emulator-bug-mcve';
  

  visibleInEmulatorCol = db.collection('visibleCol');
  invisibleInEmulatorCol = db.collection('invisibleCol').doc('emptyDoc').collection('invisibleSubCol');

  makeVisibleNestedDoc = db.collection('visibleNestedCol').doc('notEmptyDoc');
  visibleNestedInEmulatorCol = this.makeVisibleNestedDoc.collection('visibleNestedSub');
  
  ngOnInit() {

    this.visibleInEmulatorCol.onSnapshot(snap => {
      const data = snap.docs.map(doc => doc.data());
      console.log('Visible data', data);
    })

    this.invisibleInEmulatorCol.onSnapshot(snap => {
      const data = snap.docs.map(doc => doc.data());
      console.log('Invisible data', data);
    })
    
    this.visibleNestedInEmulatorCol.onSnapshot(snap => {
      const data = snap.docs.map(doc => doc.data());
      console.log('Visible nested data', data);
    })
  }

  addVisibleDoc = () => this.visibleInEmulatorCol.add({a: 'thing'});

  addInvisibleDoc = () => this.invisibleInEmulatorCol.add({a: 'thing'});

  setDocToMakeNestVisible = () => this.makeVisibleNestedDoc.set({a: 'thing'});

  addVisibleSubDoc = () => this.visibleNestedInEmulatorCol.add({a: 'thing'});
}
