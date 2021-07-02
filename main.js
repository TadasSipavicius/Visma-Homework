let pizzas = [];
let toppingsArray=[];

const addPizza = (ev) =>{
    
    ev.preventDefault();
    let pizza = {
        name: document.getElementById("pizza-name").value,
        price: parseFloat(document.getElementById("pizza-price").value).toFixed(2),
        heat: parseInt(document.getElementById("pizza-heat").value),
        toppings: toppingsArray
    }
    validationWithAllEdgeCases(pizza);
    var displayTopping = document.getElementById("added-topping");
    displayTopping.innerHTML = "";
}

const validationWithAllEdgeCases = (pizza) =>{
    console.log(pizza.price);
    if(pizza.name === ""){
        var validationName = document.getElementById("name-validation");
        validationName.innerHTML = " * You must type a Pizza Name" ;
    }
    else if(checkUniquePizzaName(pizza.name)){
        var validationName = document.getElementById("name-validation");
        validationName.innerHTML = " * This pizza name already exists" ;
    }
    else if(pizza.price < 0){
        var validationPrice = document.getElementById("price-validation");
        validationPrice.innerHTML = " * Price must higher than 0";

        var validationName = document.getElementById("name-validation");
        validationName.innerHTML = "" ;
    }
    else if(pizza.price === "NaN"){
        var validationPrice = document.getElementById("price-validation");
        validationPrice.innerHTML = " * You need to declare a price";

        var validationName = document.getElementById("name-validation");
        validationName.innerHTML = "" ;
    }
    else if((pizza.heat < 1) || (pizza.heat > 3)){
        var validationHeat = document.getElementById("heat-validation");
        validationHeat.innerHTML = " * Heat Can't be lower than 1 and higher than 3";

        var validationName = document.getElementById("name-validation");
        validationName.innerHTML = "" ;
        var validationPrice = document.getElementById("price-validation");
        validationPrice.innerHTML = "";
    }
    else if(pizza.toppings.length < 2){
       var validationToppings = document.getElementById("toppings-validation");
       validationToppings.innerHTML = " * You must declare at least 2 toppings";
       resetValidation();
    }
    else{
        
        resetValidation();
        pizzas.push(pizza);
        document.querySelector('form').reset();
        let pre = document.querySelector('#pizza-menu');
        pre.textContent = '\n' + JSON.stringify(pizzas, '\t', 2);
    
        sessionStorage.setItem('MyPizzaMenu', JSON.stringify(pizzas) );
        checkUniquePizzaName();
    }
}

const resetValidation = () => {
    var validationName = document.getElementById("name-validation");
    validationName.innerHTML = "";
    var validationPrice = document.getElementById("price-validation");
    validationPrice.innerHTML = "";
    var validationHeat = document.getElementById("heat-validation");
    validationHeat.innerHTML = "";

}

const checkUniquePizzaName = (newPizzaName) => {

    for(let i = 0; i < pizzas.length; i++){
        if(pizzas[i].name === newPizzaName){
            return true;
        }
    }
    return false;
}

const addToppings = () => {

    var pizzaTopping = document.getElementById("pizza-toppings").value;
    if(pizzaTopping !== ""){
        toppingsArray.push(pizzaTopping);
        console.log(toppingsArray);
        document.getElementById('pizza-toppings').value = "";
        var displayTopping = document.getElementById("added-topping");
        displayTopping.innerHTML = "Added " + `${pizzaTopping}` + " topping";
        var validationTopping = document.getElementById("toppings-validation");
        validationTopping.innerHTML = "";
    }
    else{
        var validationTopping = document.getElementById("toppings-validation");
        validationTopping.innerHTML = " * Topping can't be empty";
    }

}

document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('save-button').addEventListener('click', addPizza);
    });