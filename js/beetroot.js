'use strict'
// fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
// .then(function(response){
//    return response.json();
// })
// .then(function(myJson){
//     console.log(JSON.stringify())
// })





async function getResponse() {
  let content;
  let response = await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
  content = await response.json();
  console.log(content);
let list = document.createElement('ol');
document.body.append(list);
  content.forEach(element => {
    let li = document.createElement('li');
    let h4 = document.createElement('h4');
    h4.innerText = element.txt;
    li.append(h4);
    let cc = document.createElement('div');
    cc.innerText = element.cc;
    li.append(cc);
    let rate = document.createElement('div');
    rate.innerText = element.rate;
    li.append(rate);
    list.append(li);
  });

}

async function getFilter() {

  let ol = document.querySelector('ol');
  ol.remove();

  let content;
  let response = await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
  content = await response.json()
 

let num = document.getElementById('num');
let newContent = content.filter(element=>element.rate>num.value);
console.log(newContent);

newContent.forEach(element => {
let listTwo = document.createElement('ol');
let li = document.createElement('li');
let h4 = document.createElement('h4');
h4.innerText = element.txt;
console.log(h4)
li.append(h4);
let cc = document.createElement('div');
cc.innerText = element.cc;
li.append(cc);
let rate = document.createElement('div');
rate.innerText = element.rate;
li.append(rate);
listTwo.append(li);
document.body.append(listTwo);
})

}










// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
//   };

  // let json = JSON.stringify(student);

  // console.log(json);

  // let user = {
  //   name: "Ivanna Kovaliv",
  //   age: 31,
  // };

  // let userNew = JSON.stringify(user);
  // console.log(userNew);

  // let numbers = "[0,1,2,3]";
  // numbers = JSON.parse(numbers);
  // console.log(numbers);

