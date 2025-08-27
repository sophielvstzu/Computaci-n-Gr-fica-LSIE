function addNumber(a:number, b:number):number{
    return a + b
}

console.log(addNumber(5,6))

function addNumber2():void{
    let a: number = 10
    let b: number = 1
    a + b

}

console.log(addNumber2())

const addNumber3 = (a:number, b:number) => {
    return a + b
}

export{}

interface Vehiculo{
    marca: string,
    velocidad: number,
    mostrarCar: ()=> void
}

const vehiculo: Vehiculo = {
    marca: 'chevy',
    velocidad: 100,
    mostrarCar() {
        return `Carro: ${this.marca}`
    }
}

function fillGasoline(vehiculo:Vehiculo, fill:number):number{
    return vehiculo.velocidad += fill

}
console.log(vehiculo)
console.log(fillGasoline(vehiculo, 20))