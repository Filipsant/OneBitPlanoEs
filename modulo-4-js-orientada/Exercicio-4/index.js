const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");



const arthur = new Mage('Arthur', 90, 4, 2, 14)
const batrice = new Thief ('batrice', 140, 22, 9)
const cain = new Warrior ('cain', 200, 13, 12, 5)

console.table({arthur, batrice, cain})

cain.switchStance()
arthur.attack(cain)
batrice.attack(arthur)
arthur.heal(arthur)

console.table({arthur, batrice, cain})