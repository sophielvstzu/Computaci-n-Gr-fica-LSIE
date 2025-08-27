let myVariable: string = 'miNombre'

let multipleData: string | number | boolean = 'miCadena'

multipleData = true

let otherVariable: any = false


console.log('hola mundo')
console.log(myVariable, multipleData, otherVariable)

//ARREGLO

let arregloHabilidades: string [] = ['Golpear', 'Correr', 'Saltar']

console.log(arregloHabilidades)
console.table(arregloHabilidades)

let otherArrayHabilidades: (string | boolean | number) [] = ['Golpear', 'Correr', 'Saltar', false, 120]
console.table(otherArrayHabilidades)


//export();

//1
interface Estudiante{
    nombre: string,
    edad: number,
    curso: string,
    direccion: {
        calle: string, 
        ciudad: string,
        pais: string
    }
    mostrarInfo(): void
}

const estudiante: Estudiante = {
    nombre: 'Juan',
    edad: 22,
    curso: 'Matemáticas',
    direccion: {
        calle: 'Av. Siempre Viva',
        ciudad: 'Bogotá',
        pais: 'Colombia'
    },
    mostrarInfo() {
        return `${this.nombre} estudia ${this.curso} en ${this.direccion.ciudad}`;
    }
};

console.log(estudiante.mostrarInfo())

//2
interface Producto{
    id: number,
    nombre: string,
    precio: number, 
    stock: number,
    mostrarDetalle(): void
}

const producto: Producto = {
    id: 1,
    nombre: 'Laptop',
    precio: 3500,
    stock: 10,
    mostrarDetalle() {
        return `${this.nombre} cuesta $${this.precio} y hay ${this.stock} unidades disponibles`;
    }
};

console.log(producto.mostrarDetalle())

//3
interface Pelicula{
    titulo: string,
    director: string,
    duracion: number,
    genero?: string,
    reproducir(): void
}

const pelicula: Pelicula = {

    titulo: 'Avengers: Endgame',
    director: 'Anthony y Joe Ruso',
    duracion: 181,
    genero: 'Acción',
    reproducir() {
        return `Reproduciendo: ${this.titulo} - Dirigida por ${this.director}`;
    }
};

console.log(pelicula.reproducir())

//4
interface Vehiculos{
    marca: string,
    modelo: string,
    anio: number,
    encender(): void
}

const vehiculo: Vehiculos = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2022,
    encender() {
        return `${this.marca} ${this.modelo} está encendiendo`;
    }
};
console.log(vehiculo.encender())

//5

interface Usuario{
    username: string,
    password: string,
    roles: string [],
    login(): void
}

const usuario: Usuario = {
    username: 'admin01',
    password: '123456',
    roles: ['admin', 'editor'],
    login() {
        return `Usuario ${this.username} ha iniciado sesión con roles: ${this.roles.join(', ')}`
        }
    };

console.log(usuario.login())

//PARTE 2.

let myValue: number | string | boolean = 10;

let myBoolean: Boolean = true;

let healthPoints:
