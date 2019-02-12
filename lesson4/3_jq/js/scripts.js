/* умный аналог window.onload */
$(function(){
    
    /* получение элементов */
    var jqInputs = $('.check');
    
    /* событие */
    jqInputs.on('click', function(){
        $(this).removeClass('err');
    });
    
    jqInputs.on('focus', function(){
        $(this).addClass('focus');
    });

    jqInputs.on('blur', function(){
        $(this).removeClass('focus');
    });
    
    jqInputs.addClass('some').addClass('some1').addClass('some2');
    
    $('.items .item').on('click', function(){
        $(this).fadeOut(1000, function(){
            $(this).fadeIn(1000);
        });
    });

});