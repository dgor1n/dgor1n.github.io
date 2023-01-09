
$(document).ready(function(){
    var result = 0;

    $('#result').text(result);

    $( "#calculator input" ).change(function() {
        st = Number($(this).val());

        if ($(this).prop('checked') == true) {
            result = result + st;
        } else {
            result = result - st;
        }

        $('#result').text(result);
    });
});
