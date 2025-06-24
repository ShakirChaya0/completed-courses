// argumentos de entrada
console.log(process.argv)

// podemos controlar eventos del proceso
process.on('exit', () => {
    // limpiar los recursos
})

// current working directory
console.log(process.cwd()) // directorio de trabajo actual

// platform
console.log(process.env.PEPITO="hola") // variable de entorno

// controlar el proceso y su salida
process.exit(1)
