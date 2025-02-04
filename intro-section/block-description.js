const buttonSeeMore = document.getElementById('btn-see-more');
const hiddenText = document.getElementById('hidden-text')

buttonSeeMore?.addEventListener('click', () => {
   hiddenText?.classList.toggle('hidden');
   buttonSeeMore.textContent = hiddenText?.classList.contains('hidden') ? 'Ver más' : 'Ver menos';

});