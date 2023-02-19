import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projs:proj[] = [];
  httpClient:HttpClient;
  lines:string[] = [];

  constructor(http: HttpClient) {
    this.httpClient = http;
    this.httpClient.get('assets/projects/projects.txt', {responseType: 'text'})
      .subscribe(data => {
        this.lines = data.split("!")
        for(let i = 0; i < this.lines.length; i++){
          let projTemp:proj = new proj();
          projTemp.title = this.lines[i++];
          projTemp.desc = this.lines[i++];
          projTemp.technologies = this.lines[i++].split(',');
          projTemp.presentation = this.lines[i++];
          projTemp.github = this.lines[i++];
          projTemp.github = projTemp.github.length<9? false: projTemp.github;
          projTemp.imgs = this.lines[i].split(',');
          this.projs.push(projTemp)
        }
      });
   }

  ngOnInit(): void {

  }

}

class proj{
  title: string = "";
  desc: string = "";
  technologies: string[] = [];
  presentation: string = "";
  github: any = "";
  imgs: string[] = [];
}
