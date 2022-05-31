import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from './user';
const BASE_URL = environment.baseUrl;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  loading: boolean = true;
  user!: Users;
  sub!: Subscription;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
   this.sub = this.httpClient.get<Users[]>(`${BASE_URL}/api/users`)
   .pipe(
     map(users => users[0])
     )
   .subscribe(user =>{
     this.loading = false;
    this.user = user;
   } );
  }

  ngOnDestroy(): void {
      this.sub && this.sub.unsubscribe();
  }

}
