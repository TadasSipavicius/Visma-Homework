let pizzas = [];
let toppingsArray=[];
let photosArray = [];

const addPizza = (ev) =>{
    
    ev.preventDefault();
    let pizza = {
        name: document.getElementById("pizza-name").value,
        price: parseFloat(document.getElementById("pizza-price").value).toFixed(2),
        heat: parseInt(document.getElementById("pizza-heat").value),
        toppings: toppingsArray,
        photos: photosArray
    }
    validationWithAllEdgeCases(pizza);
    var displayTopping = document.getElementById("added-topping");
    displayTopping.innerHTML = "";
}

const validationWithAllEdgeCases = (pizza) =>{
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
    else if(photosArray.length < 3 && photosArray.length > 0){
        var validationPhotos = document.getElementById("photo-validation");
        validationPhotos.innerHTML = " * You must declare at least 3 photos OR none";
    }
    else{
        
        resetValidation();
        pizzas.push(pizza);
        document.querySelector('form').reset();
        
        sessionStorage.setItem('MyPizzaMenu', JSON.stringify(pizzas) );
        var session = JSON.parse(sessionStorage.getItem("MyPizzaMenu"))
        showPizzaTable(session);
        toppingsArray = [];
        photosArray = [];
    }
}

const resetValidation = () => {
    var validationName = document.getElementById("name-validation");
    validationName.innerHTML = "";
    var validationPrice = document.getElementById("price-validation");
    validationPrice.innerHTML = "";
    var validationHeat = document.getElementById("heat-validation");
    validationHeat.innerHTML = "";
    var validationPhotos = document.getElementById("photo-validation");
    validationPhotos.innerHTML = "";

}

const checkUniquePizzaName = (newPizzaName) => {

    if(pizzas.length === 0){
        return false;
    }

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

const addAndRemovePhotos = (checkbox) => {

    if(checkbox.checked){

        switch(parseInt(checkbox.id)){
            case 1:
                return photosArray.push("Pizza.svg");
            case 2:
                return photosArray.push("pizza2.svg");
            case 3:
                return photosArray.push("pizza3.svg");
            case 4:
                return photosArray.push("pizza4.svg");
            case 5:
                return photosArray.push("pizza5.svg");
            case 6:
                return photosArray.push("pizza6.svg");
            case 7:
                return photosArray.push("pizza7.svg");
            case 8:
                return photosArray.push("pizza8.svg");
            case 9:
                return photosArray.push("pizza9.svg");
            case 10:
                return photosArray.push("pizza10.svg");
            default:
                return;
        }
    }
    if(!checkbox.checked){

        switch(parseInt(checkbox.id)){
            case 1:
                var index = photosArray.indexOf("Pizza.svg");
                return removePhoto(index);
            case 2:
                var index = photosArray.indexOf("pizza2.svg");
                return removePhoto(index);
            case 3:
                var index = photosArray.indexOf("pizza3.svg");
                return removePhoto(index);
            case 4:
                var index = photosArray.indexOf("pizza4.svg");
                return removePhoto(index);
            case 5:
                var index = photosArray.indexOf("pizza5.svg");
                return removePhoto(index);
            case 6:
                var index = photosArray.indexOf("pizza6.svg");
                return removePhoto(index);
            case 7:
                var index = photosArray.indexOf("pizza7.svg");
                return removePhoto(index);
            case 8:
                var index = photosArray.indexOf("pizza8.svg");
                return removePhoto(index);
            case 9:
                var index = photosArray.indexOf("pizza9.svg");
                return removePhoto(index);
            case 10:
                var index = photosArray.indexOf("pizza10.svg");
                return removePhoto(index);
            default:
                return;
        }

    }
}

const removePhoto = (index) => {
    if (index !== -1) {
        photosArray.splice(index, 1);
    }
}

const showPizzaHeader = (table, row) => {

    var th_1 = document.createElement('th');
    var th_2 = document.createElement('th');
    var th_3 = document.createElement('th');
    var th_4 = document.createElement('th');
    var th_5 = document.createElement('th');
    var text_1 = document.createTextNode("Name");
    var text_2 = document.createTextNode("Price");
    var text_3 = document.createElement("img");
    text_3.src = "./Images/chilli.svg";
    var text_4 = document.createTextNode('Toppings');
    var text_5 = document.createTextNode('Photo');

    th_1.appendChild(text_1);
    th_2.appendChild(text_2);
    th_3.appendChild(text_3);
    th_4.appendChild(text_4);
    th_5.appendChild(text_5);

    row.appendChild(th_1);
    row.appendChild(th_2);
    row.appendChild(th_3);
    row.appendChild(th_4);
    row.appendChild(th_5);


    table.appendChild(row);
}
const showPizzaTable = (session) => {

    var container = document.getElementById("pizza-menu");
    var table = document.getElementById("menu-table");
    table.innerHTML = "";
    var row = document.createElement("tr");
    showPizzaHeader(table, row);


    for(let i = 0; i < session.length; i++){
        var row2 = document.createElement("tr");
        row2.id = 11 + i;

        var button = document.createElement("button");
        button.innerHTML = "Remove Item";
        button.id = 21 + i;
        button.addEventListener("click", function(){
            deleteItem(button.id);
        }, false);
        for(let j = 0; j < 5; j++){
            var cell = document.createElement("td");
            if(j == 0){
                var cellText = document.createTextNode(session[i].name);
                cell.appendChild(cellText);
                row2.appendChild(cell);
            }
            if(j == 1){
                var cellText = document.createTextNode(session[i].price);
                cell.appendChild(cellText);
                row2.appendChild(cell);
            }
            if(j == 2){
                var cellText = document.createTextNode(session[i].heat);
                cell.appendChild(cellText);
                row2.appendChild(cell);
            }
            if(j == 3){
                var cellText = document.createTextNode(session[i].toppings);
                cell.appendChild(cellText);
                row2.appendChild(cell);
            }
            if(j == 4){
                displayPhotos(session[i], cell);
                row2.appendChild(cell);
            }
        }
        table.appendChild(row2);
        table.appendChild(button);
    }
    container.appendChild(table);
}

const deleteItem = (rowid) =>{
   // console.log(row2);
    //console.log(table.rows);
   // var index = parseInt(buttonid - 10);
   // console.log(index);
   // console.log(table.rows[index])
    var something = document.getElementById((parseInt(rowid) - 10));
    console.log(something);
    something.remove();
}
const displayPhotos = (session, cell) =>{

    for(let i = 0; i < session.photos.length; i++){
        var img = document.createElement("img");
        img.src = "./Images/" + `${session.photos[i]}`
        cell.appendChild(img);
    }
}

const removeItem = (session) =>{
    for(let i = 0; i < session.lenght; i++){

    }
}
document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('save-button').addEventListener('click', addPizza);
    });