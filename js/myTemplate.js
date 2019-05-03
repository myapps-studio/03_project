/* moustache */
'use strict';
var output = document.getElementById('output');
var cell1 = document.getElementById('carousel-cell1');
var cell2 = document.getElementById('carousel-cell2');
var cell3 = document.getElementById('carousel-cell3');
var cell4 = document.getElementById('carousel-cell4');
var cell5 = document.getElementById('carousel-cell5');

(function(){ 

	var myTemplate = document.getElementById('myTemplate').innerHTML;

	Mustache.parse(myTemplate);
	
	var carousel_cell1 = Mustache.render(myTemplate, CaruselCellData[0]);
	var carousel_cell2 = Mustache.render(myTemplate, CaruselCellData[1]);
	var carousel_cell3 = Mustache.render(myTemplate, CaruselCellData[2]);
	var carousel_cell4 = Mustache.render(myTemplate, CaruselCellData[3]);
	var carousel_cell5 = Mustache.render(myTemplate, CaruselCellData[4]);

	cell1.insertAdjacentHTML('beforeend', carousel_cell1);
	cell2.insertAdjacentHTML('beforeend', carousel_cell2);
	cell3.insertAdjacentHTML('beforeend', carousel_cell3);
	cell4.insertAdjacentHTML('beforeend', carousel_cell4);
	cell5.insertAdjacentHTML('beforeend', carousel_cell5);
	
})();
