const spaceships = []

function addSpaceship(name: string, pilot:string, crewLimit: number){
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    }

spaceships.push(spaceship)

alert(`A nave ${spaceship.name} foi registrada`)
}

function findSpaceship(name: string,){
    let spaceship:{
        name: string,
        pilot: string,
        crewLimit: number,
        crew: string[],
        inMission: boolean
    }

    spaceship = spaceships.find(ship => ship.name === name)

    return spaceship
}

function addCrewMember(member: string, spaceship:{name:string, crewLimit: number, crew:string[]}){
    if(spaceship.crew.length >= spaceship.crewLimit){
        alert(`${member} não pode ser adicionado.Limite atingido`)
    }else{
        spaceship.crew.push(member)

        alert(`${member} foi adicionado a tripulaçaõ da ${spaceship.name}`)
    }
}

function sendInMission(spaceship:{ name:string, crewLimit:number, crew: string[], inMission:boolean}){
    if(spaceship.inMission){
        alert(`${spaceship.name} não pode ser enviada. Nave já em missão`)
    }else if (spaceship.crew.length < Math.floor(spaceship.crewLimit/ 3)){
        alert(`${spaceship.name} não pode ser enviada.Tripulaçaõ insuficiente.`)
    }else{
        spaceship.inMission = true

        alert(`${spaceship.name} foi enviada para a missão`)
    }
}

function firstMenuOption(){
    const name = prompt('Qual é o nome da nave a ser registrada?')
    const pilot = prompt(`Qual é o nome do piloto da ${name}`)

    const crewLimit = Number.parseFloat(prompt(`Quantos tripulantes a ${name} suporta? `))

    const confirmation = confirm(`Confirma o registro da nave ${name}?\nPiloto: ${pilot}\n Tamanho da Tripulação: ${crewLimit}`)

        if(confirmation){
            addSpaceship(name,pilot, crewLimit)
        }
}

function secondMenuOption(){
    const member  = prompt('Qual é o nome do tripulante?')
    const spaceshipName = prompt(`Para qual nave ${member} deverá ser designado?`)

    const spaceship = findSpaceship(spaceshipName)

    if(spaceship){
        const confirmation = confirm(`Confirma a inclusão de ${member} na tripulação da ${spaceship.name}?`)

        if(confirmation){
            addCrewMember(member, spaceship)
        }
    }

    
}

function thirdMenuOption(){
    const spaceshipName = prompt('Qual é o nome da nave a ser enviada?')

    const spaceship = findSpaceship(spaceshipName)

    if(spaceship){
        const confirmation = confirm(`Confirme o envio da ${spaceship.name} na missão!`)

        if(confirmation){
            sendInMission(spaceship)
        }
    }
}

function fourthMenuOption(){
    let list = 'Naves Registradas:\n'

    spaceships.forEach((spaceship:{
        name: string,
        pilot: string,
        crewLimit: number,
        crew: string[],
        inMission: boolean
    }) => {
        list +=`
        Nave: ${spaceship.name}
        Piloto: ${spaceship.pilot}
        Em missão? ${spaceship.inMission ? 'sim' : 'não'}
        Tamanho Máximo da Tripulação ${spaceship.crewLimit}
        Tripulantes: ${spaceship.crew.length}  `

        spaceship.crew.forEach(member =>{
            list+= `   - ${member}\n   `
        })


    })

    alert(list)
}

//Menu//

let userOption = 0

while (userOption !==5) {
    const menu = `Painel Principal
    1- Registar uma nova nave
    2- Adicionar membro da tripulação
    3- Enviar nave em missão
    4-Listar naves resgistradas
    5-Encerrar
    `

    userOption = Number.parseInt(prompt(menu))

    switch (userOption){
        case 1:
            firstMenuOption()
            break
        case 2 :
            secondMenuOption()
            break
        case 3 :
            thirdMenuOption()
            break
        case 4 :
            fourthMenuOption() 
            break
        case 5:
            alert('Encerrando o sistema...')
            break
        default:
            alert('Opção invalida! Retornar ao painel principal...')
            break
    }
}