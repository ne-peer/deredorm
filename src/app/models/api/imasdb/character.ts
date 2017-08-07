import { Serializable } from '../../base/serializable';

export class Character extends Serializable {

    constructor(
        public id?: string,
        public name?: string,
        public nameRuby?: string,
        public familyName?: string,
        public firstName?: string,
        public familyNameRuby?: string,
        public firstNameRuby?: string,
        public isForeignerName?: string,
        public birthMonth?: string,
        public birthDay?: string,
        public gender?: string,
        public isIdol?: string,
        public characterType?: string,
        public arrivalDate?: string,
        public originMedia?: string,
        public cv?: string,
        public className?: string
    ) {
        // 親コンストラクタの呼び出し
        super();
    }

    public getClassExtraInfo() {
        const resolver = v => {
            const extra = {
                dispName: '',
                bgcolor: '#fff',
                color: '#000'
            };

            switch (v) {
                case 'cool':
                    extra.dispName = 'クール';
                    extra.bgcolor = '#E8EAF6';
                    extra.color = '#E91E63';
                    break;
                case 'cute':
                    extra.dispName = 'キュート';
                    extra.bgcolor = '#FCE4EC';
                    extra.color = '#3F51B5';
                    break;
                case 'passion':
                    extra.dispName = 'パッション';
                    extra.bgcolor = '#FFF3E0';
                    extra.color = '#FF9800';
                    break;
                default:
                    break;
            }

            return extra;
        }

        return resolver(this.className);
    }

}
