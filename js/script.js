const form = document.querySelector('#generate-form');
const qr = document.querySelector('#qrcode');
const spinner = document.querySelector('#spinner');

const onGenerateSubmit = e => {
  e.preventDefault();

  clearUI();

  const url = document.querySelector('#url').value;
  const size = document.querySelector('#size').value;

  if (url === '') {
    alert('Please enter a URL');
  } else {
    showSpinner();

    setTimeout(() => {
      hideSpinner();

      generateQRCode(url, size);
    }, 1000);
  }
};

const generateQRCode = (url, size) => {
  const qrcode = new QRCode('qrcode', {
    text: url,
    width: size,
    height: size,
  });
};

const showSpinner = () => {
  spinner.style.display = 'block';
};

const hideSpinner = () => {
  spinner.style.display = 'none';
};

const clearUI = () => {
  qr.innerHTML = '';
};

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);
