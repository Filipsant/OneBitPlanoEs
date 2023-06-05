const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)
console.log(...towns[0])

const towsCopy = towns

towsCopy.pop()
towsCopy.pop()
towsCopy.push('juno')

console.log({towns, towsCopy})


const townsClone = [...towns]

townsClone.push('Aldebaran')

console.log({towns, towsCopy, townsClone})

const townsObj = {...towns}
const townsObjClone = {...townsObj}
townsObjClone.test =  'test'
console.log({townsObj, townsObjClone})