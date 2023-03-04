'use strict';

$(document).ready(function(){
    $('ul').on('click', 'img', function(){
        var imgURL = $(this).attr('src');
        var effect = $('#imgEffect').val();
        var duration = $('#imgDuration').val() * 1000;

        if(effect == 'Fade') {
            $('#mainImg').fadeOut(duration, function(){
                $(this).attr('src', imgURL);
            }).fadeIn(duration);
        }else{
            $('#mainImg').slideUp(duration, function(){
                $(this).attr('src', imgURL);
            }).slideDown(duration);
        }
    })
   
})