'use strict'

let posts =`[{"id":1,"title":"Lorem 1","body":"I don't have a car ","date":"24.02.2022","author_name":"Ivanna"},
{"id": 2,"title":"Lorem 2","body":"I'm tired","date":"21.03.2022","author_name":"Ivanna"},{"id": 3,
"title":"Lorem 3","body":"I'm not watching TV very often","date":"21.03.2022","author_name":"Ivanna"}]`
//  console.log(posts)
 
 let postsArr = JSON.parse(posts);
//  console.log(postsArr);
//  console.log(postsArr[1].title)

//  let form = {
//      name:'orange',
//      call:'0990242246',
//      email:''
//  }
//  form = JSON.stringify(form);
//  console.log(form);

let list = document.querySelector('.posts');
let postsHTML = ``

for (let i = 0; i<postsArr.length; i++){
    postsHTML += `
    <li class="post">
    <h2>${postsArr[i].title}</h2>
    <p>${postsArr[i].body}</p>
    <span>${postsArr[i].date}</span>
</li>
    `
   

}
console.log(postsHTML);

list.innerHTML=postsHTML;