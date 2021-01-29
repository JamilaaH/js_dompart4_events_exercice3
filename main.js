//1
let titre = document.querySelector('h1');
let exo1 = () => {
    titre.setAttribute('class', "text-blue")
}
titre.addEventListener('mouseover', exo1)

//2
let titre3 = document.querySelector('h3');
let exo2 = () => {
    titre3.setAttribute('class', "text-error")
}

titre3.addEventListener('dblclick', exo2)

//3 
let myPara = document.querySelector('p');

let exo3 = () => {
    myPara.classList.toggle('text-style')
}

myPara.addEventListener("click", exo3)

// 4

let para2 = document.querySelectorAll('p')[1].children;

let mySpan = Array.from(para2);

mySpan.forEach(el => {
    el.addEventListener("click", ()=> {
        el.classList.toggle('bolder-red')
    })
});

//5


