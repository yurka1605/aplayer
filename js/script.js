$( document ).ready(function() {

});

$(window).on('scroll', function() {
    // $(window).scrollTop() > $('.main').offset().top ? 
    //     $('.fixed-form').addClass('show') : $('.fixed-form').removeClass('show');
});

/** ======================== User actions ========================== **/
// scrool top
$('.footer .banner__further span,.footer .further__arrow').on('click', function(e) {
    e.preventDefault();
    $('body, html').animate({ 
        scrollTop: 0,
    }, 300, 'swing');
})
// open menu
// $('.header__menu_open').on('click', function() {
//     $('.header__top').addClass('orange');
//     $('.header__menu').addClass('active');
//     if ($(window).width() < 1200) {
//         $('.header-container').addClass('fullfield');
//     } 
// });
// close menu
// $('.close-btn').on('click', function() {
//     $('.header__top').removeClass('orange');
//     $('.header__menu').removeClass('active');
//     if ($(window).width() < 1200) {
//         $('.header-container').removeClass('fullfield');
//     } 
// });

// click research control
$('.arrows__item').on('click', function() {
    changeSlide('research', this);
});
$('.research .point').on('click', function() {
    const num = $(this).data('num');
    changeSlide('research', false, num);
});


// card show full
$('.career__text > p > span').on('click', function() {
    $(this).parent().next('p').toggleClass('full');
    $(this).toggleClass('more');
});
/** ======================== END:User actions ========================== **/


/** ======================== Functions ========================== **/
// main change slide
function changeSlide(selector, current = false, currentNum = NaN) {
    var firtsSlide = $(`.${ selector }__slider_item:first-child`);
    var num = $(`.${ selector }__slider_item.active`).data('num');
    var lastNum = $(`.${ selector }__slider_item.last`).data('num');
    $(`.${ selector }__slider_item`).each((i,el) => {
        $(el).removeClass('active');
        $(`.${ selector } .point:nth-child(${ i + 1 })`).removeClass('active');
    });
    if (current != false) {
        if ($(current).hasClass('left')) {
            num = num === 1 ? num : num - 1;
        } else {
            num = num === lastNum ? lastNum : num + 1;
        }
    } else {
        num = currentNum;
    }
    var left = firtsSlide.width() * (num - 1) + 40 * (num - 1);
    $(`.${ selector }__slider_item:nth-child(${ num })`).addClass('active');
    $(`.${ selector } .point:nth-child(${ num })`).addClass('active');
    $( firtsSlide ).animate({ marginLeft: `${ - left }px`}, 200);
}
/** ======================== END:Functions ========================== **/