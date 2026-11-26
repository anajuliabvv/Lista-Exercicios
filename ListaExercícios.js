// EXERCÍCIO 1
function par(n) {
    return n % 2 === 0;
}

console.log(par(2));
console.log(par(3));
console.log(par(0));


// EXERCÍCIO 2
function media(notas) {
    if (notas.length === 0) {
        return 0;
    }

    let soma = 0;

    for (let nota of notas) {
        soma += nota;
    }

    return soma / notas.length;
}

console.log(media([7, 8, 9]));
console.log(media([]));


// EXERCÍCIO 3
function filtrarMaiores18(usuarios) {
    return usuarios.filter(usuario => usuario.age >= 18);
}

const usuarios = [
    { name: "Ana", age: 22 },
    { name: "Beto", age: 17 },
    { name: "Carla", age: 30 },
    { name: "João", age: 18 }
];

console.log(filtrarMaiores18(usuarios));