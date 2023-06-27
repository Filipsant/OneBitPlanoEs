module.exports = class Character {
    constructor(name, lifePtn, attackPtn,defensePtn ){
        this.name = name
        this.lifePtn = lifePtn
        this.attackPtn = attackPtn
        this.defensePtn = defensePtn
    }

    attack(targetCharacter){
      targetCharacter.lifePtn -= this.attackPtn - targetCharacter.defensePtn
    }
}





