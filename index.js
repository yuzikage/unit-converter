/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Get references to DOM elements
const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("result");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

const resultEl = document.getElementById("result");

// Add event listener to the convert button
convertBtn.addEventListener("click", function() {
    const inputValue = parseFloat(inputEl.value);

    // Length conversion
    const metersToFeet = (inputValue * 3.281).toFixed(3);
    const feetToMeters = (inputValue / 3.281).toFixed(3);
    lengthEl.textContent = `${inputValue} meters = ${metersToFeet} feet | ${inputValue} feet = ${feetToMeters} meters`;

    // Volume conversion
    const litersToGallons = (inputValue * 0.264).toFixed(3);
    const gallonsToLiters = (inputValue / 0.264).toFixed(3);
    volumeEl.textContent = `${inputValue} liters = ${litersToGallons} gallons | ${inputValue} gallons = ${gallonsToLiters} liters`;

    // Mass conversion
    const kilogramsToPounds = (inputValue * 2.204).toFixed(3);
    const poundsToKilograms = (inputValue / 2.204).toFixed(3);
    massEl.textContent = `${inputValue} kilograms = ${kilogramsToPounds} pounds | ${inputValue} pounds = ${poundsToKilograms} kilograms`;
});