const planets = [];
function addPlanet(name, coordinates, situation) {
    planets.push({
        name,
        coordinates,
        situation,
        satellites: []
    });
    alert(`O Planeta ${name} foi salvo com sucesso.`);
}
function findPlanet(name) {
    const planet = planets.find(planet => planet.name === name);
    return planet ?? false;
}
function updateSituation(situation, planet) {
    planet.situation = situation;
    alert(`A situação do planeta ${planet.name} foi atualizada com sucesso!`);
}
function addSatellite(name, planet) {
    planet.satellites.push(name);
    alert(`O satelite ${name} foi adicionado ao planeta ${planet.name}.`);
}
function removeSatellite(name, planet) {
    planet.satellites = planet.satellites.filter(satellite => satellite !== name);
    alert(`O satelite ${name} foi removido do planeta ${planet.name}`);
}
function promptValidSituation() {
    let situation;
    let validSituation = false;
    while (!validSituation) {
        const situationInput = prompt('Informe a situação do planeta?');
        switch (situationInput) {
            case '1':
                situation = 'Habitado';
                validSituation = true;
                break;
            case '2':
                situation = 'Habitavel';
                validSituation = true;
                break;
            case '3':
                situation = 'Inabitavel';
                validSituation = true;
                break;
            case '4':
                situation =
                    'Inexplorado';
                validSituation = true;
            default:
                alert('Situação Invalida!');
                break;
        }
    }
    return situation;
}
function promptValidPlanet(callback) {
    const planetName = prompt('Informe o nome do planeta:');
    const planet = findPlanet(planetName);
    if (planet) {
        callback(planet);
    }
    else {
        alert('Planeta não encontrado! Retornar ao menu principal....');
    }
}
//Opiçoes do menu
function firstMenuOption() {
    const name = prompt('Informe o nome do planeta');
    const coordinateA = Number(prompt('Informe a primeira coordenada: '));
    const coordinateB = Number('Informe a segunda coordenada:');
    const coordinateC = Number('Informe a terceira coordenada:');
    const coordinateD = Number('Informe a quarta coordenada');
    const situation = promptValidSituation();
    const confirmation = confirm(`Confirme o registro do planeta ${name}?\n
    Coordenadas:(${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD})\n
    Situação : ${situation}
    `);
    if (confirmation) {
        addPlanet(name, [coordinateA, coordinateB, coordinateC, coordinateD], situation);
    }
}
function secondMenuOption() {
    promptValidPlanet(planet => {
        const situation = promptValidSituation();
        updateSituation(situation, planet);
    });
}
function thirdMenuOption() {
    promptValidPlanet(planet => {
        const satellite = prompt('Informe o nome do satelite:');
        addSatellite(satellite, planet);
    });
}
function fourthMenuOption() {
    promptValidPlanet(planet => {
        const satellite = prompt('Informe o nome do satelite que deseja remover:');
        removeSatellite(satellite, planet);
    });
}
function fiftMenuOption() {
    let list = 'Planetas\n';
    planets.forEach(planet => {
        const [a, b, c, d] = planet.coordinates;
        list += `
        Nome: ${planet.name}
        Coordenadas:(${a}, ${b}, ${c}, ${d})
        Situaçao: ${planet.situation}
        Satélites:${planet.satellites.length}
        `;
        planet.satellites.forEach(satellite => {
            list += `    - ${satellite}\n`;
        });
    });
    alert(list);
}
let userOption = 0;
while (userOption !== 6) {
    const menu = ` Menu
    1-Registrar um novo planeta
    2-Atualizar situação do planeta
    3-Adicionar um satélite ao planeta
    4-Remover um satélite do planeta
    5- Lista de todos os planetas 
    6-Sair
    `;
    userOption = Number.parseFloat(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            fiftMenuOption();
        case 6:
            alert('Encerrando o sistema');
            break;
        default:
            alert('Opção invalida! Retornando ao menu principal...');
    }
}
