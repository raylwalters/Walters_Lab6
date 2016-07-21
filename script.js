$(function(){

//prompt("Enter a temperature you want to convert");
  //prompt("Do you want to convert to Fahrenheit(F) or Celsius(C)");

$("#button").on("click", function(){
// function convertTemp(temp, unit){
	var $temp = $("input#temp").val(); 
var $unit = $("input#unit").val();
console.log($temp);
console.log($unit);
// $unit = $unit.val($(this).val().toUpperCase());
	if($unit === "C" || $unit === "c"){
		$temp = parseInt((($temp - 32)*5)/9);
		$("#output").append("Your temperature in Celsius is " + $temp + " " + $unit);
	}
	else if($unit === "F" || $unit === "f"){
		$temp = parseInt((($temp * 9)/5)+32);
		$("#output").append("Your temperature in Fahrenheit is " + $temp + " " + $unit);
	}
	else{
		$("#output").append("You did not enter a valid unit");
		
	}
// }
});



});

