const form = document.querySelector('#generate-form');
const qr = document.querySelector('#qrcode');
const spinner = document.querySelector('#spinner');

const onGenerateSubmit = e => {
  e.preventDefault();

  const url = document.querySelector('#url').value;
  const size = document.querySelector('#size').value;

  if (url === '') {
    alert('Please enter a URL');
  } else {
    showSpinner();

    setTimeout(() => {
      hideSpinner();
    }, 1000);
  }
};

const showSpinner = () => {
  spinner.style.display = 'block';
};

const hideSpinner = () => {
  spinner.style.display = 'none';
};

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);
