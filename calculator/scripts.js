$(document).ready(function(){
    var result = 0;

    const sliders = new Map();

    $('input[type=checkbox]').change(function(){
        var name = $(this).prop('name');
        var rangeInput = $('input[type=range][name='+name+']');
        var rangeOutput = $('output[name='+name+']');

        var newValue = Number(rangeInput.val());

        if($(this).prop('checked') == true){
            rangeInput.prop('disabled', false);
            rangeOutput.text(newValue);
            rangeOutput.show();

            sliders.set(name, newValue);
            result += newValue;
        } else {
            rangeInput.prop('disabled', true);
            rangeOutput.hide();

            sliders.set(name, 0)
            result -= newValue;
        }

        $('#result').text(result);
        changeColor(result);
    });

    $('#calculator input[type=range]').change(function() {
        var name = $(this).prop('name');

        var newValue = Number($(this).val());
        var oldValue = Number(sliders.get(name));

        sliders.set(name, newValue);
        result += newValue - oldValue;

        $('#result').text(result);

        var resultInput = $('input[type=hidden][name='+name+']');
        var rangeOutput = $('output[name='+name+']');

        rangeOutput.text(newValue);
        resultInput.val(newValue);

        changeColor(result);
    });
});

function changeColor(result){
    console.log(1235);

    switch (true) {
        case (result <= 0):
            $('#result').css("color", "black");
            break;
        case (result < 5):
            $('#result').css("color", "green");
            break;
        case (result >= 5 && result <= 8):
            $('#result').css("color", "orange");
            break;
        case (result > 8):
            $('#result').css("color", "red");
            break;
    }
}