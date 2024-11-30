const bodyPage = document.querySelector('body');
const modalWindow = document.querySelector('.modal');
const isGiftsPage = document.querySelector('.section-gifts');

function createModalCard(cardData) {
  const card = document.createElement('div'); // create card
  card.classList = 'gift-card modal-card';
  modalWindow.appendChild(card); // add cart to cards container

  const closeBtn = document.createElement('div'); // create close modal button
  closeBtn.classList = 'modal-card__btn-close';
  card.appendChild(closeBtn);

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

  const cardTextDescription = document.createElement('p'); // create card description
  cardTextDescription.innerHTML = cardData.description;
  cardText.appendChild(cardTextDescription);

  const superPowerContainer = document.createElement('div'); // create superpower container
  superPowerContainer.className = 'modal-card__superpower-container';
  cardText.appendChild(superPowerContainer);

  const addPower = document.createElement('h5'); // create title superpower
  addPower.innerHTML = 'Adds superpowers to:';
  superPowerContainer.appendChild(addPower);

  const powerContainer = document.createElement('div'); // create power container
  powerContainer.className = 'superpower-container';
  superPowerContainer.appendChild(powerContainer);

  for (let i = 0; i < 4; i++) {
    const powerDescription = document.createElement('div');
    powerDescription.className = 'superpower-description';
    powerContainer.appendChild(powerDescription);

    const power = ['Live', 'Create', 'Love', 'Dream'];

    const powerName = document.createElement('p');
    powerName.innerText = power[i];
    powerDescription.appendChild(powerName);

    const powerValue = document.createElement('div');
    powerValue.className = 'superpower-value';
    powerValue.innerHTML = cardData.superpowers[power[i].toLowerCase()];
    powerDescription.appendChild(powerValue);

    const powerImgContainer = document.createElement('div');
    powerImgContainer.className = 'superpower-img__container';
    powerDescription.appendChild(powerImgContainer);

    for (let j = 0; j < 5; j++) {
      const snowflakeValue =
        cardData.superpowers[power[i].toLowerCase()].split('')[1];

      const snowflakeImg = document.createElement('div');
      if (snowflakeValue > j) {
        snowflakeImg.className = 'superpower-img__red';
      } else {
        snowflakeImg.className = 'superpower-img__white';
      }
      powerImgContainer.appendChild(snowflakeImg);
    }
  }

  const btnClose = document.querySelector('.modal-card__btn-close');
  btnClose.addEventListener('click', closeModal);
}

async function getData(cardName) {
  const filePath = isGiftsPage ? '../data/gifts.json' : './data/gifts.json';
  const result = await fetch(filePath);
  const data = await result.json();

  data.forEach((cardData) => {
    if (cardData.name === cardName) {
      createModalCard(cardData);
    }
  });
}

function openModal() {
  modalWindow.classList.add('active');
  bodyPage.classList.add('unscroll');
}

function closeModal() {
  modalWindow.classList.remove('active');
  bodyPage.classList.remove('unscroll');
  modalWindow.innerHTML = '';
}

modalWindow.addEventListener('click', (event) => {
  // Проверяет на тот ли я элемент нажал!
  if (event.target.classList.contains('modal')) {
    closeModal();
  }
});

export default function startListenCard(card) {
  card.addEventListener('click', function () {
    const cardName = card.childNodes[1].childNodes[1].innerHTML;
    openModal();
    getData(cardName);
  });
}

// Эту часть пришлось переделать, т.к появлялся баг при загрузке странице не сразу открывалось модальное окно при нажатии на карточку!!!

// function startListenCards() {
//   const cards = document.querySelectorAll('.gift-card');
//   console.log(cards);

//   cards.forEach((card) =>
//     card.addEventListener('click', () => {
//       const cardName = card.childNodes[1].childNodes[1].innerHTML;
//       openModal();
//       getData(cardName);
//     })
//   );
// }

// window.addEventListener('load', function () {
//   setTimeout(startListenCards, 10);
// });
