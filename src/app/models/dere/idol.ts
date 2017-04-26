export class Idol {

    constructor(
        // 名前
        public name: string,
        // ふりがな
        public kana: string,
        // 属性
        public type: string,
        // モデル名
        public models: string[],
        // 所属ユニット
        public units: string[],
    ) { }

}