const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.gift-card');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((el) => el.classList.remove('active'));
    tab.classList.add('active');
    filterShowCards(tab.innerHTML);
  });
});

function filterShowCards(value) {
  cards.forEach((card) => card.classList.remove('notShow'));

  cards.forEach((card) => {
    const category = card.childNodes[3].childNodes[1].innerHTML.toLowerCase();
    if (value !== category && value !== 'all') {
      card.classList.add('notShow');
    }
  });
}
