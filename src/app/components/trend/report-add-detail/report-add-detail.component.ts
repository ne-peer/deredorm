import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Promise } from 'firebase';

import { ReportTemplateService } from '../../../services/firebase/report-template.service';
import { Report } from '../../../models/trend/report';
import { ReportTemplate } from '../../../models/trend/report-template';
import { ReportTemplateEval } from '../../../models/trend/report-template-eval';

@Component({
  selector: 'app-report-add-detail',
  templateUrl: './report-add-detail.component.html',
  styleUrls: ['./report-add-detail.component.css'],
  providers: [ReportTemplateService]
})
export class ReportAddDetailComponent implements OnInit {

  afReport: FirebaseObjectObservable<Report>;
  report = new Report('', '', '', []);
  templateId: string;
  submitted = false
  template: ReportTemplate;
  evals: ReportTemplateEval[];
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  constructor(private activatedRoute: ActivatedRoute, private templateRepos: ReportTemplateService, private db: AngularFireDatabase) {
    this.activatedRoute.params.subscribe((params: Params) => {
      const hash: string = params['hash'];

      // レポート読み込み
      this.afReport = this.db.object(`/user/report/${hash}`);
      this.afReport.subscribe(report => this.report = report);
      this.templateId = this.report.templateId;

      // テンプレート読み込み
      this.templateRepos.fetch(this.templateId);
      this.template = this.templateRepos.template;
      this.evals = this.templateRepos.evals;
    });
  }

  ngOnInit() {
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
