$(document).ready(function () {
    $('#open').click(function (e) { 
        event.preventDefault();
        $('.background').addClass('show');
        $('.comments').addClass('show');
        $('#container-total').addClass('hidden');
    });
    $('.close').click(function (e) { 
        $('.background').removeClass('show');
        $('.comments').removeClass('show');
        $('#container-total').removeClass('hidden');
    });
    $('.background').click(function (e) { 
        $('.background').removeClass('show');
        $('.comments').removeClass('show');
        $('#container-total').removeClass('hidden');
    });
});