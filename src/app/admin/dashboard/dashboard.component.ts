import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation: string;
  UserName: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCost: number;
  CurrentExpenditure: number;
  AvailableFunds: number;

  Clients: string[];
  Projects: string[];
  Years: number[];
  TeamMembersSummary = [];
  TeamMembers = [];

  constructor(private dashboardService: DashboardService){

  }

  ngOnInit(): void {
    this.Designation = 'Team Leader';
    this.UserName = 'John Smith';
    this.NoOfTeamMembers = 5;
    this.TotalCostOfAllProjects = 20000;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2000;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;

    this.Clients = ['ABC Info tech.', 'DEF Solutions', 'GHI Industries'];
    this.Projects = ['Project A', 'Project B', 'Project C', 'Project D'];
    this.Years = [2019, 2020, 2021, 2022];
    this.TeamMembersSummary = this.dashboardService.getTeamMemberSummary();

    this.TeamMembers = [
      {Region: 'East', Members: [{ID: 1, Name: 'Ford', Status: 'Available'}, {ID: 2, Name: 'Maben', Status: 'Available'}, {ID: 3, Name: 'Edwan', Status: 'Busy'}, {ID: 4, Name: 'Ronald', Status: 'Busy'}]},
      {Region: 'West', Members: [{ID: 1, Name: 'Ford', Status: 'Available'}, {ID: 2, Name: 'Maben', Status: 'Available'}, {ID: 3, Name: 'Edwan', Status: 'Available'}, {ID: 4, Name: 'Ronald', Status: 'Available'}]},
      {Region: 'South', Members: [{ID: 1, Name: 'Ford', Status: 'Available'}, {ID: 2, Name: 'Maben', Status: 'Available'}, {ID: 3, Name: 'Edwan', Status: 'Available'}, {ID: 4, Name: 'Ronald', Status: 'Available'}]},
      {Region: 'North', Members: [{ID: 1, Name: 'Ford', Status: 'Available'}, {ID: 2, Name: 'Maben', Status: 'Available'}, {ID: 3, Name: 'Edwan', Status: 'Available'}, {ID: 4, Name: 'Ronald', Status: 'Available'}]}
    ];
  }
  onProjecrChange($event){
    if ($event.target.innerHTML === 'Project A'){
      this.ProjectCost = 100;
    }
    else if ($event.target.innerHTML === 'Project B'){
      this.ProjectCost = 200;
    }
    else if ($event.target.innerHTML === 'Project C') {
      this.ProjectCost = 300;
    }
    else {
      this.ProjectCost = 400;
    }
  }
}
