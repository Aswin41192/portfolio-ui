import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skills } from './model/skills';

const baseUrl = environment.baseUrl;
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit,OnDestroy {

  sub!: Subscription;
  skills: Array<Skills> = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
   this.sub = this.httpClient.get<Array<Skills>>(`${baseUrl}/api/skills`)
      .pipe(map(
        skills => skills.map(skill =>{ skill.logoPath = baseUrl+"/"+skill.logoPath; return skill; })))
      .subscribe(skills => this.skills = skills);
  }

  ngOnDestroy(): void {
      if(this.sub) this.sub.unsubscribe();
  }

}
