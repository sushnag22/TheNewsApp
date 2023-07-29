import { Component, Input, OnInit } from '@angular/core';
import { ArticleEntity } from 'src/app/interfaces/news-response';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-cards.component.html',
  styleUrls: ['./news-cards.component.scss'],
})
export class NewsCardComponent implements OnInit {
  @Input() news: ArticleEntity = {} as ArticleEntity; 
  constructor() {}

  ngOnInit() {}
}