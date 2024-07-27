const temperatureInput = document.getElementById("temperature-input");

//options
const selectionFrom = document.getElementById("temperature-selection-from");
const selectionTo = document.getElementById("temperature-selection-to");
//output-div
const divOutput = document.getElementById("results-div");
//submit
const submitButton = document.getElementById("submit");

function convertTemperature(){
    const temperature = parseFloat(temperatureInput.value);
    let result;
    //fahrenheit

    if(isNaN(temperature)){
        divOutput.textContent="Please enter a value temperature";
        return;
    }

    if(selectionFrom.value === selectionTo.value){
        divOutput.textContent = temperature.toFixed(2);
        return;
    }

    if(selectionFrom.value === "Fahrenheit" && selectionTo.value === "Celsius")
        result = (temperature -32) * (5/9);
    else if(selectionFrom.value === "Fahrenheit" && selectionTo.value === "Kelvin")
        result = (temperature -32) * (5/9) + 273.15;
    else if(selectionFrom.value === "Fahrenheit" && selectionTo.value === "Rankine")
        result = temperature + 459.67;

    //Celsius
    else if(selectionFrom.value === "Celsius" && selectionTo.value === "Fahrenheit")
        result = temperature * (9/5) + 32;
    else if(selectionFrom.value === "Celsius" && selectionTo.value === "Kelvin")
        result = temperature + 273.15;
    else if(selectionFrom.value === "Celsius" && selectionTo.value === "Rankine")
        result = (temperature + 273.15) * (9/5);
    
    //Kelvin
    else if(selectionFrom.value === "Kelvin" && selectionTo.value === "Fahrenheit")
        result = (temperature - 273.15) * (9/5) + 32;
    else if(selectionFrom.value === "Kelvin" && selectionTo.value === "Celsius")
        result = temperature - 273.15;
    else if(selectionFrom.value === "Kelvin" && selectionTo.value === "Rankine")
        result = temperature * (9/5);

    //Rankine
    else if(selectionFrom.value === "Rankine" && selectionTo.value === "Fahrenheit")
        result = temperature - 459.67;
    else if(selectionFrom.value === "Rankine" && selectionTo.value === "Celsius")
        result = (temperature - 491.67) * (5/9);
    else if(selectionFrom.value === "Rankine" && selectionTo.value === "Kelvin")
        result = temperature * (5/9);

    divOutput.textContent = result.toFixed(2);
}

submitButton.addEventListener('click', convertTemperature);
