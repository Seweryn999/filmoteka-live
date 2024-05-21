const Loader = {
  show() {
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.style.display = 'block';
    }
  },
  hide() {
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.style.display = 'none';
    }
  },
};

export default Loader;
