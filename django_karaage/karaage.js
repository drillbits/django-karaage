;(function(module, moduleName, global) {
  global[moduleName] = module;
})((function(global, undefined) {
  var karaage = {
    image_url: 'https://dl.dropbox.com/u/28743389/karaage.jpg',

    _main: function() {
      var image_url = karaage.image_url,
          targets = karaage.detectTargets(),
          elem, i;

      if (targets.length == 0) {
        targets.push(document.body);
      }

      for (i=0;i<targets.length;i++) {
        elem = $('<div>').attr('style', 'zIndex:9999').html(
          '<div style="'
          + 'position:relative;'
          + 'border:solid 1px silver;'
          + 'background-color:#CCCCCC;'
          + 'height:192px;'
          + 'background-image:url(' + image_url + ');'
          + 'background-position:left top;'
          + 'background-repeat:repeat;'
          + 'margin-bottom: 0.5em !important;"></div>'
        );

        $(targets[i]).prepend(elem);
      }
    },

    /* inspired from Jimmy Wales Chrome Extension */
    detectTargets: function() {
      var bodyRect = document.body.getBoundingClientRect(),
          ptn = /(main|body|center|articles|columns|content)/i,
          targets = [];

      $('div').each(function() {
        var self = this,
            rect = self.getBoundingClientRect(),
            principal = false;

        if (self.id && ptn.test(self.id)) {
          principal = true;
        }
        if (self.className && ptn.test(self.className)) {
          principal = true;
        }

        if (principal
            && rect.height <= bodyRect.height
            && rect.width <= bodyRect.width
            // && rect.width > 200
            // && rect.top < 400
          ) {
          targets.push(self);
        }
      });

      $('h1,h2,h3,h4,h5,h6,h7').each(function() {
        var self = this,
            rect = self.getBoundingClientRect();

        if (rect.height <= bodyRect.height
            && rect.width <= bodyRect.width
            // && rect.width > 500
            // && rect.top < 800
          ) {
          targets.push(self);
        }
      });

      return targets;
    },

    onScriptLoad: function(evt) {
      karaage._main();
    },

    loadJQuery: function() {
      var isOpera = typeof opera !== 'undefined' && opera.toString() === '[object Opera]',
          node = document.createElement('script');

      node.type = 'text/javascript';
      node.charset = 'utf-8';
      node.async = true;
      if (node.attachEvent &&
          !(node.attachEvent.toString && node.attachEvent.toString().indexOf('[native code') < 0) &&
          !isOpera) {
        node.attachEvent('onreadystatechange', karaage.onScriptLoad);
      } else {
        node.addEventListener('load', karaage.onScriptLoad, false);
      }
      node.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';

      document.body.appendChild(node);
    },

    main: function(image_url) {
      karaage.image_url = image_url;
      if (typeof jQuery === 'undefined') {
        karaage.loadJQuery();
      } else {
        karaage._main();
      }
    }
  };
  return karaage;
})(this), 'karaage', this);
