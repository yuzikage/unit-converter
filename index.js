/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
// Basic unit converter logic. Connects to elements in the existing HTML.
window.addEventListener('DOMContentLoaded', () => {
	const input = document.querySelector('#input-el') || document.querySelector('input') || null;
	const convertBtn = document.querySelector('#convert-btn') || document.querySelector('button') || null;
	const lengthEl = document.querySelector('#length-el') || document.querySelector('.length') || null;
	const volumeEl = document.querySelector('#volume-el') || document.querySelector('.volume') || null;
	const massEl = document.querySelector('#mass-el') || document.querySelector('.mass') || null;

	function format(num) {
		return Number(num).toFixed(3);
	}

	function render(value) {
		const val = Number(value) || 0;

		// conversion factors
		const mToFt = 3.281;
		const lToGal = 0.264;
		const kgToLb = 2.204;

		// length
		const meters = val;
		const feet = val * mToFt;
		const feetToMeters = val / mToFt;
		if (lengthEl) {
			lengthEl.textContent = `${format(meters)} meters = ${format(feet)} feet | ${format(feet)} feet = ${format(feetToMeters)} meters`;
		}

		// volume
		const liters = val;
		const gallons = val * lToGal;
		const gallonsToLiters = val / lToGal;
		if (volumeEl) {
			volumeEl.textContent = `${format(liters)} liters = ${format(gallons)} gallons | ${format(gallons)} gallons = ${format(gallonsToLiters)} liters`;
		}

		// mass
		const kilos = val;
		const pounds = val * kgToLb;
		const poundsToKilos = val / kgToLb;
		if (massEl) {
			massEl.textContent = `${format(kilos)} kilos = ${format(pounds)} pounds | ${format(pounds)} pounds = ${format(poundsToKilos)} kilos`;
		}
	}

	// initial render
	if (input) render(input.value || 0);

	if (convertBtn && input) {
		convertBtn.addEventListener('click', () => render(input.value));
	} else if (input) {
		// fallback: live update on input
		input.addEventListener('input', () => render(input.value));
	}
});

