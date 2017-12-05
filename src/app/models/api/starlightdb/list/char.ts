import { Serializable } from '../../../base/serializable';

export class Char extends Serializable {

    constructor(
        public charaId?: number,
        public conventional?: string,
        public kanjiSpaced?: string,
        public kanaSpaced?: string,
        public cards?: number[],
        public ref?: string
    ) {
        // 親コンストラクタの呼び出し
        super();
    }

}
