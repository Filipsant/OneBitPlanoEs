document.getElementById('sessionBtn').addEventListener('click', function(){
    const input = document.getElementById('session')
    window.sessionStorage.setItem('info', input.value)
    input.value = ''
})


document.getElementById('readSession').addEventListener('click', function(){
    const info = sessionStorage.getItem('info')
    alert('A informaçao salva é : ' + info)
})

document.getElementById('localBtn').addEventListener('click',function(){
    const input = document.getElementById('local')
    window.localStorage.setItem('text', input.value)
    input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function(){
    const text = localStorage.getItem('text')
    alert ('O texto salvo no local storege é: ' + text)
})

document.getElementById('cookieBtn').addEventListener('click', function(){
    const input = document.getElementById('cookie')
    //cookieName = value; expires=UTCStringDate; path=/;
     const cookie = 'info=' + input.value  + ';'
     const expiration = 'expires=' + new Date(2023,6,2) + ';'
     const path = 'path=/;'
     document.cookie = cookie + expiration + path
     input.value = ''
     
})

document.getElementById('cookie2Btn').addEventListener('click', function(){
    const input = document.getElementById('cookie2')
    //cookieName = value; expires=UTCStringDate; path=/;
     const cookie = 'text=' + input.value  + ';'
     const expiration = 'expires=' + new Date(2023,5,2) + ';'
     const path = 'path=/;'
     document.cookie = cookie + expiration + path
     input.value = ''
})