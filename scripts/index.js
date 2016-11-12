$(document).ready(function () {
	
	var image_path = '../imgs/'
	var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
	var index = 0

	$('.gallery__arrow').click(function () {
		if ($(this)[0].classList[1] ==  'gallery__arrow--back') {
			if (index <= 0) {
				index = images.length -1
			} else {
				index -= 1
			}
		} else {
			if (index >= images.length -1) {
				index = 0
			} else {
				index += 1
			}
		}
		$('.gallery__img').attr("src", image_path + images[index])
	})

	$('.nav-bar__item').click(function() {
		$(this).toggleClass($(this)[0].classList[0] + '--active')
	})

	// function showSection() {
	// 	if ('')
	// }
})