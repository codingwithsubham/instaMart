//get lang data
function readCookie(name) {
  var c = document?.cookie?.split('; '),
    cookies = {},
    i,
    C;
  for (i = c?.length - 1; i >= 0; i--) {
    C = c[i]?.split('=');
    cookies[C[0]] = C[1];
  }
  return cookies[name];
}

function translationCallback() {
  // This function needs to be called when Google translates this web page.
  var currentValue = document.getElementById('translationDetector').innerHTML;
  if (currentValue && currentValue.indexOf(origValue) < 0) {
    origValue = currentValue;
    if (readCookie('googtrans') === '/en/bn') {
      if (localStorage.getItem('lang') !== 'bn') {
        localStorage.setItem('lang', 'bn');
        window.dispatchEvent(new Event('storage'));
      }
    } else {
      if (localStorage.getItem('lang') !== 'en') {
        localStorage.setItem('lang', 'en');
        window.dispatchEvent(new Event('storage'));
      }
    }
  }
}

const googleTranslateElementInit = () => {
  new window.google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      includedLanguages: 'en,bn',
      autoDisplay: false,
    },
    'google_translate_element'
  );
};

var origValue = document.getElementById('translationDetector').innerHTML;
document
  .getElementById('translationDetector')
  .addEventListener('DOMSubtreeModified', translationCallback, false);


  var addScript = document.createElement('script');
  addScript.setAttribute(
    'src',
    '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
  );
  document.body.appendChild(addScript);
  window.googleTranslateElementInit = googleTranslateElementInit;