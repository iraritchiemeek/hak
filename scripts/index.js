$(document).ready(function () {
	
	var image_path = '../imgs/'
	var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg']
	var index = 0

	$('.gallery__arrow').click(function () {
		if ($(this)[0].classList[1] ==  'gallery__arrow--back') {
			index -= 1
		} else {
			index += 1
		}
		if (index >= images.length -1) {
			index = 0
		} else if (index <= 0) {
			index = images.length -1
		}
		$('.gallery__img').attr("src", image_path + images[index])
	})

})