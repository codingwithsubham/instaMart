export const handleLanguageChange = () => {
  if (localStorage.getItem('lang') === 'en') {
    setCookie('googtrans', `/en/bn`, 1);
  } else {
    setCookie('googtrans', `/en/en`, 1);
  }
  window.location.reload();
};

function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}
