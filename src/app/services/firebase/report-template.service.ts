import { Injectable, Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Promise } from 'firebase';

import { ReportTemplate } from '../../models/trend/report-template';
import { ReportTemplateEval } from '../../models/trend/report-template-eval';

/**
 * Firebase Repository
 *
 * `/deredorm/core/report_template` からデータを取得するリポジトリサービス
 */
@Injectable()
export class ReportTemplateService {

  template: ReportTemplate;
  evals: ReportTemplateEval[];

  constructor(private db: AngularFireDatabase) { }

  fetch(templateId: string): void {
    const afTemplate = this.db.object(`/core/report_template/${templateId}`);
    afTemplate.subscribe(tp => this.template = tp);

    const afEval = this.db.list(`/core/report_template/${templateId}/evals`);
    afEval.subscribe(evals => this.evals = evals);
  }

}
