$(function() {
  // code
  var elems = {
    d: $(".timer__value--days"),
    d_s: $("timer__unit--days"),
    h: $(".timer__value--hours"),
    h_s: $(".timer__unit--hours"),
    m: $(".timer__value--minutes"),
    m_s: $(".timer__unit--minutes"),
    s: $(".timer__value--seconds"),
    s_s: $(".timer__unit--seconds")
  };

  // время задаётся как timestamp в data-атрибуте 'data-time' в html-файле
  var t = new Timer(parseInt($(".timer").data("time")), function(data) {
    for (var k in elems) {
      elems[k].html(data[k]);
    }
  });

  t.start();
  t.render();

  $(".timer").addClass("timer-showed");
});
