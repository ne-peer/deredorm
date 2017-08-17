export class ReportTemplate {

    constructor(
        public id: string,
        public report_name: string,
        public report_type: string,
        public create_user: string,
        public evals: any[]
    ) { }

}
