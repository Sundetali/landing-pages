$(document).ready(
    function () {
        $('.mob-nav').hide();
        $('.fa-bars-out').on('click', function () {
            $('.mob-nav').slideToggle(1000);
            return false;
        });
	}
);
