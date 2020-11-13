// let button = document.getElementById('test_a');
// let click = document.getElementById('click')
// for(let i = 0;i<7;i++){

// }
function openbox(id) {
  var all = document.querySelectorAll(".block-of-text");
  for (var i = 0; i < all.length; i++) {
    if (all[i].id == id) {
      all[i].style.display = (all[i].style.display == 'none')? 'block' : 'none';
    } else {
      all[i].style.display = 'none';
    }
  }
}
function flyToElement(flyer, flyingTo) {
    var $func = $(this);
    var divider = 3;
    var flyerClone = $(flyer).clone();
    $(flyerClone).css({position: 'absolute', top: $(flyer).offset().top + "px", left: $(flyer).offset().left + "px", opacity: 1, 'z-index': 1000});
    $('body').append($(flyerClone));
    var gotoX = $(flyingTo).offset().left + ($(flyingTo).width() / 2) - ($(flyer).width()/divider)/2;
    var gotoY = $(flyingTo).offset().top + ($(flyingTo).height() / 2) - ($(flyer).height()/divider)/2;
     
    $(flyerClone).animate({
        opacity: 0.4,
        left: gotoX,
        top: gotoY,
        width: $(flyer).width()/divider,
        height: $(flyer).height()/divider
    }, 700,
    function () {
        $(flyingTo).fadeOut('fast', function () {
            $(flyingTo).fadeIn('fast', function () {
                $(flyerClone).fadeOut('fast', function () {
                    $(flyerClone).remove();
                });
            });
        });
    });
}
const animItems = document.querySelectorAll('._anim-items');

// if(animItems.length > 0) {
// 	window.addEventListener('scroll', animOnScroll);
// 	function animOnScroll(params){
// 		for(let index = 0; index < animItems.length; index++){
// 			const animItem = animItems[index];
// 			const animItemHeight = animItem.offsetHeight;
// 			const animItemOffset = offset(animItem).top;
// 			const animStart = 4;

// 			let animItemPoint = window.innerHeight - animItemHeight/animStart;
// 			if(animItemHeight > window.innerHeight) {
// 				animItemPoint = window.innerHeight - window.innerHeight / animStart;

// 			}
// 			if ((pageYoffset > animItemoffset - animItemPoint)&& pageYoffset < (animItemoffset + animItemHeight)){
// 				animItem.classList.add('_active');
// 			} else {
// 				animItem.classList.remove('_active')
// 			}
// 		}
// 	}
// 	function offset(el){
// 		const rect = el.getBoundClientRect(),
// 		scrollLeft = window.pageXoffset || document.documentElement.scrollLeft,
// 		scrollTop = window.pageYoffset || document.documentElement.scrollTop,
// 		return{top: rect.top + scrollTop, left: rect.left + scrollLeft }

// 	}
// }



