import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  article =
    {
      title: '',
      category: ''
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

  add(article) {
    const maxId = Math.max(...this.articles.map(obj => obj.id), 0);
    const newArticle = Object.assign({}, article, { id: maxId + 1 });
    this.articles.push(newArticle);
    this.article = {
      title: '',
      category: ''
    };
  }

  delele(id) {
    this.articles.map((obj, index) => {
      if (obj.id === id) {
        this.articles.splice(index, 1);
      }
    });
  }
}
