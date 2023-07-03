function validadeEmail(email){
    if(!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)){
        const err = new Error('Email invalido.')
        err.input = 'email'
        throw err
    }
}

function validadePassword(password){
    if(
        password.length < 8 ||
        !password.match(/[a-z]/) ||
        !password.match(/[A-Z]/) ||
        !password.match(/\d/) ||
        !password.match(/[^a-zA-Z\s0-9]/)

    ){
     const err = new Error('Senha invalida!')
     err.input = 'password'
     throw err
    }
}



function restFormStyle(){
    Object.entries(userInputs).forEach(([key, value]) => {
        value.classList.remove('success', 'error')
        document.querySelector(`#${key}-error`).textContent = ''
    })
}

const userInputs = {
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password')

}

const form = document.querySelector('form')

form.addEventListener('submit', (ev)=>{ev.preventDefault()
  try{
    userInputs.name.classList.add('success')
    validadeEmail(userInputs.email.value)
    userInputs.email.classList.add('success')
    validadePassword(userInputs.password.value)
    userInputs.password.classList.add('success')

  }catch(err){
    userInputs[err.input].classList.add('error')
    document.querySelector(`#${err.input}-error`).textContent = err.message
  }
 

})