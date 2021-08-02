//Soal 1

let kucing = [
    {
        Nama : 'Nur',
        Kaki : 4,
        Warna : ['Hitam-Oren'],
        Spesies : 'Mamalia',
        Makanan : 'Pindang',
        Keahlian : 'Tidur'
    }
]

console.log(kucing[0]);

//Soal 2

const data = [
    {
        name : 'Alpha',
        class : 'Dragon',
        club : ['Bola', 'Bulutangkis'],
    },

    {
        name : 'Beta',
        class : 'Lizard',
        club : ['Membaca', 'Bulutangkis'],
    },
]

console.log(`${data[0].name} ada di kelas ${data[0].class}, dia mengikuti club ${data[0].club}`);
console.log(`${data[1].name} ada di kelas ${data[1].class}, dia mengikuti club ${data[1].club}`);

//Soal 3

let todos = [
    {id: 1, todo: 'Belajar Coding'},
    {id: 2, todo: 'Nanti Tidur'},
]

/*----------------------------------------*/

function printAll () {
    for(let printAll in todos) {
        console.log(todos[printAll].todo);
    }
}
printAll()

/*----------------------------------------*/

let printId = (id) => {
    return todos.find(todo => todo.id === id).todo
}
console.log(printId(1));

/*----------------------------------------*/

let newTodo = {id: 3, todo: 'Ngerjain tugas'}
todos.push(newTodo)

console.log(todos);

/*----------------------------------------*/

let deleteById = (id) => {
    return todos.splice(id, 1)
}

console.log(deleteById(1));

/*----------------------------------------*/

let updateById = (newTodo) => {    
    return todos[0].todo = newTodo
}

console.log(updateById('Belajar CRUD'));

//Soal 4

let fruits = [
    {
        name: 'Apple',
        seed: 'Single seed',
        latin: 'Malus Sylvestris',
        image: './images/apple.jpg'
    },
    {
        name: 'Banana',
        seed: 'Double seed',
        latin: 'Musa Paradisiaca',
        image: './images/banana.jpg'
    },
    {
        name: 'Blueberry',
        seed: 'Single seed',
        latin: 'Vaccinium Corymbosum',
        image: './images/blueberry2.jpg'
    },
    {
        name: 'Cherry',
        seed: 'Double seed',
        latin: 'Prunus Apetala',
        image: './images/cherry.jpg'
    },
    {
        name: 'Lemon',
        seed: 'Single seed',
        latin: 'Citrus Limon',
        image: './images/lemon.jpg'
    },
    {
        name: 'Mango',
        seed: 'Double seed',
        latin: 'Citrus Reticulata',
        image: './images/mangos.jpg'
    },
    {
        name: 'Orange',
        seed: 'Single seed',
        latin: 'Malus Sylvestris',
        image: './images/orange2.jpg'
    },
    {
        name: 'Pear',
        seed: 'Double seed',
        latin: 'Pyrus Caucasica',
        image: './images/pear.jpg'
    },
]

let printDiv = document.getElementById('container')
 
for(let i = 0; i < fruits.length; i++) {
    printDiv.innerHTML += `<div id="border">
    <img src=${fruits[i].image} class="center">
    <ul>
    <li>Name: ${fruits[i].name}</li>
    <li>Seed Type: ${fruits[i].seed}</li>
    <li>Latin: ${fruits[i].latin}</li><br>
    </ul>
    </div>
    `
}