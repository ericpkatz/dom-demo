//document - querySelector - at most get back one node
/*
const h1 = document.querySelector('h1:last-child');
const h2 = document.querySelector('h1:first-child');
h1.classList.add('red');
h1.classList.add('big');
h2.classList.add('red');
h2.classList.add('big');
*/

/*
const h1s = Array.from(document.getElementsByTagName('h1'));
h1s.forEach(function(h1){
  h1.classList.remove('red');
});
*/

function nicksGame(){

}
const $ = nicksGame;

console.log($ === jQuery);
console.log(window.$ === window.jQuery);

const uls = document.querySelectorAll('ul');
uls.forEach(function(ul){
  ul.classList.add('flex');
});

const things = uls[0];
const bazz = document.createElement('li');
bazz.innerHTML = 'bazz';
things.appendChild(bazz);

const users = uls[1];
const curly = document.createElement('li');
curly.innerHTML = 'curly';
users.appendChild(curly);

//const moe = document.getElementById('moe');
const moe = document.querySelector('#moe');
moe.parentNode.removeChild(moe);


