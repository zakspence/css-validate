var stateList = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY" ];

var loanType = ["Personal", "Commercial", "Real estate", "Mortgage" ];

//This function fills an element with children. Arg 1 is the id of the element to be filled, arg 2 is the type of element to be added, arg 3 is the data with which we fill the created element. Parameter 'data' is assumed to be an array.
var fillElement = function(eId, eType, data ) {
	
	var parent = document.getElementById(eId );
	
	for(var i= 0; i < data.length; i++ ){
		var now= data[i ];
		console.log(now );
		var appendage= document.createElement(eType );
		console.log(appendage );
		appendage.value= now
		appendage.text= now
		console.log(appendage.value, appendage.text );
		parent.appendChild(appendage );
		console.log(parent.childNodes );
	}
}


fillElement("state-selector", "OPTION", stateList );
fillElement("loan-selector", "OPTION", loanType );
