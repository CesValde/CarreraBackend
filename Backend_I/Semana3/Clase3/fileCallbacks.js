import fs from 'node:fs'

fs.writeFile('./callbacks.txt','Creado con los callbacks de fs', (error) => {
    if(error) return console.log("Error al crear el archivo")

    fs.readFile('./callbacks.txt', 'utf-8', (error, resultado) => {
        if(error) return console.log("Error al leer el archivo")
        console.log(resultado)

        fs.appendFile('./callbacks.txt', ', agregado desde callbacks', (error) => {
            if(error) return console.log("error al agregar contenido al archivo")
            
            fs.readFile('./callbacks.txt','utf-8', (err, data) => {
                if(err) return console.log('Error a leer el archivo')
                    console.log(data)
            })
        })
    })
})