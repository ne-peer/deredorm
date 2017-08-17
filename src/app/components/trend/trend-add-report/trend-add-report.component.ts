import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Promise } from 'firebase';

import { ReportTemplateService } from '../../../services/firebase/report-template.service';
import { Report } from '../../../models/trend/report';
import { ReportTemplate } from '../../../models/trend/report-template';
import { ReportTemplateEval } from '../../../models/trend/report-template-eval';

@Component({
  selector: 'app-trend-add-report',
  templateUrl: './trend-add-report.component.html',
  styleUrls: ['./trend-add-report.component.css'],
  providers: [ReportTemplateService]
})
export class TrendAddReportComponent implements OnInit {

  afReports: FirebaseListObservable<Report[]>;
  report = new Report('', '', '', []);
  templateId: string;
  submitted = false
  template: ReportTemplate;
  evals: ReportTemplateEval[];
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private templateRepos: ReportTemplateService, private db: AngularFireDatabase) {
    // テンプレート読み込み
    this.templateId = '100';
    this.templateRepos.fetch(this.templateId);
    this.template = this.templateRepos.template;
    this.evals = this.templateRepos.evals;

    // レポートリポジトリの同期
    this.afReports = this.db.list('/user/report');
  }

  ngOnInit() {
  }

  add(): Promise<void> {
    const wip = '0';

    return this.afReports.update(
      '0',
      {
        id: wip,
        hash: wip,
        templateId: this.templateId,
        detail: []
      });
  }

  onSubmit() {
    this.submitted = true;
  }

  doShow() {
    return JSON.stringify(this.templateRepos.template) !== '{"$value":null}';
  }

  get diagnostic() { return JSON.stringify(this.report); }
  get diagnosticTemp() { return JSON.stringify(this.template); }
  get diagnosticEval() { return JSON.stringify(this.evals); }

}
