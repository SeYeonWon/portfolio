var $slide = $('.slide'),
    $slideGroup = $('.slide-group'),
    $bullet = $('.bullet');

var slidesTotal = ($slide.length - 1),
    current = 0,
    isAutoSliding = true;

$bullet.first().addClass('current');

var clickSlide = function() {
    // Stop auto sliding
    window.clearInterval(autoSlide);
    isAutoSliding = false;

    var slideIndex = $bullet.index($(this));
    updateIndex(slideIndex);
};

var updateIndex = function(currentSlide) {
    if (isAutoSliding) {
        if (current === slidesTotal) {
            current = 0;
        } else {
            current++;
        }
    } else {
        current = currentSlide;
    }

    $bullet.removeClass('current');
    $bullet.eq(current).addClass('current');

    transition(current);
};

var transition = function(slidePosition) {
    $slideGroup.animate({
        'top': '-' + slidePosition + '00%'
        // 만약 슬라이드가 수평으로 배열되어 있다면 'left' 속성을 사용하세요:
        // 'left': '-' + slidePosition + '00%'
    });
};

$bullet.on('click', clickSlide);

// autoSlide를 설정할 때 updateIndex에 현재 슬라이드 인덱스를 전달하지 않으므로 새 함수를 만들어야 합니다
var autoSlide = window.setInterval(function() {
    updateIndex(current);
}, 2000);
