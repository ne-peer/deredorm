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

}
