steal(
  'can',
  function(can) {
    return can.Component.extend({
      tag: 'home-app',
      template: can.view('./site/home/home.mustache'),
      scope: {
      },
      events: {
        'form submit': function(el, ev) {
          // Don't submit the form
          ev.preventDefault();
          return false;
        }
      }
    });
  }
);
