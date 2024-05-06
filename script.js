let containerInput = document.querySelector('.container-search-input');
let inputElem = document.querySelector('.container-search-input input');
let boxItem = document.querySelector('.autocomplete-box');


function mainFunction () {
    let inputValue = inputElem.value;
    if (inputValue) {
        containerInput.classList.add('active');
        let findWord = suggestions.filter((word) => {
            return word.toLowerCase().includes(inputValue.toLowerCase())
        })
        let addLi = findWord.map((word) => {
            return `<li>${word}</li>`
        })
        // console.log(addLi);
        let customValue
        if (!addLi.length) {
            customValue = `<li>${inputElem.value}</li>`
        } else {
            customValue = addLi.join('')
        }
        boxItem.innerHTML = customValue;
        clickItems ()
    } else {
        containerInput.classList.remove('active')
    }
}

function clickItems () {
    let items = boxItem.querySelectorAll('li')
    items.forEach((item) => {
        item.addEventListener('click' , () => {
            inputElem.value = item.textContent;
            containerInput.classList.remove('active')
            inputElem.focus()
        })
    })
}


inputElem.addEventListener('keyup' , mainFunction)