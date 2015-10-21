(function () {
  'use strict';

  var link = document.createElement('link');

  if ('import' in link) {
    link.rel = 'import';
    link.href = 'color-picker/color-picker.html';
    link.async = true;
    link.onload = (e) => {};
    link.onerror = (e) => {};
    document.head.appendChild(link);
  }

})();
