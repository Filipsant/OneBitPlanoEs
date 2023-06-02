    function sum(...numbers){
        return numbers.reduce((accum, num) => accum + num, 0)
    }

    console.log(sum(1,1))
    console.log(sum(2,2,2,2,2))
    console.log(sum(34,60, 60,70, 85))

    // são os restos dos parametros.