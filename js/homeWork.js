'use strict'
 async function showMovie() {
    let content;
    let response = await fetch("http://www.omdbapi.com/?apikey=4432ff70&s=terminator&/type=movie&/page=1&");
    content = await response.json();
    console.log(content);
}