
 // when the user clicks on #farrenhit_to_celcius
	$('#fahrenheit_to_celsius').on('click' , function () {

		// $('.error-message').show();

		//get the value of #temp and store it in a variable
		var temperatureValue = $('#temperature').val();
		// console.log('temp', temperatureValue);

		//convert that value to a number and update variable
 	 	var converTempIntoNumber = parseInt(temperatureValue,10);
		// console.log('converTempIntoNumber', converTempIntoNumber);

		var isNumber = /^[0-9]*$/;

		if(temperatureValue === '' || !isNumber.test(temperatureValue) ) {
			$('.error-message').show();
		} else{
			$('.error-message').hide();
		}
		//convert f to c and store result in variable
		var temperatureintoCelsius = (converTempIntoNumber-32) / 1.8;
		// console.log('temperatureintoCelsius', temperatureintoCelsius);


		//display bACK TO USER in #result
		$('#result').html(temperatureValue + "F <sup> o </sup>  = "  +  temperatureintoCelsius + " C <sup> o </sup>");

		

		//$('body').css('background-color' , 'red');
			if(temperatureintoCelsius > 10) {
 				$('body').css('background-color' , '#FF6600');
 			}
 			else {
 				$('body').css('background-color' , '#0099FF');
 			}
 });
  
// when the user clicks on #celsius_to_Fahrenheit
 $('#celsius_to_fahrenheit').on('click', function () {

 		//get the value of #temp and store it in a variable
 		var temperatureValue = $('#temperature').val();


 		//convert that value to a number and update variable
 		var converTempIntoNumber = parseInt(temperatureValue,10);

 		//convert c to f and store result in variable
 		var temperatureintoFahrenheit = (1.8 * converTempIntoNumber + 32);

 		//display bACK TO USER in #result
 		if(temperatureValue == "")	{
 			$('.error').fadeIn(1000);
 		}
 		
 		$('#result').html(temperatureValue + " C <sup> o </sup> = " + temperatureintoFahrenheit + " F <sup> o </sup> ");
 		
 		if(temperatureintoFahrenheit>10) {
 			$('body').css('background-color' , '#0099FF');
 		}
 		else {
 			$('body').css('background-color' , '#FF6600');
 		}
});






