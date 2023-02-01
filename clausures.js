/* 
* Closures: Un closure es una función que se recuerda de su entorno cuando se crea. 
* Los closures son muy útiles para la creación de funciones privadas y el manejo de variables privadas.
*/


// Ejemplo 1
function createStack() {
    const items = []

    return {
        getItems: () => items,
        push(item) {
            return items.push(item);
        },
        pop() {
            return items.pop();
        }
    }
}
const stack = createStack()
stack.push(10)
stack.push(5)
stack.pop(5)

console.log(stack.items)
console.log(stack.getItems())

// Ejemplo 2
const miContador = function () {
    let contador = 0

    function increment() {
        return contador++;
    }
    function decrement() {
        return contador--;
    }
    function value() {
        return contador;
    }

    return {
        increment,
        decrement,
        value
    }
}

const counter = miContador()
counter.increment()
counter.decrement()
counter.value()
counter.value()


// Ejemplo 3
function User() {
    let password = '123';

    return {
        getPassword: () => password,
        Update(pass) {
            return password = pass;
        },
        Delete() {
            return password = '';
        },
    }
}

const user = User();

user.getPassword()
user.Delete()
user.Update('klk')
user.getPassword()
