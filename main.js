let pizzas = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addPizza = (ev) =>{
    
    ev.preventDefault();  //to stop the form submitting
    let pizza = {
        name: document.getElementById("pizza-name").value,
        price: parseFloat(document.getElementById("pizza-price").value).toFixed(2),
        heat: parseInt(document.getElementById("pizza-heat").value),
        toppings: document.getElementById("pizza-toppings").value
    }
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
    }
    else if((pizza.heat < 1) || (pizza.heat > 3)){
        var validationHeat = document.getElementById("heat-validation");
        validationHeat.innerHTML = " * Heat Can't be lower than 1 and higher than 3";
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
document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('save-button').addEventListener('click', addPizza);
    });