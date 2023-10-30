//Onion e Aliance

type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"

let planet: Planet



let homePlanet : Planet

function checkPlanet(planet: Planet){
    if (planet === "Terra") {
        console.log("estamos na terra")
    }
}

type GreetingCallback= (name: string) => void

function greet (callbackfn: GreetingCallback){
  let name = "Filipe"

  callbackfn(name)
}


