import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { Projects } from 'src/app/projects';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Projects[];
  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(
      (response: Projects[]) => {
        this.projects = response;
      }, error => {
        console.log(error);
        console.log('fuck');
      }
    );
  }

}
