/**
 * AJAX
 * 
 * Asynchronous JavaScript And XML
 * 
 * ROTAS
 * ENDPOINT
 * 
 */


const xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        const response = JSON.parse(this.responseText);
        console.log(response[0]);
    }
}

xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
xhttp.send()