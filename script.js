const listElement = document.querySelector('.characters');
const templateChar = document.getElementById('singleChar');
const Btn = document.getElementById('btn');

const button = () => {
const xhr = new XMLHttpRequest();
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
        charEl.querySelector('p').textContent = `status: ${ char.status}`;
        charEl.querySelector('span1').textContent = `species: ${ char.species}`;
        charEl.querySelector('span2').textContent = `type: ${ char.type}`;
        charEl.querySelector('span3').textContent = `gender: ${ char.gender}`;
        charEl.querySelector('span4').textContent = `created: ${ char.created}`;
        charEl.querySelector('.character').appendChild(img); 
        listElement.append(charEl);
    }
}
xhr.send();
}

Btn.addEventListener('click', button);