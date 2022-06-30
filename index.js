// initialize the variables from the DOM Element
const inputEl = document.getElementById("input-el");
const convertBtn = document.querySelector(".convert-btn");
const convertLength = document.getElementById('convert-length');
const convertVolume = document.getElementById('convert-volume');
const convertMass = document.getElementById('convert-mass');
const cardSection = document.getElementById('card-section');

// to hide the card section before the calculation
cardSection.style.display = 'none';

const meterToFeet = 3.28084;
const literToGallon = 0.264172;
const kiloToPound = 2.20462;

convertBtn.addEventListener('click', function()
{
    // convert the input value to integer
    const unit = parseInt(inputEl.value);

    // check the value is integer
    if (Number.isInteger(unit)) 
    {
        // Show the card content
        cardSection.style.display = 'flex'

        // Display the result
        convertLength.textContent = `${unit} meters = ${ convertToFeet(unit) } feet | ${unit} feet = ${ convertToMeter(unit) } meters`
        convertVolume.textContent = `${unit} liters = ${ convertToGallon(unit) } gallons | ${unit} gallons = ${ convertToLiter(unit) } liters`
        convertMass.textContent = `${unit} kilos = ${ convertToPound(unit) } pounds | ${unit} pounds = ${ convertToMeter(unit) } kilos`
    }
    else
    {
        alert("Please input a number")
        console.error("The input must be a number! !");
    }
    inputEl.value = ""
})

/*
    1 meter = 3.281 feet
    1 liter = 0.264 gallon
    1 kilogram = 2.204 pound
*/ 

function convertToFeet(meter)
{
    return (meter * meterToFeet).toFixed(3);
}

function convertToMeter(feet)
{
    return (feet / meterToFeet).toFixed(3);
}

function convertToGallon(liter)
{
    return (liter * literToGallon).toFixed(3);
}

function convertToLiter(gallon)
{
    return (gallon / literToGallon).toFixed(3);
}

function convertToPound(kilo)
{
    return (kilo * kiloToPound).toFixed(3);
}

function convertToKilo(pound)
{
    return (pound / kiloToPound).toFixed(3);
}
