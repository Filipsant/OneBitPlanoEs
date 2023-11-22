import  Spaceship  from "./export"
import * as _ from "lodash"

interface BattleSpaceship extends Spaceship{
    weapons: number
}

let xwing: BattleSpaceship ={
    name: 'X-wing',
    pilot:'luke',
    speed:50,
    weapons: 4,
}

_.camelCase(xwing.pilot)