/* moustache */
'use strict';
/* var output = document.getElementById('output'); */

var cells = document.getElementById('CaruselInsert');

(function(){ 

	var myTemplate = document.getElementById('myTemplate').innerHTML;

	Mustache.parse(myTemplate);
	
	var Counter = CaruselCellData.length;

	for(var i = 0; i < Counter; i++){
		var cellsRend = Mustache.render(myTemplate, CaruselCellData[i]);
		cells.insertAdjacentHTML('beforeend', cellsRend);
	}
})();
