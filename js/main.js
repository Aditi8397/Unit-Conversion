let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
	
	let meterToFeetVal = (baseValue * meterToFeet).toFixed(3)
	let feetToMeterVal = (baseValue / meterToFeet).toFixed(3)

	let literToGallonVal = (baseValue * literToGallon).toFixed(3)
	let gallonToLiterVal = (baseValue / literToGallon).toFixed(3)
	
	let kiloToPoundVal = (baseValue * kiloToPound).toFixed(3)
	let poundToKiloVal = (baseValue / kiloToPound).toFixed(3)

	
	lengthEl.textContent = `${baseValue} meters = ${meterToFeetVal} feet | ${baseValue} feet = ${feetToMeterVal} meters`
	
	volumeEl.textContent = `${baseValue} liters = ${literToGallonVal} gallons | ${baseValue} gallons = ${gallonToLiterVal} liters`
	
	massEl.textContent = `${baseValue} kilos = ${kiloToPoundVal} pounds | ${baseValue} pounds = ${poundToKiloVal} kilos`
})