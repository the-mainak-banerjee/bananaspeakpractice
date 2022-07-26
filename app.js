const userInput = document.querySelector('.input-box')
const btn = document.querySelector('.btn')
const translatetext = document.querySelector('.output-box')

const serverUrl = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json'

function generateTranslationUrl(userText){
    return `${serverUrl}/?text=${userText}`
}


function clickHandler() {
    const userInputText = userInput.value
    fetch(generateTranslationUrl(userInputText))
    .then(res => res.json())
    .then(data => {
        const translatedOutput = data.contents.translated
        translatetext.innerText = translatedOutput
    }).catch(error => console.log(error))
}

btn.addEventListener('click',clickHandler)