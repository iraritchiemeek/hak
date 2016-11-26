$(document).ready(function () {
	
	var image_path = '../imgs/'
	var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg']
	var index = 0

	changeImageCount(index, images.length)

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
		changeImageCount(index, images.length)
	})

	$('.nav-bar__item').click(function(e) {
		$('.nav-bar__item').removeClass('nav-bar__item--active')
		$(this).addClass($(this)[0].classList[0] + '--active')
		hideSections()
		displaySection(e.currentTarget.textContent)
	})

	function changeImageCount(index, image_count) {
		$('.gallery__img-count > span').text(index + 1 + '/' + image_count)
	}
})