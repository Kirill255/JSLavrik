(function($) {
  $.fn.equalHeights = function(settings) {
    // var defaults = {};

    // var options = $.extend(defaults, settings);

    var maxHeight = 0;

    this.each(function() {
      var elem = $(this); // один элемент '.fag'
      var items = elem.find(".item");
      items.each(function() {
        // var thisHeight = parseInt(elem.find("> div").outerHeight());
        var thisHeight = parseInt(
          $(this)
            .children()
            .outerHeight()
        );
        if (thisHeight > maxHeight) {
          maxHeight = thisHeight;
        }
      });

      items.css("min-height", maxHeight + "px");
    });

    return this;
  };
})(jQuery);
