const Character = require("./Character");

class Thief extends Character{
    attack(targetCharacter){
        targetCharacter.lifePtn -= (this.attackPtn - targetCharacter.defensePtn) * 2
    }
}

module.exports = Thief