import { Serializable } from '../../base/serializable';

export class Character extends Serializable {

    constructor(
        public id              = '',
        public name            = '',
        public nameRuby        = '',
        public familyName      = '',
        public firstName       = '',
        public familyNameRuby  = '',
        public firstNameRuby   = '',
        public isForeignerName = '',
        public birthMonth      = '',
        public birthDay        = '',
        public gender          = '',
        public isIdol          = '',
        public characterType   = '',
        public arrivalDate     = '',
        public originMedia     = '',
        public cv              = '',
        public className       = ''
    ) {
        // 親コンストラクタの呼び出し
        super();
    }

}
