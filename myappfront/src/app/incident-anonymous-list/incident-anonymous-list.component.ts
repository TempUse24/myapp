import { Component, OnInit } from '@angular/core';
import { IncidentReportAnonymousService } from '../incident-report-anonymous.service';
import { IncidentReportAnonymous } from '../models/incident-report-anonymous.model';

@Component({
  selector: 'app-incident-anonymous-list',
  templateUrl: './incident-anonymous-list.component.html',
  styleUrls: ['./incident-anonymous-list.component.css'],
})
export class IncidentAnonymousListComponent implements OnInit {
  incidentReports: IncidentReportAnonymous[] = [];
  selectedReportId: number | null = null;
  statusUpdate: string = '';
  messageUpdate: string = '';
  updateSuccess: string = '';

  constructor(private incidentService: IncidentReportAnonymousService) {}

  ngOnInit(): void {
    this.loadAllReports();
  }

  loadAllReports(): void {
    this.incidentService.getAllReports().subscribe(
      (reports) => {
        this.incidentReports = reports;
      },
      (error) => {
        console.error('Error fetching reports', error);
      }
    );
  }

  selectReport(id: number): void {
    this.selectedReportId = id;
    this.statusUpdate = '';
    this.messageUpdate = '';
    this.updateSuccess = '';
  }

  updateStatus(): void {
    if (this.selectedReportId !== null && this.statusUpdate) {
      this.incidentService
        .patchStatus(this.selectedReportId, this.statusUpdate)
        .subscribe(
          (response) => {
            this.updateSuccess = 'Status updated successfully!';
            this.loadAllReports();
          },
          (error) => {
            console.error('Error updating status', error);
          }
        );
    }
  }

  updateMessage(): void {
    if (this.selectedReportId !== null && this.messageUpdate) {
      this.incidentService
        .patchMessage(this.selectedReportId, this.messageUpdate)
        .subscribe(
          (response) => {
            this.updateSuccess = 'Message updated successfully!';
            this.loadAllReports();
          },
          (error) => {
            console.error('Error updating message', error);
          }
        );
    }
  }
}
