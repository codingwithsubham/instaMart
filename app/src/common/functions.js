export const handleLanguageChange = () => {
  if (localStorage.getItem('lang') === 'en' || !localStorage.getItem('lang')) {
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

export const uniq = (arr, track = new Set()) =>
arr.filter(({ _id }) => (track.has(_id) ? false : track.add(_id)));