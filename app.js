'use strict';

let button = document.querySelector('button');
let contacts = document.querySelector('.contacts');
let connection = document.querySelector('.connection');
let menu = document.querySelector('.menu-p');

menu.addEventListener('click', changing);
// button.addEventListener('click', changingButton);
contacts.addEventListener('click', changingContacts);
connection.addEventListener('click', function () {
    document.querySelector('.connection').classList.toggle('connection2');
});

function changing() {
    button.classList.toggle('nav-button2');
    button.classList.toggle('nav-button');
    if (document.querySelector('.menu-p').textContent === 'Меню') {
        document.querySelector('.container').style.marginTop = '60px';
        document.querySelector('.menu-p').textContent = 'Закрыть';
        document.querySelector('.background').style.height = '40px';
    } else {
        document.querySelector('.menu-p').textContent = 'Меню';
        document.querySelector('.container').style.marginTop = 0;
        document.querySelector('.background').style.height = 0;
    }
}

// не помню зачем делал эту функцию
// function changingButton() {
//     button.classList.toggle('nav-button');
// }

function changingContacts() {
    document.querySelector('.connection').classList.toggle('connection2');
}
