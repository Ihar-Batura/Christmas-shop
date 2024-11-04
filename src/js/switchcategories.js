const tabs = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((el) => el.classList.remove('active'));
    tab.classList.add('active');
    filterShowCards(tab.innerHTML);
  });
});

function filterShowCards(value) {
  const cards = document.querySelectorAll('.gift-card');

  cards.forEach((card) => card.classList.remove('notShow'));

  cards.forEach((card) => {
    const category = card.childNodes[1].childNodes[0].innerHTML.toLowerCase();
    if (value !== category && value !== 'all') {
      card.classList.add('notShow');
    }
  });
}
