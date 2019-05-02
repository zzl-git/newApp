var num = 0;
$('#qiehuan').click(function() {
	if (num == 0) {
		$('.qiehuan_box').show(100);
		num = 1;
		$(this).addClass('xuanzhuan')
		// console.log($(this).class)
	} else {
		$('.qiehuan_box').hide();
		num = 0;
		$(this).removeClass("xuanzhuan")
		// $(this).removeClass('xuanzhuan')
	}

})
console.log($('allBox'));
$('.allBox').mouseover(function() {
	$('.allBox').click(function() {
		$('.allBox_main').show();
	})
})
$('.allBox_main').mouseenter(function() {
	console.log('444')
	$('body').click(function() {
		console.log('555')
		$('.allBox_main').hide();
	})
})
