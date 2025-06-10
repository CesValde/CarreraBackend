/* 
Clase EncuestaEdad con método para contar menores, adultos, mayores.
*/

class EncuestaEdad {
    constructor(menores, adultos, mayores) {
        this.menores = menores
        this.adultos = adultos
        this.mayores = mayores
    }

    contarMenores() {
        let menores = this.menores
        return `La cantidad de menores es ${menores}`
    }

    contarMayores() {
        let mayores = this.mayores
        return `La cantidad de mayores es ${mayores}`
    }

    contarAdultos() {
        let adultos = this.adultos
        return `La cantidad de adultos es ${adultos}`
    }
}

const encuestaEdad = new EncuestaEdad(5, 10, 40)
let cadena = encuestaEdad.contarMayores()
localStorage.setItem('cadena', cadena)
cadena = encuestaEdad.contarMenores()
localStorage.setItem('cadena2', cadena)
cadena = encuestaEdad.contarAdultos()
localStorage.setItem('cadena3', cadena)