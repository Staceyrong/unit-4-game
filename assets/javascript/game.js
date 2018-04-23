var redCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
var blueCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
var yellowCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
var greenCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
var computerNumber = Math.floor(Math.random() * (120 - 19)) + 19;
var sum = 0;
var win = 0;
var loose = 0;

function reset(){
    computerNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    $("#number").text(computerNumber);
    redCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
    blueCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
    yellowCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
    greenCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
    sum = 0;
}

$(document).ready(function(){
    $("#number").text(computerNumber);

    $("img").on("click" , function(){
        var input = $(this).attr("id");
        console.log(input);
        if (input == "red"){
            sum += redCrystal;
            $("#yourNumber").text(sum);
        }
        else if (input == "blue"){
            sum += blueCrystal;
            $("#yourNumber").text(sum);
        }
        else if (input == "yellow"){
            sum += yellowCrystal;
            $("#yourNumber").text(sum);
        }
        else if (input == "green"){
            sum += greenCrystal;
            $("#yourNumber").text(sum);
        } 

    if (sum == computerNumber) {
        win++;
        $("#winTimes").text(win);
        reset();
        console.log('win!!!!')
    }
    if (sum > computerNumber) {
        loose++;
        $("#looseTimes").text(loose);
        reset();
        console.log(computerNumber)
        console.log(sum)    
    }
    });


});