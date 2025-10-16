import fs from 'node:fs'

const operaciones = async () => {
    try{
        await fs.promises.writeFile('./promises.txt','Archivo creado con promesas')

        const data = await fs.promises.readFile('./promises.txt', 'utf-8')
        console.log(data)
    
        await fs.promises.appendFile('./promises.txt', ', agrego desde filesPromises')
    
        const data2 = await fs.promises.readFile('./promises.txt', 'utf-8')
        console.log(data2)
    
        /* await fs.promises.unlink('./promises.txt') */
    } catch (e){
        console.log('Ocurrio un error', e)
    }
}

operaciones()