
let allTitle = "";
fetch("https://jsonplaceholder.typicode.com/posts" , { method: 'GET'})
.then((response) => {
    return response.json()
}).then((data) =>{
    // for(let element of data){
    // document.getElementById("g").innerHTML += `<p class="a">${element.title}</p>`
    // // document.getElementById("g").innerHTML += `<p class="a">${element.body}</p>`

 for(let i = 0; i < data.length; i++){
        element = data[i];
        document.getElementById("g").innerHTML += `<p class="a">${element.title + "<br><br><br>"+element.body }</p>`;
           
 }
    
}).catch((Error) => {
    console.log(Error);
})
