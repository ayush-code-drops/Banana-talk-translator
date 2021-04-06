// var userName = prompt("Give me your name");

// alert('Welcome '+ userName)

var btnBanana = document.querySelector('#btn-banana');
var txtInput = document.querySelector('textarea')

var divOutput = document.querySelector(".output-div")


var url = "https://api.funtranslations.com/translate/minion.json"



function geturlTranslation(text) {
    return url + "?" + "text=" + text;
    
}

function clickHandler() {
    var inputtext=txtInput.value
    fetch(geturlTranslation(inputtext))
    .then(Response => Response.json())
        .then(json => {
            var translated = json.contents.translated
        divOutput.innerHTML=translated})
    
}



btnBanana.addEventListener("click", clickHandler);




// function errorHandler(error) {
//     console.log("error occured", error)
//     alert("Something went wrong!. Please try again after sometime.")
    
// }



