$(document).ready(function () {
	
	var image_path = '../imgs/'
	var images = ['1.jpg', '2.jpg', '3.jpg']
	var index = 0

	displaySection()
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

	function displaySection(menuText) {
		switch (menuText) {
		  case 'Music':
		    showSection($('.music'))
		    break;
		  case 'Photos':
		    showSection($('.gallery'))
		    break;
		  default:
			hideSections()
			showSection($('.title'))
		    break;
		}
	}

	function changeImageCount(index, image_count) {
		$('.gallery__img-count > span').text(index + 1 + '/' + image_count)
	}

	function hideSections() {
		$('.section').addClass('hide')
	}

	function showSection($section) {
		$section.removeClass('hide')
	}
})