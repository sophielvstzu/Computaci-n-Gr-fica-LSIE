interface Vehiculos{
    marca: string,
    motor: number,
    modelo: number,
    uso: string,
    activo?: boolean, //opcional
    propietarios: string[]
}

const vehiculo: Vehiculos = {
    marca: 'Chevrolet',
    motor: 2000,
    modelo: 2020,
    uso: "Particular",
    activo: false,
    propietarios: ["jorge", "Juan"]
}

console.log(vehiculo)

interface Computer{
    readonly marca: string,
    cpu: number,
    modelo: string,
    componentes: string []
}

const computer: Computer = {
    marca: "Acer",
    cpu: 200,
    modelo: "Laptop",
    componentes: ["linux", "ram16"]
}

