var redCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
var blueCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
var yellowCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
var greenCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
var computerNumber = Math.floor(Math.random() * (120 - 19)) + 19;
var sum = 0;
var win = 0;
var loose = 0;

$(document).ready(function(){
    $("#number").text(computerNumber);

    $("img").on("click" , function(){
        var input = $(this).attr("value");
        console.log(input);
        if (input == 'redCrystal'){
            sum += redCrystal;
            $("#yourNumber").text(sum);
        }
        else {
            sum += greenCrystal;
            $("#yourNumber").text(sum);
        }

    // });

    // $("img#blue").on("click" , function(){
    //     sum += blueCrystal;
    //     $("#yourNumber").text(sum);

    // });

    // $("img#yellow").on("click" , function(){
    //     sum += yellowCrystal;
    //     $("#yourNumber").text(sum);

    // });

    // $("img#green").on("click" , function(){
    //     sum += greenCrystal;
    //     $("#yourNumber").text(sum);

    // });


    if (sum == computerNumber) {
        win++;
        $("#winTimes").text(win);
        redCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
        blueCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
        yellowCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
        greenCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
        computerNumber = Math.floor(Math.random() * (120 - 19)) + 19;
        console.log('win!!!!')
    }
    if (sum > computerNumber) {
        console.log(computerNumber)
        console.log(sum)
        
    }
});


});