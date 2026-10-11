// 1. Об'єднання елементів масиву через for

console.log("1 завдання, через for");

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let string = '';

for (let i = 0; i < friends.length; i += 1) {
  string += friends[i];

  if (i < friends.length - 1) {
    string += ', ';
  }
}

console.log(string);

// Об'єднання через join()

const byJoin = friends.join(', ');

console.log(byJoin);


// 2. Працюємо з колекцією карток Trello

console.log("Завдання 2");

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

console.log(cards);



// 3. Видалити картку

console.log("Завдання 3");

const cardToRemove = 'Карточка-3';

const indexToRemove = cards.indexOf(cardToRemove);

cards.splice(indexToRemove, 1);

console.log(cards);


// 4. Додати картку

console.log("Завдання 4");

const cardToInsert = 'Карточка-6';

cards.splice(2, 0, cardToInsert);

console.log(cards);


// 5. Оновити картку

console.log("Завдання 5");

const cardToUpdate = 'Карточка-4';

const indexToUpdate = cards.indexOf(cardToUpdate);

if (indexToUpdate !== -1) {
  cards.splice(indexToUpdate, 1, 'Карточка-4-оновлена');
}

console.log(cards);