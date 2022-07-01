'use strict';

document.querySelector('.menu__burger').addEventListener('click', function (e) {
   e.preventDefault();

   this.classList.toggle('is-active');
});

