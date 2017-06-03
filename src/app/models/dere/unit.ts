export class Unit {

    constructor(
        // 識別子
        public id: string,
        // 名前
        public name: string,
        // ふりがな
        public kana: string,
        // チームリーダ
        public tl: string,
        // メンバ
        public members: string,
        // 代表曲
        public songs: string,
        // 属性
        public type: string,
    ) { }

}