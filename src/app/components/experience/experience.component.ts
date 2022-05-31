import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experience } from './experience';

const BASE_URL = environment.baseUrl;

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  loading: boolean = true;
  experiences: Experience[] = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Experience[]>(`${BASE_URL}/api/users/experiences`)
    //  .pipe(map(experiences => experiences[0]))
      .subscribe(experiences => {
        this.experiences = experiences;
        this.loading = false;
        console.log(this.experiences)
      })
  }

}
