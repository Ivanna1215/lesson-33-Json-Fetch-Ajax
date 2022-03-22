'use strict'
// fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
// .then(function(response){
//    return response.json();
// })
// .then(function(myJson){
//     console.log(JSON.stringify())
// })
let content;
async function getResponse() {
    let response =  await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
    content = await response.json()
    content = content.splice(0,60);
    console.log (content);
    console.log(content[2].txt)
    for (let i = 0; i<content.length; i++) {
        console.log(`Name ${content[i].txt}
                      CC  ${content[i].cc}
                     rate  ${content[i].rate}`)
    }
}
getResponse();
