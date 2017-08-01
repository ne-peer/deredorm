import { Serializable } from '../../base/serializable';

export class Profile extends Serializable {

    constructor(
        public generation   = '',
        public age          = '',
        public height       = '',
        public weight       = '',
        public bust         = '',
        public waist        = '',
        public hip          = '',
        public bloodType    = '',
        public dominantHand = '',
        public hometown     = '',
        public hobby        = '',
        public specialty    = '',
        public favorite     = '',
        public memo         = '',
        public lastUpdate   = ''
    ) {
        // 親コンストラクタの呼び出し
        super();
    };

}
