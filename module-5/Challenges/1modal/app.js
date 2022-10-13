const modalContainer = document.querySelector('.modal');
const openModal = document.querySelector('.open-modal-btn');
const closeModal = document.querySelector('.close-modal-btn');

openModal.addEventListener('click', () => {
  modalContainer.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});



