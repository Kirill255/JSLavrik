// jQuery

$(function() {
  $(".fag-question").on("click", function(e) {
    // если элемент имеет атрибут data-isopen, то удалить атрибут и закрыть элемент, иначе поставить атрибут и открыть элемент
    if ($(this).attr("data-isopen")) {
      $(this)
        .removeAttr("data-isopen")
        .next(".fag-answer")
        .slideUp();
    } else {
      $(this)
        .attr("data-isopen", true)
        .next(".fag-answer")
        .slideDown();
    }
  });
});
