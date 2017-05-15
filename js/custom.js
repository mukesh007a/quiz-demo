// JavaScript Document
$(document).ready(function () {
	// script for select active clor
$(":checkbox").on('click', function(){
	if($(this).is(":checked")) {
            $(this).closest('.blcok').addClass('selected');
	}
	else {
        $(this).closest('.blcok').removeClass('selected');
    }
});


// script for form validation
    $("form#quiz").submit(function (event) {
        event.preventDefault();
        var aler_msg = '0';
        $('.ques1 .checkbox').each(function () {
            aler_msg = '1';
            if ($('#' + $(this).find('[type=checkbox]').attr('id')).prop('checked') == true) {
                aler_msg = '0';
                return false;
            }
        });
        
        $('.ques2 .checkbox').each(function () {
            aler_msg = '1';
            if ($('#' + $(this).find('[type=checkbox]').attr('id')).prop('checked') == true) {
                aler_msg = '0';
                return false;
            }
        });
        
        $('.ques3 .checkbox').each(function () {
            aler_msg = '1';
            if ($('#' + $(this).find('[type=checkbox]').attr('id')).prop('checked') == true) {
                aler_msg = '0';
                return false;
            }
        });
        
        $('.ques4 .checkbox').each(function () {
            aler_msg = '1';
            if ($('#' + $(this).find('[type=checkbox]').attr('id')).prop('checked') == true) {
                aler_msg = '0';
                return false;
            }
        });
        if (aler_msg == '1') {
            alert('You have to select four question.');
            return false;
        }

        if (aler_msg == '0') {
            window.location.href = 'thanku.html';
        }


    });
});