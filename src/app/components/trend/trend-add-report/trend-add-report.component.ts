import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Promise } from 'firebase';

import { Report } from '../../../models/trend/report';
import { ReportTemplate } from '../../../models/trend/report-template';

@Component({
  selector: 'app-trend-add-report',
  templateUrl: './trend-add-report.component.html',
  styleUrls: ['./trend-add-report.component.css'],
})
export class TrendAddReportComponent implements OnInit {

  afReports: FirebaseListObservable<Report[]>;
  afTemplates: FirebaseListObservable<ReportTemplate[]>;

  report = new Report('', '', '', []);
  templateList: ReportTemplate[];
  submitted = false
  hash: string;

  constructor(private db: AngularFireDatabase) {
    // レポートリポジトリの同期
    this.afReports = this.db.list('/user/report');
    this.afTemplates = this.db.list('/core/report_template');
    this.afTemplates.subscribe(template => this.templateList = template);
  }

  ngOnInit() {
    const hash = this.generateHash();

    this.afReports.update(
      hash,
      {
        id: '0',
        hash: hash,
        templateId: this.report.templateId,
        detail: []
      });

    this.hash = hash;
  }

  update(): void {
    this.afReports.update(
      this.hash,
      {
        id: '0',
        hash: this.hash,
        templateId: this.report.templateId,
        detail: []
      });
  }

  onSubmit() {
    this.submitted = true;
  }

  generateHash(): string {
    // wip
    return 'a1b2c3d4';
  }

  get diagnostic() { return JSON.stringify(this.report); }

}
