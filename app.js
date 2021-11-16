let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#inputText");
let outputDiv = document.querySelector("#outputText");

let serveURL = 'https://api.funtranslations.com/translate/yoda.json';

function getTranslationURL(input) {
    return serveURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickHandler() {
    let inputText = txtInput.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            let translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; //output
        })
        .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler)
