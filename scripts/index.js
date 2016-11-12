$(document).ready(function () {
	
	var image_path = '../imgs/'
	var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
	var index = 0

	displaySection()

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

	$('.nav-bar__item').click(function(e) {
		$(this).toggleClass($(this)[0].classList[0] + '--active')
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
		    //Statements executed when the result of expression matches value2
		    break;
		  default:
			  hideSections()
			  showSection($('.title'))
		    //Statements executed when none of the values match the value of the expression
		    break;
		}
	}

	function hideSections() {
		$('.section').addClass('hide')
	}

	function showSection($section) {
		$section.removeClass('hide')
	}
})