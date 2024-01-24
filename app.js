$(document).ready(function() {
    let input = $('#input');
    let resultPer = $('#result-per');
    let inputPer1 = $('#input-per-1');
    let inputPer2 = $('#input-per-2');

    // Click event for number and operator buttons
    $('.calculator-buttons button').click(function() {
        let value = $(this).val();
        input.val(input.val() + value);
    });

    // Click event for AC button (clear)
    $('#clear').click(function() {
        input.val('');
    });

    // Click event for = button (equal)
    $('#equal').click(function() {
        try {
            // We use eval to calculate the result
            let result = eval(input.val());
            
            // Display the result in the input field
            input.val(result);
        } catch (error) {
            // Handle any errors for showing  error if any occurs
            input.val('Error');
        }
    });

    // Click event for % calculation
    $('#equal-per').click(function() {
        let num1 = parseFloat(inputPer1.val());
        let num2 = parseFloat(inputPer2.val());
        let percentage = (num1 * num2) / 100;
        resultPer.text(percentage);
    });
});


// **Note ye pharefloat jo hai ye string ko number me convert karta hai like "31" ko 31 me 
// **val() function value get karta hai input se