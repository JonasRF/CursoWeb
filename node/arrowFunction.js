const arrowFunction = () => {
    console.log('Dentro de uma função')
    console.log(this === global)
    console.log(this === exports)
    console.log(this === module.exports)
}

arrowFunction()