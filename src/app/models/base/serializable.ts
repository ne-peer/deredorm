export class Serializable {

    /**
     * @see https://github.com/sindresorhus/camelcase
     */
    protected camelizer;

    constructor() {
        this.camelizer = require('camelcase');
    };

    /**
     * classにjsonデータを注入します
     *
     * @param string  json
     * @param boolean isCamelizeProp
     */
    public fillFromJSON(jsonObj, isCamelizeProp?: boolean) {
        for (let propName in jsonObj) {
            /* tslint:disable */
            const rawPropName = propName;

            // キーをキャメルケースに変換
            if (isCamelizeProp === true) {
                propName = this.camelizer(propName);
            }

            // プロパティの存在確認
            if (this.hasOwnProperty(propName) === false) {
                continue;
            }

            this[propName] = jsonObj[rawPropName];
        }
    }

}
