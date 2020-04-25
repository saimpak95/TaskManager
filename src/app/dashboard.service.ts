import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  getTeamMemberSummary(){
      const TeamMemberSummary = [
      {Region: 'East', TeamMembersCount: 10, TemporaryUnavailableMemeber: 2},
      {Region: 'West', TeamMembersCount: 20, TemporaryUnavailableMemeber: 5},
      {Region: 'South', TeamMembersCount: 15, TemporaryUnavailableMemeber: 4},
      {Region: 'North', TeamMembersCount: 17, TemporaryUnavailableMemeber: 4}
    ];
      return TeamMemberSummary;
  }
}
