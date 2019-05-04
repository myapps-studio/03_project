/* moustache */
'use strict';
 var output = document.getElementById('output');

var cells = document.getElementById('CaruselInsert');

(function(){ 

	var myTemplate = document.getElementById('myTemplate').innerHTML;

	Mustache.parse(myTemplate);
	
	var Counter = CaruselCellData.length;
	
	for(var i = 0; i < Counter; i++){
		
		/* Render cell */
		var cellsRend = Mustache.render(myTemplate, CaruselCellData[i]);
		cells.insertAdjacentHTML('beforeend', cellsRend);

		/* Generate and add id */
		var NumberToStringAAAAA = String(i + 1);
		var FullTxt =  'carousel-cell' + NumberToStringAAAAA

	/*	output.innerHTML = FullTxt; */

		var Element = document.querySelectorAll('.carousel-cell');
		Element[i].id = 'carousel-cell-' + FullTxt; 
	}
})();


