const studentsModal = document.querySelector('[data-students-modal]');
const students = document.querySelector('[students-modal-open');
const closeStudentsBtn = document.querySelector('[students-modal-close]');

students.addEventListener('click', toggleStudentsModal);
// closeStudentsBtn.addEventListener('click', toggleStudentsModal);
studentsModal.addEventListener('click', toggleStudentsModal);
document.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape' && !studentsModal.classList.contains('is-hidden')) {
    toggleStudentsModal();
  }
});

function toggleStudentsModal() {
  studentsModal.classList.toggle('is-hidden');
}
