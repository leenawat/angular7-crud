import { ArticleService } from './article.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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
  constructor(private articleService: ArticleService) {
  }
  ngOnInit() {
    console.log('ng on init');
    this.getAllArticles();
  }
  add(article) {
    const maxId = Math.max(...this.articles.map(obj => obj.id), 0);
    const newArticle = Object.assign({}, article, { id: maxId + 1 });
    this.article = {
      title: '',
      category: ''
    };
    this.createArticle(newArticle);
  }

  delele(id) {
    this.articleService.deleteHero(id)
    .subscribe(res => {
      this.getAllArticles();
    });
  }

  createArticle(article) {
    this.articleService.createArticle(article)
      .subscribe(res => {
        this.getAllArticles();
      });
  }

  getAllArticles() {
    this.articleService.getAllArticles().subscribe(articles => this.articles = articles);
  }
}
