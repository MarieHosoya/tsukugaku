$(function() {
    $('.l-ham').click(function() {
        $(this).toggleClass('l-active');
 
        if ($(this).hasClass('l-active')) {
            $('.l-gnav').addClass('l-active');
        } else {
            $('.l-gnav').removeClass('l-active');
        }
    });


	/*$(window)
    .on('scroll resize', function () {
        // ウインドウのスクロール量取得
        var windowScrollTop = $(window).scrollTop();
        // ウインドウの高さ取得
        var windowInnerHeight = window.innerHeight;

        var $video = $('video');
        // videoがページの最上部からどの位置にあるか取得
        var videoTop = $('video').offset().top;
        // videoの高さ取得
        var videoHeight = $('video').innerHeight();

        // videoが停止している、かつvideoが画面内に入ってきた場合、再生処理
        if ($video[0].paused && (windowScrollTop + windowInnerHeight > videoTop)) {
            $video[0].play();
        }

        // videoが再生中、かつ画面外に出た場合、停止処理
        if (!$video[0].paused && ((windowScrollTop + windowInnerHeight < videoTop) || (windowScrollTop > videoTop + videoHeight))) {
            $video[0].pause();
        }
    })
    .trigger('scroll');*/
	

	setTimeout(function(){
		$('body').removeClass('noScroll');
	}, 18000);
	setTimeout(function(){
		$('.block02').css('opacity','1');
	}, 19000);

});



var windowWidth = $(window).width();
var windowSm = 768;
if (windowWidth <= windowSm) {
	setTimeout(function(){
		$('#section01').addClass('bg-blue');
		$('#section01 .mv-content').addClass('bg-blue');
	}, 16000);
}
