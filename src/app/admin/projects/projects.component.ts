import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { Projects } from 'src/app/projects';
import { error } from 'protractor';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Projects[];
  newProject: Projects = new Projects() ;
  EditProject: Projects = new  Projects();
  editIndex: number = null;
  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(
      (response: Projects[]) => {

        // Adding In the Table
        this.projects = response;
        // Clearing the Modal
        this.newProject.projectID = 0;
        this.newProject.projectName = null;
        this.newProject.dateOfStart = null;
        this.newProject.teamSize = 0;
      }
    );
  }
  onCreateClick(){
    this.projectService.insertProject(this.newProject).subscribe((response) => {
      this.projects.push(this.newProject);
    });
  }

  onEditClick(event, index: number){
    this.EditProject.projectID = this.projects[index].projectID;
    this.EditProject.projectName = this.projects[index].projectName;
    this.EditProject.dateOfStart = this.projects[index].dateOfStart;
    this.EditProject.teamSize = this.projects[index].teamSize;
    this.editIndex = index;
  }

  onUpdateClick(){
    this.projectService.updateProject(this.EditProject).subscribe((Response: Projects) => {
       const p: Projects = new Projects();
       p.projectID = Response.projectID;
       p.projectName = Response.projectName;
       p.dateOfStart = Response.dateOfStart;
       p.teamSize = Response.teamSize;
       this.projects[this.editIndex] = p;
      // Clearing the Modal
       this.EditProject.projectID = 0;
       this.EditProject.projectName = null;
       this.EditProject.dateOfStart = null;
       this.EditProject.teamSize = 0;


    });
  }
}
