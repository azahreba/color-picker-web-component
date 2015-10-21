;(function(){
  "use strict";

  var importDocument = document.currentScript.ownerDocument;

  // Define and register <color-picker> that uses Shadow DOM.
  var colorPickerProto = Object.create(HTMLElement.prototype);
  var colorPickerTemplate = importDocument.querySelector('template').content;

    colorPickerProto.createdCallback = function () {
      var root = this.createShadowRoot();
      root.appendChild(colorPickerTemplate);
      //colorPickerTemplate.content.cloneNode(true);
    };

    document.registerElement('color-picker', { prototype: colorPickerProto });

  var $enterButton = colorPickerTemplate.querySelector('#_cp_enter_button'),
      $enterInput = colorPickerTemplate.querySelector('#_cp_enter_input'),
      $selectedColorContainer = colorPickerTemplate.querySelector('#_cp_selected_color'),
      $selectedHex = colorPickerTemplate.querySelector('#_cp_selected-hex'),
      $selectedRgb = colorPickerTemplate.querySelector('#_cp_selected-rgb');

  $enterButton.addEventListener('click', handleEnter);

  function handleEnter(e) {
    var colorHexText = $enterInput.value,
        colorRGB;

    if (colorHexText.length > 2) {
      if (colorHexText.length < 6) {
        colorHexText = colorHexText.substr(0, 3) + colorHexText.substr(0, 3);
      }

      colorRGB = hexToRgb(colorHexText);

      $selectedColorContainer.style.background = $selectedHex.innerText = '#' + colorHexText;
      $selectedRgb.innerText = `rgb(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b})`;
    }
  }

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

})();
