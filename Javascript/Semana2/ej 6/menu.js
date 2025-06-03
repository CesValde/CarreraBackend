/* Menú de opciones básico
Muestra un menú repetidamente hasta que el usuario elija salir:
```jsx
1. Ver saludo
2. Mostrar hora ficticia
3. Salir
```
*/ 
// Usa un bucle. Las opciones pueden mostrar mensajes simulados como “Hola, usuario” o “La hora es 12:00"
let opcion 

do {
    opcion = prompt("Ingrese una opcion \n 1. Ver saludo \n 2. Mostrar hora ficticia \n 3. Salir ")
    switch(opcion) {
        case "1": 
        let user = prompt("Ingrese su nombre")
            alert("Hola " + user)
        break
        case "2": 
        let hoy = new Date()
        let hora = hoy.getHours()
        let min = hoy.getMinutes()
            alert("Son las " + hora + ':' + min)
        break
        case "3": 
            alert("Hasta luego")
        break
        default:
            alert("Opción no válida. Intenta otra vez.");
    }   
} while(opcion !== "3")