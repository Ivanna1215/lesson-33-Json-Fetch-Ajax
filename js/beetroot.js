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
    let response =  await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
    content = await response.json()
    content = content.splice(0,60);
    console.log (content);
    console.log(content[2].txt)
    // let list = document.querySelector('.posts');
    let list = document.createElement('ol');
    document.body.append(list);
    let key;

    for (key in content) {
        list.innerHTML +=`
        <li class="post">
        <h4> ${content[key].txt}</h4>
        <div>${content[key].cc}</div>
        <div>${content[key].rate}</div>
        </li>
        `
                // console.log(content[key])
            }



    // for (let i = 0; i<content.length; i++) {
    //     console.log(`Name ${content[i].txt}
    //                   CC  ${content[i].cc}
    //                  rate ${content[i].rate}`)
    // }


}
// getResponse();

