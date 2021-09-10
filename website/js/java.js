function chuck() {
    fetch('http://api.icndb.com/jokes/450')
    .then(response =>{
        return response.json();
    }).then(data =>{
        console.log(data.value.joke);
        return document.getElementById("textfield").innerHTML = data.value.joke;
    })
}
function chuckRandom() {
    fetch('http://api.icndb.com/jokes/random')
    .then(response =>{
        return response.json();
    }).then(data =>{
        console.log(data.value.joke);
        return document.getElementById("textfield").innerHTML = data.value.joke;
    })
}