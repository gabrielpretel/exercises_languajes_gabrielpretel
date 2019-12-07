// Ejercicio 1. Array operations
//Head
const head = (...args) => {
    const arr = args.slice();
    const [first, ,] = arr;
    return first;
};
console.log(head('Gabriel', 2, 3, 4, 5));
// Tail
const tail = (...args) => {
    const arr = args.slice();
    const [first, ...rest] = arr;
    return rest.toString();
};
console.log(tail('Gabriel', 2, 3, 4, 5));
// Init
const init = (...args) => {
    const arr = args.slice();
    arr.reverse();
    const [last, ...rest] = arr;
    rest.reverse();
    return rest.toString();
};
console.log(init('Gabriel', 2, 3, 4, 5));
//Last 
const last = (...args) => {
    const arr = args.slice();
    arr.reverse();
    const [last, ...rest] = arr;
    return last.toString();
};
console.log(last('Gabriel', 2, 3, 4, 5));
// Ejercicio 2. Concat
const concat = (array1, array2) => {
    [array1, array2] = [array1.slice(), array2.slice()];
    const result = [...array1, ...array2];
    return result;
};
console.log(concat([1, 2, 3], [4, 5, 6]));
// Ejercicio 3. Clone Merge
//Clone
function clone(source) {
    const copy = Object.assign({}, source);
    return copy;
}
const source = { name: "Gabriel", surname: "Pretel" };
console.log(clone(source));
//Merge
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
function merge(source, target) {
    let result = Object.assign(Object.assign({}, target), source);
    return result;
}
console.log(merge(a, b));
// Ejercicio 4. Read books
const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
function isBookRead(books, titleToSearch) {
    const results = books.filter(function (book) {
        return book.title === titleToSearch;
    });
    if (results[0] === undefined)
        return false;
    return results[0].isRead;
}
console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
// Ejercicio 5. Slot Machine
class SlothMachine {
    constructor() {
        this.coins = 0;
    }
    play() {
        this.coins++;
        let random_shot1 = Math.random() >= 0.5;
        let random_shot2 = Math.random() >= 0.5;
        let random_shot3 = Math.random() >= 0.5;
        if (random_shot1 === true && random_shot2 === true && random_shot3 === true) {
            console.log("Congratulations!!!. You won ", this.coins, "coins!!");
            this.coins = 0;
        }
        else {
            console.log("Good luck next time!!");
        }
    }
}
const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
