const cardsContainer = document.querySelector('.gifts-card__container');

function randomNumber(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

function createCard(cardData) {
  const card = document.createElement('div'); // create card
  card.className = 'gift-card';
  cardsContainer.appendChild(card); // add cart to cards container

  const cardImg = document.createElement('div'); // create card picture
  cardImg.className = 'gift-card__img';

  const cardText = document.createElement('div'); // create card text container
  cardText.className = 'gift-card__text-container';

  const cardTextTitle = document.createElement('h5'); // create card text title

  if (cardData.category === 'For Work') {
    cardImg.classList.add('gift-work');
    cardTextTitle.classList.add('gift-card__for-work');
  } else if (cardData.category === 'For Health') {
    cardImg.classList.add('gift-health');
    cardTextTitle.classList.add('gift-card__for-health');
  } else {
    cardImg.classList.add('gift-harmony');
    cardTextTitle.classList.add('gift-card__for-harmony');
  }

  cardTextTitle.innerText = cardData.category; // add text to card text title

  card.appendChild(cardImg);
  card.appendChild(cardText);
  cardText.appendChild(cardTextTitle);

  const cardTextParagraph = document.createElement('h4'); // create card text paragraph
  cardTextParagraph.innerText = cardData.name;
  cardText.appendChild(cardTextParagraph);
}

function createFourCards(arrayCards) {
  let wereNumbers = [];
  for (let i = 0; i < 4; i++) {
    const numberRandomCard = randomNumber(0, arrayCards.length - 1); // получаем номер карточки

    if (!wereNumbers.includes[numberRandomCard]) {
      //check on repeat cards
      createCard(arrayCards[numberRandomCard]);
    } else {
      i--;
    }
    wereNumbers.push(numberRandomCard);
  }
}

async function getData() {
  const filePath = './data/gifts.json';
  const result = await fetch(filePath);
  const data = await result.json();

  createFourCards(data);
}
getData();
