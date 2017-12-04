import { Serializable } from '../../../base/serializable';

export class Card extends Serializable {

    constructor(
        public id?: number,
        public name?: string,
        public charaId?: number,
        public rarity?: object,
        public attribute?: string,
        public titleFlag?: number,
        public evolutionId?: number,
        public seriesId?: number,
        public pose?: number,
        public place?: number,
        public evolutionType?: number,
        public albumId?: number,
        public openStoryId?: number,
        public openDressId?: number,
        public skillId?: number,
        public leaderSkillId?: number,
        public growType?: number,
        public hpMin?: number,
        public vocalMin?: number,
        public danceMin?: number,
        public visualMin?: number,
        public hpMax?: number,
        public vocalMax?: number,
        public danceMax?: number,
        public visualMax?: number,
        public bonusHp?: number,
        public bonusVocal?: number,
        public bonusDance?: number,
        public bonusVisual?: number,
        public soloLive?: number,
        public starLessonType?: number,
        public chara?: object,
        public hasSpread?: boolean,
        public hasSign?: boolean,
        public nameOnly?: string,
        public title?: string,
        public skill?: object,
        public leadSkill?: object,
        public overallMin?: number,
        public overallMax?: number,
        public overallBonus?: number,
        public valist?: object,
        public bestStat?: number,
        public spreadImageRef?: string,
        public cardImageRef?: string,
        public spriteImageRef?: string,
        public iconImageRef?: string
    ) {
        // 親コンストラクタの呼び出し
        super();
    }

}
