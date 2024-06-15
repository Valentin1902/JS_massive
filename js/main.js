// const array1 = [12,32,5,3];
// const array2 = [6,3,9,2];

// let sum = 0;

// let numbers = array1.concat(array2);

// console.log(numbers);

// for(const number of numbers){
//     sum += number;
//     console.log(sum);
// }


// const cards = ["Card-1", "Card-2","Card-3","Card-4", "Card-5"];

// index.of
// Видалення елемента ------------------------------------------------------------------------------------------------------------------------
// const cardToRemove = "Card-3";

// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);
// console.log(cards);

//Додавання ----------------------------------------------------------------------------------------------------------------------------------


// cards.splice(index, 0, cardToRemove);
// console.log(cards);

// Оновлення по индексу ----------------------------------------------------------------------------------------------------------------------

// const cardToUpdate = "Card-3";
// const indexUpdate = cards.indexOf(cardToUpdate);
// cards.splice(indexUpdate, 1, "New card");
// console.log(cards);

//
// const cards = ["Card-1", "Card-2","Card-3","Card-4", "Card-5"];

// for (let i = 0; i < cards.length; i++){
//     const card = cards[0];
//     const updCard = card.slice(0, -1);
//     cards [i] = updCard;

// }
// console.log(cards)



//slice ---------------------------------------------------------------------------------------------------------------------------------------

// const numbers = [1,223,45,5,6,90,7,12];

// const newArr = numbers.slice(0,3);

// const newArr2 = numbers.slice(-3);
// console.log(newArr);
// console.log(newArr2);

// numbers.pop();
// console.log(numbers);
// numbers.push("New Element");
// console.log(numbers);


// //  Shift, Unshift---------------------------------------------------------------------------------------------------------------------------------------------

// numbers.shift();
// console.log(numbers);
// numbers.unshift("efe");
// console.log(numbers);
// //-------------------------------------------------------------------------------------------------------------------------------------------------


const data = ["HTML", "Css"];

const list = document.querySelector(".list");
const form = document.querySelector(".form");
let value = "";

for (const value of data) {
  list.insertAdjacentHTML("afterbegin", `<li>${value}</li>`);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = e.currentTarget.elements.text.value;
  console.log(inputValue);
  data.push(inputValue);
  console.log(data);
  addElement(inputValue);
});

console.table(data);
function addElement(inputValue) {
  return list.insertAdjacentHTML("beforeend", `<li>${inputValue}</li>`);
}