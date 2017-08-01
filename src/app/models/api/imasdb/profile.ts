import { Serializable } from '../../base/serializable';

export class Profile extends Serializable {

    constructor(
        public generation?: string,
        public age?: string,
        public height?: string,
        public weight?: string,
        public bust?: string,
        public waist?: string,
        public hip?: string,
        public bloodType?: string,
        public dominantHand?: string,
        public hometown?: string,
        public hobby?: string,
        public specialty?: string,
        public favorite?: string,
        public memo?: string,
        public lastUpdate?: string
    ) {
        // 親コンストラクタの呼び出し
        super();
    };

}
