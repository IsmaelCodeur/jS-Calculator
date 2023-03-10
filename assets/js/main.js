//RECUPERER LES ELEMENTS DU DOM:
let display = document.querySelector("#display");
let buttons = document.querySelectorAll(".buttons .button");
let result = document.querySelector("#result");
let reset = document.querySelector("#reset");
let del = document.querySelector("#delete");


//AFFICHER LES ENTREES DE L'UTILISATEUR:
for(let button of buttons){
    button.addEventListener('click',(Event)=>{
       display.value += Event.target.innerHTML;
       al
    });
    
}

//AFFICHER LE RESULTAT DES OPERATIONS:
result.addEventListener('click', ()=>{
    display.value = eval(display.value);
})

// EFFACER L'ECRAN LORSQU'ON CLIQUE SUR LE BOUTTON AC:
reset.addEventListener('click', ()=>{
    display.value = '';
})

// SUPPRIMER LE DERNIER NOMBRE SAISI AVEC LE BOUTON DEL:
del.addEventListener('click', ()=>{
    let currentContent = display.value;
    display.value = currentContent.slice(0, -1);
})
