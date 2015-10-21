;(function(){
  "use strict";

  var importDocument = document.currentScript.ownerDocument;

  // Define and register <color-picker> that uses Shadow DOM.
  var colorPickerProto = Object.create(HTMLElement.prototype);
  var colorPickerTemplate = importDocument.querySelector('template');

    colorPickerProto.createdCallback = function () {
      var root = this.createShadowRoot();
      root.appendChild(colorPickerTemplate.content);
        //colorPickerTemplate.content.cloneNode(true);
    };

    document.registerElement('color-picker', { prototype: colorPickerProto });
})();
