/* 
    Función que recibe nombre y nota (0–10).
    Devuelve si está “Aprobado” (≥6) o “Desaprobado”.
    Muestra mensaje final.
*/

function calcularNota(nombre, nota) {
    if(nota >= 6) {
        return alert("Aprobado: " + nombre)
    } else {
        return alert("Desaprobado: " + nombre)
    }
}

calcularNota("Cesarito", 5)