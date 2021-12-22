const groentevak = document.getElementById ('groente')

const fruitvak = document.getElementById ('fruit')

function ZetInFruitLa(fruit){
    console.log("erin " + fruit);

    const nieuwElement1 = document.createElement('h2');
    nieuwElement1.innerHTML = fruit;
    fruitvak.appendChild(nieuwElement1);
    nieuwElement1.className = 'rood'
}

function ZetInGroenteLa(groente){
    console.log("erin " + groente);

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = groente;
    groentevak.appendChild(nieuwElement);
    nieuwElement.className = 'rood'
}

function haalweg(){
    console.log("hoi");
    
}
