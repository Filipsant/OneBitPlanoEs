const Character = require("./Character")

class Mage extends Character{
    constructor(name, lifePtn, attackPtn,defensePtn,magic ){
        super(name, lifePtn ,attackPtn, defensePtn)
        this.magic = magic
    }
    attack(targetCharacter){
        targetCharacter.lifePtn -= (this.attackPtn +this.magic) - targetCharacter.defensePtn
    }

    heal(targetCharacter){
        targetCharacter.lifePtn += this.magic * 2
    }
} 

module.exports = Mage