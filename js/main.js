let $pt = $("#pt");
let $mouse = $("#mouse");
let scrollArea = document.getElementById('hero-scroll-area');

for (let ii = 1; ii <= 12; ii++) {
  let wp = new Waypoint({
    element: scrollArea,
    handler: function(direction) {
      $pt.css({
        'filter'         : 'blur(' + ii + 'px)',
        '-webkit-filter' : 'blur(' + ii + 'px)',
        '-moz-filter'    : 'blur(' + ii + 'px)',
        '-o-filter'      : 'blur(' + ii + 'px)',
        '-ms-filter'     : 'blur(' + ii + 'px)'
      });
    },
    offset: (Waypoint.viewportHeight() / 25 * (ii + 1) + 100) * -1
  })
}

let $iconsText = $('.intro__icons__text');
let $intro = $('.intro');
let slideTime = 1;
let introPlaced = false;
let titleWp = new Waypoint({
  element: $intro,
  handler: function(direction) {
    if (direction == "down" && !introPlaced) {
      $intro.addClass('intro--brand-showing');
    }
    introPlaced = true;
  },
  offset: $intro.height() / 2 + 100
})

let $iconLinks = $('.intro__icons-wrapper a');
console.log($iconLinks);
let introWp = new Waypoint({
  element: $intro, 
  handler: function(direction) {
    TweenMax.staggerTo($iconLinks, 2.5, {
      opacity: 1,
    }, 0.1);
    $iconsText.addClass('showing');
  },
  offset: $intro.height() / 2 - 200
})