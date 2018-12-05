import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  article =
    {
      id: 1,
      title: 'Java Example',
      category: 'Pragramming'
    };

  articles = [
    {
      id: 1,
      title: 'Java Example',
      category: 'Pragramming'
    }, {
      id: 2,
      title: 'Nodejs For Beginner',
      category: 'Pragramming'
    },
  ];
}
