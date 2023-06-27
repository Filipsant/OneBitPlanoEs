class Reservation {
    constructor(guests, room, day){
        this.guests = guests
        this.room = room
        this.day = day
        this.total = day * Reservation.baseFee 

    }

    static baseFee = 150

    static showBaseFee(){
        console.log(`Base fee is ${Reservation.baseFee}`)
    }

    static get premiumFee(){
        return Reservation.baseFee * 1.5
    }
}

Reservation.showBaseFee()

const r1 = new Reservation(3, "201", 5)
console.log(r1)

Reservation.baseFee = 200

const r2 = new Reservation(2, "104", 2)
console.log(r2)

console.log(`Premium fee is $${Reservation.premiumFee}`)