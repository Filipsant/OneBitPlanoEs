function sendSpaceship(name:string, capitain:string){
    const spaceship = {
        name,
        capitain,
        speed:20,
        inMission: true,
        crew: []
    }

    alert(`A nave ${spaceship.name}comandada pelo capitão${spaceship.capitain} foi enviada em uma missão`)

    return spaceship
}

function accelerate(targetSpeed:number, spaceship:{name:string, speed:number}){
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}...`)
    } else if(spaceship.speed < targetSpeed) {
        alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}...`)
    }else{
        alert(`Mantendo a velocidade da ${spaceship.name}`)
    }
}

const spaceshipName = prompt('insira o nome da nave a ser enviada ')

const spaceshipCapitain = prompt('insira o nome do capitão ')

const currentShip = sendSpaceship(spaceshipName, spaceshipCapitain)

const speed = Number(prompt('insira a velocidade para qual dejesa acelerar. '))

accelerate(speed, currentShip)
