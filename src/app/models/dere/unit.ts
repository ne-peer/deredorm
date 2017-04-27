export class Unit {

    constructor(
        // 名前
        public name: string,
        // ふりがな
        public kana: string,
        // チームリーダ
        public tl: string,
        // メンバ
        public member: string[],
        // 代表曲
        public songs: string[],
        // 属性
        public type: string,
    ) { }

}