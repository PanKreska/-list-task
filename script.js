const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://rickandmortyapi.com/api/character');
xhr.onload = function() {
    const listOfCharacter =JSON.parse(xhr.response);
    console.log(listOfCharacter);
}
xhr.send();

