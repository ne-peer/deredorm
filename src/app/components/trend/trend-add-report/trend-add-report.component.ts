import { Component, OnInit } from '@angular/core';

import { ReportTemplateService } from '../../../services/firebase/report-template.service';

@Component({
  selector: 'app-trend-add-report',
  templateUrl: './trend-add-report.component.html',
  styleUrls: ['./trend-add-report.component.css'],
  providers: [ ReportTemplateService ]
})
export class TrendAddReportComponent implements OnInit {

  constructor(private afTemplate: ReportTemplateService) {
    const templateId = '0';

    this.afTemplate.fetch(templateId);
  }

  ngOnInit() {
  }

  get diagnosticTemp() { return JSON.stringify(this.afTemplate.template); }
  get diagnosticEval() { return JSON.stringify(this.afTemplate.evals); }

}
