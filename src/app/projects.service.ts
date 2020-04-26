import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projects } from './projects';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

getAllProjects(): Observable<Projects[]>{
 return this.httpClient.get<Projects[]>('http://localhost:59912/api/Project', {responseType: 'json'});
}

insertProject(newProject: Projects): Observable<Projects>{
  return this.httpClient.post<Projects>('http://localhost:59912/api/Project', newProject, {responseType: 'json'});
}

updateProject(existingProject: Projects): Observable<Projects>{
  return this.httpClient.put<Projects>('http://localhost:59912/api/Project', existingProject, {responseType: 'json'});
}

DeleteProject(ProjectID: number): Observable<string>{
  return this.httpClient.delete<string>('http://localhost:59912/api/Project?ProjectID=' + ProjectID);
}


SearchProject(SearchBy: string, SearchText: string): Observable<Projects[]>{
 return this.httpClient.get<Projects[]>('http://localhost:59912/api/Project/Search/' + SearchBy + '/' + SearchText, {responseType: 'json'});
}
}
