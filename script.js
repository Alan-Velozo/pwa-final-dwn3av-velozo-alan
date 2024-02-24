let installation;

window.addEventListener('beforeinstallprompt', (event) => {
    installation = event;

    const installButton = document.getElementById('install-btn');
    installButton.style.display = 'block';

    window.addEventListener('appinstalled', () => {
        installButton.style.display = 'none';
        installation = null;
    });
});

const installButton = document.getElementById('install-btn');
installButton.addEventListener('click', () => {
    installation.prompt();

    installation.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('El usuario aceptó la instalación');
        } else {
            console.log('El usuario rechazó la instalación');
        }
        installation = null;
    });
});






const listaPersonajes = document.getElementById('listaPersonajes');
const apiUrl = 'https://rickandmortyapi.com/api/character';
let personajesCargados = 0;
let pagina = 1;
let characterData = null; 

async function loadCharacters() {
    try{
        const response = await fetch(`${apiUrl}?page=${pagina}`)
        const data = await response.json();
        characterData = data;
       characterData.results.forEach((character) => {
                    if (personajesCargados < 20) {
                         const card = document.createElement('div');
                     card.classList.add('card');

                    const cardImage = document.createElement('img');
        cardImage.src = character.image;
        cardImage.classList.add('card-img-top');
        cardImage.alt = character.name;

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h3');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = character.name;

                    const cardButton = document.createElement('a');
                    cardButton.classList.add('btn', 'btn-primary');
                    cardButton.href = '#';
                    cardButton.textContent = 'Ver más';

                    const favoriteButton = document.createElement('button');
favoriteButton.classList.add('btn', 'btn-outline-primary', 'favorite-button');
favoriteButton.textContent = 'Agregar a favoritos';

favoriteButton.addEventListener('click', () => {
    const isFavorite = JSON.parse(localStorage.getItem('favoritos')) || [];
    const isCharacterFavorited = isFavorite.find((fav) => fav.id === character.id);

    if (isCharacterFavorited) {
        const updatedFavorites = isFavorite.filter((fav) => fav.id !== character.id);
        localStorage.setItem('favoritos', JSON.stringify(updatedFavorites));
        updateFavoriteButton(false);
    } else {
        const updatedFavorites = [...isFavorite, { id: character.id, name: character.name }];
        localStorage.setItem('favoritos', JSON.stringify(updatedFavorites));
        updateFavoriteButton(true);
    }
});

const isFavorite = JSON.parse(localStorage.getItem('favoritos')) || [];
const isCharacterFavorited = isFavorite.find((fav) => fav.id === character.id);
updateFavoriteButton(isCharacterFavorited);

function updateFavoriteButton(isFavorited) {
    if (isFavorited) {
        favoriteButton.textContent = 'Quitar de favoritos';
        favoriteButton.classList.remove('btn-outline-primary');
        favoriteButton.classList.add('btn-danger');
    } else {
        favoriteButton.textContent = 'Agregar a favoritos';
        favoriteButton.classList.remove('btn-danger');
        favoriteButton.classList.add('btn-outline-primary');
    }
}
                    cardButton.addEventListener('click', () => {
                        const modal = document.getElementById('myModal');
                        const modalContent = document.getElementById('modalContent');

                        const characterImage = document.createElement('img');
                        characterImage.src = character.image;
                        characterImage.alt = character.name;

                        modal.style.display = 'block';
                        modalContent.innerHTML = '';

                        const characterInfoList = document.createElement('ul');

                        const nameItem = document.createElement('li');
                        nameItem.textContent = `Nombre: ${character.name}`;

                        const specieItem = document.createElement('li');
                        specieItem.textContent = `Especie: ${character.species}`;

                        const urlItem = document.createElement('li');
                        urlItem.textContent = 'URL: ';
                        const urlLink = document.createElement('a');
                        urlLink.href = character.url;
                        urlLink.textContent = character.url;
                        urlLink.target = '_blank';
                        urlItem.appendChild(urlLink);

                        const genderItem = document.createElement('li');
                        genderItem.innerHTML = `Género: <span style="color: 
                                    ${character.gender.toLowerCase() === 'male' ? 'blue' : 'red'}">${character.gender}</span>`;

                        const originItem = document.createElement('li');
                        originItem.textContent = `Origen: ${character.origin.name}`;

                        characterInfoList.appendChild(nameItem);
                        characterInfoList.appendChild(specieItem);
                        characterInfoList.appendChild(urlItem);
                        characterInfoList.appendChild(genderItem);
                        characterInfoList.appendChild(originItem);

                        modalContent.appendChild(characterImage);
                        modalContent.appendChild(document.createElement('br'));
                        modalContent.appendChild(characterInfoList);
                    });

                    
                    card.appendChild(cardImage);
                    card.appendChild(cardBody);
                    cardBody.appendChild(cardTitle);
                    cardBody.appendChild(favoriteButton);
                    cardBody.appendChild(cardButton);
                    

                    listaPersonajes.appendChild(card);
                    personajesCargados++;
                }
                

                if (personajesCargados < 20 && characterData.info.next) {
                    pagina++;
                    loadCharacters();
                }
            });
        }catch(error) {
            console.error('Error:', error)
        }
    } 


const closeModalButton = document.getElementById('closeModal');
closeModalButton.addEventListener('click', () => {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
});

loadCharacters();