const Character = require("./Character");

 class Warrior extends Character{
    constructor(name, lifePtn, attackPtn, defensePtn, shildPtn){
        super(name, lifePtn, attackPtn, defensePtn)
        this.shildPtn = shildPtn
        this.stance = 'attacking'
    }

    attack(targetCharacter){
        if(this.stance === 'attacking'){
            super.attack(targetCharacter)
        }
    }

    switchStance(){
        if(this.stance === 'attacking'){
            this.stance = 'defending'
            this.defensePtn += this.shildPtn
        }else{
            this.stance = 'attacking'
            this.defensePtn -= this.shildPtn
        }
    }
}

module.exports = Warrior