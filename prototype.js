// En javascript no hay hererncia, hay Delegacion de objetos

const aaron = {
    name: 'Aaron',
    age: 31,
    profesion: 'developer',
    status: 'estudiante'
}

const cheft = {
    profesion: 'cocinero',
    cocinar: (plato) => `cocinando ${plato}`
}

// const protop = aaron.__proto__ = cheft;

// console.log(protop.cocinar('pepinillo'))
Object.setPrototypeOf(aaron, cheft)

aaron.cocinar('papa')