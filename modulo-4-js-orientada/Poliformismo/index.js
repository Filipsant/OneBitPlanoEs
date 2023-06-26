class Vehicle {
    move(){
        console.log("o veiculo esta se movendo.")
    }
}

class Car extends Vehicle {
    move(){
    console.log("o carro esta se movendo")
    }
}

class Ship extends Vehicle {
    move(){
        console.log("o navio esta se movendo")
    }
}

class Airchraft extends Vehicle {
    move(speed){
        console.log(`A aeronave esta voando ${speed} km/h`)
    }
}

const delorean = new Car()
const blackPearl = new Ship()
const epoch = new Airchraft()

delorean.move()
blackPearl.move()
epoch.move(80)

function start(vehicle){
    console.log("iniciando um veiculo...")
    vehicle.move()
}

start(delorean)
start(blackPearl)
start(epoch)