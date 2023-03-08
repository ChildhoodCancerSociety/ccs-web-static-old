$(document).ready(function() {

	//Start State Dropdown
	var select = document.getElementById("state");
	  	
	var states = ["State","AL", "AK", "AZ","AR", "AS", "CA","CO", "CT", "DE","DC", "FL", "GA","GU", "HI", "ID","IL", "IN", "IA","KS", "KY", "LA","ME", "MD", "MA","MI", "MN", "MS","MO", "MT", "NE","NV", "NH", "NJ","NM", "NY", "NC", "ND", "MP","OH", "OK", "OR","PA", "PR", "RI","SC", "TN", "TX","TT", "UT", "VT","VA", "VI", "WA","WV", "WI", "WY"];

	for (var i=0; i <= states.length; i++) {
		var opt = states[i];
	    var el = document.createElement("option");
	    el.textContent = opt;
	    el.value = opt;
	    select.appendChild(el);
	}
	//End State Dropdown

	let firstButtonClicked = false
	let secondButtonClicked = false

	const form = document.getElementById("custForm");

	paymentStart();
	progress();
	amountButtonClicked();

	$("#information").hide();
	$("#finish").hide();

	$('#back').click(function() {
		$("#information").hide();
		$("#firstButtons").show();

		document.getElementById('Donate').style.height = "470px"

		regress();
	});

	$('#backPayment').click(function() {
		paymentStart();
		regress();
	});
    
	$('#donateNow').click(function() {	
		if(firstButtonClicked != false && secondButtonClicked != false){
			$("#information").show();
			$("#firstButtons").hide();

			paymentStart();
			progress();

			document.getElementById('Donate').style.height = "550px"
		} 
	});

	$('#next').click(function() {
		validatePayment();
	});

	amounts.addEventListener('click',()=>{
		firstButtonClicked = true
	})

	billing.addEventListener('click',()=>{
		secondButtonClicked = true
	})

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		validateDonateBtn();
	});

	$('#thumbsUp').click(function() {	

		$("#information").hide();
		$("#finish").hide();

		$("#firstButtons").show();

		firstButtonClicked = false
		secondButtonClicked = false

		buttonInitalColor(10);
		buttonInitalColor(25);
		buttonInitalColor(50);
		buttonInitalColor(100);
		buttonInitalColor(500);
		buttonInitalColor(1000);
		buttonInitalColor('customDollarAmount');
		document.getElementById('customDollarAmount').value = '';

		buttonBilledInitalColor('monthly');
		buttonBilledInitalColor('once');

		regress();
		regress();
		regress();
	});
	
	function paymentStart(){
		$("#contact").hide();
		$("#contactButtons").hide();
		$("#payment").show();
		$("#paymentButtons").show();
	}

	function validatePayment() {
	   	var $card_name = $("#card_name");  
	   	var $credit = $("#credit_card") ;
	   	var $cvc = $("#cvc");
	   	var month = document.forms["custForm"]["expiration_month"].value; 
	   	var year = document.forms["custForm"]["expiration_year"].value;
	   	var getCardType = document.querySelector( 'input[name="payment_method"]:checked');   

	   	let paymentErrors = 0;

	   	let maxLength = 20;
	   	let minLength = 2;
	   
	   	let cvcMinLength = 3;
	   	let cvcMaxLength = 4;

	   	let creditMaxLength = 16;
	  	let creditMinLength = 13

	    $(".error").empty();

		//First Name
	    if($card_name.val().length < minLength || containsNumbers($card_name.val()) || containsSpecialChar($card_name.val())) {
	        $("#card_name").css("background-color", "#FDD");
	        paymentErrors +=1;
	    } else {
			$("#card_name").css("background-color", "transparent");
		} 

		//Card Number
		if($credit.val().length < creditMinLength || $credit.val().length > creditMaxLength || containsSpecialChar($credit.val()) || containsLetters($credit.val())) {
	        $("#credit_card").css("background-color", "#FDD");
	        paymentErrors += 1;
		} else {
			$("#credit_card").css("background-color", "transparent");
		} 

		//CVC
		if($cvc.val().length < cvcMinLength || $cvc.val().length > cvcMaxLength || containsSpecialChar($cvc.val()) || containsLetters($cvc.val())) {
	        $("#cvc").css("background-color", "#FDD");
	        paymentErrors += 1;
		} else {
			$("#cvc").css("background-color", "transparent");
		} 

		//Expiration Month
		if (month == "Not Available"){
	   		$("#expiration_month").css("background-color", "#FDD");
	   		paymentErrors += 1;
		} else {
			$("#expiration_month").css("background-color", "transparent");
		} 

		//Expiration Year
		if (year == "Not Available"){
	   		$("#expiration_year").css("background-color", "#FDD");
	   		paymentErrors += 1;
		} else {
			$("#expiration_year").css("background-color", "transparent");
		} 

		if (paymentErrors == 0) {
			$("#contact").show();
			$("#contactButtons").show();

			$("#payment").hide();
			$("#paymentButtons").hide();
			$("#firstButtons").hide();

			progress();
		}
	}

	function validateDonateBtn() {

		var emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i ;

	    var $first_name = $("#first_name");  
	   	var $last_name = $("#last_name");    
	   	var $phone = $("#phone");
		var $email = $("#email_address");
		var $city = $("#city");  
	   	var $streetOne = $("#street_address_one"); 
	   	var $aptNumber = $("#apt_number"); 
	   	var $state = document.forms["custForm"]["state"].value; 
	   	var $zip = $("#zip_code");
	   	var $card_name = $("#card_name");  
	   	var $credit = $("#credit_card") ;
	   	var $cvc = $("#cvc");
	   	var month = document.forms["custForm"]["expiration_month"].value; 
	   	var year = document.forms["custForm"]["expiration_year"].value;
	   	var getCardType = document.querySelector( 'input[name="payment_method"]:checked');   

	   	let errors = 0;

	   	let maxLength = 20;
	   	let minLength = 2;
	   
	   	let zipLength = 5;
	   	let cvcLength = 3;
	   	let phoneLength = 10;

	   	let creditMaxLength = 16;
	  	let creditMinLength = 13

	    $(".error").empty();

	    //First Name
	    if($first_name.val().length < minLength || containsNumbers($first_name.val()) || containsSpecialChar($first_name.val())) {
	        $("#first_name").css("background-color", "#FDD");
			errors += 1;	
	    } else {
			$("#first_name").css("background-color", "transparent");
		} 
	    
	    //Last Name
	    if($last_name.val().length < minLength || containsNumbers($last_name.val()) || containsSpecialChar($last_name.val()) ) {
	        $("#last_name").css("background-color", "#FDD");
			errors += 1;
		} else {
			$("#last_name").css("background-color", "transparent");
		} 

		//Phone
		if($phone.val().length != phoneLength || containsSpecialChar($phone.val()) || containsLetters($phone.val())) {
	        $("#phone").css("background-color", "#FDD");
	        errors += 1;
		} else {
			$("#phone").css("background-color", "transparent");
		}

		if(!emailPattern.test($email.val())) {
	        $("#email_address").css("background-color", "#FDD");
			errors += 1;
		} else {
			$("#email_address").css("background-color", "transparent");
		} 

	    //City
		if($city.val().length < minLength || containsNumbers($city.val()) || containsSpecialChar($city.val())) {
	        $("#city").css("background-color", "#FDD");
			errors += 1;
		} else {
			$("#city").css("background-color", "transparent");
		} 

		//Street Address One
		if($streetOne.val().length < minLength || containsSpecialChar($streetOne.val())) {
	        $("#street_address_one").css("background-color", "#FDD");
			errors += 1;
		} else {
			$("#street_address_one").css("background-color", "transparent");
		} 

		//State
		if ($state == "State"){
	   		$("#state").css("background-color", "#FDD");
			errors += 1;
		} else {
			$("#state").css("background-color", "transparent");
		} 

	    //Zip Code
		if($zip.val().length != zipLength|| containsSpecialChar($zip.val()) || containsLetters($zip.val())) {
	        $("#zip_code").css("background-color", "#FDD");
			errors += 1;
		} else {
			$("#zip_code").css("background-color", "transparent");
		} 

		//Errors
		if (errors == 0) {
			$("#information").hide();
			progress();
			$("#finish").show();
			document.getElementById('Donate').style.height = "470px";
			
		} else {
			event.preventDefault();	
		}
	}

	function containsNumbers(str) {
	  return /[0-9]/.test(str);
	}

	function containsSpecialChar(str) {
	  return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str);
	}

	function containsLetters(str) {  
		return /[A-Za-z]/.test(str);  
	}

	function progress() {
		var $bar = $(".ProgressBar");
		if ($bar.children(".is-current").length > 0) {
		    $bar.children(".is-current").removeClass("is-current").addClass("is-complete").next().addClass("is-current");
		} else {
		    $bar.children().first().addClass("is-current");
		}
	}

	function regress() {
		var $bar = $(".ProgressBar");
	    if ($bar.children(".is-current").length > 0) {
	    	$bar.children(".is-current").removeClass("is-current").prev().removeClass("is-complete").addClass("is-current");
	  	} else {
	    	$bar.children(".is-complete").last().removeClass("is-complete").addClass("is-current");
	  	}
	}

	function buttonNewColor(btn){
		button = document.getElementById(btn);
		button.style.backgroundColor = "#3D926A"
		button.style.color = 'white';
	}

	function buttonInitalColor(btn){
		button = document.getElementById(btn);
		button.style.backgroundColor = 'white';
		button.style.color = 'black';
	}

	function buttonBilledInitalColor(btn){
		button = document.getElementById(btn);
		button.style.backgroundColor = '#52B788';
		button.style.color = 'white';
	}


	function amountButtonClicked(){
		$('#10').click(function() {
			buttonNewColor(10);
			buttonInitalColor(25);
			buttonInitalColor(50);
			buttonInitalColor(100);
			buttonInitalColor(500);
			buttonInitalColor(1000);
			buttonInitalColor('customDollarAmount');

			var price = document.getElementById('donationPrice');
			price.textContent = "$10" 

			document.getElementById('customDollarAmount').value = '';
		});		

		$('#25').click(function() {
			buttonInitalColor(10);
			buttonNewColor(25);
			buttonInitalColor(50);
			buttonInitalColor(100);
			buttonInitalColor(500);
			buttonInitalColor(1000);
			buttonInitalColor('customDollarAmount');

			var price = document.getElementById('donationPrice');
			price.textContent = "$25" 

			document.getElementById('customDollarAmount').value = '';
		});

		$('#50').click(function() {
			buttonInitalColor(10);
			buttonInitalColor(25);
			buttonNewColor(50);
			buttonInitalColor(100);
			buttonInitalColor(500);
			buttonInitalColor(1000);
			buttonInitalColor('customDollarAmount');

			var price = document.getElementById('donationPrice');
			price.textContent = "$50" 

			document.getElementById('customDollarAmount').value = '';
		});

		$('#100').click(function() {
			buttonInitalColor(10);
			buttonInitalColor(25);
			buttonInitalColor(50);
			buttonNewColor(100);
			buttonInitalColor(500);
			buttonInitalColor(1000);
			buttonInitalColor('customDollarAmount');

			var price = document.getElementById('donationPrice');
			price.textContent = "$100" 

			document.getElementById('customDollarAmount').value = '';
			document.getElementById('customDollarAmount').value = '';
		});

		$('#500').click(function() {
			buttonInitalColor(10);
			buttonInitalColor(25);
			buttonInitalColor(50);
			buttonInitalColor(100);
			buttonNewColor(500);
			buttonInitalColor(1000);
			buttonInitalColor('customDollarAmount');
			
			var price = document.getElementById('donationPrice');
			price.textContent = "$500" 

			document.getElementById('customDollarAmount').value = '';
		});

		$('#1000').click(function() {
			buttonInitalColor(10);
			buttonInitalColor(25);
			buttonInitalColor(50);
			buttonInitalColor(100);
			buttonInitalColor(500);
			buttonNewColor(1000);
			buttonInitalColor('customDollarAmount');

			var price = document.getElementById('donationPrice');
			price.textContent = "$1000" 

			document.getElementById('customDollarAmount').value = '';
		});


		$('#customDollarAmount').click(function() {
			buttonInitalColor(10);
			buttonInitalColor(25);
			buttonInitalColor(50);
			buttonInitalColor(100);
			buttonInitalColor(500);
			buttonInitalColor(1000);
			buttonNewColor('customDollarAmount');

			var amountInput = document.getElementById('customDollarAmount');
			var price = document.getElementById('donationPrice');

			amountInput.addEventListener('input', function(){
				price.textContent = "$" +amountInput.value;
			});
		});

		$('#once').click(function() {
			buttonBilledInitalColor('monthly');
			buttonNewColor('once');

			var period = document.getElementById('billAmount');
			period.textContent = "once" 
		});

		$('#monthly').click(function() {
			buttonBilledInitalColor('once');
			buttonNewColor('monthly');

			var period = document.getElementById('billAmount');
			period.textContent = "monthly" 
		});
	}

});