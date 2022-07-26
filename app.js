const userInput = document.querySelector('.input-box')
const btn = document.querySelector('.btn')
const translatetext = document.querySelector('.output-box')

// const serverUrl = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json'
const serverUrl = 'https://api.funtranslations.com/translate/minion.json'

function generateTranslationUrl(userText){
    return `${serverUrl}/?text=${userText}`
}

function handleError(error){
    console.log(error)
    alert('Something Went Wrong!!! Try Again Later')
}


function clickHandler() {
    const userInputText = userInput.value
    fetch(generateTranslationUrl(userInputText))
    .then(res => res.json())
    .then(data => {
        const translatedOutput = data.contents.translated
        translatetext.innerText = translatedOutput
    }).catch(error => handleError(error))
}

btn.addEventListener('click',clickHandler)