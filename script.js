const listElement = document.querySelector('.characters');
const templateChar = document.getElementById('singleChar');
const Btn = document.getElementById('btn');
const BtnParameters = document.getElementById('field');
const search = document.getElementById('search');
const chooseInput = document.getElementById("choosevalue");
let xhr;
let userChooseInput;

const showCharacters = () => {
xhr = new XMLHttpRequest();
xhr.open('GET', 'https://rickandmortyapi.com/api/character');
xhr.responseType = 'json';
xhr.onload = function() {
    const listOfCharacter = xhr.response;
    for (const char of listOfCharacter['results']){
        const charEl = document.importNode(templateChar.content, true);
        const img = new Image;
        img.src = char.image;
        img.classList = 'photo';
        charEl.querySelector('h2').textContent = char.name;
        charEl.querySelector('span').textContent = `status: ${ char.status}`;
        charEl.querySelector('span1').textContent = `species: ${ char.species}`;
        charEl.querySelector('span2').textContent = `type: ${ char.type}`;
        charEl.querySelector('span3').textContent = `gender: ${ char.gender}`;
        charEl.querySelector('span4').textContent = `created: ${ char.created}`;
        charEl.querySelector('.character').appendChild(img); 
        listElement.append(charEl);
        li = document.querySelectorAll('h2.name');
        statut = document.querySelectorAll('span');
        spacies = document.querySelectorAll('span1');
    }
}
xhr.send();
}

const checkcheckbox = () => {
    let userChooseInput = chooseInput.value;
    arrayStatus = Array.from(statut);
    arrayStatus.forEach( el => {
        if(el.textContent.toLowerCase() === userChooseInput.toLowerCase()) {
            el.parentNode.parentNode.style.display = 'block';
        } else {
            el.parentNode.parentNode.style.display = 'none';
        }
    })
};

const searchCharacter = e => {
    const text = e.target.value.toLowerCase();
    li.forEach( el => {
        if(el.textContent.toLowerCase().indexOf(text) !== -1) {
            el.parentNode.parentNode.style.display = 'block';
        } else {
            el.parentNode.parentNode.style.display = 'none';
        }
    })
}

search.addEventListener('keyup', searchCharacter);

Btn.addEventListener('click', function(){if(xhr === undefined){showCharacters()}});

BtnParameters.addEventListener('click', checkcheckbox);