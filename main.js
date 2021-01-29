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
let clique = false
let exo3 = () => {
    if (!clique) {
            myPara.setAttribute('class', "text-style")
            clique = true
        } else{
            myPara.removeAttribute("class")
            clique =false
        }
} 

myPara.addEventListener("click", exo3)

// 4

let para2 = document.querySelectorAll('p')[1].children;


para2[0].addEventListener("click", () => {
    para2[0].setAttribute('class', "bolder-red")
});
para2[1].addEventListener("click", () => {
    para2[1].setAttribute('class', "bolder-red")
});
para2[2].addEventListener("click", () => {
    para2[2].setAttribute('class', "bolder-red")
});

// 5
let para3 = document.querySelectorAll('p')[2].children;

