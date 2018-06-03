$(document).ready(function() {
			$(".article3-block-in img").hover(function() {
				if( $(this).attr('src') == 'img/'+$(this).attr('class')+'.png')
					$(this).attr('src', 'img/'+$(this).attr('class')+'-active.png');
				else 
					$(this).attr('src', 'img/'+$(this).attr('class')+'.png');
			}
			);
});