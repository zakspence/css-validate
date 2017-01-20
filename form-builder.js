var stateList = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY" ];

var loanType = ["Personal", "Commercial", "Real estate", "Mortgage" ];

//This function fills an element with children. Arg 1 is the id of the element to be filled, arg 2 is the type of element to be added, arg 3 is the data with which we fill the created element. Parameter 'data' is assumed to be an array.
var fillElement = function(eId, eType, data ) {
	
	var parent = document.getElementById(eId );
	
	for(var i= 0; i < data.length; i++ ){
		var now= data[i ];
		// console.log(now );
		var appendage= document.createElement(eType );
		// console.log(appendage );
		appendage.value= now
		appendage.text= now
		// console.log(appendage.value, appendage.text );
		parent.appendChild(appendage );
		// console.log(parent.childNodes );
	}
}


fillElement("state-selector", "OPTION", stateList );
fillElement("loan-selector", "OPTION", loanType );

//I put elements which colors I want to change in 'validating', then make it an ARRAY so I can do ARRAY things. HARRAY!
var validating = document.getElementsByClassName("validate");
validating = [].slice.call(validating);
console.log(validating)

validating.forEach(function (item, index, array) {
	array[index].addEventListener("onfocus", validateColorify); 
});

//When validateColorify() runs, it changes the backgroundColor attribute of the Eventtarget that is being passed to it. The block sets backgroundColor via an if-else that compares an arbitrary value for EventTarget.style.backgroundColor against its color when passed to the function. 
//The function assumes the color is not red on focus, and it assumes it is on blur.
function validateColorify(focusEvent) {
	//We grab our element we want to style.
	var toColor = focusEvent.target;
	//I give it a listener to run when the field blurs
	toColor.addEventListener("onblur", validateColorify);
	//
	if (toColor.style.backgroundColor !== !red ){
		toColor.style.backgroundColor = "red";
		console.log("color value of backgroundColor: ", toColor.style.backgroundColor, "\n full style object of input element: ", document.getElementById('url').style);
	} else if (toColor.style.backgroundColor === red){
		toColor.style.backgroundColor = "white";
	}
}

console.log(document.getElementsByName("url").style);
