/* 
Clase EmailValidator con método que filtra emails válidos.
Guarda los válidos en localStorage. 
*/

class EmailValidator {
    constructor(mail) {
        this.mail = mail
    }

    filtrarMails() {
        return this.mail.filter((elem) => elem.includes('@gmail.com'))
    }
}

let mails = [
    'cesar@gmail.com',
    'zoebascu@gmail', 
    'fwdgfygwy',
    'soyuncorreo@gmail.com'
]

let validador = new EmailValidator(mails)
let mailsValidos = validador.filtrarMails()
console.log(mailsValidos)
localStorage.setItem('correos', mailsValidos)