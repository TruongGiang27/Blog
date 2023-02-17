import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/models/new.models';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  news$: Observable<News> = this.newsService.get();


  constructor(public newsService: NewsService){}
}
