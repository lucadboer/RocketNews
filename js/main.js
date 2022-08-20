const button = document.querySelector('.btn-send')
const inputEmail= document.querySelector('.input-email')
const form = document.getElementById('form-email')

button.addEventListener('click', checkEmail)

function checkEmail() {

    if (inputEmail.value !== '') {   
        form.addEventListener('submit', event => {
            event.preventDefault()
            swal("Cadastro realizado!", "Verifique sua caixa de entrada ou spam para receber as notícias", "success")
        } )

    }
}