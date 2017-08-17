export class ReportTemplate {

    constructor(
        public id: string,
        public reportName: string,
        public reportType: string,
        public createUser: string,
        public evals: any[]
    ) { }

}
