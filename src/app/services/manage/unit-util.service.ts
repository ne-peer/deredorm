import { Injectable } from '@angular/core';

import { Unit } from '../../models/dere/unit';

@Injectable()
export class UnitUtilService {

  constructor() { }

  /**
   * Unit配列からunit.idに紐づく名称を取得
   * 
   * @param Unit[]
   * @param string
   * @return string
   */
  getUnitName(units: Unit[], unitId: string) {
    let matchedUnit = null;
    if (units instanceof Array === false || units.length < 1) {
      return '';
    }

    for (let unit of units) {
      if (unit.id === unitId) {
        matchedUnit = unit;
        break;
      }
    }

    if (matchedUnit === null) {
      return '';
    }

    return matchedUnit.name;
  }

}
