function sendSpaceship(spaceship:{pilot: string, copilot?: string}){
    //...
}
sendSpaceship({pilot:"Han solo", copilot:"Chubaca"})

sendSpaceship({pilot:'Luke'})

// tipo unknown
let input: unknown

input = 'test'
input = 20
input = []

let text: string

// tipo Any
let imput: any

text = imput

//tipo never

function verification(test) {
    if (test) {
        
    } else {
        let _check : never
        let text = _check
        return _check
    }
}