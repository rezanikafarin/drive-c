var parent = document.querySelector('.box');
var elem = document.createElement('div');
var text =  document.createTextNode('Reza');
elem.style.backgroundColor = 'green';
elem.style.width = '300px';
elem.style.padding = '10px';
elem.appendChild(text);
parent.appendChild(elem);