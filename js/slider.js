$(function(){

    var delay = 3000
    var indexAtual = 0
    var amt = $('.sobre-autor').length;

    initSlider();
    autoPlay()

    function initSlider(){
        
        var sizeContainer = 100 * amt;
        var sizeBoxSingle = 100 / amt
        $('.sobre-autor').css('width', sizeBoxSingle+'%');
        $('.scroll-wraper').css('width', sizeContainer +'%');

        for(var i = 0; i < amt; i++){
            if(i == 0)
                $('.slider-bullets').append('<span style = "background-color: rgb(110,110,110);"></span>')
            else
                $('.slider-bullets').append('<span></span>')
                
        }
    }

    function autoPlay(){
        setInterval(function(){
            
           
            if(indexAtual == amt){
                indexAtual = 0
            }
            goToSlider(indexAtual)
            indexAtual++
        }, delay)
    }

    function goToSlider(indexAtual){
        var offSet = $('.sobre-autor').eq(indexAtual).offset().left - $('.scroll-wraper').offset().left
        $('.scroll').animate({'scrollLeft':offSet})

        $('.slider-bullets span').eq(indexAtual).css('background-color', 'rgb(110,110,110)')
        $('.slider-bullets span').eq(indexAtual-1).css('background-color', 'rgb(170,170,170)')
    }

    $(window).resize(function(){
        $('.scroll').stop().animate({'scrollLeft':0})
    })

})